function formValidation() {
    var x = document.forms["Name"].value;
     var regex=/^[a-zA-Z]+$/;
	 if (!regex.test(x))
		{
			alert("Incorrect Name");
			return false;
		}
	
	var l = document.forms["Address"].value;
     var regex=/^[a-zA-Z]+$/;
	 if (!regex.test(l))
		{
			alert("Incorrect Address");
			return false;
		}
	
	
	
	var m = document.forms["postal code"].value;
	 var n = /^[a-zA-Z][0-9][a-zA-Z](-| |)[0-9][a-zA-Z][0-9]/;
     if(!n.test(m))
		{
			alert("Incorrect Postal Code");
			return false;
		}
		var p = document.forms["City"].value;
     var q =/^[a-zA-Z]+$/;
	 if (!q.test(p))
		{
			alert("Incorrect city");
			return false;
		}
		var g = document.forms["Province"].value;
	if (g == "null"){
			  alert("Select province");
			  return false;
		  }

	var e = document.forms["Email"].value;
	var re = /^(([^<>()[]\.,;:s@"]+(.[^<>()[]\.,;:s@"]+)*)|(".+"))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$/igm;
    if (!re.test(e))
    {
    alert("Invalid email address.");
    return false;
    }
	     		  
	var g = document.forms["Telephone"].value;
	var h =/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
	if (!h.test(g)){
			  alert("Invalid telephone number");
			  return false;
		  }
    }
	
	
    }