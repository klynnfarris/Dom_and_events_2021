// Write your JavaScript code here.


//function init (){
   //  let takeOffButton = document.getElementById("takeoff");
   //  takeOffButton.addEventListener("click", confirmwindow);
     //let confirmwindow = window.confirm("Confirm that the shuttle is ready for takeoff.");
//}

//window load event    

window.addEventListener("load", function(){
     function confirm(){
          let confirmation = window.confirm("Confirm that the shuttle is ready for takeoff.");
          if(confirm){
               const statusChange = document.getElementById("flightStatus");
               statusChange.innerHTML = "Shuttle in flight";

               const background = document.getElementById("shuttleBackground");
               background.style.backgroundColor = "blue";

               const height = document.getElementById("spaceShuttleHeight");
               height.innerHTML = (Number(height.innerHTML) + 10000).toString();
               //change the string 0 to a number add 100000 then change it back to a string
          }
     }

     let takeOffButton = document.getElementById("takeoff");
     takeOffButton.addEventListener("click", confirm); 

});
