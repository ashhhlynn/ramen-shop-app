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
            menuObj.menu_items.forEach(function(menuItem){
                menu.menu_items.push(new MenuItem(menuItem.id, menuItem.name, menuItem.price, menuItem.description, menuItem.image_url))
            })
            menu.renderMenus()
        })
    })
}

renderMenus(){
    const menusList = document.getElementById("menu-list")
        let menuButtons = document.createElement("div");
        menuButtons.innerHTML = `<button class="menu-button" id=${this.id}>${this.category}</button>`
        menuButtons.children[0].addEventListener("click", e => this.renderMenuItems(e))
    menusList.appendChild(menuButtons)
}

renderMenuItems(){  
    const menuItemsList = document.getElementById("menu-items-list")
    menuItemsList.innerHTML = ""
    this.menu_items.forEach(menu_item => { 
        let menuItem = document.createElement("div");
        menuItem.className = "card"
        menuItem.innerHTML+= `    
        <img src="${menu_item.image_url}"><br>
        ${menu_item.name} | $${menu_item.price}
        <button class="add-button" id="${menu_item.id}">+</button><br>
        <i>${menu_item.description}</i>
        `
        menuItem.children[2].addEventListener("click", e => MenuItem.addToCartDom(e))
        menuItemsList.appendChild(menuItem)
    })
}


}