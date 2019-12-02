# == Schema Information
#
# Table name: tasks
#
#  id         :bigint           not null, primary key
#  body       :text             not null
#  completed  :boolean          default(FALSE), not null
#  list_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

require 'rails_helper'

RSpec.describe Task, type: :model do
  it 'should validate that :list cannot be empty/falsy' do 
    should validate_presence_of(:list).with_message(:required)
  end
  it { should validate_presence_of(:body) }
end
