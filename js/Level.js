function Level(rank){
    this.level = [
{ 
maxMoves: 6,
grid: [
[0,0],
[0,0]
]
},
{ 
maxMoves: 4,
grid: [
[2,1],
[1,0]
]
},
{ 
maxMoves: 3,
grid: [
[1,1,0],
[0,0,0]
]
},
{ 
maxMoves: 3,
grid: [
[1,0,0],
[1,2,2]
]
},
{ 
maxMoves: 6,
grid: [
[1,0,2],
[2,0,1]
]
},
{ 
maxMoves: 6,
grid: [
[0,1,1],
[1,0,1]
]
},
{ 
maxMoves: 8,
grid: [
[1,2,1],
[0,1,0]
]
},
{ 
maxMoves: 12,
grid: [
[0,0,0,0],
[0,0,0,0]
]
},
{ 
maxMoves: 12,
grid: [
[0,0,1,1],
[0,0,2,2]
]
},
{ 
maxMoves: 6,
grid: [
[0,1,1,0],
[0,2,2,1]
]
},
{
maxMoves: 12,
grid: [
[0,1,2,0],
[0,1,1,1]
]
},
{ 
maxMoves: 6,
grid: [
[1,0,0,0],
[1,2,0,1]
]
},
{ 
maxMoves: 25,
grid: [
[1,1,0,0,0],
[0,1,1,0,0],
[1,0,0,0,1],
[1,0,1,0,0]
]
},
{ 
maxMoves: 22,
grid: [
[1,0,0,0,0,1],
[0,0,1,1,1,0],
[0,1,0,0,0,1],
[0,1,1,1,1,1]
]
},
{ 
maxMoves: 24,
grid: [
[0,1,0,1,0,0,1],
[0,1,1,0,1,0,0],
[1,1,0,0,0,1,0],
[0,0,0,1,0,1,1]
]
},
{ 
maxMoves: 28,
grid: [
[0,1,0,0,1,1,1,1],
[0,0,0,0,1,1,0,1],
[0,1,1,1,0,0,1,0],
[1,1,0,0,0,0,0,0]
]
}
//,
//{ 
//maxMoves: 30,
//grid: [
//[0,0,0,0,0,1,0,0,0],
//[1,0,0,1,1,0,1,0,1],
//[0,0,1,0,0,0,0,1,1],
//[1,1,0,1,1,0,1,0,0]
//]
//},
//{ 
//maxMoves: 7,
//grid: [
//[0,0],
//[0,1],
//[1,1],
//[0,1],
//[1,1]
//]
//},
//{ 
//maxMoves: 9,
//grid: [
//[1,0,1],
//[1,0,1],
//[1,1,0],
//[1,0,1],
//[0,1,1]
//]
//},
//{ 
//maxMoves: 16,
//grid: [
//[0,1,1,1],
//[0,0,0,0],
//[1,0,0,1],
//[1,1,1,0],
//[0,0,0,0]
//]
//},
//{ 
//maxMoves: 22,
//grid: [
//[0,1,1,0,1],
//[0,1,1,0,1],
//[1,0,0,1,1],
//[1,0,0,1,1],
//[1,1,1,1,1]
//]
//},
//{ 
//maxMoves: 25,
//grid: [
//[1,0,1,1,0,1],
//[0,0,0,1,0,1],
//[1,1,0,0,1,0],
//[1,0,1,0,1,1],
//[1,1,0,0,0,1]
//]
//},
//{ 
//maxMoves: 29,
//grid: [
//[1,0,0,1,0,0,0],
//[1,0,1,0,0,1,1],
//[0,0,0,1,0,0,1],
//[0,1,0,1,0,1,1],
//[0,1,1,1,0,0,1]
//]
//},
//{ 
//maxMoves: 34,
//grid: [
//[0,0,1,1,1,1,1,1],
//[0,0,1,0,0,1,0,0],
//[1,1,1,0,0,0,1,1],
//[1,1,1,0,0,1,1,0],
//[0,0,0,1,1,1,1,0]
//]
//},
//{ 
//maxMoves: 37,
//grid: [
//[1,1,1,1,0,1,0,0,0],
//[0,0,0,1,1,1,1,1,0],
//[0,1,1,1,0,0,0,0,0],
//[1,1,1,0,0,0,0,0,0],
//[1,0,0,0,0,1,0,0,1]
//]
//},
//{ 
//maxMoves: 8,
//grid: [
//[0,1],
//[0,1],
//[0,0],
//[0,0],
//[0,1],
//[0,1]
//]
//},
//{ 
//maxMoves: 14,
//grid: [
//[0,1,1],
//[0,0,0],
//[1,1,0],
//[0,1,1],
//[1,0,1],
//[0,1,1]
//]
//},
//{ 
//maxMoves: 23,
//grid: [ 
//[1,1,1,0],
//[0,1,0,1],
//[1,1,1,0],
//[1,1,1,0],
//[1,1,1,0],
//[0,1,0,0]
//]
//},
//{ 
//maxMoves: 27,
//grid: [
//[0,0,0,1,1],
//[1,0,0,1,0],
//[1,0,0,0,1],
//[1,0,0,1,0],
//[1,0,0,1,0],
//[0,1,1,0,0]
//]
//},
//{ 
//maxMoves: 35,
//grid: [
//[1,0,1,0,1,0],
//[1,0,1,0,1,0],
//[1,1,1,0,1,1],
//[0,0,0,1,0,1],
//[0,0,0,1,0,1],
//[1,1,1,1,1,0]
//]
//},
//{ 
//maxMoves: 34,
//grid: [
//[0,1,1,1,0,0,1],
//[0,1,0,1,1,1,0],
//[0,0,0,0,0,1,1],
//[1,1,1,1,0,0,0],
//[1,1,0,0,1,1,0],
//[1,0,1,0,0,1,1]
//]
//},
//{ 
//maxMoves: 44,
//grid: [
//[0,0,1,1,1,0,1,0],
//[1,0,1,1,0,0,1,0],
//[1,0,1,1,1,1,1,0],
//[0,1,1,0,0,0,0,1],
//[0,1,0,1,0,1,1,1],
//[1,0,1,1,1,1,1,0]
//]
//},
//{ 
//maxMoves: 49,
//grid: [
//[0,1,1,0,0,1,0,0,1],
//[0,1,0,0,0,1,1,0,1],
//[0,1,1,0,0,1,1,0,0],
//[0,1,0,1,0,1,1,0,0],
//[0,1,0,1,0,1,1,0,0],
//[1,1,1,1,1,1,0,1,1]
//]
//},
//{ 
//maxMoves: 13,
//grid: [
//[1,1],
//[1,1],
//[1,0],
//[1,0],
//[1,1],
//[1,1],
//[1,1]
//]
//},
//{ 
//maxMoves: 19,
//grid: [
//[1,1,1],
//[1,1,1],
//[1,1,1],
//[0,1,0],
//[1,1,1],
//[1,0,0],
//[0,0,1]
//]
//},
//{ 
//maxMoves: 22,
//grid: [
//[0,1,1,0],
//[0,0,1,0],
//[0,1,0,0],
//[0,0,0,1],
//[0,0,1,0],
//[0,1,0,0],
//[1,0,0,0]
//]
//},
//{ 
//maxMoves: 29,
//grid: [
//[1,0,0,0,1],
//[1,0,1,0,0],
//[0,0,0,0,0],
//[1,1,1,1,0],
//[1,1,0,1,1],
//[0,0,0,0,0],
//[0,0,0,0,0]
//]
//},
//{ 
//maxMoves: 37,
//grid: [
//[0,1,1,0,0,1],
//[0,0,1,0,0,0],
//[0,0,1,0,0,0],
//[1,1,0,1,1,0],
//[1,1,1,1,1,1],
//[1,0,1,0,0,1],
//[0,0,0,1,1,0]
//]
//},
//{ 
//maxMoves: 44,
//grid: [
//[1,0,0,1,1,1,1],
//[1,0,0,1,0,0,1],
//[1,0,1,0,1,1,1],
//[0,1,1,1,0,0,0],
//[0,1,1,0,0,1,0],
//[1,0,0,0,0,1,1],
//[1,1,0,0,1,1,1]
//]
//},
//{ 
//maxMoves: 39,
//grid: [
//[1,1,1,1,0,1,0,0],
//[0,0,1,0,1,0,1,0],
//[1,1,0,0,0,1,1,1],
//[1,1,1,0,1,0,0,1],
//[0,1,0,1,0,0,0,1],
//[0,1,1,0,0,0,0,1],
//[0,0,1,1,1,1,1,1]
//]
//},
//{ 
//maxMoves: 58,
//grid: [
//[1,1,0,0,0,0,1,0,1],
//[0,0,1,1,0,1,0,1,0],
//[1,1,0,1,1,0,1,0,1],
//[1,0,0,1,1,0,0,1,0],
//[0,1,0,0,0,0,1,1,1],
//[0,1,0,0,1,0,1,0,1],
//[1,0,1,1,1,1,0,1,0]
//]
//},
//{ 
//maxMoves: 16,
//grid: [
//[1,0],
//[1,1],
//[1,0],
//[1,0],
//[1,0],
//[1,0],
//[1,0],
//[1,0]
//]
//},
//{ 
//maxMoves: 18,
//grid: [
//[1,1,0],
//[0,0,0],
//[0,0,0],
//[0,0,0],
//[0,0,0],
//[1,0,1],
//[1,0,1],
//[0,1,1]
//]
//},
//{ 
//maxMoves: 26,
//grid: [
//[0,0,1,1],
//[1,0,0,0],
//[1,1,1,0],
//[0,1,1,0],
//[1,0,1,0],
//[0,0,1,1],
//[0,1,0,0],
//[1,1,0,1]
//]
//},
//{ 
//maxMoves: 37,
//grid: [
//[0,0,0,1,0],
//[0,0,0,1,0],
//[0,0,0,1,0],
//[1,0,1,0,1],
//[0,0,0,1,0],
//[1,1,1,0,0],
//[1,0,0,1,1],
//[0,0,1,1,1]
//]
//},
//{ 
//maxMoves: 45,
//grid: [
//[0,1,1,1,1,0],
//[1,0,0,0,0,0],
//[0,1,0,0,1,0],
//[0,0,0,0,0,1],
//[1,0,0,1,0,1],
//[1,0,0,1,0,1],
//[1,0,0,1,0,1],
//[0,1,0,0,1,0]
//]
//},
//{ 
//maxMoves: 46,
//grid: [
//[0,0,0,1,0,1,1],
//[1,1,1,1,0,1,0],
//[1,0,1,0,1,0,0],
//[0,1,1,0,1,0,0],
//[0,1,1,0,1,0,0],
//[1,1,1,1,1,0,0],
//[0,1,0,0,0,1,1],
//[0,0,0,1,1,1,0]
//]
//},
//{ 
//maxMoves: 57,
//grid: [
//[1,1,1,0,0,0,0,0],
//[1,1,1,1,0,0,0,1],
//[0,0,0,1,0,1,1,1],
//[1,1,1,1,1,0,0,0],
//[1,1,1,0,1,1,0,0],
//[0,1,0,1,1,0,0,0],
//[0,0,1,1,0,1,0,1],
//[0,1,1,0,1,0,0,0]
//]
//},
//{ 
//maxMoves: 64,
//grid: [
//[1,1,1,0,1,1,0,0,1],
//[0,1,0,1,0,0,1,1,0],
//[1,1,1,1,1,0,0,0,1],
//[0,0,0,1,0,1,1,1,0],
//[1,0,0,1,0,0,1,1,0],
//[1,0,1,1,1,1,1,0,0],
//[0,1,1,0,1,1,0,0,0],
//[1,1,1,1,1,1,0,1,1]
//]
//},
//{ 
//maxMoves: 18,
//grid: [
//[1,0],
//[1,0],
//[1,0],
//[1,0],
//[1,0],
//[0,0],
//[1,0],
//[1,0],
//[1,0]
//]
//},
//{ 
//maxMoves: 27,
//grid: [
//[1,0,1],
//[1,1,0],
//[0,1,1],
//[1,1,0],
//[1,1,0],
//[1,1,0],
//[1,1,0],
//[1,1,0],
//[1,1,0]
//]
//},
//{ 
//maxMoves: 31,
//grid: [
//[1,1,1,1],
//[0,0,1,0],
//[0,0,1,0],
//[0,0,1,0],
//[1,1,0,0],
//[1,1,1,1],
//[0,1,0,1],
//[0,1,1,1],
//[1,1,0,0]
//]
//},
//{ 
//maxMoves: 37,
//grid: [
//[0,0,0,0,1],
//[0,0,1,1,1],
//[1,1,0,1,0],
//[1,0,0,1,1],
//[0,0,1,0,0],
//[0,1,0,0,0],
//[1,1,0,0,1],
//[1,1,0,1,0],
//[1,1,1,1,1]
//]
//},
//{ 
//maxMoves: 49,
//grid: [
//[1,1,0,0,0,0],
//[0,1,0,0,1,1],
//[0,0,0,1,1,1],
//[1,1,1,0,0,1],
//[0,1,1,1,0,1],
//[0,0,0,1,1,1],
//[0,0,0,1,1,1],
//[1,1,1,0,1,0],
//[1,1,1,0,1,0]
//]
//},
//{ 
//maxMoves: 60,
//grid: [
//[1,0,0,0,0,1,0],
//[0,1,0,0,0,1,0],
//[0,1,1,1,0,1,0],
//[1,0,0,0,0,1,0],
//[1,0,0,0,0,1,0],
//[0,1,1,1,1,0,0],
//[1,0,0,0,0,1,0],
//[0,0,1,1,1,0,1],
//[0,1,1,1,0,0,1]
//]
//},
//{ 
//maxMoves: 59,
//grid: [
//[0,0,1,0,1,1,1,0],
//[1,1,0,1,0,0,0,0],
//[1,1,1,0,1,1,0,1],
//[0,0,1,0,1,0,0,0],
//[0,0,0,0,0,1,1,0],
//[1,1,0,1,0,0,0,0],
//[1,1,1,1,1,0,0,0],
//[0,0,1,1,1,1,0,0],
//[1,1,0,1,0,1,1,0]
//]
//},
//{ 
//maxMoves: 70,
//grid: [
//[0,0,0,0,0,1,0,0,0],
//[0,1,1,1,0,1,0,0,1],
//[1,0,0,0,1,0,0,1,0],
//[0,1,1,1,0,1,0,0,1],
//[1,0,1,1,1,0,0,1,0],
//[1,0,0,0,1,0,0,1,0],
//[1,0,1,0,1,1,0,1,0],
//[0,0,0,1,0,0,1,0,1],
//[1,1,1,1,1,1,0,1,0]
//]
//},
//{ 
//maxMoves: 2,
//grid: [
//[1,1],
//[2,0]
//]
//},
//{ 
//maxMoves: 4,
//grid: [
//[0,1,2],
//[0,0,1]
//]
//},
//{ 
//maxMoves: 6,
//grid: [
//[1,1,2,1],
//[0,1,1,0]
//]
//},
//{ 
//maxMoves: 8,
//grid: [
//[1,0,0,0,2],
//[0,0,0,0,1]
//]
//},
//{ 
//maxMoves: 9,
//grid: [
//[2,1,0,0,0,0],
//[0,0,1,1,1,1]
//]
//},
//{ 
//maxMoves: 7,
//grid: [
//[1,1,0,0,1,1,0],
//[0,1,1,2,0,1,1]
//]
//},
//{ 
//maxMoves: 12,
//grid: [
//[0,1,1,1,1,1,1,2],
//[0,0,1,1,0,0,0,1]
//]
//},
//{ 
//maxMoves: 16,
//grid: [
//[0,1,1,0,1,1,1,0,1],
//[2,0,0,0,0,0,0,0,0]
//]
//},
//{ 
//maxMoves: 1,
//grid: [
//[2,0],
//[0,0],
//[1,0]
//]
//},
//{ 
//maxMoves: 7,
//grid: [
//[2,0,1],
//[1,1,0],
//[0,1,1]
//]
//},
//{ 
//maxMoves: 7,
//grid: [
//[0,0,2,0],
//[1,0,0,0],
//[0,1,0,1]
//]
//},
//{ 
//maxMoves: 11,
//grid: [
//[1,2,1,0,0],
//[1,1,1,1,1],
//[0,0,1,0,0]
//]
//},
//{ 
//maxMoves: 14,
//grid: [
//[0,0,0,0,0,0],
//[2,0,1,1,0,1],
//[0,0,1,1,0,1]
//]
//},
//{ 
//maxMoves: 20,
//grid: [
//[1,1,2,1,1,0,1],
//[0,0,1,0,0,1,0],
//[1,1,0,1,1,1,1]
//]
//},
//{ 
//maxMoves: 24,
//grid: [
//[1,1,0,1,1,1,1,1],
//[0,0,0,0,2,0,0,0],
//[1,1,0,1,1,1,1,1]
//]
//},
//{ 
//maxMoves: 18,
//grid: [
//[1,1,1,1,0,1,0,1,2],
//[1,0,0,0,1,1,1,0,0],
//[0,1,1,1,1,0,1,1,0]
//]
//},
//{ 
//maxMoves: 5,
//grid: [
//[0,0],
//[0,1],
//[1,0],
//[0,1]
//]
//},
//{ 
//maxMoves: 12,
//grid: [
//[0,0,2],
//[1,1,0],
//[1,1,0],
//[1,1,0]
//]
//},
//{ 
//maxMoves: 14,
//grid: [
//[2,1,0,1],
//[1,0,0,0],
//[0,0,1,0],
//[0,0,1,0]
//]
//},
//{ 
//maxMoves: 19,
//grid: [
//[0,0,0,2,1],
//[1,0,1,0,1],
//[1,0,1,0,1],
//[1,0,1,0,1]
//]
//},
//{ 
//maxMoves: 22,
//grid: [
//[1,1,1,0,1,1],
//[0,0,0,1,1,0],
//[0,0,2,0,0,1],
//[0,0,1,0,1,0]
//]
//},
//{ 
//maxMoves: 26,
//grid: [
//[1,1,1,0,1,0,0],
//[0,0,0,0,0,0,0],
//[0,0,0,1,0,1,2],
//[1,1,1,0,1,0,0]
//]
//},
//{ 
//maxMoves: 29,
//grid: [
//[0,1,1,0,0,0,1,1],
//[0,0,0,1,1,1,0,0],
//[1,0,0,1,1,0,0,0],
//[0,0,0,0,0,1,0,0]
//]
//},
//{ 
//maxMoves: 30,
//grid: [
//[0,0,1,0,1,0,1,0,0],
//[0,1,0,1,0,1,1,0,1],
//[0,1,0,1,0,1,0,1,1],
//[0,0,2,0,0,0,1,0,0]
//]
//},
//{ 
//maxMoves: 5,
//grid: [
//[0,1],
//[1,1],
//[0,2],
//[1,1],
//[0,0]
//]
//},
//{ 
//maxMoves: 8,
//grid: [
//[1,1,0],
//[0,0,0],
//[2,1,0],
//[1,0,0],
//[1,1,1]
//]
//},
//{ 
//maxMoves: 15,
//grid: [
//[2,1,1,0],
//[0,0,0,1],
//[1,0,1,0],
//[0,0,0,0],
//[1,0,1,0]
//]
//},
//{ 
//maxMoves: 18,
//grid: [
//[0,1,1,0,1],
//[1,2,1,1,0],
//[0,1,1,1,0],
//[0,0,1,1,1],
//[0,1,1,0,1]
//]
//},
//{ 
//maxMoves: 28,
//grid: [
//[0,2,1,1,0,0],
//[1,0,1,0,1,1],
//[0,1,0,0,0,0],
//[1,0,1,0,1,1],
//[0,1,1,1,0,0]
//]
//},
//{ 
//maxMoves: 34,
//grid: [
//[0,1,1,0,1,1,1],
//[0,0,2,0,1,1,1],
//[0,0,1,1,1,1,1],
//[1,0,1,0,1,1,1],
//[1,1,0,1,0,0,0]
//]
//},
//{ 
//maxMoves: 33,
//grid: [
//[0,2,1,0,1,0,1,1],
//[0,1,1,0,0,0,0,1],
//[1,0,0,1,0,1,1,0],
//[0,1,0,0,0,1,1,0],
//[1,0,0,1,1,0,1,0]
//]
//},
//{ 
//maxMoves: 41,
//grid: [
//[1,0,1,0,0,1,1,0,1],
//[0,1,1,1,1,1,0,0,0],
//[1,0,1,0,0,1,1,1,2],
//[0,1,0,1,1,0,1,1,0],
//[1,1,0,1,1,0,0,1,0]
//]
//},
//{ 
//maxMoves: 11,
//grid: [
//[0,1],
//[1,1],
//[0,1],
//[0,1],
//[2,0],
//[1,1]
//]
//},
//{ 
//maxMoves: 13,
//grid: [
//[1,0,0],
//[1,1,1],
//[0,2,1],
//[0,1,1],
//[1,0,1],
//[1,1,0]
//]
//},
//{ 
//maxMoves: 20,
//grid: [
//[1,0,0,0],
//[1,0,1,1],
//[1,2,1,1],
//[0,1,1,1],
//[0,1,1,1],
//[0,1,1,1]
//]
//},
//{ 
//maxMoves: 22,
//grid: [
//[1,1,1,0,1],
//[1,1,1,0,1],
//[0,1,0,0,1],
//[1,1,1,0,1],
//[1,0,2,0,0],
//[1,1,0,0,1]
//]
//},
//{ 
//maxMoves: 36,
//grid: [
//[0,2,1,0,0,0],
//[1,1,1,0,0,0],
//[1,1,1,0,0,0],
//[0,0,1,1,1,1],
//[1,0,0,1,1,1],
//[1,1,1,0,0,0]
//]
//},
//{ 
//maxMoves: 33,
//grid: [
//[1,0,0,1,1,0,1],
//[0,0,1,1,1,1,0],
//[0,1,0,0,1,1,1],
//[1,0,1,0,0,0,0],
//[2,0,1,1,0,1,1],
//[0,1,1,0,1,1,0]
//]
//},
//{ 
//maxMoves: 37,
//grid: [
//[0,1,0,0,0,0,0,1],
//[0,0,0,1,0,1,0,1],
//[0,1,1,1,1,0,0,0],
//[0,1,1,1,1,0,0,0],
//[0,1,1,1,1,0,1,1],
//[1,2,0,0,0,1,0,1]
//]
//},
//{ 
//maxMoves: 47,
//grid: [
//[1,1,0,0,0,2,0,0,0],
//[0,0,1,0,1,0,0,1,1],
//[0,1,1,1,1,1,0,1,0],
//[0,0,0,1,0,1,1,0,1],
//[1,0,0,0,0,0,1,0,0],
//[0,1,1,1,1,0,0,1,1]
//]
//},
//{ 
//maxMoves: 13,
//grid: [
//[0,0],
//[0,0],
//[0,1],
//[0,0],
//[1,0],
//[0,0],
//[0,0]
//]
//},
//{ 
//maxMoves: 17,
//grid: [
//[0,0,1],
//[1,1,1],
//[1,0,0],
//[2,1,1],
//[1,0,0],
//[1,0,0],
//[0,1,0]
//]
//},
//{ 
//maxMoves: 23,
//grid: [
//[1,1,1,0],
//[0,2,1,0],
//[1,0,0,0],
//[1,0,0,0],
//[0,1,0,1],
//[0,1,0,1],
//[0,0,1,1]
//]
//},
//{ 
//maxMoves: 28,
//grid: [
//[1,0,1,1,0],
//[1,0,1,1,0],
//[1,1,1,1,1],
//[0,1,0,0,2],
//[1,1,1,1,0],
//[0,1,0,0,1],
//[1,1,1,1,0]
//]
//},
//{ 
//maxMoves: 36,
//grid: [
//[1,0,0,1,0,0],
//[1,0,0,1,0,2],
//[1,0,1,0,1,0],
//[1,1,1,1,1,0],
//[0,1,1,0,1,0],
//[1,1,1,0,1,1],
//[1,1,0,1,0,1]
//]
//},
//{ 
//maxMoves: 42,
//grid: [
//[1,0,1,0,0,0,1],
//[0,1,2,0,1,0,0],
//[0,0,1,1,0,0,1],
//[1,0,1,1,1,0,1],
//[0,0,1,1,0,0,1],
//[1,0,1,0,0,0,1],
//[0,0,1,1,0,0,1]
//]
//},
//{ 
//maxMoves: 50,
//grid: [
//[0,1,1,0,0,0,0,1],
//[0,1,1,0,1,0,1,1],
//[1,0,0,1,1,1,0,0],
//[0,1,1,0,0,0,1,0],
//[0,1,0,0,0,0,1,1],
//[1,1,1,0,1,2,0,0],
//[1,0,1,0,0,0,1,1]
//]
//},
//{ 
//maxMoves: 55,
//grid: [
//[1,1,0,0,1,1,0,1,0],
//[0,0,0,0,0,0,1,1,1],
//[1,0,0,0,1,1,0,0,0],
//[0,1,0,0,0,0,0,0,0],
//[0,0,1,2,1,1,0,0,0],
//[1,0,0,0,0,0,1,1,1],
//[1,0,1,0,0,0,1,0,1]
//]
//},
//{ 
//maxMoves: 11,
//grid: [
//[0,0],
//[2,0],
//[1,1],
//[1,1],
//[1,0],
//[0,1],
//[0,1],
//[1,1]
//]
//},
//{ 
//maxMoves: 20,
//grid: [
//[1,1,0],
//[1,1,0],
//[1,2,0],
//[1,1,0],
//[1,0,1],
//[0,1,1],
//[1,1,0],
//[1,0,1]
//]
//},
//{ 
//maxMoves: 30,
//grid: [
//[0,1,1,0],
//[0,1,1,0],
//[0,1,1,0],
//[0,0,2,1],
//[0,1,0,0],
//[0,1,0,0],
//[1,1,1,1],
//[0,0,1,1]
//]
//},
//{ 
//maxMoves: 34,
//grid: [
//[0,0,1,1,1],
//[0,0,0,1,0],
//[1,1,1,0,0],
//[1,0,1,0,1],
//[1,1,0,1,0],
//[0,0,0,1,0],
//[1,2,1,0,1],
//[0,1,0,1,1]
//]
//},
//{ 
//maxMoves: 40,
//grid: [
//[0,1,0,1,1,1],
//[1,0,1,2,1,0],
//[0,1,1,1,0,1],
//[1,0,1,0,0,1],
//[0,0,1,0,0,0],
//[0,1,0,0,0,0],
//[0,1,0,1,1,1],
//[0,1,0,0,0,1]
//]
//},
//{ 
//maxMoves: 47,
//grid: [
//[0,0,0,1,0,0,1],
//[0,1,1,0,1,1,0],
//[0,1,0,1,0,0,0],
//[0,1,1,1,2,0,0],
//[1,0,0,0,1,0,1],
//[1,1,1,0,0,0,0],
//[1,0,1,1,1,0,1],
//[0,1,1,0,0,1,0]
//]
//},
//{ 
//maxMoves: 56,
//grid: [
//[0,1,1,0,0,1,0,1],
//[0,0,2,1,1,1,1,0],
//[1,0,0,1,1,1,1,0],
//[1,0,0,1,1,1,1,0],
//[0,0,0,1,0,0,0,1],
//[0,0,0,1,1,0,1,0],
//[1,0,1,1,0,0,0,1],
//[1,1,0,1,1,1,1,1]
//]
//},
//{ 
//maxMoves: 64,
//grid: [
//[1,1,0,1,0,0,1,0,1],
//[1,1,1,1,1,0,1,1,0],
//[1,2,0,0,0,1,0,0,0],
//[1,0,0,1,0,1,1,0,0],
//[0,1,0,0,1,1,0,0,1],
//[1,0,1,1,1,0,1,1,0],
//[0,1,0,0,1,1,0,0,1],
//[0,1,0,0,0,1,0,0,0]
//]
//},
//{ 
//maxMoves: 15,
//grid: [
//[0,1],
//[0,0],
//[1,2],
//[0,0],
//[0,0],
//[0,1],
//[0,0],
//[0,0],
//[0,0]
//]
//},
//{ 
//maxMoves: 23,
//grid: [
//[0,0,1],
//[1,0,2],
//[1,1,1],
//[0,0,1],
//[0,0,1],
//[0,1,0],
//[0,0,1],
//[0,1,0],
//[0,1,0]
//]
//},
//{ 
//maxMoves: 30,
//grid: [
//[0,0,0,0],
//[0,1,1,1],
//[0,0,1,0],
//[0,0,2,0],
//[0,1,1,1],
//[0,1,1,1],
//[0,1,1,1],
//[0,1,0,1],
//[0,1,1,1]
//]
//},
//{ 
//maxMoves: 34,
//grid: [
//[1,0,1,2,0],
//[0,0,1,1,0],
//[0,0,0,1,1],
//[1,1,1,0,1],
//[1,0,0,1,0],
//[0,0,0,1,1],
//[0,0,0,1,1],
//[0,0,0,1,1],
//[0,0,0,0,0]
//]
//},
//{ 
//maxMoves: 44,
//grid: [
//[1,1,1,0,1,0],
//[0,1,0,1,0,1],
//[1,1,1,0,1,0],
//[0,0,1,1,0,1],
//[1,0,1,0,1,1],
//[0,0,1,0,0,1],
//[0,2,1,0,1,0],
//[1,0,1,0,0,1],
//[1,0,0,1,1,0]
//]
//},
//{ 
//maxMoves: 52,
//grid: [
//[1,0,1,0,0,0,0],
//[1,0,0,0,0,0,1],
//[1,1,0,0,0,0,0],
//[0,1,0,0,0,1,0],
//[0,1,1,1,1,1,1],
//[0,0,0,1,0,0,1],
//[2,0,1,1,0,0,0],
//[1,0,0,0,0,1,0],
//[0,0,0,0,0,0,0]
//]
//},
//{ 
//maxMoves: 68,
//grid: [
//[1,1,0,1,1,1,1,0],
//[1,1,1,1,0,1,1,0],
//[0,1,1,1,1,1,1,0],
//[1,1,1,1,1,1,0,0],
//[0,0,0,0,0,0,0,1],
//[0,1,1,1,1,1,1,0],
//[1,0,0,1,0,0,0,1],
//[1,1,1,1,1,0,2,0],
//[1,0,1,1,1,1,0,0]
//]
//},
//{ 
//maxMoves: 70,
//grid: [
//[1,0,1,0,1,0,0,1,1],
//[1,1,1,0,0,1,0,0,1],
//[0,0,1,1,1,1,1,0,0],
//[0,0,0,1,0,0,1,1,0],
//[1,1,0,0,1,1,0,0,1],
//[1,1,1,0,0,0,2,0,0],
//[0,0,1,1,0,0,1,1,0],
//[1,1,1,0,1,0,1,0,1],
//[1,0,0,1,0,1,0,1,0]
//]
//},
//{ 
//maxMoves: 3,
//grid: [
//[1,2],
//[0,1]
//]
//},
//{ 
//maxMoves: 4,
//grid: [
//[2,1,2],
//[0,1,0]
//]
//},
//{ 
//maxMoves: 6,
//grid: [
//[0,1,1,1],
//[2,1,1,1]
//]
//},
//{ 
//maxMoves: 8,
//grid: [
//[2,0,0,0,0],
//[2,0,0,0,0]
//]
//},
//{ 
//maxMoves: 9,
//grid: [
//[0,0,2,2,1,0],
//[1,1,0,0,1,1]
//]
//},
//{ 
//maxMoves: 12,
//grid: [
//[0,1,2,0,0,0,0],
//[2,0,1,0,0,0,0]
//]
//},
//{ 
//maxMoves: 14,
//grid: [
//[0,0,0,1,0,1,2,1],
//[0,0,0,0,0,0,1,0]
//]
//},
//{ 
//maxMoves: 14,
//grid: [
//[1,2,0,0,0,0,0,1,0],
//[2,0,1,1,1,1,1,1,0]
//]
//},
//{ 
//maxMoves: 4,
//grid: [
//[2,2],
//[0,0],
//[0,0]
//]
//},
//{ 
//maxMoves: 6,
//grid: [
//[2,1,2],
//[1,1,1],
//[1,1,1]
//]
//},
//{ 
//maxMoves: 7,
//grid: [
//[1,0,1,1],
//[1,2,1,0],
//[2,1,1,0]
//]
//},
//{ 
//maxMoves: 8,
//grid: [
//[0,0,1,1,2],
//[1,1,0,2,0],
//[1,1,1,0,1]
//]
//},
//{ 
//maxMoves: 11,
//grid: [
//[0,0,0,2,1,0],
//[0,1,2,1,1,1],
//[0,1,0,0,1,0]
//]
//},
//{ 
//maxMoves: 19,
//grid: [
//[0,0,0,1,0,1,0],
//[2,0,0,1,0,0,0],
//[1,1,1,1,1,0,1]
//]
//},
//{ 
//maxMoves: 19,
//grid: [
//[1,0,0,1,0,1,2,1],
//[2,1,1,0,1,0,1,1],
//[0,0,0,0,0,0,1,1]
//]
//},
//{ 
//maxMoves: 20,
//grid: [
//[1,0,0,1,1,1,0,1,1],
//[1,0,1,1,1,2,1,0,0],
//[0,0,1,0,0,0,1,1,1]
//]
//},
//{ 
//maxMoves: 6,
//grid: [
//[1,1],
//[1,1],
//[1,1],
//[2,0]
//]
//},
//{ 
//maxMoves: 7,
//grid: [
//[1,0,0],
//[2,1,0],
//[2,1,0],
//[0,1,1]
//]
//},
//{ 
//maxMoves: 12,
//grid: [
//[0,1,2,0],
//[0,1,0,0],
//[0,1,1,1],
//[1,2,1,0]
//]
//},
//{ 
//maxMoves: 16,
//grid: [
//[0,0,1,2,1],
//[1,0,0,0,1],
//[1,2,0,0,1],
//[1,0,1,0,1]
//]
//},
//{ 
//maxMoves: 18,
//grid: [
//[1,1,1,1,1,0],
//[1,1,0,1,0,1],
//[0,2,0,0,0,0],
//[0,0,1,1,1,0]
//]
//},
//{ 
//maxMoves: 19,
//grid: [
//[2,1,1,1,0,0,1],
//[0,1,1,0,1,0,0],
//[0,0,1,0,1,1,0],
//[0,1,1,1,1,0,1]
//]
//},
//{ 
//maxMoves: 25,
//grid: [
//[1,0,1,1,1,2,0,1],
//[1,2,1,1,1,1,1,1],
//[0,0,0,0,1,1,1,1],
//[0,1,0,0,1,0,1,1]
//]
//},
//{ 
//maxMoves: 30,
//grid: [
//[1,1,0,1,1,1,0,0,1],
//[0,1,0,2,0,1,0,1,1],
//[2,0,0,0,0,1,1,0,1],
//[0,0,1,1,0,0,0,1,0]
//]
//},
//{ 
//maxMoves: 8,
//grid: [
//[2,1],
//[0,0],
//[0,0],
//[0,0],
//[1,0]
//]
//},
//{ 
//maxMoves: 11,
//grid: [
//[0,2,1],
//[1,1,1],
//[1,0,0],
//[0,0,1],
//[0,1,0]
//]
//},
//{ 
//maxMoves: 15,
//grid: [
//[2,1,1,1],
//[0,2,1,1],
//[1,0,0,0],
//[1,0,0,0],
//[1,0,0,0]
//]
//},
//{ 
//maxMoves: 18,
//grid: [
//[0,1,1,0,2],
//[0,1,0,0,1],
//[1,0,2,0,1],
//[0,1,0,1,1],
//[1,1,1,1,1]
//]
//},
//{ 
//maxMoves: 28,
//grid: [
//[0,0,0,0,0,1],
//[0,1,1,1,0,1],
//[1,0,0,0,1,1],
//[1,1,1,1,0,0],
//[1,1,1,1,0,0]
//]
//},
//{ 
//maxMoves: 30,
//grid: [
//[0,0,1,0,1,0,0],
//[1,1,1,1,0,1,1],
//[0,1,1,1,0,0,1],
//[2,1,1,1,0,1,0],
//[0,0,1,0,0,1,1]
//]
//},
//{ 
//maxMoves: 36,
//grid: [
//[0,0,1,1,1,1,0,0],
//[0,0,0,0,1,1,0,0],
//[1,0,0,0,1,1,0,2],
//[1,1,1,1,0,0,0,0],
//[0,1,0,0,1,1,0,0]
//]
//},
//{ 
//maxMoves: 39,
//grid: [
//[1,1,1,0,0,1,1,1,0],
//[0,1,1,1,1,1,0,0,1],
//[1,0,0,0,0,0,1,1,1],
//[0,2,1,1,0,0,1,1,0],
//[1,1,1,0,1,0,1,1,0]
//]
//},
//{ 
//maxMoves: 8,
//grid: [
//[1,2],
//[0,1],
//[0,0],
//[0,1],
//[1,2],
//[0,1]
//]
//},
//{ 
//maxMoves: 15,
//grid: [
//[2,0,1],
//[0,1,1],
//[0,1,1],
//[0,2,1],
//[1,0,0],
//[0,0,1]
//]
//},
//{ 
//maxMoves: 16,
//grid: [
//[2,0,1,0],
//[0,0,1,0],
//[0,2,0,1],
//[0,1,1,0],
//[0,0,0,0],
//[1,0,1,1]
//]
//},
//{ 
//maxMoves: 29,
//grid: [
//[1,0,0,0,0],
//[2,0,1,0,0],
//[1,1,0,2,1],
//[1,1,0,0,1],
//[1,1,0,0,1],
//[1,1,0,0,1]
//]
//},
//{ 
//maxMoves: 36,
//grid: [
//[0,0,0,0,0,1],
//[0,0,0,0,0,1],
//[1,2,0,0,0,1],
//[0,0,0,0,0,1],
//[1,1,1,1,1,1],
//[1,0,1,1,1,0]
//]
//},
//{ 
//maxMoves: 34,
//grid: [
//[1,1,1,2,0,1,2],
//[0,1,0,1,1,1,0],
//[1,1,0,0,1,1,0],
//[1,1,0,0,0,0,0],
//[0,0,0,1,1,0,0],
//[1,0,0,0,0,1,0]
//]
//},
//{ 
//maxMoves: 39,
//grid: [
//[0,0,0,0,1,0,0,0],
//[0,0,1,2,0,2,1,0],
//[1,0,1,0,1,0,0,1],
//[0,0,1,1,1,0,1,0],
//[1,0,1,0,1,0,1,0],
//[0,1,0,0,0,1,0,1]
//]
//},
//{ 
//maxMoves: 49,
//grid: [
//[1,0,0,1,2,0,1,0,1],
//[2,1,1,0,0,1,0,0,0],
//[1,1,1,0,0,1,1,0,0],
//[1,1,1,1,0,1,0,0,0],
//[1,1,1,0,0,1,0,0,1],
//[1,1,1,0,0,1,0,1,0]
//]
//},
//{ 
//maxMoves: 11,
//grid: [
//[1,1],
//[2,2],
//[1,1],
//[1,1],
//[1,1],
//[1,0],
//[1,0]
//]
//},
//{ 
//maxMoves: 11,
//grid: [
//[1,0,1],
//[0,0,2],
//[0,1,2],
//[1,1,0],
//[0,1,1],
//[0,0,0],
//[1,0,1]
//]
//},
//{ 
//maxMoves: 23,
//grid: [
//[1,1,1,0],
//[2,0,0,1],
//[0,1,1,0],
//[0,0,2,1],
//[1,0,0,1],
//[0,0,1,1],
//[1,1,0,1]
//]
//},
//{ 
//maxMoves: 28,
//grid: [
//[1,1,2,0,0],
//[0,1,1,2,1],
//[1,1,1,1,0],
//[1,0,0,1,0],
//[1,1,1,0,1],
//[1,1,0,0,0],
//[0,0,0,1,1]
//]
//},
//{ 
//maxMoves: 37,
//grid: [
//[2,0,1,1,0,0],
//[0,1,0,0,2,0],
//[0,0,0,1,1,1],
//[0,1,0,0,1,1],
//[1,0,1,1,1,0],
//[1,0,0,1,0,0],
//[0,0,0,0,0,1]
//]
//},
//{ 
//maxMoves: 38,
//grid: [
//[1,0,0,0,0,0,1],
//[1,1,2,0,0,1,0],
//[1,0,1,0,0,1,0],
//[0,1,0,0,0,1,1],
//[1,1,0,0,1,0,0],
//[1,0,0,1,0,0,1],
//[0,0,1,2,0,0,0]
//]
//},
//{ 
//maxMoves: 48,
//grid: [
//[0,0,1,0,0,1,0,0],
//[1,0,0,0,0,0,1,1],
//[1,1,2,0,1,1,0,0],
//[0,1,1,1,1,0,1,1],
//[0,1,1,0,0,0,1,1],
//[1,1,0,1,0,1,1,1],
//[1,0,1,1,1,0,1,1]
//]
//},
//{ 
//maxMoves: 60,
//grid: [
//[0,0,1,1,0,1,0,1,1],
//[0,0,0,1,0,1,0,1,0],
//[0,0,1,1,0,1,0,1,1],
//[0,0,0,1,2,0,1,0,0],
//[0,0,0,0,0,1,0,1,1],
//[0,0,1,1,0,1,0,1,1],
//[1,1,0,0,1,1,1,2,1]
//]
//},
//{ 
//maxMoves: 11,
//grid: [
//[1,1],
//[1,0],
//[0,2],
//[0,1],
//[2,0],
//[0,1],
//[0,1],
//[0,0]
//]
//},
//{ 
//maxMoves: 19,
//grid: [
//[0,0,0],
//[0,0,0],
//[0,1,2],
//[0,1,2],
//[0,0,1],
//[1,0,0],
//[1,0,0],
//[0,1,0]
//]
//},
//{ 
//maxMoves: 28,
//grid: [
//[0,1,0,1],
//[0,0,1,0],
//[1,1,1,0],
//[2,1,0,0],
//[0,1,0,1],
//[0,0,1,0],
//[0,1,0,1],
//[0,0,1,0]
//]
//},
//{ 
//maxMoves: 35,
//grid: [
//[2,1,0,1,1],
//[1,0,1,0,0],
//[0,1,0,1,0],
//[2,1,1,0,1],
//[0,1,0,0,0],
//[0,1,0,1,1],
//[0,0,1,0,0],
//[0,0,1,0,0]
//]
//},
//{ 
//maxMoves: 44,
//grid: [
//[0,1,1,1,1,1],
//[0,1,1,0,0,0],
//[1,0,1,0,2,1],
//[0,1,1,1,1,1],
//[1,0,1,0,0,0],
//[0,0,0,1,1,1],
//[1,0,0,0,1,0],
//[1,0,1,0,0,0]
//]
//},
//{ 
//maxMoves: 45,
//grid: [
//[0,1,1,1,0,1,1],
//[1,1,0,1,1,0,1],
//[0,0,1,1,0,1,0],
//[2,0,1,2,0,0,0],
//[1,0,1,0,0,0,0],
//[0,0,0,1,1,1,1],
//[0,1,1,1,1,1,1],
//[1,0,1,1,1,0,0]
//]
//},
//{ 
//maxMoves: 52,
//grid: [
//[0,0,1,0,0,1,1,1],
//[0,1,1,1,1,0,0,1],
//[1,1,0,1,1,1,0,0],
//[1,0,0,0,0,1,1,1],
//[0,0,1,0,0,1,1,1],
//[1,1,0,1,0,1,1,1],
//[0,1,0,1,0,0,1,0],
//[1,1,0,2,0,0,0,0]
//]
//},
//{ 
//maxMoves: 64,
//grid: [
//[1,1,0,1,0,1,2,0,0],
//[0,1,0,1,0,2,1,1,1],
//[1,0,1,1,1,0,1,1,1],
//[0,0,1,0,1,0,1,1,1],
//[1,1,0,1,0,0,1,0,1],
//[0,0,1,0,1,0,1,1,1],
//[0,1,0,1,1,1,0,0,1],
//[0,1,1,0,0,0,1,1,1]
//]
//},
//{ 
//maxMoves: 13,
//grid: [
//[1,2],
//[0,1],
//[1,1],
//[0,0],
//[0,1],
//[2,0],
//[1,1],
//[1,0],
//[1,0]
//]
//},
//{ 
//maxMoves: 20,
//grid: [
//[1,0,0],
//[0,0,1],
//[1,0,0],
//[1,1,2],
//[0,1,1],
//[0,1,1],
//[0,0,0],
//[0,0,0],
//[1,1,0]
//]
//},
//{ 
//maxMoves: 33,
//grid: [
//[2,0,1,0],
//[1,0,0,0],
//[0,0,1,1],
//[1,1,0,1],
//[0,0,1,1],
//[1,2,1,1],
//[0,0,1,1],
//[1,0,0,0],
//[0,0,1,1]
//]
//},
//{ 
//maxMoves: 40,
//grid: [
//[0,0,1,0,2],
//[1,1,0,1,1],
//[1,1,1,0,1],
//[0,0,1,1,0],
//[1,1,0,1,1],
//[1,1,0,1,1],
//[1,0,1,0,0],
//[1,0,0,0,1],
//[0,0,0,0,0]
//]
//},
//{ 
//maxMoves: 50,
//grid: [
//[1,1,0,1,0,1],
//[0,1,1,1,0,1],
//[1,1,0,1,0,1],
//[0,1,1,0,1,0],
//[1,1,0,1,1,0],
//[1,1,0,1,0,1],
//[1,1,0,1,0,1],
//[1,1,0,1,0,1],
//[1,1,1,0,1,1]
//]
//},
//{ 
//maxMoves: 52,
//grid: [
//[1,0,0,0,0,1,0],
//[1,1,0,0,1,0,1],
//[1,1,0,2,0,0,0],
//[1,0,1,0,1,0,1],
//[1,0,1,1,0,1,0],
//[0,0,1,1,0,1,1],
//[0,1,1,1,0,1,0],
//[1,0,1,1,0,1,0],
//[0,1,1,0,0,1,1]
//]
//},
//{ 
//maxMoves: 62,
//grid: [
//[0,0,1,0,0,0,1,1],
//[0,1,0,1,1,0,1,0],
//[0,1,0,1,1,1,0,0],
//[0,1,1,0,1,1,0,0],
//[1,1,1,1,1,1,0,0],
//[1,0,1,1,0,0,2,1],
//[0,0,0,1,1,2,1,0],
//[0,1,0,0,0,1,0,1],
//[1,0,1,0,0,1,0,0]
//]
//},
//{ 
//maxMoves: 67,
//grid: [
//[1,1,0,1,0,1,1,1,1],
//[0,0,0,1,1,2,0,0,1],
//[1,0,0,1,1,1,0,1,0],
//[0,2,0,1,1,1,1,1,1],
//[0,1,1,0,1,0,1,0,1],
//[0,0,1,1,0,1,1,1,0],
//[0,1,1,0,0,0,0,0,1],
//[1,0,0,1,1,1,0,1,0],
//[0,1,0,1,0,1,0,1,1]
//]
//},
//{ 
//maxMoves: 0,
//grid: [
//[2,2],
//[1,2]
//]
//},
//{ 
//maxMoves: 1,
//grid: [
//[2,2,0],
//[2,1,0]
//]
//},
//{ 
//maxMoves: 4,
//grid: [
//[2,2,1,1],
//[1,1,0,0]
//]
//},
//{ 
//maxMoves: 6,
//grid: [
//[2,2,0,1,1],
//[2,0,1,1,1]
//]
//},
//{ 
//maxMoves: 8,
//grid: [
//[0,1,1,0,1,2],
//[2,1,1,1,1,0]
//]
//},
//{ 
//maxMoves: 11,
//grid: [
//[0,0,0,0,0,1,0],
//[0,1,1,1,1,2,0]
//]
//},
//{ 
//maxMoves: 12,
//grid: [
//[2,0,1,0,1,0,2,1],
//[0,1,0,1,2,1,0,1]
//]
//},
//{ 
//maxMoves: 13,
//grid: [
//[0,1,1,1,0,1,0,0,2],
//[1,1,0,1,2,0,0,0,1]
//]
//},
//{ 
//maxMoves: 2,
//grid: [
//[2,2],
//[0,2],
//[1,1]
//]
//},
//{ 
//maxMoves: 4,
//grid: [
//[2,1,2],
//[0,1,0],
//[0,2,0]
//]
//},
//{ 
//maxMoves: 7,
//grid: [
//[2,1,2,1],
//[1,0,0,0],
//[2,0,0,1]
//]
//},
//{ 
//maxMoves: 11,
//grid: [
//[0,0,2,1,2],
//[2,0,0,0,0],
//[0,1,1,1,1]
//]
//},
//{ 
//maxMoves: 14,
//grid: [
//[0,1,2,1,0,1],
//[0,1,1,0,0,0],
//[1,1,0,1,2,0]
//]
//},
//{ 
//maxMoves: 11,
//grid: [
//[0,0,0,1,0,1,2],
//[1,1,1,1,1,1,1],
//[0,0,0,1,0,1,1]
//]
//},
//{ 
//maxMoves: 18,
//grid: [
//[2,0,1,1,2,0,0,1],
//[1,0,0,1,0,1,1,1],
//[2,1,0,1,1,1,1,0]
//]
//},
//{ 
//maxMoves: 25,
//grid: [
//[1,0,2,1,1,2,0,0,0],
//[1,1,0,1,1,1,1,1,1],
//[1,0,0,1,1,0,1,1,1]
//]
//},
//{ 
//maxMoves: 5,
//grid: [
//[1,2],
//[1,2],
//[2,1],
//[1,0]
//]
//},
//{ 
//maxMoves: 8,
//grid: [
//[2,1,1],
//[0,1,0],
//[1,0,0],
//[2,2,0]
//]
//},
//{ 
//maxMoves: 14,
//grid: [
//[1,0,1,1],
//[2,1,1,2],
//[0,0,1,0],
//[0,0,1,0]
//]
//},
//{ 
//maxMoves: 13,
//grid: [
//[1,0,2,0,1],
//[1,1,1,1,0],
//[0,1,0,2,0],
//[1,1,2,1,1]
//]
//},
//{ 
//maxMoves: 18,
//grid: [
//[0,0,0,0,2,2],
//[1,1,0,1,2,0],
//[1,1,1,0,1,0],
//[0,0,1,1,0,1]
//]
//},
//{ 
//maxMoves: 25,
//grid: [
//[0,0,0,1,1,1,0],
//[0,2,0,1,1,1,0],
//[0,2,1,1,1,1,1],
//[0,1,1,0,0,0,1]
//]
//},
//{ 
//maxMoves: 24,
//grid: [
//[0,1,1,0,0,1,0,0],
//[0,0,0,1,1,2,0,1],
//[0,0,1,0,0,1,0,1],
//[0,1,1,2,1,0,0,1]
//]
//},
//{ 
//maxMoves: 30,
//grid: [
//[2,0,1,1,1,0,1,1,0],
//[2,2,1,1,0,1,0,0,1],
//[1,1,0,1,1,0,1,1,0],
//[0,0,1,1,0,0,0,0,0]
//]
//},
//{ 
//maxMoves: 6,
//grid: [
//[1,2],
//[0,1],
//[0,0],
//[2,1],
//[0,1]
//]
//},
//{ 
//maxMoves: 11,
//grid: [
//[1,1,1],
//[1,1,1],
//[2,2,1],
//[1,1,1],
//[1,1,2]
//]
//},
//{ 
//maxMoves: 16,
//grid: [
//[0,0,2,1],
//[0,0,1,1],
//[0,1,0,0],
//[1,0,1,0],
//[0,0,1,1]
//]
//},
//{ 
//maxMoves: 18,
//grid: [
//[1,0,1,2,0],
//[0,1,0,1,0],
//[1,1,0,2,0],
//[0,1,0,1,1],
//[1,0,0,0,0]
//]
//},
//{ 
//maxMoves: 20,
//grid: [
//[1,0,1,0,1,0],
//[2,0,2,0,0,0],
//[0,0,1,2,0,0],
//[1,0,0,1,0,1],
//[1,1,1,1,0,0]
//]
//},
//{ 
//maxMoves: 28,
//grid: [
//[0,0,0,1,1,0,1],
//[0,1,0,0,0,0,0],
//[1,2,0,1,1,0,1],
//[1,0,0,1,0,1,0],
//[1,2,1,0,1,0,1]
//]
//},
//{ 
//maxMoves: 26,
//grid: [
//[2,1,0,1,1,0,1,0],
//[1,0,0,2,0,1,0,0],
//[1,0,0,0,0,1,1,1],
//[0,1,1,1,0,1,1,1],
//[1,0,1,0,1,1,1,0]
//]
//},
//{ 
//maxMoves: 35,
//grid: [
//[1,0,1,0,1,1,1,0,1],
//[1,0,1,0,1,1,0,1,1],
//[0,1,0,0,1,1,1,0,2],
//[0,1,1,1,1,1,0,0,0],
//[1,1,0,0,1,1,1,0,0]
//]
//},
//{ 
//maxMoves: 9,
//grid: [
//[0,2],
//[0,2],
//[1,0],
//[1,0],
//[1,0],
//[2,1]
//]
//},
//{ 
//maxMoves: 13,
//grid: [
//[0,1,1],
//[2,1,0],
//[1,0,0],
//[1,1,1],
//[1,2,1],
//[0,0,2]
//]
//},
//{ 
//maxMoves: 19,
//grid: [
//[0,0,0,2],
//[0,2,2,1],
//[0,0,0,0],
//[1,1,0,0],
//[1,1,0,0],
//[0,0,1,0]
//]
//},
//{ 
//maxMoves: 22,
//grid: [
//[1,0,1,2,1],
//[0,1,0,1,0],
//[0,0,0,1,1],
//[1,1,0,2,2],
//[1,1,0,0,1],
//[1,1,1,0,0]
//]
//},
//{ 
//maxMoves: 29,
//grid: [
//[2,0,0,0,0,0],
//[0,0,0,1,0,1],
//[1,1,1,0,2,1],
//[0,1,1,0,1,0],
//[0,1,1,2,0,0],
//[0,1,1,0,0,1]
//]
//},
//{ 
//maxMoves: 33,
//grid: [
//[0,1,0,0,1,1,0],
//[1,1,1,2,1,0,1],
//[0,1,0,1,0,0,1],
//[1,1,1,1,1,1,1],
//[1,1,1,2,1,1,0],
//[0,0,0,1,1,0,1]
//]
//},
//{ 
//maxMoves: 36,
//grid: [
//[1,0,1,1,2,1,1,0],
//[0,1,1,2,0,0,0,0],
//[0,1,0,1,1,0,2,0],
//[0,1,1,0,0,1,0,1],
//[1,1,1,1,1,0,0,0],
//[1,1,0,1,1,0,1,0]
//]
//},
//{ 
//maxMoves: 47,
//grid: [
//[0,1,0,1,1,0,1,1,1],
//[1,1,0,1,0,1,1,1,0],
//[1,0,1,2,0,0,0,1,1],
//[1,0,1,0,0,1,1,0,0],
//[1,0,1,0,0,2,1,1,1],
//[1,0,0,0,0,0,1,0,1]
//]
//},
//{ 
//maxMoves: 11,
//grid: [
//[2,1],
//[1,0],
//[2,1],
//[0,0],
//[1,0],
//[1,0],
//[2,1]
//]
//},
//{ 
//maxMoves: 12,
//grid: [
//[0,1,2],
//[2,0,0],
//[1,1,1],
//[1,0,0],
//[1,0,0],
//[1,1,2],
//[0,1,0]
//]
//},
//{ 
//maxMoves: 24,
//grid: [
//[2,0,0,0],
//[0,0,0,1],
//[0,0,0,1],
//[0,0,0,1],
//[1,2,2,0],
//[1,1,1,0],
//[1,0,1,1]
//]
//},
//{ 
//maxMoves: 29,
//grid: [
//[1,0,1,0,1],
//[1,0,1,0,1],
//[0,0,2,0,2],
//[1,2,1,0,1],
//[0,1,0,1,1],
//[0,0,1,0,0],
//[1,0,1,0,1]
//]
//},
//{ 
//maxMoves: 33,
//grid: [
//[1,1,1,0,1,1],
//[0,1,0,1,0,1],
//[2,0,0,1,1,1],
//[0,1,0,1,1,1],
//[0,1,1,1,2,0],
//[0,1,1,1,1,1],
//[1,0,0,0,1,0]
//]
//},
//{ 
//maxMoves: 42,
//grid: [
//[0,2,1,0,0,1,1],
//[0,1,1,0,0,1,1],
//[1,1,1,0,0,1,2],
//[0,0,0,0,0,1,0],
//[0,0,1,0,0,0,0],
//[0,0,0,1,1,2,0],
//[1,0,0,1,1,1,0]
//]
//},
//{ 
//maxMoves: 51,
//grid: [
//[2,0,0,0,0,0,1,1],
//[1,1,0,0,1,0,1,0],
//[0,1,1,1,0,1,1,0],
//[0,1,1,1,0,1,0,1],
//[0,0,1,0,0,1,0,1],
//[0,1,1,1,0,1,0,1],
//[1,0,0,1,1,0,1,0]
//]
//},
//{ 
//maxMoves: 47,
//grid: [
//[1,0,1,1,1,1,1,1,1],
//[0,2,1,0,0,0,1,1,1],
//[0,0,1,2,1,1,0,0,1],
//[0,0,1,0,0,0,0,1,0],
//[1,1,1,0,2,0,0,0,1],
//[1,1,0,0,0,1,0,1,1],
//[0,0,1,1,1,0,1,1,0]
//]
//},
//{ 
//maxMoves: 11,
//grid: [
//[1,1],
//[1,0],
//[0,2],
//[1,1],
//[1,1],
//[2,0],
//[2,0],
//[0,0]
//]
//},
//{ 
//maxMoves: 18,
//grid: [
//[1,0,0],
//[2,0,1],
//[0,0,1],
//[0,1,0],
//[0,1,0],
//[0,1,0],
//[0,0,1],
//[2,0,1]
//]
//},
//{ 
//maxMoves: 26,
//grid: [
//[0,1,1,2],
//[0,1,0,1],
//[1,1,1,0],
//[0,1,0,1],
//[1,0,0,1],
//[0,1,0,1],
//[0,0,1,0],
//[0,0,1,1]
//]
//},
//{ 
//maxMoves: 30,
//grid: [
//[0,1,1,1,2],
//[0,1,1,1,1],
//[1,1,0,0,0],
//[1,1,1,2,1],
//[0,1,1,1,1],
//[0,0,1,1,0],
//[0,1,1,0,0],
//[0,1,1,1,1]
//]
//},
//{ 
//maxMoves: 39,
//grid: [
//[0,0,0,2,1,1],
//[1,1,1,1,1,1],
//[0,1,1,0,0,0],
//[1,0,0,0,0,0],
//[1,1,1,0,1,2],
//[0,0,0,1,1,2],
//[1,1,1,1,1,0],
//[1,1,1,1,1,0]
//]
//},
//{ 
//maxMoves: 45,
//grid: [
//[0,0,2,0,2,0,0],
//[0,0,1,1,0,1,0],
//[1,2,0,1,1,0,1],
//[0,0,0,1,1,1,1],
//[1,1,0,0,1,0,1],
//[1,0,0,0,0,0,1],
//[1,0,0,0,1,1,1],
//[0,1,0,0,1,1,1]
//]
//},
//{ 
//maxMoves: 59,
//grid: [
//[2,1,0,0,2,1,1,0],
//[1,1,0,0,1,1,1,0],
//[1,0,1,1,0,0,0,1],
//[1,0,2,0,0,0,0,1],
//[1,0,0,1,0,0,1,0],
//[1,0,0,1,0,0,0,1],
//[1,1,1,0,0,1,0,0],
//[1,0,0,1,0,0,0,1]
//]
//},
//{ 
//maxMoves: 58,
//grid: [
//[1,1,0,1,1,0,0,1,0],
//[0,0,0,0,1,1,1,1,1],
//[1,1,1,1,2,0,0,1,1],
//[0,0,0,0,1,2,1,1,0],
//[0,2,0,0,0,1,0,1,0],
//[0,0,0,1,0,1,1,1,0],
//[1,1,0,0,1,0,0,0,1],
//[1,1,1,1,0,0,0,1,1]
//]
//},
//{ 
//maxMoves: 13,
//grid: [
//[2,2],
//[2,1],
//[1,0],
//[0,0],
//[0,1],
//[0,0],
//[1,0],
//[0,0],
//[0,0]
//]
//},
//{ 
//maxMoves: 19,
//grid: [
//[1,0,0],
//[1,0,0],
//[1,0,0],
//[1,1,1],
//[1,1,1],
//[0,1,0],
//[1,1,1],
//[0,1,2],
//[2,0,1]
//]
//},
//{ 
//maxMoves: 29,
//grid: [
//[0,1,1,0],
//[1,2,1,0],
//[0,0,0,1],
//[0,1,1,0],
//[0,1,1,0],
//[1,0,1,1],
//[0,0,0,0],
//[0,1,0,1],
//[0,0,0,0]
//]
//},
//{ 
//maxMoves: 39,
//grid: [
//[2,0,0,0,0],
//[0,1,1,1,0],
//[1,1,1,1,1],
//[1,1,1,1,1],
//[0,0,0,0,1],
//[0,0,0,0,1],
//[1,1,0,1,0],
//[0,0,1,0,0],
//[1,1,1,1,1]
//]
//},
//{ 
//maxMoves: 40,
//grid: [
//[0,1,1,0,0,1],
//[1,1,1,0,1,1],
//[0,2,0,1,0,0],
//[0,1,1,2,0,1],
//[0,1,0,1,0,0],
//[0,1,0,1,0,1],
//[0,1,0,0,1,1],
//[0,0,0,0,0,0],
//[0,0,0,0,1,0]
//]
//},
//{ 
//maxMoves: 53,
//grid: [
//[0,1,1,0,1,0,0],
//[1,0,1,2,1,2,0],
//[1,0,1,0,0,1,1],
//[0,1,1,1,1,0,0],
//[0,1,0,1,0,0,0],
//[1,0,0,1,0,1,1],
//[1,0,1,0,0,1,1],
//[0,1,0,0,1,0,0],
//[0,0,1,0,1,0,0]
//]
//},
//{ 
//maxMoves: 62,
//grid: [
//[0,1,0,0,1,0,1,1],
//[0,1,2,0,0,0,0,1],
//[1,1,1,1,1,1,1,0],
//[0,0,1,0,0,0,0,1],
//[0,0,0,1,0,0,0,1],
//[1,1,1,0,0,0,1,1],
//[0,0,1,0,0,1,1,1],
//[1,1,1,1,1,1,2,1],
//[1,1,1,1,1,1,1,0]
//]
//},
//{ 
//maxMoves: 71,
//grid: [
//[0,1,2,0,2,1,2,1,0],
//[1,1,0,1,1,1,0,0,1],
//[0,1,0,1,0,0,1,1,0],
//[1,0,0,1,1,1,1,0,1],
//[1,1,0,0,0,1,0,0,1],
//[1,0,0,0,1,1,0,0,1],
//[1,0,0,0,1,1,0,0,1],
//[1,0,1,0,1,0,0,0,1],
//[0,0,1,0,0,1,0,0,0]
//]
//},
//{ 
//maxMoves: 1,
//grid: [
//[2,2],
//[2,0]
//]
//},
//{ 
//maxMoves: 3,
//grid: [
//[2,1,0],
//[2,2,1]
//]
//},
//{ 
//maxMoves: 4,
//grid: [
//[0,2,1,0],
//[2,1,2,1]
//]
//},
//{ 
//maxMoves: 6,
//grid: [
//[2,2,2,1,2],
//[0,0,0,1,0]
//]
//},
//{ 
//maxMoves: 6,
//grid: [
//[1,1,2,0,0,2],
//[1,0,1,0,1,1]
//]
//},
//{ 
//maxMoves: 9,
//grid: [
//[2,0,1,2,0,1,2],
//[1,0,2,0,1,1,0]
//]
//},
//{ 
//maxMoves: 13,
//grid: [
//[1,2,2,1,0,2,0,0],
//[1,0,0,1,1,0,1,1]
//]
//},
//{ 
//maxMoves: 11,
//grid: [
//[2,1,0,0,1,0,0,2,0],
//[0,2,1,0,2,1,0,0,0]
//]
//},
//{ 
//maxMoves: 1,
//grid: [
//[2,0],
//[2,2],
//[2,1]
//]
//},
//{ 
//maxMoves: 5,
//grid: [
//[0,2,2],
//[1,0,2],
//[1,0,2]
//]
//},
//{ 
//maxMoves: 6,
//grid: [
//[0,1,2,1],
//[1,1,1,0],
//[0,1,0,2]
//]
//},
//{ 
//maxMoves: 13,
//grid: [
//[0,2,2,1,1],
//[1,0,2,1,1],
//[0,1,0,0,0]
//]
//},
//{ 
//maxMoves: 13,
//grid: [
//[2,0,0,2,1,0],
//[0,0,1,0,1,0],
//[1,0,1,1,1,1]
//]
//},
//{ 
//maxMoves: 15,
//grid: [
//[1,2,1,0,1,2,1],
//[0,0,1,1,1,0,2],
//[2,0,0,1,0,0,1]
//]
//},
//{ 
//maxMoves: 20,
//grid: [
//[1,1,1,1,1,0,2,0],
//[1,0,2,0,1,1,0,1],
//[1,0,1,0,1,0,0,1]
//]
//},
//{ 
//maxMoves: 18,
//grid: [
//[0,2,1,0,1,0,1,2,1],
//[0,1,0,1,0,2,1,1,1],
//[0,1,0,0,0,0,2,1,0]
//]
//},
//{ 
//maxMoves: 5,
//grid: [
//[0,2],
//[1,1],
//[0,2],
//[2,0]
//]
//},
//{ 
//maxMoves: 8,
//grid: [
//[1,0,2],
//[1,0,0],
//[1,0,0],
//[2,0,1]
//]
//},
//{ 
//maxMoves: 13,
//grid: [
//[1,2,2,1],
//[0,1,1,0],
//[0,1,1,0],
//[2,0,0,1]
//]
//},
//{ 
//maxMoves: 15,
//grid: [
//[0,2,0,1,2],
//[0,0,1,0,0],
//[1,1,2,1,0],
//[1,1,1,1,1]
//]
//},
//{ 
//maxMoves: 19,
//grid: [
//[1,0,1,0,1,1],
//[2,1,0,1,2,0],
//[0,2,1,0,0,1],
//[1,0,1,1,1,1]
//]
//},
//{ 
//maxMoves: 19,
//grid: [
//[0,0,0,0,1,0,0],
//[0,0,0,1,0,1,1],
//[0,2,0,1,0,2,1],
//[0,1,1,0,0,2,1]
//]
//},
//{ 
//maxMoves: 27,
//grid: [
//[2,2,2,2,1,0,1,0],
//[0,0,0,0,0,1,0,1],
//[0,1,0,0,1,1,0,1],
//[0,1,0,0,0,1,1,1]
//]
//},
//{ 
//maxMoves: 33,
//grid: [
//[1,0,0,0,0,0,0,1,2],
//[1,1,1,1,1,1,1,1,0],
//[1,0,0,0,2,0,0,2,0],
//[1,0,0,0,2,0,0,1,1]
//]
//},
//{ 
//maxMoves: 5,
//grid: [
//[0,2],
//[2,2],
//[2,1],
//[0,0],
//[1,0]
//]
//},
//{ 
//maxMoves: 8,
//grid: [
//[1,2,1],
//[2,1,2],
//[2,0,1],
//[0,0,1],
//[0,1,0]
//]
//},
//{ 
//maxMoves: 12,
//grid: [
//[2,2,1,0],
//[0,1,1,1],
//[1,0,1,1],
//[1,0,0,2],
//[2,1,1,0]
//]
//},
//{ 
//maxMoves: 17,
//grid: [
//[1,0,2,1,2],
//[1,0,1,1,1],
//[1,1,0,2,1],
//[0,0,2,0,0],
//[0,0,1,0,0]
//]
//},
//{ 
//maxMoves: 20,
//grid: [
//[1,1,0,2,2,1],
//[1,0,1,0,0,2],
//[0,0,1,1,0,2],
//[1,0,1,0,1,0],
//[1,1,1,0,0,0]
//]
//},
//{ 
//maxMoves: 27,
//grid: [
//[1,0,2,0,0,0,2],
//[1,0,0,1,2,0,1],
//[1,0,0,1,0,0,0],
//[0,1,0,1,1,0,1],
//[0,0,0,1,0,0,1]
//]
//},
//{ 
//maxMoves: 35,
//grid: [
//[1,1,2,0,0,0,1,0],
//[1,0,0,1,1,2,0,0],
//[0,0,1,0,0,1,0,1],
//[0,0,1,0,0,0,1,1],
//[0,1,1,0,0,1,1,1]
//]
//},
//{ 
//maxMoves: 33,
//grid: [
//[0,0,0,0,1,0,1,1,2],
//[1,1,0,1,2,0,1,0,1],
//[1,2,1,1,1,1,1,0,0],
//[0,0,0,1,0,1,0,0,1],
//[1,1,1,1,0,1,2,0,1]
//]
//},
//{ 
//maxMoves: 9,
//grid: [
//[1,1],
//[1,0],
//[1,1],
//[1,1],
//[2,0],
//[0,2]
//]
//},
//{ 
//maxMoves: 11,
//grid: [
//[1,2,0],
//[1,2,0],
//[1,1,1],
//[1,0,0],
//[0,0,1],
//[0,1,2]
//]
//},
//{ 
//maxMoves: 19,
//grid: [
//[0,1,1,0],
//[1,1,0,1],
//[2,2,1,0],
//[0,0,2,1],
//[1,0,2,1],
//[1,0,1,0]
//]
//},
//{ 
//maxMoves: 26,
//grid: [
//[1,1,0,1,1],
//[1,1,0,1,1],
//[2,1,0,0,1],
//[2,1,2,0,1],
//[1,1,0,1,1],
//[0,0,2,0,0]
//]
//},
//{ 
//maxMoves: 29,
//grid: [
//[1,0,0,1,0,2],
//[0,1,2,1,1,0],
//[0,1,2,1,0,1],
//[1,1,0,1,0,1],
//[0,0,1,0,1,2],
//[1,1,0,1,0,0]
//]
//},
//{ 
//maxMoves: 30,
//grid: [
//[0,2,0,0,0,1,1],
//[0,0,1,0,1,1,1],
//[2,0,0,0,0,1,0],
//[1,0,1,1,1,1,1],
//[1,1,1,0,1,1,1],
//[1,1,0,0,1,1,0]
//]
//},
//{ 
//maxMoves: 36,
//grid: [
//[1,0,1,0,1,1,0,0],
//[1,1,1,1,1,0,1,1],
//[0,1,0,0,0,0,1,1],
//[0,1,1,1,1,2,1,0],
//[1,1,1,1,0,2,0,0],
//[2,0,0,2,0,1,0,1]
//]
//},
//{ 
//maxMoves: 42,
//grid: [
//[1,1,0,0,0,0,0,1,1],
//[0,1,1,1,1,0,1,0,1],
//[0,1,0,0,0,1,0,1,1],
//[0,1,1,0,0,0,0,2,0],
//[0,1,0,1,0,1,1,0,1],
//[0,0,0,0,1,1,0,0,1]
//]
//},
//{ 
//maxMoves: 11,
//grid: [
//[2,0],
//[0,2],
//[0,2],
//[1,0],
//[1,1],
//[1,0],
//[1,0]
//]
//},
//{ 
//maxMoves: 13,
//grid: [
//[0,0,0],
//[1,0,1],
//[1,1,0],
//[0,2,2],
//[0,2,1],
//[1,0,0],
//[1,1,1]
//]
//},
//{ 
//maxMoves: 24,
//grid: [
//[2,0,0,0],
//[0,2,1,1],
//[1,0,0,0],
//[1,1,1,1],
//[1,0,0,0],
//[0,1,1,2],
//[1,1,1,1]
//]
//},
//{ 
//maxMoves: 27,
//grid: [
//[0,1,0,2,0],
//[1,1,1,2,0],
//[0,1,0,0,1],
//[0,1,1,0,2],
//[0,0,1,0,1],
//[2,1,0,1,0],
//[1,1,1,1,1]
//]
//},
//{ 
//maxMoves: 31,
//grid: [
//[0,1,1,0,1,1],
//[1,1,1,0,0,1],
//[0,0,1,1,1,0],
//[0,1,1,2,0,1],
//[0,0,1,0,1,1],
//[1,2,1,1,1,0],
//[0,1,1,0,1,2]
//]
//},
//{ 
//maxMoves: 39,
//grid: [
//[0,0,1,1,1,1,2],
//[1,1,1,1,1,1,1],
//[0,1,1,2,1,1,0],
//[1,0,1,1,1,1,0],
//[0,0,1,1,2,0,1],
//[1,1,0,1,1,1,0],
//[1,1,1,1,1,0,0]
//]
//},
//{ 
//maxMoves: 50,
//grid: [
//[0,2,1,0,1,1,1,2],
//[0,0,0,0,1,1,1,1],
//[1,1,1,1,0,1,0,0],
//[1,1,1,1,0,1,0,0],
//[1,1,0,1,1,1,0,0],
//[2,1,1,1,0,1,1,0],
//[0,1,0,0,1,0,1,1]
//]
//},
//{ 
//maxMoves: 55,
//grid: [
//[0,1,1,1,1,0,1,1,1],
//[1,0,1,0,1,1,1,0,0],
//[1,0,1,1,2,0,1,1,1],
//[1,1,0,1,1,0,1,1,1],
//[0,1,0,1,2,1,2,1,1],
//[0,1,0,1,1,0,2,1,1],
//[0,1,0,0,0,0,1,1,1]
//]
//},
//{ 
//maxMoves: 11,
//grid: [
//[0,1],
//[1,2],
//[0,0],
//[2,2],
//[0,2],
//[1,1],
//[1,1],
//[1,1]
//]
//},
//{ 
//maxMoves: 19,
//grid: [
//[1,2,1],
//[0,1,0],
//[1,1,1],
//[1,1,1],
//[1,1,1],
//[0,0,1],
//[1,1,1],
//[0,1,2]
//]
//},
//{ 
//maxMoves: 24,
//grid: [
//[1,0,0,0],
//[0,1,0,0],
//[0,0,0,2],
//[1,0,0,0],
//[1,1,1,1],
//[2,1,1,1],
//[1,2,0,0],
//[0,1,1,2]
//]
//},
//{ 
//maxMoves: 29,
//grid: [
//[0,0,1,1,1],
//[0,0,1,1,1],
//[0,1,1,1,0],
//[0,0,0,0,1],
//[0,0,1,1,1],
//[0,2,0,1,1],
//[1,1,1,1,0],
//[0,2,0,2,0]
//]
//},
//{ 
//maxMoves: 36,
//grid: [
//[1,2,1,0,0,0],
//[1,2,1,1,1,1],
//[1,0,0,0,1,1],
//[0,1,0,1,0,0],
//[1,0,0,2,0,0],
//[1,2,1,1,1,0],
//[1,0,0,0,1,1],
//[1,0,0,1,1,0]
//]
//},
//{ 
//maxMoves: 42,
//grid: [
//[1,1,0,1,1,0,0],
//[0,1,0,1,2,1,1],
//[1,1,1,1,0,1,0],
//[0,1,1,2,1,1,1],
//[0,0,1,1,1,1,0],
//[1,1,0,1,1,1,1],
//[2,0,0,0,2,0,0],
//[0,0,1,1,0,1,1]
//]
//},
//{ 
//maxMoves: 57,
//grid: [
//[0,0,2,0,0,0,1,1],
//[0,1,0,0,0,1,0,1],
//[1,1,1,1,1,2,1,1],
//[1,1,1,1,1,0,0,1],
//[1,1,1,1,0,0,0,0],
//[0,1,1,1,1,0,0,0],
//[1,1,0,1,1,0,0,0],
//[1,1,0,0,2,0,0,0]
//]
//},
//{ 
//maxMoves: 63,
//grid: [
//[0,0,1,1,0,1,0,0,0],
//[1,0,0,0,1,0,1,2,0],
//[0,0,1,2,1,1,1,0,1],
//[0,0,1,1,1,1,0,1,1],
//[0,2,0,0,0,0,1,0,1],
//[1,1,0,0,0,0,1,0,1],
//[1,1,0,1,1,0,1,2,0],
//[0,0,1,1,0,0,1,0,0]
//]
//},
//{ 
//maxMoves: 14,
//grid: [
//[1,1],
//[0,1],
//[2,0],
//[1,2],
//[0,0],
//[0,0],
//[0,0],
//[1,0],
//[0,0]
//]
//},
//{ 
//maxMoves: 16,
//grid: [
//[1,1,2],
//[0,1,0],
//[0,1,2],
//[0,1,1],
//[1,1,0],
//[0,2,1],
//[0,2,1],
//[1,0,0],
//[0,0,1]
//]
//},
//{ 
//maxMoves: 29,
//grid: [
//[1,1,1,1],
//[1,0,1,0],
//[1,0,1,0],
//[0,2,2,1],
//[1,1,0,0],
//[2,0,1,1],
//[1,1,0,1],
//[1,0,1,0],
//[1,0,0,1]
//]
//},
//{ 
//maxMoves: 38,
//grid: [
//[0,0,2,0,1],
//[0,0,0,0,0],
//[1,1,1,1,0],
//[0,0,1,0,1],
//[0,1,0,0,1],
//[1,2,1,1,0],
//[2,0,0,0,1],
//[0,1,1,1,1],
//[0,0,0,0,0]
//]
//},
//{ 
//maxMoves: 45,
//grid: [
//[2,0,1,0,1,0],
//[2,1,0,0,1,0],
//[1,1,1,0,1,0],
//[1,1,1,0,1,0],
//[0,1,1,0,0,1],
//[1,0,1,1,0,0],
//[0,1,0,0,1,0],
//[0,0,0,2,1,0],
//[1,1,1,1,1,0]
//]
//},
//{ 
//maxMoves: 50,
//grid: [
//[0,1,1,0,0,1,0],
//[0,1,1,1,1,0,1],
//[0,0,1,0,1,1,0],
//[0,1,1,2,0,0,1],
//[1,0,0,0,0,0,1],
//[0,1,2,0,1,0,1],
//[0,0,1,1,0,1,1],
//[0,0,1,0,0,1,0],
//[1,0,1,0,1,0,1]
//]
//},
//{ 
//maxMoves: 61,
//grid: [
//[0,2,0,1,0,2,0,0],
//[1,1,1,0,1,0,0,0],
//[1,1,0,1,1,0,0,0],
//[0,1,1,1,1,1,1,1],
//[2,1,0,1,1,0,0,1],
//[0,1,0,1,1,0,0,0],
//[0,0,0,1,1,0,0,1],
//[0,0,0,1,1,0,0,1],
//[1,0,1,0,0,1,0,1]
//]
//},
//{ 
//maxMoves: 71,
//grid: [
//[0,0,0,0,1,0,1,2,0],
//[1,1,1,1,0,0,0,2,0],
//[1,1,1,0,0,1,0,1,1],
//[0,0,0,0,1,0,1,0,0],
//[1,1,1,0,0,1,0,1,1],
//[1,0,0,0,0,0,1,0,0],
//[1,1,1,0,0,1,0,1,1],
//[1,0,0,1,0,0,1,0,1],
//[0,0,0,0,0,1,0,0,1]
//]
//}
];
   if(rank > this.level.length)
        return this.level[this.level.length - 1];
    return this.level[rank-1];
}