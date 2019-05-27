// HAMBURGER MENU

function myOtherFunction(x) {
  x.classList.toggle("change");
}

document.getElementsByClassName('hamburger')[0].onclick = function showMenu() {
	var menu = document.getElementById('menu');
	if(menu.className == "active"){
		menu.className = "inactive";
	} else {
		menu.className = "active";
	}
	
	myOtherFunction(this); 
}
