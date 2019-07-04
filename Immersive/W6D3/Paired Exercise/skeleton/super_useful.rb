# PHASE 2
def convert_to_int(str)
  begin
    Integer(str)
    puts "Cannot covert interger into string"
  rescue ArgumentError => exception
    puts "There's an error!"
      # exception.message 
    end
end
p convert_to_int("coders!")


class CoffeeError < StandardError
  def message 
    puts "NO COFFEE!"
  end
end

# class FruitError < StandardError
#   def message 
#     puts "No fruit"
#   end
# end

# PHASE 3
FRUITS = ["apple", "banana", "orange"]

def reaction(maybe_fruit)
  begin
    if maybe_fruit == "coffee"
      puts "OMG, thanks so much for the #{maybe_fruit}!"
    end

  rescue CoffeeError => exception        
    exception.message 

  rescue StandardError => exception         
    puts "Wrong FOOD!"
    retry 
  end 

  # if maybe_fruit == "coffee"
  #   raise CoffeeError
  # elsif FRUITS.include?(maybe_fruit)
  #   puts "OMG, thanks so much for the #{maybe_fruit}!"
  # else
  #   raise FruitError => exception    
  # end
end
# p reaction("coffee")

def feed_me_a_fruit  
  puts "Hello, I am a friendly monster. :)"

  puts "Feed me a fruit! (Enter the name of a fruit:)"
  maybe_fruit = gets.chomp
  reaction(maybe_fruit)
  # begin
  #   puts "Hello, I am a friendly monster. :)"
  #   puts "Feed me a fruit! (Enter the name of a fruit:)"
  #   maybe_fruit = gets.chomp
  # rescue CoffeeError => exception
  #   puts exception.message
  #   retry 
  # rescue StandardError => exception 
  #   puts exception.message
  # end 
end
p feed_me_a_fruit  

# PHASE 4
class BestFriend
  def initialize(name, yrs_known, fav_pastime)
    @name = name
    @yrs_known = yrs_known
    @fav_pastime = fav_pastime
  end

  def talk_about_friendship
    puts "Wowza, we've been friends for #{@yrs_known}. Let's be friends for another #{1000 * @yrs_known}."
  end

  def do_friendstuff
    puts "Hey bestie, let's go #{@fav_pastime}. Wait, why don't you choose. 😄"
  end

  def give_friendship_bracelet
    puts "Hey bestie, I made you a friendship bracelet. It says my name, #{@name}, so you never forget me." 
  end
end


