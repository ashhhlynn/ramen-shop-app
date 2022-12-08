class OrderSerializer < ActiveModel::Serializer
  attributes :id, :name, :total
  has_many :items
  has_many :menu_items, through: :items
end
