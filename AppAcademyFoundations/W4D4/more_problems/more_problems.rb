
# Build Main Method 
def no_dupes?(arr)
  unique = Hash.new(0)

  arr.each { |elm| unique[elm] += 1 }

  none = unique.select { |k, v| v < 2 }
  none.keys  
end 

p no_dupes?([1, 1, 2, 1, 3, 2, 4])         # => [3, 4]
p no_dupes?(['x', 'x', 'y', 'z', 'z'])     # => ['y']
p no_dupes?([true, true, true])            # => []


# Build Main Method 
def no_consecutive_repeats?(arr)
  (0...arr.length - 1).each_with_index do |elm, i|
    return false if arr[i] == arr[i + 1]
  end 

  true 
end 
 
p no_consecutive_repeats?(['cat', 'dog', 'mouse', 'dog'])     # => true
p no_consecutive_repeats?(['cat', 'dog', 'dog', 'mouse'])     # => false
p no_consecutive_repeats?([10, 42, 3, 7, 10, 3])              # => true
p no_consecutive_repeats?([10, 42, 3, 3, 10, 3])              # => false
p no_consecutive_repeats?(['x'])                              # => true


# Build Main Method
def char_indices(str) 
  indicies = Hash.new { |h, k| h[k] = [] }

  str.each_char.with_index do |char, idx_1| 
    indicies[char] << idx_1 
  end 

  indicies
end 

p char_indices('mississippi')   # => {"m"=>[0], "i"=>[1, 4, 7, 10], "s"=>[2, 3, 5, 6], "p"=>[8, 9]}
p char_indices('classroom')     # => {"c"=>[0], "l"=>[1], "a"=>[2], "s"=>[3, 4], "r"=>[5], "o"=>[6, 7], "m"=>[8]}


# Build Main Method 
def longest_streak(str)
  longest = ""
  current = ""

  (0..str.length - 1).each do |i|
    first = str[i]
    match = str[i + 1]
    current += first  
    
    if first != match && current.length >= longest.length
      longest = current
      current = ""
    elsif current.length >= longest.length
      longest = current.delete_at(0)
    end    

    if i == str.length - 1 && current.length >= longest.length 
      return current 
    end    
  end 
  
  longest 
end 

=begin   
function longestLetterStreak(str, searchLetters) {
  var longestStreak = -1;
  var currentStreak = 0;

  for (var i = 0; i < str.length; i += 1) {
    var char = str[i];

    if (searchLetters.indexOf(char) !== -1) {
      currentStreak++;

      if (currentStreak > longestStreak) {
        longestStreak = currentStreak;
      }
    } else {
      currentStreak = 0;
    }
  }

  return longestStreak;
}
=end 

p longest_streak('a')           # => 'a'
p longest_streak('accccbbb')    # => 'cccc'
p longest_streak('aaaxyyyyyzz') # => 'yyyyy
p longest_streak('aaabbb')      # => 'bbb'
p longest_streak('abc')         # => 'c'