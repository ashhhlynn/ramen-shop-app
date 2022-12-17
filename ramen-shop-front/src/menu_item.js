class MenuItem {

    static all = [];
    
    constructor(id, name, price, description, menu_id, image_url){
        this.id = id;
        this.name = name;
        this.price = price;
        this.description = description;
        this.image_url = image_url;
        this.menu_id = menu_id;
        MenuItem.all.push(this);
    }

    menuItemDisplay(){
        return this.name + " | $" + this.price
    }

    renderMenuItems(){
        const menuItemsList = document.getElementById("menu-items-list")
            let card = document.createElement("div");
            card.className = "card"
            card.id = `${this.menu_id}`
            card.innerHTML+= `    
                <img src="${this.image_url}"><br>
                ${this.menuItemDisplay()}
                <button class="add-button" id="${this.id}">+</button><br>
                <i>${this.description}</i>
            `
            card.children[2].addEventListener("click", e => MenuItem.cartListeners(e))
        menuItemsList.appendChild(card)
    }

    static cartListeners(e){
        e.preventDefault()
        let menu_item = MenuItem.all.find(menuItem => menuItem.id == e.target.id)
        if (e.target.innerText === '+') {
            menu_item.addToCart()
        }
        else if 
        (e.target.innerText === '-') {
            menu_item.removeFromCart()
        }
    }
    
    addToCart(){
        if (document.getElementById("cart-contents")){
        const cartContents = document.getElementById("cart-contents")
            let cartItem = document.createElement("li")
                cartItem.id = `item-${this.id}`
                cartItem.innerHTML += `${this.menuItemDisplay()}
                <button class="remove-button" id='${this.id}'>-</button>`
                cartItem.lastElementChild.addEventListener("click", e => MenuItem.cartListeners(e))
        cartContents.appendChild(cartItem)   
        cart_total += this.price 
        alert("This item was added to your cart!")
        MenuItem.renderCartTotal()}
        else {
            alert("Click Order on the navigation menu to add to your cart!")
        }  
    }

    removeFromCart(){
        document.getElementById(`item-${this.id}`).remove()
        cart_total -= this.price 
        alert("This item was removed from your cart!")
        MenuItem.renderCartTotal()
    }
   
    static renderCartTotal(){
        const cartTotal = document.getElementById("cart-total")    
            cartTotal.innerHTML = `${renderTaxMath()}`
    }








    
    static findMenu(e){ 
        console.log(e.target)      
        e.preventDefault()
        const menuItemsList = document.getElementById("menu-items-list")
        menuItemsList.innerHTML = ""
        if (e.target.className == ('menu-button')){
            let m = Menu.all.find(m => m.id == e.target.id)
            m.menu_items.forEach(menu_item => menu_item.renderMenuItems())
        }
        
    }
}