# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)



salad_menu = Menu.create(category: "salad")

house_salad = MenuItem.create(name: "House Salad", description: "Baby arugula, kale and baby mix green with Japanese dressing", menu_id: 7, price: 5, image_url: "https://olo-images-live.imgix.net/69/69bfeb3290e94b71af69eabfec7ab000.jpg?auto=format%2Ccompress&q=60&cs=tinysrgb&w=528&h=352&fit=fill&fm=png32&bg=transparent&s=3cd5a9195866ca072951b124ef39a72b")
quinoa_salad = MenuItem.create(name: "Quinoa Salad", description: "Baby greens, kale, broccoli, white quinoa, kidney beans and garbanzo beans tossed with sesame dressing, garnished with corn and cherry tomatoes", menu_id: 7, price: 8, image_url: "https://olo-images-live.imgix.net/54/54cad345c10949728be5dedfc250d9a7.jpg?auto=format%2Ccompress&q=60&cs=tinysrgb&w=528&h=352&fit=fill&fm=png32&bg=transparent&s=9c588ce57ae2dd90c0e10fa54c5199f3")


