const cart_contents = []
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

function orderListeners(){
const menuButton = document.querySelectorAll(".menu-button");
menuButton.forEach(button => button.addEventListener("click", e => Menu.renderMenus(e)))
}

function viewOne(show){
    document.getElementById("menus-list").hidden = show;
    document.getElementById("menu-items-list").hidden = show
    document.getElementById("cart-contents").hidden = show
    document.getElementById("cart-total").hidden = show
    document.getElementById("checkout-order").hidden = show
    document.getElementById("cancel-order").hidden = !show
    document.getElementById("order-contents").hidden = !show
}

function viewTwo(show){
    document.getElementById("checkout-contents").hidden = show;
    document.getElementById("order-form").hidden = show;
}

function taxMath(){
    return Math.round(cart_total * 7)/100
}

function addToCart(e){
    e.preventDefault()
    let menu_item = MenuItem.all.find(menu_item => menu_item.id == e.target.id) 
    console.log(e.target.previousSibling.textContent)
        let cc = document.getElementById("cart-contents")
        let cart_item = document.createElement("ul")
        cart_item.id = `item-${menu_item.id}`
        cart_item.innerHTML = `${e.target.previousSibling.textContent}
        <button class="remove-button" id=${menu_item.id}>-</button>`
        cc.appendChild(cart_item)
    cart_contents.push(menu_item)
    console.log(cart_contents)
    cart_total += menu_item.price 
    renderCart()
}

function renderTaxMath(){
    return `
    Subtotal: $${cart_total}<br>
    Tax: $${Math.round(cart_total * 7)/100}<br>
    <b>Total: $${(Math.round(cart_total * 7)/100) + cart_total}</b>`
}

function renderCart(){
    const cartContents = document.getElementById("cart-contents")
    let listItems = document.querySelectorAll("ul")
    for (var i = 0; i < listItems.length; i++ )
        { cartContents.innerHTML += `` }
    const removeBtns = document.querySelectorAll(".remove-button")
    removeBtns.forEach(button => button.addEventListener("click", e => removeFromCart(e)))
    const cartTotal = document.getElementById("cart-total")
    cartTotal.innerHTML = `${renderTaxMath()}`
}


function renderCarty(){
    const cartContents = document.getElementById("cart-contents")
    let listItems = document.querySelectorAll("ul")
    for (var i = 0; i < listItems.length; i++ )
        { cartContents.innerHTML += `` }
    const cartTotal = document.getElementById("cart-total")
    let tax = taxMath(cart_total)
    cartTotal.innerHTML = `Subtotal: $${cart_total}<br>
    + $${tax}<br>
    <b>Total: $${tax + cart_total}</b>`
    console.log(cart_total)   
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
    renderCart()
}

function clearCart(){
cart_contents.splice(0,cart_contents.length)
console.log(cart_contents)
cart_total = 0
console.log(cart_total)
}