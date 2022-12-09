# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


vegetatable_shoyu  = MenuItem.create(name: "Vegetable Shoyu", description: "Vegetable broth: tofu, green onion, corn, bok choy", menu_id: 5, price: 13, image_url: "https://olo-images-live.imgix.net/0c/0c8972a1e0a94e0687412c0fe3c93cee.jpg?auto=format%2Ccompress&q=60&cs=tinysrgb&w=528&h=352&fit=fill&fm=png32&bg=transparent&s=3db6be6e5959f1b8803c28055a9023b4")

tonkatsu_original = MenuItem.create(name: "Tonkatsu Original", description: "Pork broth: pork chashu, green onion, spinach, seasoned egg*, nori dried seaweed", menu_id: 5, price: 14, image_url: "https://olo-images-live.imgix.net/a0/a05b1b59f2f94386a933efd4bed4baae.jpg?auto=format%2Ccompress&q=60&cs=tinysrgb&w=528&h=352&fit=fill&fm=png32&bg=transparent&s=b6ca82fa325073a6317f4600fc73692f")

spicy_miso = MenuItem.create(name: "Spicy Umami Miso", description: "Pork broth: ground pork soboro, bean sprouts, green onion, bok choy and chili oil", menu_id: 5, price: 16, image_url: "https://olo-images-live.imgix.net/6f/6fdf3b74cf994bd79f98a7c6e15095b7.jpg?auto=format%2Ccompress&q=60&cs=tinysrgb&w=528&h=352&fit=fill&fm=png32&bg=transparent&s=e6f5e057c35ff296187d5f415be63641")
