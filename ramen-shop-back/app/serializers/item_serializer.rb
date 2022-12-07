class ItemSerializer < ActiveModel::Serializer
  attributes :id, :order_id, :topping_option_id
end
