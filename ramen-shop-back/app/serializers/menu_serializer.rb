class MenuSerializer < ActiveModel::Serializer
  attributes :id, :category
  has_many :menu_items
end
