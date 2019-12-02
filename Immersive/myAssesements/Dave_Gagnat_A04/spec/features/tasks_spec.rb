require 'rails_helper'

feature 'Adding Tasks (hint: make sure your capitalization is exact!)', type: :feature do
  before :each do
    register_as_jack_bruce
  end

  it 'has an add Task form on the list show page' do
    make_list
    expect(page).to have_content 'Add Task'
  end

  it 'shows the list show page on submit' do
    make_list('chores')
    fill_in 'Task', with: 'Clean Room'
    click_button 'Add Task'
    expect(page).to have_content 'chores'
  end

  it 'adds the Task to the list on clicking the submit button' do
    make_list
    fill_in 'Task', with: 'Clean Room'
    click_button 'Add Task'
    expect(page).to have_content 'Clean Room'
  end
end

feature 'Deleting tasks' do
  before :each do
    register_as_jack_bruce
    make_list
    add_task
  end

  it 'displays a remove button next to each task' do
    expect(page).to have_button 'Remove Task'
  end

  it 'shows the list show page on click' do
    click_button 'Remove Task'
    expect(current_path).to eq(list_path(List.last))
  end

  it 'removes the Task on click' do
    click_button 'Remove Task'
    expect(page).to_not have_content 'be awesome'
  end
end
