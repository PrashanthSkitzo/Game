'use strict';

/*document.querySelector('.message').textContent='🎉Correct Number!';
document.querySelector('.score').textContent='10';
document.querySelector('.guess').value='23';
*/

//---Start--------------------------

let secreatNumber=Math.trunc(Math.random()*20)+1;
let score=20;
let highscore=0;
document.querySelector('.check').addEventListener('click',function(){
    const guess=Number(document.querySelector('.guess').value);
    //console.log(guess,typeof guess);

    if(!guess){
        document.querySelector('.message').textContent='⛔No Number!';
    }else if(guess === secreatNumber){
        document.querySelector('.guessmy').textContent='Well Done 👌!';
        document.querySelector('.message').textContent='🎉Correct Number!';
        document.querySelector('body').style.backgroundColor='#60b347';
        document.querySelector('.number').style.width='30rem';
        document.querySelector('.number').textContent=secreatNumber;
        if(score > highscore){
            highscore=score;
            document.querySelector('.highscore').textContent=highscore;
        }
    }
    
    else if(guess > secreatNumber){
        if(score > 0 ){
            document.querySelector('.message').textContent='📈Too High';
            score--;
            document.querySelector('.score').textContent=score;
        }else{
            document.querySelector('.message').textContent='💥You Lost the Game!';
            document.querySelector('.score').textContent=0;
        }

    }else if(guess < secreatNumber){
        if(score > 0 ){
            document.querySelector('.message').textContent='📈Too Loww';
            score--;
            document.querySelector('.score').textContent=score;
        }else{
            document.querySelector('.message').textContent='💥You Lost the Game!';
            document.querySelector('.score').textContent=0;
        }
    }
});

document.querySelector('.again').addEventListener('click',function(){
    score=20;
    secreatNumber=Math.trunc(Math.random()*20)+1;
    document.querySelector('.message').textContent='Start guessing...';
    document.querySelector('.guessmy').textContent='Guess My Number!';
    document.querySelector('.score').textContent=score;
    document.querySelector('body').style.backgroundColor='#222';
    document.querySelector('.number').textContent='?';
    document.querySelector('.guess').value = '';
});
//---End!-------------------