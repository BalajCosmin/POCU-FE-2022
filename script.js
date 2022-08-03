function onClickMenu(){
	document.getElementById("menu").classList.toggle("change");
	document.getElementById("nav").classList.toggle("change");
	
	document.getElementById("menu-bg").classList.toggle("change-bg");
}

const burgerMenu = document.querySelector(".nav");
burgerMenu.addEventListener("click", function () {
  burgerMenu.classList.toggle("active");
});