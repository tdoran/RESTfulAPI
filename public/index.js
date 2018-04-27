// Generic XHR Request
function clientRequest(method, url, body, callback) {
    var xhr = new XMLHttpRequest();
  
    xhr.addEventListener("load", function() {
      console.log(xhr.status);
      if (xhr.readyState === 4 && xhr.status === 200) {
        // console.log(xhr.responseText);
        console.log(xhr);
        // var response = JSON.parse(xhr.responseText);
        // callback(response);
      } else {
        console.log("XHR error", xhr.status);
      } 
    });
    xhr.open(method, url, true);
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");    
    xhr.send(body);
  }
  
  
  // Generic Form Data Packaging (Returns JSON String)
  function packageFormData(form) {
    var formData = new FormData(form);
    var output = {
    };
    for (var key of formData.keys()) {
      output[key] = formData.get(key);
    }
    return JSON.stringify(output);
  }
  

//   function logoutRedirection(response){
//     window.setTimeout(() => {
//         window.location.replace(response.route);
//       }, 1000);
//   }