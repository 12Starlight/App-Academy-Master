# == Schema Information
#
# Table name: countries
#
#  name        :string       not null, primary key
#  continent   :string
#  area        :integer
#  population  :integer
#  gdp         :integer

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
    SELECT
      DISTINCT(continent)
    FROM
      countries
  SQL
end

def africa_gdp
  # Give the total GDP of Africa.
  # Do not need to GROUP BY, just returning SUM
  execute(<<-SQL)
    SELECT
      SUM(gdp)
    FROM
      countries
    WHERE
      continent = 'Africa';
  SQL
end

def area_count
  # How many countries have an area of more than 1,000,000?
  # Just returning COUNT
  execute(<<-SQL)
    SELECT
      COUNT(*)
    FROM
      countries
    WHERE
      area > 1000000;
  SQL
end

def group_population
  # What is the total population of ('France','Germany','Spain')?
  # We are returning SUM, but comparing names IN
  execute(<<-SQL)
    SELECT
      SUM(population)
    FROM
      countries
    WHERE
      name IN ('France', 'Germany', 'Spain');
  SQL
end

def country_counts
  # For each continent show the continent and number of countries.
  # COUNT(name) or COUNT(*) will count all the names
  execute(<<-SQL)
    SELECT
      continent,
      COUNT(*)
    FROM
      countries
    GROUP BY
      continent;
  SQL
end

def populous_country_counts
  # For each continent show the continent and number of countries with
  # populations of at least 10 million.
    # GROUP BY goes after WHERE
  # FROM, WHERE, GROUP BY, HAVING, SELECT, ORDER, LIMIT
  execute(<<-SQL)
    SELECT
      continent,
      COUNT(*)
    FROM
      countries
    WHERE
      population >= 10000000
    GROUP BY
      continent;
  SQL
end

def populous_continents
  # List the continents that have a total population of at least 100 million.
  execute(<<-SQL)
    SELECT
      continent
    FROM
      countries
    GROUP BY
      continent
    HAVING
      SUM(population) > 100000000;
  SQL
end
