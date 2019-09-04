# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  password_digest :string           not null
#  session_token   :string           not null
#  username        :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

require 'rails_helper'
require 'shoulda/matchers'

RSpec.describe User, type: :model do 
  
  describe "validations" do 
    it { should validate_presence_of(:username) }
    it { should validate_length_of(:password).is_at_least(6) }
  end
  
  describe "associations" do 
    it { should have_many(:goals) }
  end

  describe "uniqueness" do 
    before(:each) do 
      create(:user)      
    end

    it { should validate_uniqueness_of(:username) }
  end



end 
