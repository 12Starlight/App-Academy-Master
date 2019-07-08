class Card
  include Comparable

  SUIT_STRINGS = {    # Index Values 
    :clubs    => "♣", # 0
    :diamonds => "♦", # 1
    :hearts   => "♥", # 2
    :spades   => "♠"  # 3 
  }

  VALUE_STRINGS = {   # Index Values
    :two   => "2",    # 0
    :three => "3",    # 1
    :four  => "4",    # 2
    :five  => "5",    # 3
    :six   => "6",    # 4
    :seven => "7",    # 5
    :eight => "8",    # 6
    :nine  => "9",    # 7
    :ten   => "10",   # 8
    :jack  => "J",    # 9
    :queen => "Q",    # 10
    :king  => "K",    # 11
    :ace   => "A"     # 12
  }

  def self.suits
    SUIT_STRINGS.keys
  end

  def self.royal_values
    VALUE_STRINGS.keys[-5..-1]
  end

  def self.values
    VALUE_STRINGS.keys 
  end

  attr_reader :suit, :value

  def initialize(suit, value)
    unless SUIT_STRINGS.keys.include?(suit) && VALUE_STRINGS.keys.include?(value)
      raise "illegal suit #{suit.inspect} or value #{value.inspect}"
    end

    @suit, @value = suit, value 
  end

  def to_s
    VALUE_STRINGS[value] + SUIT_STRINGS[suit]
  end

  def ==(other_card)
    (self.suit == other_card.suit) && (self.value == other_card.value)
  end

  def <=>(other_card)
    if self == other_card
      0 
    elsif value != other_card.value 
      Card.values.index(value) <=> Card.values.index(other_card.value)
    elsif suit != other_card.suit 
      Card.suits.index(suit) <=> Card.suits.index(other_card.suit)
    end
  end
end



# I will graduate from App Academy, November 1st 2019 and 
# work in my field 

# I will graduate from App Academy, November 1st 2019 and 
# work in my field 

# I will graduate from App Academy, November 1st 2019 and 
# work in my field 

# I will graduate from App Academy, November 1st 2019 and 
# work in my field 