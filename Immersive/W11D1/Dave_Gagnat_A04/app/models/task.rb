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

class Task < ApplicationRecord
  validates :body, presence: true 
  belongs_to :list 
end
