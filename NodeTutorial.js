var Tutor=require('./Tutorial.js');

var _pTutor = function() {
    console.log("Node Tutorial")
    var PTutor=Tutor
    PTutor.tutorial();
};

module.exports = {
    pTutor : _pTutor
};
