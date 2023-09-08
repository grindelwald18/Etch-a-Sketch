let standartColor = 'black';
let standartSize = 20;
let divSIze=25;
const mainBox = document.getElementById('window')
const colorWindow = document.getElementById('colorWindow')
const buttonEraser = document.getElementById('eraser')
const buttonClerar = document.getElementById('clerar')
const sizeValue =document.getElementById('sizeValue')
const sizeSlider =document.getElementById('sizeSlider')
let changeSize=25;
const paint = ()=>{
    cell.style.backgroundColor = 'black';
}

function updateSize(){
    sizeSlider.addEventListener('change', function(event){
        standartSize = event.target.value
        sizeValue.textContent=`${standartSize + " x " + standartSize}`
        changeSize = 500/standartSize
        mainBox.innerHTML=''
        creatTable(changeSize)
    })
}

colorWindow.addEventListener('input', function(event){
    // let img = (event.target.value)
    // console.log(img)
    standartColor = event.target.value
})

buttonEraser.addEventListener('click', function(){
    standartColor='#fefefe'
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
            cell.setAttribute("style", `width: ${divSIze}px`)
            cell.setAttribute("style", `height: ${divSIze}px`)
            // cell.addEventListener('mouseover', paint)
            cell.addEventListener('mouseover',function(){
                cell.style.backgroundColor = standartColor;
            })

            line.appendChild(cell)
        }

        mainBox.appendChild(line)
    }
}
window.onload = () => {
    creatTable(divSIze)
    updateSize();

}