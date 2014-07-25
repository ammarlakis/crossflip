function GameManager(level){
    //this.score = score;
    generateGame(1);
}
function generateGame(level){
    var text = '\
<?xml version="1.0" encoding="UTF-8"?>\
<matrix>\
   <row>\
      <tile value="off" />\
      <tile value="off" />\
      <tile value="on" />\
   </row>\
   <row>\
      <tile value="off" />\
      <tile value="null" />\
      <tile value="on" />\
   </row>\
</matrix>';

    var xml = $.parseXML(text).getElementsByTagName('row');
    console.log('xml is ');
    console.log(xml);
    
    /*
    var levelXml = new DOMParser().parseFromString(text,'text/xml');
    var test = levelXml.getElementsByTagName('matrix');
    var arr = [];
    for(var key in test){
        arr.push([]);
        var nodes = test[key].childNodes;
        for(var ele in nodes){
            arr[key].push(node[ele]);
        }
        //console.log(arr);
        //console.log(key);
    }*/
    var matrix = [,];
    for (var row in xml){
        var tiles = xml[row].childNodes;
        tiles = normalizeXml(tiles);
        console.log(tiles);
        for(var i = 0;){
            console.log(tiles[tile]);
            console.log(tiles[tile].getAttribute('value'));
        }
    }
}
function normalizeXml(xml){
    for(var key in xml){
        if(xml[key].nodeName == '#text'){
            xml[key].parentNode.removeChild(xml[key]);
        }
    }
    return xml;
}

var game = '<div onclick="flip(this);" id="myid" class="box active small" style="-webkit-transition: 0ms 2000ms; transition: 0ms 2000ms;"></div>';
    $(game).appendTo('body');