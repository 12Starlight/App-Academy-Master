class User < ApplicationRecord
  # Validations
  validates :email, :session_token, uniqueness: true 
  validates :password, length: { minimum: 6, allow_nil: true }
  validates :email, :session_token, :password_digest, presence: true 

  # Readers
  attr_reader :password 

  # Callbacks/Helper Methods
  after_initialize :ensure_session_token 

  # Associations


  # Build Methods
  def generate_session_token
    token = SecureRandom.urlsafe_base64(16)
  end

  def reset_session_token!
    self.session_token = generate_session_token
    self.save!
    self.session_token
  end

  def ensure_session_token
    self.session_token ||= generate_session_token
  end 

  def password=(password)
    @password = password 
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end 

  def self.find_by_credentials(email, password)
    user = User.find_by(email: email)
    user && user.is_password?(password) ? user : nil 
  end
end 