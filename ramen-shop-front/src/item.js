class Item {
    static all =[]
    constructor(id, name, price){
        this.id = id
        this.name = name
        this.price = price
        Item.all.push(this)
    }
}