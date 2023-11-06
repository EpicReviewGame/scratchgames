// script to generate random greetings

function changeSub(num) {
  document.getElementById("subtitle").innerText = say[num];
}


var say = [];
say[0] = "Remember kids: Sylveontheanimator is mentally ill! =)";
say[1] = "7/31/23 - the death of nonexisty bfdi";
say[2] = "it won't fit!";
say[3] = "i think i won this trend";
say[4] = "7/31/23 - the death of nonexisty bfdi";
say[5] = "7/31/23 - the death of nonexisty bfdi";
say[6] = "7/31/23 - the death of nonexisty bfdi";

// pick a random greeting
var howmany = say.length;
var bRand = 0;
bRand = Math.random();
bRand = Math.floor(bRand * howmany);
sayWhat = say[bRand];
document.getElementById("subtitle").innerText = sayWhat;
