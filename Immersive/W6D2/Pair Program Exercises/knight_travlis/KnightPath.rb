require_relative "tree_node"


class KnightPathFinder
    attr_reader :current_position, :considered_positions, :root_node
    def initialize(current_position)
        @current_position = current_position
        @root_node = PolyTreeNode.new(current_position)
        @considered_positions = [@current_position]
        @end_node = nil
    end

    def self.valid_moves(current_position)
        math = [[1,-2],[2,-1],[2,1],[1,2],
                [-1,-2],[-2,-1],[-2,1],[-1,2]]
        valid = []
        math.each do |possible_positions|
            row1, col1 = possible_positions
            row2, col2 = current_position
            new_row = row1 + row2
            new_col = col1 + col2
            new_pos = new_row, new_col
            if (new_row < 8 && new_row > 0) && (new_col > 0 && new_col < 8)
                valid << new_pos
            end
        end 
        valid
    end

    def new_move_positions(pos)
        new_moves = []
        new_positions = KnightPathFinder.valid_moves(pos)
        new_positions.each do |position|
            new_moves << position unless @considered_positions.include?(position)
        end
        new_moves
    end

    def build_move_tree
        start_pos = @root_node
        queue = [start_pos]
        until queue.empty?
            current = queue.shift
            children = new_move_positions(current.value) # => [0,0]
                children.each do |pos|
                    child = PolyTreeNode.new(pos)
                    current.add_child(child)
                    @considered_positions << pos
                    queue << child
                end

        end
        return @root_node
    end

    def find_path(end_pos)
        @root_node.dfs(end_pos)
    end
    
    def trace_path_back(pos)
        path = []
        current = find_path(pos)

        while current
            path << current.value
            current = current.parent
        end
        
        path.reverse
    end

end

k = KnightPathFinder.new([0,0])
k.build_move_tree
p k.trace_path_back([7,6])



# Octagon Matrix

# [-4, 4][-3, 4][-2, 4][-1, 4][ 0, 4][ 1, 4][ 2, 4][ 3, 4][ 4, 4]
# [-4, 3][-3, 3][-2, 3][-1, 3][ 0, 3][ 1, 3][ 2, 3][ 3, 3][ 4, 3]
# [-4, 2][-3, 2][-2, 2][-1, 2][ 0, 2][ 1, 2][ 2, 2][ 3, 2][ 4, 2]
# [-4, 1][-3, 1][-2, 1][-1, 1][ 0, 1][ 1, 1][ 2, 1][ 3, 1][ 4, 1]
# [-4, 0][-3, 0][-2, 0][-1, 0][ 0, 0][ 1, 0][ 2, 0][ 3, 0][ 4, 0]
# [-4,-1][-3,-1][-2,-1][-1,-1][ 0,-1][ 1,-1][ 2,-1][ 3,-1][ 4,-1]
# [-4,-2][-3,-2][-2,-2][-1,-2][ 0,-2][ 1,-2][ 2,-2][ 3,-2][ 4,-2]
# [-4,-3][-3,-3][-2,-3][-1,-3][ 0,-3][ 1,-3][ 2,-3][ 3,-3][ 4,-3] 
# [-4,-3][-3,-3][-2,-3][-1,-3][ 0,-3][ 1,-3][ 2,-3][ 3,-3][ 4,-3]  


# Sorted by row
# [ 1, 2], [ 2, 1] upper right
# [ 1,-2], [ 2,-1] lower right 
# [-1,-2], [-2,-1] lower left 
# [-1, 2], [-2, 1] upper left

# Array [[-2,-1], [-2, 1], [-1,-2], [-1, 2], [ 1,-2], [ 1, 2], [ 2,-1], [ 2, 1]]  


# Sorted by column
# [ 2, 1], [ 1, 2] upper right
# [ 2,-1], [ 1,-2] lower right 
# [-2,-1], [-1,-2] lower left 
# [-2, 1], [-1, 2] upper left 

# Array [[-1,-2], [ 1,-2], [-2,-1], [ 2,-1], [-2, 1], [ 2, 1], [-1, 2], [ 1, 2]]


       