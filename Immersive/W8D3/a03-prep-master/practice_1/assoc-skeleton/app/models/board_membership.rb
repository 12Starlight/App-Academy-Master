# == Schema Information
#
# Table name: board_memberships
#
#  id         :bigint(8)        not null, primary key
#  member_id  :integer
#  board_id   :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class BoardMembership < ApplicationRecord
  
end

