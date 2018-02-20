'use strict';

(function () {
  var wizardsNames = ['Иван', 'Хуан', 'Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
  var wizardsLastNames = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
  var wizardsCoatColors = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  var wizardsEyesColors = ['black', 'red', 'blue', 'yellow', 'green'];
  var WIZARD_COUNT = 4;

  var generateWizard = function () {
    var wizard = {
      name: window.util.generateRandomValue(wizardsNames),
      lastName: window.util.generateRandomValue(wizardsLastNames),
      coatColor: window.util.generateRandomValue(wizardsCoatColors),
      eyesColor: window.util.generateRandomValue(wizardsEyesColors)
    };
    return wizard;
  };

  var wizardsList = [];

  for (var i = 0; i < WIZARD_COUNT; i++) {
    wizardsList[i] = generateWizard();
  }
  var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

  var renderWizard = function (wizard) {
    var wizardElement = similarWizardTemplate.cloneNode(true);
    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name + ' ' + wizard.lastName;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;
    return wizardElement;
  };

  window.wizard = {
    list: wizardsList,
    render: renderWizard
  };
})();
