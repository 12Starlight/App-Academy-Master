require_relative "player"
require_relative "deck"


class Game
  attr_reader :deck, :players

  def initialize(players, deck = Deck.new, deal = true)
    @players = players 
    @deck = deck 
    deal_players_in if deal
  end

  def deal_players_in
    # DO NOT MODIFY
    players.each { |player| player.take(deck.deal(7)) }
  end

  # switch the current player
  def next_player!
    self.players.rotate!
  end

  def current_player
    self.players.first 
  end

  # returns all non-current players
  def other_players
    self.players.drop(1)
  end

  def play
    until game_over?
      play_turn
    end

    puts "#{winner.name} wins!"
  end

  # If the current player receives cards, they take another turn (that is, this
  # method returns without passing the turn to the next player). Otherwise, the 
  # current player has to "go fish" and the turn passes to the next player.
  def play_turn
    value, target = current_player.make_request(other_players)
    if target.has_value?(value)
      current_player.take(target.give_up(value))
    else
      current_player.go_fish(@deck)
      next_player!
    end 
  end

  def game_over?
    over = self.players.any? do |player|
      player.in_play?
    end
    !over && self.deck.empty?
  end

  def winner
    max_book = 0 
    winner = current_player
    self.players.each do |player|
      if player.books > max_book 
        max_book = player.books 
        winner = player 
      end 
    end 
    winner 
  end
end
