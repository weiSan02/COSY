/*
New Perspectives on HTML5 and CSS3, 7th Edition
Web Design and Development Assignment

Author: Joey Kok Yen Ni
Filename: co_kidscount.js
*/

startTime();
setInterval("startTime()", 1000);

function startTime()
{
   var today = new Date();

   var localTime = today.toLocaleTimeString();
   var ThisDay=today.getDate();
   var ThisMonth=today.getMonth()+1;
   var ThisYear=today.getFullYear();   


   var newyear=new Date("October 15 , 2020");

   
   var dayleft=(newyear-today)/(1000*60*60*24);
   var hrs = (dayleft - Math.floor(dayleft))*24;
   var mins = (hrs - Math.floor(hrs))*60;
   var secs = (mins - Math.floor(mins))*60;

  var MonthTxt = new Array("", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October","November", "December");


   document.getElementById("currentdate").innerHTML = "Today is " + MonthTxt[ThisMonth] + " " + ThisDay + ", " + ThisYear + " " + localTime;
  
   if (dayleft >0) {
     // document.getElementById("dayleftinfo").innerHTML = " " ;
      document.getElementById("dLeft").textContent = Math.floor(dayleft);
      document.getElementById("hLeft").textContent = Math.floor(hrs);
      document.getElementById("mLeft").textContent =Math.floor(mins);
      document.getElementById("sLeft").textContent = Math.floor(secs);
   
   } else if (dayleft >-1)  {
     document.getElementById("dayleftinfo").innerHTML = "Promotion Ended! <br/><i>Stay tune for next coming up promotion!</i>";
     document.getElementById("timeleft").style.display="none";
     document.getElementById("countdown").style.display="none";
     document.getElementById("kidimg2").style.display="none";
     document.getElementById("kid").style.height="60%";
     document.getElementById("terms").style.marginTop="50px";
     document.getElementById("dayleftinfo").style.backgroundColor="rgba(228, 241, 233, 0.836)";
     document.getElementById("dayleftinfo").style.height="50px";


  }  else  {
      document.getElementById("dayleftinfo").innerHTML = "";
      document.getElementById("timeleft").style.display="none";
      document.getElementById("countdown").style.display="none";
  }  

 
}  