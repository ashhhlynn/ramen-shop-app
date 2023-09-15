# Yume 

## Description
A mock takeout ordering Single Page Application for a Japanese restaurant built with a Ruby on Rails backend and vanilla JavaScript frontend, utilizing Fetch API to complete CRUD actions. A user can view menus by category, add and remove menu items from a shopping cart, and submit orders. Styled with Bootstrap 5 and CSS. 

## Backend Model Relationships
<a id="rel"></a>
##### [Back to Top](#top)
### Menu 
```has_many :menu_items```
### MenuItem 
```has_many :items```
```has_many :orders, through: :items```
### Order
```has_many items```
```has_many :menu_items, through: :items```
### Item
```belongs_to :order```
```belongs_to :menu_item```

## Tech Stack
- Ruby on Rails 
- Active Record
- Rack CORS
- SQLite
- Vanilla JavaScript
- Bootstrap 5 
- HTML and CSS

## Installation

Fork and clone both repos: ramen-shop-back and ramen-shop-front.

Cd into the backend 
- Run bundle install
- Run rails db:create
- Run rails db:migrate 
- Run rails db:seed 
- Start server with rails s 

Cd into the frontend 
- Run open index.html
