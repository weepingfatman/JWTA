class Product < ApplicationRecord
  has_many :orders
  has_many :comments
  
  validates :year, :make, :model, presence: true

  def self.search(search_term)
    Product.where("name ilike ?", "%#{search_term}%")
  end

  def highest_rating_comment
    comments.rating_desc.first
  end

  def lowest_rating_comment
    comments.rating_asc.first
  end

  def average_rating
    comments.average(:rating).to_f
  end
  
end