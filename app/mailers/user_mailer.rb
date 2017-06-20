class UserMailer < ApplicationMailer
	 default from: "dgould@jimwhites.com"

  def contact_form(email, name, message)
  @message = message
    mail(:from => email,
        :to => 'davegee96.5@gmail.com',
        :subject => "A new contact form message from #{name}")
  end

  def welcome(user)
  @appname = "Jim White's Truck & Auto Center"
  mail( :to => user.email,
        :subject => "Welcome to #{@appname}!")
  end
  
end