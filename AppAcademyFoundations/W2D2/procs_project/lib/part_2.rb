
# Build Main Method
def reverser(str, &prc)
  prc.call(str.reverse)
end 


# Build Main Method
def word_changer(sentence, &prc)
  words = sentence.split

  new_sen = words.map { |word| prc.call(word) }

  new_sen.join(" ")
end 


# Build Main Method
def greater_proc_value(num, prc_1, prc_2)
  proc1 = prc_1.call(num)
  proc2 = prc_2.call(num)

  if proc1 > proc2 
    return proc1
  else  
    return proc2
  end 
end 


# Build Main Method 
def and_selector(arr, prc_1, prc_2)
  new_arr = []
  
  arr.each do |elm|
    proc1 = prc_1.call(elm)
    proc2 = prc_2.call(elm)

    if proc1 && proc2
      new_arr << elm 
    end 
  end 

  new_arr
end 


# Build Main Method
def alternating_mapper(arr, prc_1, prc_2)
  arr.each_with_index.map do |elm, i|
    proc1 = prc_1.call(elm)
    proc2 = prc_2.call(elm)
    
    if i.even?
      proc1
    else  
      proc2
    end 
  end
end 