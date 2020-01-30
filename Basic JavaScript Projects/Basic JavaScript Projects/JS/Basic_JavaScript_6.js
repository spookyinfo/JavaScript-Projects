
function hypotenuse(a, b) {
    function square(x) {return x*x;}
    return Math.sqrt(square(a) + square(b));
}
function secondFunction() {
    var result;
    result = hypotenuse(1,2);
    document.getElementById("Nested_Function").innerHTML = "The result is " + result + ".";
} 