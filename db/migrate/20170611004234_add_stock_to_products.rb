class AddStockToProducts < ActiveRecord::Migration[5.0]
  def change
    add_column :products, :Stock, :integer
  end
end
