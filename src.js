// let btn =document.querySelector("#add");

// btn.addEventListener("click",function(){
//     document.body.style.backgroundColor ="red"
//     btn.style.backgroundColor="blue"
// })

let box =document.querySelector(".box");
let btnOn =document.querySelector("#on");
let btnoff =document.querySelector("#off");


btnOn.addEventListener("click",function(){
    box.style.backgroundColor='yellow';
})


btnoff.addEventListener("click",function(){
    box.style.backgroundColor='transparent';
})