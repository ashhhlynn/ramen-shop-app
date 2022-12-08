class Item {
    static all =[]
    constructor(id){
        this.id = id
        Item.all.push(this)
    }
}