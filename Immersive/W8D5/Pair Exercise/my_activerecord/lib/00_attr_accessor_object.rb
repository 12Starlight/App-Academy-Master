class AttrAccessorObject
  def self.my_attr_accessor(*names)
    # getter method
    names.each do |name|
      # method = "@#{name}"
      define_method("#{name}") do 
        instance_variable_get("@#{name}")
      end 

      # setter method
      define_method("#{name}=") do |arg|
        instance_variable_set("@#{name}", arg)
      end 

    end
  end
end