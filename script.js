'use strict';
let num= Math.trunc(Math.random() * 20)+1;
let  score=20;
let highscore = 0;
document.querySelector('.number').textContent=num;

document.querySelector('.check').addEventListener('click',function()
{
     const guess= Number(document.querySelector('.guess').value);
     

     if(!guess)
     {
        document.querySelector('.message').textContent='No Number';
     }
     else if(guess==num)
     {
        document.querySelector('.message').textContent="Searched Number";
        
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (score > highscore) {
        highscore = score;
        document.querySelector('.highscore').textContent = highscore;
     }}
     else if (guess>num)
     {
        if(score>1)
        {
        document.querySelector('.message').textContent="Too High";
        score--;
        document.querySelector('.score').textContent=score;
        }
        else
        {
            document.querySelector('.score').textContent=0;
            document.querySelector('.message').textContent="U LOSE Dumbo";
        }
     }
     else if (guess<num)
     {
        if(score>1)
        {
        document.querySelector('.message').textContent="Too Low";
        score--;
        document.querySelector('.score').textContent=score;
        }
        else
        {
            document.querySelector('.score').textContent=0;
            document.querySelector('.message').textContent="U LOSE Dumbo";
        }
     }

});
document.querySelector('.again').addEventListener('click', function () {
   score = 20;
   num = Math.trunc(Math.random() * 20) + 1;
  
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = num;
    document.querySelector('.guess').value = '';
  
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
  });