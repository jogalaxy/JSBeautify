// ==UserScript==
// @name         Leek Wars JS Beautify
// @namespace    Editor
// @downloadURL  https://raw.githubusercontent.com/jogalaxy/JSBeautify/master/JSBeautify.user.js
// @updateURL    https://raw.githubusercontent.com/jogalaxy/JSBeautify/master/JSBeautify.user.js
// @version      0.1
// @description  Améliore la refonte du code de l'éditeur
// @author       jojo123
// @match        http://leekwars.com/editor
// @grant        none
// ==/UserScript==

var js_beautify_back = js_beautify;

js_beautify = function(sourceCode)
{
    return js_beautify_back(sourceCode, {
        'indent_size': 1,
        'indent_char': '\t',
        'jslint_happy' : true,
        'brace_style' : 'expand',
        'space_before_conditional' : true, // false : pour supprimer l'espace entre "if" et la condition => if(condition)
    });
}
