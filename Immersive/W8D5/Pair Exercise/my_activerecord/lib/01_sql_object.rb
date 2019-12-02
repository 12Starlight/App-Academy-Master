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
      FROM #{ self.table_name }
    SQL

    parse_all(results)
  end

  def self.parse_all(results)
    results.map { |result| self.new(result) }
  end

  # results [{id: 1, name: "Ah"}, {id: 2, name: "Eh"}, {}]
  # parse_all => [Cat{id: 1, name: "Ah"}, Cat{id: 2, name: "Eh"}, {}]

  def self.find(id)
    result = DBConnection.execute(<<-SQL, id)
      SELECT *
      FROM #{ self.table_name }
      WHERE #{ self.table_name }.id = ?
      LIMIT 1
    SQL

    self.parse_all(result).first
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
    self.class.columns.map do |column| 
      send(column)
    end
  end

  def insert
    question_marks = "(#{ ('?' * self.class.columns.drop(1).length).split("").join(", ") })" 
    col_names = "(#{ self.class.columns.drop(1).join(", ") })"
    values = attribute_values.drop(1)

    DBConnection.execute(<<-SQL, *values) 
      INSERT INTO
        #{ self.class.table_name } #{ col_names }
      VALUES
        #{ question_marks }
    SQL
    self.id = DBConnection.last_insert_row_id
  end

  def update
    mapped = self.class.columns.drop(1).map { |column| column.to_s + " = ?" }
    col_names = "#{ mapped.join(", ") }"
    values = attribute_values.drop(1)

    DBConnection.execute(<<-SQL, *values, attribute_values.first)
      UPDATE
        #{ self.class.table_name }
      SET
        #{ col_names }
      WHERE
        id = ?
    SQL
  end

  def save
    return self.insert if id.nil?  
    self.update 
  end
  
end
