# Yume 
> A takeout ordering Single Page Application for a mock Japanese restaurant built with a Ruby on Rails backend and vanilla JavaScript frontend, utilizing Fetch API to complete CRUD actions. Users can view menus by category, add and remove menu items from a shopping cart, and submit orders. Styled with Bootstrap 5 and CSS. 

## Backend Model Relationships
<a id="rel"></a>
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

## Technologies Used
- Ruby on Rails 
- Active Record
- Rack CORS
- SQLite
- Vanilla JavaScript
- Bootstrap 5 
- HTML and CSS

## Installation
- ` git clone < back end > `
- ` git clone < front end > `
- ` cd < back end > `
- ` bundle install `
- ` rake db:create `
- ` rake db:migrate `
- ` rake db:seed `
- ` rails s `
- ` cd < front end > `
- ` open index.html `

## Acknowledgements
This project was created by Ashley.

## License 
This project is MIT licensed.
