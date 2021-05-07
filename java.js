function required() {
  var x = document.forms["form1"]["fname"].value&& document.forms["form1"]["lname"].value
  &&document.forms["form1"]["email"].value&&document.forms["form1"]["username"].value&& 
  document.forms["form1"]["pwd"].value
  if (x == "" || x == null) {
    alert("All required fields must be filled in");
    return false;
  }
}
function validatetextbox()
    { if ( $("#textbox1").val()== "") {
          $("#textbox1").css("border", "1px solid red");}
		  else{
		  $("#textbox1").css("border", "1px solid black");}
		  if ( $("#textbox2").val()== "") {
		            $("#textbox2").css("border", "1px solid red");}
					 else{
		  $("#textbox2").css("border", "1px solid black");}
					if ( $("#textbox3").val()== "") {
							            $("#textbox3").css("border", "1px solid red");}
										 else{
		  $("#textbox3").css("border", "1px solid black");}
										if ( $("#textbox4").val()== "") {
										$("#textbox4").css("border", "1px solid red");}
										 else{
		  $("#textbox4").css("border", "1px solid black");}
										if ( $("#textbox5").val()== "") {
							            $("#textbox5").css("border", "1px solid red");}
										 else{
		  $("#textbox5").css("border", "1px solid black");}
     if(txtval!="")
     {
         $("#textbox1").css("border", "1px solid black");
		  $("#textbox2").css("border", "1px solid black");
		  		            $("#textbox3").css("border", "1px solid black");
							$("#textbox4").css("border", "1px solid black");
		  $("#textbox5").css("border", "1px solid black");
     }
    }
	function saved(){
		
	var s = document.forms["form1"]["email"].value;
	if(s!==""){
		s=s.split("@")[0];
	alert("The application of " + s +" is saved!");
	}
	else{
alert("Error : Email not entered!")
}
}