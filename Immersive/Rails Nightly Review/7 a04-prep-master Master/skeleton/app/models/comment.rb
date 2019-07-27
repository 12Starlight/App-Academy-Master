class Comment < ApplicationRecord
  validates :body, presence: true 

  belongs_to :user,
    class_name: :User,
    primary_key: :id,
    foreign_key: :user_id

  belongs_to :link,
    class_name: :Link,
    primary_key: :id,
    foreign_key: :link_id
end 