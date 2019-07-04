require_relative "piece"
class Board

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
        @grid[1][col] = Pawn.new 
        @grid[6][col] = Pawn.new
      end

      # Setup kings
      @grid[0][3] = King.new 
      @grid[7][3] = King.new 

      # Setup queens
      @grid[0][4] = Queen.new   
      @grid[7][4] = Queen.new  

      # Setup bishops
      @grid[0][2] = Bishop.new  
      @grid[0][5] = Bishop.new
      @grid[7][2] = Bishop.new 
      @grid[7][5] = Bishop.new  

      # Setup knights
      @grid[0][1] = Knight.new 
      @grid[0][6] = Knight.new 
      @grid[7][1] = Knight.new 
      @grid[7][6] = Knight.new

      # Setup rooks
      @grid[0][0] = Rook.new 
      @grid[0][7] = Rook.new 
      @grid[7][7] = Rook.new 
      @grid[7][0] = Rook.new 
      
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
      self[end_pos] = self[start_pos]
      self[start_pos] = NullPiece.instance 

    end
end

# =begin   
# Notes:
#   * .between - Returns false if obj <=> min is less than zero or if anObject <=> max is greater than zero, true otherwise.

# end 

