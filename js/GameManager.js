var activeColor = 'yellow';
var nactiveColor= 'grey';
function GameManager(){
    this.level = [
        [
            0,0,1
        ],
        [
            0,1,0
        ]
    ];
    this.generateGame = function (){
        var game = '';
        var modes = [];
        modes[0] = 'nactive';
        modes[1] = 'active';
        for(var row = 0; row < this.level.length; row++){
            for(var col = 0; col < this.level[row].length; col++){
                game += '<div onclick="gameManager.flip(this);" id="'+row+'-'+col+'" class="box small '+modes[this.level[row][col]]+'" style="-webkit-transition: 0ms 2000ms; transition: 0ms 2000ms;"></div>' + "\n";
            }
            game += '<br />' + "\n";
        }
        $(game).appendTo('body');
    }
    this.flip = function flip(e){
        console.log(e);
        move(e)
        .set('background-color',e.classList.contains('active')? nactiveColor:activeColor)
        .delay('0.1s')
        .end();
        if (e.classList.contains('active')){
            e.classList.remove('active'); e.classList.add('nactive');
        } else {
            e.classList.remove('nactive'); e.classList.add('active');
        }
        var match = e.getAttribute('id').match(/\d+/g);
        var nrow = parseInt(match[0], 10);
        var ncol = parseInt(match[1], 10);
        this.level[nrow][ncol] = 1 - this.level[nrow][ncol];

        if (this.checkIfWin())
            alert('you won !');
        function getTarget(e){
            e=e||window.event;
            return (e.target||e.srcElement);
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