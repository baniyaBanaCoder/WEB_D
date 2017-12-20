var body=document.querySelector('body');

setInterval(function(){
	if(body.style.background === "white")
		body.style.background="blue";
	else
		body.style.background="white";
},1000);