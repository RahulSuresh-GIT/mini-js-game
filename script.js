var random = Math.ceil(Math.random()*10);


	function higher()
	{
     if (random>5)
     	document.getElementById('textfield').innerHTML="YOU WIN!";
	
	else
		document.getElementById('textfield').innerHTML="YOU LOSE!"     ;
 
      	document.getElementById('new').innerHTML=random;

}

function lower()
	{
     if (random<5)
     	document.getElementById('textfield').innerHTML= "YOU WIN!"     ;
	
	else
		   	document.getElementById('textfield').innerHTML = "YOU LOSE!"  ;  
		         	document.getElementById('new').innerHTML=random;


}
function replay()
{
	window.location.reload();

}
