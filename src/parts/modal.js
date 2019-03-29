function modal() {

//Modal 

let buttonEngeneer = document.querySelector('.popup_engineer_btn'),
	  
	popupEngineer = document.querySelector('.popup_engineer'),
	 callBack = document.querySelectorAll('.phone_link'),
	 glazingPriceBtn = document.querySelectorAll('.glazing_price_btn'),
	 popupCalc = document.querySelector('.popup_calc'),
	 popupCalcClose = document.querySelector('.popup_calc_close'),
	 balconIcons = document.querySelector('.balcon_icons'),
	 bigImg = document.querySelectorAll('.big_img img');
     popupModal = document.querySelector('.popup');

buttonEngeneer.addEventListener('click', () => {
	
popupEngineer.style.display = 'block';		
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


callBack.forEach(element => {
element.addEventListener('click', () => {

	popupModal.style.display = 'block';

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

// bigImg 

function showImg (img) { 
	for (let i = 0; i < bigImg.length; i++) {
	 if (bigImg[i].id == img) { 
		bigImg[i].style.display = 'inline-block';
	 } else {
		bigImg[i].style.display = 'none';
	 }
	}
}



setTimeout( () => {
	popupModal.style.display = "block";
}, 60000);
	
}

module.exports = modal;