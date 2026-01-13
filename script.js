let selectedItem = "";
let selectedPrice = 0;

function orderNow(item, price) {
  selectedItem = item;
  selectedPrice = price;

  const phoneNumber = "917978900914"; // WhatsApp number
  const message = `Hello, I want to order ${item} worth ₹${price}`;
  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  window.open(url, "_blank");
}

function payNow() {
  if (selectedPrice === 0) {
    alert("Please order an item first!");
    return;
  }

  const upiId = "spanigrahi560-1@okicici"; // replace with your UPI ID
  const name = "Satya Ranjan Panigrahi";
  const note = selectedItem;

  const upiUrl = `upi://pay?pa=${upiId}&pn=${name}&am=${selectedPrice}&cu=INR&tn=${note}`;
  window.location.href = upiUrl;
}
