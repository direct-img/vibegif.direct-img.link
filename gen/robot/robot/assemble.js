// boxy robot that shudders, powers down and pops apart into a floating exploded view (head, antenna, arms, legs, torso), then the parts snap back together with sparks and its eyes light up again
export const frames=32,delay=60
const T=Math.PI*2
const ob=x=>{const s=1.9;return 1+(s+1)*(x-1)**3+s*(x-1)**2}
const sm=x=>x<0?0:x>1?1:x*x*(3-2*x)
const LT='#e3e8ed',SH='#b3bfca',DK='#1d2733',MD='#5b6672',RD='#e5483b'
const tube=(c,p,w,col)=>{
  for(const[lw,s]of[[w+7,'#111'],[w,col]]){c.lineWidth=lw;c.strokeStyle=s;c.beginPath();p.forEach(([x,y],k)=>k?c.lineTo(x,y):c.moveTo(x,y));c.stroke()}
  c.lineWidth=4.5;c.strokeStyle='#111'
}
const disc=(c,x,y,r,f)=>{c.beginPath();c.arc(x,y,r,0,T);c.fillStyle=f;c.fill();c.stroke()}
// shaded rounded box: shade colour, lighter copy nudged up-left, outline
const sb=(c,x,y,w,h,r,a=LT,b=SH)=>{
  const p=()=>{c.beginPath();c.roundRect(x,y,w,h,r)}
  p();c.fillStyle=b;c.fill();c.save();c.clip();c.beginPath();c.roundRect(x-5,y-4,w-2,h,r);c.fillStyle=a;c.fill();c.restore();p();c.stroke()
}
// parts: pivot, explode offset, spin, explode stagger, return stagger, joint where it clicks in
const P=[
  {n:'legL',p:[113,190],d:[-40,-2],r:-.35,a:.03,b:0,j:[113,163]},
  {n:'legR',p:[143,190],d:[40,0],r:.32,a:.04,b:.01,j:[143,163]},
  {n:'torso',p:[128,130],d:[0,-22],r:.12,a:.02,b:.03,j:[128,160]},
  {n:'armL',p:[80,135],d:[-52,-40],r:-.3,a:.01,b:.05,j:[90,112]},
  {n:'armR',p:[176,135],d:[52,-36],r:.38,a:.015,b:.06,j:[166,112]},
  {n:'head',p:[128,66],d:[-8,-44],r:-.35,a:0,b:.08,j:[128,96]},
  {n:'ant',p:[128,22],d:[46,-36],r:1.3,a:0,b:.1,j:[128,36]}
]
const ex=(t,q)=>{
  const u=t-q.a,v=t-q.b
  return u<.18?0:u<.3?ob((u-.18)/.12):v<.6?1:v<.72?1-((v-.6)/.12)**3:0
}
export default(c,t,i)=>{
  const on=t<.13||t>=.88,flash=t>=.88&&t<.92,shake=t>=.12&&t<.18?Math.sin(i*2.7)*2.5:0
  c.translate(128+shake,232);c.scale(.8,.8);c.translate(-128,-232)
  c.fillStyle='#8b939c';c.beginPath();c.ellipse(128,232,56,7,0,0,T);c.fill()
  c.lineWidth=4.5;c.strokeStyle='#111'
  const draw={
    legL:()=>leg(113,-1),legR:()=>leg(143,1),
    torso:()=>{
      sb(c,113,86,30,16,3,MD,'#46505b')
      sb(c,88,98,80,66,14)
      c.beginPath();c.roundRect(103,110,50,26,6);c.fillStyle=DK;c.fill();c.stroke()
      ;['#ff5a4e','#ffd23f','#4ee08f'].forEach((f,k)=>{c.fillStyle=on&&(k+(i>>1))%4?f:'#3a4652';c.beginPath();c.arc(114+k*14,123,4.5,0,T);c.fill()})
      c.beginPath();c.moveTo(108,148);c.lineTo(148,148);c.moveTo(108,156);c.lineTo(148,156);c.lineWidth=3.5;c.stroke();c.lineWidth=4.5
      for(const x of[90,166])disc(c,x,112,6,DK)
    },
    armL:()=>arm(-1),armR:()=>arm(1),
    head:()=>{
      sb(c,90,52,8,22,3,MD,'#46505b');sb(c,158,52,8,22,3,MD,'#46505b')
      sb(c,96,40,64,52,14)
      for(const x of[112,144]){
        disc(c,x,62,11,DK)
        if(on){c.fillStyle=flash?'#e8fdff':'#5ff0ff';c.beginPath();c.arc(x,62,flash?9:7,0,T);c.fill()
          c.fillStyle='#e8fdff';c.beginPath();c.arc(x-2,60,2.5,0,T);c.fill()}
      }
      c.beginPath();c.roundRect(112,78,32,8,3);c.fillStyle=DK;c.fill();c.stroke()
      c.lineWidth=2.5;c.beginPath();for(const x of[120,128,136]){c.moveTo(x,79);c.lineTo(x,85)}c.stroke();c.lineWidth=4.5
      sb(c,122,32,12,9,2,MD,'#46505b')
    },
    ant:()=>{tube(c,[[128,34],[128,20]],3,'#9aa6b2');disc(c,128,14,7,on?RD:'#7a3a36');if(on){c.fillStyle='#ffd6d2';c.beginPath();c.arc(126,12,2,0,T);c.fill()}}
  }
  function leg(x,s){
    sb(c,x-9,156,18,56,6,'#cfd6dd','#9eabb7')
    c.lineWidth=3;c.beginPath();for(const y of[174,186,198]){c.moveTo(x-8,y);c.lineTo(x+8,y)}c.stroke();c.lineWidth=4.5
    sb(c,x-17+s*5,210,34,20,9)
  }
  function arm(s){
    const sx=128+s*38,sy=112
    tube(c,[[sx,sy],[sx+s*16,sy+26],[sx+s*14,sy+50]],8,'#cfd6dd')
    disc(c,sx+s*16,sy+26,6,MD)
    c.lineWidth=11;c.beginPath();c.arc(sx+s*14,sy+60,9,-T/4-1.2,-T/4+1.2,true);c.stroke()
    c.lineWidth=5;c.strokeStyle=RD;c.stroke();c.lineWidth=4.5;c.strokeStyle='#111'
    disc(c,sx,sy,8,'#cfd6dd')
  }
  for(const q of P){
    const e=ex(t,q),bob=Math.sin(T*t*2+q.p[0])*5*e
    c.save();c.translate(q.p[0]+q.d[0]*e,q.p[1]+q.d[1]*e+bob);c.rotate(q.r*e+bob*.03);c.translate(-q.p[0],-q.p[1])
    draw[q.n]();c.restore()
  }
  // click sparks where each part lands
  for(const q of P){
    const k=t-q.b-.72
    if(k>=0&&k<.05){
      const[x,y]=q.j,r=8+k*200
      c.lineCap='round'
      for(const w of[7,3])for(let a=0;a<6;a++){
        const g=a*T/6+.3,cx=Math.cos(g),sy=Math.sin(g)
        c.lineWidth=w;c.strokeStyle=w>5?'#111':'#ffd23f';c.beginPath();c.moveTo(x+cx*r,y+sy*r);c.lineTo(x+cx*(r+7),y+sy*(r+7));c.stroke()
      }
    }
  }
}
