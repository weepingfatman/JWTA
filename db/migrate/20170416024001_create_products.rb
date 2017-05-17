class CreateProducts < ActiveRecord::Migration[5.0]
  def change
    create_table :products do |t|
      t.string :year
      t.string :make
      t.string :model
      t.string :miles
      t.integer :price
      t.text :description
      t.string :image_url

      t.timestamps
    end
  end
end
