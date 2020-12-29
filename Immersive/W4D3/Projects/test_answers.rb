#==============================================================================#
# Write a recursive function that returns the prime factorization of
# a given number. Assume num > 1
#
# prime_factorization(12) => [2,2,3]
def prime_factorization(num)
  (2..Math.sqrt(num).ceil).to_a.each { |i| return [i] + prime_factorization(num/i) if num % i == 0 }
  [num]
end

p prime_factorization(12)

# Long Version
def prime_factorization(num)
end

def is_prime?(num)
end

p is_prime?(11)

p prime_factorization(12)