const total = 5;
const prog = document.getElementById('progress');
for(let i=1;i<=total;i++){
  const d = document.createElement('span');
  d.dataset.i = i;
  prog.appendChild(d);
}
function go(n){
  document.querySelectorAll('.step').forEach(s=>s.classList.toggle('active', +s.dataset.step===n));
  document.querySelectorAll('#progress span').forEach(s=>s.classList.toggle('on', +s.dataset.i<=n));
}
go(1);

// start background music on the very first tap/click anywhere
const bgm = document.getElementById('bgm');
function startMusic(){
  bgm.play().catch(()=>{});
  document.removeEventListener('click', startMusic);
  document.removeEventListener('touchstart', startMusic);
}
document.addEventListener('click', startMusic, {once:true});
document.addEventListener('touchstart', startMusic, {once:true});

const dodgeLines = [
  "hmm, are you sure? 👀",
  "nope, try again 🙈",
  "you can't catch this one",
  "keep trying, I'm not going anywhere 😅",
  "the other button is right there though 🤍"
];
let dodgeCount = 0;
const noBtn = document.getElementById('noBtn');
const zone = document.getElementById('dodgeZone');
const msg = document.getElementById('dodgeMsg');
function placeNoBtn(){
  const zw = zone.clientWidth, zh = zone.clientHeight;
  const bw = noBtn.offsetWidth || 160, bh = noBtn.offsetHeight || 44;
  const x = Math.random()*(zw-bw);
  const y = Math.random()*(zh-bh);
  noBtn.style.left = Math.max(0,x)+'px';
  noBtn.style.top = Math.max(0,y)+'px';
}
function dodge(){
  dodgeCount++;
  placeNoBtn();
  msg.textContent = dodgeLines[Math.min(dodgeCount-1, dodgeLines.length-1)];
}
noBtn.addEventListener('mouseenter', dodge);
noBtn.addEventListener('touchstart', function(e){ e.preventDefault(); dodge(); }, {passive:false});
noBtn.addEventListener('click', function(e){ e.preventDefault(); dodge(); });
window.addEventListener('resize', ()=>{ if(document.querySelector('.step[data-step="4"]').classList.contains('active')) placeNoBtn(); });

function forgive(){
  go(5);
  burst();
}

// gentle floating hearts background
for(let i=0;i<10;i++){
  const h = document.createElement('div');
  h.className='heart';
  h.textContent = ['🤍','💗','✨'][i%3];
  h.style.left = Math.random()*100+'vw';
  h.style.animationDelay = (Math.random()*9)+'s';
  h.style.animationDuration = (7+Math.random()*5)+'s';
  document.body.appendChild(h);
}

function burst(){
  const c = document.getElementById('confetti');
  const ctx = c.getContext('2d');
  c.width = innerWidth; c.height = innerHeight;
  const pieces = Array.from({length:80}, ()=>({
    x: innerWidth/2, y: innerHeight/2,
    vx:(Math.random()-.5)*10, vy:(Math.random()-1.4)*10,
    size: 4+Math.random()*4,
    color:['#e85d75','#ffb3c1','#ffd6de','#c8425c'][Math.floor(Math.random()*4)],
    life:60+Math.random()*30
  }));
  function frame(){
    ctx.clearRect(0,0,c.width,c.height);
    let alive=false;
    pieces.forEach(p=>{
      if(p.life<=0) return;
      alive=true;
      p.vy += 0.18; p.x+=p.vx; p.y+=p.vy; p.life--;
      ctx.fillStyle=p.color;
      ctx.fillRect(p.x,p.y,p.size,p.size);
    });
    if(alive) requestAnimationFrame(frame);
    else ctx.clearRect(0,0,c.width,c.height);
  }
  frame();
}
