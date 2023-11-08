/*
New Perspectives on HTML5 and CSS3, 7th Edition
Web Design and Development Assignment

Author: Joey Kok Yen Ni
Filename: boy.js
*/

let carts = document.querySelectorAll('.add-cart');

let products = [ 
    {
        name: 'Green Boy Shirt',
        tag: 'tshirt1',
        price:15,
        inCart:0
    },
    {
        name: 'Red Boy Shirt',
        tag: 'tshirt2',
        price:20,
        inCart:0
    },
    {
        name: 'Dark Blue Sweater',
        tag: 'boyshirt2',
        price:10,
        inCart:0
    },
    {
        name: 'Sky Blue Shirt',
        tag: 'boyshirt3',
        price:25,
        inCart:0
    },
    {
        name: 'Yellow line Shirt',
        tag: 'boyshirt4',
        price:25,
        inCart:0
    },
    {
        name: 'Denim Coat',
        tag: 'boyshirt5',
        price:35,
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
  
    console.log("My cartCost is",cartCost);
    console.log(typeof cartCost);

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
            productContainer.innerHTML += `
            <table>
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