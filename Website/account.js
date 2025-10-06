function toggleDropdown(event) {
  event.preventDefault();
  const dropdown = document.querySelector(".dropdown-menu");
  dropdown.classList.toggle("hidden");
}

// Optional: close dropdown when clicking outside
window.addEventListener("click", (e) => {
  const dropdown = document.querySelector(".dropdown-menu");
  if (!e.target.closest(".account-dropdown")) {
    dropdown.classList.add("hidden");
  }
});

// Dummy handlers to prevent errors (you can replace with real logic)
function showLogin() {
  alert("Show login form");
}
function showOrders() {
  alert("Show orders page");
}
function showWishlist() {
  alert("Show wishlist page");
}

// Toggle main account dropdown
function toggleDropdown(event) {
  event.preventDefault();
  event.stopPropagation();
  const dropdown = event.currentTarget.nextElementSibling;
  if (dropdown) dropdown.classList.toggle("hidden");
}

// Toggle sub-dropdown for Manage Account
function toggleSubDropdown(event) {
  event.preventDefault();
  event.stopPropagation();
  const subDropdown = event.currentTarget.nextElementSibling;
  if (subDropdown) subDropdown.classList.toggle("hidden");
}

// Close dropdowns if clicking outside
document.addEventListener("click", function (event) {
  const mainDropdown = document.querySelector(
    ".account-dropdown .dropdown-menu"
  );
  const subDropdown = document.querySelector(".sub-dropdown-menu");

  if (mainDropdown && !event.target.closest(".account-dropdown")) {
    mainDropdown.classList.add("hidden");
  }

  if (subDropdown && !event.target.closest(".sub-dropdown")) {
    subDropdown.classList.add("hidden");
  }
});

// Cart logic
function updateCartCount() {
  const cart = JSON.parse(localStorage.getItem("cart") || "[]");
  const countSpan = document.querySelector(".cart-count");
  if (countSpan) countSpan.textContent = cart.length;
}

function addToCart(item) {
  const cart = JSON.parse(localStorage.getItem("cart") || "[]");
  cart.push(item);
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartCount();
}

function clearCart() {
  localStorage.removeItem("cart");
  updateCartCount();
}

// Initialize cart count on page load
document.addEventListener("DOMContentLoaded", updateCartCount);

// Placeholder functions for dropdown options
function showLogin() {
  alert("Login/Sign Up section coming soon!");
}

function showOrders() {
  alert("Orders section under development.");
}

function showWishlist() {
  alert("Wishlist section under development.");
}
document.addEventListener("DOMContentLoaded", () => {
  const saveBtn = document.querySelector(".save-btn");
  const popup = document.getElementById("popup");

  saveBtn.addEventListener("click", (e) => {
    e.preventDefault(); // prevent form submission for demo

    // Show the popup
    popup.classList.remove("hidden");
    popup.classList.add("show");

    // Hide after 2 seconds
    setTimeout(() => {
      popup.classList.remove("show");
      popup.classList.add("hidden");
    }, 2000);
  });
});
// Toggle mobile menu
function toggleMenu() {
  const navLinks = document.querySelector(".nav-links");
  navLinks.classList.toggle("active");
}
