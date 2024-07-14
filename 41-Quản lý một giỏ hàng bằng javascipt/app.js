let cart = JSON.parse(localStorage.getItem('cart')) || [];

function displayCart() {
  const cartContainer = document.getElementById('cart');
  cartContainer.innerHTML = '';
  
  cart.forEach((item, index) => {
    const cartItem = document.createElement('div');
    cartItem.className = 'cart-item';
    cartItem.innerHTML = `
      <span>${item.name}</span>
      <span>$${item.price}</span>
      <span>Quantity: ${item.quantity}</span>
      <button onclick="removeFromCart(${index})">Remove</button>
      <button onclick="updateQuantity(${index}, ${item.quantity + 1})">+</button>
      <button onclick="updateQuantity(${index}, ${item.quantity - 1})">-</button>
    `;
    cartContainer.appendChild(cartItem);
  });

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  document.getElementById('total').innerText = `Total: $${total}`;
}

function addToCart(name, price) {
  const existingProduct = cart.find(item => item.name === name);

  if (existingProduct) {
    existingProduct.quantity += 1;
  } else {
    cart.push({ name, price, quantity: 1 });
  }

  localStorage.setItem('cart', JSON.stringify(cart));
  displayCart();
}

function removeFromCart(index) {
  cart.splice(index, 1);
  localStorage.setItem('cart', JSON.stringify(cart));
  displayCart();
}

function updateQuantity(index, quantity) {
  if (quantity <= 0) {
    removeFromCart(index);
  } else {
    cart[index].quantity = quantity;
    localStorage.setItem('cart', JSON.stringify(cart));
    displayCart();
  }
}

window.onload = displayCart;
