var activeColor = 'yellow';
var nactiveColor= 'grey';
var modes = [];
modes[0] = 'nactive';
modes[1] = 'active';
modes[2] = 'disabled';
function GameManager(){
    this.level = [
        [
            1,1,1,2,2,1,2
        ],
        [
            1,1,1,2,1,1,1
        ],
        [
            0,0,0,0,0
        ]
    ];
    this.generateGame = function (){
        var game = '';
        for(var row = 0; row < this.level.length; row++){
            for(var col = 0; col < this.level[row].length; col++){
                var flipFunc = this.level[row][col] == 2 ? '' : 'gameManager.flip(this);'
                game += '<div onclick="' + flipFunc + '" id="t'+row+'-'+col+'" class="box small '+modes[this.level[row][col]]+'" style="-webkit-transition: 0ms 2000ms; transition: 0ms 2000ms;"></div>' + "\n";
            }
            game += '<br />' + '<br />' + '<br />' + "\n";
        }
        $(game).appendTo('div.container');
    }
    this.flip = function flip(e){
        //console.log(e);
        flipColor(e);
        flipTiles(e);
        if (this.checkIfWin())
            alert('you won !');
        
        function flipColor(e){
            //console.log(e)
            move(e)
            .set('background-color',e.classList.contains('active')? nactiveColor:activeColor)
            .delay('0.1s')
            .end();
            if ($(e).hasClass('active')){
                $(e).removeClass('active'); $(e).addClass('nactive');
            } else {
                $(e).removeClass('nactive'); $(e).addClass('active');
            }
        }
        function flipTiles(e){
            var match = e.getAttribute('id').match(/\d+/g);
            var nrow = parseInt(match[0], 10);
            var ncol = parseInt(match[1], 10);
            var level = gameManager.level;
            //console.log(level[nrow][ncol]);
            level[nrow][ncol] = 1 - level[nrow][ncol];
            for(var row = nrow; (row < level.length) && (level[row][ncol] != 2); row++){
                flipColor($('#'+'t'+row+'-'+ncol)[0]);
                level[row][ncol] = 1 - level[row][ncol];
            }
            for(var row = nrow; (row >= 0) && (level[row][ncol] != 2); row--){
                flipColor($('#'+'t'+row+'-'+ncol)[0]);
                level[row][ncol] = 1 - level[row][ncol];
            }
            for(var col = ncol; (col < level[nrow].length) && (level[nrow][col] != 2); col++){
                flipColor($('#'+'t'+nrow+'-'+col)[0]);
                level[nrow][col] = 1 - level[nrow][col];
            }
            for(var col = ncol; (col >= 0) && (level[nrow][col] != 2); col--){
                flipColor($('#'+'t'+nrow+'-'+col)[0]);
                level[nrow][col] = 1 - level[nrow][col];
            }
        }
    }
    this.checkIfWin = function checkIfWin(){
        for(var row = 0; row < this.level.length; row++){
            for(var col = 0; col < this.level[row].length; col++){
                if(this.level[row][col] == 0)
                    return false
            }
        }
        return true;
    }
}