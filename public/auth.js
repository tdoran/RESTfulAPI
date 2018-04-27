var loginForm = document.getElementById('login-form');
var loginButton = document.getElementById('login-btn')

// login submit function - validates credentials and sends request to backend
loginButton.addEventListener('click', (e) => {
    e.preventDefault();
    // loginValidation.innerHTML = '';
    // if (loginEmail.validity.patternMismatch || loginPassword.validity.patternMismatch) {
    //   loginValidation.innerHTML = 'Please provide valid login details.';
    // } else {
      // backend authentication request
      const loginCredentials = packageFormData(loginForm);
      console.log(loginCredentials);
      clientRequest('POST', '/login', loginCredentials, function(response) {
          console.log('login successful');
      })




    //   clientRequest('GET', '/login', loginCredentials, function(response) {
    //     console.log(response);
    //     if (response.route && response.message === 'Authentication Success!') {
    //       window.setTimeout(function() {
    //         window.location.replace(response.route);
    //       }, 1000);
    //     } else {
    //       setTimeout(function() {
    //         const errorMessage =
    //           'Sorry, we have no record of that username/password combination. Please try again or register.';
    //         loginValidation.innerText = errorMessage;
    //         loginForm.reset();
    //       }, 500);
    //     }
    //   });
    // }
  });