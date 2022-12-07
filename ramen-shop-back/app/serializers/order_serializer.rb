class OrderSerializer < ActiveModel::Serializer
  attributes :id, :name, :total
end
