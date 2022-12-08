class MenuItemSerializer < ActiveModel::Serializer
  attributes :id, :name, :price, :description, :menu_id, :image_url
  belongs_to :menu
  has_many :items, through: :orders
end
