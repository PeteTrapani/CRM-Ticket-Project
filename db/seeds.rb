# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
puts "Seeding :]"

p1 = Production.create(title: '422 (Unprocessable Entity) error', genre: 'React', director:'BigTech', description:'422 (Unprocessable Entity) error', budget: 10.00, image:'https://imgur.com/a/ekwvShl', ongoing:true)

p2 = Production.create(title: 'Unclosed string literal', genre: 'Java', director:'SmallTech', description:' unclosed string literal.', budget: 5.00, image:'https://imgur.com/a/x8uPKPt', ongoing:true)

p3 = Production.create(title: 'Throw Ex error', genre: 'C#', director:'Mortgage Mayhem', description:'Throw Ex error.', budget: 200.00, image:'', ongoing:false)

p4 = Production.create(title: 'Wack', genre: 'Rails', director:'WannaBeSQL', description:'Wack.', budget: 500.00, image:'', ongoing:false)

p5 = Production.create(title: 'Import Error, KeyError, Life Error.', genre: 'Python', director:'TaskMaster', description:'Import Error, KeyError, Life Error.', budget: 20.00, image:'https://imgur.com/a/gnvXa4L', ongoing:false)

p6 = Production.create(title: 'Incorrect Data Binding', genre: 'Angular', director:'TechBro', description:'Incorrect Data Binding.', budget: 6000.00, image:'https://imgur.com/a/rGKkj6F', ongoing:false)


u1 = User.create(name:'pete', email:'pete@mail.com', password:'1234')
u2 = User.create(name:'dan', email:'dan@mail.com', password:'1234')



CastMember.create(name:"Dan the Man", role:"Bounty Hunter", production:Production.find_by(title:'Wack'))

Ticket.create(user:u1, production:p2, price:65.00)
Ticket.create(user:u2, production:p2, price:65.00)
Ticket.create(user:u2, production:p1, price:65.00)

puts "Done Seeding <3"
