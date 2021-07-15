const colors=["green","red","Yellow", "Salmon","blue","Purple","black"];
const btn=document.getElementById("btn");
const color=document.querySelector(".color");

btn.addEventListener("click",function()
{
	const randomNumber=getRandom();
	document.body.style.backgroundColor=colors[randomNumber];
	console.log(randomNumber);
	color.textContent=colors[randomNumber];
});

function getRandom()
{
	return Math.floor(Math.random()*6);
}