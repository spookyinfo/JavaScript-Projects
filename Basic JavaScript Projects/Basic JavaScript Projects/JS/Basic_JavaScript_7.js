
function myFunction() {
var color = document.getElementById("EyeColor").value;
var text;
 if (color == "blue"|| color == "Blue"){
    text = "You win a tee shirt!";
 }
 else  {
     text = "Sorry, no tee shirt for you.";    
 }
 document.getElementById("result").innerHTML = text;
}