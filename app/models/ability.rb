class Ability
  include CanCan::Ability

  def initialize(user)
    user ||= User.new 
    if user.admin?
      can :manage, :all
    else
      can :manage, User, id: user.id
      cannot :destroy, Comment
    end
  end
end