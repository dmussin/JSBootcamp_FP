function modal() {

//Мodal

let popupEngineer = document.querySelector('.popup_engineer'),
	headerBtn = document.querySelector('.header_btn'),
    popupClose = document.querySelectorAll('.popup_close');

    headerBtn.addEventListener('click', function(){
        popupEngineer.style.display = 'flex';
    });

    popupEngineer.addEventListener('click', function(event){
        if (event.target == modalEngineer) {
            popupEngineer.style.display = 'none';
        }
	});
	
	popupClose[1].addEventListener('click', function(){
        popupEngineer.style.display = 'none';
    });

    //Modal callback
    let popupModal = document.querySelector('.popup'),
	    callBack = document.querySelectorAll('.phone_link')[1],
		contactBtn = document.querySelector('.contact_us_wrap');

    contactBtn.addEventListener('click', function(event){
        event.preventDefault();
        popupModal.style.display = 'flex';
    });

    callBack.addEventListener('click', function(event){
        event.preventDefault();
        popupModal.style.display = 'flex';
    });

    popupClose[0].addEventListener('click', function(){
        popupModal.style.display = 'none';
    });

    popupModal.addEventListener('click', function(event){
        event.preventDefault();
        if (event.target == popupModal) {
            popupModal.style.display = 'none';
        }
    });

setTimeout( () => {
	popupModal.style.display = "block";
}, 60000);


// bigImg 

// function showImg (img) { 
// 	for (let i = 0; i < bigImg.length; i++) {
// 	 if (bigImg[i].id == img) { 
// 		bigImg[i].style.display = 'inline-block';
// 	 } else {
// 		bigImg[i].style.display = 'none';
// 	 }
// 	}
// }
	
}

module.exports = modal;