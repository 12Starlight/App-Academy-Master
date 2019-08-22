# == Schema Information
#
# Table name: polls
#
#  id         :bigint           not null, primary key
#  title      :string           not null
#  author_id  :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Poll < ApplicationRecord
  validates :title, uniqueness: true, presence: true
  validates :author_id, presence: true
  


  belongs_to :author, 
    class_name: :User,
    primary_key: :id, 
    foreign_key: :author_id
end
