# == Schema Information
#
# Table name: goals
#
#  id          :bigint           not null, primary key
#  date        :date             not null
#  description :text             not null
#  completed   :boolean          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  user_id     :integer          not null
#

require 'rails_helper'

RSpec.describe Goal, type: :model do
  
end
