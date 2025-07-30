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
// تظبيط السعر اللي في الكارت - اجمالي السعر
let count_item = document.querySelector(".count_item");
let price_cart_Head = document.querySelector(".price_cart_Head");
let count_item_cart = document.querySelector(".count_item_cart");
let price_cart_total = document.querySelector(".price_cart_total");

function grtCartItems() {
  let total_Price = 0;
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
          <button onclick="removeFromCart(${i})" class="delete_item"><i class="fa-solid fa-trash"></i></button>
        </div>
`;
    total_Price += product_cart[i].price;
  }
  items_in_cart.innerHTML = items_c;
  price_cart_Head.innerHTML = "$" + total_Price;
  count_item.innerHTML = product_cart.length;

  count_item_cart.innerHTML = `${product_cart.length} Item in Cart`;
  price_cart_total.innerHTML = "$" + total_Price;
}

function removeFromCart(index) {
  product_cart.splice(index, 1);
  grtCartItems();

  //علشان يشيل الاكتيف من على الزرار في حالة حذف المنتج
  let addToCartButtons = document.querySelectorAll(".fa-cart-plus");
  for (let i = 0; i < addToCartButtons.length; i++) {
    addToCartButtons[i].classList.remove("active");
    product_cart.forEach((product) => {
      if (product.id == i) {
        addToCartButtons[i].classList.add("active");
      }
    });
  }
}
