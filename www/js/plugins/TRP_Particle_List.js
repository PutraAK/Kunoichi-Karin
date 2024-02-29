/*: @target MZ
 * @base TRP_ParticleMZ
 * @plugindesc 自作パーティクル設定の一覧
 * @help
 * bahu <character> ＠2022/5/26
 * bahu_syubi <character> ＠2022/5/26
 * bahu＿hayasa <character> ＠2022/5/26
 * bubble_c <character> ＠2022/5/26
 * bubble_w <character> ＠2022/5/25
 * dark_hole_r <character> ＠2022/5/25
 * doku <character> ＠2022/5/26
 * dora_01 <character> ＠2022/10/11
 * dora_02 <character> ＠2022/10/11
 * enmaku <character> ＠2022/5/27
 * event:5 <character> ＠2022/5/21
 * fire_e <character> ＠2022/11/6
 * fireworks_niagala1 <character> ＠2022/3/29
 * fuss_c <character> ＠2022/5/25
 * gekikou <character> ＠2022/5/26
 * hanabi_01 <character> ＠2022/10/10
 * hanabi_02 <character> ＠2022/10/10
 * hanabi_03 <character> ＠2022/10/10
 * hanabi_04 <character> ＠2022/10/11
 * hanabi_05 <character> ＠2022/10/11
 * hanabi_06 <character> ＠2022/10/11
 * hanabi_11 <character> ＠2022/10/11
 * hangeki <character> ＠2022/7/18
 * huji <character> ＠2022/5/27
 * hujirai <character> ＠2023/10/19
 * ikeno_awa <weather> ＠2022/12/13
 * illumination_e <character> ＠2022/11/11
 * illumination_w <character> ＠2022/11/11
 * jyakutai <character> ＠2022/5/26
 * kaihi <character> ＠2022/5/26
 * kenka_in <character> ＠2022/8/16
 * koban <character> ＠2022/6/29
 * light_pillar_w <character> ＠2022/5/24
 * magic_circle_c <character> ＠2022/5/22
 * mayoino <character> ＠2022/6/17
 * mizuyouki <character> ＠2022/6/11
 * nige_en <character> ＠2022/8/7
 * odori_in <character> ＠2022/7/18
 * onika <character> ＠2022/5/27
 * petal_end <character> ＠2022/11/6
 * petal_w <character> ＠2022/5/24
 * pink <character> ＠2022/10/10
 * rain_fog_w <character> ＠2022/5/24
 * sibire <character> ＠2022/5/26
 * sin_pink <character> ＠2023/7/12
 * snow_w2 <character> ＠2022/6/17
 * sparks_w <character> ＠2022/12/26
 * statue_orb_c <character> ＠2022/5/22
 * takarawana <character> ＠2022/6/14
 * tako_moe <character> ＠2022/8/15
 * tekikyou <character> ＠2022/11/5
 * tekikyou_02 <character> ＠2022/5/27
 * tekikyou_03 <character> ＠2022/5/27
 * test <character> ＠2022/5/24
 * test01 <character> ＠2022/7/18
 * touketu <character> ＠2022/5/26
 * uranai <character> ＠2022/7/2
 * warp_red_cp <character> ＠2022/5/22
 * yougan_05 <screen> ＠2022/12/26
 *
 * @command set_character
 * @text set/表示 > キャラ対象(46)
 * @desc パーティクル表示
 *
 * @arg id
 * @text 管理ID
 * @desc 他と被らない管理ID。「def」で設定名,「-EID」で設定名-EID
 * @default def
 *
 * @arg target
 * @text ターゲット
 * @desc thisでこのイベント。「event:イベントID」「player」「weather」など
 * @default weather
 *
 * @arg name
 * @text 《データ名》
 * @desc データ名。defとすると管理IDをデータ名として使用。（重み同じデータ名を複数表示するときは管理IDを分ける）
 * @default 《呼び出す設定を選択》
 * @type select
 * @option bahu <character> ＠2022/5/26
 * @value bahu
 * @option bahu_syubi <character> ＠2022/5/26
 * @value bahu_syubi
 * @option bahu＿hayasa <character> ＠2022/5/26
 * @value bahu＿hayasa
 * @option bubble_c <character> ＠2022/5/26
 * @value bubble_c
 * @option bubble_w <character> ＠2022/5/25
 * @value bubble_w
 * @option dark_hole_r <character> ＠2022/5/25
 * @value dark_hole_r
 * @option doku <character> ＠2022/5/26
 * @value doku
 * @option dora_01 <character> ＠2022/10/11
 * @value dora_01
 * @option dora_02 <character> ＠2022/10/11
 * @value dora_02
 * @option enmaku <character> ＠2022/5/27
 * @value enmaku
 * @option event:5 <character> ＠2022/5/21
 * @value event:5
 * @option fire_e <character> ＠2022/11/6
 * @value fire_e
 * @option fireworks_niagala1 <character> ＠2022/3/29
 * @value fireworks_niagala1
 * @option gekikou <character> ＠2022/5/26
 * @value gekikou
 * @option hangeki <character> ＠2022/7/18
 * @value hangeki
 * @option huji <character> ＠2022/5/27
 * @value huji
 * @option hujirai <character> ＠2023/10/19
 * @value hujirai
 * @option illumination_e <character> ＠2022/11/11
 * @value illumination_e
 * @option illumination_w <character> ＠2022/11/11
 * @value illumination_w
 * @option jyakutai <character> ＠2022/5/26
 * @value jyakutai
 * @option kaihi <character> ＠2022/5/26
 * @value kaihi
 * @option koban <character> ＠2022/6/29
 * @value koban
 * @option light_pillar_w <character> ＠2022/5/24
 * @value light_pillar_w
 * @option magic_circle_c <character> ＠2022/5/22
 * @value magic_circle_c
 * @option mayoino <character> ＠2022/6/17
 * @value mayoino
 * @option mizuyouki <character> ＠2022/6/11
 * @value mizuyouki
 * @option odori_in <character> ＠2022/7/18
 * @value odori_in
 * @option onika <character> ＠2022/5/27
 * @value onika
 * @option petal_end <character> ＠2022/11/6
 * @value petal_end
 * @option petal_w <character> ＠2022/5/24
 * @value petal_w
 * @option pink <character> ＠2022/10/10
 * @value pink
 * @option rain_fog_w <character> ＠2022/5/24
 * @value rain_fog_w
 * @option sibire <character> ＠2022/5/26
 * @value sibire
 * @option sin_pink <character> ＠2023/7/12
 * @value sin_pink
 * @option snow_w2 <character> ＠2022/6/17
 * @value snow_w2
 * @option sparks_w <character> ＠2022/12/26
 * @value sparks_w
 * @option statue_orb_c <character> ＠2022/5/22
 * @value statue_orb_c
 * @option takarawana <character> ＠2022/6/14
 * @value takarawana
 * @option tako_moe <character> ＠2022/8/15
 * @value tako_moe
 * @option tekikyou <character> ＠2022/11/5
 * @value tekikyou
 * @option tekikyou_02 <character> ＠2022/5/27
 * @value tekikyou_02
 * @option tekikyou_03 <character> ＠2022/5/27
 * @value tekikyou_03
 * @option test <character> ＠2022/5/24
 * @value test
 * @option touketu <character> ＠2022/5/26
 * @value touketu
 * @option uranai <character> ＠2022/7/2
 * @value uranai
 * @option warp_red_cp <character> ＠2022/5/22
 * @value warp_red_cp
 *
 * @arg z
 * @text Z値
 * @desc 重なり順。above:上、below:後ろ、screen、spritesetなど。数値指定も可
 * @default def
 *
 * @arg tag
 * @text 管理タグ
 * @desc 管理用のタグ名
 *
 * @arg edit
 * @text Editモード
 * @desc ONにするとエディタを呼び出し(テストプレイ時のみ有効)
 * @default false
 * @type boolean
 *
 * @arg delay
 * @text _ディレイ
 * @desc 1以上とすると、指定フレーム後にコマンドを実効
 * @default 0
 * @type number
 * @min 0
 *
 *
 * @command set_screen
 * @text set/表示 > スクリーン/天候/リージョン(2)
 * @desc パーティクル表示
 *
 * @arg id
 * @text 管理ID
 * @desc 他と被らない管理ID。「def」で設定名,「-EID」で設定名-EID
 * @default def
 *
 * @arg target
 * @text ターゲット
 * @desc thisでこのイベント。「event:イベントID」「player」「weather」など
 * @default this
 *
 * @arg name
 * @text 《データ名》
 * @desc データ名。defとすると管理IDをデータ名として使用。（重み同じデータ名を複数表示するときは管理IDを分ける）
 * @default 《呼び出す設定を選択》
 * @type select
 * @option ikeno_awa <weather> ＠2022/12/13
 * @value ikeno_awa
 * @option yougan_05 <screen> ＠2022/12/26
 * @value yougan_05
 *
 * @arg z
 * @text Z値
 * @desc 重なり順。above:上、below:後ろ、screen、spritesetなど。数値指定も可
 * @default def
 *
 * @arg tag
 * @text 管理タグ
 * @desc 管理用のタグ名
 *
 * @arg edit
 * @text Editモード
 * @desc ONにするとエディタを呼び出し(テストプレイ時のみ有効)
 * @default false
 * @type boolean
 *
 * @arg delay
 * @text _ディレイ
 * @desc 1以上とすると、指定フレーム後にコマンドを実効
 * @default 0
 * @type number
 * @min 0
 *
 *
 * @command play_character
 * @text play/１回再生 > キャラ対象(11)
 * @desc パーティクルを１回だけ再生
 *
 * @arg id
 * @text 管理ID
 * @desc 他と被らない管理ID。「def」で設定名,「-EID」で設定名-EID
 * @default def
 *
 * @arg target
 * @text ターゲット
 * @desc thisでこのイベント。「event:イベントID」「player」「weather」など
 * @default weather
 *
 * @arg name
 * @text 《データ名》
 * @desc データ名。defとすると管理IDをデータ名として使用。（重み同じデータ名を複数表示するときは管理IDを分ける）
 * @default 《呼び出す設定を選択》
 * @type select
 * @option fuss_c <character> ＠2022/5/25
 * @value fuss_c
 * @option hanabi_01 <character> ＠2022/10/10
 * @value hanabi_01
 * @option hanabi_02 <character> ＠2022/10/10
 * @value hanabi_02
 * @option hanabi_03 <character> ＠2022/10/10
 * @value hanabi_03
 * @option hanabi_04 <character> ＠2022/10/11
 * @value hanabi_04
 * @option hanabi_05 <character> ＠2022/10/11
 * @value hanabi_05
 * @option hanabi_06 <character> ＠2022/10/11
 * @value hanabi_06
 * @option hanabi_11 <character> ＠2022/10/11
 * @value hanabi_11
 * @option kenka_in <character> ＠2022/8/16
 * @value kenka_in
 * @option nige_en <character> ＠2022/8/7
 * @value nige_en
 * @option test01 <character> ＠2022/7/18
 * @value test01
 *
 * @arg z
 * @text Z値
 * @desc 重なり順。above:上、below:後ろ、screen、spritesetなど。数値指定も可
 * @default def
 *
 * @arg tag
 * @text 管理タグ
 * @desc 管理用のタグ名
 *
 * @arg edit
 * @text Editモード
 * @desc ONにするとエディタを呼び出し(テストプレイ時のみ有効)
 * @default false
 * @type boolean
 *
 * @arg delay
 * @text _ディレイ
 * @desc 1以上とすると、指定フレーム後にコマンドを実効
 * @default 0
 * @type number
 * @min 0
 *
 *
 *
 * @requiredAssets img/particles/line2
 * @requiredAssets img/particles/line_oval2
 * @requiredAssets img/particles/bubble1
 * @requiredAssets img/particles/ring1g
 * @requiredAssets img/particles/flare2
 * @requiredAssets img/particles/smog2
 * @requiredAssets img/particles/smoke2
 * @requiredAssets img/particles/smoke1
 * @requiredAssets img/particles/smog1
 * @requiredAssets img/particles/cartoon_fuss2
 * @requiredAssets img/particles/line_ray2
 * @requiredAssets img/particles/flare
 * @requiredAssets img/particles/thunder1
 * @requiredAssets img/particles/thunder2
 * @requiredAssets img/particles/shine_thin3
 * @requiredAssets img/particles/particle4
 * @requiredAssets img/particles/shine2
 * @requiredAssets img/particles/petal1g
 * @requiredAssets img/particles/line_oval1
 * @requiredAssets img/particles/heart4
 * @requiredAssets img/particles/particle9
 * @requiredAssets img/particles/circle2
 * @requiredAssets img/particles/heart4g
 * @requiredAssets img/particles/thunder1_2
 * @requiredAssets img/particles/petal1
 * @requiredAssets img/particles/heart1
 * @requiredAssets img/particles/line_ray1f
 * @requiredAssets img/particles/particle2
 * @requiredAssets img/particles/flame1
 * @requiredAssets img/particles/cloud2
 * @requiredAssets img/particles/line_rain2
 * @requiredAssets img/particles/line4
 * @requiredAssets img/particles/line_drop1
 * @requiredAssets img/particles/heart1g
 * @requiredAssets img/particles/ripple1g
 * @requiredAssets img/particles/ripple1
 * @requiredAssets img/particles/leaf1g
 */
