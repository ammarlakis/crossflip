
$(document).ready(function(){
    new GameManager();
    var game = '<div onclick="flip(this);" id="myid" class="box active small" style="-webkit-transition: 0ms 2000ms; transition: 0ms 2000ms;"></div>';
    $(game).appendTo('body');
});