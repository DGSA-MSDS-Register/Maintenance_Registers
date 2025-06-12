document.addEventListener('DOMContentLoaded', () => {
  const forms = document.querySelectorAll('.ajax-form');

  forms.forEach((form) => {
    form.addEventListener('submit', async (e) => {
      e.preventDefault(); // Stop form from reloading the page
      console.log('Submit event intercepted'); // Debugging

      const formData = new FormData(form);
      const url = form.dataset.action;

      try {
        const response = await fetch(url, {
          method: 'POST',
          body: formData,
        });

        if (response.ok) {
          console.log('Form submission successful');
          const redirectUrl = form.dataset.redirect || 'thank-you.html';
          window.location.href = redirectUrl; // Redirect to thank-you page
        } else {
          console.error('Form submission failed');
          alert('There was an error processing your submission.');
        }
      } catch (error) {
        console.error('Error:', error);
        alert('There was an error processing your submission.');
      }
    });
  });
});
