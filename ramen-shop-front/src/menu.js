class Menu {
static all = []
constructor(id, category){
this.id = id;
this.category = category;
this.menu_items = [];
}
    
static fetchMenus(){
    fetch("http://localhost:3000/menus")
    .then(resp=> resp.json())
    .then(function(menus){
    menus.forEach(function(menu){
        let m = (new Menu(menu.id, menu.category))
        Menu.all.push(m)
        let menus_list = document.getElementById("menus-list")
            let menu_category = document.createElement("div");
            menu_category.innerHTML = `<button class="menu-button" id=${menu.id}>${menu.category}</button>`
        menus_list.appendChild(menu_category)
        const menuButton = document.querySelectorAll(".menu-button");
        menuButton.forEach(button => button.addEventListener("click", e => Menu.renderMenus(e)))
        menu.menu_items.forEach(function(menu_item){
            m.menu_items.push(new MenuItem(menu_item.id, menu_item.name, menu_item.price, menu_item.description, menu_item.menu_id, menu_item.image_url))
            console.log(m.menu_items)})
        })
    })
}

static renderMenus(e){
    e.preventDefault()
    let menu = Menu.all.find(menu => menu.id == e.target.id)
    console.log(menu)
    menu.renderMenuItems()
}

renderMenuItems(){   
    const menu_items_list = document.getElementById("menu-items-list")
    menu_items_list.innerHTML = ""
    this.menu_items.forEach(menu_item => { 
            let list_menu_item = document.createElement("div");
            list_menu_item.class = "card"
            list_menu_item.innerHTML+=`    
            <img src="${menu_item.image_url}"><br>
            ${menu_item.name} | $${menu_item.price}
            <button class="add-button" id="${menu_item.id}">+</button><br>
            <i>${menu_item.description}</i>
            `
    menu_items_list.appendChild(list_menu_item)
    })
    const addBtns = document.querySelectorAll(".add-button")
    addBtns.forEach(button => button.addEventListener('click', e => MenuItem.addToCart(e)))
}


}
  
    
