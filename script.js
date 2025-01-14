var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var randomBtn = document.getElementById("randomBtn");
var input1= document.getElementById("input1");
var input2= document.getElementById("input2");

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}

function randomSetGradient(){
	body.style.background = 
	"linear-gradient(to right, rgb(" 
	 + Math.random()*300+100 + ", "
	+Math.random()*300+100 + ", "
	+ Math.random()*300+100+", "
	+Math.random()

	+ "), rgb(" 
	+ Math.random()*300+100 + ", "
	+Math.random()*300+100 + ", "
	+ Math.random()*300+100+", "
	+Math.random()
	+ ")";
    
	css.textContent = body.style.background + ";";


}
color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

randomBtn.addEventListener("click", randomSetGradient);

// input1.value = color2.value;
// console.log();


const obj={
	player : "bobby",
	experience : 100,
	wizardLevel : false
}

// const player= obj.player;
// const experience = obj.experience;
// let wizardLevel = obj.wizardLevel;	

const {player,experience} = obj;
let {wizardLevel} = obj;




