class Order < ApplicationRecord

    has_many :items, dependent: :destroy
    has_many :menu_items, through: :items

end
