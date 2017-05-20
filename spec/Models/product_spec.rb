require 'rails_helper'

describe Product do

  before do
    @product = Product.create!(year: "2011", make: "Nissan", model: "Pathfinder")
    @user = User.create!(email: "test@test.com", password: "testtest")
    @product.comments.create!(rating: 1, user: @user, body: "Awful SUV!")
    @product.comments.create!(rating: 3, user: @user, body: "OK SUV!")
    @product.comments.create!(rating: 5, user: @user, body: "Great SUV!")
  end

  it "returns the average rating of all comments" do
    expect(@product.average_rating).to eq 3
  end

  it "is not valid" do
    expect(Product.new(description: "Nice SUV")).not_to be_valid
  end
 end



