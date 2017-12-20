var one=document.querySelector(".one");
var two=document.querySelector(".two");
var onescore=0;
var twoscore=0;
var gameover = false;
var num=document.querySelector(".input1");
var winscore=5;
one.addEventListener("click",function(){
	if(!gameover && onescore<winscore)
	{
		onescore=onescore+1;
		if(onescore==winscore)
		{
			document.querySelector(".player1").style.color = "green";
			document.querySelector(".player2").style.color = "red";
			gameover=true;
		}	
			document.querySelector(".player1").textContent = onescore;
	}
});
two.addEventListener("click",function(){
if(!gameover && twoscore<winscore)	
{	twoscore=twoscore+1;
	if(twoscore==winscore)
	{
		document.querySelector(".player1").style.color = "red";
		document.querySelector(".player2").style.color = "green";
		gameover = true;
	}
	document.querySelector(".player2").textContent = twoscore;
}
});
var tag= document.querySelector(".res");
tag.addEventListener("click",function(){
	onescore=0;
	twoscore=0;
	document.querySelector(".player1").style.color = "black";
	document.querySelector(".player2").style.color = "black";
	document.querySelector(".player1").textContent = onescore;
	document.querySelector(".player2").textContent = twoscore;
	gameover = false;

});
 function reset(){
 	onescore=0;
	twoscore=0;
	document.querySelector(".player1").style.color = "black";
	document.querySelector(".player2").style.color = "black";
	document.querySelector(".player1").textContent = onescore;
	document.querySelector(".player2").textContent = twoscore;
	gameover = false;
 }
num.addEventListener("change",function(){
	document.querySelector(".t").textContent = num.value;
	winscore= Number(num.value);
	reset();
});