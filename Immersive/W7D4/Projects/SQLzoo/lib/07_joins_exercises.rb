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

def example_join
  execute(<<-SQL)
    SELECT
      *
    FROM
      movies
    JOIN
      castings ON movies.id = castings.movie_id
    JOIN
      actors ON castings.actor_id = actors.id
    WHERE
      actors.name = 'Sean Connery'
  SQL
end

def ford_films
  # List the films in which 'Harrison Ford' has appeared.
  execute(<<-SQL)
    SELECT
      movies.title 
    FROM
      movies
    INNER JOIN
      castings ON castings.movie_id = movies.id
    INNER JOIN
      actors ON castings.actor_id = actors.id
    WHERE
      actors.name = 'Harrison Ford'
    ORDER BY
      yr
  SQL
end

def ford_supporting_films
  # List the films where 'Harrison Ford' has appeared - but not in the star
  # role. [Note: the ord field of casting gives the position of the actor. If
  # ord=1 then this actor is in the starring role]
  execute(<<-SQL)
    SELECT
      movies.title 
    FROM
      movies
    INNER JOIN
      castings ON castings.movie_id = movies.id
    INNER JOIN
      actors ON castings.actor_id = actors.id
    WHERE
      actors.name = 'Harrison Ford' AND castings.ord != 1
    ORDER BY
      yr
  SQL
end

def films_and_stars_from_sixty_two
  # List the title and leading star of every 1962 film.
  execute(<<-SQL)
    SELECT
      movies.title, actors.name 
    FROM
      movies
    INNER JOIN
      castings ON castings.movie_id = movies.id
    INNER JOIN
      actors ON castings.actor_id = actors.id
    WHERE
      yr = 1962 AND ord = 1
    ORDER BY
      yr 
  SQL
end

def travoltas_busiest_years
  # Which were the busiest years for 'John Travolta'? Show the year and the
  # number of movies he made for any year in which he made at least 2 movies.
  # In SELECT, COUNT(movies.yr) is the same as COUNT(*)
  # We defined COUNT(*) in having  
  execute(<<-SQL)
    SELECT
      movies.yr, COUNT(*)
    FROM
      movies
    INNER JOIN
      castings ON castings.movie_id = movies.id
    INNER JOIN
      actors ON castings.actor_id = actors.id
    WHERE 
      actors.name = 'John Travolta' 
    GROUP BY
      movies.yr
    HAVING 
      COUNT(*) >= 2
  SQL
end

def andrews_films_and_leads
  # List the film title and the leading actor for all of the films 'Julie
  # Andrews' played in.
  # IN does not go with =
    # SELECT must match WHERE 
  # INNER JOIN's must join to your FROM statment  
  execute(<<-SQL)
    SELECT
      movies.title, actors.name
    FROM
      actors
    INNER JOIN
      castings ON castings.actor_id = actors.id
    INNER JOIN
      movies ON castings.movie_id = movies.id
    WHERE
      movies.id IN (
        SELECT
          movies.id
        FROM
          movies
        INNER JOIN
          castings ON castings.movie_id = movies.id
        INNER JOIN
          actors ON castings.actor_id = actors.id
        WHERE
          actors.name = 'Julie Andrews'
      ) AND castings.ord = 1
  SQL
end

def prolific_actors
  # Obtain a list in alphabetical order of actors who've had at least 15
  # starring roles.
  # aggregate functions COUNT() should match GROUP BY, * is a shortcut
  # WHERE goes before GROUP BY
  execute(<<-SQL)
    SELECT
      actors.name
    FROM
      actors 
    INNER JOIN
      castings ON castings.actor_id = actors.id
    WHERE
      castings.ord = 1
    GROUP BY
      actors.name
    HAVING
      COUNT(actors.name) >= 15 
    ORDER BY
      actors.name 
  SQL
end

def films_by_cast_size
  # List the films released in the year 1978 ordered by the number of actors
  # in the cast (descending), then by title (ascending).
  # ORDER BY must use a comma --> , 
  # COUNT (DISTINCT castings.actor_id), removes duplicate actor_id's
    # COUNT(movies.id), same as just counting movies id's 
  execute(<<-SQL)
    SELECT
      movies.title, COUNT(DISTINCT castings.actor_id) AS actor_count
    FROM 
      movies
    INNER JOIN
      castings ON castings.movie_id = movies.id
    WHERE
      movies.yr = 1978
    GROUP BY
      movies.id
    ORDER BY
      COUNT(movies.id) DESC, movies.title ASC
  SQL
end

def colleagues_of_garfunkel
  # List all the people who have played alongside 'Art Garfunkel'.
  # create alias (a1) for the id of movies with the actor
  # create alias (m1) for all the actors minus the chosen actor and the movies they played in
  # match the a1.id with the m1.movie_id
    # return m1.name 
  execute(<<-SQL)
    SELECT
      m1.name 
    FROM (
      SELECT
        actors.name, movie_id
      FROM
        actors
      INNER JOIN
        castings ON castings.actor_id = actors.id
      WHERE
        actors.name != 'Art Garfunkel'
    ) AS m1
    INNER JOIN (
      SELECT
        movies.id
      FROM
        movies
      INNER JOIN
        castings ON castings.movie_id = movies.id
      INNER JOIN
        actors ON castings.actor_id = actors.id
      WHERE
        actors.name = 'Art Garfunkel'
    ) AS a1 ON m1.movie_id = a1.id
  SQL
end
