const cdisplay = document.querySelector('#contentdisplay');
const one = document.querySelector('.one');
const two = document.querySelector('.two');
const three = document.querySelector('.three');
const four = document.querySelector('.four');
const five = document.querySelector('.five');
const six = document.querySelector('.six');
const seven = document.querySelector('.seven');
const eight = document.querySelector('.eight');
const nine = document.querySelector('.nine');
const zero = document.querySelector('.zero');
const reset = document.querySelector('.reset');
const dot = document.querySelector('.dot');
const add = document.querySelector('.add');
const sub = document.querySelector('.sub');
const divide = document.querySelector('.divide');
const multiplication = document.querySelector('.multiplication');
const equal = document.querySelector('.equal');


    

// --functions-------------------
const addEvents = (task) => {
    task.addEventListener('click', () => cdisplay.textContent += task.textContent);
}

const solve = () => {
    let key = cdisplay.textContent;
    let result = eval(key);
    cdisplay.textContent = result;
}

 //----assigning values -----------------  
 
  

addEvents(one);
addEvents(two);
addEvents(three);
addEvents(four);
addEvents(five);
addEvents(six);
addEvents(seven);
addEvents(eight);
addEvents(nine);
addEvents(zero);
addEvents(dot);
addEvents(multiplication);
addEvents(divide);
addEvents(add);
addEvents(sub);

// ---------reset and results----------------------------
reset.addEventListener('click', () => cdisplay.textContent = '');

    equal.addEventListener('click', () => {
        try {
            solve();
        }catch (e) {
            alert("Invalid placement");
            cdisplay.textContent = ''
        }
    })
