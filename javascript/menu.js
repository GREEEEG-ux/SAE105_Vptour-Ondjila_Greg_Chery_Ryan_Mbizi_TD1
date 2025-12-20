var sidenav = document.getElementById("mySidenav");
var openbtn = document.getElementById("menu");
var closebtn = document.getElementById("close");

openbtn.addEventListener("click", function () {
	sidenav.classList.add("active");
});

closebtn.addEventListener("click", function () {
	sidenav.classList.remove("active");
});
