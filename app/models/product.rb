class Product < ApplicationRecord
  has_many :orders
  def self.search(search_term)
    Product.where("year LIKE ?", "%#{search_term}%")
  end  
end