# == Schema Information
#
# Table name: circles
#
#  id               :bigint(8)        not null, primary key
#  circle_leader_id :integer          not null
#  pod_id           :integer          not null
#  created_at       :datetime         not null
#  updated_at       :datetime         not null
#

class Circle < ApplicationRecord

end
