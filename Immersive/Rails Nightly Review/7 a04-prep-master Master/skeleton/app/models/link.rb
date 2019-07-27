class Link < ApplicationRecord
  validates :title, :url, presence: true

  belongs_to :user,
    class_name: :User,
    primary_key: :id,
    foreign_key: :user_id 

  has_many :comments,
    class_name: :Comment,
    primary_key: :id, 
    foreign_key: :link_id
end 