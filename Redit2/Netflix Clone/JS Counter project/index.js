const count = document.getElementById('count');
const add = document.getElementById('add');
const Reset = document.getElementById('Reset');
const sub = document.getElementById('sub');

add.addEventListener('click',() => {
    count.innerHTML++;
    applyColor()
})
sub.addEventListener('click',() => {
    count.innerHTML--;
    applyColor()
})
Reset.addEventListener('click',() => {
    count.innerHTML = 0;
    applyColor()
})

function applyColor(){
    if(count.innerHTML>0){
        count.style.color = 'hotpink';
    }
    else if(count.innerHTML<0){
        count.style.color = 'red';
    }else{
        count.style.color = 'black';
    }
}



