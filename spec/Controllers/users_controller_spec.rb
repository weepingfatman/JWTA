require 'rails_helper'

describe UsersController, type: :controller do

  let(:user) { User.create!(email: 'test1@testy.com', password: 'JWTA1') }
  let(:diffrent_user) { User.create!(email: 'test2@testy.com', password: 'JWTA2') }
 
  describe 'GET #show' do
    context 'User is logged in' do 
      expect(assigns(:user)).to eq user
      end
    end

    context 'No user is logged in' do
       it 'redirects to login' do
         get :show, id: user.id
         expect(response).to redirect_to(root_path)
       end
    end

    context 'User tries to GET #show from diffrent user' do
      before do
        sign_in diffrent_user
      end

      it 'is not allowed to view user #show' do
        get :show, params: {id: user.id}
        expect(response).to have_http_status(302)
      end
    end
  end
end