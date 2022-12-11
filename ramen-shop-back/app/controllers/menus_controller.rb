class MenusController < ApplicationController

def index
    menus = Menu.all
    render json: menus, except: [:created_at, :updated_at], include: [menu_items: {except: [:created_at, :updated_at]}]
end

end
