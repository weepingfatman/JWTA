class RenamePriceInProducts < ActiveRecord::Migration[5.0]
  def change
  	rename_column :products, :price, :cost
  end
end
