require_relative 'pieces'
require "byebug"

class Board
    attr_reader :grid
    def initialize
      @grid = Array.new(8) { Array.new(8)}

      # Setup nullpieces 
      (2..5).each do |row|
        (0..7).each do |col|
          @grid[row][col] = NullPiece.instance 
        end
      end 

      # Setup pawns
      (0..7).each do |col|
        @grid[1][col] = Pawn.new(:red) 
        @grid[6][col] = Pawn.new(:yellow)
      end

      # Setup kings
      @grid[0][3] = King.new(:red) 
      @grid[7][3] = King.new(:yellow) 

      # Setup queens
      @grid[0][4] = Queen.new(:red)   
      @grid[7][4] = Queen.new(:yellow)  

      # Setup bishops
      @grid[0][2] = Bishop.new(:red)  
      @grid[0][5] = Bishop.new(:red)
      @grid[7][2] = Bishop.new(:yellow) 
      @grid[7][5] = Bishop.new(:yellow)  

      # Setup knights
      @grid[0][1] = Knight.new(:red) 
      @grid[0][6] = Knight.new(:red) 
      @grid[7][1] = Knight.new(:yellow) 
      @grid[7][6] = Knight.new(:yellow)

      # Setup rooks
      @grid[0][0] = Rook.new(:red) 
      @grid[0][7] = Rook.new(:red) 
      @grid[7][7] = Rook.new(:yellow) 
      @grid[7][0] = Rook.new(:yellow) 
            
    end

    def [](pos)
      x, y = pos
      @grid[x][y] 
    end

    def []=(pos, value)
      x, y = pos     
      @grid[x][y] = value 
    end
     
    def valid_pos?(pos)    # => [x, y]
      x, y = pos 
      x.between?(0, 7) && y.between?(0, 7)
    end 

    def move_piece(color, start_pos, end_pos)
      # raise "There is no piece at start position"
      # raise "The peice cannot move to end_pos"

      # Set if statements for non-valid moves and no-piece start_pos
      # non-valid moves : valid_pos? / end_pos same color as start_pos / 
      begin
        if start_pos == end_pos 
          raise NoPieceHereError
        end     

        if !valid_pos?(end_pos) || self[start_pos].color == self[end_pos].color 
          raise CannotMoveHereError 
        end

        self[end_pos] = self[start_pos]
        self[start_pos] = NullPiece.instance 
      rescue NoPieceHereError => exception
        exception.message
      rescue CannotMoveHereError => exception 
        exception.message     
      end

    end

    def display 
      (0..7).each do |row|
        (0..7).each do |col|
          print "#{@grid[row][col].symbol} | " 
        end
        puts 
      end
    end
end

class CannotMoveHereError < StandardError
  def message 
    puts "You can not move here silly :)"
  end 
end

class NoPieceHereError < StandardError 
  def message
    puts "There is no piece to move"
  end
end


# =begin   
# Notes:
#   * .between - Returns false if obj <=> min is less than zero or if anObject <=> max is greater than zero, true otherwise.

# end 

