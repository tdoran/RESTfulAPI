var loginForm = document.getElementById('login-form');
var loginButton = document.getElementById('login-btn');
var refreshButton = document.getElementById('js-refresh');


// login submit function - validates credentials and sends request to backend
loginButton.addEventListener('click', function (e) {
    // e.preventDefault();
    // loginValidation.innerHTML = '';
    // if (loginEmail.validity.patternMismatch || loginPassword.validity.patternMismatch) {
    //   loginValidation.innerHTML = 'Please provide valid login details.';
    // } else {
      // backend authentication request


      const loginCredentials = packageFormData(loginForm);
      clientRequest('POST', '/login', loginCredentials, function(response) {
          console.log('login successful');
          window.location.replace(response);     
               
        //   clientRequest('GET', '/', null, function(response){
        //     console.log(response)
        //     });

      })

     

  });

//   refreshButton.addEventListener('click', function (e){
//          window.location.replace('/');     
//   })

//   clientRequest('GET', '/users', null, function(response){
//     console.log(response)
//     });



  