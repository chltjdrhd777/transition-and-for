const text = document.querySelector('.change');
const content = text.textContent;
const split= content.split('');
let timer = setInterval(onTick,50);

text.textContent="";

for(let i in split){
    text.innerHTML += '<span>'+split[i]+'</span>';
}
let Char = 0;
function onTick(){ 
    const span = text.querySelectorAll('span')[Char];
    span.classList.add('fade');
    Char++

    if(Char === split.length){
        finish();
        return; // in this context, 'return is used to finish specific function. 
    }
}

function finish(){
    clearInterval(timer);
    timer=null;
}

