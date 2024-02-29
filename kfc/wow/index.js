document.addEventListener('DOMContentLoaded', function () {
    // Check if the user is authenticated
    const authenticated = localStorage.getItem('authenticated');
    if (!authenticated || authenticated !== 'true') {
      // Redirect to the login page if not authenticated
      window.location.href = './../../index.html';
    }
  });
  