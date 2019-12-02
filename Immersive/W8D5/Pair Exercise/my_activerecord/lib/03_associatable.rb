require_relative '02_searchable'
require 'active_support/inflector'

# Phase IIIa
class AssocOptions
  attr_accessor(
    :foreign_key,
    :class_name,
    :primary_key
  )

  def model_class
    class_name.constantize
  end

  def table_name
    class_name.underscore + "s"
  end
end

class BelongsToOptions < AssocOptions
  def initialize(name, options = {})
    defaults = {primary_key: :id,
                foreign_key: (name.to_s.underscore + "_id").to_sym,
                class_name: name.to_s.camelcase}

    @foreign_key = options[:foreign_key] || defaults[:foreign_key]
    @primary_key = options[:primary_key] || defaults[:primary_key]
    @class_name = options[:class_name] || defaults[:class_name]
  end
end

class HasManyOptions < AssocOptions
  def initialize(name, self_class_name, options = {})
    defaults = {primary_key: :id,
                foreign_key: (self_class_name.to_s.underscore + "_id").to_sym,
                class_name: name.to_s.camelcase.singularize}

    @foreign_key = options[:foreign_key] || defaults[:foreign_key]
    @primary_key = options[:primary_key] || defaults[:primary_key]
    @class_name = options[:class_name] || defaults[:class_name]    
  end
end

module Associatable
  # Phase IIIb
  def belongs_to(name, options = {})
    opts = BelongsToOptions.new(name, options) # gets a class instance, name represents name of association, options represents a hash of keys and values { foreign_key: :house_id }
    foreign_key = opts.foreign_key # pulls out foreign_key, name of the column, value of foreign_key ( in terms of key value pairs in the hash from intitialize )

    define_method(name) do 
      table = opts.model_class # getting the actual value of class_name: --> :House
      value = send(foreign_key) # actual value of :house_id
      table.where({opts.primary_key => value}).first # passing in a key value pair in the form of a hash, representing the class id for the foreign_key, we are trying to get back an instance of a house, not the belongs_to
    end
  end

=begin
    opts = BelongsToOptions.new(name, options) # hash of keys and values { foreign_key: :house_id }
    foreign_key = opts.foreign_key # "house_id"
    value = send(foreign_key) # 

    cat = Cat.new({house_id: 5})
    send(foreign_key) => cat.foreign_key => cat.house_id = 5
    value = 5

    table = opts.model_class # getting the actual value of class_name: --> :House
    table = House

    House.where({id: 5})

    SELECT *
    FROM houses
    WHERE id = 5

    => house that cat belongs to

    cat.house => returns the house that the cat belongs to

    name = "house" => "house_id" => "House" => method "house"

    class Cat

      define_method("house")
      => def house
            returns house that instance of cat belongs to
          end
      end
    end
=end

  def has_many(name, options = {})
    # ...
  end

  def assoc_options
    # Wait to implement this in Phase IVa. Modify `belongs_to`, too.
  end
end

class SQLObject
  extend Associatable
end
