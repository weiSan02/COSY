/*
   
   Cosy
   Author: Hew Kar Eun
   Date: //2020  
   Filename: co_pd.js

*/

window.onload = init;

function init() {
   document.forms[0].onsubmit = function() {
      if (this.checkValidity()) alert("Submit Successful ! Just wait our news !!! ");
      return false;
   }
   
   document.getElementById("pd").onclick = turnOnProduceDelivery;
}

function turnOnproduceDelivery() {
   document.getElementById("naemBox").disabled=false;
   document.getElementById("emailBox").disabled=false;
   document.getElementById("codeBox").disabled=true;
}
