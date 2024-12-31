let container = document.querySelector('.container');
let box1 = document.querySelector('.box1');
let box2 = document.querySelector('.box2');
let box3 = document.querySelector('.box3');


container.style.display = 'flex';
container.style.justifyContent = 'flex-start';
container.style.width = '500px';
container.style.marginLeft = '50px';


box1.style.marginTop = '10px';
box1.style.border = '4px solid';
box1.style.width = '100px';
box1.style.padding = '50px';
box1.style.marginLeft = '5px';
box1.style.marginRight = '10px'; 
box1.style.borderRadius = '8px';
box1.style.borderColor = 'blueviolet';


box2.style.marginTop = '10px';
box2.style.border = '4px solid';
box2.style.width = '100px';
box2.style.padding = '50px';
box2.style.marginLeft = '5px';
box2.style.marginRight = '10px'; 
box2.style.borderRadius = '8px';
box2.style.borderColor = 'yellow';


box3.style.marginTop = '10px';
box3.style.border = '4px solid';
box3.style.width = '100px';
box3.style.padding = '50px';
box3.style.marginLeft = '5px';
box3.style.borderRadius = '8px';
box3.style.borderColor = 'red';


// boxes.forEach((box, index) => {
//     box.style.cssText = `
//         margin-top: 10px;
//         border: 2px solid;
//         width: 100px;
//         padding: 50px;
//         margin-left: 5px;
//         border-radius: 8px;
//     `;

//     const colors = ['red', 'blue', 'yellow'];
//     box.style.borderColor = colors[index];
// });
