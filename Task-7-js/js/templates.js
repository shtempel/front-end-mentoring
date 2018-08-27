'use strict';

APP.templates = (function () {
    var outputDivOne = $('.output-body-part-one');
    var outputDivTwo = $('.output-body-part-two');
    var outputDivThree = $('.output-body-part-three');

    var outputTemplate = {
        calcResult: function (before, after) {
            outputDivOne.append($('<div></div>', {class: 'result-div'})
                    .append($('<label></label>').addClass("before").text(before))
                    .append($('<label></label>').addClass("after").text(after)));
        },

        removeCharResult: function (before, after) {
            outputDivTwo.append($('<div></div>', {class: 'result-div'})
                    .append($('<label>adasdasdas</label>').addClass("before").text(before))
                    .append($('<label>asdasdasdasdas</label>').addClass("after").text(after)));
        }
    };

    return outputTemplate;

})();