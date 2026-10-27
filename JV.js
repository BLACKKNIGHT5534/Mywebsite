
let count = 0;
let number = 1;
let change_ = false;


function plus25(){
    if(document.getElementById("plus25").checked){
        number = 25;
        document.getElementById("plus5").checked = false
    }
    else{
        number = 1
    }
}

function plus5(){
    if(document.getElementById("plus5").checked){
        number = 5;
        document.getElementById("plus25").checked = false
    }
    else{
        number =1
    }
}

function change(){
    document.getElementById("counter").textContent = count
}

document.getElementById("increase").onclick = function(){
    if(count <100){
    count += number
    change()
}
}
document.getElementById("reset").onclick = function(){
    count = 0
    change()
}
document.getElementById("decrease").onclick = function(){
    if(count > 0){
    count -= number
    change()
}
}
document.getElementById("random").onclick = function(){
    count = Math.floor(Math.random() * 100) + 1;
    change()
}