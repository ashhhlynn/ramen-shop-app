class Menu {

    static all = []
    
    constructor(id, category){
        this.id = id;
        this.category = category;
        this.menu_items = []
    }
        
    static fetchMenus(){ 
        fetch("http://localhost:3000/menus")
        .then(resp => resp.json())
        .then(function(menus){
            menus.forEach(function(menuObj){
                let menu = (new Menu(menuObj.id, menuObj.category))
                Menu.all.push(menu)
                menuObj.menu_items.forEach(function(mI){
                    menu.menu_items.push(new MenuItem(mI.id, mI.name, mI.price, mI.description, mI.image_url))
                })
                menu.renderMenus()
            })
        })
    }
    
    renderMenus(){
        let menuList = document.getElementById("menu-list")
            let menuButtons = document.createElement("div");
                menuButtons.id = "menu-buttons"
                menuButtons.innerHTML = `<button class="menu-button" id=${this.id}>${this.category}</button>`
        menuList.appendChild(menuButtons)
        menuButtons.firstChild.addEventListener("click", e => MenuItem.renderMenuItems(e))
    }
    
    }
