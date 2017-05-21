
FactoryGirl.define do  
  sequence :email do |n|
    "David@jimwhites.com"
  end

  factory :user do
    email
    password '123456'
    first_name 'David'
    last_name 'Gold'
    admin false
  end
end