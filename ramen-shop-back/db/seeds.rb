# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

ramen_menu = Menu.create(category: "ramen")

menu_item_one = MenuItem.create(name: "Tonkatsu Ramen", description: "Pork bone broth", menu_id: 1, price: 15 )
menu_item_two = MenuItem.create(name: "Shoyu Ramen", description: "Soy broth", menu_id: 1, price: 14 )
