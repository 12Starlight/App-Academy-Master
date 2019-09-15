require 'rails_helper'

feature 'Creating a list (hint: make sure your capitalization is exact!)', type: :feature do
  context 'when logged in' do
    before :each do
      register_as_jack_bruce
      visit new_list_url
    end

    it 'takes a name and a description' do
      expect(page).to have_content 'Name'
      expect(page).to have_content 'Description'
    end

    context 'on failed save' do
      before :each do
        make_list('', 'Rad things task')
      end

      it 'has a pre-filled form (with the data previously input)' do
        expect(find_field('Description').value).to eq('Rad things task')
      end

      it 'still allows for a successful save' do
        fill_in 'Name', with: 'My First List'
        click_button 'Create New List'
        expect(page).to have_content 'My First List'
      end
    end
  end
end

feature 'Seeing all lists' do
  context 'when logged in' do
    before :each do
      register_as_jack_bruce
      make_list('My First List')
      make_list('My Second List')
      visit lists_path
    end

    it 'shows all the lists for the current user' do
      expect(page).to have_content 'My First List'
      expect(page).to have_content 'My Second List'
    end

    it 'links to each of the lists with the list names' do
      click_link 'My First List'
      expect(page).to have_content 'My First List'
      expect(page).to_not have_content('My Second List')
    end
  end

  context 'when signed in as another user' do
    before :each do
      register('jack_bruce')
      click_button 'Sign Out'
      register('goodbye_world')
      make_list('Goodbye cruel world')
      click_button 'Sign Out'
      sign_in('jack_bruce')
    end

    it 'does not show others lists' do
      visit lists_path
      expect(page).not_to have_content('Goodbye cruel world')
    end
  end
end

feature 'Showing a list' do
  context 'when logged in' do
    before :each do
      register('jack_bruce')
      make_list('Hello, World!', 'Rad things to do.')
      visit lists_path
      click_link 'Hello, World!'
    end

    it 'displays the list name' do
      expect(page).to have_content 'Hello, World!'
    end

    it 'displays the list description' do
      expect(page).to have_content 'Rad things to do.'
    end
  end
end

feature 'Editing a list' do
  before :each do
    register_as_jack_bruce
    make_list('This is a name', 'This is a description')
    visit lists_path
    click_link 'This is a name'
  end

  it 'has a link on the show page to edit a list' do
    expect(page).to have_content 'Edit List'
  end

  it 'shows a form to edit the list' do
    click_link 'Edit List'
    expect(page).to have_content 'Name'
    expect(page).to have_content 'Description'
  end

  it 'has all the data pre-filled' do
    click_link 'Edit List'
    expect(find_field('Name').value).to eq('This is a name')
    expect(find_field('Description').value).to eq('This is a description')
  end

  context 'on successful update' do
    let!(:show_page) { current_path }

    before :each do
      click_link 'Edit List'
    end

    it 'redirects to the list show page' do
      fill_in 'Name', with: 'A new name'
      click_button 'Update List'
      expect(page).to have_content 'A new name'

      expect(current_path).to eq(show_page)
    end
  end

  context 'on a failed update' do
    let!(:show_page) { current_path }

    before :each do
      click_link 'Edit List'
    end

    it 'returns to the edit page' do
      fill_in 'Name', with: ''
      click_button 'Update List'

      # failed; should be able to try again
      fill_in 'Name', with: 'Ginger Baker'
      click_button 'Update List'

      expect(current_path).to eq(show_page)
      expect(page).to have_content('Ginger Baker')
    end

    it 'preserves the attempted updated data' do
      fill_in 'Name', with: ''
      click_button 'Update List'

      expect(find_field('Name').value).to eq('')
    end
  end
end
