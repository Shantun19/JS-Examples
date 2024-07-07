let counter = 0;
let displayCounterValue = document.querySelector('.counter__value');
displayCounterValue.innerText = counter

document.querySelector('.btn1').addEventListener('click' , () => {
    counter -= 1;
    displayCounter(counter);
})

document.querySelector('.btn2').addEventListener('click' , () => {
    counter = 0;
    displayCounter(counter);
})

document.querySelector('.btn3').addEventListener('click' , () => {
    counter += 1;
    displayCounter(counter);
})



function displayCounter(current_counter_value) {
    displayCounterValue.innerText = current_counter_value
}
