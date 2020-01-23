function realNan() {
   document.getElementById("notNum").innerHTML = 0/0
}

function noNum() {
   document.getElementById("trueNan").innerHTML = isNaN('cat');
}

function yesNum() {
   document.getElementById("falseNan").innerHTML = isNaN(365);
}

function posInf(){
   document.getElementById("Infinite").innerHTML = (3678E980)
}

function negInf(){
   document.getElementById("NegInfinite").innerHTML = (-3678E980)
}

function yesBoo() {
   document.getElementById("trueBoole").innerHTML = (30>20);
}

function noBoo() {
   document.getElementById("falseBoole").innerHTML = (10>90);
}

console.log(350*67)

function coercion() {
   document.getElementById("Force").innerHTML = ("5"*30)
}

console.log((30+10)<"twenty")

function yesComp() {
   document.getElementById("compTrue").innerHTML = 50==(25+25);
}

function noComp() {
   document.getElementById("compFalse").innerHTML = 60==(15+15);
}

function sameVal() {
   Date1 = 9/11/1975;
   Date2 = 9/11/1975;
  document.getElementById("yesValDat").innerHTML = (Date1===Date2);
}

function diffValDat() {
   X = 37;
   Time = "9:30PM";
  document.getElementById("noValDat").innerHTML = (X===Time);
}

function diffValDat() {
   X = 37;
   Time = "9:30PM";
  document.getElementById("noValDat").innerHTML = (X===Time);
}

function diffValDat_2() {
   x = 2;
   y = "2";
  document.getElementById("noValDat_2").innerHTML = (x===y);
}

function diffValDat_3() {
   Num1 = 3;
   Num2 = 4;
  document.getElementById("noValDat_3").innerHTML = (Num1===Num2);
}

function trueAnd() {
  document.getElementById("andTrue").innerHTML = ((10>8) && (8>4));
}

function falseAnd() {
  document.getElementById("andFalse").innerHTML = ((30>10) && (10>20));
}

function trueOr() {
   document.getElementById("orTrue").innerHTML = ((30>10) || (10>20));
 }

 function falseOr() {
   document.getElementById("orFalse").innerHTML = ((30>40) || (40>50));
 }

 function trueNot() {
   document.getElementById("notTrue").innerHTML = !(100>200);
 }

 function falseNot() {
   document.getElementById("notFalse").innerHTML = !(200>100);
 }