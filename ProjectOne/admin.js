
var LoginAdmin=document.getElementById("loginButton");
function GetData(event)
{
  

  event.preventDefault();
    let userid=document.getElementById("userId").value;
    let password=document.getElementById("password").value;
    console.log("shraj");

    var apiUrl = "https://shoppingcart-bf17c-default-rtdb.firebaseio.com/admin.json";
    //when click login there is a authentication so get data and aut
     
    fetch(apiUrl)
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
            console.log("ragul");
          }
          return response.json();
        
        })
        .then(data => {
          console.log(data)
          // Data is now available here, you can compare the user-entered data with the fetched data
          const FetchedData =(data);
          console.log("-----------",FetchedData)

        const isValid = FetchedData.Userid===userid && FetchedData.password==password;
        console.log(isValid);
if (isValid)
 {
  console.log('Login successful');
  // alert("Login Successfull");
  window.location.href='adminProduct.html';

} 
else
{
  console.log('Invalid userid or password');
  alert("Invalid Account So Please Create Account or Continue Without Login");

}

})
.catch(error => {
console.error('Error fetching data:', error);
});
}
LoginAdmin.addEventListener('click',GetData);

