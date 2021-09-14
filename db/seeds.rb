# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first);asdja;sdl


require 'faker'

puts "Clearing old data..."
Car.destroy_all
Car.reset_pk_sequence
Price.destroy_all
Price.reset_pk_sequence
Ticket.destroy_all
Ticket.reset_pk_sequence


puts "Printing Cars...zroom"

20.times do
    carmake = Faker::Vehicle.make
    Car.create(
        Owner: Faker::Name.name,
        licensePlate: Faker::Vehicle.license_plate,
        vehicleMake: carmake,
        vehicleModel: Faker::Vehicle.model(make_of_model:carmake),
        color: Faker::Vehicle.color
        )
end

puts "Making prices...$$$"

1.times do
Price.create(
    initial:10, 
    hourly:3,
    wholeDay:35)
end

puts "Making Tickets...brr brr"

timeform=Faker::Date.between(from: 2.days.ago, to: Date.today)
20.times do
    Ticket.create(
        car_id:Car.ids.sample,
        price_id:Price.ids.sample,
        date:timeform,
        hours: rand(1...7),
        days: 0,
        paid:Faker::Boolean.boolean(true_ratio: 0.3)
    )
end

5.times do
    Ticket.create(
        car_id:Car.ids.sample,
        price_id:Price.ids.sample,
        date:Faker::Date.between(from: 2.days.ago, to: Date.today),
        hours: 0,
        days: rand(1...7),
        paid:Faker::Boolean.boolean(true_ratio: 0.3)
    )

end



