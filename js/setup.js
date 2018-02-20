'use strict';

(function () {
  var myWizardCoatColors = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  var myWizardsEyesColors = ['black', 'red', 'blue', 'yellow', 'green'];
  var fireballCollors = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
  var ESC_KEYCODE = 27;
  var ENTER_KEYCODE = 13;
  var setupOpen = document.querySelector('.setup-open');
  var setupClose = document.querySelector('.setup-close');
  var setup = document.querySelector('.setup');
  var inputName = document.querySelector('input.setup-user-name');
  var setupSubmitButton = document.querySelector('button.setup-submit');
  var setupWizardForm = document.querySelector('form.setup-wizard-form');
  var myWizardCoatColor = document.querySelector('.setup-wizard .wizard-coat');
  var myWizardEyesColor = document.querySelector('.setup-wizard .wizard-eyes');
  var fireballColor = document.querySelector('.setup-fireball-wrap');
  var setupSimilarList = document.querySelector('.setup-similar-list');

  var fragment = document.createDocumentFragment();
  for (var j = 0; j < window.wizard.list.length; j++) {
    fragment.appendChild(window.wizard.render(window.wizard.list[j]));
  }
  setupSimilarList.appendChild(fragment);

  window.util.makeBlockVisible('.setup-similar');

  var openPopup = function () {
    setup.classList.remove('hidden');
    document.addEventListener('keydown', popupEscPressHendler);
  };

  var closePopup = function () {
    setup.classList.add('hidden');
    document.removeEventListener('keydown', popupEscPressHendler);
  };

  var popupEscPressHendler = function (evt) {
    if (evt.keyCode === ESC_KEYCODE) {
      if (evt.target === inputName) {
        evt.preventDefault();
      } else {
        closePopup();
      }
    }
  };

  setupOpen.addEventListener('click', function () {
    openPopup();
  });

  setupOpen.addEventListener('keydown', function (evt) {
    if (evt.keyCode === ENTER_KEYCODE) {
      openPopup();
    }
  });

  setupClose.addEventListener('click', function () {
    closePopup();
  });

  setupClose.addEventListener('keydown', function (evt) {
    if (evt.keyCode === ENTER_KEYCODE) {
      closePopup();
    }
  });

  setupSubmitButton.addEventListener('click', function () {
    setupWizardForm.submit();
  });

  myWizardCoatColor.addEventListener('click', function () {
    myWizardCoatColor.style.fill = myWizardCoatColors[window.util.generateRandomNumber(0, myWizardCoatColors.length)];
  });

  myWizardEyesColor.addEventListener('click', function () {
    myWizardEyesColor.style.fill = myWizardsEyesColors[window.util.generateRandomNumber(0, myWizardsEyesColors.length)];
  });

  fireballColor.addEventListener('click', function () {
    fireballColor.style = 'background: ' + fireballCollors[window.util.generateRandomNumber(0, fireballCollors.length)];
  });

})();


