require_relative "hand"

class Player
  attr_reader :hand, :name

  def initialize(name, hand = Hand.new)
    @name = name 
    @hand = hand 
  end

  def books
    self.hand.books
  end

  def take(cards)
    self.hand.receive(cards)
    self.play_books
  end

  def give_up(value)
    self.hand.give_up(value)
  end

  def has_value?(value)
    self.hand.include?(value)
  end

  def go_fish(deck)
    card = deck.deal(1)
    self.take(card) 
  end

  def play_books
    self.hand.play_books
  end

  # returns a value and a target player
  def make_request(other_players)
    value = choose_value
    target = choose_player(other_players)
    [value, target]
  end

  def in_play?
    !hand.empty?
  end

  # Don't implement these last two methods; normally we would define these
  # inside of HumanPlayer and ComputerPlayer classes.

  def choose_player(other_players)
    # DO NOT IMPLEMENT
  end

  def choose_value
    # DO NOT IMPLEMENT
  end
end
