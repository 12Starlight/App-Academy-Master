# == Schema Information
#
# Table name: boards
#
#  id         :bigint(8)        not null, primary key
#  company_id :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Board < ApplicationRecord

end
