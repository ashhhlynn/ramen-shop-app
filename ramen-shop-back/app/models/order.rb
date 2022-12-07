class Order < ApplicationRecord

    has_many :items
    has_many :menu_items, through: :items

end
