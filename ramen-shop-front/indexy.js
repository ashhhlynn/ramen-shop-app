const cart_contents = []
cart_total = 0

document.addEventListener("DOMContentLoaded", function(){
const startButton = document.getElementById("start-button");
startButton.addEventListener("click", startProgram)})

function startProgram(){
    Menu.fetchMenus() 
    const checkoutOrderButton = document.getElementById("checkout-order-button");
    checkoutOrderButton.addEventListener("click", e => Order.makeNewOrderForm(e))
}

function renderCart(){
    const cartContents = document.getElementById("cart-contents")
    let listItems = document.querySelectorAll("li")
    for (var i = 0; i < listItems.length; i++ )
        { cartContents.innerHTML += `` }
    let cartTotal = document.getElementById("cart-total")
    cartTotal.innerHTML = `Total: $${cart_total}`
    console.log(cart_total)   
    const removeBtns = document.querySelectorAll(".remove-button")
    removeBtns.forEach(button => button.addEventListener("click", e => removeFromCart(e)))
}

function removeFromCart(e){
    e.preventDefault()
    const item = Item.all.find(item => item.id == e.target.id);
    let new_cart_total = cart_total - item.price
    cart_total = new_cart_total
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