//=============================================================================
// ALT_ShopStatus.js
// by Altered (Machina Suzuhara)
// Version: 1.00
//=============================================================================

/*:
 * @plugindesc ■■■Altered■■■ ショップステータスに表示されるメンバーをスイッチで管理
 * @author Altered (Machina Suzuhara)
 *
 * @help
 * 【利用規約】
 * いかなる理由においても、"ALT_ShopStatus.js(以下、本プラグイン)"を
 * 本プラグイン制作者『Altered (Machina Suzuhara)』の許可なく、
 * 本プラグインの『配布』や『公開』、『販売』、『ゲーム等のアプリケーションへ
 * 組み込む形式での配布及び公開及び使用』を禁止する。
 */

(function () {
  "use strict";

  Window_ShopStatus.prototype.statusMembers = function () {
    const members = [];
    members.push($gameActors.actor(1));
    if ($gameSwitches.value(578)) members.push($gameActors.actor(2));
    if ($gameSwitches.value(579)) members.push($gameActors.actor(3));
    if ($gameSwitches.value(580)) members.push($gameActors.actor(4));
    return members;
  };
})();
