# Combat

* set unit

GET https://www.fantasyland.ru/cgi/combat_ins.php?id=11197&show=1

then

	parent.combat_panel.refr( );


* get status 
https://www.fantasyland.ru/cgi/combat_ref.php?lid=453482397


in response:

```
 parent.combat_panel.addTurn("<font color='b6b6b6'>23:22:33> </font> <font color=FFFFFF><b>БелДрагМеталл</b></font> <font color=00AAAA>[73/322]</font>  vs <font color=FFFFFF><b><i>Маг 4</b></i></font> <font color=00AAAA>[225/250]</font> <BR><font color='b6b6b6'>23:22:33> </font> <font color=FFFFFF><b>БелДрагМеталл</b></font> восстанавливает здоровья: <font color=#00FF00><b>16</b></font><BR><font color='b6b6b6'>23:22:33> </font> <font color=FFFFFF><b>БелДрагМеталл</b></font> атакует противника магией хаоса c силой <font color=#F9FBA8><b>12</b></font>! <font color=FFFFFF><b><i>Маг 4</b></i></font> частично противостоит атаке и получает <font color=#F9FBA8><b>6</b></font> повреждения!<BR><font color='b6b6b6'>23:22:33> </font> <font color=FFFFFF><b>БелДрагМеталл</b></font> атакует противника магией света c силой <font color=#F9FBA8><b>15</b></font>! <font color=FFFFFF><b><i>Маг 4</b></i></font> частично противостоит атаке и получает <font color=#F9FBA8><b>8</b></font> повреждения!<BR><font color='b6b6b6'>23:22:33> </font> <font color=FFFFFF><b>БелДрагМеталл</b></font> атакует противника магией колдовства c силой <font color=#F9FBA8><b>2</b></font>! <font color=FFFFFF><b><i>Маг 4</b></i></font> получает полное повреждение!<BR><font color='b6b6b6'>23:22:33> </font> <b>Чудотворец</b>(<font color=FFFFFF><b>БелДрагМеталл</b></font>) наугад бьет и неожиданно попадает между чешуйками брони <b>Древнего&nbsp;Дракона-Вершителя</b>(<font color=FFFFFF><b><i>Маг 4</b></i></font>)!! <font color=FFFFFF><b><i>Маг 4</b></i></font> получает <font color=#F9FBA8><b>9</b></font> повреждения!<BR><font color='b6b6b6'>23:22:33> </font>  <b>Чудотворец</b> колдует <font color=#F9FBA8><b>Молитва&nbsp;+7</b></font>!! <b>Чудотворец</b> колдует <font color=#F9FBA8><b>Молитва&nbsp;+7</b></font> ЕЩЕ РАЗ!! <font color='b6b6b6'><шанс блока: 12%></font> <BR><table align=center cellpadding=0 cellspacing=0 width=100% height=12><tr><td><img src='/images/buttons/point.gif' width='6' height='12'></td><td background='/images/buttons/line.gif' width=100%></td><td><img src='/images/buttons/point.gif' width='6' height='12'></td></tr></table>", 7);
```


* set scroll
https://www.fantasyland.ru/cgi/combat_scroll_ins.php?id=37&show=1

response:
```

      <SCRIPT language="javascript">
          parent.combat_panel.refr();
      </SCRIPT>```

# Maze

* pick item 

GET https://www.fantasyland.ru/cgi/maze_pickup.php?item_id=22110&moo=0&qn=1

GET https://www.fantasyland.ru/cgi/inv_ref.php?id=22110&rnd=z6ox05ap7hx8npjmz3tr

* move 

GET https://www.fantasyland.ru/cgi/maze_move.php?dir=1

dir: 1 - left, 2 - right, top - 3, down - 4

response:

```
<script>

location.href='maze_ref.php';

</script>
```

negative
```
<SCRIPT> window.top.frames.chat.Syst( 'Требуется 4.8% бодрости. Невозможно совершить переход.' ); </SCRIPT>
<script>

location.href='maze_ref.php';

</script>
```





https://www.fantasyland.ru/ch/chdo.php ???


https://www.fantasyland.ru/cgi/ch_ref.php

response:

```
NewList();
wc("БелДрагМеталл",39437,13,2,"FFFFFF",209,"Магистр - Глава)",6,"Грандмастер)[13764]",7,"Грандмастер)[13746]",0,"",0, "M",1,322,322,0,0);
FirstShow({});

```


https://www.fantasyland.ru/cgi/leave_combat.php?rnd=6dxb24v3pgcgs2clkhm2

response
```
<SCRIPT language='javascript'>
    parent.location.href = 'loc.php?rnd=vqfft6c3a52256qzvugc';
</SCRIPT>
```


# chat
209 - top clan id
* sennd message https://www.fantasyland.ru/ch/chinp1.php?chn=0&a=fafaf

respponse:
```
<HTML>
<BODY>
<FORM method="GET" id="f" name="f" action="/chinp">
<INPUT type=hidden id=chn name=chn value="0">
<INPUT type=hidden id=a name=a value="fafaf">
</FORM>
<SCRIPT>
with (document.f) {
	submit();
}
</SCRIPT>
</BODY>
</HTML>
```




# market

https://www.fantasyland.ru/cgi/v_trade_search.php?item_name=%EF%E0%EF%E8%F0%F3%F1

<div id=moo name=moo>
    <a href='javascript: show_lyr( "egwene" )'>Вернуться к разговору</a>
    <br>
    <a href='javascript: show_lyr( "rrt" )'>Закончить разговор</a>
    <br>
    <br>
    <script>
        parent.no_combat.only_sell_checked = false;
    </script>
    <script>
        parent.no_combat.only_buy_checked = false;
    </script>
    <script>
        parent.no_combat.ex = new Array();
    </script>
    <table cellspacing=3 cellpadding=3>
        <tr>
            <td valign=top>
                <img title='Папирус' src="../images/items/papirus.gif" border=0 style='cursor: pointer; cursor: hand;' onClick="window.open('item_desc.php?id=22750','_blank','scrollbars=yes,width=580,height=495,resizable=yes')">
            </td>
            <td valign=top>
                <b>Папирус</b>
                <table class='table4'></table>
            </td>
            <td valign=top>
                <img style='cursor: pointer; cursor: hand;' src='../images/miscellaneous/e_plus.gif' title='Посмотреть' width='11' height='11' id='hi22750' onClick='expand(22750, 1);'>
                &nbsp;<b>Продается в палатках</b>
                <br>
                <div id='hl22750' style='display: none;'>
                    <i>Загрузка</i>
                </div>
            </td>
        </tr>
        <tr>
            <td valign=top>
                <img title='Зачарованный&nbsp;Папирус' src="../images/items/magic_papirus.png" border=0 style='cursor: pointer; cursor: hand;' onClick="window.open('item_desc.php?id=22754','_blank','scrollbars=yes,width=580,height=495,resizable=yes')">
            </td>
            <td valign=top>
                <b>Зачарованный &nbsp;Папирус</b>
                <table class='table4'></table>
            </td>
            <td valign=top>
                <img style='cursor: pointer; cursor: hand;' src='../images/miscellaneous/e_plus.gif' title='Посмотреть' width='11' height='11' id='hi22754' onClick='expand(22754, 1);'>
                &nbsp;<b>Продается в палатках</b>
                <br>
                <div id='hl22754' style='display: none;'>
                    <i>Загрузка</i>
                </div>
            </td>
        </tr>
    </table>
</div>
<script>

    function ge(a) {
        if (document.all)
            return document.all[a];
        else
            return document.getElementById(a);
    }

    parent.no_combat.ge('trade_main').innerHTML = ge('moo').innerHTML;
    parent.no_combat.is_search = 1;
</script>




* list
https://www.fantasyland.ru/cgi/v_trade_show_shops.php?id=2178&t=1

response:
```
<script>
    parent.no_combat.ge('hl2178').innerHTML = '<b>1.</b>&nbsp;<a href=v_trade_load_shop.php?id=1269 target=game_ref>Б: Жидкости от Бульказоида;)</a>&nbsp;(<span title=\'Количество\' alt=\'Количество\'>50</span>)<br><b>2.</b>&nbsp;<a href=v_trade_load_shop.php?id=2791 target=game_ref>****ДО ПОСЛЕДНЕГО БЕРЁМ****</a>&nbsp;(<span title=\'Количество\' alt=\'Количество\'>24</span>)<br><b>3.</b>&nbsp;<a href=v_trade_load_shop.php?id=2919 target=game_ref>=^$^=</a>&nbsp;[<span title=\'Количество\' alt=\'Количество\'>2</span>]<br><b>4.</b>&nbsp;<a href=v_trade_load_shop.php?id=3014 target=game_ref>Полиграфбумтрейд</a>&nbsp;(<span title=\'Количество\' alt=\'Количество\'>1</span>)<br><b>5.</b>&nbsp;<a href=v_trade_load_shop.php?id=3479 target=game_ref>АТБ16</a>&nbsp;[<span title=\'Количество\' alt=\'Количество\'>17</span>]<br><b>6.</b>&nbsp;<a href=v_trade_load_shop.php?id=4218 target=game_ref>Зелья от Fila!</a>&nbsp;(<span title=\'Количество\' alt=\'Количество\'>1</span>)<br><b>7.</b>&nbsp;<a href=v_trade_load_shop.php?id=4662 target=game_ref>[K]Рандомно выбранные расходки</a>&nbsp;(<span title=\'Количество\' alt=\'Количество\'>317</span>)<br><b>8.</b>&nbsp;<a href=v_trade_load_shop.php?id=4793 target=game_ref>.LDK.Alchemist.dep-18</a>&nbsp;(<span title=\'Количество\' alt=\'Количество\'>22</span>)<br><b>9.</b>&nbsp;<a href=v_trade_load_shop.php?id=5117 target=game_ref>Магазин &quot;Никита&quot;</a>&nbsp;(<span title=\'Количество\' alt=\'Количество\'>1</span>)<br><b>10.</b>&nbsp;<a href=v_trade_load_shop.php?id=5118 target=game_ref>--= ЗЕЛЬЯ СВИТКИ ТЕЛЕПОРТЫ =--</a>&nbsp;(<span title=\'Количество\' alt=\'Количество\'>32</span>)<br><b>11.</b>&nbsp;<a href=v_trade_load_shop.php?id=5262 target=game_ref>------АНГАР-------</a>&nbsp;[<span title=\'Количество\' alt=\'Количество\'>99</span>]<br><b>12.</b>&nbsp;<a href=v_trade_load_shop.php?id=5466 target=game_ref>== РАЗНОЕ ПОД 0 ==</a>&nbsp;(<span title=\'Количество\' alt=\'Количество\'>1</span>)<br><b>13.</b>&nbsp;<a href=v_trade_load_shop.php?id=5540 target=game_ref>О-Т-В-А-Р-Ч-И-К</a>&nbsp;(<span title=\'Количество\' alt=\'Количество\'>1</span>)<br><b>14.</b>&nbsp;<a href=v_trade_load_shop.php?id=5627 target=game_ref>ЗЕЛЬЯ МАЗИ ХАЛК №1</a>&nbsp;(<span title=\'Количество\' alt=\'Количество\'>1</span>)<br>';
</script>
```

https://www.fantasyland.ru/cgi/v_trade_load_shop.php?id=1269

response: html

```
<div id=moo name=moo>
    <script>
        if (parent.no_combat.talk)
            document.write("<a href='javascript: show_lyr( \"rrt\" )'>Покинуть палатку</a><br>");
        else if (!parent.no_combat.just_shop)
            document.write("<hr>");
    </script>
    <script>
        if (!parent.no_combat.just_shop)
            document.write("<a href=shop_show_favorites.php?id=1001679 target=game_ref>Добавить в избранные</a><br><br>");
    </script>
    <TABLE>
        <TR>
            <TD>
                <B>Б: Жидкости от Бульказоида;)</B>
                <B>(33)</B>
                — владелец Буказоид
            </TD>
            <TD></TD>
        </TR>
    </TABLE>
    <TABLE border=0>
        <tr id='captchaTR' style='display: none'>
            <td align='center'>
                <table>
                    <tr>
                        <td>
                            <IMG SRC='png.php?c=1332990068' WIDTH='90' HEIGHT='40' border=1 bordercolor=white>
                        </td>
                        <td>
                            <INPUT id='captcha' type='text' class='text' name='value' maxlength='4' size='4' autocomplete='off'>
                        </td>
                    </tr>
                </table>
                <span id='needCode' style='color:red; font-weight:bold; display:none'>Введите код</span>
            <td>
        </tr>
        <tr>
            <td valign=top>
                <table class='table1'>
                    <tr>
                        <td style='text-align:center'>
                            <img title='Бутылочка&nbsp;Жизни' src="../images/items/potion_hp_03.gif" border=0 style='cursor: pointer; cursor: hand;' onClick="window.open('item_desc.php?id=2503010','_blank','scrollbars=yes,width=580,height=495,resizable=yes')">
                        </td>
                        <td>
                            (1)&nbsp;<b>Бутылочка &nbsp;Жизни</b>
                            <br>
                            <b>Уровень:&nbsp;3</b>
                            <table class='table4'>
                                <tr>
                                    <td>
                                        <img ALIGN=ABSMIDDLE width=20 height=20 src='/images/miscellaneous/hp.gif' alt='Макс. Жизнь' title='Макс. Жизнь'>&nbsp;+9
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <img ALIGN=ABSMIDDLE width=20 height=20 src='/images/miscellaneous/time.gif' alt='Длительность (часы)' title='Длительность (часы)'>&nbsp;3
                                    </td>
                                </tr>
                            </table>
                        </td>
                        <td>
                            <table class='table4'>
                                <tr>
                                    <td>
                                        <img width=18 height=18 src='/images/miscellaneous/money.gif' title='Золота'>
                                    </td>
                                    <td>
                                        <div id=d2503010 name=d2503010>29</div>
                                    </td>
                                </tr>
                            </table>
                            <form id=i2503010 name=i2503010 action="buy.php" method="POST" target=game_ref onsubmit='return checkCode(this);'>
                                <input type='hidden' name='good_id' value='2503010'>
                                <input type='hidden' name='shp_id' value='1001679'>
                                <input type='hidden' name='good_type' value='-1'>
                                <input type='hidden' name='price_quest' value=>
                                <input type='hidden' name='capCode' value=''>
                                <input class='text' type='text' onmouseover='this.style.backgroundImage="url(/images/buttons/text_1_18_s.gif)"' onmouseout='this.style.backgroundImage="url(/images/buttons/text_1_18.gif)"' name='number' value='1' size='3' maxlength='3' onKeyUp='chg_price( 2503010, 29, "", -1 )'>
                                &nbsp;
                                <button class='darkButton' type='submit'>
                                    <span>Купить</span>
                                </button>
                            </form>
                        </td>
                    </tr>
                    <tr>
                        <td style='text-align:center'>
                            <img title='Бутылочка&nbsp;Атаки&nbsp;Хаоса' src="../images/items/potion_a_chaos_03.gif" border=0 style='cursor: pointer; cursor: hand;' onClick="window.open('item_desc.php?id=2503080','_blank','scrollbars=yes,width=580,height=495,resizable=yes')">
                        </td>
                        <td>
                            (320)&nbsp;<b>Бутылочка &nbsp;Атаки &nbsp;Хаоса</b>
                            <br>
                            <b>Уровень:&nbsp;3</b>
                            <table class='table4'>
                                <tr>
                                    <td>
                                        <img ALIGN=ABSMIDDLE width=20 height=20 src='/images/miscellaneous/attack_c.gif' alt='Атака Хаоса' title='Атака Хаоса'>&nbsp;+3
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <img ALIGN=ABSMIDDLE width=20 height=20 src='/images/miscellaneous/time.gif' alt='Длительность (часы)' title='Длительность (часы)'>&nbsp;3
                                    </td>
                                </tr>
                            </table>
                        </td>
                        <td>
                            <table class='table4'>
                                <tr>
                                    <td>
                                        <img width=18 height=18 src='/images/miscellaneous/money.gif' title='Золота'>
                                    </td>
                                    <td>
                                        <div id=d2503080 name=d2503080>36.7 (37)</div>
                                    </td>
                                </tr>
                            </table>
                            <form id=i2503080 name=i2503080 action="buy.php" method="POST" target=game_ref onsubmit='return checkCode(this);'>
                                <input type='hidden' name='good_id' value='2503080'>
                                <input type='hidden' name='shp_id' value='1001679'>
                                <input type='hidden' name='good_type' value='-1'>
                                <input type='hidden' name='price_quest' value=>
                                <input type='hidden' name='capCode' value=''>
                                <input class='text' type='text' onmouseover='this.style.backgroundImage="url(/images/buttons/text_1_18_s.gif)"' onmouseout='this.style.backgroundImage="url(/images/buttons/text_1_18.gif)"' name='number' value='1' size='3' maxlength='3' onKeyUp='chg_price( 2503080, 36.7, "", -1 )'>
                                &nbsp;
                                <button class='darkButton' type='submit'>
                                    <span>Купить</span>
                                </button>
                            </form>
                        </td>
                    </tr>
                    <tr>
                        <td style='text-align:center'>
                            <img title='Бутылочка&nbsp;Концентрации' src="../images/items/potion_conc_03.gif" border=0 style='cursor: pointer; cursor: hand;' onClick="window.open('item_desc.php?id=2503310','_blank','scrollbars=yes,width=580,height=495,resizable=yes')">
                        </td>
                        <td>
                            (2433)&nbsp;<b>Бутылочка &nbsp;Концентрации</b>
                            <br>
                            <b>Уровень:&nbsp;3</b>
                            <table class='table4'>
                                <tr>
                                    <td>
                                        <img ALIGN=ABSMIDDLE width=20 height=20 src='/images/miscellaneous/conc.gif' alt='Концентрация' title='Концентрация'>&nbsp;+1
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <img ALIGN=ABSMIDDLE width=20 height=20 src='/images/miscellaneous/time.gif' alt='Длительность (часы)' title='Длительность (часы)'>&nbsp;3
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <b>Нужно:</b>
                                        &nbsp;<img ALIGN=ABSMIDDLE width=20 height=20 src='/images/miscellaneous/intelligence.gif' alt='Ум' title='Ум'>&nbsp;3
                                    </td>
                                </tr>
                            </table>
                        </td>
                        <td>
                            <table class='table4'>
                                <tr>
                                    <td>
                                        <img width=18 height=18 src='/images/miscellaneous/money.gif' title='Золота'>
                                    </td>
                                    <td>
                                        <div id=d2503310 name=d2503310>28.5 (29)</div>
                                    </td>
                                </tr>
                            </table>
                            <form id=i2503310 name=i2503310 action="buy.php" method="POST" target=game_ref onsubmit='return checkCode(this);'>
                                <input type='hidden' name='good_id' value='2503310'>
                                <input type='hidden' name='shp_id' value='1001679'>
                                <input type='hidden' name='good_type' value='-1'>
                                <input type='hidden' name='price_quest' value=>
                                <input type='hidden' name='capCode' value=''>
                                <input class='text' type='text' onmouseover='this.style.backgroundImage="url(/images/buttons/text_1_18_s.gif)"' onmouseout='this.style.backgroundImage="url(/images/buttons/text_1_18.gif)"' name='number' value='1' size='3' maxlength='3' onKeyUp='chg_price( 2503310, 28.5, "", -1 )'>
                                &nbsp;
                                <button class='darkButton' type='submit'>
                                    <span>Купить</span>
                                </button>
                            </form>
                        </td>
                    </tr>
                    <tr>
                        <td style='text-align:center'>
                            <img title='Бутылочка&nbsp;Власти&nbsp;Рыцарей' src="../images/items/potion_knight_03.gif" border=0 style='cursor: pointer; cursor: hand;' onClick="window.open('item_desc.php?id=2503400','_blank','scrollbars=yes,width=580,height=495,resizable=yes')">
                        </td>
                        <td>
                            (104)&nbsp;<b>Бутылочка &nbsp;Власти &nbsp;Рыцарей</b>
                            <br>
                            <b>Уровень:&nbsp;3</b>
                            <table class='table4'>
                                <tr>
                                    <td>
                                        <img ALIGN=ABSMIDDLE width=20 height=20 src='/images/miscellaneous/mastery_k.gif' alt='Власть над Рыцарями' title='Власть над Рыцарями'>&nbsp;+1
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <img ALIGN=ABSMIDDLE width=20 height=20 src='/images/miscellaneous/time.gif' alt='Длительность (часы)' title='Длительность (часы)'>&nbsp;3
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <b>Нужно:</b>
                                        &nbsp;<img ALIGN=ABSMIDDLE width=20 height=20 src='/images/miscellaneous/strength.gif' alt='Сила' title='Сила'>&nbsp;3
                                    </td>
                                </tr>
                            </table>
                        </td>
                        <td>
                            <table class='table4'>
                                <tr>
                                    <td>
                                        <img width=18 height=18 src='/images/miscellaneous/money.gif' title='Золота'>
                                    </td>
                                    <td>
                                        <div id=d2503400 name=d2503400>35</div>
                                    </td>
                                </tr>
                            </table>
                            <form id=i2503400 name=i2503400 action="buy.php" method="POST" target=game_ref onsubmit='return checkCode(this);'>
                                <input type='hidden' name='good_id' value='2503400'>
                                <input type='hidden' name='shp_id' value='1001679'>
                                <input type='hidden' name='good_type' value='-1'>
                                <input type='hidden' name='price_quest' value=>
                                <input type='hidden' name='capCode' value=''>
                                <input class='text' type='text' onmouseover='this.style.backgroundImage="url(/images/buttons/text_1_18_s.gif)"' onmouseout='this.style.backgroundImage="url(/images/buttons/text_1_18.gif)"' name='number' value='1' size='3' maxlength='3' onKeyUp='chg_price( 2503400, 35, "", -1 )'>
                                &nbsp;
                                <button class='darkButton' type='submit'>
                                    <span>Купить</span>
                                </button>
                            </form>
                        </td>
                    </tr>
                    <tr>
                        <td style='text-align:center'>
                            <img title='Бутылочка&nbsp;Власти&nbsp;Дам' src="../images/items/potion_lady_03.gif" border=0 style='cursor: pointer; cursor: hand;' onClick="window.open('item_desc.php?id=2503410','_blank','scrollbars=yes,width=580,height=495,resizable=yes')">
                        </td>
                        <td>
                            (1)&nbsp;<b>Бутылочка &nbsp;Власти &nbsp;Дам</b>
                            <br>
                            <b>Уровень:&nbsp;3</b>
                            <table class='table4'>
                                <tr>
                                    <td>
                                        <img ALIGN=ABSMIDDLE width=20 height=20 src='/images/miscellaneous/mastery_l.gif' alt='Власть над Дамами' title='Власть над Дамами'>&nbsp;+1
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <img ALIGN=ABSMIDDLE width=20 height=20 src='/images/miscellaneous/time.gif' alt='Длительность (часы)' title='Длительность (часы)'>&nbsp;3
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <b>Нужно:</b>
                                        &nbsp;<img ALIGN=ABSMIDDLE width=20 height=20 src='/images/miscellaneous/strength.gif' alt='Сила' title='Сила'>&nbsp;3
                                    </td>
                                </tr>
                            </table>
                        </td>
                        <td>
                            <table class='table4'>
                                <tr>
                                    <td>
                                        <img width=18 height=18 src='/images/miscellaneous/money.gif' title='Золота'>
                                    </td>
                                    <td>
                                        <div id=d2503410 name=d2503410>40</div>
                                    </td>
                                </tr>
                            </table>
                            <form id=i2503410 name=i2503410 action="buy.php" method="POST" target=game_ref onsubmit='return checkCode(this);'>
                                <input type='hidden' name='good_id' value='2503410'>
                                <input type='hidden' name='shp_id' value='1001679'>
                                <input type='hidden' name='good_type' value='-1'>
                                <input type='hidden' name='price_quest' value=>
                                <input type='hidden' name='capCode' value=''>
                                <input class='text' type='text' onmouseover='this.style.backgroundImage="url(/images/buttons/text_1_18_s.gif)"' onmouseout='this.style.backgroundImage="url(/images/buttons/text_1_18.gif)"' name='number' value='1' size='3' maxlength='3' onKeyUp='chg_price( 2503410, 40, "", -1 )'>
                                &nbsp;
                                <button class='darkButton' type='submit'>
                                    <span>Купить</span>
                                </button>
                            </form>
                        </td>
                    </tr>
                    <tr>
                        <td style='text-align:center'>
                            <img title='Бутылочка&nbsp;Магии&nbsp;Света' src="../images/items/potion_light_03.gif" border=0 style='cursor: pointer; cursor: hand;' onClick="window.open('item_desc.php?id=2503430','_blank','scrollbars=yes,width=580,height=495,resizable=yes')">
                        </td>
                        <td>
                            (144)&nbsp;<b>Бутылочка &nbsp;Магии &nbsp;Света</b>
                            <br>
                            <b>Уровень:&nbsp;3</b>
                            <table class='table4'>
                                <tr>
                                    <td>
                                        <img ALIGN=ABSMIDDLE width=20 height=20 src='/images/miscellaneous/magic_h.gif' alt='Магия Света' title='Магия Света'>&nbsp;+1
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <img ALIGN=ABSMIDDLE width=20 height=20 src='/images/miscellaneous/time.gif' alt='Длительность (часы)' title='Длительность (часы)'>&nbsp;3
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <b>Нужно:</b>
                                        &nbsp;<img ALIGN=ABSMIDDLE width=20 height=20 src='/images/miscellaneous/intelligence.gif' alt='Ум' title='Ум'>&nbsp;3
                                    </td>
                                </tr>
                            </table>
                        </td>
                        <td>
                            <table class='table4'>
                                <tr>
                                    <td>
                                        <img width=18 height=18 src='/images/miscellaneous/money.gif' title='Золота'>
                                    </td>
                                    <td>
                                        <div id=d2503430 name=d2503430>55</div>
                                    </td>
                                </tr>
                            </table>
                            <form id=i2503430 name=i2503430 action="buy.php" method="POST" target=game_ref onsubmit='return checkCode(this);'>
                                <input type='hidden' name='good_id' value='2503430'>
                                <input type='hidden' name='shp_id' value='1001679'>
                                <input type='hidden' name='good_type' value='-1'>
                                <input type='hidden' name='price_quest' value=>
                                <input type='hidden' name='capCode' value=''>
                                <input class='text' type='text' onmouseover='this.style.backgroundImage="url(/images/buttons/text_1_18_s.gif)"' onmouseout='this.style.backgroundImage="url(/images/buttons/text_1_18.gif)"' name='number' value='1' size='3' maxlength='3' onKeyUp='chg_price( 2503430, 55, "", -1 )'>
                                &nbsp;
                                <button class='darkButton' type='submit'>
                                    <span>Купить</span>
                                </button>
                            </form>
                        </td>
                    </tr>
                    <tr>
                        <td style='text-align:center'>
                            <img title='Бутылочка&nbsp;Магии&nbsp;Хаоса' src="../images/items/potion_chaos_03.gif" border=0 style='cursor: pointer; cursor: hand;' onClick="window.open('item_desc.php?id=2503440','_blank','scrollbars=yes,width=580,height=495,resizable=yes')">
                        </td>
                        <td>
                            (25)&nbsp;<b>Бутылочка &nbsp;Магии &nbsp;Хаоса</b>
                            <br>
                            <b>Уровень:&nbsp;3</b>
                            <table class='table4'>
                                <tr>
                                    <td>
                                        <img ALIGN=ABSMIDDLE width=20 height=20 src='/images/miscellaneous/magic_c.gif' alt='Магия Хаоса' title='Магия Хаоса'>&nbsp;+1
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <img ALIGN=ABSMIDDLE width=20 height=20 src='/images/miscellaneous/time.gif' alt='Длительность (часы)' title='Длительность (часы)'>&nbsp;3
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <b>Нужно:</b>
                                        &nbsp;<img ALIGN=ABSMIDDLE width=20 height=20 src='/images/miscellaneous/intelligence.gif' alt='Ум' title='Ум'>&nbsp;3
                                    </td>
                                </tr>
                            </table>
                        </td>
                        <td>
                            <table class='table4'>
                                <tr>
                                    <td>
                                        <img width=18 height=18 src='/images/miscellaneous/money.gif' title='Золота'>
                                    </td>
                                    <td>
                                        <div id=d2503440 name=d2503440>37</div>
                                    </td>
                                </tr>
                            </table>
                            <form id=i2503440 name=i2503440 action="buy.php" method="POST" target=game_ref onsubmit='return checkCode(this);'>
                                <input type='hidden' name='good_id' value='2503440'>
                                <input type='hidden' name='shp_id' value='1001679'>
                                <input type='hidden' name='good_type' value='-1'>
                                <input type='hidden' name='price_quest' value=>
                                <input type='hidden' name='capCode' value=''>
                                <input class='text' type='text' onmouseover='this.style.backgroundImage="url(/images/buttons/text_1_18_s.gif)"' onmouseout='this.style.backgroundImage="url(/images/buttons/text_1_18.gif)"' name='number' value='1' size='3' maxlength='3' onKeyUp='chg_price( 2503440, 37, "", -1 )'>
                                &nbsp;
                                <button class='darkButton' type='submit'>
                                    <span>Купить</span>
                                </button>
                            </form>
                        </td>
                    </tr>
                    <tr>
                        <td style='text-align:center'>
                            <img title='Бутылочка&nbsp;Колдовства' src="../images/items/potion_magic_03.gif" border=0 style='cursor: pointer; cursor: hand;' onClick="window.open('item_desc.php?id=2503450','_blank','scrollbars=yes,width=580,height=495,resizable=yes')">
                        </td>
                        <td>
                            [52]&nbsp;<b>Бутылочка &nbsp;Колдовства</b>
                            <br>
                            <b>Уровень:&nbsp;3</b>
                            <table class='table4'>
                                <tr>
                                    <td>
                                        <img ALIGN=ABSMIDDLE width=20 height=20 src='/images/miscellaneous/magic_s.gif' alt='Колдовство' title='Колдовство'>&nbsp;+1
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <img ALIGN=ABSMIDDLE width=20 height=20 src='/images/miscellaneous/time.gif' alt='Длительность (часы)' title='Длительность (часы)'>&nbsp;3
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <b>Нужно:</b>
                                        &nbsp;<img ALIGN=ABSMIDDLE width=20 height=20 src='/images/miscellaneous/intelligence.gif' alt='Ум' title='Ум'>&nbsp;3
                                    </td>
                                </tr>
                            </table>
                        </td>
                        <td>
                            <table class='table4'>
                                <tr>
                                    <td>
                                        <img width=18 height=18 src='/images/miscellaneous/money.gif' title='Золота'>
                                    </td>
                                    <td>
                                        <div id=d2503450 name=d2503450>80</div>
                                    </td>
                                </tr>
                            </table>
                            <form id=i2503450 name=i2503450 action="buy.php" method="POST" target=game_ref onsubmit='return checkCode(this);'>
                                <input type='hidden' name='good_id' value='2503450'>
                                <input type='hidden' name='shp_id' value='1001679'>
                                <input type='hidden' name='good_type' value='-1'>
                                <input type='hidden' name='price_quest' value=>
                                <input type='hidden' name='capCode' value=''>
                                <input class='text' type='text' onmouseover='this.style.backgroundImage="url(/images/buttons/text_1_18_s.gif)"' onmouseout='this.style.backgroundImage="url(/images/buttons/text_1_18.gif)"' name='number' value='1' size='3' maxlength='3' onKeyUp='chg_price( 2503450, 80, "", -1 )'>
                                &nbsp;
                                <button class='darkButton' type='submit'>
                                    <span>Купить</span>
                                </button>
                            </form>
                        </td>
                    </tr>
                    <tr>
                        <td style='text-align:center'>
                            <img title='Бутылочка&nbsp;Ума' src="../images/items/potion_int_03.gif" border=0 style='cursor: pointer; cursor: hand;' onClick="window.open('item_desc.php?id=2503500','_blank','scrollbars=yes,width=580,height=495,resizable=yes')">
                        </td>
                        <td>
                            (114)&nbsp;<b>Бутылочка &nbsp;Ума</b>
                            <br>
                            <b>Уровень:&nbsp;3</b>
                            <table class='table4'>
                                <tr>
                                    <td>
                                        <img ALIGN=ABSMIDDLE width=20 height=20 src='/images/miscellaneous/intelligence.gif' alt='Ум' title='Ум'>&nbsp;+1
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <img ALIGN=ABSMIDDLE width=20 height=20 src='/images/miscellaneous/time.gif' alt='Длительность (часы)' title='Длительность (часы)'>&nbsp;3
                                    </td>
                                </tr>
                            </table>
                        </td>
                        <td>
                            <table class='table4'>
                                <tr>
                                    <td>
                                        <img width=18 height=18 src='/images/miscellaneous/money.gif' title='Золота'>
                                    </td>
                                    <td>
                                        <div id=d2503500 name=d2503500>38</div>
                                    </td>
                                </tr>
                            </table>
                            <form id=i2503500 name=i2503500 action="buy.php" method="POST" target=game_ref onsubmit='return checkCode(this);'>
                                <input type='hidden' name='good_id' value='2503500'>
                                <input type='hidden' name='shp_id' value='1001679'>
                                <input type='hidden' name='good_type' value='-1'>
                                <input type='hidden' name='price_quest' value=>
                                <input type='hidden' name='capCode' value=''>
                                <input class='text' type='text' onmouseover='this.style.backgroundImage="url(/images/buttons/text_1_18_s.gif)"' onmouseout='this.style.backgroundImage="url(/images/buttons/text_1_18.gif)"' name='number' value='1' size='3' maxlength='3' onKeyUp='chg_price( 2503500, 38, "", -1 )'>
                                &nbsp;
                                <button class='darkButton' type='submit'>
                                    <span>Купить</span>
                                </button>
                            </form>
                        </td>
                    </tr>
                    <tr>
                        <td style='text-align:center'>
                            <img title='Бутылочка&nbsp;Силы' src="../images/items/potion_str_03.gif" border=0 style='cursor: pointer; cursor: hand;' onClick="window.open('item_desc.php?id=2503510','_blank','scrollbars=yes,width=580,height=495,resizable=yes')">
                        </td>
                        <td>
                            (1)&nbsp;<b>Бутылочка &nbsp;Силы</b>
                            <br>
                            <b>Уровень:&nbsp;3</b>
                            <table class='table4'>
                                <tr>
                                    <td>
                                        <img ALIGN=ABSMIDDLE width=20 height=20 src='/images/miscellaneous/strength.gif' alt='Сила' title='Сила'>&nbsp;+1
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <img ALIGN=ABSMIDDLE width=20 height=20 src='/images/miscellaneous/time.gif' alt='Длительность (часы)' title='Длительность (часы)'>&nbsp;3
                                    </td>
                                </tr>
                            </table>
                        </td>
                        <td>
                            <table class='table4'>
                                <tr>
                                    <td>
                                        <img width=18 height=18 src='/images/miscellaneous/money.gif' title='Золота'>
                                    </td>
                                    <td>
                                        <div id=d2503510 name=d2503510>32</div>
                                    </td>
                                </tr>
                            </table>
                            <form id=i2503510 name=i2503510 action="buy.php" method="POST" target=game_ref onsubmit='return checkCode(this);'>
                                <input type='hidden' name='good_id' value='2503510'>
                                <input type='hidden' name='shp_id' value='1001679'>
                                <input type='hidden' name='good_type' value='-1'>
                                <input type='hidden' name='price_quest' value=>
                                <input type='hidden' name='capCode' value=''>
                                <input class='text' type='text' onmouseover='this.style.backgroundImage="url(/images/buttons/text_1_18_s.gif)"' onmouseout='this.style.backgroundImage="url(/images/buttons/text_1_18.gif)"' name='number' value='1' size='3' maxlength='3' onKeyUp='chg_price( 2503510, 32, "", -1 )'>
                                &nbsp;
                                <button class='darkButton' type='submit'>
                                    <span>Купить</span>
                                </button>
                            </form>
                        </td>
                    </tr>
                    <tr>
                        <td style='text-align:center'>
                            <img title='Рожок&nbsp;Силы&nbsp;Эффектов' src="../images/items/potion_mprot_01.gif" border=0 style='cursor: pointer; cursor: hand;' onClick="window.open('item_desc.php?id=2317','_blank','scrollbars=yes,width=580,height=495,resizable=yes')">
                        </td>
                        <td>
                            (1)&nbsp;<b>Рожок &nbsp;Силы &nbsp;Эффектов</b>
                            <br>
                            <b>Уровень:&nbsp;4</b>
                            <table class='table4'>
                                <tr>
                                    <td>
                                        <img ALIGN=ABSMIDDLE width=20 height=20 src='/images/miscellaneous/m_prot.gif' alt='Cила Эффектов' title='Cила Эффектов'>&nbsp;+2
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <img ALIGN=ABSMIDDLE width=20 height=20 src='/images/miscellaneous/time.gif' alt='Длительность (часы)' title='Длительность (часы)'>&nbsp;4
                                    </td>
                                </tr>
                            </table>
                        </td>
                        <td>
                            <table class='table4'>
                                <tr>
                                    <td>
                                        <img width=18 height=18 src='/images/miscellaneous/money.gif' title='Золота'>
                                    </td>
                                    <td>
                                        <div id=d2317 name=d2317>144</div>
                                    </td>
                                </tr>
                            </table>
                            <form id=i2317 name=i2317 action="buy.php" method="POST" target=game_ref onsubmit='return checkCode(this);'>
                                <input type='hidden' name='good_id' value='2317'>
                                <input type='hidden' name='shp_id' value='1001679'>
                                <input type='hidden' name='good_type' value='-1'>
                                <input type='hidden' name='price_quest' value=>
                                <input type='hidden' name='capCode' value=''>
                                <input class='text' type='text' onmouseover='this.style.backgroundImage="url(/images/buttons/text_1_18_s.gif)"' onmouseout='this.style.backgroundImage="url(/images/buttons/text_1_18.gif)"' name='number' value='1' size='3' maxlength='3' onKeyUp='chg_price( 2317, 144, "", -1 )'>
                                &nbsp;
                                <button class='darkButton' type='submit'>
                                    <span>Купить</span>
                                </button>
                            </form>
                        </td>
                    </tr>
                    <tr>
                        <td style='text-align:center'>
                            <img title='Мазь&nbsp;от&nbsp;Болотных&nbsp;Ловушек' src="../images/items/swamp_maz7.gif" border=0 style='cursor: pointer; cursor: hand;' onClick="window.open('item_desc.php?id=2177','_blank','scrollbars=yes,width=580,height=495,resizable=yes')">
                        </td>
                        <td>
                            (75)&nbsp;<b>Мазь &nbsp;от &nbsp;Болотных &nbsp;Ловушек</b>
                            <br>
                            <b>Уровень:&nbsp;6</b>
                            <table class='table4'>
                                <tr>
                                    <td>
                                        <img ALIGN=ABSMIDDLE width=20 height=20 src='/images/miscellaneous/time.gif' alt='Длительность (часы)' title='Длительность (часы)'>&nbsp;8
                                    </td>
                                </tr>
                            </table>
                        </td>
                        <td>
                            <table class='table4'>
                                <tr>
                                    <td>
                                        <img width=18 height=18 src='/images/miscellaneous/money.gif' title='Золота'>
                                    </td>
                                    <td>
                                        <div id=d2177 name=d2177>504</div>
                                    </td>
                                </tr>
                            </table>
                            <form id=i2177 name=i2177 action="buy.php" method="POST" target=game_ref onsubmit='return checkCode(this);'>
                                <input type='hidden' name='good_id' value='2177'>
                                <input type='hidden' name='shp_id' value='1001679'>
                                <input type='hidden' name='good_type' value='-1'>
                                <input type='hidden' name='price_quest' value=>
                                <input type='hidden' name='capCode' value=''>
                                <input class='text' type='text' onmouseover='this.style.backgroundImage="url(/images/buttons/text_1_18_s.gif)"' onmouseout='this.style.backgroundImage="url(/images/buttons/text_1_18.gif)"' name='number' value='1' size='3' maxlength='3' onKeyUp='chg_price( 2177, 504, "", -1 )'>
                                &nbsp;
                                <button class='darkButton' type='submit'>
                                    <span>Купить</span>
                                </button>
                            </form>
                        </td>
                    </tr>
                    <tr>
                        <td style='text-align:center'>
                            <img title='Мазь&nbsp;Путешественника' src="../images/items/swamp_maz8.gif" border=0 style='cursor: pointer; cursor: hand;' onClick="window.open('item_desc.php?id=2178','_blank','scrollbars=yes,width=580,height=495,resizable=yes')">
                        </td>
                        <td>
                            (50)&nbsp;<b>Мазь &nbsp;Путешественника</b>
                            <br>
                            <b>Уровень:&nbsp;6</b>
                            <table class='table4'>
                                <tr>
                                    <td>
                                        <img ALIGN=ABSMIDDLE width=20 height=20 src='/images/miscellaneous/speed.gif' alt='Скорость' title='Скорость'>&nbsp;+2
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <img ALIGN=ABSMIDDLE width=20 height=20 src='/images/miscellaneous/luck.gif' alt='Удача' title='Удача'>&nbsp;+1
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <img ALIGN=ABSMIDDLE width=20 height=20 src='/images/miscellaneous/time.gif' alt='Длительность (часы)' title='Длительность (часы)'>&nbsp;6
                                    </td>
                                </tr>
                            </table>
                        </td>
                        <td>
                            <table class='table4'>
                                <tr>
                                    <td>
                                        <img width=18 height=18 src='/images/miscellaneous/money.gif' title='Золота'>
                                    </td>
                                    <td>
                                        <div id=d2178 name=d2178>692</div>
                                    </td>
                                </tr>
                            </table>
                            <form id=i2178 name=i2178 action="buy.php" method="POST" target=game_ref onsubmit='return checkCode(this);'>
                                <input type='hidden' name='good_id' value='2178'>
                                <input type='hidden' name='shp_id' value='1001679'>
                                <input type='hidden' name='good_type' value='-1'>
                                <input type='hidden' name='price_quest' value=>
                                <input type='hidden' name='capCode' value=''>
                                <input class='text' type='text' onmouseover='this.style.backgroundImage="url(/images/buttons/text_1_18_s.gif)"' onmouseout='this.style.backgroundImage="url(/images/buttons/text_1_18.gif)"' name='number' value='1' size='3' maxlength='3' onKeyUp='chg_price( 2178, 692, "", -1 )'>
                                &nbsp;
                                <button class='darkButton' type='submit'>
                                    <span>Купить</span>
                                </button>
                            </form>
                        </td>
                    </tr>
                    <tr>
                        <td style='text-align:center'>
                            <img title='Бутылка&nbsp;Силы&nbsp;Эффектов' src="../images/items/potion_mprot_02.gif" border=0 style='cursor: pointer; cursor: hand;' onClick="window.open('item_desc.php?id=2318','_blank','scrollbars=yes,width=580,height=495,resizable=yes')">
                        </td>
                        <td>
                            (103)&nbsp;<b>Бутылка &nbsp;Силы &nbsp;Эффектов</b>
                            <br>
                            <b>Уровень:&nbsp;6</b>
                            <table class='table4'>
                                <tr>
                                    <td>
                                        <img ALIGN=ABSMIDDLE width=20 height=20 src='/images/miscellaneous/m_prot.gif' alt='Cила Эффектов' title='Cила Эффектов'>&nbsp;+3
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <img ALIGN=ABSMIDDLE width=20 height=20 src='/images/miscellaneous/time.gif' alt='Длительность (часы)' title='Длительность (часы)'>&nbsp;6
                                    </td>
                                </tr>
                            </table>
                        </td>
                        <td>
                            <table class='table4'>
                                <tr>
                                    <td>
                                        <img width=18 height=18 src='/images/miscellaneous/money.gif' title='Золота'>
                                    </td>
                                    <td>
                                        <div id=d2318 name=d2318>340</div>
                                    </td>
                                </tr>
                            </table>
                            <form id=i2318 name=i2318 action="buy.php" method="POST" target=game_ref onsubmit='return checkCode(this);'>
                                <input type='hidden' name='good_id' value='2318'>
                                <input type='hidden' name='shp_id' value='1001679'>
                                <input type='hidden' name='good_type' value='-1'>
                                <input type='hidden' name='price_quest' value=>
                                <input type='hidden' name='capCode' value=''>
                                <input class='text' type='text' onmouseover='this.style.backgroundImage="url(/images/buttons/text_1_18_s.gif)"' onmouseout='this.style.backgroundImage="url(/images/buttons/text_1_18.gif)"' name='number' value='1' size='3' maxlength='3' onKeyUp='chg_price( 2318, 340, "", -1 )'>
                                &nbsp;
                                <button class='darkButton' type='submit'>
                                    <span>Купить</span>
                                </button>
                            </form>
                        </td>
                    </tr>
                    <tr>
                        <td style='text-align:center'>
                            <img title='Бутылка&nbsp;Жизни' src="../images/items/potion_hp_06.gif" border=0 style='cursor: pointer; cursor: hand;' onClick="window.open('item_desc.php?id=2506010','_blank','scrollbars=yes,width=580,height=495,resizable=yes')">
                        </td>
                        <td>
                            (1)&nbsp;<b>Бутылка &nbsp;Жизни</b>
                            <br>
                            <b>Уровень:&nbsp;6</b>
                            <table class='table4'>
                                <tr>
                                    <td>
                                        <img ALIGN=ABSMIDDLE width=20 height=20 src='/images/miscellaneous/hp.gif' alt='Макс. Жизнь' title='Макс. Жизнь'>&nbsp;+18
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <img ALIGN=ABSMIDDLE width=20 height=20 src='/images/miscellaneous/time.gif' alt='Длительность (часы)' title='Длительность (часы)'>&nbsp;6
                                    </td>
                                </tr>
                            </table>
                        </td>
                        <td>
                            <table class='table4'>
                                <tr>
                                    <td>
                                        <img width=18 height=18 src='/images/miscellaneous/money.gif' title='Золота'>
                                    </td>
                                    <td>
                                        <div id=d2506010 name=d2506010>250</div>
                                    </td>
                                </tr>
                            </table>
                            <form id=i2506010 name=i2506010 action="buy.php" method="POST" target=game_ref onsubmit='return checkCode(this);'>
                                <input type='hidden' name='good_id' value='2506010'>
                                <input type='hidden' name='shp_id' value='1001679'>
                                <input type='hidden' name='good_type' value='-1'>
                                <input type='hidden' name='price_quest' value=>
                                <input type='hidden' name='capCode' value=''>
                                <input class='text' type='text' onmouseover='this.style.backgroundImage="url(/images/buttons/text_1_18_s.gif)"' onmouseout='this.style.backgroundImage="url(/images/buttons/text_1_18.gif)"' name='number' value='1' size='3' maxlength='3' onKeyUp='chg_price( 2506010, 250, "", -1 )'>
                                &nbsp;
                                <button class='darkButton' type='submit'>
                                    <span>Купить</span>
                                </button>
                            </form>
                        </td>
                    </tr>
                    <tr>
                        <td style='text-align:center'>
                            <img title='Бутылка&nbsp;Атаки&nbsp;Рыцарей' src="../images/items/potion_a_knight_06.gif" border=0 style='cursor: pointer; cursor: hand;' onClick="window.open('item_desc.php?id=2506050','_blank','scrollbars=yes,width=580,height=495,resizable=yes')">
                        </td>
                        <td>
                            (58)&nbsp;<b>Бутылка &nbsp;Атаки &nbsp;Рыцарей</b>
                            <br>
                            <b>Уровень:&nbsp;6</b>
                            <table class='table4'>
                                <tr>
                                    <td>
                                        <img ALIGN=ABSMIDDLE width=20 height=20 src='/images/miscellaneous/attack_k.gif' alt='Атака Рыцарей' title='Атака Рыцарей'>&nbsp;+6
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <img ALIGN=ABSMIDDLE width=20 height=20 src='/images/miscellaneous/time.gif' alt='Длительность (часы)' title='Длительность (часы)'>&nbsp;6
                                    </td>
                                </tr>
                            </table>
                        </td>
                        <td>
                            <table class='table4'>
                                <tr>
                                    <td>
                                        <img width=18 height=18 src='/images/miscellaneous/money.gif' title='Золота'>
                                    </td>
                                    <td>
                                        <div id=d2506050 name=d2506050>210</div>
                                    </td>
                                </tr>
                            </table>
                            <form id=i2506050 name=i2506050 action="buy.php" method="POST" target=game_ref onsubmit='return checkCode(this);'>
                                <input type='hidden' name='good_id' value='2506050'>
                                <input type='hidden' name='shp_id' value='1001679'>
                                <input type='hidden' name='good_type' value='-1'>
                                <input type='hidden' name='price_quest' value=>
                                <input type='hidden' name='capCode' value=''>
                                <input class='text' type='text' onmouseover='this.style.backgroundImage="url(/images/buttons/text_1_18_s.gif)"' onmouseout='this.style.backgroundImage="url(/images/buttons/text_1_18.gif)"' name='number' value='1' size='3' maxlength='3' onKeyUp='chg_price( 2506050, 210, "", -1 )'>
                                &nbsp;
                                <button class='darkButton' type='submit'>
                                    <span>Купить</span>
                                </button>
                            </form>
                        </td>
                    </tr>
                    <tr>
                        <td style='text-align:center'>
                            <img title='Бутылка&nbsp;Атаки&nbsp;Света' src="../images/items/potion_a_light_06.gif" border=0 style='cursor: pointer; cursor: hand;' onClick="window.open('item_desc.php?id=2506090','_blank','scrollbars=yes,width=580,height=495,resizable=yes')">
                        </td>
                        <td>
                            (18)&nbsp;<b>Бутылка &nbsp;Атаки &nbsp;Света</b>
                            <br>
                            <b>Уровень:&nbsp;6</b>
                            <table class='table4'>
                                <tr>
                                    <td>
                                        <img ALIGN=ABSMIDDLE width=20 height=20 src='/images/miscellaneous/attack_h.gif' alt='Атака Света' title='Атака Света'>&nbsp;+6
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <img ALIGN=ABSMIDDLE width=20 height=20 src='/images/miscellaneous/time.gif' alt='Длительность (часы)' title='Длительность (часы)'>&nbsp;6
                                    </td>
                                </tr>
                            </table>
                        </td>
                        <td>
                            <table class='table4'>
                                <tr>
                                    <td>
                                        <img width=18 height=18 src='/images/miscellaneous/money.gif' title='Золота'>
                                    </td>
                                    <td>
                                        <div id=d2506090 name=d2506090>550</div>
                                    </td>
                                </tr>
                            </table>
                            <form id=i2506090 name=i2506090 action="buy.php" method="POST" target=game_ref onsubmit='return checkCode(this);'>
                                <input type='hidden' name='good_id' value='2506090'>
                                <input type='hidden' name='shp_id' value='1001679'>
                                <input type='hidden' name='good_type' value='-1'>
                                <input type='hidden' name='price_quest' value=>
                                <input type='hidden' name='capCode' value=''>
                                <input class='text' type='text' onmouseover='this.style.backgroundImage="url(/images/buttons/text_1_18_s.gif)"' onmouseout='this.style.backgroundImage="url(/images/buttons/text_1_18.gif)"' name='number' value='1' size='3' maxlength='3' onKeyUp='chg_price( 2506090, 550, "", -1 )'>
                                &nbsp;
                                <button class='darkButton' type='submit'>
                                    <span>Купить</span>
                                </button>
                            </form>
                        </td>
                    </tr>
                    <tr>
                        <td style='text-align:center'>
                            <img title='Бутылка&nbsp;Атаки&nbsp;Колдовства' src="../images/items/potion_a_magic_06.gif" border=0 style='cursor: pointer; cursor: hand;' onClick="window.open('item_desc.php?id=2506100','_blank','scrollbars=yes,width=580,height=495,resizable=yes')">
                        </td>
                        <td>
                            (74)&nbsp;<b>Бутылка &nbsp;Атаки &nbsp;Колдовства</b>
                            <br>
                            <b>Уровень:&nbsp;6</b>
                            <table class='table4'>
                                <tr>
                                    <td>
                                        <img ALIGN=ABSMIDDLE width=20 height=20 src='/images/miscellaneous/attack_s.gif' alt='Атака Колдовства' title='Атака Колдовства'>&nbsp;+6
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <img ALIGN=ABSMIDDLE width=20 height=20 src='/images/miscellaneous/time.gif' alt='Длительность (часы)' title='Длительность (часы)'>&nbsp;6
                                    </td>
                                </tr>
                            </table>
                        </td>
                        <td>
                            <table class='table4'>
                                <tr>
                                    <td>
                                        <img width=18 height=18 src='/images/miscellaneous/money.gif' title='Золота'>
                                    </td>
                                    <td>
                                        <div id=d2506100 name=d2506100>481</div>
                                    </td>
                                </tr>
                            </table>
                            <form id=i2506100 name=i2506100 action="buy.php" method="POST" target=game_ref onsubmit='return checkCode(this);'>
                                <input type='hidden' name='good_id' value='2506100'>
                                <input type='hidden' name='shp_id' value='1001679'>
                                <input type='hidden' name='good_type' value='-1'>
                                <input type='hidden' name='price_quest' value=>
                                <input type='hidden' name='capCode' value=''>
                                <input class='text' type='text' onmouseover='this.style.backgroundImage="url(/images/buttons/text_1_18_s.gif)"' onmouseout='this.style.backgroundImage="url(/images/buttons/text_1_18.gif)"' name='number' value='1' size='3' maxlength='3' onKeyUp='chg_price( 2506100, 481, "", -1 )'>
                                &nbsp;
                                <button class='darkButton' type='submit'>
                                    <span>Купить</span>
                                </button>
                            </form>
                        </td>
                    </tr>
                    <tr>
                        <td style='text-align:center'>
                            <img title='Бутылка&nbsp;Концентрации' src="../images/items/potion_conc_06.gif" border=0 style='cursor: pointer; cursor: hand;' onClick="window.open('item_desc.php?id=2506310','_blank','scrollbars=yes,width=580,height=495,resizable=yes')">
                        </td>
                        <td>
                            (1)&nbsp;<b>Бутылка &nbsp;Концентрации</b>
                            <br>
                            <b>Уровень:&nbsp;6</b>
                            <table class='table4'>
                                <tr>
                                    <td>
                                        <img ALIGN=ABSMIDDLE width=20 height=20 src='/images/miscellaneous/conc.gif' alt='Концентрация' title='Концентрация'>&nbsp;+3
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <img ALIGN=ABSMIDDLE width=20 height=20 src='/images/miscellaneous/time.gif' alt='Длительность (часы)' title='Длительность (часы)'>&nbsp;6
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <b>Нужно:</b>
                                        &nbsp;<img ALIGN=ABSMIDDLE width=20 height=20 src='/images/miscellaneous/intelligence.gif' alt='Ум' title='Ум'>&nbsp;6
                                    </td>
                                </tr>
                            </table>
                        </td>
                        <td>
                            <table class='table4'>
                                <tr>
                                    <td>
                                        <img width=18 height=18 src='/images/miscellaneous/money.gif' title='Золота'>
                                    </td>
                                    <td>
                                        <div id=d2506310 name=d2506310>450</div>
                                    </td>
                                </tr>
                            </table>
                            <form id=i2506310 name=i2506310 action="buy.php" method="POST" target=game_ref onsubmit='return checkCode(this);'>
                                <input type='hidden' name='good_id' value='2506310'>
                                <input type='hidden' name='shp_id' value='1001679'>
                                <input type='hidden' name='good_type' value='-1'>
                                <input type='hidden' name='price_quest' value=>
                                <input type='hidden' name='capCode' value=''>
                                <input class='text' type='text' onmouseover='this.style.backgroundImage="url(/images/buttons/text_1_18_s.gif)"' onmouseout='this.style.backgroundImage="url(/images/buttons/text_1_18.gif)"' name='number' value='1' size='3' maxlength='3' onKeyUp='chg_price( 2506310, 450, "", -1 )'>
                                &nbsp;
                                <button class='darkButton' type='submit'>
                                    <span>Купить</span>
                                </button>
                            </form>
                        </td>
                    </tr>
                    <tr>
                        <td style='text-align:center'>
                            <img title='Бутылка&nbsp;Удачи' src="../images/items/potion_luck_06.gif" border=0 style='cursor: pointer; cursor: hand;' onClick="window.open('item_desc.php?id=2506330','_blank','scrollbars=yes,width=580,height=495,resizable=yes')">
                        </td>
                        <td>
                            (81)&nbsp;<b>Бутылка &nbsp;Удачи</b>
                            <br>
                            <b>Уровень:&nbsp;6</b>
                            <table class='table4'>
                                <tr>
                                    <td>
                                        <img ALIGN=ABSMIDDLE width=20 height=20 src='/images/miscellaneous/luck.gif' alt='Удача' title='Удача'>&nbsp;+2
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <img ALIGN=ABSMIDDLE width=20 height=20 src='/images/miscellaneous/time.gif' alt='Длительность (часы)' title='Длительность (часы)'>&nbsp;6
                                    </td>
                                </tr>
                            </table>
                        </td>
                        <td>
                            <table class='table4'>
                                <tr>
                                    <td>
                                        <img width=18 height=18 src='/images/miscellaneous/money.gif' title='Золота'>
                                    </td>
                                    <td>
                                        <div id=d2506330 name=d2506330>760</div>
                                    </td>
                                </tr>
                            </table>
                            <form id=i2506330 name=i2506330 action="buy.php" method="POST" target=game_ref onsubmit='return checkCode(this);'>
                                <input type='hidden' name='good_id' value='2506330'>
                                <input type='hidden' name='shp_id' value='1001679'>
                                <input type='hidden' name='good_type' value='-1'>
                                <input type='hidden' name='price_quest' value=>
                                <input type='hidden' name='capCode' value=''>
                                <input class='text' type='text' onmouseover='this.style.backgroundImage="url(/images/buttons/text_1_18_s.gif)"' onmouseout='this.style.backgroundImage="url(/images/buttons/text_1_18.gif)"' name='number' value='1' size='3' maxlength='3' onKeyUp='chg_price( 2506330, 760, "", -1 )'>
                                &nbsp;
                                <button class='darkButton' type='submit'>
                                    <span>Купить</span>
                                </button>
                            </form>
                        </td>
                    </tr>
                    <tr>
                        <td style='text-align:center'>
                            <img title='Бутылка&nbsp;Власти&nbsp;Рыцарей' src="../images/items/potion_knight_06.gif" border=0 style='cursor: pointer; cursor: hand;' onClick="window.open('item_desc.php?id=2506400','_blank','scrollbars=yes,width=580,height=495,resizable=yes')">
                        </td>
                        <td>
                            (110)&nbsp;<b>Бутылка &nbsp;Власти &nbsp;Рыцарей</b>
                            <br>
                            <b>Уровень:&nbsp;6</b>
                            <table class='table4'>
                                <tr>
                                    <td>
                                        <img ALIGN=ABSMIDDLE width=20 height=20 src='/images/miscellaneous/mastery_k.gif' alt='Власть над Рыцарями' title='Власть над Рыцарями'>&nbsp;+2
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <img ALIGN=ABSMIDDLE width=20 height=20 src='/images/miscellaneous/time.gif' alt='Длительность (часы)' title='Длительность (часы)'>&nbsp;6
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <b>Нужно:</b>
                                        &nbsp;<img ALIGN=ABSMIDDLE width=20 height=20 src='/images/miscellaneous/strength.gif' alt='Сила' title='Сила'>&nbsp;6
                                    </td>
                                </tr>
                            </table>
                        </td>
                        <td>
                            <table class='table4'>
                                <tr>
                                    <td>
                                        <img width=18 height=18 src='/images/miscellaneous/money.gif' title='Золота'>
                                    </td>
                                    <td>
                                        <div id=d2506400 name=d2506400>210</div>
                                    </td>
                                </tr>
                            </table>
                            <form id=i2506400 name=i2506400 action="buy.php" method="POST" target=game_ref onsubmit='return checkCode(this);'>
                                <input type='hidden' name='good_id' value='2506400'>
                                <input type='hidden' name='shp_id' value='1001679'>
                                <input type='hidden' name='good_type' value='-1'>
                                <input type='hidden' name='price_quest' value=>
                                <input type='hidden' name='capCode' value=''>
                                <input class='text' type='text' onmouseover='this.style.backgroundImage="url(/images/buttons/text_1_18_s.gif)"' onmouseout='this.style.backgroundImage="url(/images/buttons/text_1_18.gif)"' name='number' value='1' size='3' maxlength='3' onKeyUp='chg_price( 2506400, 210, "", -1 )'>
                                &nbsp;
                                <button class='darkButton' type='submit'>
                                    <span>Купить</span>
                                </button>
                            </form>
                        </td>
                    </tr>
                    <tr>
                        <td style='text-align:center'>
                            <img title='Бутылка&nbsp;Власти&nbsp;Дам' src="../images/items/potion_lady_06.gif" border=0 style='cursor: pointer; cursor: hand;' onClick="window.open('item_desc.php?id=2506410','_blank','scrollbars=yes,width=580,height=495,resizable=yes')">
                        </td>
                        <td>
                            (1)&nbsp;<b>Бутылка &nbsp;Власти &nbsp;Дам</b>
                            <br>
                            <b>Уровень:&nbsp;6</b>
                            <table class='table4'>
                                <tr>
                                    <td>
                                        <img ALIGN=ABSMIDDLE width=20 height=20 src='/images/miscellaneous/mastery_l.gif' alt='Власть над Дамами' title='Власть над Дамами'>&nbsp;+2
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <img ALIGN=ABSMIDDLE width=20 height=20 src='/images/miscellaneous/time.gif' alt='Длительность (часы)' title='Длительность (часы)'>&nbsp;6
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <b>Нужно:</b>
                                        &nbsp;<img ALIGN=ABSMIDDLE width=20 height=20 src='/images/miscellaneous/strength.gif' alt='Сила' title='Сила'>&nbsp;6
                                    </td>
                                </tr>
                            </table>
                        </td>
                        <td>
                            <table class='table4'>
                                <tr>
                                    <td>
                                        <img width=18 height=18 src='/images/miscellaneous/money.gif' title='Золота'>
                                    </td>
                                    <td>
                                        <div id=d2506410 name=d2506410>300</div>
                                    </td>
                                </tr>
                            </table>
                            <form id=i2506410 name=i2506410 action="buy.php" method="POST" target=game_ref onsubmit='return checkCode(this);'>
                                <input type='hidden' name='good_id' value='2506410'>
                                <input type='hidden' name='shp_id' value='1001679'>
                                <input type='hidden' name='good_type' value='-1'>
                                <input type='hidden' name='price_quest' value=>
                                <input type='hidden' name='capCode' value=''>
                                <input class='text' type='text' onmouseover='this.style.backgroundImage="url(/images/buttons/text_1_18_s.gif)"' onmouseout='this.style.backgroundImage="url(/images/buttons/text_1_18.gif)"' name='number' value='1' size='3' maxlength='3' onKeyUp='chg_price( 2506410, 300, "", -1 )'>
                                &nbsp;
                                <button class='darkButton' type='submit'>
                                    <span>Купить</span>
                                </button>
                            </form>
                        </td>
                    </tr>
                    <tr>
                        <td style='text-align:center'>
                            <img title='Бутылка&nbsp;Магии&nbsp;Света' src="../images/items/potion_light_06.gif" border=0 style='cursor: pointer; cursor: hand;' onClick="window.open('item_desc.php?id=2506430','_blank','scrollbars=yes,width=580,height=495,resizable=yes')">
                        </td>
                        <td>
                            (74)&nbsp;<b>Бутылка &nbsp;Магии &nbsp;Света</b>
                            <br>
                            <b>Уровень:&nbsp;6</b>
                            <table class='table4'>
                                <tr>
                                    <td>
                                        <img ALIGN=ABSMIDDLE width=20 height=20 src='/images/miscellaneous/magic_h.gif' alt='Магия Света' title='Магия Света'>&nbsp;+2
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <img ALIGN=ABSMIDDLE width=20 height=20 src='/images/miscellaneous/time.gif' alt='Длительность (часы)' title='Длительность (часы)'>&nbsp;6
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <b>Нужно:</b>
                                        &nbsp;<img ALIGN=ABSMIDDLE width=20 height=20 src='/images/miscellaneous/intelligence.gif' alt='Ум' title='Ум'>&nbsp;6
                                    </td>
                                </tr>
                            </table>
                        </td>
                        <td>
                            <table class='table4'>
                                <tr>
                                    <td>
                                        <img width=18 height=18 src='/images/miscellaneous/money.gif' title='Золота'>
                                    </td>
                                    <td>
                                        <div id=d2506430 name=d2506430>409</div>
                                    </td>
                                </tr>
                            </table>
                            <form id=i2506430 name=i2506430 action="buy.php" method="POST" target=game_ref onsubmit='return checkCode(this);'>
                                <input type='hidden' name='good_id' value='2506430'>
                                <input type='hidden' name='shp_id' value='1001679'>
                                <input type='hidden' name='good_type' value='-1'>
                                <input type='hidden' name='price_quest' value=>
                                <input type='hidden' name='capCode' value=''>
                                <input class='text' type='text' onmouseover='this.style.backgroundImage="url(/images/buttons/text_1_18_s.gif)"' onmouseout='this.style.backgroundImage="url(/images/buttons/text_1_18.gif)"' name='number' value='1' size='3' maxlength='3' onKeyUp='chg_price( 2506430, 409, "", -1 )'>
                                &nbsp;
                                <button class='darkButton' type='submit'>
                                    <span>Купить</span>
                                </button>
                            </form>
                        </td>
                    </tr>
                    <tr>
                        <td style='text-align:center'>
                            <img title='Бутылка&nbsp;Магии&nbsp;Хаоса' src="../images/items/potion_chaos_06.gif" border=0 style='cursor: pointer; cursor: hand;' onClick="window.open('item_desc.php?id=2506440','_blank','scrollbars=yes,width=580,height=495,resizable=yes')">
                        </td>
                        <td>
                            (25)&nbsp;<b>Бутылка &nbsp;Магии &nbsp;Хаоса</b>
                            <br>
                            <b>Уровень:&nbsp;6</b>
                            <table class='table4'>
                                <tr>
                                    <td>
                                        <img ALIGN=ABSMIDDLE width=20 height=20 src='/images/miscellaneous/magic_c.gif' alt='Магия Хаоса' title='Магия Хаоса'>&nbsp;+2
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <img ALIGN=ABSMIDDLE width=20 height=20 src='/images/miscellaneous/time.gif' alt='Длительность (часы)' title='Длительность (часы)'>&nbsp;6
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <b>Нужно:</b>
                                        &nbsp;<img ALIGN=ABSMIDDLE width=20 height=20 src='/images/miscellaneous/intelligence.gif' alt='Ум' title='Ум'>&nbsp;6
                                    </td>
                                </tr>
                            </table>
                        </td>
                        <td>
                            <table class='table4'>
                                <tr>
                                    <td>
                                        <img width=18 height=18 src='/images/miscellaneous/money.gif' title='Золота'>
                                    </td>
                                    <td>
                                        <div id=d2506440 name=d2506440>265</div>
                                    </td>
                                </tr>
                            </table>
                            <form id=i2506440 name=i2506440 action="buy.php" method="POST" target=game_ref onsubmit='return checkCode(this);'>
                                <input type='hidden' name='good_id' value='2506440'>
                                <input type='hidden' name='shp_id' value='1001679'>
                                <input type='hidden' name='good_type' value='-1'>
                                <input type='hidden' name='price_quest' value=>
                                <input type='hidden' name='capCode' value=''>
                                <input class='text' type='text' onmouseover='this.style.backgroundImage="url(/images/buttons/text_1_18_s.gif)"' onmouseout='this.style.backgroundImage="url(/images/buttons/text_1_18.gif)"' name='number' value='1' size='3' maxlength='3' onKeyUp='chg_price( 2506440, 265, "", -1 )'>
                                &nbsp;
                                <button class='darkButton' type='submit'>
                                    <span>Купить</span>
                                </button>
                            </form>
                        </td>
                    </tr>
                    <tr>
                        <td style='text-align:center'>
                            <img title='Бутылка&nbsp;Колдовства' src="../images/items/potion_magic_06.gif" border=0 style='cursor: pointer; cursor: hand;' onClick="window.open('item_desc.php?id=2506450','_blank','scrollbars=yes,width=580,height=495,resizable=yes')">
                        </td>
                        <td>
                            (60)&nbsp;<b>Бутылка &nbsp;Колдовства</b>
                            <br>
                            <b>Уровень:&nbsp;6</b>
                            <table class='table4'>
                                <tr>
                                    <td>
                                        <img ALIGN=ABSMIDDLE width=20 height=20 src='/images/miscellaneous/magic_s.gif' alt='Колдовство' title='Колдовство'>&nbsp;+2
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <img ALIGN=ABSMIDDLE width=20 height=20 src='/images/miscellaneous/time.gif' alt='Длительность (часы)' title='Длительность (часы)'>&nbsp;6
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <b>Нужно:</b>
                                        &nbsp;<img ALIGN=ABSMIDDLE width=20 height=20 src='/images/miscellaneous/intelligence.gif' alt='Ум' title='Ум'>&nbsp;6
                                    </td>
                                </tr>
                            </table>
                        </td>
                        <td>
                            <table class='table4'>
                                <tr>
                                    <td>
                                        <img width=18 height=18 src='/images/miscellaneous/money.gif' title='Золота'>
                                    </td>
                                    <td>
                                        <div id=d2506450 name=d2506450>450</div>
                                    </td>
                                </tr>
                            </table>
                            <form id=i2506450 name=i2506450 action="buy.php" method="POST" target=game_ref onsubmit='return checkCode(this);'>
                                <input type='hidden' name='good_id' value='2506450'>
                                <input type='hidden' name='shp_id' value='1001679'>
                                <input type='hidden' name='good_type' value='-1'>
                                <input type='hidden' name='price_quest' value=>
                                <input type='hidden' name='capCode' value=''>
                                <input class='text' type='text' onmouseover='this.style.backgroundImage="url(/images/buttons/text_1_18_s.gif)"' onmouseout='this.style.backgroundImage="url(/images/buttons/text_1_18.gif)"' name='number' value='1' size='3' maxlength='3' onKeyUp='chg_price( 2506450, 450, "", -1 )'>
                                &nbsp;
                                <button class='darkButton' type='submit'>
                                    <span>Купить</span>
                                </button>
                            </form>
                        </td>
                    </tr>
                    <tr>
                        <td style='text-align:center'>
                            <img title='Бутылка&nbsp;Ума' src="../images/items/potion_int_06.gif" border=0 style='cursor: pointer; cursor: hand;' onClick="window.open('item_desc.php?id=2506500','_blank','scrollbars=yes,width=580,height=495,resizable=yes')">
                        </td>
                        <td>
                            (49)&nbsp;<b>Бутылка &nbsp;Ума</b>
                            <br>
                            <b>Уровень:&nbsp;6</b>
                            <table class='table4'>
                                <tr>
                                    <td>
                                        <img ALIGN=ABSMIDDLE width=20 height=20 src='/images/miscellaneous/intelligence.gif' alt='Ум' title='Ум'>&nbsp;+2
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <img ALIGN=ABSMIDDLE width=20 height=20 src='/images/miscellaneous/time.gif' alt='Длительность (часы)' title='Длительность (часы)'>&nbsp;6
                                    </td>
                                </tr>
                            </table>
                        </td>
                        <td>
                            <table class='table4'>
                                <tr>
                                    <td>
                                        <img width=18 height=18 src='/images/miscellaneous/money.gif' title='Золота'>
                                    </td>
                                    <td>
                                        <div id=d2506500 name=d2506500>340</div>
                                    </td>
                                </tr>
                            </table>
                            <form id=i2506500 name=i2506500 action="buy.php" method="POST" target=game_ref onsubmit='return checkCode(this);'>
                                <input type='hidden' name='good_id' value='2506500'>
                                <input type='hidden' name='shp_id' value='1001679'>
                                <input type='hidden' name='good_type' value='-1'>
                                <input type='hidden' name='price_quest' value=>
                                <input type='hidden' name='capCode' value=''>
                                <input class='text' type='text' onmouseover='this.style.backgroundImage="url(/images/buttons/text_1_18_s.gif)"' onmouseout='this.style.backgroundImage="url(/images/buttons/text_1_18.gif)"' name='number' value='1' size='3' maxlength='3' onKeyUp='chg_price( 2506500, 340, "", -1 )'>
                                &nbsp;
                                <button class='darkButton' type='submit'>
                                    <span>Купить</span>
                                </button>
                            </form>
                        </td>
                    </tr>
                    <tr>
                        <td style='text-align:center'>
                            <img title='Бутылка&nbsp;Силы' src="../images/items/potion_str_06.gif" border=0 style='cursor: pointer; cursor: hand;' onClick="window.open('item_desc.php?id=2506510','_blank','scrollbars=yes,width=580,height=495,resizable=yes')">
                        </td>
                        <td>
                            (1)&nbsp;<b>Бутылка &nbsp;Силы</b>
                            <br>
                            <b>Уровень:&nbsp;6</b>
                            <table class='table4'>
                                <tr>
                                    <td>
                                        <img ALIGN=ABSMIDDLE width=20 height=20 src='/images/miscellaneous/strength.gif' alt='Сила' title='Сила'>&nbsp;+2
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <img ALIGN=ABSMIDDLE width=20 height=20 src='/images/miscellaneous/time.gif' alt='Длительность (часы)' title='Длительность (часы)'>&nbsp;6
                                    </td>
                                </tr>
                            </table>
                        </td>
                        <td>
                            <table class='table4'>
                                <tr>
                                    <td>
                                        <img width=18 height=18 src='/images/miscellaneous/money.gif' title='Золота'>
                                    </td>
                                    <td>
                                        <div id=d2506510 name=d2506510>278</div>
                                    </td>
                                </tr>
                            </table>
                            <form id=i2506510 name=i2506510 action="buy.php" method="POST" target=game_ref onsubmit='return checkCode(this);'>
                                <input type='hidden' name='good_id' value='2506510'>
                                <input type='hidden' name='shp_id' value='1001679'>
                                <input type='hidden' name='good_type' value='-1'>
                                <input type='hidden' name='price_quest' value=>
                                <input type='hidden' name='capCode' value=''>
                                <input class='text' type='text' onmouseover='this.style.backgroundImage="url(/images/buttons/text_1_18_s.gif)"' onmouseout='this.style.backgroundImage="url(/images/buttons/text_1_18.gif)"' name='number' value='1' size='3' maxlength='3' onKeyUp='chg_price( 2506510, 278, "", -1 )'>
                                &nbsp;
                                <button class='darkButton' type='submit'>
                                    <span>Купить</span>
                                </button>
                            </form>
                        </td>
                    </tr>
                    <tr>
                        <td style='text-align:center'>
                            <img title='Бутыль&nbsp;Силы&nbsp;Эффектов' src="../images/items/potion_mprot_03.gif" border=0 style='cursor: pointer; cursor: hand;' onClick="window.open('item_desc.php?id=2319','_blank','scrollbars=yes,width=580,height=495,resizable=yes')">
                        </td>
                        <td>
                            (11)&nbsp;<b>Бутыль &nbsp;Силы &nbsp;Эффектов</b>
                            <br>
                            <b>Уровень:&nbsp;8</b>
                            <table class='table4'>
                                <tr>
                                    <td>
                                        <img ALIGN=ABSMIDDLE width=20 height=20 src='/images/miscellaneous/m_prot.gif' alt='Cила Эффектов' title='Cила Эффектов'>&nbsp;+4
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <img ALIGN=ABSMIDDLE width=20 height=20 src='/images/miscellaneous/time.gif' alt='Длительность (часы)' title='Длительность (часы)'>&nbsp;8
                                    </td>
                                </tr>
                            </table>
                        </td>
                        <td>
                            <table class='table4'>
                                <tr>
                                    <td>
                                        <img width=18 height=18 src='/images/miscellaneous/money.gif' title='Золота'>
                                    </td>
                                    <td>
                                        <div id=d2319 name=d2319>1500</div>
                                    </td>
                                </tr>
                            </table>
                            <form id=i2319 name=i2319 action="buy.php" method="POST" target=game_ref onsubmit='return checkCode(this);'>
                                <input type='hidden' name='good_id' value='2319'>
                                <input type='hidden' name='shp_id' value='1001679'>
                                <input type='hidden' name='good_type' value='-1'>
                                <input type='hidden' name='price_quest' value=>
                                <input type='hidden' name='capCode' value=''>
                                <input class='text' type='text' onmouseover='this.style.backgroundImage="url(/images/buttons/text_1_18_s.gif)"' onmouseout='this.style.backgroundImage="url(/images/buttons/text_1_18.gif)"' name='number' value='1' size='3' maxlength='3' onKeyUp='chg_price( 2319, 1500, "", -1 )'>
                                &nbsp;
                                <button class='darkButton' type='submit'>
                                    <span>Купить</span>
                                </button>
                            </form>
                        </td>
                    </tr>
                    <tr>
                        <td style='text-align:center'>
                            <img title='Бутыль&nbsp;Атаки&nbsp;Света' src="../images/items/potion_a_light_08.gif" border=0 style='cursor: pointer; cursor: hand;' onClick="window.open('item_desc.php?id=2508090','_blank','scrollbars=yes,width=580,height=495,resizable=yes')">
                        </td>
                        <td>
                            (1)&nbsp;<b>Бутыль &nbsp;Атаки &nbsp;Света</b>
                            <br>
                            <b>Уровень:&nbsp;8</b>
                            <table class='table4'>
                                <tr>
                                    <td>
                                        <img ALIGN=ABSMIDDLE width=20 height=20 src='/images/miscellaneous/attack_h.gif' alt='Атака Света' title='Атака Света'>&nbsp;+8
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <img ALIGN=ABSMIDDLE width=20 height=20 src='/images/miscellaneous/time.gif' alt='Длительность (часы)' title='Длительность (часы)'>&nbsp;8
                                    </td>
                                </tr>
                            </table>
                        </td>
                        <td>
                            <table class='table4'>
                                <tr>
                                    <td>
                                        <img width=18 height=18 src='/images/miscellaneous/money.gif' title='Золота'>
                                    </td>
                                    <td>
                                        <div id=d2508090 name=d2508090>790</div>
                                    </td>
                                </tr>
                            </table>
                            <form id=i2508090 name=i2508090 action="buy.php" method="POST" target=game_ref onsubmit='return checkCode(this);'>
                                <input type='hidden' name='good_id' value='2508090'>
                                <input type='hidden' name='shp_id' value='1001679'>
                                <input type='hidden' name='good_type' value='-1'>
                                <input type='hidden' name='price_quest' value=>
                                <input type='hidden' name='capCode' value=''>
                                <input class='text' type='text' onmouseover='this.style.backgroundImage="url(/images/buttons/text_1_18_s.gif)"' onmouseout='this.style.backgroundImage="url(/images/buttons/text_1_18.gif)"' name='number' value='1' size='3' maxlength='3' onKeyUp='chg_price( 2508090, 790, "", -1 )'>
                                &nbsp;
                                <button class='darkButton' type='submit'>
                                    <span>Купить</span>
                                </button>
                            </form>
                        </td>
                    </tr>
                </table>
            </td>
            <td valign=top></td>
        </tr>
        <TABLE>
</div>
<script>

    function ge(a) {
        if (document.all)
            return document.all[a];
        else
            return document.getElementById(a);
    }

    var tn = parent.no_combat.store_result();
    tn = tn || "trade_main";
    parent.no_combat.document.getElementById(tn).innerHTML = ge('moo').innerHTML;
</script>

```