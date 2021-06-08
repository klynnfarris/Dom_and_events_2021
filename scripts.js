// Write your JavaScript code here.

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

     function alertWindow(){
          let alerting = window.alert("The shuttle is landing. Landing gear engaged.");
          if(alertWindow){
               const alertStatusChange = document.getElementById("flightStatus");
               alertStatusChange.innerHTML = "The shuttle has landed.";

               const background = document.getElementById("shuttleBackground");
               background.style.backgroundColor = "green";

               const height = document.getElementById("spaceShuttleHeight");
               height.innerHTML = "0";
          }
     }


      let rocketPicture = document.getElementById("rocket");
      rocketPicture.style.position = "relative";
      rocketPicture.style.left = '0px';
      rocketPicture.style.top = '0px';

     function clickLeft(){
          rocketPicture.style.left = parseInt(rocketPicture.style.left ) - 10 + 'px';
          }
     
     function clickRight(){
          rocketPicture.style.left = parseInt(rocketPicture.style.left ) + 10 + 'px';
     }

     let shuttleHeight = 0;
     function clickDown(){
       rocketPicture.style.top = parseInt(rocketPicture.style.top) + 10 + 'px';
       function decrement(){
         shuttleHeight += -10000;
       document.getElementById("spaceShuttleHeight").innerHTML = shuttleHeight;
       }
       decrement();
     }
 
     function clickUp(){
       rocketPicture.style.top = parseInt(rocketPicture.style.top) - 10 + 'px';
       function increment(){
         shuttleHeight += 10000;
       document.getElementById("spaceShuttleHeight").innerHTML = shuttleHeight;
       }
       increment();
     }

     function abortMission(){
          let alerting = window.alert("Confirm that you want to abort the mission.");
          if(abortMission){
               const missionStatusChange = document.getElementById("flightStatus");
               missionStatusChange.innerHTML = "Mission aborted.";

               const background = document.getElementById("shuttleBackground");
               background.style.backgroundColor = "green";

               const height = document.getElementById("spaceShuttleHeight");
               height.innerHTML = "0";
          }
     }


     let takeOffButton = document.getElementById("takeoff");
     takeOffButton.addEventListener("click", confirm); 

     let landButton = document.getElementById("landing");
     landButton.addEventListener("click", alertWindow);

     let abortButton = document.getElementById("missionAbort");
     abortButton.addEventListener("click", abortMission); 

     let leftButton = document.getElementById("moveLeft");
     leftButton.addEventListener("click", clickLeft);
     
     let rightButton = document.getElementById("moveRight");
     rightButton.addEventListener("click", clickRight);

     let upButton = document.getElementById("moveUp");
     upButton.addEventListener("click", clickUp);

     let downButton = document.getElementById("moveDown");
     downButton.addEventListener("click", clickDown);

});
