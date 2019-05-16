"use strict";

var _getName = function() {
    return 'john';
};

var _myName = function() {
    return _getName();
};

module.exports = {
    getName : _getName,
    myName : _myName
};
