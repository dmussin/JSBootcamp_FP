function modal() {

// //Мodal

// let popupEngineer = document.querySelector('.popup_engineer'),
// 	headerBtn = document.querySelector('.header_btn'),
//     popupClose = document.querySelectorAll('.popup_close');

//     headerBtn.addEventListener('click', function(){
//         popupEngineer.style.display = 'flex';
//     });

//     popupEngineer.addEventListener('click', function(event){
//         if (event.target == popupEngineer) {
//             popupEngineer.style.display = 'none';
//         }
// 	});
	
// 	popupClose[1].addEventListener('click', function(){
//         popupEngineer.style.display = 'none';
//     });

//     //Modal callback
//     let popupModal = document.querySelector('.popup'),
// 	    callBack = document.querySelectorAll('.phone_link')[1],
// 		contactBtn = document.querySelector('.contact_us_wrap');

//     contactBtn.addEventListener('click', function(event){
//         event.preventDefault();
//         popupModal.style.display = 'flex';
//     });

//     callBack.addEventListener('click', function(event){
//         event.preventDefault();
//         popupModal.style.display = 'flex';
//     });

//     popupClose[0].addEventListener('click', function(){
//         popupModal.style.display = 'none';
//     });

//     popupModal.addEventListener('click', function(event){
//         event.preventDefault();
//         if (event.target == popupModal) {
//             popupModal.style.display = 'none';
//         }
//     });


	/*               Модальное окно "Вызова инженера"               */
	//////////////////////////////////////////////////////////////////
	const engineerButton = document.querySelector('.popup_engineer_btn'), // Кнопка вызова
		popupEngineer = document.querySelector('.popup_engineer'); // Модальное окно

	/* Показ окна */
	engineerButton.addEventListener('click', () => {
		popupEngineer.style.display = "block";
	});

	/* Закрытие окна */
	popupEngineer.addEventListener('click', (event) => {
		const target = event.target;

		if (target.classList.contains('popup_close') ||
			target.parentNode.classList.contains('popup_close') ||
			target.classList.contains('popup_engineer')) {
			popupEngineer.style.display = 'none';
		}
	});

	//////////////////////////////////////////////////////////////////
	/*               Модальное окно "Обратного звонка"              */
	//////////////////////////////////////////////////////////////////
	const phoneLink = document.querySelectorAll('.phone_link'), // Кнопка вызова
		popupModal = document.querySelector('.popup'); // Модальное окно

	/* Показ окна */
	phoneLink.forEach(element => {
		element.addEventListener('click', () => {
			event.preventDefault();
			popupModal.style.display = "block";
		});
	});

	/* Закрытие окна */
	popupModal.addEventListener('click', (event) => {
		const target = event.target;

		if (target.classList.contains('popup_close') ||
			target.parentNode.classList.contains('popup_close') ||
			target.classList.contains('popup')) {
			popupModal.style.display = 'none';
		}
	});


setTimeout( () => {
	popupModal.style.display = "block";
}, 60000);


// bigImg 

const works = document.querySelectorAll('.works .row div');

	works.forEach((work) => {
		work.addEventListener('click', (event) => {
			event.preventDefault();

			const popupImage = document.createElement('div');
			const curentImage = document.createElement('img');
			const curentImageHref = work.querySelector('a').getAttribute('href');

			popupImage.classList.add('popup');
			curentImage.setAttribute('src', curentImageHref);
			popupImage.appendChild(curentImage);
			document.body.appendChild(popupImage);
			popupImage.style.display = 'flex';
			popupImage.style.alignItems = 'center';
			popupImage.style.justifyContent = 'center';

			popupImage.addEventListener('click', (event) => {
				if (event.target.classList.contains('popup')) {
					popupImage.style.display = 'none';
					document.body.removeChild(popupImage);
				}
			});
		});
	});
	
}

module.exports = modal;