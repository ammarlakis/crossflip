var activeColor = 'rgba(255, 255, 0, 0.7)';
var nactiveColor= 'rgba(50, 50, 0, 0.2)';
var modes = ['nactive','active','disabled'];
function GameManager(){
    // Read level
    this.levelRank = 1;
    this.level = new Level(this.levelRank);
    // Resize container where 82 is one cell width and height
    //generate game in html
    this.generateGame = function (){
        $('.container').css('height',this.level.length * 82);
        $('.container').css('width',this.level[0].length * 82);
        var game = '';
        // loop on every level matrix element and add html tile element with coressponding id and flip function
        for(var row = 0; row < this.level.length; row++){
            for(var col = 0; col < this.level[row].length; col++){
                var flipFunc = this.level[row][col] == 2 ? '' : 'gameManager.flip(this);'
                game += '<div onclick="' + flipFunc + '" id="t'+row+'-'+col+'" class="box small '+modes[this.level[row][col]]+'" style="-webkit-transition: 0ms 2000ms; transition: 0ms 2000ms;"></div>' + "\n";
            }
            game += "\n";
        }
        // add generated html to container div block
        $('div.container').empty();
        $(game).appendTo('div.container');
    }
    // flip tile after pressed
    this.flip = function (e){
        //console.log(e);
        //flip that tile color
        flipColor(e);
        //and corresponding vertical and horizonal tiles
        flipTiles(e);
        //show message when game is over
        if (this.checkIfWin()){
            alert('you won !');
            this.nextLevel();
        }
        //flip single tile function
        function flipColor(e){
            //console.log(e)
            // change its color
            move(e)
            .set('background-color',e.classList.contains('active')? nactiveColor:activeColor)
            .delay('0.1s')
            .end();
            // change class
            if ($(e).hasClass('active')){
                $(e).removeClass('active'); $(e).addClass('nactive');
            } else {
                $(e).removeClass('nactive'); $(e).addClass('active');
            }
        }
        // flip vertical and horizonal tiles around a tile
        function flipTiles(e){
            // get tile indecies
            var match = e.getAttribute('id').match(/\d+/g);
            var nrow = parseInt(match[0], 10);
            var ncol = parseInt(match[1], 10);
            
            var level = gameManager.level;
            //console.log(level[nrow][ncol]);
            // flip the tile
            level[nrow][ncol] = 1 - level[nrow][ncol];
            //iterate and flip down the tiles
            for(var row = nrow + 1; (row < level.length) && (level[row][ncol] != 2); row++){
                console.log('flipping down');
                flipColor($('#'+'t'+row+'-'+ncol)[0]);
                level[row][ncol] = 1 - level[row][ncol];
            }
            //iterate and flip up the tiles
            for(var row = nrow - 1; (row >= 0) && (level[row][ncol] != 2); row--){
                console.log('flipping up');
                flipColor($('#'+'t'+row+'-'+ncol)[0]);
                level[row][ncol] = 1 - level[row][ncol];
            }
            //iterate and flip right the tiles
            for(var col = ncol + 1; (col < level[nrow].length) && (level[nrow][col] != 2); col++){
                console.log('flipping right');
                flipColor($('#'+'t'+nrow+'-'+col)[0]);
                level[nrow][col] = 1 - level[nrow][col];
            }
            //iterate and flip left the tiles
            for(var col = ncol - 1; (col >= 0) && (level[nrow][col] != 2); col--){
                console.log('flipping left');
                flipColor($('#'+'t'+nrow+'-'+col)[0]);
                level[nrow][col] = 1 - level[nrow][col];
            }
        }
    }
    // check if game is over
    this.checkIfWin = function (){
        //iterate on level matrix and check if any tile is not activated
        for(var row = 0; row < this.level.length; row++){
            for(var col = 0; col < this.level[row].length; col++){
                if(this.level[row][col] == 0)
                    return false
            }
        }
        return true;
    }
    this.nextLevel = function (){
        this.levelRank++;
        this.level = new Level(this.levelRank);
        this.generateGame();
    }
}