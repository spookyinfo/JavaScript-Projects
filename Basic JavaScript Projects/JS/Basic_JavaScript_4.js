function AnCo() {
   var Album = {
    Title:"Person Pitch",
    Artist: "Panda Bear",
    Label: "Paw Tracks",
    Year: "2007",
    Rating: "*****"
};
    delete Album.Label
   document.getElementById("Dictionary").innerHTML = Album.Label; 
}