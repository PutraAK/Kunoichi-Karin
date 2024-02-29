//=============================================================================
// ALT_HideGameEndMenuCommand.js
//=============================================================================
/*:ja
 * @plugindesc メニューコマンドから『ゲーム終了』コマンドを削除する。
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

  Scene_Menu.prototype.createCommandWindow = function () {
    this._commandWindow = new Window_MenuCommand(0, 0);
    this._commandWindow.setHandler("item", this.commandItem.bind(this));
    this._commandWindow.setHandler("skill", this.commandPersonal.bind(this));
    this._commandWindow.setHandler("equip", this.commandPersonal.bind(this));
    this._commandWindow.setHandler("status", this.commandPersonal.bind(this));
    this._commandWindow.setHandler(
      "formation",
      this.commandFormation.bind(this)
    );
    this._commandWindow.setHandler("options", this.commandOptions.bind(this));
    this._commandWindow.setHandler("save", this.commandSave.bind(this));
    // this._commandWindow.setHandler('gameEnd',   this.commandGameEnd.bind(this));
    this._commandWindow.setHandler("cancel", this.popScene.bind(this));
    this.addWindow(this._commandWindow);
  };

  Window_MenuCommand.prototype.makeCommandList = function () {
    this.addMainCommands();
    this.addFormationCommand();
    this.addOriginalCommands();
    this.addOptionsCommand();
    this.addSaveCommand();
    // this.addGameEndCommand();
  };
})();
