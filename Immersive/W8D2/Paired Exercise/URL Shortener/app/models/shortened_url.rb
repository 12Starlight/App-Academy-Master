# == Schema Information
#
# Table name: shortened_urls
#
#  id         :bigint           not null, primary key
#  short_url  :string           not null
#  long_url   :string           not null
#  user_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class ShortenedUrl < ApplicationRecord 
    validates :user_id, :long_url, uniqueness: true, presence: true
    validates :short_url, presence: true 

    belongs_to :user,
    class_name: :User,
    foreign_key: :user_id,
    primary_key: :id 
    
    def self.random_code
        loop do 
            short_url = SecureRandom::urlsafe_base64 
            return short_url unless ShortenedUrl.exists?(short_url: short_url)
        end
    end 
end
