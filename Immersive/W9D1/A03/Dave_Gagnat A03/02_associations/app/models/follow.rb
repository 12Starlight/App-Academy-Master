# == Schema Information
#
# Table name: follows
#
#  id         :bigint           not null, primary key
#  player_id  :integer          not null
#  fan_id     :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Follow < ApplicationRecord
  belongs_to :player,
    class_name: :Player,
    primary_key: :id,
    foreign_key: :player_id  

  belongs_to :fan,
    class_name: :Fan,
    primary_key: :id,
    foreign_key: :fan_id    
end
