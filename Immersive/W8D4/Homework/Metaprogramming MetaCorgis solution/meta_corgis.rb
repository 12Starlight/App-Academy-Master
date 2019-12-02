class SnackBox
  SNACK_BOX_DATA = {
    1 => {
      "bone" => {
        "info" => "Phoenician rawhide",
        "tastiness" => 20
      },
      "kibble" => {
        "info" => "Delicately braised hamhocks",
        "tastiness" => 33
      },
      "treat" => {
        "info" => "Chewy dental sticks",
        "tastiness" => 40
      }
    },
    2 => {
      "bone" => {
        "info" => "An old dirty bone",
        "tastiness" => 2
      },
      "kibble" => {
        "info" => "Kale clusters",
        "tastiness" => 1
      },
      "treat" => {
        "info" => "Bacon",
        "tastiness" => 80
      }
    },
    3 => {
      "bone" => {
        "info" => "A steak bone",
        "tastiness" => 64
      },
      "kibble" => {
        "info" => "Sweet Potato nibbles",
        "tastiness" => 45
      },
      "treat" => {
        "info" => "Chicken bits",
        "tastiness" => 75
      }
    }
  }
  def initialize(data = SNACK_BOX_DATA)
    @data = data
  end

  # Bone Methods
  def get_bone_info(box_id) 
    @data[box_id]["bone"]["info"]
  end

  def get_bone_tastiness(box_id)
    @data[box_id]["bone"]["tastiness"]
  end

  # Kibble Methods
  def get_kibble_info(box_id)
    @data[box_id]["kibble"]["info"]
  end

  def get_kibble_tastiness(box_id)
    @data[box_id]["kibble"]["tastiness"]
  end

  # Treat Methods
  def get_treat_info(box_id)
    @data[box_id]["treat"]["info"]
  end

  def get_treat_tastiness(box_id)
    @data[box_id]["treat"]["tastiness"]
  end
end

# class CorgiSnacks

#   def initialize(snack_box, box_id)
#     @snack_box = snack_box
#     @box_id = box_id
#   end

#   def bone
#     info = @snack_box.get_bone_info(@box_id)
#     tastiness = @snack_box.get_bone_tastiness(@box_id)
#     result = "Bone: #{info}: #{tastiness} "
#     tastiness > 30 ? "* #{result}" : result
#   end

#   def kibble
#     info = @snack_box.get_kibble_info(@box_id)
#     tastiness = @snack_box.get_kibble_tastiness(@box_id)
#     result = "Kibble: #{info}: #{tastiness} "
#     tastiness > 30 ? "* #{result}" : result
#   end

#   def treat
#     info = @snack_box.get_treat_info(@box_id)
#     tastiness = @snack_box.get_treat_tastiness(@box_id)
#     result = "Treat: #{info}: #{tastiness} "
#     tastiness > 30 ? "* #{result}" : result
#   end

# end


class MetaCorgiSnacks
  def initialize(snack_box, box_id)
    @snack_box = snack_box
    @box_id = box_id

    # Phase II
    # Do not understand this at all?
    #
    # .grep - returns an array of every element in enum for which Pattern === element. 
    # If the optional block is supplied, each matching element is passed to it, and 
    # the block’s result is stored in the output array.

    snack_box.methods.grep(/^get_(.*)_info$/) { MetaCorgiSnacks.define_snack $1 }
  end

  # # Phase I
  # def method_missing(name, *args)
    
  #   # saved to a variable
  #   #     called the class
  #   # 	              used send 
  #   # 	                  used string interpolation
  #   # 					                  passed in name to build method 
  #   # 					                                passed in @attribute
  #   #                                           passed @attribute into newly created method without using parenthesis
  #   info = @snack_box.send("get_#{name}_info", @box_id)
    
  #   # same as above
  #   tastiness = @snack_box.send("get_#{name}_tastiness", @box_id)
    
  #   # looks like we changed name to a string, then an array, then capitalized it, then returned it back to a string and saved it in the variable name
  #     # why?
  #   name = "#{name.to_s.split("_").map(&:capitalize).join(" ")}"
    
  #   # same as methods in CorgiSnacks, just added category name and capitalized it
  #   result = "#{name}: #{info}: #{tastiness} "
    
  #   # same as methods in CorgiSnacks
  #   tastiness > 30 ? "* #{result}" : result
  # end

  # Phase II
  def self.define_snack(name)
    
    # created define_snack (not sure why)
    define_method(name) do
      
      # same as method_missing 
      info = @snack_box.send("get_#{name}_info", @box_id)
      tastiness = @snack_box.send("get_#{name}_tastiness", @box_id)
      display_name = "#{name.to_s.split('_').map(&:capitalize).join(' ')}"
      result = "#{name}: #{info} #{tastiness} "
      tastiness > 30 ? "* #{result}" : result 
    end
  end
end

=begin 

Notes:
  Ran all versions of methods calls 
  Commented out all methods to test if self.define_snack(name) worked 
  successfully. It did! Yea :) cool!

  send(*args) - Invokes the method identified by symbol (or string as 
  alternative to :symbol), passing it any arguments specified. You can 
  use __send__, if the name send clashes with an existing method in obj. 
  When the method is identified by a string, the string is converted to a 
  symbol.

  define_method(*args) - defines an instance method in the receiver. The method 
  parameter can be a Proc, a Method or an UnboundMethod object. If a block is 
  specified, it is used as the method body. This block is evaluated using 
  instance_eval, a point that is tricky to demonstrate because define_method is 
  private. (This is why we resort to the send hack in this example.)

=end
