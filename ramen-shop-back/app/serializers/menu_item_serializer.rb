class MenuItemSerializer < ActiveModel::Serializer
  attributes :id, :name, :price, :description, :image_url
  belongs_to :menu
  has_many :items
end
