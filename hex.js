const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.querySelector('.btn');
const color = document.querySelector('.color')
btn.addEventListener('click', ()=> {
    genHexCode();    
})
window.addEventListener('keydown', (event) => {
    if (event.key === " ") {
        genHexCode();
    }
})
btn.addEventListener('mouseover', (event) => {
const x = event.offsetX;
const y = event.offsetY;
btn.style.setProperty("--xPos", x + "px");
btn.style.setProperty("--yPos", y + "px");
})


const getRandomNumber = () => {
    return Math.floor(Math.random() * hex.length)
}
const genHexCode = () => {
    let hexStr = '#'
    for (let i = 0; i < 6; i++) {
    hexStr += hex[getRandomNumber()]
    }
    document.body.style.background = hexStr;
    color.textContent = hexStr;
    color.style.color = hexStr;

}


