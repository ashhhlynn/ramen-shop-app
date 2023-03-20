# Yume 

<h2>About</h2>

A mock takeout ordering Single Page Application for a Japanese restaurant. This app uses a Rails API for the backend and vanilla JavaScript front end, utilizing Fetch API to complete CRUD actions. A user can view menus by category, add and remove menu items from a shopping cart, and submit orders. Styled with bootstrap 5 and CSS. 

<h2>Backend Model Relationships</h2>
a :menu has_many :menu_items. 
a :menu_item has_many :items, has_many :orders through: :items 
an :order has_many items; :menu_items through: :items. 
:item belongs_to :order and :menu_item

<h2>Frontend Functionality</h2>
Customer clicks view menus button and loads the DOM, rendering menu categories and menu items for each category. Users can add and remove items from a cart, checkout with a cart total that sums the prices of all items in cart, submit an order form, and place order by sending it to the backend. 
<h2>Tech Stack</h2>

- Ruby on Rails as API
- Active Record
- Rack CORS
- SQLite
- Vanilla JavaScript
- Bootstrap 5 
- HTML and CSS
- JSON API

<h2>Installation</h2>

Fork and clone both repos: ramen-shop-back and ramen-shop-front.

Cd into the backend 
- Run bundle install 
- Run rails db:create 
- Run rails db:migrate 
- Run rails db:seed 
- Start server with rails s 

Cd into the frontend 
- Run open index.html
