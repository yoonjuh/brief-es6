function createBookShop(inventory) {
  return {
    inventory,
    inventoryValue() { // this line of code refers to "inventory: function(){" 
      return this.inventory.reduce((total, book) => {
        return total + book.price;
      }, 0)
    },
    priceForTitle: function(title) {
      return this.inventory.find(book => book.title === title).price;
    }
  };
}



const inventory = [
  { title: "Harry Potter", price: 10},
  { title: "Eloquent Javascript", price: 15}
];

const bookShop = createBookShop(inventory);

bookShop.inventoryValue();
bookShop.priceForTitle('Haary Potter');