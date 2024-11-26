// Data Dummy Produk
const productData = [
  { id: 1, name: "Product 1", price: 100 },
  { id: 2, name: "Product 2", price: 200 },
  { id: 3, name: "Product 3", price: 300 },
  { id: 4, name: "Product 3", price: 300 },
  { id: 5, name: "Product 3", price: 300 },
  { id: 6, name: "Product 3", price: 300 },
];

// Tampilkan produk di output
const outputContainer = document.getElementById("output-container");
productData.forEach((item) => {
  const productElement = document.createElement("div");
  productElement.innerHTML = `
      <p>ID: ${item.id}</p> 
      <p>Nama: ${item.name}</p>
      <p>Harga: $${item.price}</p>
      <button class="add-to-cart" data-id="${item.id}" data-name="${item.name}" data-price="${item.price}">Tambah ke Keranjang</button>
      <hr />
    `;
  outputContainer.appendChild(productElement);
});

// Variabel untuk keranjang belanja
// NILAI AWAL KERANJANG 0
let cartItems = [];

// TAMPILAN JUMLAH KERANJANG
const cartCountElement = document.getElementById("cart-count");

// SLIDER KERANJANG
const cartItemsContainer = document.getElementById("cart-items");

// Fungsi untuk memperbarui tampilan keranjang
function updateCart() {
  // Bersihkan konten keranjang
  cartItemsContainer.innerHTML = "";

  // CART ITEMS TAMPIL DI KERANJANG
  cartItems.forEach((item, index) => {
    // MEMBUAT ITEM & KONTEN KERANJANG
    const cartItem = document.createElement("div");
    // CLASS CART ITEM
    cartItem.className = "cart-item";

    // MEMBUAT KONTEN KERANJANG
    cartItem.innerHTML = `
        <p>${item.name} - $${item.price}</p>
        <button onclick="removeItem(${index})">Hapus</button>
      `;

    // TAMPILKAN KERANJANG
    cartItemsContainer.appendChild(cartItem);
  });

  // UPDATE JUMLAH KERANJANG
  cartCountElement.textContent = cartItems.length;
}

// Fungsi untuk menghapus item dari keranjang
window.removeItem = function (index) {
  cartItems.splice(index, 1);
  updateCart();
};

// Event listener untuk tombol "Tambah ke Keranjang"
const buttons = document.querySelectorAll(".add-to-cart");
buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    const id = e.target.getAttribute("data-id");
    const name = e.target.getAttribute("data-name");
    const price = e.target.getAttribute("data-price");

    // Tambahkan produk ke keranjang
    cartItems.push({ id, name, price });
    updateCart();
  });
});

// Fungsi untuk membuka dan menutup keranjang
const cart = document.getElementById("cart");
const cartData = document.getElementById("cart-data");
const closeCart = document.getElementById("close-cart");

cart.addEventListener("click", () => {
  cartData.classList.add("open");
});

closeCart.addEventListener("click", () => {
  cartData.classList.remove("open");
});
