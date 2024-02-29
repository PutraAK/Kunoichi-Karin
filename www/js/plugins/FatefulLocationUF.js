//=============================================================================
// FatefulLocationUF.js
//=============================================================================

/*:ja
 * @plugindesc 場所移動時の自動演奏の制御等
 * @author まっつＵＰ
 *
 * @param bgmSwitch
 * @desc オンにしていると場所移動時設定したBGMを自動演奏しません。
 * @default 10
 *
 * @param bgsSwitch
 * @desc オンにしていると場所移動時設定したBGSを自動演奏しません。
 * @default 11
 *
 * @help
 *
 * RPGで笑顔を・・・
 *
 * このヘルプとパラメータの説明をよくお読みになってからお使いください。
 *
 * FatefulLocationの簡易バージョンです。
 *
 * bgmSwitchは任意のスイッチのIDを設定します。
 * このスイッチをオンにすると場所移動後のマップの自動演奏が設定されていても
 * そのBGMの自動演奏を行われません。
 *
 * bgsSwitchは任意のスイッチのIDを設定します。
 * このスイッチをオンにすると場所移動後のマップの自動演奏が設定されていても
 * そのBGSの自動演奏を行われません。
 *
 * このプラグインを利用する場合は
 * readmeなどに「まっつＵＰ」の名を入れてください。
 * また、素材のみの販売はダメです。
 * 上記以外の規約等はございません。
 * もちろんツクールMVで使用する前提です。
 * 何か不具合ありましたら気軽にどうぞ。
 *
 * 免責事項：
 * このプラグインを利用したことによるいかなる損害も制作者は一切の責任を負いません。
 *
 */

(function () {
  var parameters = PluginManager.parameters("FatefulLocationUF");
  var APbgmSwitch = Number(parameters["bgmSwitch"] || 10);
  var APbgsSwitch = Number(parameters["bgsSwitch"] || 11);

  Game_Map.prototype.autoplay = function () {
    if ($dataMap.autoplayBgm && !$gameSwitches.value(APbgmSwitch)) {
      AudioManager.playBgm($dataMap.bgm);
    }
    if ($dataMap.autoplayBgs && !$gameSwitches.value(APbgsSwitch)) {
      AudioManager.playBgs($dataMap.bgs);
    }
  };
})();
