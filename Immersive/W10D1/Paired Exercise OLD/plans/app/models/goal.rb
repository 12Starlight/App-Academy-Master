# == Schema Information
#
# Table name: goals
#
#  id          :bigint           not null, primary key
#  date        :date             not null
#  description :text             not null
#  completed   :boolean          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  user_id     :integer          not null
#

class Goal < ApplicationRecord
    has_many :comments
    belongs_to :user
end
