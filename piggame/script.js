const playerOne = document.querySelector('.player--0')
const playerTwo = document.querySelector('.player--1')
let playing = '';
let points = '';
let cont = 0 ;

let who = function(){
    if(playerOne.classList.contains('player--active')){
        playing = document.getElementById('current--0')
        points = document.getElementById('score--0')
        let resp = 1;
        return resp; 
    
    }
    else
    {
        playing = document.getElementById('current--1')
        resp = 0;
        return resp;
    }
}

let changeSide = function(){
    if(who()){
        playerOne.classList.remove('player--active')
        playerTwo.classList.add('player--active')
        playing = document.getElementById('current--1')
        points = document.getElementById('score--1')
    }
    else {
        playerTwo.classList.remove('player--active')
        playerOne.classList.add('player--active')
        playing = document.getElementById('current--0')
        points = document.getElementById('score--0')
    }

}

who();
console.log(who());


document.querySelector('.btn--roll').addEventListener('click', function(){
    const roll = Math.ceil(Math.random()*6);
    const dice = document.querySelector('.dice');


    dice.setAttribute('src', 'dice-'+ roll +'.png');

    if (roll == 1){
        playing.textContent = 0;
        changeSide();
    }
    else{
        if(playing.textContent == 0){
            playing.textContent = roll;
            console.log('Aqui');
        }
        else{
            playing.textContent = parseInt(playing.textContent) + roll
            console.log('Aqui2');
        }
    
        cont ++
    }

});

document.querySelector('.btn--hold').addEventListener('click', function(){
    console.log(points);
    points.textContent = parseInt(points.textContent) + parseInt(playing.textContent);
    if (points.textContent >= 30){
        if(who()){
            playerOne.classList.add('player--winner')
        }
        else{
            playerTwo.classList.add('player--winner')
        }
        document.querySelector('.btn--roll').setAttribute('disabled', 'disabled');
        document.querySelector('.btn--hold').setAttribute('disabled', 'disabled');
    }
    playing.textContent = 0;
    changeSide();

})

document.querySelector('.btn--new').addEventListener('click', function(){
        window.location.reload();
})