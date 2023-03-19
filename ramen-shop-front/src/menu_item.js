class MenuItem {

    static all = [];
    
    constructor(id, name, price, description, image_url) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.description = description;
        this.image_url = image_url;
        MenuItem.all.push(this);
    }

    menuItemDisplay() {
        return this.name + " | $" + this.price
    }

    renderMenuItems() {
        const menuItemsList = document.getElementById("menu-items-list")
            const card = document.createElement("div")
            card.className = "card"
            card.innerHTML+= `    
                <img src="${this.image_url}"><br>
                ${this.menuItemDisplay()}
                <button class="add-button" id="${this.id}">+</button><br>
                <i>${this.description}</i>
            `
            card.children[2].addEventListener("click", e => MenuItem.cartListeners(e))
        menuItemsList.appendChild(card)
    }

    static cartListeners(e) {
        const menuItem = MenuItem.all.find(menuItem => menuItem.id == e.target.id)
        if (e.target.innerText === '+') {
            menuItem.addToCart()
        }
        else if 
        (e.target.innerText === 'x') {
            menuItem.removeFromCart()
        }
    }
    
    addToCart() {
        if (document.getElementById("cart-contents")) {
            const cartContents = document.getElementById("cart-contents")
                const cartItem = document.createElement("li")
                    cartItem.id = `item-${this.id}`
                    cartItem.innerHTML += `${this.menuItemDisplay()}
                    <button class="remove-button" id='${this.id}'>x</button>`
                    cartItem.lastElementChild.addEventListener("click", e => MenuItem.cartListeners(e))
            cartContents.appendChild(cartItem)   
            cartTotal += this.price 
            console.log(cartTotal)
            alert("This item was added to your cart.")
            MenuItem.renderCartTotal()
        }
        else {
            alert("Click order on the navigation menu to start order.")
        }  
    }

    removeFromCart() {
        document.getElementById(`item-${this.id}`).remove()
        cartTotal -= this.price 
        alert("This item was removed from your cart.")
        MenuItem.renderCartTotal()
    }
   
    static renderCartTotal() {
        const cartTotalDiv = document.getElementById("cart-total")    
        cartTotalDiv.innerHTML = `${renderTaxMath()}`
    }

}