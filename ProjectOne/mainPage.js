// 
async function displayDataInCards()
 {
    const cardContainer = document.getElementById('itemsContainer');

    const data = await fetchDataFromFirebase();

    if (!data) 
    {
        cardContainer.textContent = 'Error fetching data.';
    }
     else 
     {
       
        const dataArray = Object.values(data);

        for (const product of dataArray) {
            const card = createCard(product);
            cardContainer.appendChild(card);
        }
    }
}

displayDataInCards();//function calling.......................
// ----------------------------------------------------------
async function fetchDataFromFirebase() {
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
    card.classList.add('item');

    const productName = document.createElement('h3');
    productName.textContent = Products.Pname;
    card.appendChild(productName);

    const description = document.createElement('p');
    description.classList.add('HealthBenefits');
    description.textContent = `Health Benefits:${Products.Pdescription}`;
    card.appendChild(description);

    const price = document.createElement('p');
    price.classList.add('price');
    price.textContent = `Price:${Products.Pprice}`;
    card.appendChild(price);

    const addToCartButton = document.createElement('button');
    addToCartButton.textContent = 'Add To Cart';
    addToCartButton.classList.add('add-to-cart');//class name
    addToCartButton.addEventListener('click', function () 
    {
        addToCart(Products);
    });

    card.appendChild(addToCartButton);

    return card;
}

// Cart state to store selected items
var cartItems = [];
var totalMoney = 0;

// Function to add item to cart and update the aside tag
function addToCart(item) 
{
    cartItems.push(item);//push the name des and price 
    totalMoney += parseFloat(item.Pprice);
    updateCartUI();
}

// Function to update the aside tag with cart information
function updateCartUI() {
    var cartItemsContainer = document.getElementById("cartItemsContainer");

    var totalMoneyDisplay = document.getElementById("totalMoney");

    cartItemsContainer.innerHTML = ""; 
    totalMoneyDisplay.textContent = totalMoney.toFixed(2); 

    if (cartItems.length === 0) 
    {
        var emptyCartMsg = document.createElement("p");
        emptyCartMsg.textContent = "Your cart is empty.";
        cartItemsContainer.appendChild(emptyCartMsg);
    } 
    else 
    {
        cartItems.forEach(item => {
            var cartItemDiv = document.createElement("div");
            cartItemDiv.classList.add("cart-item");

            var cartItemName = document.createElement("p");
            cartItemName.textContent = item.Pname;
            cartItemDiv.appendChild(cartItemName);

            var cartItemPrice = document.createElement("p");
            cartItemPrice.textContent = "Price: " + item.Pprice;
            cartItemDiv.appendChild(cartItemPrice);

            cartItemsContainer.appendChild(cartItemDiv);
        });
    }
}

//logout function
const Lbutton=document.getElementById("topbutton");
Lbutton.addEventListener("click",submit);
function submit()

{
    if(UserActivation)
    {
    window.location.replace("login.html")
    }
    else{
        console.log("error");
    }
}

const hideLogoutBtn = document.getElementById('hideBtn')

const isButtonClicked=localStorage.getItem('withoutBtnclick');
if(isButtonClicked=='true')
{
    hideLogoutBtn.classList.add('hidden');
}