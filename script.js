var colors = ['red', 'blue', 'green', 'grey'];

let changecolor=()=>{
    var randColor = colors[Math.floor(Math.random()*colors.length)];
document.body.style.backgroundColor = randColor;
}
