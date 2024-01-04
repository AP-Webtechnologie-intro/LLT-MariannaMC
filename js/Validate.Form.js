function validateForm(form) {
  var firstName = form.querySelector('#firstName').value;
  var subject = form.querySelector('#subject').value;
  var email = form.querySelector('#email').value;
  var message = form.querySelector('#message').value;

  if (firstName === '' || subject === '' || email === '' || message === '') {
      alert('Please fill in all fields');
      return false;
  }

  return true;
}