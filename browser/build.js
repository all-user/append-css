require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"append-css":[function(require,module,exports){
// Generated by CoffeeScript 1.9.1
(function() {
  var _init, appendCSS, styleEle;

  styleEle = null;

  _init = function() {
    styleEle = document.createElement('style');
    return document.head.appendChild(styleEle);
  };

  appendCSS = function(rule) {
    var sheet;
    sheet = styleEle.sheet;
    sheet.insertRule(rule, sheet.cssRules.length);
    return styleEle;
  };

  appendCSS.reset = function() {
    document.head.removeChild(styleEle);
    return _init();
  };

  _init();

  module.exports = appendCSS;

}).call(this);

},{}]},{},[]);