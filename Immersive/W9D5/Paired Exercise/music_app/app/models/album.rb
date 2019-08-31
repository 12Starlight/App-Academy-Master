class Album < ApplicationRecord
  # Validations
  validates :band, :name, :year, presence: true 
  validates :live, inclusion: { in: [true, false] }
  validates :name, uniqueness: { scope: :band_id }
  validates :year, numericality: { minimum: 1900, maximum: 9000 }

  # Associations
  belongs_to :band 
  has_many :tracks, dependent: :destroy

  # Helper Methods
  after_initialize :set_defaults

  
  # Instance Methods
  def set_defaults
    self.life ||= false 
  end
end 