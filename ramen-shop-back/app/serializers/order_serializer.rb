class OrderSerializer < ActiveModel::Serializer
  attributes :id, :name, :total
  has_many :items
end
