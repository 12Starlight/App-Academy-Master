class Code
  
  # class methods 
  POSSIBLE_PEGS = {
    "R" => :red,
    "G" => :green,
    "B" => :blue,
    "Y" => :yellow
  }

  def self.valid_pegs?(pegs)
    pegs.each { |peg| return false if !POSSIBLE_PEGS.has_key?(peg.upcase) } 
    true
  end   

  def self.random(length)
    random_pegs = [] 
    length.times { random_pegs << POSSIBLE_PEGS.keys.sample }
    Code.new(random_pegs)
  end 

  def self.from_string(pegs)
    pegs_arr = pegs.split("") 
    Code.new(pegs_arr)
  end   

  # getters, # setters
  attr_reader :pegs 


  def initialize(pegs)
    raise "Pegs are no longer valid" if !Code.valid_pegs?(pegs)
    @pegs = pegs.map(&:upcase) 
  end 


  # instance methods 
  def [](idx)
    @pegs[idx]
  end 

  def length 
    @pegs.length 
  end 

  def num_exact_matches(guess) 
    count = 0
    
    @pegs.each_with_index { |peg, i| count += 1 if peg == guess[i] }
      
    count 
  end 

  def num_near_matches(guess)
    count = 0

    @pegs.each_with_index { |peg, i| count += 1 if self[i] != guess[i] && self.pegs.include?(guess[i]) }
       
    count 
  end 

  def ==(guess)
    self.pegs == guess.pegs  
  end 
  
end
