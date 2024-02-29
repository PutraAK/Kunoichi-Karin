//=============================================================================
// mahoujin.js
//=============================================================================
//Copyright (c) 2016 Trb
// This software is released under the MIT License.
// http://opensource.org/licenses/mit-license.php
//
//twitter https://twitter.com/Trb_surasura
/*:
 * @plugindesc 戦闘時に、回転する魔法陣の画像を表示させるプラグイン
 * @author Trb
 * @version 1.00 2016/7/6 初版
 *
 * @help picture のフォルダに、『mahoujin1』『mahoujin2』という名前の画像を用意して下さい。
 *
 * mahoujin1 は時計回りに回転する魔法陣の画像、
 * mahoujin2 は反時計回りに回転する魔法陣の画像です。
 *
 * 初期設定では、スイッチ1がオンの時魔法陣が表示されるようになっています。
 * 表示のオンオフに使用するスイッチを変更する場合はプラグインを直接編集して下さい。
 * 魔法陣の表示位置や回転速度などの設定もプラグインを直接編集する必要があります。
 *
 *
 * @requiredAssets img/pictures/mahoujin1
 * @requiredAssets img/pictures/mahoujin2
 *
 */
(function () {
  //------表示位置などの設定にはここの数字を書き換えてください------------------------------------------------------------------
  var switchId = 135; //画像の表示切り替えに使うスイッチの番号(この番号のスイッチがオンの時魔法陣が表示されます)
  var tsubure = 0.5; //画像の潰れ具合の値（0~1の間で設定）
  var x = 408; //画像の表示位置(中心のx座標)
  var y = 360; //画像の表示位置(中心のy座標)
  var kaiten1 = 0.8; //画像1の回転速度(1フレームあたり何度の速さで回転するか。マイナスの値を入れると反時計回りになります)
  var kaiten2 = -0.8; //画像2の回転速度
  var gousei = 3; //画像の合成方法(0~3の間で設定。0は通常、1と3は光る感じ、2は暗くなる感じで表示されます)
  //--------------------------------------------------------------------------------------------------------------------

  var _Spriteset_Battle_createBattleback =
    Spriteset_Battle.prototype.createBattleback;
  Spriteset_Battle.prototype.createBattleback = function () {
    _Spriteset_Battle_createBattleback.call(this);
    //魔法陣スプライトの器
    this._mahoujinSpriteContainer = new Sprite();
    this._mahoujinSpriteContainer.scale.y = tsubure; //器となるスプライトの位置や拡大率などを設定する
    this._mahoujinSpriteContainer.x = x;
    this._mahoujinSpriteContainer.y = y;
    //魔法陣スプライトの中身1
    this._mahoujinSprite1 = new Sprite();
    this._mahoujinSprite1.bitmap = ImageManager.loadPicture("mahoujin1"); //画像の設定
    this._mahoujinSprite1.anchor = { x: 0.5, y: 0.5 }; //anchor は画像の軸を指す値。0.5にすることで画像の回転軸が画像の中心になる。
    this._mahoujinSprite1.blendMode = gousei;
    this._mahoujinSpriteContainer.addChild(this._mahoujinSprite1); //器のスプライトに addChild する
    //魔法陣スプライトの中身2
    this._mahoujinSprite2 = new Sprite();
    this._mahoujinSprite2.bitmap = ImageManager.loadPicture("mahoujin2");
    this._mahoujinSprite2.anchor = { x: 0.5, y: 0.5 };
    this._mahoujinSprite2.blendMode = gousei;
    this._mahoujinSpriteContainer.addChild(this._mahoujinSprite2);

    this._battleField.addChild(this._mahoujinSpriteContainer); //器のスプライトを battleField に addChild する
  };
  /* ※ 戦闘ごとに魔法陣の画像を変更したい場合
51行目、57行目の ImageManager.loadPicture のカッコ内を ($gameVariables.value(変数番号)) にして、
変数に画像の名前を入れることによって、その名前の画像が読み込まれるようになります。
　　<具体例>
　　　ImageManager.loadPicture($gameVariables.value(1));にし、
　　　イベントコマンドの変数の操作で　変数1の値を『魔法陣A』にすれば『魔法陣A』というファイル名の画像が読み込まれる

ただし画像の読み込みは戦闘開始時に行われるため、戦闘の途中で画像を変えることは出来ません。
(そうしたい場合はまた別の改変が必要になります)
なので戦闘開始前のイベントで画像名を指定するようにしてください。
*/

  var _Spriteset_Battle_update = Spriteset_Battle.prototype.update;
  Spriteset_Battle.prototype.update = function () {
    _Spriteset_Battle_update.call(this);

    if ($gameSwitches.value(switchId)) {
      //スイッチがオンの時
      this._mahoujinSpriteContainer.visible = true; //visible は画像の表示の切り替えフラグ
      this._mahoujinSprite1.rotation += (kaiten1 / 180) * Math.PI; //rotation は画像の回転度。kaitenの値の分回転させる
      this._mahoujinSprite2.rotation += (kaiten2 / 180) * Math.PI; //[/ 180 * Math.PI]は角度をラジアンに変換する計算
    } else {
      //スイッチがオンじゃない時
      this._mahoujinSpriteContainer.visible = false; //表示をfalseにする
    }
  };
})();
