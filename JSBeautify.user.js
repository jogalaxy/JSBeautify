// ==UserScript==
// @name         Leek Wars JS Beautify
// @namespace    Editor
// @downloadURL  https://raw.githubusercontent.com/jogalaxy/JSBeautify/master/JSBeautify.user.js
// @updateURL    https://raw.githubusercontent.com/jogalaxy/JSBeautify/master/JSBeautify.user.js
// @version      0.2
// @description  Améliore la refonte du code de l'éditeur
// @author       jojo123
// @match        http://leekwars.com/editor
// @grant        none
// ==/UserScript==

function embed() {
	var oldFunc = window.js_beautify;

	window.js_beautify = function(sourceCode)
	{
		return oldFunc(sourceCode, {
			'indent_size': 1,
			'indent_char': '\t',
			'jslint_happy' : true,
			'brace_style' : 'expand',
			'space_before_conditional' : true, // false : pour supprimer l'espace entre "if" et la condition => if(condition)
		});
	};

}

var inject = document.createElement("script");

inject.setAttribute("type", "text/javascript");
inject.appendChild(document.createTextNode("(" + embed + ")()"));

document.body.appendChild(inject);
