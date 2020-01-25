function validateForm() {
    var x = document.forms["myForm"]["fname"].value;
    if (x == "") {
      alert("All fields must be filled out");
      return false;
    }

    x = document.forms["myForm"]["flast"].value;
    if (x == "") {
      alert("All fields must be filled out");
      return false;
    }

    x = document.forms["myForm"]["femail"].value;
    if (x == "") {
      alert("All fields must be filled out");
      return false;
    }
    
  }
