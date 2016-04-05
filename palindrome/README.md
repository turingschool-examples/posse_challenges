# Palindrome

A palindrome is a word or phrase that reads the same backward as forward. Examples of palindromes are: 'madam', 'kayak', and 'A Santa at NASA'.

## A bit of history from Wikipedia

Palindromes date back at least to 79 AD, as a palindrome was found as a graffito at Herculaneum, a city buried by ash in that year. This palindrome, called the Sator Square, consists of a sentence written in Latin: "Sator Arepo Tenet Opera Rotas" ("The sower Arepo holds with effort the wheels"). It is remarkable for the fact that the first letters of each word form the first word, the second letters form the second word, and so forth. Hence, it can be arranged (into a word square that reads in four different ways: horizontally or vertically from either top left to bottom right or bottom right to top left. As such, they can be referred to as palindromatic.

## Iteration 0

Write a function that given a string returns `true` if the string is a palindrome, and `false` if the string is not a palindrome.

## Iteration 1

Write a function `#count` that given a string, returns the total number of palindromes in that string.

Write a function `#list` that given a string, returns all unique palindromes in that string.

Letters and blocks of letter can occur in multiple palindromes, but the palindrome list should be a unique list. Duplicate palindromes should occur in the palindrom `#count`, but should not appear in the palindrome `#list`.

Single character palindromes do not count.

The test string below contains 22 total palindromes, and 20 unique palindromes.

* Test string: hraudeduarorgdgrorodmambabmkaalpdzyyzdzyy
