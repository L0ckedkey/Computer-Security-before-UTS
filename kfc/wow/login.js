document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('loginForm');
    form.addEventListener('submit', function (event) {
      event.preventDefault();
      const email = form.elements.email.value;
      const password = form.elements.password.value;
  
      // Check if the credentials match
      if (email === 'adm1n@gg.com' && password === '4dm1n') {
        // Store authentication status
        localStorage.setItem('authenticated', 'true');
        // Redirect to dashboard
        window.location.href = 'dashboard.html';
      } 
    });
  });
  