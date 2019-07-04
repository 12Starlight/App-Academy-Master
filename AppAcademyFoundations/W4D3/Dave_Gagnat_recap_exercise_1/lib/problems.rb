# Write a method, all_vowel_pairs, that takes in an array of words and returns all pairs of words
# that contain every vowel. Vowels are the letters a, e, i, o, u. A pair should have its two words
# in the same order as the original array. 
#
# Example:
#
# all_vowel_pairs(["goat", "action", "tear", "impromptu", "tired", "europe"])   # => ["action europe", "tear impromptu"]
def all_vowel_pairs(words)
    vowels = "aeiou".split("")
    pairs = [] 

    words.each_with_index do |word_1, idx_1|
        words.each_with_index do |word_2, idx_2|
            pair = word_1 + " " + word_2 
        
            if vowels.all? { |vowel| idx_1 < idx_2 && pair.include?(vowel) }
                pairs << pair 
            end 
        end 
    end
    
    pairs 
end 


# Write a method, composite?, that takes in a number and returns a boolean indicating if the number
# has factors besides 1 and itself
#
# Example:
#
# composite?(9)     # => true
# composite?(13)    # => false
def composite?(num)
    (2...num).each do |i|
        if num % i == 0 
            return true 
        end 
    end 

    false 
end


# A bigram is a string containing two letters.
# Write a method, find_bigrams, that takes in a string and an array of bigrams.
# The method should return an array containing all bigrams found in the string.
# The found bigrams should be returned in the the order they appear in the original array.
#
# Examples:
#
# find_bigrams("the theater is empty", ["cy", "em", "ty", "ea", "oo"])  # => ["em", "ty", "ea"]
# find_bigrams("to the moon and back", ["ck", "oo", "ha", "at"])        # => ["ck", "oo"]

# My Working Solution
=begin 
def find_bigrams(str, bigrams)
    bigram = Hash.new(0)

    bigrams.each do |elm|
        if str.include?(elm)
            bigram[elm] += 1
        end 
    end 

    bigram.keys 
end
=end 
def find_bigrams(str, bigrams)
    bigrams.select { |elm| str.include?(elm) } # need to work more with select and include in a combined fashion instead of .each
end


class Hash
    # Write a method, Hash#my_select, that takes in an optional proc argument
    # The method should return a new hash containing the key-value pairs that return
    # true when passed into the proc.
    # If no proc is given, then return a new hash containing the pairs where the key is equal to the value.
    #
    # Examples:
    #
    # hash_1 = {x: 7, y: 1, z: 8}
    # hash_1.my_select { |k, v| v.odd? }          # => {x: 7, y: 1}
    #
    # hash_2 = {4=>4, 10=>11, 12=>3, 5=>6, 7=>8}
    # hash_2.my_select { |k, v| k + 1 == v }      # => {10=>11, 5=>6, 7=>8})
    # hash_2.my_select                            # => {4=>4}
    def my_select(&prc)
        new_hash = Hash.new(0)
        prc ||= Proc.new { |k, v| k == v }

        self.each { |key, val| new_hash[key] = val if prc.call(key, val) }

        new_hash
    end
end


class String
    # Write a method, String#substrings, that takes in a optional length argument
    # The method should return an array of the substrings that have the given length.
    # If no length is given, return all substrings.
    #
    # Examples:
    #
    # "cats".substrings     # => ["c", "ca", "cat", "cats", "a", "at", "ats", "t", "ts", "s"]
    # "cats".substrings(2)  # => ["ca", "at", "ts"]
    def substrings(length = nil)
        new_str = [] 

        (0..self.length - 1).each do |start|
            (start..self.length - 1).each do |ending|
                sub_str = self[start..ending]
                new_str << sub_str 
            end 
        end 

        if length == nil 
            new_str
        else  
            new_str.select { |sub| sub.length == length }
        end 
    end 


    # Write a method, String#caesar_cipher, that takes in an a number.
    # The method should return a new string where each char of the original string is shifted
    # the given number of times in the alphabet.
    #
    # Examples:
    #
    # "apple".caesar_cipher(1)    #=> "bqqmf"
    # "bootcamp".caesar_cipher(2) #=> "dqqvecor"
    # "zebra".caesar_cipher(4)    #=> "difve"
    def caesar_cipher(num)
        alphabet = ("a".."z").to_a 
        str_shift = ""

        self.each_char do |char|
            idx = alphabet.index(char)
            shifted = (idx + num) % alphabet.length
            str_shift += alphabet[shifted]
        end 

        str_shift
    end
end
