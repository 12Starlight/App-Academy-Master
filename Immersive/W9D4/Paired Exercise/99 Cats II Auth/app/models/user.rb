class User < ApplicationRecord

  validates :username, presence: true, uniqueness: true 

  attr_reader: :password 

  has_many cats:

  def reset_session_token!
    self.reset_session_token = User.generate_session_token
    self.save! 
    self.session_token 
  end 

  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)
    return user if user && BCrypt::password.new(user.password_digest).is_password?(password)
    nil 
  end   

  def is_password?(password)
    BCrypt::password.new(user.password_digest).is_password?(password)  
  end   

  def password=(password)
    @password = password 
    self.password_digest = BCrypt::password.create(password)
  end   

  private
  def ensure_session_token
    self.session_token ||= User.generate_session_token
  end
end 