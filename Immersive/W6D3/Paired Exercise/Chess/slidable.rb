module Slidable 
  HORIZONTAL_DIRS = [
      [1,0],    # going right
      [-1,0],   # going left
      [0,1],    # going forward
      [0,-1]    # going backward
  ]

  DIAGONAL_DIRS = [
      [1,1],    # forward and right
      [1,-1],   # forward and left
      [-1,1],   # backward and right
      [-1,-1]   # backward and left 
  ]

  def horizontal_dirs 
    HORIZONTAL_DIRS   
  end

  def diagonal_dirs 
    DIAGONAL_DIRS
  end

  def moves
    moves = [] 
    move_dirs.each do |dx, dy|
        moves << grow_unblocked_moves_in_dir(dx, dy)
    end    
    moves
  end

  private
    def move_dirs
    end

    def grow_unblocked_moves_in_dir(dx, dy) # dx small increment/decrement in x axis direction, # dy small increment/decrement in y axis directon
        possible_moves = []
        current_pos = @pos.dup
        until !valid_pos?(current_pos)
            x, y = current_pos[0], current_pos[1]
            x = x + dx
            y = y + dy
            break if @color == board[current_pos].color    
            possible_moves << [x,y]
        end

        return possible_moves
    end
end