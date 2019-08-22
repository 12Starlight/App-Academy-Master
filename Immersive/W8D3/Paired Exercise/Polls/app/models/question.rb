# == Schema Information
#
# Table name: questions
#
#  id      :bigint           not null, primary key
#  poll_id :integer          not null
#  body    :text             not null
#

class Question < ApplicationRecord
  
end
