class MenuItem {

    static all = [];
    
    constructor(id, name, price, description, image_url){
        this.id = id;
        this.name = name;
        this.price = price;
        this.description = description;
        this.image_url = image_url;
        MenuItem.all.push(this);
    }

    static renderMenuItems(e){  
        let menu = Menu.all.find(menu=> menu.id == e.target.id)
        let menuItemsList = document.getElementById("menu-items-list")
        menuItemsList.innerHTML = ""
        menu.menu_items.forEach(menu_item => { 
            let menuItem = document.createElement("div");
                menuItem.className = "card"
                menuItem.innerHTML+= `    
                    <img src="${menu_item.image_url}"><br>
                    ${menu_item.menuItemDisplay()}
                    <button class="add-button" id="${menu_item.id}">+</button><br>
                    <i>${menu_item.description}</i>
                `
                menuItemsList.appendChild(menuItem)
            menuItem.children[2].addEventListener("click", e => MenuItem.listenButtons(e))
        })
    }

    menuItemDisplay(){
        return this.name + " | $" + this.price
    }

    static listenButtons(e){
        e.preventDefault()
        let menu_item = MenuItem.all.find(menuItem => menuItem.id == e.target.id)
        if (e.target.innerText == '+') {
            menu_item.addToCart()
        }
        else if 
        (e.target.innerText === '-') {
            menu_item.removeFromCart()
        }
    }
    
    addToCart(){
        const cartContents = document.getElementById("cart-contents")
            let cartItem = document.createElement("li")
                cartItem.id = `item-${this.id}`
                cartItem.innerHTML += `${this.menuItemDisplay()}
                <button class="remove-button" id='${this.id}'>-</button>`
                cartItem.lastElementChild.addEventListener("click", e => MenuItem.listenButtons(e))
        cartContents.appendChild(cartItem)   
        cart_total += this.price 
        alert("Added to cart")
        MenuItem.renderCart()  
    }

    removeFromCart(){
        document.getElementById(`item-${this.id}`).remove()
        cart_total -= this.price 
        alert("Removed from cart")
        MenuItem.renderCart()
    }
   
    static renderCart(){
        let cartTotal = document.getElementById("cart-total")   
        if (checkCartLength())
            {cartTotal.innerHTML= `Your cart is empty`
        }
        else 
            {cartTotal.innerHTML = `${renderTaxMath()}`
        }
    }
    
}


    