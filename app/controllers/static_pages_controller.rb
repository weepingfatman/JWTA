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
    ActionMailer::Base.mail(:from => @email, 
         :to => 'davegee96.5@gmail.com',
         :subject => "A new contact message from #{@name}",
         :body => @message).deliver_now
  end
end