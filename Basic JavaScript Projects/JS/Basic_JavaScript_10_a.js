let cat = {
    breed: "ragamuffin",
    color: "black",
    birthday: "2017",
    description : function() {
        return "Shadow is a " + this.color + this.breed + this.birthday;
    
    }
}; 
document.getElementById("Shadow").innerHTML = cat.description();
