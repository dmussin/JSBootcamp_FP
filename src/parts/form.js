function form() {

    let message = {
              loading: 'Загрузка...',
              success: 'Спасибо! Скоро мы с вами свяжемся',
              failure: 'Что-то пошло не так :(' 
          };
  
    let form = document.querySelectorAll('form'),
        input = document.getElementsByTagName('input'),
        userName = document.getElementsByName('user_name'),
        userPhone = document.getElementsByName('user_phone'),
        statusMessage = document.createElement('div');
  
  statusMessage.classList.add('status');
  
  function sendForm(form) {
  let input = form.getElementsByTagName('input');
  form.addEventListener('submit', event => {
    event.preventDefault();
    form.appendChild(statusMessage);
    let formData = new FormData(form);
  
  
    function postData(data) {
      return new Promise(function (resolve, reject) {
        let request = new XMLHttpRequest();
  
        request.open("POST", "server.php");
  
        request.setRequestHeader(
          "Content-Type", "charset=utf-8"
        );
       
        request.onreadystatechange = function () {
          if (request.readyState < 4) {
            resolve();
          } else if (request.readyState === 4) {
            if (request.status == 200 && request.status < 3) {
              resolve();
            } else {
              reject();
            }
          }
        };
        request.send(data);
      });
    } // End postData
    function clearInputs() {
      for (let i = 0; i < input.length; i++) {
        input[i].value = '';
      }
    }
 clearInputs();

    postData(formData)
      .then(() => (statusMessage.innerHTML = message.loading))
      .then(() => (statusMessage.innerHTML = message.success))
      .catch(() => (statusMessage.innerHTML = message.failure))
      .then(clearInputs);
  });
  }

 
  for (let i = 0; i < form.length; i++) {
    sendForm(form[i]);
}
  
      //Phone number
  
    function onlyNumber(input) {
      input.onkeyup = function () {
        return (this.value = this.value.replace(/[^0-9,+]/g, ""));
      };
    }
    [...userPhone].forEach(elem => onlyNumber(elem));
     
    }
    module.exports = form;