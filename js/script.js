let productDiv = document.querySelector("#productDiv");
let cartList = document.querySelector("#cartList");
let cartIcon = document.querySelector("#cartIcon");

class CartProduct {
  constructor(id, image, title, price) {
    this.id = id;
    this.image = image;
    this.title = title;
    this.price = price;
  }
}

let getProducts = () => {
  fetch("https://fakestoreapi.com/products?limit=12")
    .then((res) => res.json())
    .then((responseData) => {
      console.log(responseData);
      responseData.forEach((product) => {
        UI.showProducts(product, productDiv);
      });
    });
};

let getTotalCartPorduct = () => {
  let cartProducts = Store.getProductsFromLocalStorage();
  let totalCartProduct = cartProducts.length;
  if (totalCartProduct !== 0) {
    cartIcon.style.display = "block";
  }
  cartIcon.innerText = totalCartProduct;
  // UI.showCartIconValue(totalCartProduct,'plus');
};

let getCartProducts = () => {
  let cartProducts = Store.getProductsFromLocalStorage();
  cartProducts.forEach((product) => {
    UI.showCartProducts(cartList, product);
  });
};

const addToCart = (e) => {
  if (e.target.id === "cartBtn") {
    let parentEle = e.target.parentElement;
    let id = parentEle.children[0].textContent;
    let image = parentEle.children[1].getAttribute("src");
    let title = parentEle.children[2].textContent;
    let price = parentEle.children[3].innerText.split(" ")[0];
    let newCartProduct = new CartProduct(id, image, title, price);
    let duplicateProduct = Store.getDuplicateProduct(newCartProduct);
    let totalCartProduct = parseInt(cartIcon.innerText);
    if (duplicateProduct) {
      alert("This Product has already added to the cart...");
    } else {
      UI.addToCartUi(newCartProduct, cartList);
      Store.addToLocalStorage(newCartProduct);
      UI.showCartIconValue(totalCartProduct, "plus");
    }
  }
};

const deleteCartProduct = (e) => {
  if (e.target.id === "removeCartBtn") {
    let parentEle = e.target.parentElement;
    let id = parentEle.children[0].textContent;
    let image = parentEle.children[1].getAttribute("src");
    let title = parentEle.children[2].innerText;
    let price = parentEle.children[3].innerText.split(" ")[0];
    let newCartProduct = new CartProduct(id, image, title, price);
    let totalCartProduct = parseInt(cartIcon.innerText);
    parentEle.remove();
    Store.removeFromLocalStorage(newCartProduct);
    UI.showCartIconValue(totalCartProduct, "minus");
  }
};

document.addEventListener("DOMContentLoaded", getProducts);
document.addEventListener("DOMContentLoaded", getCartProducts);
document.addEventListener("DOMContentLoaded", getTotalCartPorduct);
productDiv.addEventListener("click", addToCart);
cartList.addEventListener("click", deleteCartProduct);
