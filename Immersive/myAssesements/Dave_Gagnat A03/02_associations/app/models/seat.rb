# == Schema Information
#
# Table name: seats
#
#  id           :bigint           not null, primary key
#  stadium_id   :integer          not null
#  row          :integer          not null
#  chair_number :integer          not null
#  owner_id     :integer
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#

class Seat < ApplicationRecord
  belongs_to :stadium,
    class_name: :Stadium,
    primary_key: :id,
    foreign_key: :stadium_id
    
  belongs_to :owner,
    class_name: :Fan,
    primary_key: :id,
    foreign_key: :owner_id    
end
