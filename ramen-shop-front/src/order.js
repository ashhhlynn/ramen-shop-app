class Order {

    constructor(id, name, total, items) {
        this.id = id;
        this.name = name;
        this.total = total;
        this.items = items;
    }

    static makeNewOrderForm() {
        if (!checkCartLength()) {
            const cartContainer = document.getElementById("cart")
                const form = document.createElement("form")
                    const input = document.createElement("input")
                    input.id = 'name'
                    input.type = "text"
                    input.placeholder = "Enter your name:"
                    input.required = true 
                    const submit = document.createElement("button")
                    submit.type = "submit"
                    submit.id = "submit"
                    submit.innerText = "Place Order"
                form.appendChild(input)
                form.appendChild(submit)
            cartContainer.appendChild(form)
            document.getElementById("checkout-order-button").disabled = true
            form.addEventListener("submit", e => Order.createOrder(e))
        }
    }

    static createOrder(e) {
        e.preventDefault()
        if (!checkCartLength()) {
            const listItemsArray = Array.from(document.querySelectorAll("li"))
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
                return resp.json()
            })
            .then(function(json){
                console.log(json)
                const order = new Order(json.id, json.name, json.total, json.items)
                console.log(order)
                order.renderOrder()
            })
            .catch(function(error) {
                alert("There were errors processing your order")
                console.log(error.message);
            })
        }
    }

    renderOrder() {
        Order.renderOrderView()
        const orderContainer = document.getElementById("order")
        orderContainer.hidden = false
            const orderContents = document.createElement("div")
            orderContents.id = "order-contents"
            orderContents.innerHTML = `
                <h2><b>Your Order is Complete!</h2><br>
                Order #${this.id}<br>
                Name: ${this.name}<br>
                Total: $${this.total}<br><br>
                Items:<br></b> `
            this.items.forEach(item => {
                const menuItem = MenuItem.all.find(menuItem => menuItem.id == item.menu_item_id)
                orderContents.innerHTML += `${menuItem.menuItemDisplay()} <br>`
            })
            orderContents.innerHTML += `
                <br>${renderTaxMath()}<br>
                <button class="cancel-order-button" id="cancel-order-button">Cancel Order</button>
                `
        orderContainer.appendChild(orderContents)
        const cancelOrderButton = document.getElementById("cancel-order-button")
        cancelOrderButton.addEventListener("click", e => this.cancelOrder(e))
    }

   static renderOrderView() {
        showOrHide(true, true)
        document.getElementById("start-order").disabled = false
        resetCart()
    }

    cancelOrder() {
        fetch("http://localhost:3000/orders"+`/${this.id}`, {
            method: "DELETE",
            headers: { 
            "Content-Type": "application/json",
            "Accept": "application/json"
            },
        })
        alert("Your order was canceled!")
        document.getElementById("order").hidden = true
    }

}