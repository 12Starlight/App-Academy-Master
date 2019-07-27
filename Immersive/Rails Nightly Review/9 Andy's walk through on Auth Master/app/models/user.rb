class User < ApplicationRecord
  validates :password_digest, presence: true
  validates :username, :session_token, presence: true, uniqueness: true
  validates :password, length: { minimum: 6 }

  after_initialize :ensure_session_token
  def password
    @password
  end
  # attr_reader :password

  def password=(password)
    # validate it somehow?
    @password = password
    # create a digest from the password (BCrypt)
    self.password_digest = BCrypt::Password.create(password)
    # store DIGEST it in db
    # not PASSWORD
  end

  def ensure_session_token
    self.session_token ||= SecureRandom::urlsafe_base64
  end

  def reset_session_token!
    self.session_token = SecureRandom::urlsafe_base64
    self.save!
    self.session_token
  end

  def self.find_by_credentials(username, password)
    # verify that the username exists (is a user)
    user = User.find_by(username: username)
    return nil if !user
    # the user is real
    # verify that the provided password is correct
    password_digest = user.password_digest
    # is this the same as the provided password?
    # use BCrypt!
    bcrypt_password_instance = BCrypt::Password.new(password_digest)
    is_the_right_password = bcrypt_password_instance.is_password?(password)

    return nil unless is_the_right_password
    user
  end


end