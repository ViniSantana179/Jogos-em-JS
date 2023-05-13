let secretNumber = Math.ceil(Math.random()*20);
let score = 20;
document.querySelector('.number').value = secretNumber;

function wrong(){
    if ((score - 1) != 0){
        score --;
        document.querySelector('.score').textContent = score;
    }
    else{
        score--;
        document.querySelector('.score').textContent = score;
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('.message').textContent = 'You lost the game!!!'
        document.querySelector('body').style.backgroundColor = 'red';
    }
    
}



document.querySelector('.check').addEventListener('click', function(){
    if(document.querySelector('.guess').value == ''){
        document.querySelector('.message').textContent = 'No Number Typed.'
    }
    else{
        const guess = document.querySelector('.guess').value;
        document.querySelector('.guess').value='';
        if(guess  != document.querySelector('.number').value){
            document.querySelector('.message').textContent = guess > document.querySelector('.number').value ?  'Too High' : 'Too Low';
            wrong();
            
        }     
        else{
            document.querySelector('.message').textContent = 'Sucess'
            document.querySelector('.highscore').textContent = score > document.querySelector('.highscore').textContent ? score : document.querySelector('.highscore').textContent;
            document.querySelector('body').style.backgroundColor ='green';
            document.querySelector('.number').textContent = secretNumber;
            document.querySelector('.check').setAttribute('arial-dsabled', 'true');
        }
    }
});

document.querySelector('.again').addEventListener('click', function(){
    secretNumber = Math.ceil(Math.random()*20);
    console.log(secretNumber);
    score = 20;
    
    document.querySelector('body').style.backgroundColor = '#222'
    document.querySelector('.score').textContent = score;


    document.querySelector('.number').textContent = '?';
    document.querySelector('.number').value = secretNumber;
    document.querySelector('.guess').value = '';
    document.querySelector('.message').textContent = 'Start guessing...'
})
