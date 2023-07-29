  var adminform = document.getElementById("adminForm");

  adminform.addEventListener("submit", addProduct);
  
   // Function to add new user
   function addProduct(event) 
   {
    event.preventDefault();
    
    //user input
      var ProductName = document.getElementById("Pname").value;
      var ProductDescription = document.getElementById("pdp").value;
      var ProductPrice = document.getElementById("price").value;


    // Data to be added
    var newProduct = 
    {
      Pname: ProductName,
      Pdescription: ProductDescription,
      Pprice:ProductPrice
    };

    // FirebaseDatabase API URL
    var apiUrl = "https://shoppingcart-bf17c-default-rtdb.firebaseio.com/Products.json";

    // Create the request object
    var request = new Request(apiUrl, 
    {
      method: 'POST',
      body: JSON.stringify(newProduct),
     
    });

    // Send the request
    fetch(request)
      .then(response => response.json())
      .then(data => {
        console.log("New :", data);
        alert("Product Added Successfully")
        document.getElementById("adminForm").reset();
      })
      .catch(error => {
        console.error("Error:", error);
        alert("Something Went Wrong So Give Correct Details")
  
      });
  }



//........................................................................
// .....................................................................
 // Call this function to fetch data and display it in the cards
 var result=document.getElementById('DisplayProduct');
 result.addEventListener('click',displayDataInCards);


 //function for getting the firebase data........................
 async function displayDataInCards() 
 {
   const cardContainer = document.getElementById('cardContainer');
   const data = await fetchDataFromFirebase();
 
   if (!data) 
   {
     cardContainer.textContent = 'Error fetching data.';
   } 
   else 
   {
     // Convert the object to an array of objects with only values
     const dataArray = Object.values(data);
 
     for (const shraj of dataArray) 
     {
       const card = createCard(shraj);
       cardContainer.appendChild(card);
     }
   }

 }
 



async function fetchDataFromFirebase() 
{
    try {
      const response = await fetch('https://shoppingcart-bf17c-default-rtdb.firebaseio.com/Products.json');
      if (!response.ok) {
        throw new Error('Network response was not ok.');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching data:', error);
      return null;
    }
  }
  
  function createCard(Products)
   {
    const card = document.createElement('div');
    card.classList.add('card');
  
    const productName = document.createElement('h2');
    productName.textContent = Products.Pname;
    card.appendChild(productName);
  
    const description = document.createElement('p');
    description.textContent = Products.Pdescription;
    card.appendChild(description);
  
    const price = document.createElement('p');
    price.classList.add('price');
    price.textContent = `Price${Products.Pprice}`;
    card.appendChild(price);

    // adding button for delete and update that produet

    // const UpdateButton=document.createElement('button');
    // productName.textContent = Products.Pname;
    // card.appendChild(productName);

    // const DeleteButton=document.createElement('button');
    // DeleteButton.textContent='DeleteButton';
    // DeleteButton.classList.add('deleteButtonClass');
    // DeleteButton.addEventListener('click', function () 
    // {
    //   deleteproduct();
    // }


    // )
    return card;
  }
 
  
  

// function deleteproduct()
// {

// }


//logout button for admin
const louOutBtnAdmin=document.getElementById("hideBtn");
louOutBtnAdmin.addEventListener('click',redirect);
function redirect()
{
  window.location.href="login.html";
}