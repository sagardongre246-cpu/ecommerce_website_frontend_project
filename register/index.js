const form = document.getElementById('registerForm');
const successMsg = document.querySelector('.success-message');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const password = form.password.value;
  const cpassword = form.cpassword.value;

  if (password !== cpassword) {
    alert("Passwords do not match!");
    return;
  }

  successMsg.textContent = "🎉 Registration Successful!";
  successMsg.style.opacity = "1";

  // Simple animation: fade out after 3 seconds
  setTimeout(() => {
    successMsg.style.opacity = "0";
    form.reset();
  }, 3000);
});
