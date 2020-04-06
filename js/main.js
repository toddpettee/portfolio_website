// Function to toggle menu

function toggleMenu() {
	const showMenu = document.querySelector('.header__nav');
	if (showMenu.style.display !== 'block') {
		showMenu.style.display = 'block';
	} else {
		showMenu.style.display = 'none';
	}
}

function hideBar() {
	const hideBar = document.querySelector('.header__nav-icon');
	if (hideBar.classList.contains('close')) {
		hideBar.classList.remove('close');
		hideBar.classList.add('open');
	} else {
		hideBar.classList.remove('open');
		hideBar.classList.add('close');
	}
}

function hideMenu() {
	const hideMenu = document.querySelector('.header__nav');
	if (hideMenu.style.display === 'block') {
		hideMenu.style.display = 'none';
	} else {
		hideMenu.style.display = 'block';
	}
}

// https://codepen.io/AJamesL/pen/MXmvZp?page=5
// var menuToggle = document.querySelector("#menu-toggle");
// var activeElements = document.querySelectorAll(".active-element");
// var toggledMenu = menuToggle.addEventListener("click", function(){
//      // forEach is not supported in IE11
//   // activeElements.forEach(function(e){
//   //     e.classList.toggle("active");
//   // });
//      for(var activated = 0; activated < activeElements.length; activated++){
//           activeElements[activated].classList.toggle("active");
//      }
// })

// https://zellwk.com/blog/css-transitions/
// const button = document.querySelector('.header__nav')
// button.addEventListener('click', _ => header__nav-icon.classList.toggle('open'))