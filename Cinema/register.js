// JavaScript Document

// JavaScript Document

function validate()
{
	if( document.Registration.username.value == "" )
   {
     alert( "Please provide your Username!" );
     document.Registration.username.focus() ;
     return false;
   }
	
	if( document.Registration.password.value == "" )
   {
     alert( "Please provide your Password!" );
     document.Registration.password.focus() ;
     return false;
   }
	
	
	if( document.Registration.firstname.value == "" )
   {
     alert( "Please provide your First Name!" );
     document.Registration.firstname.focus() ;
     return false;
   }

	
	if( document.Registration.lastname.value == "" )
   {
     alert( "Please provide your Last Name!" );
     document.Registration.lastname.focus() ;
     return false;
   }
	
	
	
	if( ( Registration.gender[0].checked == false ) && ( Registration.gender[1].checked == false ) )
  
	{
		alert ( "Please choose your Gender: Male or Female" );
		return false;
	}
	
	
	
	if( document.Registration.email.value == "" )
   {
     alert( "Please provide your E-mail!" );
     document.Registration.email.focus() ;
     return false;
   }
	
	if( document.Registration.telephone.value == "" )
   {
     alert( "Please provide your Telephone!" );
     document.Registration.telephone.focus() ;
     return false;
   }
	
	
	
	if ((document.Registration.username.value != "") &&(document.Registration.password.value != "") &&(document.Registration.firstname.value != "") && (document.Registration.lastname.value != "") && ( Registration.gender[0].checked == true ) && ( Registration.gender[1].checked != true ) && (document.Registration.email.value != "") && (document.Registration.telephone.value != "")  ){
		alert(" You has been registered !")
		document.Registration();
		return false;
	}

	
}


function HelloFun() 
			{ 
				alert('You already have an Account ! ');
				
				alert(window.document.getElementById('first').style.fontFamily ); 
			}

function book1(){
	
	alert('The second - thoroughly updated and revised - edition of a bestselling textbook that surveys the grand narrative of the Bible, demonstrating how the biblical story forms the foundation of a Christian worldview. The Drama of Scripture provides an engaging overview of the storyline and theology of the Bible. The authors work their way through the Bible as a drama with six acts - creation, sin, Israel, Jesus, mission and new creation. Their study provides an introduction to the Bible and a commentary on important passages, while helping the reader relate their story to the Bible story at each point. ');
}

function book2(){
	
	alert('For fans of Notes on a Scandal and The Woman Upstairs, a gripping and voyeuristic novel of psychological suspense about a woman who becomes the housekeeper for a London power couple, only to discover a world of secrets and lies far more disturbing than she could ever have imagined.');
}

function book3(){
	
	alert('A must-read for fans of Lee Child, John Grisham and Michael Connelly. Combining gripping action and ingenious plotting, THE PLEA is the brilliant new legal thriller from the author of THE DEFENCE. ');
}

function book4(){
	
	alert('');
}

function book5(){
	
	alert('');
}

function book6(){
	
	alert('');
}

//******************************************************


function register()
{
	document.getElementById('id01').style.display='block';
}


var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}









//	checkbox	*************************************************************


function checkbox()
  {
   	 var check = document.forms[0];
	 var txt = "";
	 var i;
    
	  for (i = 0; i < check.length; i++) {
		  
        if (check[i].checked) {
            txt = txt + check[i].value + " ";
        }
    }
   
    
        document.getElementById("order").value = "BOOK SELECTED : " + txt;
  }







//	category	*************************************************************


function category(){
	
	var x = document.getElementById("cat").value;
	
	
	
}
 


function showTab( ) {
  var select = $( '#dropdown' );
  $( 'div' ).not( select.val()).hide();
  $( name ).show();
}



