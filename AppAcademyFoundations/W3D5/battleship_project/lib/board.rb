class Board

  # getters, # setters
  attr_reader :size 

  # class method
  def self.print_grid(grid)
    grid.each do |row|
      puts row.join(" ")
    end 
  end 

  def initialize(n)
    @grid = Array.new(n) { Array.new(n, :N) }
    @size = n * n 
  end 


  # instance methods
  def [](position)
    row, col = position 
    @grid[row][col]
  end 

  def []=(position, value)
    row, col = position
    @grid[row][col] = value 
  end 

  def num_ships 
    @grid.flatten.count { |elm| elm == :S }
  end
  
  def attack(position)
    if self[position] == :S # Because I built the methods above, I do not need to add .grid and position has been defined already. So, I can just use the variable 
      self[position] = :H
      puts "You sunk my battleship! :("
      return true
    else  
      self[position] = :X
      return false 
    end 
  end 

  def place_random_ships
    total = @size * 0.25

    while self.num_ships < total 
      random_row = rand(0...@grid.length)
      random_col = rand(0...@grid.length)
      position = [random_row, random_col]
      self[position] = :S 
    end 
  end 

  def hidden_ships_grid 
    @grid.map do |row|
      row.map do |elm|
        if elm == :S 
          :N 
        else  
          elm 
        end 
      end 
    end 
  end   

  def cheat
    Board.print_grid(@grid)
  end 

  def print 
    hidden_ships = self.hidden_ships_grid
    Board.print_grid(hidden_ships)
  end 

end
