function onClickMenu(){
	document.getElementById("menu").classList.toggle("change");
	document.getElementById("nav").classList.toggle("change");
	
	document.getElementById("menu-bg").classList.toggle("change-bg");
}
 
 /*
 const burgerMenu = document.querySelector(".nav");
burgerMenu.addEventListener("click", function () {
  burgerMenu.classList.toggle("active");
});
*/

var navbar = document.createElement("NAV");
var titleNav = document.createElement("div");	
navbar.appendChild(titleNav);

function readMore() {
	var dots = document.getElementById("dots");
	var moreText = document.getElementById("more");
	var btnText = document.getElementById("myBtn");
  
	if (dots.style.display === "none") {
	  dots.style.display = "block";
	  btnText.innerHTML = "Read more";
	  moreText.style.display = "none";
	} else {
	  dots.style.display = "none";
	  btnText.innerHTML = "Read less";
	  moreText.style.display = "block";
	}
  }