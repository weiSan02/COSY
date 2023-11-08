/*
   Cosy
   Author: Hew Kar Eun
   Date: //2020  
   
   Filename:co_wallet.js

*/
let carts = document.querySelectorAll('.add-cart');

/*--Product index-----*/
let products = [
    {
        name: 'Wallet [HE_666]',
        tag: 'wallet.1',
        price:35,
        inCart:0
    },
    {
        name: 'Wallet [WD_1026]',
        tag: 'wallet.2',
        price:30,
        inCart:0
    },
    {
        name: 'Wallet [PK_167]',
        tag: 'wallet.3',
        price:25,
        inCart:0
    },
    {
        name: 'Wallet [BF_178]',
        tag: 'wallet.4',
        price:25,
        inCart:0
    },
    {
        name: 'Wallet [RB_888]',
        tag: 'wallet.5',
        price:40,
        inCart:0
    },
    {
        name: 'Wallet [BK_999]',
        tag: 'wallet.6',
        price:30,
        inCart:0
    },
];

for(let i=0; i<carts.length ;i++) {
    carts[i].addEventListener('click',() => {
        cartNumbers(products[i]);
        totalCost(products[i])
    })
}


/*---Add number beside Cart icon----*/
function onLoadCartNumbers(){
    let productNumbers = localStorage.getItem('cartNumbers');

    if(productNumbers){
        document.querySelector('.carticon span').textContent = productNumbers;
    }
}



/*---Add more than 1 same item to cart----*/


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


/*Calculate total cost the cart-----*/

function totalCost(product){

    let cartCost = localStorage.getItem('totalCost');
  
    console.log("My cartCost is",cartCost);
    console.log(typeof cartCost);

    if(cartCost != null){
        cartCost = parseInt(cartCost);
        localStorage.setItem("totalCost",cartCost + product.price);
    }else{
        localStorage.setItem("totalCost",product.price);
    }
}


/*----Display cart items---*/

function displaycart(){
    let cartItems = localStorage.getItem("productsInCart");
    cartItems = JSON.parse(cartItems);
    let productContainer = document.querySelector(".products");
    let cartCost = localStorage.getItem('totalCost');


    if(cartItems && productContainer){
        productContainer.innerHTML = '';
        Object.values(cartItems).map(item => {
            productContainer.innerHTML += `
            <table>
               <tr> 
               <td class="product">
                    <ion-icon name="close-circle-outline"></ion-icon>
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

/*---Call the function from the beginning----*/

onLoadCartNumbers();
displaycart();