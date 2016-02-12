## Codebreakers

We're going to be writing a program to do some basic text encryption through everyone's friend, the command line.

### Iteration 1 - Initials

We're first going to start with an exercise to figure out how we can get code entered on the command line.

Create a file called `initials.rb`.

When we run `initials.rb` we want to enter in a name afterwards, and we want this program to return the initals of the name afterwards.

The interaction model will look a little something like this:

```
$ ruby initials.rb Taylor Swift

TS

$ ruby initials.rb Carly Rae Jeppsen

CRJ

```

You can feel free to make some assumptions here. For example, you can assume that each person will have a space between each of their names and you won't have to deal with any punctuation.

Rest assured that Conan O'Brien (Ew.) or Joseph Gordon-Levitt or Julia Louis-Dreyfus will not be using your program.


### Iteration 2 - Hail, Caesar!

The Caesar cipher was named after Julius Caesar, who used it to protect messages.

It's named this because it is the first recorded use in history of this sort of encryption.

If you want to read more about the Caesar Cipher, you can do so [here](https://en.wikipedia.org/wiki/Caesar_cipher).

The Caesar cipher is encrypts messages by rotating each letter by a set number of positions, known as the key,  and wrapping from Z back to A if needed.

For example, this is what we would have if we were to use the key 13:

```
Be sure to drink your Ovaltine!

Or fher gb qevax lbhe Binygvar!
```

Let's look at the first letter of the plaintext, `B`. The cyphertext for `B` is `O`, which is 13 characters away from `B`. Go ahead and count if you don't believe me, I'll wait.

Now, when it comes to your code, we're looking for this sort of interaction model:

```
$ ruby caesar.rb 10 Josh Mejia is secretly one half of Daft Punk.

Tycr Wotsk sc combodvi yxo rkvp yp Nkpd Zexu.

```

We run the program by typing in ruby and the name of your file, then we give it the key, and then our plaintext.


### Iteration 3 - The Worst

At this point, we understand the Caesar Cipher, which is a simple shift/substitution cipher. We take each letter, and we shift it by a set number.

This isn't very secure. You just need to try to decode it a maximum of 26 ways and you've figured it out.

So the next step in complexity is the Vigenère Cipher, a polyalphabetic substitution cipher.

Fun Fact - the cipher was named after the Blaise de Vigenère, who didn't even invent it.

The main difference between this cipher and the previous cipher is that we aren't using a single key here.

With Caesar, we shifted all of the letters by the same value, or key.

With Vigenère, we don't have a key value but a key word. This is how it works.

Say our key word is `bacon`. We take our plaintext, and we would shift the first letter by 2, because `b` is the second letter of the alphabet, the second letter would be shifted by 1,
and the sixth letter of the plaintext would be once again shifted by 2, because we would wrap around back to the `b` in `bacon`.

Our interaction model would look like this:

```
$ ruby vigenere.rb taylor Make PHP great again.

Gbjq EZJ hqqpl uhzuc.
```

Bonus Fun Fact: The Confederacy actually used this cipher during the Civil War. The problem was that they only really used three different key phrases. As you may have guessed, the Union was reading their mail on the regular. This is the 19th century equivalent of using "password" as your password.

### Scoring

* 15 points will be awarded for the completion of Iteration 2
* 20 points will be awarded for the completion of Iteration 3
* 25 points will be awarded for the completion of Iteration 3 in Ruby AND a second language.
* 10 bonus points will be awarded if all members of a posse are present at 8:30 for the Friday Morning Presentation.
