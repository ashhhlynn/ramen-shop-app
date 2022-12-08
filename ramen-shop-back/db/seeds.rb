# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

ramen_menu = Menu.create(category: "ramen")
appetizer_menu  = Menu.create(category: "appetizer")

pork_gyoza = MenuItem.create(name: "Pork Gyoza", description: "Handmade pork pot stickers. 6 pieces", menu_id: 6, price: 6, image_url: "https://olo-images-live.imgix.net/42/4239cb8492e74aa1a5fa506435170073.jpg?auto=format%2Ccompress&q=60&cs=tinysrgb&w=528&h=352&fit=fill&fm=png32&bg=transparent&s=b8167bc5046d50c2933b8746d5a9b33f")

edemame = MenuItem.create(name: "Edemame", description: "Lightly salted boiled soybeans", menu_id: 6, price: 5, image_url: "https://olo-images-live.imgix.net/1a/1acd93ed5a1747d09a23e5278dd97a39.jpg?auto=format%2Ccompress&q=60&cs=tinysrgb&w=528&h=352&fit=fill&fm=png32&bg=transparent&s=d5a895fad67bd22e226322ef9dbd3345")

chicken_ramen = MenuItem.create(name: "Chicken Ramen", 
description: "Chicken broth: chicken chashu, spinach, green onion and fried onion",
menu_id: 5,
price: 15,
image_url: "https://olo-images-live.imgix.net/5b/5bc15bf2e4e9463fbd74a3db320733bb.jpg?auto=format%2Ccompress&q=60&cs=tinysrgb&w=528&h=352&fit=fill&fm=png32&bg=transparent&s=08a276b28f557c079a415e41f4415084")

tonkatsu_black_ramen = MenuItem.create(name: "Tonkatsu Black", description: "Pork broth: pork chashu, kikurage, green onion, nori dried seaweed, seasoned egg*, garlic chips, garlic oil, fried onion and spicy sauce", menu_id: 5, price: 16, image_url: "https://olo-images-live.imgix.net/fd/fdba305cbfa54e41bd480a86df60b97a.jpg?auto=format%2Ccompress&q=60&cs=tinysrgb&w=528&h=352&fit=fill&fm=png32&bg=transparent&s=863e2bcf36974252ce966b4639373e62")

yuzu_shio_ramen = MenuItem.create(name: "Yuzu Shio", description: "Chicken & Pork clear broth: Pork chashu, green onion, spinach, seasoned egg*, nori seaweed with yuzu flavor", menu_id: 5, price: 15, image_url: "https://olo-images-live.imgix.net/26/26f16d06012d4c6db5b8a3c5dd03ee6a.jpg?auto=format%2Ccompress&q=60&cs=tinysrgb&w=528&h=352&fit=fill&fm=png32&bg=transparent&s=82008a97bcd7b701495969f716500ff9")

