//=============================================================================
// ALT_MakeEmptyMap_BugFix.js
//=============================================================================
/*:ja
 * @plugindesc 倍速しながら戦闘からマップに戻る際の処理に保険を掛ける。
 * @author 鈴原マキナ（Altered）
 *
 * @help このプラグインに、プラグインコマンドはありません。
 *
 * バージョン情報
 * 2022/09/22　1.0.0　初版
 *
 */

(function () {
  "use strict";

  Game_Map.prototype.isLoopHorizontal = function () {
    if (!!!$dataMap) {
      DataManager.makeEmptyMap();
    }
    return $dataMap.scrollType === 2 || $dataMap.scrollType === 3;
  };
})();
