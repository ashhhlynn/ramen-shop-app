class MenuItem{

static all = [];
 
constructor(id, name, price, description, menu_id, image_url){
this.id = id;
this.name = name;
this.price = price;
this.description = description;
this.menu_id = menu_id
this.image_url = image_url;
MenuItem.all.push(this);
}
 
}