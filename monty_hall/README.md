## The Monty Hall Problem

Maybe you've heard this one.

> Suppose you're on a game show, and you're given the choice of three doors: Behind one door is a car; behind the others, goats. You pick a door, say No. 1, and the host, who knows what's behind the doors, opens another door, say No. 3, which has a goat. He then says to you, "Do you want to pick door No. 2?" Is it to your advantage to switch your choice?

### The rules

Here are the rules of the Monty Hall problem:

- There are three doors
- Behind a random door, there is a car
- Behind the other two doors, there are goats
- The contestant starts by choosing one of the three doors
- The host opens one of the doors that is not the contestant's choice, but is a goat
- The contestant has the option to change her choice after the reveal
- The contestant wins if the car is behind the chosen door

The question, as stated above, is whether it matters for you to switch.

### The code

Write a simulator to play the game with two different strategies. Return whether you won or lost.

```
simulator = MontyHall.new
simulator.play(switch: true)
#=> "win"

simulator.play(switch: true)
#=> "lose"
```

Keep track of wins and losses

```
...
simulator.number_of_games
#=> 2

simulator.wins
#=> 1

simulator.losses
#=> 1

simulator.win_percentage
#=> 50%
```
### The answer

Use this class to answer whether switching changes your chances of winning.

### Probably sexism

[http://marilynvossavant.com/game-show-problem/](http://marilynvossavant.com/game-show-problem/)
