class Menu {

static all = []

constructor(id, category){
    this.id = id;
    this.category = category;
    this.menu_items = []
}
    
static fetchMenus(){ 
    hideOrShow(false)
    const orderContents = document.getElementById("order-contents")
    orderContents.innerHTML = ``
    fetch("http://localhost:3000/menus")
    .then(resp => resp.json())
    .then(function(menus){
        menus.forEach(function(menuObj){
            let menu = (new Menu(menuObj.id, menuObj.category))
            Menu.all.push(menu)
            menuObj.menu_items.forEach(function(menu_item){
                menu.menu_items.push(new MenuItem(menu_item.id, menu_item.name, menu_item.price, menu_item.description, menu_item.menu_id, menu_item.image_url))
            })
            menu.renderMenus()
        })
    })
}

renderMenus(){
    const menus_list = document.getElementById("menu-list")
        let menu_buttons = document.createElement("div");
        menu_buttons.innerHTML = `<button class="menu-button" id=${this.id}>${this.category}</button>`
    menus_list.appendChild(menu_buttons)
    listenButton()
}

static renderMenuItems(e){  
    let menu = Menu.all.find(menu => menu.id == e.target.id) 
    const menu_items_list = document.getElementById("menu-items-list")
    menu_items_list.innerHTML = ""
    menu.menu_items.forEach(menu_item => { 
        let list_menu_item = document.createElement("div");
        list_menu_item.className = "card"
        list_menu_item.innerHTML+=`    
        <img src="${menu_item.image_url}"><br>
        ${menu_item.name} | $${menu_item.price}
        <button class="add-button" id="${menu_item.id}">+</button><br>
        <i>${menu_item.description}</i>
        `
    menu_items_list.appendChild(list_menu_item)})
    listenButton()
}

}