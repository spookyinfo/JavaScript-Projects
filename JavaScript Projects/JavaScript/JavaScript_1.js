function Instrument_Function() {
    var Instrument_Output;
    var Instruments = document.getElementById("Instrument_Input").value;
    var Instrument_String = " is a cool instrument to play!"
    switch(Instruments) {
        case "Guitar":
            Instrument_Output = "Guitar" + Instrument_String;
        break;    
        case "Drums":
            Instrument_Output = "Drums" + Instrument_String;
        break; 
        case "Keyboard":
            Instrument_Output = "Keyboard" + Instrument_String;
        break;    
        case "Bass":
            Instrument_Output = "Bass" + Instrument_String;
        break;    
        case "Violin":
            Instrument_Output = "Violin" + Instrument_String;
        break;
        default: 
        Instrument_Output = "Please enter an instrument exactly as written on the above list.";    
    } 
document.getElementById("Output").innerHTML = Instrument_Output;
}

function Instrument_Change() {
    var A = document.getElementsByClassName("Instrument");
    A[0].innerHTML = "Bass\.";
    A[1].innerHTML = "Keyboard\.";
    A[2].innerHTML = "Drums\.";
    A[3].innerHTML = "Guitar\.";
}


var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.arc(115, 75, 40, 0, 2 * Math.PI);
ctx.stroke();

var c = document.getElementById("myCanvas2");
var ctx = c.getContext("2d");

var grd = ctx.createLinearGradient(80, 50, 0, 50, 60, 100);
grd.addColorStop(0, "purple");
grd.addColorStop(1, "white");

ctx.fillStyle = grd;
ctx.fillRect(1, 1, 250, 400);