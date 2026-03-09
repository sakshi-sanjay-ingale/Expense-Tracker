document.getElementById('signup-form').addEventListener('submit', function(e) {
  e.preventDefault();

  const name = e.target[0].value;
  const email = e.target[1].value;
  const password = e.target[2].value;

  // Dummy signup logic (replace with real backend)
  alert(`Welcome, ${name}! Your account has been created.`);
  window.location.href = "login.html"; // Redirect to login
});