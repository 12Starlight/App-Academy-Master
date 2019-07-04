
# Build Main Method 
def is_prime?(num)
  return false if num < 2

  (2...num).each do |i|
    return false if num % i == 0
  end
  
  true
end 


# Build Main Method
def nth_prime(n)
  max = n * n
  primes = prime_range(2, max)
  
  if n == 1 
    return 2
  elsif n == 0 
    return 1
  end
  
  # primes[n-1] # Do not know why this will not work?
end 


# Build Main Method
def prime_range(min, max)
  primes = []
  
  (min..max).each do |i|
    primes << i if is_prime?(i)
  end
  
  primes 
end 