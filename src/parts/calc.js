function calc() {

    const popupCalcBtn = document.querySelectorAll('.popup_calc_btn'), 
    popupCalcProfileButton = document.querySelector('.popup_calc_profile_button'), 
    popupCalcButton = document.querySelector('.popup_calc_button'), 
    popupCalc = document.querySelector('.popup_calc'), 
    bigImg = document.querySelectorAll('.big_img img'),  
    balconIcons = document.querySelectorAll('.balcon_icons a'),
    popupCalcProfile = document.querySelector('.popup_calc_profile'), 
    popupCalcEnd = document.querySelector('.popup_calc_end'), 
    popupCalcInput = popupCalc.querySelectorAll('input'),
    popupCalcSelect = document.querySelector('select'),
    formCalc = document.querySelectorAll('.form-control_calc'),
    popupCheck = popupCalcProfile.querySelectorAll('label');


let windowSet = {};

popupCalcBtn.forEach(element => {
    element.addEventListener('click', () => {
        popupCalc.style.display = "block";
        windowSet.type = balconIcons[0].getAttribute('class');
        console.log(windowSet);
    });
});

popupCalc.addEventListener('click', (event) => {
    const target = event.target;

    if (target.classList.contains('popup_calc_close') ||
        target.parentNode.classList.contains('popup_calc_close') ||
        target.classList.contains('popup_calc')) {
        popupCalc.style.display = 'none';
        windowSet = {};
    }
});

//First Win
balconIcons.forEach(element => {
    element.addEventListener('click', (event) => {
        event.preventDefault();
        const typeWindowCalc = event.target.parentNode.getAttribute('class');

        bigImg.forEach(el => {
            const typeSelectedWindow = el.getAttribute('id');
            if (typeSelectedWindow == typeWindowCalc) {
                el.style.display = 'inline-block';
                windowSet.type = typeWindowCalc;
            } else {
                el.style.display = 'none';
            }
        });
        console.log(windowSet);
    });
});

//Input
// popupCalcInput.forEach(input => {
//     input.addEventListener('keyup', function () {
//         this.value = this.value.replace(/[^0-9]+/g, '');
//         input.textContent = this.value;
//     });
// });

formCalc.forEach((item) => {
    item.addEventListener('input', () => {
      item.value = item.value.replace(/[^0-9]+/g, '');
    })
    popupCalcButton.addEventListener('click', () => {
      if (formCalc[0].value == '' || formCalc[0].value == 0 || formCalc[1].value == '' || formCalc[1].value == 0) {

      } else {
        popupCalc.style.display = 'none';
        popupCalcProfile.style.display = 'flex';
        formCalc[0].value = '';
        formCalc[1].value = '';
      }
    });
});

//Second Win
popupCalcButton.addEventListener('click', () => {
    if (popupCalcInput[0].value && popupCalcInput[1].value) {
        popupCalc.style.display = 'none';
        popupCalcProfile.style.display = 'block';
        windowSet.width = popupCalcInput[0].value;
        windowSet.heigh = popupCalcInput[1].value;
        windowSet.glazingType = popupCalcSelect.options[0].value;
    } else {
        popupCalcInput.forEach(input => {
            if (!input.value) {
                input.focus();
            }
        });
    }
    console.log(windowSet);
});


popupCalcSelect.addEventListener('change', function () {
    windowSet.glazingType = this.options[this.selectedIndex].value;
    console.log(windowSet);
});

//Checkbox
popupCheck.forEach(label => {
    label.addEventListener('change', event => {
        if (event.target.classList.contains('checkbox')) {
            [].slice.call(document.querySelectorAll('.checkbox')).forEach(c => c.checked = false);
            event.target.checked = true;
        }
        windowSet.glazingProfile = label.querySelector('.checkbox-custom').getAttribute('id');
    });
});


popupCalcProfileButton.addEventListener('click', () => {
    if (windowSet.glazingProfile) {
        popupCalcProfile.style.display = 'none';
        popupCalcEnd.style.display = 'block';
    }
});

//Popup close
popupCalcProfile.addEventListener('click', (event) => {
    const target = event.target;

    if (target.classList.contains('popup_calc_profile_close') ||
        target.parentNode.classList.contains('popup_calc_profile_close') ||
        target.classList.contains('popup_calc_profile')) {
        popupCalcProfile.style.display = 'none';
        windowSet = {};
        console.log(windowSet);
    }
});

// Popup Calc
popupCalcEnd.addEventListener('click', (event) => {
    const target = event.target;

    if (target.classList.contains('popup_calc_end_close') ||
        target.parentNode.classList.contains('popup_calc_end_close') ||
        target.classList.contains('popup_calc_end')) {
        popupCalcEnd.style.display = 'none';
        windowSet = {};
        console.log(windowSet);
    }
});


}
module.exports = calc;