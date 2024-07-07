// create the hex code color

function generateRandomColorArray() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for(let i=0; i<6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

let totalColors = [];
for(let i=0; i<50; i++) {
    totalColors.push(generateRandomColorArray());
}

document.querySelector('.btn').addEventListener('click' , () => {
    // generate the random number between 0 t0 49.
    let random = Math.floor(Math.random() * 50);
    document.querySelector('.btn__div').style.backgroundColor = totalColors[random];
    document.querySelector('.color__title').innerText = totalColors[random];
})

document.querySelector('.reset__btn').addEventListener('click' , () => {
    document.querySelector('.btn__div').style.backgroundColor = 'white';
    document.querySelector('.color__title').innerText = '#FFFFFF';
})