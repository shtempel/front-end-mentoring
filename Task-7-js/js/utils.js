'use strict';

APP.utils = (function () {
    var util;
    util = {
        calculating: function (string) {
            var regExpPattern = /\-?\d+(\.\d+)?|[\+,\-,\*,\/,\=]{1}/ig,
                    arr,
                    result = 0;

            arr = string.match(regExpPattern);

            if (arr[0] * 1 + "" !== NaN) {
                result += arr[0] * 1;
            }

            for (var i = 0; i < arr.length; i++) {
                switch (arr[i]) {
                    case "+":
                        result += arr[i + 1] * 1;
                        break;
                    case "-":
                        result -= arr[i + 1] * 1;
                        break;
                    case "*":
                        result *= arr[i + 1] * 1;
                        break;
                    case "/":
                        result /= arr[i + 1] * 1;
                        break;
                    case "=":
                        break;
                    default:
                        continue;
                        break;
                }
            }
            return result;
        },
        
        removeChars: function (string) {
            var regExpPattern = /[^\s,\.,\,,\:,\;,\!,\?]+/gi,
                    result = string,
                    firstWord = "",
                    arr;

            if (!/[^\s,\.,\,,\:,\;,\!,\?]+/i.test(result)) {
                return result;
            }
            
            arr = string.match(regExpPattern);
            if (arr.length === 1) {
                return result;
            }
            
            firstWord = arr[0];
            for (var t = 0; t < firstWord.length; t++) {
                var searchMatching = new RegExp(firstWord[t], "i");
                var count = 0;

                for (var i = 0; i < arr.length; i++) {
                    if (searchMatching.test(arr[i])) {
                        count++;
                    }
                    if (count === arr.length) {
                        result = result.replace(new RegExp(firstWord[t], "gi"), "");
                    }
                }
            }
            return result;
        }
    };

    return util;
})();