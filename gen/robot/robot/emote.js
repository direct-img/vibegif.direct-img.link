// cute steel robot head with a glowing LED dot-matrix screen face cycling expressions: blink, glance left and right, happy ^^ smile, pulsing pink heart eyes, surprised O mouth, wink, antenna light blinking
const G={
  o:'.###. ##### ##### ##### .###.',
  b:'..... ..... ##### ..... .....',
  h:'..... ..#.. .#.#. #...# .....',
  v:'.#.#. ##### ##### .###. ..#..',
  s:'.###. #...# #...# #...# .###.',
  n:'....... .#####. .......',
  m:'#.....# .#...#. ..###..',
  O:'..###.. .#...#. ..###..',
  k:'......# #....#. .####..'
}
// left eye, right eye, mouth, glance dx, head dy, ms
const F=[
  ['o','o','n',0,0,700],['b','b','n',0,0,90],['o','o','n',0,0,300],['o','o','n',-1,0,450],
  ['o','o','n',1,0,450],['o','o','n',0,0,200],['h','h','m',0,-3,700],['v','v','m',0,-2,170],
  ['x','x','m',0,0,170],['v','v','m',0,-2,170],['x','x','m',0,0,170],['v','v','m',0,-2,300],
  ['b','b','n',0,0,90],['s','s','O',0,-5,650],['o','b','k',0,0,650],['b','b','n',0,0,90]
]
export const frames=16,delay=F.map(f=>f[5])
export default(c,t,i)=>{
  const[l,r,M,dx,dy]=F[i],pink=l=='v'||l=='x',big=l=='v',L=pink?'v':l,R=pink?'v':r,led=pink?'#ff5c8a':'#5ff2ff'
  const rr=(x,y,w,h,r)=>{c.beginPath();c.roundRect(x,y,w,h,r)}
  c.translate(0,dy)
  // antenna
  c.beginPath();c.moveTo(128,70);c.lineTo(128,34);c.stroke()
  c.fillStyle=i%2?'#ff4a3d':'#7a2a24'
  if(i%2){c.shadowColor='#ff4a3d';c.shadowBlur=14}
  c.beginPath();c.arc(128,30,10,0,7);c.fill();c.shadowBlur=0;c.stroke()
  c.fillStyle='#fff';c.beginPath();c.arc(125,27,3,0,7);c.fill()
  // ears
  for(const s of[-1,1]){
    c.fillStyle='#9aa4b1';rr(s<0?20:212,112,24,56,9);c.fill();c.stroke()
    c.fillStyle='#6d7785';c.beginPath();c.arc(s<0?32:224,140,6,0,7);c.fill()
  }
  // head shell with flat shading bands
  rr(38,64,180,154,34);c.fillStyle='#c9d1db';c.fill()
  c.save();c.clip()
  c.fillStyle='#a8b2bf';c.fillRect(178,60,50,170);c.fillRect(30,196,200,30)
  c.fillStyle='#e9eef4';rr(50,72,110,14,7);c.fill()
  c.restore()
  rr(38,64,180,154,34);c.stroke()
  // screen
  c.fillStyle='#121a26';rr(56,82,144,112,20);c.fill();c.lineWidth=5;c.stroke()
  for(let y=0;y<11;y++)for(let x=0;x<15;x++){
    const g=(k,cx,cy)=>{const r=G[k].split(' ')[y-cy];return r&&r[x-cx]=='#'}
    const on=g(L,1+dx,1)||g(R,9+dx,1)||g(M,4,7),px=65+x*9,py=93+y*9
    c.fillStyle=on?led:'#223142'
    if(on){c.shadowColor=led;c.shadowBlur=big?12:7}
    c.beginPath();c.arc(px,py,on?(big&&y<7?4.4:3.6):1.7,0,7);c.fill();c.shadowBlur=0
  }
  // glass glare
  c.fillStyle='rgba(255,255,255,.13)';c.beginPath();c.moveTo(66,186);c.lineTo(112,88);c.lineTo(132,88);c.lineTo(86,186);c.fill()
  // floating hearts while lovestruck
  if(pink){
    const k=(i-7)/5
    for(const[hx,o]of[[26,0],[230,.5]]){
      const p=(k+o)%1,y=62-p*44,s=9+p*4
      c.save();c.translate(hx,y);c.scale(s/10,s/10)
      c.beginPath();c.moveTo(0,8);c.bezierCurveTo(-14,-2,-6,-14,0,-5);c.bezierCurveTo(6,-14,14,-2,0,8)
      c.fillStyle='#ff5c8a';c.fill();c.lineWidth=4;c.stroke();c.restore()
    }
  }
}
