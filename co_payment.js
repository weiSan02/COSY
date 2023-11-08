/*
New Perspectives on HTML5 and CSS3, 7th Edition
Web Design and Development Assignment


Author: Diong Zi Yu
Date: //2020  
css
Filename: co_payment.js
*/

window.onload = init;

function init() {
document.forms[0].onsubmit = function() {
if (this.checkValidity()) alert("Data passes initial validation tests");
return false;
}

document.getElementById("fDelivery").onclick = turnOnDelivery;
document.getElementById("fStorePick").onclick=turnOnPickup;
document.getElementById("fStorePickCertain").onclick=turnOnPickCertain;
}

function turnOnDelivery() {
document.getElementById("fName").disabled=false;
document.getElementById("lName").disabled=false;
document.getElementById("address1").disabled=false;
document.getElementById("address1b").disabled=false;
document.getElementById("address2").disabled=false;
document.getElementById("address3").disabled=false;
document.getElementById("states").disabled=false;
document.getElementById("cities").disabled=false;
document.getElementById("countries").disabled=false;
document.getElementById("Phone").disabled=false;
document.getElementById("Email").disabled=false;
document.getElementById("deliveryBox").disabled=false;
document.getElementById("deliveryBox1").disabled=false;
document.getElementById("pickupBox").disabled=true;
document.getElementById("pickupBox1").disabled=true;
}

function turnOnPickCertain() {
document.getElementById("fName").disabled=false;
document.getElementById("lName").disabled=false;
document.getElementById("address1").disabled=false;
document.getElementById("address1b").disabled=false;
document.getElementById("address2").disabled=false;
document.getElementById("address3").disabled=false;
document.getElementById("states").disabled=false;
document.getElementById("cities").disabled=false;
document.getElementById("countries").disabled=false;
document.getElementById("Phone").disabled=false;
document.getElementById("Email").disabled=false;
document.getElementById("deliveryBox").disabled=false;
document.getElementById("deliveryBox1").disabled=false;
document.getElementById("pickupBox").disabled=true;
document.getElementById("pickupBox1").disabled=true;
}

function turnOnPickup() {
document.getElementById("fName").disabled=true;
document.getElementById("lName").disabled=true;
document.getElementById("address1").disabled=true;
document.getElementById("address1b").disabled=true;
document.getElementById("address2").disabled=true;
document.getElementById("address3").disabled=true;
document.getElementById("states").disabled=true;
document.getElementById("cities").disabled=true;
document.getElementById("countries").disabled=true;
document.getElementById("Phone").disabled=true;
document.getElementById("Email").disabled=true;
document.getElementById("deliveryBox").disabled=true;
document.getElementById("deliveryBox1").disabled=true;
document.getElementById("pickupBox").disabled=false;
document.getElementById("pickupBox1").disabled=false;
}

function myFunction() {
  document.getElementById("pay").reset();
  location.reload();
  location="co_payment.html";
}