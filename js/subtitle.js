// script to generate random greetings

function changeSub(num) {
  document.getElementById("subtitle").innerText = say[num];
}


var say = [];
say[0] = "don't look up @sylviexd on youtube, worst mistake of my life";
say[1] = "7/31/23 - the death of nonexisty bfdi";
say[2] = "it won't fit!";
say[3] = "i think i won this trend";
say[4] = "my trumpet failed on me";
say[5] = "i forgot my trumpet";
say[6] = "you make fun of everything i fricking say!!11";
say[7] = "[...] keeps stealing things outta my pocket!!!";
say[8] = "real";
say[9] = "what the frick";
say[10] = "shut the farts up";
say[11] = "you are literally a dumbass";
say[12] = "that darn donkey kong";
say[13] = "ah ah go crazy!!!!";

// pick a random greeting
var howmany = say.length;
var bRand = 0;
bRand = Math.random();
bRand = Math.floor(bRand * howmany);
sayWhat = say[bRand];
document.getElementById("subtitle").innerText = sayWhat;
