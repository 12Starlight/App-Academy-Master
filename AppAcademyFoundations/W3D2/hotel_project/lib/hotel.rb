require_relative "room"

class Hotel
  def initialize(name, rooms)
    @name = name
    @rooms = {}
    
    rooms.each do |room_name, num_rooms|
      @rooms[room_name] = Room.new(num_rooms)
    end   
  end 

  # getters
  def name 
    @name.split.map(&:capitalize).join(" ")
  end 

  def rooms
    @rooms 
  end 

  # setters


  # instance methods
  def room_exists?(name)
    return true if @rooms.include?(name)
    false
  end 

  def check_in(person, room_name)
    room = @rooms[room_name]

    if self.room_exists?(room_name)
      if room.available_space 
        added = room.add_occupant(person)
        if added 
          puts "check in successful"
        else  
          puts "sorry, room is full"
        end 
      end
    else  
      puts "sorry, room does not exist"
    end
  end 

  def has_vacancy?
    @rooms.each do |room, num| 
      if !@rooms[room].full? 
        return true   
      end 
    end
    
    false  
  end 

  def list_rooms
    @rooms.each do |room, num|
      puts room + ": Available rooms: " + @rooms[room].available_space.to_s
    end  
  end 


  # class methods

end
