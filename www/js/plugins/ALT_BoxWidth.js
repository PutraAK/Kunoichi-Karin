/*:
 * @plugindesc ウィンドウの幅とX位置を調整する
 * @author 鈴原マキナ (Altered)
 *
 * @param windowWidth
 * @text ウィンドウ幅
 * @type number
 * @default 816
 * @parent dataType
 *
 * * @param positionX
 * @text ウィンドウX位置
 * @type number
 * @default 0
 * @parent dataType
 */

(function () {
  "use strict";
  const parameters = PluginManager.parameters("ALT_BoxWidth");
  const param = JSON.parse(
    JSON.stringify(parameters, function (key, value) {
      try {
        return JSON.parse(value);
      } catch (e) {
        try {
          return eval(value);
        } catch (e) {
          return value;
        }
      }
    })
  );

  Window_Message.prototype.initialize = function () {
    const width = this.windowWidth();
    const height = this.windowHeight();
    const x = param.positionX;
    Window_Base.prototype.initialize.call(this, x, 0, width, height);
    this.openness = 0;
    this.initMembers();
    this.createSubWindows();
    this.updatePlacement();
  };

  Window_Message.prototype.windowWidth = function () {
    return param.windowWidth;
  };
})();
