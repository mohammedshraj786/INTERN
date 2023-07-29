var userForm = document.getElementById("userForm"); 
userForm.addEventListener("submit", addUser);
   // Function to add new user
   function addUser(event) 
   {
    event.preventDefault();
    
    // Get user input from the form
      var Name = document.getElementById("name").value;
      var MobileNo = document.getElementById("pno").value;
      var UserID = document.getElementById("userid").value;
      var Password = document.getElementById("password").value;

    // Data to be added
    var newUser = {
      name: Name,
      MobileNo: MobileNo,
      UserId:UserID,
      password:Password
    };

    // Your Firebase Realtime Database API URL
    var apiUrl = "https://shoppingcart-bf17c-default-rtdb.firebaseio.com/signup.json";

    // Create the request object
    var request = new Request(apiUrl, 
    {
      method: 'POST',
      body: JSON.stringify(newUser),
     
    });

    // Send the request
    fetch(request)
      .then(response => response.json())
      .then(data => {
        console.log("New :", data);
        alert("User Added Successfully")
        document.getElementById("userForm").reset();
      })
      .catch(error => {
        console.error("Error:", error);
        alert("Something Went Wrong So Give Correct Details")
  
      });
  }

  // event listener
  var buttonForToGoBack = document.getElementById("backToLogin");
      buttonForToGoBack.addEventListener('click', goToLoginPage);

      // for back to login page when user click
      function goToLoginPage() {
          window.location.href = "login.html";
      }

