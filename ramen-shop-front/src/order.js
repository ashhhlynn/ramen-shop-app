class Order {

constructor(id, name, total, items){
    this.id = id;
    this.name = name;
    this.total = total;
    this.items = items;
}

static makeNewOrderForm(){
    let cartCont = document.getElementById("cart")
        let form = document.createElement("form")
            let input = document.createElement("input")
                input.id = 'name'
                input.type = "text"
                input.placeholder = "Enter your name:"
                input.required = true 
            let submit = document.createElement("button")
                submit.type = "submit"
                submit.id = "submit"
                submit.innerText = "Place Order"
        form.appendChild(input)
        form.appendChild(submit)
    cartCont.appendChild(form)
    document.getElementById("checkout-order-button").disabled = true;
    form.addEventListener("submit", e => Order.createOrder(e))
}

static createOrder(e){
    e.preventDefault()
    let listItemsArray = Array.from(document.querySelectorAll("li"))
    if (listItemsArray.length > 0){
    const items = listItemsArray.map(li => {return {id: parseInt(li.id.slice(5))}})
    console.log(items)
        fetch("http://localhost:3000/orders", {
            method: "POST",
            headers: { 
            "Content-Type": "application/json",
            "Accept": "application/json"
            },
            body: JSON.stringify({
            name: document.querySelector("#name").value, 
            total: taxMath()[1], 
            items: items
            })
        })
        .then(function(resp){
            return resp.json();
        })
        .then(function(json){
            let order = new Order(json.id, json.name, json.total, json.items)
            console.log(order)
            order.renderOrder()
        })
        .catch(function(error) {
            alert("There were errors processing your order");
            console.log(error.message);
    })
}
}

static renderOrderView(){
    let cartContainer = document.getElementById('cart')
    let menuItemsList = document.getElementById('menu-items-list')
    let menuList = document.getElementById('menu-list')
    cartContainer.hidden = true 
    removeAllChildNodes(menuItemsList)
    removeAllChildNodes(menuList)
    const removeBtns = document.querySelectorAll(".remove-button")
    removeBtns.forEach(button => button.remove())
}

renderOrder(){
    Order.renderOrderView()
    let cartContents = document.getElementById('cart-contents')
    let orderContainer = document.getElementById("order")
        let orderContents = document.createElement("div")
            orderContents.id = "order-contents"
            orderContents.innerHTML = 
        `<h2><b>Your Order is Complete!</h2><br>
        Order #${this.id}<br>
        Name: ${this.name}<br>
        Total: $${this.total}<br><br>
        Items:<br></b>
        ${cartContents.innerHTML}<br>
        ${renderTaxMath()}<br>
        <button class="cancel-order-button" id="cancel-order-button">Cancel Order</button>
        <button class="home-button" id="home-button">Home</button> 
        `
    orderContainer.appendChild(orderContents)
        let cancelOrderButton = document.getElementById("cancel-order-button")
        let homeButton = document.getElementById("home-button")
        cancelOrderButton.addEventListener("click", e => this.cancelOrder(e))
        homeButton.addEventListener("click", e => renderHomeView(e))
}

cancelOrder(e){
    e.preventDefault
    fetch("http://localhost:3000/orders"+`/${this.id}`, {
        method: "DELETE",
        headers: { 
        "Content-Type": "application/json",
        "Accept": "application/json"
        },
    })
    alert("Your order is canceled")
    renderHomeView()
}



}