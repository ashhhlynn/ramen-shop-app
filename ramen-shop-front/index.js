cart_total = 0;
document.addEventListener("DOMContentLoaded", function(){
    const startButton = document.getElementById("start-button");
    startButton.addEventListener("click", startProgram)

})

function startProgram(){ 
    Menu.fetchMenus()
    addCartToDom()
    const startButton = document.getElementById("start-button");
    startButton.hidden = true 

}

function addCartToDom(){
    const cartContainer = document.getElementById("cart")
        let title = document.createElement("h2")
        title.innerHTML = "Your Cart"
        let cartContents = document.createElement("div")
            cartContents.id = "cart-contents"
        let cartTotal = document.createElement("div")
            cartTotal.id = "cart-total"
        let checkoutOrderButton = document.createElement("button")
            checkoutOrderButton.id = "checkout-order-button"
            checkoutOrderButton.innerHTML = "Checkout"
            checkoutOrderButton.addEventListener("click", e => orderEligible(e))
    cartContainer.appendChild(title)
    cartContainer.appendChild(checkoutOrderButton)
    cartContainer.appendChild(cartContents)
    cartContainer.appendChild(cartTotal)
    cartContainer.hidden = false
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
    const collection = Array.from(document.getElementById("container").children);
    console.log(collection)  
        collection.forEach(div => {removeAllChildNodes(div)})
}

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}
