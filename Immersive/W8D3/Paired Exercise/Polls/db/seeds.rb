# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

ActiveRecord::Base.transaction do 
  User.destroy_all
  Poll.destroy_all
  Question.destroy_all
  AnswerChoice.destroy_all
  Response.destroy_all

  u1 = User.create!(username: 'Micky')
  u2 = User.create!(username: 'Donald')

  p1 = Poll.create!(title: 'Lion Poll', auther: u1)

  q1 = Question.create!(text: 'Which Lion Is The Fiercest', poll: p1)
  ac1 = AnswerChoice.create!(text: 'Snowball', question: q1)
  ac2 = AnswerChoice.create!(text: 'Sparks', question: q1)
  ac3 = AnswerChoice.create!(text: 'Zoey', question: q1)

  q2 = Question.create!(text: 'Which Toy Is The Best?', poll: p1)
  ac4 = AnswerChoice.create!(text: 'Tree', question: q2)
  ac5 = AnswerChoice.create!(text: 'Bubble', question: q2)
  ac6 = AnswerChoice.create!(text: 'Deer', question: q2)

  r1 = Response.create!(
    respondent: u2,
    answer_choice: ac4
  )
end 