let button = document.getElementById('but')
let phone = document.getElementById('phone')
let inputPlace = document.getElementById('inp_place')
let circle = document.getElementById('circle')
let main = document.getElementById('main')
let input = document.getElementById('inp')
let body = document.getElementById('body')
let sticker = document.getElementsByClassName('stickers')
let ye = document.getElementById('ye')
ye.addEventListener('click', () =>{
    addSticker()
})
body    .addEventListener("keydown", (event) =>{
    if (event.keyCode === 27) {
        phone.style.display = 'none'
        inputPlace.style.display = 'none'
        inp.value = ''
    }
})
button.addEventListener('click', () =>{
    phone.style.display = 'flex'
    inputPlace.style.display = 'flex'
})
circle.addEventListener('click', () =>{
    phone.style.display = 'none'
    inputPlace.style.display = 'none'
})
inp.addEventListener('keydown', (event) =>{
    if (event.key === 'Enter') {
        addSticker()
    }
    if (event.keyCode === 27) {
        phone.style.display = 'none'
        inputPlace.style.display = 'none'
        inp.value = ''
    }
})
function addSticker () {
    let block = document.createElement('div')
    block.className = "stickers"
    block.innerHTML = inp.value
    block.style.backgroundColor = color()
    block.style.transform = rotating()
    block.style.margin = margin()
    block.addEventListener('dblclick', () =>{      
    block.remove()
    })
    block.addEventListener('touchend', ()=>{
        block.remove()
    })  
    main.append(block)
    inp.value = ''
}
body.addEventListener('keydown', (event) =>{
    if (event.key === '+') {
        phone.style.display = 'flex'
        inputPlace.style.display = 'flex'
        
    }
})
function margin () {
    let tandColor = ["-5px", "1px", "5px", "10px", "15px", "20px"];
    return tandColor[Math.floor(Math.random() * tandColor.length)]
}
function rotating () {
    let randRotate = ["rotate(3deg)", "rotate(1deg)","rotate(-1deg)","rotate(-3deg)","rotate(-5deg)","rotate(-10deg)"]
    if (window.innerWidth < 400) {
        delete randRotate[5];
    }
    return randRotate[Math.floor(Math.random() * randRotate.length)]
}
let i = 0
function color() {
    let randColor = ["#c2ff3d", "#ff3de8","#3dc2ff","#04e022","#bc83e6","#ebb328"]
    i++;
    if (i > 5) {
        i = 0
    }
    return randColor[i];
}
if (window.innerWidth < 720) {
    let head = document.getElementById('head')
    let del = document.getElementById('del')
    head.removeChild(del)
}