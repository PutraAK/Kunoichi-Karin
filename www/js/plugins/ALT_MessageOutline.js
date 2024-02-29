//=============================================================================
// ALT_MessageOutline.js
// by Altered (Machina)
// Version: 2.00
//=============================================================================

/*:
 * @plugindesc 「文章の表示」の文字のアウトラインを変更
 *
 * @author Altered (Machina)
 * @help 「文章の表示(Window_Message)」と同じ処理で描画される文字のアウトライン等を変更します。
 *
 *--------------------------------------------------
 *
 * 1.利用上の注意
 * ・有償、無償、年齢制限コンテンツでの利用に、特に制限はありません。
 *
 * ・利用に関しては全て自己責任で行ってください。
 *   本スクリプトを使用すること及びゲームなどを制作・配布・販売することにより、
 *   第三者との間で生じたトラブル等に関しては、本素材作成者は一切責任を負わないものとします。
 *
 * ・素材制作者に許可無く改変可。改変物の配布時には、
 *   添付ドキュメント内に本素材を使用して制作した旨を表記してください。
 *
 * 2.利用報告
 * ・特に必要ありません。
 *
 * 3.禁止事項
 * ・素材単体での二次配布。
 * ・素材への直リンク。
 *
 *  4.サポート
 * ・競合などの対処は致しかねますので、予めご了承下さい。
 *
 *
 * @param アウトラインの太さ
 * @default 4
 * @desc 標準は"4"です。なしにする場合は"0"。
 *
 * @param アウトラインの色(赤)
 * @default 0
 * @desc 0～255。初期値は「0」
 *
 * @param アウトラインの色(緑)
 * @default 0
 * @desc 0～255。初期値は「0」
 *
 * @param アウトラインの色(青)
 * @default 0
 * @desc 0～255。初期値は「0」
 *
 * @param アウトラインの透過率
 * @default 0.5
 * @desc 標準は"0.5"です。最大値はは"1"。
 *
 * @param フォントサイズ
 * @default 28
 * @desc フォントサイズを指定します。おまけなのでSupportなしです。
 *
 *
 */

//=============================================================================

(function () {
  var parameters = PluginManager.parameters("ALT_MessageOutline");
  var paramFontSize = Number(parameters["フォントサイズ"] || "28");
  var paramOutlineSize = Number(parameters["アウトラインの太さ"] || "4");
  var paramOutlineRed = Number(parameters["アウトラインの色(赤)"] || "0");
  var paramOutlineGreen = Number(parameters["アウトラインの色(緑)"] || "0");
  var paramOutlineBlue = Number(parameters["アウトラインの色(青)"] || "0");
  var paramOutlineAlpha = Number(parameters["アウトラインの透過率"] || "0.5");

  var _Window_Message_resetFontSettings =
    Window_Message.prototype.resetFontSettings;
  Window_Message.prototype.resetFontSettings = function () {
    _Window_Message_resetFontSettings.call(this);
    this.contents.fontSize = paramFontSize;
    this.contents.outlineWidth = paramOutlineSize;
    this.contents.outlineColor =
      "rgba(" +
      paramOutlineRed +
      "," +
      paramOutlineGreen +
      "," +
      paramOutlineBlue +
      "," +
      paramOutlineAlpha +
      ")";
  };

  var _Window_ChoiceList_resetFontSettings =
    Window_ChoiceList.prototype.resetFontSettings;
  Window_ChoiceList.prototype.resetFontSettings = function () {
    _Window_ChoiceList_resetFontSettings.call(this);
    this.contents.fontSize = paramFontSize;
    this.contents.outlineWidth = paramOutlineSize;
    this.contents.outlineColor =
      "rgba(" +
      paramOutlineRed +
      "," +
      paramOutlineGreen +
      "," +
      paramOutlineBlue +
      "," +
      paramOutlineAlpha +
      ")";
  };
})();
