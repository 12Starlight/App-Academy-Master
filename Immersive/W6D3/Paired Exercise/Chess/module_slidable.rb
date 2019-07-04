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
    HORIZONTAL_DIRS.each do |x, y|
        move_dirs
    end    
  end

  private
    def move_dirs
        grow_unblocked_moves_in_dir(dx, dy)
    end

    def grow_unblocked_moves_in_dir(dx, dy) # dx small increment/decrement in x axis direction, # dy small increment/decrement in y axis directon
        possible_moves = []
        current_pos = @pos.dup
        x = current_pos[0]
        y = current_pos[1]
        until !valid_pos?([x, y])  
            x = x + dx
            y = y + dy
            possible_moves << [x,y]
        end
            
    end
end