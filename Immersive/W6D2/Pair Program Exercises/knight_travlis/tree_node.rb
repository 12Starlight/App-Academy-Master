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

        @parent = new_parent 
        unless new_parent.nil?
            p_children = new_parent.children 
            unless p_children.include?(self)
                p_children << self
            end
        end
        
    end


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
        return self if self.value == target_value
        self.children.each do |child|
          search_result = child.dfs(target_value)
          return search_result unless search_result.nil?
        end  
        nil 
    end

    def bfs(target_value)
        queue = [self]
        until queue.empty?
            el = queue.shift
            if el.value == target_value
                return el
            end
            queue.concat(el.children)
        end
        nil
    end

  def inspect
    { 'value' => @value, 'parent_value' => @parent.value }.inspect
  end

end

tree = PolyTreeNode.new([0,0])
