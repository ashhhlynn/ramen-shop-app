class CreateMenuItems < ActiveRecord::Migration[6.1]
  def change
    create_table :menu_items do |t|
      t.string :name
      t.string :description
      t.string :image_url
      t.float :price
      t.belongs_to :menu
      t.timestamps
    end
  end
end
