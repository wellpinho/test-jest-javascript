class Cart {
  items = []

  add(item) {
    this.items.push(item)
  }

  getTotal() {
    return this.items.reduce((acc, item) => {
      return acc + item.quantity * item.product.price
    }, 0)
  }
  // summary() {}

  // checkout() {}
}

// const cart = Cart()

// const product = {
//   title: '',
//   price: '',
// }

// const item = {
//   quantity: 2,
//   product,
// }

// cart.add(item)
// cart.remove(product)
// cart.getTotal()
// cart.summary()
// cart.checkout()

module.exports = { Cart }
