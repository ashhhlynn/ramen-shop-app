cart_total = 0;

document.addEventListener("DOMContentLoaded", function(){
    const startButton = document.getElementById("start-button");
    startButton.addEventListener("click", startProgram)
})

function startProgram(){ 
    Menu.fetchMenus()
    hideOrShow(false)
    removeAllChildNodes(document.getElementById("order-contents"))
    const checkoutOrderButton = document.getElementById("checkout-order-button");
    checkoutOrderButton.addEventListener("click", e => orderEligible(e))
}

function hideOrShow(show){
    document.getElementById("start-button").hidden = !show;
    document.getElementById("container").hidden = show;
    document.getElementById("cart").hidden = show
    document.getElementById("order").hidden = !show
    document.getElementById("order-form").hidden = !show;
}

function checkLiLength(){
    let listItems = document.querySelectorAll("li")
    if (listItems.length == 0){
        return true
    }
}

function orderEligible(){
    if (checkLiLength() == true){
        alert("Your cart is empty!")}
    else {
        Order.makeNewOrderForm()
    }
}

function taxMath(){
    return [Math.round(cart_total * 7)/100, Math.round(cart_total * 7)/100 + cart_total]
}

function renderTaxMath(){
   const [tax, realTotal] = taxMath()
   return `
   Subtotal: $${cart_total}<br>
   Tax: $${tax}<br>
   <b>Total: $${realTotal}</b>
   `   
}

function clearCartAndContainers(){
    cart_total = 0;
    document.getElementById("checkout-order-button").disabled = false
    toClear = [(document.querySelector('#menu-list')), (document.querySelector('#menu-items-list')), (document.querySelector('#cart-total')), (document.querySelector('#cart-contents')), (document.querySelector('#order-form'))
]
    for (x of toClear){
        removeAllChildNodes(x)
    }
}

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}
