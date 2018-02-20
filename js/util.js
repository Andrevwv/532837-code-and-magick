'use strict';

(function () {
  var getMaxElement = function (times) {
    var maxElement = times[0];

    for (var i = 0; i < times.length; i++) {
      if (times[i] > maxElement) {
        maxElement = times[i];
      }
    }

    return maxElement;
  };

  var makeBlockVisible = function (blockSelector) {
    var setupBlock = document.querySelector(blockSelector);
    setupBlock.classList.remove('hidden');
  };

  var generateRandomNumber = function (min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  };

  var generateRandomValue = function (array) {
    var randomNumber = Math.floor(Math.random() * array.length);
    var randomValue = array[randomNumber];
    array.splice(randomNumber, 1);
    return randomValue;
  };

  window.util = {
    getMaxElement: getMaxElement,
    makeBlockVisible: makeBlockVisible,
    generateRandomNumber: generateRandomNumber,
    generateRandomValue: generateRandomValue
  };
})();
