class MenuItem{

static all = [];

constructor(id, name, price, description, image_url){
    this.id = id;
    this.name = name;
    this.price = price;
    this.description = description;
    this.image_url = image_url;
    MenuItem.all.push(this);
}

static renderMenuItems(e){  
    let menu = Menu.all.find(menu=> menu.id == e.target.id)
    let menuItemsList = document.getElementById("menu-items-list")
    menuItemsList.innerHTML = ""
    menu.menu_items.forEach(menu_item => { 
        let menuItem = document.createElement("div");
            menuItem.className = "card"
            menuItem.innerHTML+= `    
                <img src="${menu_item.image_url}"><br>
                ${menu_item.name} | $${menu_item.price}
                <button class="add-button" id="${menu_item.id}">+</button><br>
                <i>${menu_item.description}</i>
            `
        menuItem.children[2].addEventListener("click", e => menu_item.addToCart(e))
    menuItemsList.appendChild(menuItem)
    })
}

addToCart(e){
    let cartContents = document.getElementById("cart-contents")
        let cartItem = document.createElement("li")
            cartItem.id = `item-${e.target.id}`
            cartItem.innerHTML += `${e.target.previousSibling.textContent}
            <button class="remove-button" id='${e.target.id}'>-</button>`
    cartContents.appendChild(cartItem)    
    cart_total += this.price 
    alert("Added to cart")
    MenuItem.renderCart()
}

static renderCart(){
    let cartContents = document.getElementById("cart-contents")
    let cartTotal = document.getElementById("cart-total")
    let listItems = document.querySelectorAll("li")
    for (var i = 0; i < listItems.length; i++ )
        {cartContents.innerHTML += ``}
    if (checkLiLength())
        {cartTotal.innerHTML= `Your cart is empty`}
    else 
        {cartTotal.innerHTML = `${renderTaxMath()}`}
    const removeBtns = Array.from(document.querySelectorAll(".remove-button"))
    removeBtns.forEach(button => button.addEventListener("click", e => MenuItem.removeFromCart(e)))
    console.log(removeBtns)
}

static removeFromCart(e){
    e.preventDefault()
    let menu_item = MenuItem.all.find(menuItem => menuItem.id == e.target.id)
    document.getElementById(`item-${e.target.id}`).remove()
    cart_total -= menu_item.price 
    console.log(cart_total)
    alert("Removed from cart")
    MenuItem.renderCart()
}


}