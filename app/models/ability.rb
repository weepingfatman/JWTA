class Ability
  include CanCan::Ability

  def initialize(user)
    user ||= User.new
    if user.admin?
      can :manage, :all
    else
      can :manage, User, id: user.id
      can [:index, :show, :search], Product
      can :create, Comment
    end
  end
end