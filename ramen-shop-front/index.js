cart_total = 0;

document.addEventListener("DOMContentLoaded", function() {
    Menu.fetchMenus()
    const navigationButton = Array.from(document.querySelectorAll(".nav"))
    navigationButton.forEach(button => button.addEventListener("click", e => mainListeners(e)))
})

function mainListeners(e) {
    e.preventDefault()
    const menuItemsList = document.getElementById("menu-items-list")
    menuItemsList.innerHTML = ""
    resetOrder()
    if (e.target.id == ('start-order')) {
        addCartToDom()
        cart_total = 0;
        showOrHide(false, true)
        document.getElementById("start-order").disabled = true
    }
    else if (e.target.id == ('home-view')) {
        resetCart() 
        cart_total = 0;
        showOrHide(true, false)
        document.getElementById("start-order").disabled = false
    }
    else if (e.target.id == ('menus-view')) { 
        showOrHide(false, true)
        MenuItem.all.forEach((menu_item => {menu_item.renderMenuItems()}))
    }
    else if (e.target.className == ('menu-button')) {
        let m = Menu.all.find(m => m.id == e.target.id)
        m.menu_items.forEach(menu_item => menu_item.renderMenuItems())
    }
}

function showOrHide(a, b) {
    document.getElementById("container").hidden = a
    document.getElementById("start").hidden = b
}

function addCartToDom() {
    const cartContainer = document.getElementById("cart")
        let title = document.createElement("h2")
        title.innerHTML = "Your Cart"
        let contentsDiv = document.createElement("div")
        contentsDiv.id = "cart-contents"
        let totalDiv = document.createElement("div")
        totalDiv.id = "cart-total"
        let checkoutOrderButton = document.createElement("button")
        checkoutOrderButton.id = "checkout-order-button"
        checkoutOrderButton.innerHTML = "Checkout"
        checkoutOrderButton.addEventListener("click", e => Order.makeNewOrderForm(e))
    cartContainer.appendChild(title)
    cartContainer.appendChild(contentsDiv)
    cartContainer.appendChild(totalDiv)
    cartContainer.appendChild(checkoutOrderButton)
}

function checkCartLength() {
    let listItems = document.querySelectorAll("li")
    if (listItems.length == 0) {
        alert("Your must have items in your cart to place an order!")
        return true
    }
}

function taxMath() {
    return [Math.round(cart_total * 7)/100, Math.round(cart_total * 7)/100 + cart_total]
}

function renderTaxMath() {
   const [tax, realTotal] = taxMath()
   return `
   Subtotal: $${cart_total}<br>
   Tax: $${tax}<br>
   <b>Total: $${realTotal}</b>
   `   
}

function resetCart() {
    const cartContainer = document.getElementById("cart")
    removeAllChildNodes(cartContainer)
}

function resetOrder() {
    const orderContainer = document.getElementById("order")
    removeAllChildNodes(orderContainer)
}

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}





