let cat = {
    breed: "ragamuffin",
    color: "black",
    birthday: "2017",
    description : function() {
        return "Shadow is a " + this.color + this.breed + " born in " + this.birthday; //This describes the full object 
    
    }
}; 
document.getElementById("Shadow").innerHTML = cat.description();
