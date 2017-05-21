

require 'rails_helper'

describe UsersController, :type => :controller do
  @user = FactoryGirl.create(:user)
  @user2 = FactoryGirl.create(:user)

  describe 'GET #show' do

    context 'User is logged in' do 
      before do
        it "loads correct user details" do
          get :show, params: {id: user.id}
          expect(response).to have_http_status(200)
          expect(assigns(:user)).to eq user
        end
      end  
    end

    context 'No user is logged in' do
      it 'requires to login' do
        get :show, params: {id: user.id}
        expect(response).to redirect_to(root_path)
      end
    end
    context 'No user is logged in' do
      it 'redirects to login' do
        get :show, params: {id: user.id}
        expect(response).to redirect_to(root_path)
      end
    end
  end
end