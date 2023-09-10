let standartColor = 'black';
let standartSize = 20;
let divSIze=25;
const mainBox = document.getElementById('window')
const colorWindow = document.getElementById('colorWindow')
const buttonEraser = document.getElementById('eraser')
const buttonClerar = document.getElementById('clerar')
const sizeValue =document.getElementById('sizeValue')
const sizeSlider =document.getElementById('sizeSlider')
const rainbowMode =document.getElementById('rainbowMode')
const mode =document.getElementById('mode')
let currentMode='color'
let changeSize=25;
let selectedColor = 'black';
const paint = ()=>{
    cell.style.backgroundColor = 'black';
}

function updateSize(){
    sizeSlider.addEventListener('change', function(event){
        standartSize = event.target.value
        sizeValue.textContent=`${standartSize + " x " + standartSize}`
        changeSize = 500/standartSize
        mainBox.innerHTML=''
        console.log(changeSize)
        creatTable(changeSize)
    })
}



colorWindow.addEventListener('input', function(event){
    // let img = (event.target.value)
    // console.log(img)
    standartColor = event.target.value
    selectedColor=standartColor;
})

mode.addEventListener('click', function(){
    standartColor = selectedColor;
    currentMode='color';
    changeColor()
})

buttonEraser.addEventListener('click', function(){
    selectedColor=standartColor;
    currentMode='eraser'
    changeColor()
})

rainbowMode.addEventListener('click', function(){
    selectedColor=standartColor;
    currentMode='rainbow'
    changeColor()
})

buttonClerar.addEventListener('click', function(){
    console.log(mainBox)
    mainBox.innerHTML=''
    creatTable(changeSize)
})



function creatTable(divSIze){
    for(let i=0;i<standartSize;i++){
        let line = document.createElement('div');
        line.classList.add('line')
        for(let j=0;j<standartSize;j++){
            let cell = document.createElement('div')
            cell.classList.add('minDiv')
            cell.setAttribute("style", `width: ${divSIze}px; height: ${divSIze}px`);
            // cell.addEventListener('mouseover', paint)
            // cell.setAttribute("style", `width: ${divSIze}px`);
            // cell.setAttribute("style", `height: ${divSIze}px`);
            cell.addEventListener('mouseover',changeColor)
            cell.addEventListener('mousedown',changeColor)
            // {
            //         cell.style.backgroundColor = standartColor;
            // })

            line.appendChild(cell)
        }

        mainBox.appendChild(line)
    }
}
window.onload = () => {
    creatTable(divSIze)
    updateSize();

}

function changeColor(e) {
    if (e.type === 'mouseover' && !mouseDown) return
    if (currentMode === 'rainbow') {
      const randomR = Math.floor(Math.random() * 256)
      const randomG = Math.floor(Math.random() * 256)
      const randomB = Math.floor(Math.random() * 256)
      e.target.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`
    } else if (currentMode === 'color') {
      e.target.style.backgroundColor = standartColor
    } else if (currentMode === 'eraser') {
      e.target.style.backgroundColor = '#fefefe'
    }
  }