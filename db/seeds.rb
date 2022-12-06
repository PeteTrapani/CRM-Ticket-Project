# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
puts "Seeding :]"

Ticket.create(
    title: "Password Reset",
    issues: "Plz reset my password",
)
Ticket.create(
    title: "Production access",
    issues: "give me access to production so I can push my code!",
)
Ticket.create(
    title: "DommiTummy is down!",
    issues: "Clients are not able to access the website after signing up.",
)

puts "Done Seeding <3"
