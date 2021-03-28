const clickMe = document.querySelector('#click');
const here = document.querySelector('#here');
const first = document.querySelector('#first');


clickMe.addEventListener('click', function(){
    here.style.backgroundColor =  makeRandHexColor();
    first.innerText = makeRandHexColor();
})
 
// const makeRandColor = () => {
//     const r = Math.floor((Math.random() * 256) + 1);
//     const g = Math.floor((Math.random() * 256) + 1);
//     const b = Math.floor((Math.random() * 256) + 1);
//     return `rgb(${r}, ${g}, ${b})`;
// }

const makeRandHexColor = () => {
    const HexColor = Math.floor(Math.random()*16777215).toString(16);
    return `#${HexColor}`;
}