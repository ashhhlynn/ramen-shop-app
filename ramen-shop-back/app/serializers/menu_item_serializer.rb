class MenuItemSerializer < ActiveModel::Serializer
  attributes :id, :name, :price, :description, :menu_id
  belongs_to :menu
  has_many :items, through: :orders
end
