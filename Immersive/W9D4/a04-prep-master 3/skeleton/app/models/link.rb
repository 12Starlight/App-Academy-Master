# == Schema Information
#
# Table name: links
#
#  id         :bigint           not null, primary key
#  title      :string           not null
#  url        :string           not null
#  user_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Link < ApplicationRecord
  validates :title, :url, presence: true
  belongs_to :user 
  has_many :comments
end
