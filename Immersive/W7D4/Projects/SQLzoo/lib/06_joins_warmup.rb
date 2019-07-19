# == Schema Information
#
# Table name: actors
#
#  id          :integer      not null, primary key
#  name        :string
#
# Table name: movies
#
#  id          :integer      not null, primary key
#  title       :string
#  yr          :integer
#  score       :float
#  votes       :integer
#  director_id :integer
#
# Table name: castings
#
#  movie_id    :integer      not null, primary key
#  actor_id    :integer      not null, primary key
#  ord         :integer


# FROM, WHERE, GROUP BY, HAVING, SELECT, ORDER, LIMIT

require_relative './sqlzoo.rb'

def example_query
  execute(<<-SQL)
    SELECT
      *
    FROM
      movies
    WHERE
      title = 'Doctor No'
  SQL
end

def films_from_sixty_two
  # List the films where the yr is 1962 [Show id, title]
  execute(<<-SQL)
  
  SQL
end

def year_of_kane
  # Give year of 'Citizen Kane'.
  execute(<<-SQL)
  
  SQL
end

def trek_films
  # List all of the Star Trek movies, include the id, title and yr (all of
  # these movies include the words Star Trek in the title). Order results by
  # year.
  # the default for ORDER BY is ASC
  execute(<<-SQL)
 
  SQL
end

def films_by_id
  # What are the titles of the films with id 1119, 1595, 1768?
  execute(<<-SQL)
   
  SQL
end

def glenn_close_id
  # What id number does the actress 'Glenn Close' have?
  execute(<<-SQL)
  
  SQL
end

def casablanca_id
  # What is the id of the film 'Casablanca'?
  execute(<<-SQL)
    
  SQL
end

def casablanca_cast
  # Obtain the cast list for 'Casablanca'. Use the id value that you obtained
  # in the previous question directly in your query (for example, id = 1).
  # (SELECT id FROM movies WHERE title = 'Casablanca'), gets the movies id value for 'Casablanca'
  execute(<<-SQL)
   
  SQL
end

def alien_cast
  # Obtain the cast list for the film 'Alien'

  # My solution
  # Solved using a SELECT statment to obtain id 
  
  # execute(<<-SQL)
  #   SELECT 
  #     actors.name
  #   FROM
  #     actors
  #   INNER JOIN
  #     castings ON castings.actor_id = actors.id
  #   WHERE
  #     castings.movie_id = (SELECT id FROM movies WHERE title = 'Alien')
  #   ORDER BY
  #     actors.id 
  # SQL

  # Solved using two INNER JOIN's 
  execute(<<-SQL)

  SQL
end
