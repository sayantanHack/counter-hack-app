/* write your cool javascript code here */
let counter = document.querySelector('#counter');

document.querySelector('#inc').onclick = function(){
    counter.value = +counter.value - 1;
}

document.querySelector('#dec').onclick = function(){
    counter.value = +counter.value + 1;
}
