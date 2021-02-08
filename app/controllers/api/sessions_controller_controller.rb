class Api::SessionsControllerController < ApplicationController
    def create
    @user = User.find_by_credentials(params[:user][:email],
                                     params[:user][:password])
    if @user
      login!(@user)
      render 'api/users/show'
    else
      render json: ["Invalid credentials"], status: 401
    end
  end

  def destroy
    # debugger
    if !current_user
      render json: ["Not logged in!"], status: 404
    else
      logout!
      render json: {}
    end
  end
end
