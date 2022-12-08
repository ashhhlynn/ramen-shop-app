class ItemSerializer < ActiveModel::Serializer
  attributes :menu_item_id, :order_id, :id
  belongs_to :order
  belongs_to :menu_item
end
