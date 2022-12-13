class Order {

constructor(id, name, total, items){
    this.id = id;
    this.name = name;
    this.total = total;
    this.items = items;
}

static makeNewOrderForm(){
        document.getElementById("order-form").hidden = false
        document.getElementById("checkout-order-button").disabled = true;
        const orderForm = document.getElementById("order-form")
            let form = document.createElement("form")
                let input = document.createElement("input")
                input.id = 'name'
                input.type = "text"
                input.placeholder = "Enter your name:"
                input.required = true 
                let submit = document.createElement("button")
                submit.type = "submit"
                submit.id = "submit"
                submit.innerText = "place order"
            form.appendChild(input)
            form.appendChild(submit)
        orderForm.appendChild(form)
        form.addEventListener("submit", e => Order.createOrder(e))
    }


static createOrder(e){
    e.preventDefault();
    hideOrShow(true) 
    let listItemsArray = Array.from(document.querySelectorAll("li"))
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

renderOrder(){
    const removeBtns = document.querySelectorAll(".remove-button")
    removeBtns.forEach(button => button.remove())
    let cartContents = document.getElementById('cart-contents').innerHTML
    const orderContents = document.getElementById("order-contents")
    orderContents.innerHTML = 
        `<b>Your Order is Complete!<br><br>
        Order #${this.id}<br>
        Name: ${this.name}<br>
        Total: $${this.total}<br><br>
        Items:<br></b>
        ${cartContents}<br>
        ${renderTaxMath()}
        `
        const cancelOrderButton = document.getElementById("cancel-order-button");
        cancelOrderButton.addEventListener("click", e => this.cancelOrder(e))
        clearCartAndContainers()
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
    document.getElementById("order").hidden = true
    clearCartAndContainers()
}

}