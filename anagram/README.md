# Anagram

An anagram is a type of word play, the result of rearranging the letters of a word or phrase to produce a new word or phrase, using all the original letters exactly once. For example, the word `cat` has one anagram; `act`.

There's a lot of interesting applications of anagrams. Natural philosophers in the 17th century like Galileo and Robert Hooke used anagrams to establish and communicate their theories and findings. Anagrams are also connected with pseudonyms since it can funcation as a mask. Many artists, authors and others use anagrams to either conceal their real identity or to be able to circumvent restrictions on the use of real names in the arts.

In this challenge, we are going to write a function that given an English word, it will return all its anagrams. You can use the dictionary on your machine, you find it at `/usr/share/dict/words`. Run `File.read('/usr/share/dict/words')` from a pry session to access the word list.

## Iteration 0

Write a function that given a word, returns all of its anagrams in the English dictionary. The anagrams need to be valid words.

Example behavior:

```rb
a = AnagramFinder.new
a.anagrams_for("cat") #=> ["act"]

a.anagrams_for("tac") #=> "Not a valid English word. Try again!"
```