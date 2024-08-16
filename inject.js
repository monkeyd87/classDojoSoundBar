// Create a new button element
var negBtn = document.createElement('button');
negBtn.innerText = 'N';
negBtn.style.padding = '10px';
negBtn.style.borderRadius = '50%'
negBtn.style.backgroundColor = 'rgb(217, 34, 24)';
negBtn.style.color = 'white';
negBtn.style.border = 'none';
negBtn.style.cursor = 'pointer';
negBtn.style.zIndex = 1000;
negBtn.style.height = '50px';
negBtn.style.width = '50px';

var posbtn = document.createElement('button');
posbtn.innerText = 'P';
posbtn.style.borderRadius = '50%'
posbtn.style.backgroundColor = 'rgb(19, 128, 58)';
posbtn.style.color = 'white';
posbtn.style.border = 'none';
posbtn.style.cursor = 'pointer';
posbtn.style.zIndex = 1000;
posbtn.style.height = '50px';
posbtn.style.width = '50px';

const btnContainer = document.createElement('div')
btnContainer.style.position = 'fixed';
btnContainer.style.display = 'flex';
btnContainer.style.gap = '8px';
btnContainer.style.bottom = '75px';
btnContainer.style.right = '100px';
btnContainer.style.padding = '10px';


btnContainer.appendChild(posbtn)
btnContainer.appendChild(negBtn)

// Add an event listener to the button to play the sound when clicked
negBtn.addEventListener('click', function() {
    if (typeof soundManager !== 'undefined' && soundManager.play) {
        soundManager.play('n');
    } else {
        alert('soundManager is not defined on this page.');
    }
});

posbtn.addEventListener('click', function() {
    if (typeof soundManager !== 'undefined' && soundManager.play) {
        soundManager.play('p');
    } else {
        alert('soundManager is not defined on this page.');
    }
});

addEventListener('keypress',(event)=>{
    const {key} = event
    if(key == '.'){
        soundManager.play('p')
    }
    if(key == ','){
        soundManager.play('n')
    }
})

// Add the button to the body of the webpage
document.body.appendChild(btnContainer);
