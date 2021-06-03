// Write your JavaScript code here.


function init (){
     let takeOffButton = document.getElementById("takeoff");
     takeOffButton.addEventListener("click", confirmwindow);
     let confirmwindow = confirm("Confirm that the shuttle is ready for takeoff.");
}

//window load event
window.addEventListener("load", init);    

