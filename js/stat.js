'use strict';
(function () {
  var CLOUD_HEIGHT = 270;
  var CLOUD_WIDTH = 470;
  var CLOUD_X = 100;
  var CLOUD_Y = 10;
  var CONGRATULATIONS_TEXT_Y = 40;
  var GAP = 15;
  var GAP_FROM_LEFT_SIDE_OF_CLOUD = 50;
  var TEXT_HEIGHT = 16;
  var GAP_BETWEEN_BARS = 50;
  var BAR_WIDTH = 40;
  var BAR_MAX_HEIGHT = 150;

  var renderCloud = function (ctx, x, y, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
  };

  var renderStatistics = function (ctx, names, times) {
    renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
    renderCloud(ctx, CLOUD_X, CLOUD_Y, 'white');
    ctx.fillStyle = 'black';
    ctx.font = '16px PT Mono';
    ctx.fillText('Ура вы победили!', CLOUD_WIDTH / 2, CONGRATULATIONS_TEXT_Y);
    ctx.fillText('Список результатов:', CLOUD_WIDTH / 2, CONGRATULATIONS_TEXT_Y + GAP);

    for (var i = 0; i < names.length; i++) {
      ctx.fillStyle = 'black';
      ctx.fillText(names[i], CLOUD_X + GAP_FROM_LEFT_SIDE_OF_CLOUD + (BAR_WIDTH + GAP_BETWEEN_BARS) * i, CLOUD_Y + CLOUD_HEIGHT - GAP);

      if (names[i] === 'Вы') {
        ctx.fillStyle = 'rgba(255, 0, 0, 1)';
      } else {
        ctx.fillStyle = 'rgba(0, 0, 255, ' + Math.random() + ')';
      }

      ctx.fillRect(CLOUD_X + GAP_FROM_LEFT_SIDE_OF_CLOUD + (BAR_WIDTH + GAP_BETWEEN_BARS) * i, CLOUD_Y + CLOUD_HEIGHT - GAP - TEXT_HEIGHT - GAP, BAR_WIDTH, -((BAR_MAX_HEIGHT * times[i])) / window.util.getMaxElement(times));
      ctx.fillStyle = 'black';
      ctx.fillText(Math.round(times[i]), CLOUD_X + GAP_FROM_LEFT_SIDE_OF_CLOUD + (BAR_WIDTH + GAP_BETWEEN_BARS) * i, CLOUD_HEIGHT - ((BAR_MAX_HEIGHT * times[i])) / window.util.getMaxElement(times) - GAP - TEXT_HEIGHT - GAP);
    }
  };

  window.render = renderStatistics;

})();
