# == Schema Information
#
# Table name: comments
#
#  id         :bigint           not null, primary key
#  user_id    :integer          not null
#  body       :text             not null
#  goal_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

require 'rails_helper'

RSpec.describe Comment, type: :model do
  
end
