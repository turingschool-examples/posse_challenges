# People Database

This week's challange is to create a people 'database' that we can query and manipulate data from.
To clarify, this will all be done with Ruby. This is not creating a real database such as Sqlite3 or PostgreSQL.

## Setup

Create a `person.rb` file and a `people_database.rb` file.
The `Person` should have the attributes of a first name, last name, email, and state.
A `PersonDatabase` should be initialized with an array of `Person` objects.

Example:

```ruby
people = [...]
people_db = PeopleDatabase.new(people)
```

## 1: Adding People

Create a method on the `PersonDatabase` that when called, adds a person to our database given data about the person.

Example:
```ruby
people_db.add(first_name: "Tess", last_name: "Griffin", email: "tess@turing.io", state: "CO")
```

## 2: Querying and manipulating data

Add functionality to your `PeopleDatabase` to:

* Remove a person from the collection given an email address
* Return all of the people from a given state
* Return a comma-separated string of every person's email address
* Count the number of people from a given state