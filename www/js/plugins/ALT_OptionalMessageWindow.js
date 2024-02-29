/*:
 * @plugindesc メッセージウィンドウの幅とX位置とフォントサイズを調整する
 * @author 鈴原マキナ (Altered)
 *
 * @help
 * フォントサイズをデフォルトから小さくすると、制御文字でアイコンを表示した際に
 * アイコンの下辺とテキストの下辺が自動で同じ位置に調整されます。
 *
 * @param windowWidth
 * @text ウィンドウ幅
 * @type number
 * @default 816
 * @parent dataType
 *
 * @param positionX
 * @text ウィンドウX位置
 * @type number
 * @default 0
 * @parent dataType
 *
 * @param fontSize
 * @text テキストのフォントサイズ
 * @desc デフォルトフォントサイズ = 28
 * @type number
 * @default 28
 * @parent dataType
 */

(function () {
  "use strict";
  const parameters = PluginManager.parameters("ALT_OptionalMessageWindow");

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

  Window_Message.prototype.resetFontSettings = function () {
    this.contents.fontFace = this.standardFontFace();
    this.contents.fontSize = param.fontSize;
    this.resetTextColor();
  };

  Window_Message.prototype.processNormalCharacter = function (textState) {
    const c = textState.text[textState.index++];
    const w = this.textWidth(c);
    // const standardFontSize = 26;
    // let adjustY            = standardFontSize - param.fontSize;
    this.contents.drawText(
      c,
      textState.x + 3,
      textState.y + 3,
      w * 2,
      textState.height
    );
    textState.x += w + 0;
  };

  Window_ChoiceList.prototype.resetFontSettings = function () {
    this.contents.fontFace = this.standardFontFace();
    this.contents.fontSize = param.fontSize;
    this.resetTextColor();
  };

  Window_ChoiceList.prototype.processNormalCharacter = function (textState) {
    const c = textState.text[textState.index++];
    const w = this.textWidth(c);
    // const standardFontSize = 26;
    // let adjustY            = standardFontSize - param.fontSize;
    this.contents.drawText(
      c,
      textState.x + 3,
      textState.y + 3,
      w * 2,
      textState.height
    );
    textState.x += w + 0;
  };
})();
