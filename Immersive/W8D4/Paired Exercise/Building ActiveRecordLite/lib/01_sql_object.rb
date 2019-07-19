require_relative 'db_connection'
require 'active_support/inflector'
# NB: the attr_accessor we wrote in phase 0 is NOT used in the rest
# of this project. It was only a warm up.

class SQLObject
  def self.columns
    return @table if @table
    array = DBConnection.execute2(<<-SQL)
      SELECT 
        *
      FROM 
        "#{self.table_name}"
    SQL
    @table = array.first.map!(&:to_sym)
  end

  def self.finalize!
    self.columns.each do |name|
      
      define_method(name) do 
        self.attributes[name]
      end
      
      define_method("#{name}=") do |var| 
        self.attributes[name] = var
      end
    end
  end

  def self.table_name=(table_name)
    @table_name = table_name
  end

  def self.table_name
    @table_name ||= "#{self.to_s.downcase}s"
  end

  def self.all
    all = DBConnection.execute(<<-SQL)
      SELECT
        *
      FROM
        "#{self.table_name}"
    SQL
    self.parse_all(all)
  end

  def self.parse_all(results)
    results.map do |hash|
      self.new(hash)
    end
  end

  def self.find(id)
    found = DBConnection.execute(<<-SQL, id)
      SELECT
        #{table_name}.*
      FROM
        #{table_name}
      WHERE
        #{table_name}.id = ?
    SQL
    parse_all(found).first 
  end

  def initialize(params = {})
    params.each do |name, value|
      name_sym = name.to_sym
      if self.class.columns.include?(name_sym)
        self.send("#{name_sym}=", value)
      else
        raise "unknown attribute '#{name_sym}'"
      end   
    end
  end

  # send(*args) - Invokes the method identified by symbol (or string as 
  # alternative to :symbol), passing it any arguments specified. You can 
  # use __send__, if the name send clashes with an existing method in obj. 
  # When the method is identified by a string, the string is converted to a 
  # symbol.

  def attributes
    @attributes ||= {} 
  end

  def attribute_values
    # symbols are attributes in the sqlobject class 
    # sqlobject.columns.map { |attribute| self.send(attribute) }
    self.class.columns.map { |attribute| self.send(attribute) }
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
