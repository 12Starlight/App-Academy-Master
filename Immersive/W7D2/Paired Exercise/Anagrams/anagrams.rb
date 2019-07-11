require "byebug"

# Phase I
# O(n!) runtime
# O(n!)
def first_anagram?(str1, str2)
  perms = []

  perms = str1.chars.permutation.to_a
  perms.map!(&:join)

  perms.include?(str2)
end 
 

# O(n^2) runtime
# O(1) space complexity 
def second_anagram?(str1, str2)
    str1.chars do |char|
        # debugger
        idx = str2.index(char)
        return false if idx.nil? 
        str2.delete!(str2[idx])     
    end   
    
    str2.empty?
end     

# O(n^2) runtime
# O(1) space complexity 
def third_anagram?(str1, str2)
    str1.chars.sort.join == str2.chars.sort.join
end     

# p third_anagram?("gizmo", "sally")    #=> false
# p third_anagram?("elvis", "lives")    #=> true

# O(n) runtime
# O(1) space complexity 
def fourth_anagram?(str1, str2)
    counts1 = Hash.new(0)
    counts2 = Hash.new(0)

    str1.split("").each { |char| counts1[char] += 1 }
    str2.split("").each { |char| counts2[char] += 1 } 

    counts1 == counts2
end     

# p fourth_anagram?("gizmo", "sally")    #=> false
# p fourth_anagram?("elvis", "lives")    #=> true


# O(n) runtime
# O(1) space complexity 
def bonus_anagram?(str1, str2)
    counts = Hash.new(0)

    str1.split("").each { |char| counts[char] += 1 }
    str2.split("").each { |char| counts[char] -= 1 }

    counts.all? { |_, v| v.zero? }
end     

# p bonus_anagram?("gizmo", "sally")    #=> false
# p bonus_anagram?("elvis", "lives")    #=> true
Collap