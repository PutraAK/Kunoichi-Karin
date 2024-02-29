//=============================================================================
// MPP_WindowPropertyCustom.js
//=============================================================================
// Copyright (c) 2017 Mokusei Penguin
// Released under the MIT license
// http://opensource.org/licenses/mit-license.php
//=============================================================================

/*:
 * @plugindesc 【ver.1.0】各ウィンドウの一行の高さ、文字の大きさ等を変更します。
 * @author 木星ペンギン
 *
 * @help ●変更できるもの
 *   ・lineHeight            # 一行の高さ(デフォルト値:36)
 *   ・standardFontSize      # 文字の大きさ(デフォルト値:28)
 *   ・standardPadding       # 余白の幅(デフォルト値:18)
 *   ・standardBackOpacity   # 背景の不透明度(デフォルト値:192)
 *  ※ツクール側が対応できない数値を設定した場合の動作は保証しません。
 *
 *  ●上位クラスの値を変えると、下位クラスの値も変わります。
 *  　ただし、下位クラスで値が設定されている場合は変わりません。
 *  　上位クラスと下位クラスで違う値を設定した場合、下位クラスが優先されます。
 *
 *  Window_Base                   # 全てのウィンドウの上位クラス
 *  ├Window_Selectable           # 項目選択の機能を持つクラス
 *  │├Window_Command            # 一般的なコマンド選択を行うクラス
 *  ││├Window_HorzCommand      # 横選択形式のコマンドウィンドウ
 *  │││├Window_ItemCategory   # アイテムの分類を選択するウィンドウ
 *  │││├Window_EquipCommand   # 装備コマンドを選択するウィンドウ
 *  │││└Window_ShopCommand    # ショップ画面でコマンドを選択するウィンドウ
 *  ││├Window_MenuCommand      # メニュー画面でコマンドを選択するウィンドウ
 *  ││├Window_SkillType        # スキルタイプを選択するウィンドウ
 *  ││├Window_Options          # オプション画面でコマンドを選択するウィンドウ
 *  ││├Window_ChoiceList       # [選択肢の表示]に使用するウィンドウ
 *  ││├Window_PartyCommand     # 戦闘画面で戦うか逃げるかを選択するウィンドウ
 *  ││├Window_ActorCommand     # 戦闘画面でアクターの行動を選択するウィンドウ
 *  ││├Window_TitleCommand     # タイトル画面でコマンドを選択するウィンドウ
 *  ││└Window_GameEnd          # ゲーム終了画面でコマンドを選択するウィンドウ
 *  │├Window_MenuStatus         # メニュー画面でステータスを表示するウィンドウ
 *  ││└Window_MenuActor        # アイテムやスキルの対象を選択するウィンドウ
 *  │├Window_ItemList           # アイテム画面で所持品を表示するウィンドウ
 *  ││├Window_EquipItem        # 装備画面で装備候補を表示するウィンドウ
 *  ││├Window_ShopSell         # ショップ画面で所持品を表示するウィンドウ
 *  ││├Window_EventItem        # [アイテム選択の処理]に使用するウィンドウ
 *  ││└Window_BattleItem       # 戦闘画面で所持品を選択するウィンドウ
 *  │├Window_SkillList          # スキル画面でスキルを表示するウィンドウ
 *  ││└Window_BattleSkill      # 戦闘画面でスキルを選択するウィンドウ
 *  │├Window_EquipSlot          # 装備画面で装備品を表示するウィンドウ
 *  │├Window_Status             # ステータス画面で表示するウィンドウ
 *  │├Window_SavefileList       # セーブ／ロード画面で表示するウィンドウ
 *  │├Window_ShopBuy            # ショップ画面で購入可能品を表示するウィンドウ
 *  │├Window_ShopNumber         # ショップ画面で個数を入力するウィンドウ
 *  │├Window_NameInput          # 名前入力画面で文字を選択するウィンドウ
 *  │├Window_NumberInput        # [数値入力の処理]に使用するウィンドウ
 *  │├Window_BattleLog          # 戦闘の進行を実況表示するウィンドウ
 *  │├Window_BattleStatus       # 戦闘画面でステータスを表示するウィンドウ
 *  ││└Window_BattleActor      # 戦闘画面で対象のアクターを選択するウィンドウ
 *  │└Window_BattleEnemy        # 戦闘画面で対象の敵キャラを選択するウィンドウ
 *  ├Window_Help                 # スキルやアイテムの説明等を表示するウィンドウ
 *  ├Window_Gold                 # 所持金を表示するウィンドウ
 *  ├Window_SkillStatus          # スキル画面でステータスを表示するウィンドウ
 *  ├Window_EquipStatus          # 装備画面で能力値変化を表示するウィンドウ
 *  ├Window_ShopStatus           # ショップ画面で所持数などを表示するウィンドウ
 *  ├Window_NameEdit             # 名前入力画面で名前を編集するウィンドウ
 *  ├Window_Message              # 文章表示に使うメッセージウィンドウ
 *  ├Window_ScrollText           # [文章のスクロール表示]に使うウィンドウ
 *  └Window_MapName              # マップ名を表示するウィンドウ
 *
 * ================================
 * 制作 : 木星ペンギン
 * URL : http://woodpenguin.blog.fc2.com/
 *
 * @param parameters
 * @type struct<param>[]
 * @desc パラメータの配列
 * @default []
 *
 */

/*~struct~param:
 * @param class
 * @type select
 * @option Window_Base
 * @option Window_Selectable
 * @option Window_Command
 * @option Window_HorzCommand
 * @option Window_ItemCategory
 * @option Window_EquipCommand
 * @option Window_ShopCommand
 * @option Window_MenuCommand
 * @option Window_SkillType
 * @option Window_Options
 * @option Window_ChoiceList
 * @option Window_PartyCommand
 * @option Window_ActorCommand
 * @option Window_TitleCommand
 * @option Window_GameEnd
 * @option Window_MenuStatus
 * @option Window_MenuActor
 * @option Window_ItemList
 * @option Window_EquipItem
 * @option Window_ShopSell
 * @option Window_EventItem
 * @option Window_BattleItem
 * @option Window_SkillList
 * @option Window_BattleSkill
 * @option Window_EquipSlot
 * @option Window_Status
 * @option Window_SavefileList
 * @option Window_ShopBuy
 * @option Window_ShopNumber
 * @option Window_NameInput
 * @option Window_NumberInput
 * @option Window_BattleLog
 * @option Window_BattleStatus
 * @option Window_BattleActor
 * @option Window_BattleEnemy
 * @option Window_Help
 * @option Window_Gold
 * @option Window_SkillStatus
 * @option Window_EquipStatus
 * @option Window_ShopStatus
 * @option Window_NameEdit
 * @option Window_Message
 * @option Window_ScrollText
 * @option Window_MapName
 * @desc クラス名
 * @default Window_Base
 *
 * @param lineHeight
 * @desc 一行の高さ
 * (デフォルト値:36 / 未設定の場合は変更なし)
 * @default
 *
 * @param standardFontSize
 * @desc 文字の大きさ
 * (デフォルト値:28 / 未設定の場合は変更なし)
 * @default
 *
 * @param standardPadding
 * @desc 余白の幅
 * (デフォルト値:18 / 未設定の場合は変更なし)
 * @default
 *
 * @param standardBackOpacity
 * @desc 背景の不透明度
 * (デフォルト値:192 / 未設定の場合は変更なし)
 * @default
 *
 */

(function () {
  var method = "%1.prototype.%2 = function() { return %3; };";
  var properties = [
    "lineHeight",
    "standardFontSize",
    "standardPadding",
    "standardBackOpacity",
  ];

  var parameters = PluginManager.parameters("MPP_WindowPropertyCustom");

  var parameters2 = JSON.parse(parameters["parameters"] || "[]");
  for (var i = 0; i < parameters2.length; i++) {
    var data = JSON.parse(parameters2[i]);
    for (var j = 0; j < 4; j++) {
      var property = properties[j];
      if (data.class && data[property]) {
        try {
          eval(method.format(data.class, property, data[property]));
        } catch (e) {}
      }
    }
  }
})();
