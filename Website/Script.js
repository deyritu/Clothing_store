// Show signup form
function showSignup() {
  document.getElementById("login-form").classList.add("hidden");
  document.getElementById("signup-form").classList.remove("hidden");
  document.getElementById("form-title").innerText = "Sign Up";
}

// Show login form
function showLogin() {
  document.getElementById("signup-form").classList.add("hidden");
  document.getElementById("login-form").classList.remove("hidden");
  document.getElementById("form-title").innerText = "Login";
}

// Signup logic with redirect
function signup() {
  let name = document.getElementById("signupName").value.trim();
  let email = document.getElementById("signupEmail").value.trim();
  let mobile = document.getElementById("signupMobile").value.trim();
  let pass = document.getElementById("signupPassword").value;

  if (!name || !email || !mobile || !pass) {
    showToast("Please fill in all fields");
    return;
  }

  let users = JSON.parse(localStorage.getItem("users") || "[]");
  if (users.some(u => u.email === email)) {
    showToast("User with this email already exists");
    return;
  }

  users.push({ name, email, mobile, pass });
  localStorage.setItem("users", JSON.stringify(users));
  showToast("🎉 Account created successfully! Redirecting...");

  setTimeout(() => {
    window.location.href = "home.html"; // Replace with your homepage URL
  }, 1000);
}

// Login logic with redirect
function login() {
  let email = document.getElementById("loginEmail").value.trim();
  let pass = document.getElementById("loginPassword").value;

  if (!email || !pass) {
    showToast("Please fill in all fields");
    return;
  }

  let users = JSON.parse(localStorage.getItem("users") || "[]");
  let user = users.find(u => u.email === email && u.pass === pass);

  if (user) {
    showToast(`✅ Login Successful! Redirecting...`);
    setTimeout(() => {
      window.location.href = "home.html"; // Replace with your homepage URL
    }, 1000);
  } else {
    showToast("Invalid email or password");
  }
}

// Account dropdown logic
function toggleDropdown(event) {
  event.preventDefault();
  const dropdown = event.currentTarget.nextElementSibling;
  dropdown.classList.toggle("hidden");
}

document.addEventListener("click", function(event) {
  const dropdown = document.querySelector(".dropdown-menu");
  const accountIcon = document.querySelector(".account-icon");
  if (!accountIcon.contains(event.target) && !dropdown.contains(event.target)) {
    dropdown.classList.add("hidden");
  }
});

// Manage profile (view/delete)
function manageProfile() {
  const users = JSON.parse(localStorage.getItem("users") || "[]");
  if (!users.length) {
    showToast("No user profiles available.");
    return;
  }

  let userEmail = prompt("Enter your email to manage your profile:");
  if (!userEmail) return;

  const userIndex = users.findIndex(user => user.email === userEmail);
  if (userIndex === -1) {
    showToast("Profile not found.");
    return;
  }

  const action = prompt("Type 'delete' to remove your profile or 'view' to see details:").toLowerCase();
  if (action === "delete") {
    users.splice(userIndex, 1);
    localStorage.setItem("users", JSON.stringify(users));
    showToast("Profile deleted successfully!");
  } else if (action === "view") {
    const user = users[userIndex];
    showToast(`Name: ${user.name}, Email: ${user.email}, Mobile: ${user.mobile}`);
  } else {
    showToast("Invalid action.");
  }
}

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

// Initialize cart count on load
document.addEventListener("DOMContentLoaded", updateCartCount);

// Toast notification function
function showToast(message, duration = 2000) {
  let toast = document.getElementById("toast");
  if (!toast) return;

  toast.textContent = message;
  toast.classList.add("show");
  toast.classList.remove("hidden");

  setTimeout(() => {
    toast.classList.remove("show");
    setTimeout(() => toast.classList.add("hidden"), 500);
  }, duration);
}

// Forgot password logic
function forgotPassword() {
  let email = prompt("Enter your registered email to reset password:");
  if (!email) return;

  let users = JSON.parse(localStorage.getItem("users") || "[]");
  let user = users.find(u => u.email === email.trim());

  if (!user) {
    showToast("Email not found.");
    return;
  }

  let newPassword = prompt("Enter your new password:");
  if (!newPassword) return;

  user.pass = newPassword;
  localStorage.setItem("users", JSON.stringify(users));
  showToast("Password updated successfully!");
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
document.addEventListener("click", function(event) {
  const mainDropdown = document.querySelector(".account-dropdown .dropdown-menu");
  const subDropdown = document.querySelector(".sub-dropdown-menu");

  if (mainDropdown && !event.target.closest(".account-dropdown")) {
    mainDropdown.classList.add("hidden");
  }

  if (subDropdown && !event.target.closest(".sub-dropdown")) {
    subDropdown.classList.add("hidden");
  }
});

// Placeholder functions for dropdown options
function showLogin() {
  document.getElementById("login-form").classList.remove("hidden");
  document.getElementById("signup-form").classList.add("hidden");
  document.getElementById("account-management").classList.add("hidden");
  showToast("Login form opened");
}

function showOrders() {
  showToast("Orders section is under development.");
}

function showWishlist() {
  showToast("Wishlist section is under development.");
}

function showAccountDetails() {
  showToast("Account Details section opened.");
  const accountSection = document.getElementById("account-management");
  if (accountSection) accountSection.classList.remove("hidden");
}

function showAddresses() {
  showToast("Addresses section opened.");
  // Implement your addresses section logic here
}

// Show account management section and hide login/signup forms
function showAccountManagement() {
  const loginForm = document.getElementById("login-form");
  const signupForm = document.getElementById("signup-form");
  const accountSection = document.getElementById("account-management");

  if (loginForm) loginForm.classList.add("hidden");
  if (signupForm) signupForm.classList.add("hidden");
  if (accountSection) accountSection.classList.remove("hidden");
}
