# == Schema Information
#
# Table name: lists
#
#  id          :bigint           not null, primary key
#  name        :string           not null
#  description :text             not null
#  user_id     :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

require 'rails_helper'

RSpec.describe List, type: :model do
  it { should validate_presence_of(:name) }
  it { should validate_presence_of(:description) }
  it 'should validate that :user cannot be empty/falsy' do 
    should validate_presence_of(:user).with_message(:required)
  end
  it { should have_many(:tasks) }
  it { should belong_to(:user) }
end
