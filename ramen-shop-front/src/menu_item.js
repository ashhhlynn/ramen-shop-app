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


}