class MenuItem{
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
                    ${menu_item.name} | $${menu_item.price}
                    <button class="add-button" id="${menu_item.id}">+</button><br>
                    <i>${menu_item.description}</i>
                `
                menuItemsList.appendChild(menuItem)
            menuItem.children[2].addEventListener("click", e => MenuItem.listenButtons(e))
        })
    }

    static listenButtons(e){
        e.preventDefault()
        let menu_item = MenuItem.all.find(menuItem => menuItem.id == e.target.id)
        if (e.target.innerText == '+') {
            menu_item.addToCart(e.target)
        }
        else if 
        (e.target.innerText === '-') {
            menu_item.removeFromCart(e.target)
        }
    }
    
    addToCart(menuItem){
        let cartContents = document.getElementById("cart-contents")
            let cartItem = document.createElement("li")
                cartItem.id = `item-${menuItem.id}`
                cartItem.innerHTML += `${menuItem.previousSibling.textContent}
                <button class="remove-button" id='${menuItem.id}'>-</button>`
        cartContents.appendChild(cartItem)    
        cart_total += this.price 
        alert("Added to cart")
        MenuItem.renderCart()
    }

    removeFromCart(menuItem){
        document.getElementById(`item-${menuItem.id}`).remove()
        cart_total -= this.price 
        console.log(cart_total)
        alert("Removed from cart")
        MenuItem.renderCart()
    }
   
    setEl(){
        let lE = document.getElementById(`item-${this.id}`)
        let lEC = lE.lastElementChild
        console.log(lEC)
        lEC.addEventListener("click", e => MenuItem.listenButtons(e))
    }
    
    static renderCart(){
        let cartContents = document.getElementById("cart-contents")
        let cartTotal = document.getElementById("cart-total")
        let listItems = document.querySelectorAll("li")
        for (var i = 0; i < listItems.length; i++ )
            {cartContents.innerHTML += ``}
        if (checkCartLength())
            {cartTotal.innerHTML= `Your cart is empty`}
        else 
            {cartTotal.innerHTML = `${renderTaxMath()}`}
        const removeBtns = Array.from(document.querySelectorAll(".remove-button"))
        removeBtns.forEach(button => button.addEventListener("click", e => MenuItem.listenButtons(e)))
    }
    

}


    