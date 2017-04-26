class Product < ApplicationRecord
end

def self.search(search_term)
  Product.where("year LIKE ?", "%#{search_term}%")
end