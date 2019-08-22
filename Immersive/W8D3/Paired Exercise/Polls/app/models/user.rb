# == Schema Information
#
# Table name: users
#
#  id         :bigint           not null, primary key
#  user_name  :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class User < ApplicationRecord

  
  validates :user_name, uniqueness: true, presence: true




   has_many :polls, 
    class_name: :Poll,
    primary_key: :id, 
    foreign_key: :author_id
end
