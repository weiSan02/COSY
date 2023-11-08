/*
New Perspectives on HTML5 and CSS3, 7th Edition
Web Design and Development Assignment

Author: Joey Kok Yen Ni
Filename: babyboy.js
*/
let carts = document.querySelectorAll('.add-cart');

let products = [
    {
        name: 'Blue Jumpsuit',
        tag: 'babyboyshirt1',
        price:15,
        inCart:0
    },
    {
        name: 'Cartoon T-Shirt',
        tag: 'babyboyshirt2',
        price:20,
        inCart:0
    },
    {
        name: 'Yellow Shirt with Coat',
        tag: 'babyboyshirt3',
        price:10,
        inCart:0
    },
    {
        name: 'Light Ocean Jumpsuit',
        tag: 'babyboyshirt4',
        price:25,
        inCart:0
    },
    {
        name: 'Simple White Shirt',
        tag: 'babyboyshirt5',
        price:15,
        inCart:0
    },
    {
        name: 'Summer Yellow Shirt',
        tag: 'babyboyshirt6',
        price:25,
        inCart:0
    }
   
];

for(let i=0; i<carts.length ;i++) {
    carts[i].addEventListener('click',() => {
        cartNumbers(products[i]);
        totalCost(products[i])
    })
}

function onLoadCartNumbers(){
    let productNumbers = localStorage.getItem('cartNumbers');

    if(productNumbers){
        document.querySelector('.carticon span').textContent = productNumbers;
    }
}

function cartNumbers(product){

    let productNumbers = localStorage.getItem('cartNumbers');

    productNumbers = parseInt(productNumbers);

    if( productNumbers){
        localStorage.setItem('cartNumbers',productNumbers + 1);
        document.querySelector('.carticon span').textContent = productNumbers + 1;
    }else{
        localStorage.setItem('cartNumbers',1);
        document.querySelector('.carticon span').textContent = 1;
        
    }

    setItems(product);

    
}

function setItems(product){

    let cartItems =localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);

    if(cartItems != null){

        if(cartItems[product.tag] == undefined){
            cartItems = {
                ...cartItems,
                [product.tag]:product
            }
        }
        cartItems[product.tag].inCart += 1;

    }else{
        product.inCart = 1;

        cartItems = {
               [product.tag]:product
           }
         
    }
    
    localStorage.setItem("productsInCart", JSON.stringify (cartItems));
}


function totalCost(product){

    let cartCost = localStorage.getItem('totalCost');
  
    if(cartCost != null){
        cartCost = parseInt(cartCost);
        localStorage.setItem("totalCost",cartCost + product.price);
    }else{
        localStorage.setItem("totalCost",product.price);
    }
}

  
function displaycart(){
    let cartItems = localStorage.getItem("productsInCart");
    cartItems = JSON.parse(cartItems);
    let productContainer = document.querySelector(".products");
    let cartCost = localStorage.getItem('totalCost');


    if(cartItems && productContainer){
        productContainer.innerHTML = '';
        Object.values(cartItems).map(item => {
            //Insert html statement in JavaScript
            productContainer.innerHTML += `
            <table class="AtC>
               <tr> 
               <td class="product">
                    <ion-icon name="close-circle-outline" class='btn-danger'></ion-icon>
                    <img src="${item.tag}.jpg" width="100" height="100">
                    <span>${item.name}</span>
               </td>
                <td class="price">
                $${item.price},00
                </td>
                <td class="quantity">
                    <ion-icon name="caret-back-circle-outline"></ion-icon>
                    <span>${item.inCart}</span>
                    <ion-icon name="caret-forward-circle-outline"></ion-icon>
                </td>
                <td class="total">
                $${item.inCart * item.price},00
                </td>
                </tr>
            </table>

            `
        });

        productContainer.innerHTML += `
            <div class="basketTotalContainer">
            <h4 class="basketTotalTitle">
            Basket Total
            </h4>
            <h4 class="basketTotal">
            $${cartCost},00
            </h4>
            </div>
        `

    }

}


onLoadCartNumbers();
displaycart();