function modal() {

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