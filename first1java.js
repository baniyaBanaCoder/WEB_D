var tag=document.querySelectorAll("li");

for(var i=0;i<tag.length;i++)
{
	tag[i].addEventListener("mouseover",function(){
		this.style.color = "green";
		
	});
	tag[i].addEventListener("mouseout",function(){
		this.style.color = "black";
	});
}