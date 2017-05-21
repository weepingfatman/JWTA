
require 'rails_helper'

describe UsersController, :type => :controller do
  let(:user) { FactoryGirl.create(:user)}
  let(:diffrent_user) { FactoryGirl.create(:user)}

  describe 'get #show' do
    context 'User is logged in' do
      before do
        sign_in @user
      end
      it 'loads correct user details' do
        get :show, id: @user.id
        expect(response).to have_http_status(200)
        expect(assigns(:user)).to eq @user
      end
      it "can't access show page of the 2. user" do
        get :show, id: @user2.id
        expect(response).to redirect_to(root_path)
      end
    end
    context 'No user is logged in' do
      it 'redirects to login' do
        get :show, id: @user.id
        expect(response).to redirect_to(root_path)
      end
    end
  end
end