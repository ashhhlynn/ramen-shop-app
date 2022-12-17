# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

ramen_menu = Menu.create(category: "ramen")
vegetatable_shoyu  = MenuItem.create(name: "Vegetable Shoyu", description: "Vegetable broth: tofu, green onion, corn, bok choy", menu_id: 5, price: 13, image_url: "https://olo-images-live.imgix.net/0c/0c8972a1e0a94e0687412c0fe3c93cee.jpg?auto=format%2Ccompress&q=60&cs=tinysrgb&w=528&h=352&fit=fill&fm=png32&bg=transparent&s=3db6be6e5959f1b8803c28055a9023b4")
tonkatsu_original = MenuItem.create(name: "Tonkatsu Original", description: "Pork broth: pork chashu, green onion, spinach, seasoned egg*, nori dried seaweed", menu_id: 5, price: 14, image_url: "https://olo-images-live.imgix.net/a0/a05b1b59f2f94386a933efd4bed4baae.jpg?auto=format%2Ccompress&q=60&cs=tinysrgb&w=528&h=352&fit=fill&fm=png32&bg=transparent&s=b6ca82fa325073a6317f4600fc73692f")
spicy_miso = MenuItem.create(name: "Spicy Umami Miso", description: "Pork broth: ground pork soboro, bean sprouts, green onion, bok choy and chili oil", menu_id: 5, price: 16, image_url: "https://olo-images-live.imgix.net/6f/6fdf3b74cf994bd79f98a7c6e15095b7.jpg?auto=format%2Ccompress&q=60&cs=tinysrgb&w=528&h=352&fit=fill&fm=png32&bg=transparent&s=e6f5e057c35ff296187d5f415be63641")
chicken_ramen = MenuItem.create(name: "Chicken Ramen", 
description: "Chicken broth: chicken chashu, spinach, green onion and fried onion",
menu_id: 5,
price: 15,
image_url: "https://olo-images-live.imgix.net/5b/5bc15bf2e4e9463fbd74a3db320733bb.jpg?auto=format%2Ccompress&q=60&cs=tinysrgb&w=528&h=352&fit=fill&fm=png32&bg=transparent&s=08a276b28f557c079a415e41f4415084")
tonkatsu_black_ramen = MenuItem.create(name: "Tonkatsu Black", description: "Pork broth: pork chashu, kikurage, green onion, nori dried seaweed, seasoned egg*, garlic chips, garlic oil, fried onion and spicy sauce", menu_id: 5, price: 16, image_url: "https://olo-images-live.imgix.net/fd/fdba305cbfa54e41bd480a86df60b97a.jpg?auto=format%2Ccompress&q=60&cs=tinysrgb&w=528&h=352&fit=fill&fm=png32&bg=transparent&s=863e2bcf36974252ce966b4639373e62")
yuzu_shio_ramen = MenuItem.create(name: "Yuzu Shio", description: "Chicken & Pork clear broth: Pork chashu, green onion, spinach, seasoned egg*, nori seaweed with yuzu flavor", menu_id: 5, price: 15, image_url: "https://olo-images-live.imgix.net/26/26f16d06012d4c6db5b8a3c5dd03ee6a.jpg?auto=format%2Ccompress&q=60&cs=tinysrgb&w=528&h=352&fit=fill&fm=png32&bg=transparent&s=82008a97bcd7b701495969f716500ff9")

appetizer_menu  = Menu.create(category: "appetizer")
pork_gyoza = MenuItem.create(name: "Pork Gyoza", description: "Handmade pork pot stickers. 6 pieces", menu_id: 6, price: 6, image_url: "https://olo-images-live.imgix.net/42/4239cb8492e74aa1a5fa506435170073.jpg?auto=format%2Ccompress&q=60&cs=tinysrgb&w=528&h=352&fit=fill&fm=png32&bg=transparent&s=b8167bc5046d50c2933b8746d5a9b33f")
edemame = MenuItem.create(name: "Edemame", description: "Lightly salted boiled soybeans", menu_id: 6, price: 5, image_url: "https://olo-images-live.imgix.net/1a/1acd93ed5a1747d09a23e5278dd97a39.jpg?auto=format%2Ccompress&q=60&cs=tinysrgb&w=528&h=352&fit=fill&fm=png32&bg=transparent&s=d5a895fad67bd22e226322ef9dbd3345")
broccoli = MenuItem.create(name: "Sauteed Broccolini", description: "Sautéed broccolini with crispy white quinoa", menu_id: 6, price: 7, image_url: "https://olo-images-live.imgix.net/bc/bc2654c6d221472093d5b04e59ebf794.jpg?auto=format%2Ccompress&q=60&cs=tinysrgb&w=528&h=352&fit=fill&fm=png32&bg=transparent&s=18a2c1e1fccf1e4956b1466691ab749b")
crispy_chicken = MenuItem.create(name: "Crispy Chicken", description: "Juicy fried chicken thigh with an original garlic pepper served with mixed baby greens and JINYA’s original ponzu sauce", menu_id: 6, price: 8, image_url: "https://olo-images-live.imgix.net/de/dead3ca66e08472a9efb408b9ab39864.jpg?auto=format%2Ccompress&q=60&cs=tinysrgb&w=528&h=352&fit=fill&fm=png32&bg=transparent&s=4b9700b27d263bf1a9b9d52cb7b062b0")
takoyaki = MenuItem.create(name: "Takoyaki", description: "Octopus balls. Battered octopus over egg tartar topped with mayonnaise, okonomiyaki sauce, fresh cut green onion and smoked bonito flakes", menu_id: 6, price: 9, image_url: "https://olo-images-live.imgix.net/8a/8a81db58670f471e92dbfaa8dfcbba49.jpg?auto=format%2Ccompress&q=60&cs=tinysrgb&w=528&h=352&fit=fill&fm=png32&bg=transparent&s=c46da889ec53e93ac1b215b5aad4715f")
caramelized_cauliflower = MenuItem.create(name: "Caramelized Cauliflower", description: "Caramelized cauliflower with toasted pine nuts, crispy mint leaves and lime sauce. Vegetarian and gluten free", menu_id: 6, price: 7, image_url: "https://olo-images-live.imgix.net/7e/7e952b34ac5b44bf9c26422d7eec521a.jpg?auto=format%2Ccompress&q=60&cs=tinysrgb&w=528&h=352&fit=fill&fm=png32&bg=transparent&s=51d77f1241b33a903cc166d5a9702e57")

dessert_menu = Menu.create(category: "dessert")
panna_cotta = MenuItem.create(name: "Panna Cotta", description: "Caramel cream sauce, graham cracker and vanilla ice cream", menu_id: 8, price: 6, image_url: "https://olo-images-live.imgix.net/80/80cfab0f952042f3bbb80ab8d06df6aa.jpg?auto=format%2Ccompress&q=60&cs=tinysrgb&w=528&h=352&fit=fill&fm=png32&bg=transparent&s=6b4b1fe77976352b96109113414d8db8")
mochi = MenuItem.create(name: "Mochi", description: "Green tea mochi ice cream", menu_id: 8, price: 6, image_url: "https://olo-images-live.imgix.net/ff/ffa2822699ef4e0c9b9a6fbe37d87671.jpg?auto=format%2Ccompress&q=60&cs=tinysrgb&w=528&h=352&fit=fill&fm=png32&bg=transparent&s=8d413fa4707798e29190f038ad9ad7d0")




