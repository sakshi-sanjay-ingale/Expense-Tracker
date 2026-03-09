document.getElementById('signup-form').addEventListener('submit', function(e) {
  e.preventDefault();

  const name = e.target[0].value;
  const email = e.target[1].value;
  const password = e.target[2].value;

  // Dummy signup logic (replace with real backend or database)
  alert(`Welcome, ${name}! Your account has been created.`);

  // Redirect to login page after signup
  window.location.href = "index.html";
});