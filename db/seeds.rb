# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
puts "Seeding :]"

Recipe.create(
    title: "Password Reset",
    instructions: "Plz reset my password",
)
Recipe.create(
    title: "Production access",
    instructions: "give me access to production so I can push my code!",
)
Recipe.create(
    title: "DommiTummy is down!",
    instructions: "Clients are not able to access the website after signing up.",
)

puts "Done Seeding <3"
