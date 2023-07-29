// Getting Admin Button and when click it goes to admin page
var LoginAdmin=document.getElementById("loginAdminButton");
LoginAdmin.addEventListener('click',goToAdminPage);

function goToAdminPage()
 {
  window.location.href = "admin.html";
}
// calling function when login button click
var LoginButton=document.getElementById("loginButton");   
LoginButton.addEventListener('click',GetData);

// function to get data from firebese
function GetData(event)
{
  

  event.preventDefault();
    let userid=document.getElementById("userId").value;
    let password=document.getElementById("password").value;
    console.log("shraj");

    var apiUrl = "https://shoppingcart-bf17c-default-rtdb.firebaseio.com/signup.json";
    //when click login there is a authentication so get data and aut
     
    fetch(apiUrl)
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then(data => {
          console.log(data)
          // Data is now available here, you can compare the user-entered data with the fetched data
          const FetchedData = Object.values(data)
          console.log(FetchedData)

        const isValid = FetchedData.find(signup => signup.UserId === userid && signup.password === password);
         console.log(isValid);
if (isValid)
 {
  console.log('Login successful');
  // alert("Login Successfull welcome....");
  window.location.href='mainPage.html';
  localStorage.setItem('withoutBtnclick','false');

} 
else
{
  console.log('Invalid userid or password');
  alert("Invalid Account So Please Create Account or Continue Without Login");
  document.getElementById("reset").reset();

}
})
.catch(error => {
console.error('Error fetching data:', error);
});
}



    






//logout
const handleClick =() =>
{

  localStorage.setItem('withoutBtnclick','true');
  
}
const clickMeButton=document.getElementById('withoutlogin');
clickMeButton.addEventListener('click',handleClick);




