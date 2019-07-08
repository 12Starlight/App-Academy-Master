
## Dave Ganett

# What is a class?

A class is used to intialize instances that share the same attributes  


class Anamal
  def initialize(name, legs) OPP

  end
end 

class Dog
  def initialize()
    super(name, legs)
    end
end


# What does self mean?

Self refrences instance methods and attributes, including class methods that you are 
currently using in that class 


# What is the use of Super?

Allows a child class to initialize variables from a parent parent class  


# Design the Jukebox classes using OOP

Jukebox class - parent
Music class - child of Jukebox
Module - methods that I can use for both classes 

Note: If this was a real Jukebox, genre, playlists, artists, album would all have their
owne separate classes. I am simply demonstrating inheritance and basic class structure 

class Jukebox
  def initialize(genre, playlists)
    @genre = genre
    @playlist = playlist
  end 
  include Module
    play
    lists
end

class Music
  intialize(artists, album)
    @artists = artists
    @album = album
    super(genre, playlist)
  end
  include Module 
    search
    find_similar
end

Module 
  lists 
  play
  search
  find_similar
end 


# Does it accept currency? 

No


# If you designed this thing, would you let it accept currency or just be free?

It depends on which occasions you used the Jukebox for


# Implement BFS, lets assume there is a Node class and proc, the node will have a value
and an attr_reader on the Node, there are working parent child relatonship on the Node
class. There will be a parent, child, value 

BFS ----> across ------> in between -------> nodes 
First in First out


que = shift, push
      unshift, pop 

[processing] 

[a, b, c] - check front of que

So, I am going to have a que, then take the first element and shift off that element
into the processing que, then take what is in the processing que and check already visted. 
If not already visited, then I would want to shift off out of the 
procceing and put what was being processed into the already visited array. Then I would
start the process over 

que = [root] # the root of the que, first element in the que 
  until que.empty? 
    el = el.shift
    // prc.call(el) # if I was using a proc, it would evaluated around here 
    process(el)  
    el.children.each { |child| que << child }
  end


# So, how would this be implement with a proc?

It would be exactly the same except, before the Node goes into processing, it would first
be passed into the proc and be evaluated. Then the Node would be checked for to see, if
it was already visted. If it was, then it would be discarded, otherwise it would be added 
to already visited. Then the process would start all over again. 


## Abby Xu

# Q: what is an Object?

Object is like a container to store methods or data in a particular strcture. 
with Objects, you can easily pass the methods and data around to others.

# Q: What particularly?

Any data structure
instances of classes
methods
the root class

# Q: a ||= b

translation: a = a || b

when a is falsy, like nil
then evaluate the right hand side which is b.

if a is truthy, evaluate a

# Q: What is unit testing?

primary techniq

the smallest unit in the testing

# Q: OOP Parking lot


class ParkingLot  // parent class
    @spots
    @max_spots
end

class Spot
    @empty or not?
    @type: disabled, 2hours, employees parking, customer
end

class Car
    @owner_ID: cutomers, employees, drop_off, disabled person
    @car_type: truck, small vihecle, etc.
end

## DFS

root_node
    @value
    @parent
    @children

Stack: FILO

try to find the target value (could use a proc) in the stack.

- in every search, go straight to the bottom/leaf (where has no children), to search for the target.

- if target not found, go back up one level, search the node's other children, until it finished.

- If target found, return the node to the top of the tree. 

- from the target node, look for its parent node, keep doign that, till the root node. 

- keep an array [] of parents, to keep the path nodes.

class Node
    def dfs(target, &prc)

        dfs(target, &prc)

    end
end