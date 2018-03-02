'use strict';

(function () {
  var myWizardCoatColors = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  var myWizardsEyesColors = ['black', 'red', 'blue', 'yellow', 'green'];
  var fireballCollors = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
  var ESC_KEYCODE = 27;
  var ENTER_KEYCODE = 13;
  var setupInitialPositionX = 50 + '%';
  var setupInitialPositionY = 80 + 'px';
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
  var setupUserPic = document.querySelector('.upload');

  var fragment = document.createDocumentFragment();
  for (var j = 0; j < window.wizard.list.length; j++) {
    fragment.appendChild(window.wizard.render(window.wizard.list[j]));
  }
  setupSimilarList.appendChild(fragment);

  window.util.makeBlockVisible('.setup-similar');

  var setupMouseDownHandler = function (evt) {
    evt.preventDefault();

    var startCoords = {
      x: evt.clientX,
      y: evt.clientY
    };

    var onMouseMove = function (moveEvt) {
      moveEvt.preventDefault();

      var shift = {
        x: startCoords.x - moveEvt.clientX,
        y: startCoords.y - moveEvt.clientY
      };

      startCoords = {
        x: moveEvt.clientX,
        y: moveEvt.clientY
      };

      setup.style.top = (setup.offsetTop - shift.y) + 'px';
      setup.style.left = (setup.offsetLeft - shift.x) + 'px';
    };

    var onMouseUp = function (upEvt) {
      upEvt.preventDefault();

      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  };

  var openPopup = function () {
    setup.style.top = setupInitialPositionY;
    setup.style.left = setupInitialPositionX;
    setup.classList.remove('hidden');
    document.addEventListener('keydown', popupEscPressHendler);
    setupUserPic.addEventListener('mousedown', setupMouseDownHandler);
    makeArtifactsDraggable();
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

  var makeArtifactsDraggable = function () {
    var things = document.querySelectorAll('.setup-artifacts-cell img');
    for (var i = 0; i < things.length; i++) {
      things[i].draggable = true;
    }
  };
  var artifactsShop = document.querySelector('.setup-artifacts-shop');
  var draggedItem = null;

  artifactsShop.addEventListener('dragstart', function (evt) {
    if (evt.target.tagName.toLowerCase() === 'img') {
      draggedItem = evt.target;
      setupArtifactsField.style.outline = '2px dashed red';
      evt.dataTransfer.setData('text/plain', evt.target.alt);

    }
  });

  var setupArtifactsField = document.querySelector('.setup-artifacts');

  setupArtifactsField.addEventListener('dragover', function (evt) {
    evt.preventDefault();
    return false;
  });

  setupArtifactsField.addEventListener('drop', function (evt) {
    evt.target.style.backgroundColor = '';
    setupArtifactsField.style.outline = '';
    if (evt.target.childNodes.length < 1 && !(evt.target.parentNode.childNodes.length === 1)) {
      var temp = draggedItem.cloneNode(true);
      evt.target.appendChild(temp);
      evt.preventDefault();
    }
  });

  setupArtifactsField.addEventListener('dragenter', function (evt) {
    evt.preventDefault();
    if (evt.target.childNodes.length < 1 && !(evt.target.parentNode.childNodes.length === 1)) {
      evt.target.style.backgroundColor = 'yellow';
    }
  });

  setupArtifactsField.addEventListener('dragleave', function (evt) {
    evt.preventDefault();
    evt.target.style.backgroundColor = '';
  });

  artifactsShop.addEventListener('dragend', function (evt) {
    evt.preventDefault();
    setupArtifactsField.style.outline = '';
  });


})();


