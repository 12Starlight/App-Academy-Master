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

FactoryBot.define do
  factory :task do
    
  end
end
