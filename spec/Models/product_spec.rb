require 'rails_helper'

describe Product do

  before do
    @product = Product.create!(year: "2011", make: "Nissan", model: "Pathfinder", price: "$3,995", color:"Red" description: "4x4", image_url: "Pathfinder1.jpg")
    @product.comments.create!(rating: 1, user: @user, body: "Awful SUV!")
    @product.comments.create!(rating: 3, user: @user, body: "OK SUV!")
    @product.comments.create!(rating: 5, user: @user, body: "Great SUV!")
  end

it "returns the average rating of all comments"
do

  expect(@product.average_rating).to eq(3)
end

end




