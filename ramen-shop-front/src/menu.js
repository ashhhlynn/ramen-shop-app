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
        let m = new Menu(menu.id, menu.category)
        Menu.all.push(m)
        menu.menu_items.forEach(function(menu_item){
        m.menu_items.push(new MenuItem(menu_item.id, menu_item.name, menu_item.price, menu_item.description, menu_item.menu_id))
        console.log(m.menu_items)})
let menus_list = document.getElementById("menus-list")
menus_list.innerHTML = `<button class="menu-button" id=1>${m.category}</button>`
const menuButton = document.querySelectorAll(".menu-button");
menuButton.forEach(button => button.addEventListener("click", e => Menu.renderMenuItems(e)))
})})}

static renderMenuItems(e){
    e.preventDefault()
    let menu = Menu.all.find(menu => menu.id == e.target.id)
    const menu_items_list = document.getElementById("menu-items-list")
    menu_items_list.innerHTML = ""
    console.log(menu)
    menu.menu_items.forEach(menu_item => {
        let list_menu_item = document.createElement("div");
        list_menu_item.id = "card"
            let list_menu_item_text = document.createElement("div")
            list_menu_item_text.id = `item text-${menu_item.id}`
            list_menu_item_text.innerHTML = `<h2>${menu_item.name}: $${menu_item.price}</h2>`
    console.log(list_menu_item_text.innerHTML)
        list_menu_item.innerHTML+=
        `<button class="add-button" id="${menu_item.id}">+</button>`
    list_menu_item.appendChild(list_menu_item_text)
    menu_items_list.appendChild(list_menu_item)
    })
    const addBtns = document.querySelectorAll(".add-button")
    addBtns.forEach(button => button.addEventListener('click', e => Menu.addToCart(e)))
    }

static addToCart(e){
    e.preventDefault()
    let menu_item = MenuItem.all.find(menu_item => menu_item.id == e.target.id) 
        let cc = document.getElementById("cart-contents")
        let cart_item = document.createElement("li")
        cart_item.id = `item-${menu_item.id}`
        cart_item.innerHTML = `${e.target.nextElementSibling.innerHTML}
        <button class="remove-button" id=${menu_item.id}></button>`
        cc.appendChild(cart_item)
    let item = new Item(menu_item.id, menu_item.name, menu_item.price)
    console.log(item)
    cart_contents.push(item)
    console.log(cart_contents)
    let new_cart_total = cart_total + item.price
    cart_total = new_cart_total
    renderCart()
}


}
  
    
