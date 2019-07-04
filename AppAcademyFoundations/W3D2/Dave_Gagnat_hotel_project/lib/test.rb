# Write a method that takes in a number and returns a string, placing
# a single dash before and after each odd digit. There is one
# exception: don’t start or end the string with a dash.
#
# You may wish to use the `%` modulo operation; you can see if a number
# is even if it has zero remainder when divided by two.
#
# Difficulty: medium.

def dasherize_number(num)
  numbers = num.to_s.split("")
  new_str = ""

  numbers.each_with_index do |elm, i|
    start = numbers[i - 1].to_i
    middle = numbers[i].to_i
    ending = numbers[i + 1].to_i 
    
    if i == 0 && middle.odd? && ending.even? 
      new_str += elm + "-"
    elsif i == numbers.length - 1 && middle.odd? 
      new_str += "-" + elm     
    elsif i >= 1 && i <= numbers.length - 2 && middle.odd? && ending.even?
      new_str += "-" + elm + "-"
    elsif i >= 1 && i <= numbers.length - 2 && middle.odd? && ending.odd? 
      new_str += "-" + elm 
    elsif middle.odd? || middle.even?
      new_str += elm 
    end 
  end

  new_str
end

puts dasherize_number(203) # “20-3”
puts dasherize_number(333) # “3-3-3”
puts dasherize_number(303) # "3-0-3"
puts dasherize_number(3223) # "3-22-3"
puts dasherize_number(33333222453) # "3-3-3-3-3-2224-5-3"
puts dasherize_number(9387023467821312) # "9-3-8-7-02-3-46-7-82-1-3-1-2"