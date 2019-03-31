function form() {

    let message = {
              loading: 'Загрузка...',
              success: 'Спасибо! Скоро мы с вами свяжемся',
              failure: 'Что-то пошло не так :(' 
          };
  
    statusMessage = document.createElement('div');

    let form = document.querySelectorAll('form'),
        input = document.querySelectorAll('input'),
        userName = document.getElementsByName('user_name'),
        userPhone = document.getElementsByName('user_phone'),
        inputTel = document.getElementsByName('user_phone'),
        formCalc = document.querySelectorAll('.form-control_calc'),
        checkbox = document.querySelectorAll('.checkbox'),
        popupCalcEnd = document.querySelector('.popup_calc_end'),
        popupEngineer = document.querySelector('.popup_engineer'),
        popup = document.querySelector('.popup');


  
     
  
      let typeImg = document.querySelectorAll('.type_img');
      
      typeImg.forEach((item) => {
        item.addEventListener('click', () => {
          let attribute = item.getAttribute("alt");
          formCalc.balcony = attribute;
        })
      });
      

      formCalc.forEach((item) => {
        item.addEventListener('change', () => {
          if (item.getAttribute("id") == 'width') {
            formCalc.width = item.value;
          } else {
            formCalc.height = item.value;
          }
        });
      });
  
      let glazingType = document.getElementById('view_type');
      glazingType.addEventListener('change', () => {
        formCalc.type = glazingType.options[glazingType.selectedIndex].value;
      })
  
      checkbox.forEach((item) => {
        item.addEventListener('click', () => {
          if (item.getAttribute("id") == 'checkbox-1') {
            formCalc.checkbox = 'Холодное';
          } else {
            formCalc.checkbox = 'Теплое';
          }
        });
      });
  
      let modalCalcInput = document.querySelectorAll('.modal-calc');
      modalCalcInput.forEach((item) => {
        item.addEventListener('change', () => {
          if (item.getAttribute("id") == 'modal-name') {
            formCalc.name = item.value;
          } else {
            formCalc.tel = item.value;
          }
        })
      });
  
      let formCalculator = {
        height: '',
        width: '',
        name: '',
        tel: '',
        balcony: 'Тип1',
        type: 'Деревянное остекление',
        checkbox: ''
  
      };
  
  
    form.forEach(function sendForm(item) {

      item.addEventListener('submit', (e) => {
        e.preventDefault();
        item.appendChild(statusMessage);
        let jSonString = JSON.stringify(formCalculator);
        let formData = new FormData(item);

        function postData(data) {
          return new Promise((resolve, reject) => {
            let request = new XMLHttpRequest();
            request.open('POST', 'server.php');
            request.setRequestHeader('Content-Type', 'application/json; charset=utf-8');

            request.onreadystatechange = () => {
              if (request.readyState < 4) {
                resolve()
              } else if (request.readyState === 4) {
                if (request.status == 200) {
                  resolve()
                } else {
                  reject()
                }
              }
            }
            if (item.classList.contains('form-end')) {
              request.send(jSonString);
            } else {
              request.send(data);
            }

          })
        } // End postData


function clearInput() {
  input.forEach((item) => {
    item.value = '';
  });
};

postData(formData)
        .then(() => {
   statusMessage.textContent = message.loading;
})
        .then(() => {
    statusMessage.innerHTML = message.success;
    setTimeout(func, 3000);
})
        .catch(() => {
    statusMessage.innerHTML = message.failure;
      })
        .then(clearInput)
  });

});

  function func() {
  statusMessage.innerHTML = "";
  popupCalcEnd.style.display = 'none';
  popupEngineer.style.display = 'none';
  popup.style.display = 'none';
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