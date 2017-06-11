json.extract! product, :id, :stock, :year, :make, :model, :miles, :price, :description, :image_url, :created_at, :updated_at
json.url product_url(product, format: :json)
