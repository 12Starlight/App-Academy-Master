require_relative 'db_connection'
require 'byebug'
require 'active_support/inflector'
# NB: the attr_accessor we wrote in phase 0 is NOT used in the rest
# of this project. It was only a warm up.

class SQLObject 
  def self.columns
    return @columns if @columns
      @columns = DBConnection.execute2(<<-SQL).first
        SELECT *
        FROM "#{ self.table_name }"
      SQL

      @columns.map!(&:to_sym)
  end

  def self.finalize!
    self.columns.each do |column|
      define_method(column) do 
        self.attributes[column]
      end 

      define_method("#{column}=") do |arg|
        self.attributes[column] = arg  
      end
    end
  end

  def self.table_name=(table_name)
    @table_name = table_name
  end

  def self.table_name
    @table_name ||= "#{ self.name }".tableize
  end

  def self.all
    results = DBConnection.execute(<<-SQL)
      SELECT *
      FROM "#{ self.table_name }"
    SQL

    parse_all(results)
  end

  def self.parse_all(results)
    results.map { |result| self.new(result) }
  end

  def self.find(id)
    # ...
  end

  def initialize(params = {})
    params.each do |attr_name, value|
      name = attr_name.to_sym
      raise "unknown attribute '#{attr_name}'" unless self.class.columns.include?(name)
      send("#{name}=", value)
    end
  end

  def attributes
    @attributes ||= {}
  end

  def attribute_values
    # ...
  end

  def insert
    # ...
  end

  def update
    # ...
  end

  def save
    # ...
  end
  
end
