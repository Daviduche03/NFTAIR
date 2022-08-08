

let num1 = document.querySelector(".num1")
let num2 = document.querySelector(".num2")
let num3 = document.querySelector(".num3")

const counter = (number , start,end , duration)=>{
			 let startTime = null;
			 const step = (timestamp)=>{
			 				if(!startTime){
			 								startTime = timestamp
			 				}
			 				
			 				let progress = Math.min((timestamp - startTime) / duration , 1)
			 				number.innerHTML = Math.floor(progress * (end - start) + start) + "k+"
			 				
			 				
			 				if(progress <1){
			 								window.requestAnimationFrame(step)
			 				}
			 }
			 window.requestAnimationFrame(step)
}


counter(num1 , 0 , 100 , 5000)
counter(num2 , 0 , 32 , 2000)
counter(num3 , 0 , 50 , 3000)


let menu = document.querySelector("#ham")
let nav = document.querySelector(".menu")

menu.addEventListener("click", function () {
				nav.classList.toggle("active")
});

window.onscroll = () => {
				nav.classList.remove("active")
}
