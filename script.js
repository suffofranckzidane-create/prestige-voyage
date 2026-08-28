document.addEventListener('DOMContentLoaded', () => {
	const header = document.querySelector('.header');
	const menuButton = document.querySelector('.hamburgur');
	const navLinks = document.querySelector('.nav-links');
	const logo = document.querySelector('.logo');
	const sectionByName = {
		'accueil': '.hero',
		'à propos': '#about',
		'destinations': '#destination',
		'logement': '#logement',
		'logements': '#logement',
		'contact': '#contact'
	};

	document.documentElement.style.scrollBehavior = 'smooth';
	menuButton.classList.add('hamburger');

	const updateHeader = () => {
		const scrolled = window.scrollY > 40;
		header.style.background = scrolled
			? 'rgba(255, 255, 255, 0.85)'
			: 'rgba(255, 255, 255, 0.95)';
		header.style.backdropFilter = scrolled ? 'blur(8px)' : 'none';
	};

	window.addEventListener('scroll', updateHeader);
	updateHeader();

	menuButton.addEventListener('click', () => {
		menuButton.classList.toggle('active');
		navLinks.classList.toggle('active');
	});

	const closeMenu = () => {
		menuButton.classList.remove('active');
		navLinks.classList.remove('active');
	};

	const links = document.querySelectorAll('.nav-links a, .footer a');
	links.forEach((link) => {
		link.addEventListener('click', (event) => {
			const targetId = link.getAttribute('href');
			const name = link.textContent.trim().toLowerCase();
			const targetSelector = targetId !== '#' ? targetId : sectionByName[name];
			const target = targetSelector ? document.querySelector(targetSelector) : null;
			if (target) {
				event.preventDefault();
				target.scrollIntoView({ behavior: 'smooth' });
			}
			closeMenu();
		});
	});

	logo.addEventListener('click', () => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	});
});
