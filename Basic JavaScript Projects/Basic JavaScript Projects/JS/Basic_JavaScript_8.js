function myFunction() {
    var num = 25;
    var n = num.valueOf()
    document.getElementById("value").innerHTML = n;
}

function myString() {
var num=525; 
document.getElementById("stringout").innerHTML = num.toString(8);
}

function myPrecise() {
    var num= 6.67398566; 
    document.getElementById("precision").innerHTML = num.toPrecision(3);
    }

function mySlice() {
    let animals = ["Parrot", "Monkey", "Sloth", "Bear", "Owl"];
    let mammals = animals.slice(1,4);
document.getElementById("slicer").innerHTML = mammals;
}
