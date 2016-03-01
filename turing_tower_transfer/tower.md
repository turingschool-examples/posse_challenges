# Turing Tower Transfer Puzzle

```
      |             |              |             ==>                |              |           |
      _             |              |             ==>                |              |           _
     ___            |              |             ==>                |              |          ___
    _____           |              |             ==>                |              |         _____
   _______          |              |             ==>                |              |        _______
  _________         |              |             ==>                |              |       _________
 ___________        |              |             ==>                |              |      ___________
------|-------------|--------------|-----                     ------|--------------|-----------|------
```

### The object of the puzzle is to move the entire of disks stack to another rod. There are a few simple rules that we but follow:

* Only one disk can be moved at a time.
* Each move consists of taking the upper disk from one of the stacks and placing it on top of another stack i.e. a disk can only be moved if it is the uppermost disk on a stack.
* No disk may be placed on top of a smaller disk.


### Your Task
Implement and algorythm to solve this puzzle that:
* Outputs the number of moves it took to solve the puzzle
* Allows for input of the number of disks you want your game to have
* Uses TDD to get to your solution
* Also - try it both iteratively and recursively

---------------------------------------------------------------------------------------------------

### If you finish early:

* __try to benchmark your solution and investigate the difference between a puzzle with a small number of disks and a puzzle with a large number of disks__
* __try it in another language__
* __try to have a visual output for the game__
