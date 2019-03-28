function modal() {


	// const popup = document.querySelector(".popup"),
	// 	popup_engineer = document.querySelector(".popup_engineer"),
	// 	body = document.querySelector("body");


	// function showModal(modal) {
	// 	modal.style.display = "block";
	// 	document.body.style.overflow = "hidden";
	// }

	// function hideModal(modCloseBtn) {
	// 	[...overlay].forEach(element => {
	// 		element.style.display = "none";
	// 	});
	// 	document.body.style.overflow = "";

	// 	let statusMessage = document.querySelector('.status');
	// 	if (statusMessage != undefined) {
	// 		statusMessage.innerHTML = '';
	// 	}
	// }

	// body.addEventListener("click", e => {
	// 	let target = e.target;

	// 	// Modal

	// 	if (target && target.classList.contains("header_btn")) {
	// 		e.preventDefault();
	// 		showModal(popup_engineer);
	// 	}
	// 	if (target && target.classList.contains("phone_link")) {
	// 		e.preventDefault();
	// 		showModal(popup);
	// 	}
	// 
	// });

//Modal 

const buttonEngeneer = document.querySelector('.popup_engineer_btn'),
popupEngineer = document.querySelector('.popup_engineer');

buttonEngeneer.addEventListener('click', () => {
popupEngineer.style.display = "block";		
});

popupEngineer.addEventListener('click', (event) => {
const target = event.target;

if (target.classList.contains('popup_close') ||
target.parentNode.classList.contains('popup_close')||
target.classList.contains('popup_engineer')) 
{
	popupEngineer.style.display = 'none';
}
});

//Modal callback
const callBack = document.querySelectorAll('.phone_link'),
popupModal = document.querySelector('.popup');

callBack.forEach(element => {
element.addEventListener('click', () => {
	
	popupModal.style.display = "block";

});

});
popupModal.addEventListener('click', (event) => {
const target = event.target;

if (target.classList.contains('popup_close') || 
target.parentNode.classList.contains('popup_close') ||
target.classList.contains('popup')) 
{
	popupModal.style.display = 'none';
}
});

	
}

module.exports = modal;