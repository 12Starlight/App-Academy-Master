require 'singleton'
require 'sqlite3'

class MovieDatabase < SQLite3::Database
  include Singleton

  def initialize
    super(File.dirname(__FILE__) + "/../movie.db")

    self.results_as_hash = true
    self.type_translation = true
  end

  def self.execute(*args)
    self.instance.execute(*args)
  end
end

# 1. Obtain the cast list for the movie "Zoolander"; order by the
# actor's name.
def zoolander_cast
  MovieDatabase.execute(<<-SQL)
    SELECT
      actors.name
    FROM
      movies
    JOIN
      castings ON castings.movie_id = movies.id 
    JOIN
      actors ON castings.actor_id = actors.id 
    WHERE
      movies.title = 'Zoolander'
    ORDER BY
      actors.name 
SQL
end

# 2. List the films in which 'Matt Damon' has appeared; order by
# movie title.
def matt_damon_films
  MovieDatabase.execute(<<-SQL)
    SELECT
      movies.title
    FROM
      movies
    JOIN
      castings ON castings.movie_id = movies.id
    JOIN
      actors ON castings.actor_id = actors.id 
    WHERE
      actors.name = 'Matt Damon'
    ORDER BY
      movies.title 
SQL
end

# 3. For each film released in 2000 or later in which 'Christopher
#    Walken' has appeared, list the movie title and the year. Order by
#    movie title.
def christopher_walken_21st_century_films
  MovieDatabase.execute(<<-SQL)
    SELECT
      movies.title, movies.yr
    FROM
      movies
    JOIN
      castings ON castings.movie_id = movies.id 
    JOIN
      actors ON castings.actor_id = actors.id
    WHERE
      movies.yr >= 2000 AND actors.name = 'Christopher Walken'
    ORDER BY
      movies.title 
SQL
end

# 4. List the films together with the leading star for all films
# produced in 1910. Order by movie title.
def leading_star_for_1910_films
  MovieDatabase.execute(<<-SQL)
    SELECT
      movies.title, actors.name
    FROM
      movies
    JOIN
      castings ON castings.movie_id = movies.id
    JOIN
      actors ON castings.actor_id = actors.id
    WHERE
      castings.ord = 1 AND movies.yr = 1910
    ORDER BY
      movies.title 
SQL
end

# 5. There is a movie from 1920 in our database for which there is no
#    associated casting information. Give the title of this movie.
def no_casting_info
  MovieDatabase.execute(<<-SQL)
    SELECT
      movies.title
    FROM
      movies
    LEFT OUTER JOIN
      castings ON castings.movie_id = movies.id 
    WHERE
      movies.yr = 1920 AND castings.actor_id IS NULL
SQL
end

# 6. Obtain a list in alphabetical order of actors who've had >=26
# starring roles. Order by actor name.
def biggest_stars
  MovieDatabase.execute(<<-SQL)
    SELECT 
      actors.name, COUNT(castings.movie_id) AS count
    FROM
      movies
    JOIN
      castings ON castings.movie_id = movies.id
    JOIN
      actors ON castings.actor_id = actors.id
    WHERE
      castings.ord = 1
    GROUP BY
      actors.id
    HAVING
      COUNT(castings.movie_id) >= 26
    ORDER BY
      actors.name 
SQL
end

# 7. List the movie year, movie title, and supporting actor (ord = 2)
# for all of the films in which Will Smith played the star role
# (ord = 1). Order by the name of the supporting actor.
def will_smith_supporting_actors
  MovieDatabase.execute(<<-SQL)
    SELECT
      ws.yr, ws.title, sact.name
    FROM
      movies AS ws
    JOIN
      castings AS wscast ON wscast.movie_id = ws.id
    JOIN
      actors AS wsact ON wscast.actor_id = wsact.id 

    JOIN
      castings AS scast ON scast.movie_id = ws.id
    JOIN
      actors AS sact ON scast.actor_id = sact.id
    WHERE
      wsact.name = 'Will Smith' AND wscast.ord = 1 AND scast.ord = 2
    ORDER BY
      sact.name
SQL
end

# 8. There is a movie in which 'Barrie Ingham' plays two roles. Write a
# query that returns the title of this movie.
def barrie_ingham_multiple_roles
  MovieDatabase.execute(<<-SQL)
    SELECT DISTINCT
      movies.title
    FROM
      movies
    JOIN
      castings ON castings.movie_id = movies.id
    JOIN
      actors ON castings.actor_id = actors.id
    WHERE
      actors.name = 'Barrie Ingham'
    GROUP BY
      actors.id, movies.id
    HAVING
      COUNT(*) = 2
SQL
end

