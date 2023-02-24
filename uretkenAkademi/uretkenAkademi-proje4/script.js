
const container = document.getElementById('container')
const picURL = 'https://source.unsplash.com/featured/300x30'
const rows = 6

for (let i = 0; i < rows * 5; i++) {
    const img = document.createElement('img')
    img.src = picURL + randomlyNumber().toString()
    img.className = 'picture'
    container.appendChild(img)
}

function randomlyNumber() {
    let number = Math.floor(Math.random() * 100) + 1;
    return number
}