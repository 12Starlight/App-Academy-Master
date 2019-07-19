# == Schema Information
#
# Table name: countries
#
#  name        :string       not null, primary key
#  continent   :string
#  area        :integer
#  population  :integer
#  gdp         :integer


# FROM, WHERE, GROUP BY, HAVING, SELECT, ORDER, LIMIT

require_relative './sqlzoo.rb'

def example_sum
  execute(<<-SQL)
    SELECT
      SUM(population)
    FROM
      countries
  SQL
end

def continents
  # List all the continents - just once each.
  # DISTINCT(continent) - removes the duplicate continents
  execute(<<-SQL)

  SQL
end

def africa_gdp
  # Give the total GDP of Africa.
  # Do not need to GROUP BY, just returning SUM
  execute(<<-SQL)
  
  SQL
end

def area_count
  # How many countries have an area of more than 1,000,000?
  # Just returning COUNT
  execute(<<-SQL)
  
  SQL
end

def group_population
  # What is the total population of ('France','Germany','Spain')?
  # We are returning SUM, but comparing names IN
  execute(<<-SQL)
  
  SQL
end

def country_counts
  # For each continent show the continent and number of countries.
  # COUNT(name) or COUNT(*) will count all the names
  execute(<<-SQL)

  SQL
end

def populous_country_counts
  # For each continent show the continent and number of countries with
  # populations of at least 10 million.
  # GROUP BY goes after WHERE
  # FROM, WHERE, GROUP BY, HAVING, SELECT, ORDER, LIMIT

  execute(<<-SQL)
    
  SQL
end

def populous_continents
  # List the continents that have a total population of at least 100 million.
  execute(<<-SQL)
 
  SQL
end
