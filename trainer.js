var trainers = document.querySelectorAll('.trainer');
var buttonLeft = document.getElementById('button-left');
var buttonRight = document.getElementById('button-right');

buttonLeft.addEventListener('click', function(event) {
    event.preventDefault();
    toPrev();
});

buttonRight.addEventListener('click', function(event) {
    event.preventDefault();
    toNext();
});

var current = 0;
var prev = 4;
var next = 1;
                
function toPrev(){
    if(current > 0){
        toTrainer(current -1);
    }
    else{
        toTrainer(trainers.length -1);
    }
}
                
function toNext(){
    if(current < 4){
        toTrainer(current + 1);
    }
    else{
        toTrainer(0);
    }
}
                
function toTrainer(num){
current = num;
prev = current -1;
next = current +1;
                
for(var i = 0; i < trainers.length; i++)
{
    trainers[i].classList.remove('trainer--active');
    trainers[i].classList.remove('trainer--next');
    trainers[i].classList.remove('trainer--prev');
}
if (next == 5)
{
    next = 0;
}
if (prev == -1)
{
    prev = 4;
}
                
    trainers[current].classList.add('trainer--active');
    trainers[next].classList.add('trainer--next');
    trainers[prev].classList.add('trainer--prev');
}