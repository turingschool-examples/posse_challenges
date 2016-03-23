require './tic_tac_toe/tic_tac_toe'
require 'minitest/autorun'
require 'minitest/pride'

class TicTacToeTest < Minitest::Test

  attr_reader :game

  def setup
    @game = TicTacToe.new
  end

  def test_there_is_a_board
    assert_equal 3, game.board.length
    game.board.each { |row| assert_equal 3, row.length }
  end

  def test_the_positions_on_the_board_are_nil_unless_taken
    assert game.board.flatten.all?(&:nil?)
  end

  def test_it_can_find_positions_on_the_board_and_return_their_value
    assert_equal nil, game.value_of_position(1,1)
  end

  def test_it_places_an_element_in_a_position
    game.place(1,1)

    assert_equal nil, game.value_of_position(0,1)
    assert_equal 'O', game.value_of_position(1,1)
    assert_equal nil, game.value_of_position(2,1)
  end

  def test_it_places_Os_and_Xs_every_other_time
    game.place(1,1)
    assert_equal 'O', game.value_of_position(1,1)

    game.place(2,1)
    assert_equal 'X', game.value_of_position(2,1)

    game.place(0,0)
    assert_equal 'O', game.value_of_position(0,0)

    game.place(0,2)
    assert_equal 'X', game.value_of_position(0,2)
  end

  def test_it_places_elements_in_positions_unless_the_position_is_taken
    game.place(1,1)
    assert_equal 'O', game.value_of_position(1,1)

    game.place(1,1)
    assert_equal 'O', game.value_of_position(1,1)

    game.place(2,0)
    game.place(2,1)
    game.place(2,1)

    assert_equal 'X', game.value_of_position(2,0)
    assert_equal 'O', game.value_of_position(2,1)
    assert_equal 'O', game.value_of_position(2,1)
  end

  def test_it_finds_a_winning_board_horizontally
    game.place(2,0)
    game.place(1,1)
    game.place(2,1)
    game.place(0,2)
    game.place(2,2)

    assert_equal "Great job! Winner: O's", game.has_winner?
  end

  def test_it_finds_a_winning_board_horizontally_2
    game.place(2,0)
    game.place(0,0)
    game.place(2,1)
    game.place(0,1)
    game.place(1,0)
    game.place(0,2)

    assert_equal "Great job! Winner: X's", game.has_winner?
  end

  def test_it_finds_winning_board_vertically
    game.place(0, 1)
    game.place(1, 0)
    game.place(1, 1)
    game.place(1, 2)
    game.place(2, 1)

    assert_equal "Great job! Winner: O's", game.has_winner?
  end

  def test_it_finds_winning_board_vertically_2
    game.place(1, 0)
    game.place(0, 2)
    game.place(2, 0)
    game.place(1, 2)
    game.place(0, 1)
    game.place(2, 2)

    assert_equal "Great job! Winner: X's", game.has_winner?
  end

  def test_it_lets_you_know_when_there_s_no_winner
    game.place(0, 1)
    game.place(1, 0)
    game.place(1, 1)

    assert_equal "No winner yet!", game.has_winner?
  end

  def test_it_lets_you_know_when_there_s_no_winner_2
    game.place(0, 0)
    game.place(0, 1)

    game.place(1, 0)
    game.place(1, 1)

    game.place(2, 1)
    game.place(2, 2)

    assert_equal "No winner yet!", game.has_winner?
  end
end