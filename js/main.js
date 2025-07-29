// open close cart
var cart = document.querySelector(".cart");
function open_cart() {
  cart.classList.add("active");
}
function close_cart() {
  cart.classList.remove("active");
}

// add item in cart

var all_products_json;
var items_in_cart = document.querySelector(".items_in_cart");
let product_cart = [];
//اضافة المنتج في العربة
function addToCart(id, btn) {
  product_cart.push(all_products_json[id]);
  btn.classList.add("active");
  grtCartItems();
}

function grtCartItems() {
  let items_c = "";
  for (let i = 0; i < product_cart.length; i++) {
    items_c += `
<div class="item_cart">
          <img src="${product_cart[i].img}" alt="" />
          <div class="content">
            <h4>
             ${product_cart[i].name}
            </h4>
            <p class="price_cart">$${product_cart[i].price}</p>
          </div>
          <button class="delete_item"><i class="fa-solid fa-trash"></i></button>
        </div>
`;
  }
  items_in_cart.innerHTML = items_c;
}
