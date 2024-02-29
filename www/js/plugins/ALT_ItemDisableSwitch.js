//=============================================================================
// ALT_ItemDisableSwitch.js
// by Altered (Machina Suzuhara)
// Version: 1.00
//=============================================================================

/*:ja
 * @plugindesc  ■■■Altered■■■ スイッチONでアイテム使用不可
 * @author 鈴原マキナ（Altered）
 *
 * @help
 * 使用不可のアイテムを不透明で選択不可にする。
 * アイテムのメモ欄に<disableSwitch:スイッチ番号>を記入すると、
 * そのスイッチがONになると使用不可になる。
 *
 *
 * ---------------------------------------------------------
 * 【利用規約】
 * 『ALT_ItemDisableSwitch.js』(以下、本プラグイン)の利用にあたり、
 * いかなる理由であっても、以下の項目を遵守すること。
 *
 * -本プラグインの著作権は『鈴原マキナ（Altered） 』（以下、著作権者）が有する。
 * -著作権者の許可無く、本プラグインを素材としての配布、公開を禁止する。
 * -著作権者の許可無く、ゲーム等のアプリケーションへ組み込む形式での配布、公開を禁止する。
 * -著作権者の許可無く、画像や動画等、著作権が認められる範囲での本プラグインのソースコードの公開を禁止する。
 * -本プラグインの利用する場合は、必ず著作権者の許可を文面で得ること。
 * -録音または録画された『口頭や身振りでの著作権者の許可』を得ていても、必ず文面でも利用許可を得ること。
 *
 * 以上、六項目を利用規約とする。
 * ---------------------------------------------------------
 *
 *
 * バージョン情報
 * 2022/08/15　1.0.0　初版
 *
 *
 */

(function () {
  "use strict";

  Window_ItemList.prototype.isCurrentItemEnabled = function () {
    let disableSwitch;
    if (this.item() && this.item().meta) {
      const meta = this.item().meta;
      disableSwitch = meta.disableSwitch
        ? $gameSwitches.value(Number(meta.disableSwitch))
        : false;
    }
    return !disableSwitch && this.isEnabled(this.item());
  };

  Window_ItemList.prototype.isEnabled = function (item) {
    if (!item || !item.meta) return $gameParty.canUse(item);
    const meta = item.meta;
    const disableSwitch = meta.disableSwitch
      ? $gameSwitches.value(Number(meta.disableSwitch))
      : false;
    return !disableSwitch && $gameParty.canUse(item);
  };
})();
