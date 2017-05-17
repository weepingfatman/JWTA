class Product < ApplicationRecord
  has_many :orders
  has_many :comments
  
  validates :year, presence: true
  validates :make, presence: true
  validates :model, presence: true
  validates :price, numericality: true
  validates :description, presence: true
  validates :image_url, format: { with: %r{.(jpg|png)\Z}i, message: 'must be a URL for JPG or PNG image.' }


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