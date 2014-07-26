function Level(rank){
    this.level = [];
        this.level[0] = [
             [
                 0,0
             ]
         ];
         this.level[1] = [
             [
                 0,0
             ],
             [
                 0,1
             ]
         ];            
         this.level[2] = [
             [
                 0,1
             ],
             [
                 0,2
             ]
         ];            
         this.level[3] = [
             [
                 0,1,1
             ],
             [
                 0,2,0
             ]
         ];
         this.level[4] = [
             [
                 0,0,0
             ],
             [
                 0,0,0
             ]
         ];
         this.level[5] = [
             [
                 1,1,0,1
             ],
             [
                 0,0,0,0
             ]
         ];
         this.level[6] = [
             [
                 1,1,0,1
             ],
             [
                 0,0,0,0
             ],
             [
                 1,1,0,1
             ]
         ];
         this.level[7] = [
             [
                 1,1,0,1
             ],
             [
                 0,0,0,0
             ],
             [
                 1,1,0,1
             ]
         ];
         this.level[8] = [
             [
                 1,1,0,1
             ],
             [
                 0,0,0,0
             ],
             [
                 1,1,0,1
             ]
         ];
         this.level[9] = [
             [
                 1,1,0,1
             ],
             [
                 0,0,0,0
             ],
             [
                 1,1,0,1
             ]
         ];
         this.level[10] = [
             [
                 1,1,0,1
             ],
             [
                 0,0,0,0
             ],
             [
                 1,1,0,1
             ]
         ];
         this.level[11] = [
             [
                 1,1,0,1
             ],
             [
                 0,0,0,0
             ],
             [
                 1,1,0,1
             ]
         ];
    if(rank > this.level.length)
        return this.level[this.level.length - 1];
    return this.level[rank-1];
}