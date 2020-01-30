var text = "";
var i;
for (i = 0; i <20; i++) {
    if (i === 5) { continue; }
    text += "The number is " + i + "<br>";
} 
document.getElementById("Continue").innerHTML = text;
