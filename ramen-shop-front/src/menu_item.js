class MenuItem{

static all = [];
 
constructor(id, name, price, description, menu_id, image_url){
this.id = id;
this.name = name;
this.price = price;
this.description = description;
this.menu_id = menu_id
this.image_url = image_url;
MenuItem.all.push(this);
}
 
static addToCart(e){
    e.preventDefault()
    let menu_item = MenuItem.all.find(menu_item => menu_item.id == e.target.id) 
    console.log(e.target.previousSibling.textContent)
    let cartContents = document.getElementById("cart-contents")
        let cart_item = document.createElement("li")
        cart_item.id = `item-${menu_item.id}`
        cart_item.title = `${e.target.previousSibling.textContent}`
        cart_item.innerHTML = `${cart_item.title}
        <button class="remove-button" id=${menu_item.id}>-</button>`
    cartContents.appendChild(cart_item)
    cart_contents.push(menu_item)
    console.log(cart_contents)
    cart_total += menu_item.price 
    checkCartLength()
}

static renderCart(){
    const cartContents = document.getElementById("cart-contents")
    let listItems = document.querySelectorAll("li")
    for (var i = 0; i < listItems.length; i++ )
        { cartContents.innerHTML += `` }    
    const cartTotal = document.getElementById("cart-total")
    cartTotal.innerHTML = `${renderTaxMath()}`
    const removeBtns = document.querySelectorAll(".remove-button")
    removeBtns.forEach(button => button.addEventListener("click", e => MenuItem.removeFromCart(e)))
}

static removeFromCart(e){
    e.preventDefault()
    const item = MenuItem.all.find(item => item.id == e.target.id);
    cart_total -= item.price 
    const index = cart_contents.indexOf(item);
    cart_contents.splice(index, 1)
    console.log(cart_contents)
    let list_item = document.getElementById(`item-${item.id}`)
    console.log(list_item)
    list_item.remove()
    checkCartLength()
}

}