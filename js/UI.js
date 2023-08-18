class UI {
  static showProducts = (product, productDiv) => {
    let div = document.createElement("div");
    div.innerHTML = `
            <div class="w-[200px] h-[350px] mt-10 rounded overflow-hidden shadow-lg">
            <div class="px-6 py-3 relative">
                <div id='productId' class='hidden'>${product.id}</div>
                <img class="w-[160px] h-[200px] mb-2 mx-auto" src=${product.image}>
                <div class="h-5 truncate font-bold text-[18px] mb-2">${product.title}</div>
                <p class="font-bold text-[16px] mb-2 text-yellow-600">
                    ${product.price}
                    <span class="font-normal text-[16px] text-neutral-700">TK</span> 
                </p>                       
                <button id="cartBtn" class="bg-rose-600 rounded p-2 font-bold text-[11px] text-white absolute left-6 right-6 mx-auto">Add to Cart</button>
            </div>
            </div>`;
    productDiv.appendChild(div);
  };

  static addToCartUi = (newCartProduct, cartList) => {
    let div = document.createElement("div");
    div.className =
      "flex flex-wrap flex-row items-center justify-between mt-12 ml-16 mr-10 mb-5";
    div.innerHTML = `
        <div id='productId' class='hidden'>${newCartProduct.id}</div>
        <img class='w-10 h-10' src=${newCartProduct.image}>
        <p class='truncate w-[200px]'>${newCartProduct.title}</p>
        <p class=''>${newCartProduct.price} <span>TK</span></p>
        <button id='removeCartBtn' class='bg-rose-600 rounded px-2 py-1 font-bold text-[10px] text-white'>Delete</button>`;
    cartList.appendChild(div);
  };

  static showCartProducts = (cartList, product) => {
    let div = document.createElement("div");
    div.className =
      "flex flex-wrap flex-row items-center justify-between mt-12 ml-16 mr-10 mb-5";
    div.innerHTML = `
        <div id='productId' class='hidden'>${product.id}</div>
        <img class='w-10 h-10' src=${product.image}>
        <p class='truncate w-[200px]'>${product.title}</p>
        <p class=''>${product.price} <span>TK</span></p>
        <button id='removeCartBtn' class='bg-rose-600 rounded px-2 py-1 font-bold text-[10px] text-white'>Delete</button>`;
    cartList.appendChild(div);
  };

  static showCartIconValue(value, type) {
    if (type == "plus") {
      cartIcon.style.display = "block";
      cartIcon.textContent = value + 1;
    } else if (type == "minus") {
      cartIcon.style.display = "block";
      cartIcon.textContent = value - 1;
      if (cartIcon.textContent == 0) {
        cartIcon.style.display = "none";
      }
    } 
  }
}
