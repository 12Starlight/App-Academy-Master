# == Schema Information
#
# Table name: watch_lists
#
#  id         :bigint(8)        not null, primary key
#  name       :string
#  user_id    :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class WatchList < ApplicationRecord
  
end