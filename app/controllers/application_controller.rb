class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

  def is_authenticated?
    redirect_to login_path unless current_user
  end

  def current_user
    unless @current_user
      @current_user = User.find_by(id: session[:user_id])
    end
    @current_user
  end

end
