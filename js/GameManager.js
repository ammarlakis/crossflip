var activeColor = 'rgba(255, 255, 0, 0.7)';
var nactiveColor= 'rgba(50, 50, 0, 0.2)';
var modes = ['nactive','active','disabled'];
function GameManager(){
    this.score = 0;
    this.moves = 0;
    // Read level
    this.levelRank = 1;
    this.level = new Level(this.levelRank);
    // Resize container where 82 is one cell width and height
    //generate game in html
    this.generateGame = function (){
        //update with score
        if (gameManager.score == 0){
            gameManager.updateScore(0);
        }
        //reset moves counter for every game
        this.moves = 0;
        //change moves counter
        $('#movesCounter').html('Moves: ' + this.moves + '/' + this.level.maxMoves);
        //initialize game grid
        var grid = this.level.grid;
        //hide gameoverBoard
        $('#gameoverBoard').css({
            opacity: 0,
            visibility: 'hidden',
            '-webkit-transition': '',
            transition: ''
        });
        //disable gameoverBoard
        $('#gameoverBoard').attr('onclick','');
        //resize gamegrid based on level grid size
        $('#gameGrid').css('height',grid.length * 82);
        $('#gameGrid').css('width',grid[0].length * 82);
        //reset game html content
        var game = '';
        // loop on every level matrix element and add html tile element with coressponding id and flip function
        for(var row = 0; row < grid.length; row++){
            for(var col = 0; col < grid[row].length; col++){
                var flipFunc = grid[row][col] == 2 ? '' : 'gameManager.flip(this);'
                game += '<div onclick="' + flipFunc + '" id="t'+row+'-'+col+'" class="box small '+modes[grid[row][col]]+'" style="-webkit-transition: 0ms 2000ms; transition: 0ms 2000ms;"></div>' + "\n";
            }
            game += "\n";
        }
        // add generated html to container div block
        $('div#gameGrid').empty();
        $(game).appendTo('div#gameGrid');
    }
    // flip tile after pressed
    this.flip = function (e){
        //check if moves have exceed
        if (this.moves >= this.level.maxMoves){
            //reset the game
            gameManager.levelRank = 0;
            gameManager.score = 0;
            //disable all the boxes
            $('.box').attr('onclick','');
            //enable and display gameoverBoard
            $('#gameoverBoard').css({
                opacity: 100,
                visibility: 'visible',
                '-webkit-transition': 'opacity 2s ease-in-out',
                transition: 'opacity 2s ease-in-out'
            });
            $('#gameoverBoard').html('Gameover !');
            //move to the next level
            $('#gameoverBoard').attr('onclick','gameManager.nextLevel()');
            return;
        }
        //add 1 to moves counter
        this.moves ++;
        //update moves counter  
        $('#movesCounter').html('Moves: ' + this.moves + '/' + this.level.maxMoves);
        //flip that tile color
        flipColor(e);
        //and corresponding vertical and horizonal tiles
        flipTiles(e);
        //flip single tile function
        setTimeout(function(){
            //after changing color, check if game is over
            if (gameManager.checkIfWin()){
                //disable all the boxes
                $('.box').attr('onclick','');
                //enable and display gameoverBoard
                $('#gameoverBoard').css({
                    opacity: 100,
                    visibility: 'visible',
                    '-webkit-transition': 'opacity 2s ease-in-out',
                    transition: 'opacity 2s ease-in-out'
                });
                //move to the next level
                $('#gameoverBoard').attr('onclick','gameManager.nextLevel()');
                $('#gameoverBoard').html('Next Level >>');
                //add score
                gameManager.updateScore(gameManager.level.maxMoves - gameManager.moves);
            }
        },350);
        function flipColor(e){
            // change its color
            $(e).css({
                transition: 'background-color 0.2s ease-in-out',
                "backgournd-color": e.classList.contains('active')? nactiveColor:activeColor
            });
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
            
            var grid = gameManager.level.grid;
            // flip the tile
            grid[nrow][ncol] = 1 - grid[nrow][ncol];
            //iterate and flip down the tiles
            for(var row = nrow + 1; (row < grid.length) && (grid[row][ncol] != 2); row++){
                flipColor($('#'+'t'+row+'-'+ncol)[0]);
                grid[row][ncol] = 1 - grid[row][ncol];
            }
            //iterate and flip up the tiles
            for(var row = nrow - 1; (row >= 0) && (grid[row][ncol] != 2); row--){
                flipColor($('#'+'t'+row+'-'+ncol)[0]);
                grid[row][ncol] = 1 - grid[row][ncol];
            }
            //iterate and flip right the tiles
            for(var col = ncol + 1; (col < grid[nrow].length) && (grid[nrow][col] != 2); col++){
                flipColor($('#'+'t'+nrow+'-'+col)[0]);
                grid[nrow][col] = 1 - grid[nrow][col];
            }
            //iterate and flip left the tiles
            for(var col = ncol - 1; (col >= 0) && (grid[nrow][col] != 2); col--){
                flipColor($('#'+'t'+nrow+'-'+col)[0]);
                grid[nrow][col] = 1 - grid[nrow][col];
            }
        }
    }
    // check if game is over
    this.checkIfWin = function (){
        //iterate on level matrix and check if any tile is not activated
        for(var row = 0; row < this.level.grid.length; row++){
            for(var col = 0; col < this.level.grid[row].length; col++){
                if(this.level.grid[row][col] == 0)
                    return false
            }
        }
        return true;
    }
    this.updateScore = function (scoreAdded){
        this.score += scoreAdded;
        $('#scoreboard').html(this.score);
    }
    this.nextLevel = function (){
        this.levelRank++;
        this.level = new Level(this.levelRank);
        this.generateGame();
    }
}