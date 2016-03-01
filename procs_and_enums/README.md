# Enumerables

An enumerable is an object that may be enumerated. "Enumerated" means to count off the members of a set/collection/category one by one (usually in order, usually by name).

"Enumerable" is Ruby's way of saying that we can access each element in a collection, one at a time. Enumerable is a mixin in the Array class and it provides several _enumerators_ such as _each_, _map_, _select_ and many more. Find all [enumerables](http://ruby-doc.org/core-2.3.0/Enumerable.html) and [enumerators](http://ruby-doc.org/core-2.2.0/Enumerator.html) in the Ruby docs.

Ruby has a tons of enumerables which means that if we pick the right enumerable for the job, our implementation will be very clean and easy to read.

This week we are going to be writing enumerables from scratch. The groups are only allowed to use __each__, __until__ loops, __while__ loops and __for__ loops.

## Iteration 1

Build a method that behaves like the enumarator `any`.

```rb
ages = [12, 11, 13, 14, 16, 20]
ages.any? { |age| age > 18 }
=> true

ages = [25, 53, 31, 41, 43, 20]
ages.any? { |age| age < 18 }
=> false
```

Example behavior:

```rb
require './enums'
=> true
collection = [1, 2, 3, 4, 5]
=> [1, 2, 3, 4, 5]
condition = Proc.new { |a| a > 6 }
=> #<Proc:0x007facc939d4b0@(pry):22>
Enums.any?(collection, condition)
=> false
```

#### [Procs](http://ruby-doc.org/core-2.3.0/Proc.html)

Procs make it possible to create blocks and pass them around in our program. They also work like closures, meaning we can bind variables to the Proc to access later.

For example:

```rb
timesTwo = Proc.new { |e| e * 2 }
timesTwo.call(5)
=> 10

def travelingTheUS(city)
  return Proc.new { |name| "#{name} is visiting beautiful #{city}." }
end
denver = travelingTheUS("Denver")
denver.call("Wendy")
=> "Wendy is visiting beautiful Denver."

def add(num)
  return Proc.new {|i| i + num }
end
add5 = add(5)
add5.call(10)
=> 15

add10 = add(10)
add10.call(20)
=> 30

add10.call((add5.call(5)))
=> 20
```

### Iteration 2

Build a method that behaves like the enumarator `select`.

Example behavior:

```rb
require './enums'
=> true
collection = [1, 2, 3, 4, 5]
=> [1, 2, 3, 4, 5]
condition = Proc.new { |a| a % 2 == 0 }
=> #<Proc:0x007facc939d4b0@(pry):22>
Enums.select(collection, condition)
=> [2, 4]
```

### Iteration 3

Build a method that behaves like the enumarators `reduce`.

Example behavior:

```rb
require './enums'
=> true
collection = ["Rachel", "Joanne", "Nate"]
=> ["Rachel", "Joanne", "Nate"]
condition = Proc.new { |a| "#{a} works at Turing." }
=> #<Proc:0x007facc939d4b0@(pry):22>
Enums.reduce(collection, condition)
=> ["Rachel works at Turing.", "Joanne works at Turing.", "Nate works at Turing."]
```

### Iteration 4

Build a method that behaves like the enumarators `reject`.

Example behavior:

```rb
require './enums'
=> true
collection = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
=> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
condition = Proc.new { |a| a % 2 != 0 }
=> #<Proc:0x007facc939d4b0@(pry):22>
Enums.reject(collection, condition)
=> [2, 4, 6, 8, 10]
```

## Learning goals

* Understand how to iterate over a collection of elements
* Understand what a block is and how it's similar to a Proc
* Understand how to use a Proc