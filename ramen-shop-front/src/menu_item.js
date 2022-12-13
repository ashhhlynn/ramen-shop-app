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

static addToCartDom(e){
    let menu_item = MenuItem.all.find(menu_item => menu_item.id == e.target.id)
    const cartContents = document.getElementById("cart-contents")
        let cartItem = document.createElement("li")
        cartItem.id = `item-${e.target.id}`
        cartItem.dataset.id = `${e.target.id}`
        cartItem.innerHTML += `${e.target.previousSibling.textContent}
        <button class="remove-button" id=${e.target.id}>-</button>`
    cartContents.appendChild(cartItem)    
    menu_item.addToCartTotal()
}

addToCartTotal(){
    cart_total += this.price 
    alert("Added to cart")
    MenuItem.renderCart()
}

static renderCart(){
    const cartContents = document.getElementById("cart-contents")
    let listItems = document.querySelectorAll("li")
    for (var i = 0; i < listItems.length; i++ )
        {cartContents.innerHTML += ``}
    const cartTotal = document.getElementById("cart-total")
    if (checkLiLength())
        {cartTotal.innerHTML= `Your cart is empty`}
    else 
        {cartTotal.innerHTML = `${renderTaxMath()}`}
    const removeBtns = document.querySelectorAll(".remove-button")
    removeBtns.forEach(button => button.addEventListener("click", e => MenuItem.removeFromCartDom(e)))
}

static removeFromCartDom(e){
    document.getElementById(`item-${e.target.id}`).remove()
    let menu_item = MenuItem.all.find(menu_item => menu_item.id == e.target.id);
    menu_item.removeFromCartTotal()
}

removeFromCartTotal(){
    cart_total -= this.price 
    alert("Removed from cart")
    MenuItem.renderCart()
}



}