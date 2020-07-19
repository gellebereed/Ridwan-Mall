const detail = document.querySelectorAll('.detail-box');

detail.forEach((element) => {
	element.addEventListener('mouseover', () => {
		element.classList.remove('hide');
		element.parentNode.style.transform = 'scale(1.06)';
	});
	element.addEventListener('mouseout', () => {
		element.classList.add('hide');
		element.parentNode.style.transform = 'scale(1)';
	});
});
