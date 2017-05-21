
FactoryGirl.define do
  sequence(:email) { |n| "user#{n}@example.com" }

  factory :user do
    email
    password "abcdefgh"
    admin false
    first_name "Dave"
    last_name "Gold"
  end

  # This will use the User class (Admin would have been guessed)
  factory :admin, class: User do
    email
    password "abcdefgh"
    admin true
    first_name "Admin"
    last_name "User"
  end
end