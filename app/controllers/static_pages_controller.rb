class StaticPagesController < ApplicationController

  def index
  end

  def landing_page
    @products = Product.limit(4)
  end

  def thank_you
  @name = params[:name]
  @email = params[:email]
  @message = params[:message]
    UserMailer.thank_you(@email, @name, @message).deliver
    UserMailer.contact_form(@email, @name, @message).deliver
  end
end