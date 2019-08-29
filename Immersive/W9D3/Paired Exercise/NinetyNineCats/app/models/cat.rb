require 'date'


# == Schema Information
#
# Table name: cats
#
#  id          :bigint           not null, primary key
#  birth_date  :date             not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  color       :string           not null
#  name        :string           not null
#  sex         :string(1)        not null
#  description :text             not null
#

class Cat < ApplicationRecord
  include ActionView::Helpers::DateHelper # found module (at top of the doc page)
  COLOR_ARRAY =  %w(black white brown orange beige)

  validates :color, inclusion: COLOR_ARRAY
  validates :sex, inclusion: %w(M F)


  def age
    time_ago_in_words(birth_date) # -> today - birthday
  end
end
