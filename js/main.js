// Function to toggle menu

function toggleMenu() {
	const showMenu = document.querySelector('.header__nav');
	if (showMenu.style.display !== 'block') {
		showMenu.style.display = 'block';
	} else {
		showMenu.style.display = 'none';
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
