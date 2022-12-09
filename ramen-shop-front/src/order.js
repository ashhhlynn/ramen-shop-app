class Order {


constructor(id, name, total){
    this.id = id;
    this.name = name;
    this.total = total;
    this.items = []
}


static makeNewOrderForm(e){
    e.preventDefault()
    if (cart_contents.length == 0)
        {MenuItem.renderCart()}
    else{
        viewTwo(false)
        document.getElementById("checkout-order-button").disabled = true;
        let checkoutContents = document.getElementById("checkout-contents")
        checkoutContents.innerHTML = `Review Your Order:`
        let order_form = document.getElementById("order-form")
            let form = document.createElement("form")
                let input = document.createElement("input")
                input.id = 'name'
                input.type = "text"
                input.placeholder = "Enter your name:"
                input.required = true 
                let submit = document.createElement("button")
                submit.type = "submit"
                submit.id = 'sub-button'
                submit.innerText = "place order"
            form.appendChild(input)
            form.appendChild(submit)
        order_form.appendChild(form)
        form.addEventListener("submit", e => Order.createOrder(e))
        }}

static createOrder(e){
    viewOne(true) 
    viewTwo(true)
    e.preventDefault()
    let name = document.querySelector("#name").value
    let total = (Math.round(cart_total * 7)/100) + cart_total
    console.log(total)
    const items = cart_contents.map(item => {
        return {id: item.id}})
    console.log(items)
    fetch("http://localhost:3000/orders", {
        method: "POST",
        headers: { 
        "Content-Type": "application/json",
        "Accept": "application/json"
        },
        body: JSON.stringify({
        name: name,
        total: total,
        items: items
    })})
    .then(resp=> resp.json())
    .then(function(json){
            console.log(json)
            Order.renderOrder(json)
    }) 
}


static renderOrder(order){
    const orderContents = document.getElementById("order-contents")
    orderContents.innerHTML = 
    `<b>Your Order is Complete!<br><br>
    Order #${order.id}<br>
    Name: ${order.name}<br>
    Total: $${order.total}<br><br>
    Items:<br></b>`
    let listItems = document.querySelectorAll("li")
    for (var i = 0; i < listItems.length; i++ )
        { let t = listItems[i].title
        orderContents.innerHTML += `${t}<br>` 
        }
    orderContents.innerHTML += `<br>${renderTaxMath()}`
    clearCart()
    const cancelOrderButton = document.getElementById("cancel-order-button");
    cancelOrderButton.addEventListener("click", e => Order.cancelOrder(order, e))
}

static cancelOrder(order, e){
    e.preventDefault()
    console.log(order.id)
    fetch("http://localhost:3000/orders"+`/${order.id}`, {
        method: "DELETE",
        headers: { 
        "Content-Type": "application/json",
        "Accept": "application/json"
        }})
    Order.renderCancelOrder()
}

static renderCancelOrder(){
    document.getElementById("cancel-order").hidden = true 
    const orderContents = document.getElementById("order-contents")
    orderContents.innerHTML = 
    `<b>Your Order is Canceled!</b>`
}


}