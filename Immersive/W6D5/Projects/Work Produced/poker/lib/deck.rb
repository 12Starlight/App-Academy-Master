require_relative './card'
require_relative './hand'

class Deck
  #What is this? What does it do?
  def self.all_cards
    combined = Card.suits.product(Card.values)
    combined.map { |suit, value| Card.new(suit, value) }
  end

  def initialize(cards = Deck.all_cards)
    @cards = cards 
  end

  def deal_hand
    Hand.new(self.take(5))
  end

  def count
    @cards.count 
  end

  def take(n)
    raise "not enough cards" if count < n 
    @cards.shift(n)
  end

  def return(cards)
    @cards += cards 
  end

  def shuffle
    @cards.shuffle!
  end
end
