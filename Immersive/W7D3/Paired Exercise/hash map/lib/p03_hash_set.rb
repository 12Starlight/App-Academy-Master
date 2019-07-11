class HashSet
  attr_reader :count

  def initialize(num_buckets = 8)
    @store = Array.new(num_buckets) { Array.new }
    @count = 0
  end

  def insert(key)
    num = key.hash
    unless include?(num)
      idx = num % num_buckets
      @store[idx] << num 
      @count += 1
    end
    resize! if @count == num_buckets 
  end

  def include?(key)
    num = key.hash 
    @store.each do |sub|
      return true if sub.include?(num)
    end 
    false 
  end

  def remove(key)
    num = key.hash 
    if include?(key)
      i = num % num_buckets
      @store.delete_at(i)
      @count -= 1
    end 
  end

  private

  def [](num)
    # optional but useful; return the bucket corresponding to `num`
    idx = num % num_buckets
    @store[idx] 
  end

  def num_buckets
    @store.length
  end

  def resize!
    old_store = @store
    @store = Array.new(num_buckets * 2) { Array.new }
    @count = 0
    old_store.flatten.each { |elm| self.insert(elm) }
  end
end
