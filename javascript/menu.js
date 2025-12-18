var sidenav = document.getElementById("mySidenav");
var openbtn = document.getElementById("menu");
var closebtn = document.getElementById("closebtn");

openbtn.onclick = openNav;
closebtn.onclick = closeNav;

function openNav() {
	sidenav.classList.add("active");
}
function closeNav() {
	sidenav.classList.remove("active");
}
