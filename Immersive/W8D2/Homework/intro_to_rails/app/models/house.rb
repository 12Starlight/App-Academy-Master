class House < ApplicationRecord
  validates :address, presence: true

  # Remember, has_many is just a method where the first argument is the name
  # of the association, and the second argument is the options hash.

  has_many :residents,
    class_name: :Person,
    primary_key: :id,
    foreign_key: :house_id
end 