
const cart_contents = [];
cart_total = 0

document.addEventListener("DOMContentLoaded", function(){
    const startButton = document.getElementById("start-button");
    startButton.addEventListener("click", startProgram)
})

function startProgram(){
    Menu.fetchMenus() 
    document.getElementById("start").hidden = true
    viewOne(false) 
    viewTwo(false)
    const checkoutOrderButton = document.getElementById("checkout-order-button");
    checkoutOrderButton.addEventListener("click", e => Order.makeNewOrderForm(e))
}

function viewOne(show){
    document.getElementById("menus-list").hidden = show;
    document.getElementById("menu-items-list").hidden = show
    document.getElementById("cart").hidden = show
    document.getElementById("cancel-order").hidden = !show
    document.getElementById("order-contents").hidden = !show
}

function viewTwo(show){
    document.getElementById("checkout").hidden = show;
}

function addToCart(e){
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

function checkCartLength(){
const cartContents = document.getElementById("cart-contents")
const cartTotal = document.getElementById("cart-total")
    if (cart_contents.length == 0){
        cartContents.innerHTML = `Your Cart is Empty!`
        cartTotal.innerHTML = ``}
    else {
        renderCart()
    }}

function renderTaxMath(){
    return `
    Subtotal: $${cart_total}<br>
    Tax: $${Math.round(cart_total * 7)/100}<br>
    <b>Total: $${(Math.round(cart_total * 7)/100) + cart_total}</b>`
}


function renderCart(){
    const cartContents = document.getElementById("cart-contents")
    let listItems = document.querySelectorAll("li")
    for (var i = 0; i < listItems.length; i++ )
        { cartContents.innerHTML += `` }
    
        const cartTotal = document.getElementById("cart-total")
        cartTotal.innerHTML = `${renderTaxMath()}`
        const removeBtns = document.querySelectorAll(".remove-button")
        removeBtns.forEach(button => button.addEventListener("click", e => removeFromCart(e)))
}

function removeFromCart(e){
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

function clearCart(){
cart_contents.splice(0,cart_contents.length)
console.log(cart_contents)
cart_total = 0
console.log(cart_total)
}



