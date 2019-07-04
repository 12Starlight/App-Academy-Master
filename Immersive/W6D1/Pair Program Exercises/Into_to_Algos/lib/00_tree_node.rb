class PolyTreeNode
    attr_accessor :value, :children
    attr_reader :parent

    def initialize(value)
        @value = value
        @parent = nil
        @children = []
    end

    def parent=(new_parent)
        if self.parent
          self.parent.children.delete(self)
        end

        @parent = new_parent # part 1
        unless new_parent.nil?
            p_children = new_parent.children # part 2
            unless p_children.include?(self)
                p_children << self
            end
        end
        
    end

    #Taking a 15 min break cuz we were supposed to 15 mins ago - Carlos

    def add_child(child_node)
        child_node.parent = self
    end

    def remove_child(child_node)
        child_node.parent = nil
        unless self.children.include?(child_node)
            raise
        end
    end

    def dfs(target_value)
        # return nil if self.children.empty?
        # until self.children.empty?
        #     if self.children[0][0].value == target_value
        #         puts "coders rule"
        #         self.children.shift
        #     else
        #         children[0].dfs(target_value)
        #     end
        # end
        return self if self.value == target_value
        self.children.each do |child|
          search_result = child.dfs(target_value)
          return search_result unless search_result.nil?
        end  
        nil 
    end

    def bfs(target_value)
        # return self if self.value == target_value
        # self.children.each do |child|
        #   if child.value == target_value
        #     return child 
        #   else
        #     search_result = child.bfs(target_value)
        #     return search_result unless search_result.nil?
        #   end
        # end   
        # nil 
        queue = [self]
        until queue.empty?
            el = queue.shift
            if el.value == target_value
                return el
            end
            # This works too but specs didn't like it
            # el.children.each do |child|
            #     queue << child
            # end

            queue.concat(el.children)
        end
        nil
    end

end


# self
# @children[node1,node2,node3]
# node1.value 
# node1.children #[node1s,node2s,node3s]
# 




# node1 = PolyTreeNode.new("A")
# node2 = PolyTreeNode.new("B")
# node3 = PolyTreeNode.new("C")

# node2.parent = node1
#     1. #node 2
#         #parent = node1

#     2. #node 1
#         #children << node 2

# node2.parent = node1
#     1. #


# node2.parent = node3