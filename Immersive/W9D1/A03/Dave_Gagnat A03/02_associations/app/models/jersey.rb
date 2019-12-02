# == Schema Information
#
# Table name: jerseys
#
#  id         :bigint           not null, primary key
#  color      :string
#  player_id  :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Jersey < ApplicationRecord
  belongs_to :player,
    class_name: :Player,
    primary_key: :id,
    foreign_key: :player_id  
end
