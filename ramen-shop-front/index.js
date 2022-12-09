
const cart_contents = [];
cart_total = 0

document.addEventListener("DOMContentLoaded", function(){
    oView(false)
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

function oView(show){
    document.getElementById("menus-list").hidden = !show;
    document.getElementById("menu-items-list").hidden = !show
    document.getElementById("cart").hidden = !show
    document.getElementById("cancel-order").hidden = !show
    document.getElementById("order-contents").hidden = !show
    document.getElementById("checkout").hidden = !show;

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

function checkCartLength(){
const cartContents = document.getElementById("cart-contents")
const cartTotal = document.getElementById("cart-total")
    if (cart_contents.length == 0){
        cartContents.innerHTML = `Your Cart is Empty!`
        cartTotal.innerHTML = ``}
    else {
        MenuItem.renderCart()
    }}

function renderTaxMath(){
    return `
    Subtotal: $${cart_total}<br>
    Tax: $${Math.round(cart_total * 7)/100}<br>
    <b>Total: $${(Math.round(cart_total * 7)/100) + cart_total}</b>`
}

function clearCart(){
cart_contents.splice(0,cart_contents.length)
console.log(cart_contents)
cart_total = 0
console.log(cart_total)
}



