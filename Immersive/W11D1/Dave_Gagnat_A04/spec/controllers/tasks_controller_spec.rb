require 'rails_helper'

RSpec.describe TasksController, type: :controller do
  create_jill_with_list
  let(:jack_bruce) { User.create!(username: 'jack_bruce', password: 'abcdef') }
  let(:jack_task) { List.create!(name: 'chores', description: 'gotta love em', user: jack_bruce)}

  before(:each) do
    allow_message_expectations_on_nil
  end

  describe 'POST #create' do
    before do
      allow(controller).to receive(:current_user) { jack_bruce }
    end
    
    # NOTE: for post requests, the list id should NOT be sent in the url,
    # but rather in the body of the request
    it { should route(:post, '/tasks').to(action: :create) }

    context 'when logged in as the list\'s owner' do
      context 'with invalid params' do
        it 'does not create the task and redirects to the list show page' do
          post :create, params: { task: { list_id: jack_task.id } }
          expect(response).to redirect_to(list_url(jack_task))
          expect(Task.exists?(body: 'vacuum')).to be false
        end
      end

      context 'with valid params' do
        it 'creates the task and redirects to the list show page' do
          post :create, params: { task: { list_id: jack_task.id, body: 'vacuum' } }
          expect(response).to redirect_to(list_url(jack_task))
          expect(Task.exists?(body: 'vacuum')).to be true
        end
      end
    end

    context 'when logged in as a different user' do
      it 'does not allow creation of the task' do
        begin
          post :create, params: { task: { list_id: jill_list.id, body: 'eat potatoes' } }
        rescue ActiveRecord::RecordNotFound
        end

        expect(Task.exists?).to be false
      end
    end

  end

  describe 'DELETE #destroy' do
    let(:first_task) { Task.create!({ list_id: jill_list.id, body: 'eat potatoes' }) }

    context 'when logged in as the list\'s owner' do
      before do
        allow(controller).to receive(:current_user) { jill }
      end

      it 'removes the task and redirects back to the list show' do
        delete :destroy, params: { id: first_task.id }
        expect(response).to redirect_to(list_url(jill_list))
        expect(Task.exists?(first_task.id)).to be false
      end
    end

    context 'when logged in as a different user' do
      before do
        allow(controller).to receive(:current_user) { jack_bruce }
      end

      it 'does not delete the task' do
        begin
          delete :destroy, params: { id: first_task.id }
        rescue ActiveRecord::RecordNotFound
        end

        expect(Task.exists?(first_task.id)).to be true
      end
    end
  end
end
