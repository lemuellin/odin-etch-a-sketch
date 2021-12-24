let totalLength = 24;
const singleGrid = [];
const container = document.querySelector('#container');

//initialization
createGrid(totalLength);

// create grid
function createGrid(totalLength){
    for (let i=0; i<totalLength**2; i++){
        // create grid
        singleGrid[i] = document.createElement('div');
        singleGrid[i].classList.add('grid');
        let string = "width: " + 400/totalLength + "px; height: " + 400/totalLength + "px";
        singleGrid[i].style.cssText = string;
        container.appendChild(singleGrid[i]);
        singleGrid[i].addEventListener('mouseenter', ()=>{singleGrid[i].style.backgroundColor = "rgb(0,0,0)"});
    }
}
    
// clear grid
function resetGrid(){
    for (let i=0; i<totalLength**2; i++){
        singleGrid[i].style.backgroundColor = "";
        singleGrid[i].addEventListener('mouseenter', ()=>{singleGrid[i].style.backgroundColor = "rgb(0,0,0)"});
    }
}

// create new grid size
function createNew(){
    for (let i=0; i<totalLength**2; i++){
        container.removeChild(singleGrid[i]);
    }
    totalLength = prompt('Please input the desired panel size. (less than 100)')
    createGrid(totalLength);
}

//Color Mode
function color(){
    for (let i=0; i<totalLength**2; i++){
        singleGrid[i].addEventListener('mouseenter', ()=>{singleGrid[i].style.backgroundColor = "rgb(0,0,0)"});
    }
}

function randomColor(){
    let x = Math.floor(Math.random()*256);
    let y = Math.floor(Math.random()*256);
    let z = Math.floor(Math.random()*256);
    let bgcolor = "rgba(" + x + "," + y + "," + z + ",1.0)";
    return bgcolor;
}



// Rainbow Mode
function RGB(){
    for (let i=0; i<totalLength**2; i++){
        singleGrid[i].addEventListener('mouseenter', ()=>{singleGrid[i].style.backgroundColor = randomColor()});
    }
}
/*
// Gray Mode = FAIL
function gray(){
    for (let i=0; i<totalLength**2; i++){

        let currentOpacity = singleGrid[i].style.backgroundColor.slice(-4,-1);
        let currentColor = singleGrid[i].style.backgroundColor.slice(5,16);
        console.log(singleGrid[i].style.backgroundColor);
        console.log(currentColor);
        console.log(currentOpacity);

        if (currentColor == "128,128,128" && currentOpacity != ",0"){
            singleGrid[i].addEventListener('mouseenter', ()=>{singleGrid[i].style.backgroundColor = `rgba(128,128,128,${currentOpacity-0.1})`});
        } else if (currentColor == "128,128,128" && currentOpacity == ",0"){
            return;
        }else{
            singleGrid[i].addEventListener('mouseenter', ()=>{singleGrid[i].style.backgroundColor = "rgba(128,128,128,1.0)"});
        }
        
1. colored -Gray1
2. not colored -Gray1
3. grayed - Gray++
4. black - return

                let currentOpacity = Number(this.style.backgroundColor.slice(-4, -1));
                if (currentOpacity <= 0.9) {
                    this.style.backgroundColor = `rgba(0, 0, 0, ${currentOpacity + 0.1})`;
                    this.classList.add('gray');
                }
            } else if (this.classList == 'gray' && this.style.backgroundColor == 'rgb(0, 0, 0)') {
                return;
            } else {
                this.style.backgroundColor = 'rgba(0, 0, 0, 0.1)';  
            }

    }
}

// Button - Gray Mode
const btnGray = document.querySelector('.btnGray');
btnGray.addEventListener('click', ()=>{gray()});

*/


// Eraser
function eraser(){
    for (let i=0; i<totalLength**2; i++){
        singleGrid[i].addEventListener('mouseenter', ()=>{singleGrid[i].style.backgroundColor = ""});
    }
}






// Button - Color Mode
const btnColor = document.querySelector('.btnColor');
btnColor.addEventListener('click', ()=>{color()});

// Button - Rainbow Mode
const btnRGB = document.querySelector('.btnRGB');
btnRGB.addEventListener('click', ()=>{RGB()});



// Button - Eraser
const btnEraser = document.querySelector('.btnEraser');
btnEraser.addEventListener('click', ()=>{eraser()});

// Button - Clear
const btnClear = document.querySelector('.btnClear');
btnClear.addEventListener('click', ()=>{resetGrid()});

// Button - Change Panel Size
const btnCreate = document.querySelector('.btnCreate');
btnCreate.addEventListener('click', ()=>{createNew()});




