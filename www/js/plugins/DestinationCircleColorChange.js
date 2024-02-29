//=============================================================================
// 円形クリックプラグイン
// DestinationCircleColorChange.js
// Copyright (c) 2018 村人Ａ
//=============================================================================

/*:ja
 * @plugindesc タップやクリックしたときに出る四角い白いアタリを丸にしての色を変更できます。
 * @author 村人A
 *
 * @help
 *
 *　色の指定は色の名前やカラーコードで指定できます。
 *　細かい色のコード表・色の名前はhttp://www.colordic.org/などカラーコード表が載っているページを参照してください。
 *
 * プラグインコマンド:
 *   ポインターを丸に　red    # ポインターを丸にして赤色にする
 *   ポインターを丸に　seagreen    # ポインターを丸にしてseagreen色にする
 *   ポインターを丸に　#ff0000    # ポインターを丸にして赤色にする
 */

(function () {
  // villaA_DestinationCircleChangeOn = false;
  // villaA_DestinationCircleColor = 'white';
  //
  // var _Game_Interpreter_pluginCommand = Game_Interpreter.prototype.pluginCommand;
  // Game_Interpreter.prototype.pluginCommand = function(command, args) {
  // 	_Game_Interpreter_pluginCommand.call(this, command, args);
  // 	if (command === 'ポインターを丸に') {
  // 		villaA_DestinationCircleChangeOn = true;
  // 		villaA_DestinationCircleColor = args[0];
  // 	}
  // };
  var _Sprite_Destination_update = Sprite_Destination.prototype.update;
  Sprite_Destination.prototype.update = function () {
    _Sprite_Destination_update.call(this);
    // if(villaA_DestinationCircleChangeOn){
    this.bitmap.clear();
    this.bitmap.drawCircle(
      $gameMap.tileHeight() / 2,
      $gameMap.tileHeight() / 2,
      24,
      "seagreen"
    );
    // villaA_DestinationCircleChangeOn = false;
    // }
  };
})();
