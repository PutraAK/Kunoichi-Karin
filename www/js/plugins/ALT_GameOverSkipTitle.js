//=============================================================================
// ALT_GameOverSkipTitle.js
//=============================================================================
/*:ja
 * @plugindesc ゲームオーバー後のタイトルへの遷移をスキップする。
 * @author 鈴原マキナ（Altered）
 *
 * @help このプラグインに、プラグインコマンドはありません。
 *
 * バージョン情報
 * 2021/05/12　1.0.0　初版
 *
 */

(function () {
  "use strict";

  Scene_Gameover.prototype.gotoTitle = function () {
    if (Utils.isNwjs()) {
      location.reload();
    }
    // SceneManager.goto(Scene_Title);
  };
})();
