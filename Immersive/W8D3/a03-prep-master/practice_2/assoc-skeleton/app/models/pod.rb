# == Schema Information
#
# Table name: pods
#
#  id              :bigint(8)        not null, primary key
#  pod_leader_id   :integer          not null
#  name            :string           not null
#  coolness_rating :integer
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class Pod < ApplicationRecord
  
end
