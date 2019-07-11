require_relative "deck"


class Hand
  attr_reader :books, :cards

  def initialize(cards = [])
    @cards = cards 
    @books = 0
  end
  
  def include?(value)
    self.cards.any? do |card|
      card.value == value 
    end 
  end

  def empty?
    self.cards.empty?
  end

  def count
    self.cards.count 
  end

  def give_up(value)
    gave = [] 
    self.cards.dup.each do |card|
      if card.value == value 
        gave << card
        @cards.delete(card)
      end
    end
    gave 
  end

  def receive(new_cards)
    @cards += new_cards
  end

  # This method isn't tested, but we strongly recommend you implement it as a
  # helper method. It should return a hash mapping values to the number of
  # matching cards in the hand (e.g., { king: 2, deuce: 3 })
  def count_sets
    sets = Hash.new(0)
    self.cards.each { |card| sets[card.value] += 1 }
    sets 
  end

  def play_books
    count_sets.each do |card, count|
      if count == 4 
        @books += 1 
        self.give_up(card)
      end
    end
  end
end
