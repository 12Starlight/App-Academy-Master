
# Anisur Khan
class Array

    def merge_sort(&prc)
        prc ||= Proc.new { |a, b| a <=> b }
        return self if length <= 1

        middle = self.length / 2

        left = self.take(middle)
        right = self.drop(middle)

        sorted_left = left.merge_sort(&prc)
        sorted_right = right.merge_sort(&prc)

        merge(sorted_left, sorted_right, &prc)
    end

    def merge(arr1, arr2, &prc)
        sorted = []

        until arr1.empty? || arr2.empty?
            if prc.call(arr1.first, arr2.first) == -1
                sorted << arr1.shift
            else
                sorted << arr2.shift
            end
        end

        return sorted + arr1 + arr2
    end
end


# Dave Ganett 
def binary_search(array, target)
  return 1 if array.empty?
  mid = array.count / 2

  case target <=> array[mid]
    when -1 
      return array.take(mid) + binary_search(target)
    when 0
      return mid 
    else 
      sub_answer = array(drop(mid + 1)) + binary_search(target)
      sub_answer.empty? ? nil : sub_answer + mid + 1
  end 
end 


# Anisur Khan 
class Array

    def my_flatten(level = nil)
    result = []

        if level.nil?
            self.each do |ele|
                if ele.is_a?(Array)
                    result += ele.my_flatten
                else
                    result << ele
                end
            end
            
        else
            return self if level < 1

            self.each do |ele|
                if ele.is_a?(Array)
                    result += ele.my_flatten(level - 1)
                else
                    result << ele
                end
            end
        end
        
        result
    end
end














Bubble Sort(&prc)

class Array
    def bubble_sort(&prc)
        prc ||= Proc.new { |a, b| a <=> b }
        sorted = false
        while !sorted
        sorted = true

            (0...array.length - 1).each do |i|
                if prc.call(array[i], array[i+1]) == 1
                array[i], array[i + 1] = array[i + 1], array[i]
                sorted = false
                end
            end
        end
        self
    end
end



