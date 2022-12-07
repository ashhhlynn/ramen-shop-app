const cart_contents = []
cart_total = 0

document.addEventListener("DOMContentLoaded", function(){
const startButton = document.getElementById("start-button");
startButton.addEventListener("click", startProgram)})

function startProgram(){
    Menu.fetchMenus() 
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
    const placeOrderButton = document.getElementById("place-order-button");
    placeOrderButton.addEventListener("click", makeNewOrderForm)
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

function makeNewOrderForm(){
let order_form = document.getElementById("order-form")
let form = document.createElement("form")
let input = document.createElement("input")
input.type = "text"
input.placeholder = "Enter your name:"
let submit = document.createElement("button")
submit.type = "submit"
submit.innerText = "Submit"
form.appendChild(input)
form.appendChild(submit)
order_form.appendChild(form)
form.addEventListener("submit", e => Order.CreateOrder(order, e))}


