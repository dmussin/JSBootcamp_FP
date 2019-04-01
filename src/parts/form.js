

'use strict';


function form() {

  const popupCalcButton = document.querySelector('.popup_calc_button'),  
      popupCalcEnd = document.querySelector('.popup_calc_end'),
      popupCalcProfileButton = document.querySelector('.popup_calc_profile_button'), 
      popupCalcBtn = document.querySelectorAll('.popup_calc_btn'),
      userPhone = document.getElementsByName('user_phone'),
      popupCalcSelect = document.querySelector('select'), 
      popupCalc = document.querySelector('.popup_calc'),
      popupCalcInput = popupCalc.querySelectorAll('input'), 
      balconIcons = document.querySelectorAll('.balcon_icons a'), 
      bigImg = document.querySelectorAll('.big_img img'),  
      popupCalcProfile = document.querySelector('.popup_calc_profile'), 
      popupCalcLabel = popupCalcProfile.querySelectorAll('label');

  let windowSettings = {};

  popupCalcBtn.forEach(element => {
  element.addEventListener('click', () => {
  popupCalc.style.display = "block";
  windowSettings.type = balconIcons[0].getAttribute('class');
      });
    });

    
  popupCalc.addEventListener('click', (event) => {
  const target = event.target;
  if (target.classList.contains('popup_calc_close') ||
  target.parentNode.classList.contains('popup_calc_close') ||
  target.classList.contains('popup_calc')) {
  popupCalc.style.display = 'none';
        windowSettings = {};
      }
    });

  balconIcons.forEach(element => {
  element.addEventListener('click', (event) => {
  event.preventDefault();
  const typeWindowCalc = event.target.parentNode.getAttribute('class');
  bigImg.forEach(el => {
  const typeSelectedWindow = el.getAttribute('id');
  if (typeSelectedWindow == typeWindowCalc) {
  el.style.display = 'inline-block';
  windowSettings.type = typeWindowCalc;
          } else {
  el.style.display = 'none';
          }
        });
  console.log(windowSettings);
      });
    });
 

  // Input numbers 
  popupCalcInput.forEach(input => {
  input.addEventListener('keyup', function () {
  this.value = this.value.replace(/[^0-9]+/g, '');
  input.textContent = this.value;
      });

  });

   //Phone number only
  
   function onlyNumber(input) {
    input.onkeyup = function () {
      return (this.value = this.value.replace(/[^0-9,+]/g, ""));
    };
  }
  [...userPhone].forEach(elem => onlyNumber(elem));


  popupCalcButton.addEventListener('click', () => {
      if (popupCalcInput[0].value && popupCalcInput[1].value) {
        popupCalc.style.display = 'none';
        popupCalcProfile.style.display = 'block';
        windowSettings.width = popupCalcInput[0].value;
         windowSettings.heigh = popupCalcInput[1].value;
        windowSettings.glazingType = popupCalcSelect.options[0].value;
  } else {

  popupCalcInput.forEach(input => {
  if (!input.value) {
  input.focus();
          }
      });
    }
  });

  popupCalcSelect.addEventListener('change', function () {
  windowSettings.glazingType = this.options[this.selectedIndex].value;
    });

//checkbox
popupCalcLabel.forEach(label => {
label.addEventListener('change', event => {
  if (event.target.classList.contains('checkbox')) {
          [].slice.call(document.querySelectorAll('.checkbox')).forEach(c => c.checked = false);
  event.target.checked = true;
        }
  windowSettings.glazingProfile = label.querySelector('.checkbox-custom').getAttribute('id');
      });
    });

    
popupCalcProfileButton.addEventListener('click', () => {
  if (windowSettings.glazingProfile) {
    popupCalcProfile.style.display = 'none';
    popupCalcEnd.style.display = 'block';
    }
});


popupCalcProfile.addEventListener('click', (event) => {
  const target = event.target;
  if (target.classList.contains('popup_calc_profile_close') ||
  target.parentNode.classList.contains('popup_calc_profile_close') ||
  target.classList.contains('popup_calc_profile')) {
  popupCalcProfile.style.display = 'none';
        windowSettings = {};
      }

  });
 
  //Calc close
popupCalcEnd.addEventListener('click', (event) => {
const target = event.target;
  if (target.classList.contains('popup_calc_end_close') ||
  target.parentNode.classList.contains('popup_calc_end_close') ||
  target.classList.contains('popup_calc_end')) {
popupCalcEnd.style.display = 'none';
        windowSettings = {};
  }
});

// let formCalc = {
//   name: '',
//   tel: '',
//   balcony: 'Тип1',
//   width: '',
//   height: '',
//   type: 'Деревянное остекление',
//   checkbox: ''

// };

//form
const freeMasterForms = document.querySelectorAll('.main_form');
  freeMasterForms.forEach(form => {
  sendForm(form);
});

 
const popupForm = document.querySelector('.popup form');
sendForm(popupForm);

const popupEngineerForm = document.querySelector('.popup_engineer form');
sendForm(popupEngineerForm);
  
const popupCalcEndForms = document.querySelector('.popup_calc_end form');
sendForm(popupCalcEndForms, windowSettings);

  function sendForm(form, object = null) {
  const statusMessage = document.createElement('div'),
        formInputs = form.querySelectorAll('input');
  form.addEventListener('submit', event => {
event.preventDefault();
form.appendChild(statusMessage);


let formData = new FormData(form);
  postData(formData, object)
      .then(() => {
  statusMessage.innerHTML = 'Спасибо! Скоро мы с вами свяжемся';
  
})
      .catch(() => {
  statusMessage.innerHTML = 'Что-то пошло не так :(';
  })
  .then(clearInput2(formInputs))
   .then(clearInput1)
 .then(clearObject(object));
   });

}
function postData(data, object = null) {

return new Promise(function (resolve, reject) {

let request = new XMLHttpRequest();
  request.open('POST', 'server.php');
  request.setRequestHeader('Content-Type', 'aplication/json charset=utf-8');

let json = formDataToJSON(data, object);
  request.onreadystatechange = () => {
if (request.readyState == 4) {

  if (request.status == 200) {
       resolve()
  } else {
     reject()
  }
 }

};

request.send(json);

  });

}

function formDataToJSON(formData, object = null) {
const obj = {};
formData.forEach((value, key) => {
      obj[key] = value;
});

if (object) {
return JSON.stringify(Object.assign(object, obj));
} else {
return JSON.stringify(obj);
  }
}

function clearInput1() {
    popupCalcInput.forEach((item) => {
  item.value = '';
  });
};

function clearInput2(inputs) {
  for (let i = 0; i < inputs.length; i++) {
   inputs[i].value = '';
  }
}
    
function clearObject(object) {
    object = {};
  }
}
  module.exports = form;