# == Schema Information
#
# Table name: developers
#
#  id                :bigint(8)        not null, primary key
#  student_pod_id    :integer
#  student_circle_id :integer
#  name              :string           not null
#  created_at        :datetime         not null
#  updated_at        :datetime         not null
#

class Developer < ApplicationRecord
  
end