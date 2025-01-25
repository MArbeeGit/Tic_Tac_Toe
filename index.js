// Initialize game state variables
var gameOver=false;
var turn='x';
var already=[];
var randomNumber;
var numbers = ["", "one", "two", "three","four", "five", "six","seven", "eight", "nine"];

// Function for CPU's move
function cpu(){
    if(gameOver)
        return;
    do{
    var choice = Math.random()*9;
    choice=Math.floor(choice)+1;
    randomNumber=numbers[choice];
    }while(already.includes(randomNumber));
   
    var x=document.getElementById(""+randomNumber);
    x.innerHTML='o';
    already.push(randomNumber);
    turn='x';

    checkgameover();

}

// Event listener for player's move
$(".button").click(function(){
    if(turn==='x' && !already.includes(this.id) && !gameOver){
    var currentnumber=this.id;
    turn='o';
    document.getElementById(currentnumber).innerHTML="x";
    already.push(currentnumber);
    $("#wins").innerHTML= "HI";
    }
    if(turn==='o'){
        setTimeout(cpu, 1000);
        }

        checkgameover();
    
});

// Function to check if the game is over
function checkgameover(){
    var winningCombinations = [
        ['one', 'two', 'three'],
        ['four', 'five', 'six'],
        ['seven', 'eight', 'nine'],
        ['one', 'four', 'seven'],
        ['two', 'five', 'eight'],
        ['three', 'six', 'nine'],
        ['one', 'five', 'nine'],
        ['three', 'five', 'seven']
    ];

    for (var i = 0; i < winningCombinations.length; i++) {
        var [a, b, c] = winningCombinations[i];
        if (document.getElementById(a).innerHTML === document.getElementById(b).innerHTML &&
            document.getElementById(a).innerHTML === document.getElementById(c).innerHTML &&
            document.getElementById(a).innerHTML !== '') {
            gameOver = true;

            document.getElementById(a).style.border = "5px solid red";  
            document.getElementById(b).style.border = "5px solid red";
            document.getElementById(c).style.border = "5px solid red";

            
            if(document.getElementById(a).innerHTML==='x'){
                document.getElementsByTagName("h1")[0].innerHTML="Player Wins!";
            }
            else
            document.getElementsByTagName("h1")[0].innerHTML="CPU Wins!";
            return;
        }
    }

    if (already.length === 9 && !gameOver) {
        gameOver = true;
        document.getElementsByTagName("h1")[0].innerHTML="Its A Draw!";
    }



}






