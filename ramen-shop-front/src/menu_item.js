class MenuItem{

static all = [];

constructor(id, name, price, description, menu_id, image_url){
this.id = id;
this.name = name;
this.price = price;
this.description = description;
this.menu_id = menu_id;
this.image_url = image_url;
MenuItem.all.push(this);
}
 
static addToCartDom(e){
    e.preventDefault()
    let menu_item = MenuItem.all.find(menu_item => menu_item.id == e.target.id)
    let cartContents = document.getElementById("cart-contents")
        let cart_item = document.createElement("li")
        cart_item.id = `item-${e.target.id}`
        cart_item.title = `${e.target.previousSibling.textContent}`
        cart_item.innerHTML = `${cart_item.title}
        <button class="remove-button" id=${e.target.id}>-</button>`
    cartContents.appendChild(cart_item)
    menu_item.addToCartConstant()
}

addToCartConstant(){
    cart_contents.push(this)
    console.log(cart_contents)
    cart_total += this.price 
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
    removeBtns.forEach(button => button.addEventListener("click", e => MenuItem.removeFromCartDom(e)))
}

static removeFromCartDom(e){
    e.preventDefault()
    let menu_item = MenuItem.all.find(menu_item => menu_item.id == e.target.id);
    let list_item = document.getElementById(`item-${e.target.id}`)
    console.log(list_item)
    list_item.remove()
    menu_item.removeFromCartConstant()}

removeFromCartConstant(){
    cart_total -= this.price 
    const index = cart_contents.indexOf(this);
    cart_contents.splice(index, 1)
    console.log(cart_contents)
    checkCartLength()
}



}