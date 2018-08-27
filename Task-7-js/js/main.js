'use strict';

APP.main = (function () {

    var utils = APP.utils,
            templ = APP.templates,
            calcButtonId = $("#calc-btn"),
            stringFieldOne = $("#string-field-one"),
            removeBtnId = $("#remove-btn"),
            stringFieldTwo = $("#string-field-two");

    calcButtonId.click(function () {
        if (stringFieldOne.val() === '' || stringFieldOne.val().match(/\+,\-,\*\//gi)) {
            return;
        } else {
            templ.calcResult(stringFieldOne.val(), utils.calculating(stringFieldOne.val()));
            stringFieldOne.val('');
        }
    });

    removeBtnId.click(function () {

        if (stringFieldTwo.val() === '' || stringFieldTwo.val().match(/\+,\-,\*\//gi)) {
            return;
        } else {
            templ.removeCharResult(stringFieldTwo.val(), utils.removeChars(stringFieldTwo.val()));
            stringFieldTwo.val('');
        }
    });

    templ.calcResult("3.5 землекопа +4 поросенка *10 рублей - 5.5 $ /5 человек =", utils.calculating("3.5 землекопа +4 поросенка *10 рублей - 5.5 $ /5 человек ="));
    templ.calcResult("7+7*2=ёжик", utils.calculating("7+7*2=ёжик"));

    templ.removeCharResult("Чего-с изволите-с?Барин-с!", utils.removeChars("Чего-с изволите-с?Барин-с!"));
    templ.removeCharResult("!??слово!плов олово$$$!", utils.removeChars("!??слово!плов олово$$$!"));

})();