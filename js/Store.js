class Store {
  static addToLocalStorage(newCartProduct) {
    let cartProducts = Store.getProductsFromLocalStorage();
    cartProducts.push(newCartProduct);
    localStorage.setItem("cartProducts", JSON.stringify(cartProducts));
  }

  static getProductsFromLocalStorage() {
    if (localStorage.getItem("cartProducts") == null) {
      return [];
    } else {
      return JSON.parse(localStorage.getItem("cartProducts"));
    }
  }

  static removeFromLocalStorage(newCartProduct) {
    let productId = newCartProduct.id;
    let cartProducts = Store.getProductsFromLocalStorage();
    console.log(cartProducts);
    let filteredArray = cartProducts.filter(
      (product) => product.id !== productId
    );
    localStorage.setItem("cartProducts", JSON.stringify(filteredArray));
  }

  static getDuplicateProduct(newCartProduct) {
    let productId = newCartProduct.id;
    let cartProducts = Store.getProductsFromLocalStorage();
    return cartProducts.find((product) => product.id == productId);
  }
}
