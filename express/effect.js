var p;
setup();
console.log(p)
function setup() { 
    p = document.getElementById("band22") 
}

function onDrag() {

    p.style.fontWeight = 600;
    p.style.fontSize = "50px";


}
function offDrag() {

    p.style.fontWeight = 400;
    p.style.fontSize = "30px";


}

function u(t) { // dwitter code goes here

    D = 23; // divisions

    // https://www.dwitter.net/d/28282
    c.width|=0;for(i=0;i<1e3;i++)x.lineTo(960+C(d=i+t)*i,540+S(d)*i);x.stroke();
}

let time = 0;
let frame = 0;
let FPS = 60;
let nextFrameMs = 0;

let x = c.getContext('2d');
let S = Math.sin;
let C = Math.cos;
let T = Math.tan;
let R = (r, g, b, a = 1) => `rgba(${r | 0},${g | 0},${b | 0},${a})`;

let loop = (frameTime) => {
    requestAnimationFrame(loop);

    // limit update rate to FPS
    if (frameTime) {
        if (frameTime < nextFrameMs - 2)
            return;  // skip this cycle
        nextFrameMs = Math.max(nextFrameMs + 1000 / FPS, frameTime);
    }

    // update time
    time = frame / FPS;
    if (time * FPS | 0 == frame - 1)
        time += 0.000001; // fix floating point bug
    ++frame;

    // update user function
    u(time);

    // fit dwitter sized canvas to window
    const aspect = 1080 / 500;
    const width = aspect > innerWidth / innerHeight ? innerWidth : innerHeight * aspect;
    c.style.width = width + 'px';
    document.body.style.textAlign = 'center';
}

loop();
