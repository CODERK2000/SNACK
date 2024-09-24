// Variables
let cart = [];
const cartCountElement = document.querySelector('.cart-count');
const cartItemsElement = document.getElementById('cart-items');
const cartTotalPriceElement = document.getElementById('cart-total-price');
const productGridElement = document.getElementById('product-grid');
const cartModal = document.getElementById('cart-modal');
const paymentSection = document.getElementById('payment-section');
const finalTotalElement = document.getElementById('final-total');

// Productos simulados
const products = [
    { name: 'Producto 1', price: 25, image: 'producto1.jpg' },
    { name: 'Producto 2', price: 30, image: 'producto2.jpg' },
    { name: 'Producto 3', price: 40, image: 'producto3.jpg' },
    { name: 'Producto 4', price: 20, image: 'producto4.jpg' },
    { name: 'Producto 5', price: 35, image: 'producto5.jpg' },
    { name: 'Producto 6', price: 28, image: 'producto6.jpg' },
    { name: 'Producto 7', price: 45, image: 'producto7.jpg' },
    { name: 'Producto 8', price: 38, image: 'producto8.jpg' }
];

// Mostrar los productos en la página
function displayProducts() {
    products.forEach(product => {
        const productElement = document.createElement('div');
        productElement.classList.add('product-item');
        productElement.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>Descripción breve de ${product.name}.</p>
            <span class="price">$${product.price.toFixed(2)}</span>
            <button onclick="addToCart('${product.name}', ${product.price})">Agregar al carrito</button>
        `;
        productGridElement.appendChild(productElement);
    });
}

// Añadir productos al carrito
function addToCart(name, price) {
    cart.push({ name, price });
    updateCartUI();
}

// Actualizar el carrito de compras
function updateCartUI() {
    // Actualizar contador del carrito
    cartCountElement.textContent = cart.length;

    // Limpiar el modal del carrito
    cartItemsElement.innerHTML = '';

    // Añadir productos seleccionados al modal
    cart.forEach((item, index) => {
        const cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');
        cartItem.innerHTML = `
            <p>${item.name} - $${item.price.toFixed(2)}</p>
            <button onclick="removeFromCart(${index})">Eliminar</button>
        `;
        cartItemsElement.appendChild(cartItem);
    });

    // Calcular total
    const total = cart.reduce((acc, item) => acc + item.price, 0);
    cartTotalPriceElement.textContent = `$${total.toFixed(2)}`;
    finalTotalElement.textContent = `$${total.toFixed(2)}`;
}

// Eliminar productos del carrito
function removeFromCart(index) {
    cart.splice(index, 1);
    updateCartUI();
}

// Mostrar el modal del carrito
document.getElementById('cart-icon').addEventListener('click', () => {
    cartModal.classList.remove('hidden');
});

// Cerrar el modal del carrito
function closeCart() {
    cartModal.classList.add('hidden');
}

// Mostrar la pasarela de pago
function showPayment() {
    closeCart();
    paymentSection.classList.remove('hidden');
}

// Cerrar la pasarela de pago
function closePayment() {
    paymentSection.classList.add('hidden');
}

// Finalizar compra (resetea el carrito)
function finalizePurchase() {
    alert('Compra finalizada. ¡Gracias por tu compra!');
    cart = [];
    updateCartUI();
    closePayment();
}

// Cargar los productos al cargar la página
window.onload = displayProducts;

function toggleCartModal() {
    const cartModal = document.getElementById('cart-modal');
    cartModal.classList.toggle('hidden');
}

function showPaymentModal() {
    const cartModal = document.getElementById('cart-modal');
    const paymentModal = document.getElementById('payment-modal');
    cartModal.classList.add('hidden');
    paymentModal.classList.remove('hidden');
}

function togglePaymentModal() {
    const paymentModal = document.getElementById('payment-modal');
    paymentModal.classList.add('hidden');
}

