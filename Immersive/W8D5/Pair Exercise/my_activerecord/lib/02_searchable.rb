require_relative 'db_connection'
require_relative '01_sql_object'

module Searchable
  def where(params)
    keys = params.keys.map { |key| key.to_s + " = ?"}.join(" AND ")
    values = params.values

    result = DBConnection.execute(<<-SQL, *values)
      SELECT
        *
      FROM
        #{ self.table_name }
      WHERE
        #{ keys }
    SQL

    self.parse_all(result)
  end
end

class SQLObject
  extend Searchable
end
