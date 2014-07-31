function Level(rank){
    this.level = [];
        this.level[0] = {
            maxMoves:10,
            grid: [
             [
                 0,0
             ]
         ]};
         this.level[1] = {
            maxMoves:10,
            grid: [
             [
                 0,0
             ],
             [
                 0,1
             ]
         ]};            
         this.level[2] = {
            maxMoves:10,
            grid: [
             [
                 0,1
             ],
             [
                 0,2
             ]
         ]};            
         this.level[3] = {
            maxMoves:10,
            grid: [
             [
                 0,1,1
             ],
             [
                 0,2,0
             ]
         ]};
         this.level[4] = {
            maxMoves:10,
            grid: [
             [
                 0,0,0
             ],
             [
                 0,0,0
             ]
         ]};
         this.level[5] = {
            maxMoves:10,
            grid: [
             [
                 1,1,0,1
             ],
             [
                 0,0,0,0
             ]
         ]};
         this.level[6] = {
            maxMoves:10,
            grid: [
             [
                 1,1,0,1
             ],
             [
                 0,0,0,0
             ],
             [
                 1,1,0,1
             ]
         ]};
         this.level[7] = {
            maxMoves:10,
            grid: [
             [
                 1,1,0,1
             ],
             [
                 0,0,0,0
             ],
             [
                 1,1,0,1
             ]
         ]};
         this.level[8] = {
            maxMoves:10,
            grid: [
             [
                 1,1,0,1
             ],
             [
                 0,0,0,0
             ],
             [
                 1,1,0,1
             ]
         ]};
         this.level[9] = {
            maxMoves:10,
            grid: [
             [
                 1,1,0,1
             ],
             [
                 0,0,0,0
             ],
             [
                 1,1,0,1
             ]
         ]};
         this.level[10] = {
            maxMoves:10,
            grid: [
             [
                 1,1,0,1
             ],
             [
                 0,0,0,0
             ],
             [
                 1,1,0,1
             ]
         ]};
         this.level[11] = {
            maxMoves:10,
            grid: [
             [
                 1,1,0,1
             ],
             [
                 0,0,0,0
             ],
             [
                 1,1,0,1
             ]
         ]};
    if(rank > this.level.length)
        return this.level[this.level.length - 1];
    return this.level[rank-1];
}