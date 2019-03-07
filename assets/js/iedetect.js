/**
 * detect IE
 * returns version of IE or false, if browser is not Internet Explorer
 *
 * ccurtin/Detect-if-IE.js
 * https://gist.github.com/ccurtin
*/

(function detectIE() {
    var ua = window.navigator.userAgent;

    var msie = ua.indexOf('MSIE ');
    if (msie > 0) {
        // IE 10 or older => return version number
        var ieV = parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
        document.querySelector('body').className += ' ie';
    }

    var trident = ua.indexOf('Trident/');
    if (trident > 0) {
        // IE 11 => return version number
        var rv = ua.indexOf('rv:');
        var ieV = parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
        document.querySelector('body').className += ' ie';
    }

    var edge = ua.indexOf('Edge/');
    if (edge > 0) {
       // IE 12 (aka Edge) => return version number
       var ieV = parseInt(ua.substring(edge + 5, ua.indexOf('.', edge)), 10);
        document.querySelector('body').className += ' ie';
    }

    // other browser
    return false;
})();