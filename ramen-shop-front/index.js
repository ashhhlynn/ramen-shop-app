const cart_contents = [];
cart_total = 0;

document.addEventListener("DOMContentLoaded", function(){
startProgram()
})

function startProgram(){ 
    const startButton = document.getElementById("start-button");
    startButton.addEventListener("click", Menu.fetchMenus)
    const checkoutOrderButton = document.getElementById("checkout-order-button");
    checkoutOrderButton.addEventListener("click", e => Order.makeNewOrderForm(e))
}

function hideOrShow(show){
    document.getElementById("start-button").hidden = !show;
    document.getElementById("container").hidden = show;
    document.getElementById("cart").hidden = show
    document.getElementById("order").hidden = !show
    document.getElementById("order-form").hidden = !show;
}

function listenButton(){
    const menuButton = document.querySelectorAll(".menu-button");
    menuButton.forEach(button => button.addEventListener("click", e => Menu.renderMenuItems(e)))
    const addBtns = document.querySelectorAll(".add-button")
    addBtns.forEach(button => button.addEventListener('click', e => MenuItem.addToCartDom(e)))
}

function listenButtonTwo(){
    const removeBtns = document.querySelectorAll(".remove-button")
    removeBtns.forEach(button => button.addEventListener("click", e => MenuItem.removeFromCartDom(e)))
}

function checkCartLength(){
    if (cart_contents.length == 0){
        return true
    }
}

function taxMath(){
    return [Math.round(cart_total * 7)/100, Math.round(cart_total * 7)/100 + cart_total]
}

function renderTaxMath(){
   const [tax, real_total] = taxMath()
   return `
   Subtotal: $${cart_total}<br>
   Tax: $${tax}<br>
   <b>Total: $${real_total}</b>
   `   
}

function clearCartAndContainers(){
    cart_contents.splice(0,cart_contents.length);
    cart_total = 0;
    removeAllChildNodes(document.querySelector('#menu-list'));
    removeAllChildNodes(document.querySelector('#menu-items-list'))
    removeAllChildNodes(document.querySelector('#order-form'))
    document.getElementById("checkout-order-button").disabled = false;
    document.getElementById("cart-contents").innerHTML = ``
    document.getElementById("cart-total").innerHTML = `` 
}

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}
