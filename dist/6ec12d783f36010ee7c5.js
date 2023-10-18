/** @format */

window.onload = function () {
  document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault();
    // generate a five digit number for the contact_number variable
    this.contact_number.value = Math.random() * 100000 | 0;
    // these IDs from the previous steps
    emailjs.sendForm('service_6yfy5fs', 'template_8kijxr3', this).then(function () {
      //RESET FORM
      // Reset the form
      document.getElementById('user_name').value = '';
      document.getElementById('user_email').value = '';
      document.getElementById('message').value = '';
      // Show the success message
      document.getElementById('success-message').style.display = 'block';
      console.log('SUCCESS!');
    }, function (error) {
      console.log('FAILED...', error);
    });
  });
};