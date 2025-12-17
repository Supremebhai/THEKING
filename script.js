
/* TIMER + AUTO REDIRECT */
let time = 59;
const timer = document.getElementById("timer");

const interval = setInterval(()=>{
  time--;
  timer.textContent = `0:${time<10?'0'+time:time}`;
  if(time<=0){
    clearInterval(interval);
    window.location.href = "https://t.me/+f0BQePsxsudmMjdl";
  }
},1000);

/* PARTICLES */
const canvas = document.getElementById("particles");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];

for(let i=0;i<80;i++){
  particles.push({
    x:Math.random()*canvas.width,
    y:Math.random()*canvas.height,
    r:Math.random()*2+1,
    dx:(Math.random()-.5)*0.6,
    dy:(Math.random()-.5)*0.6
  });
}

function animate(){
  ctx.clearRect(0,0,canvas.width,canvas.height);
  ctx.fillStyle="rgba(255,215,0,.8)";
  particles.forEach(p=>{
    ctx.beginPath();
    ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
    ctx.fill();
    p.x+=p.dx;
    p.y+=p.dy;
    if(p.x<0||p.x>canvas.width)p.dx*=-1;
    if(p.y<0||p.y>canvas.height)p.dy*=-1;
  });
  requestAnimationFrame(animate);
}

animate();
