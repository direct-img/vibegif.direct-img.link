// microwave counting down, a hand sneaks in and pops the door open at 0:01 right before it can beep, then the door swings shut and it starts over
const{sin,cos,PI,max,min,floor}=Math,T=2*PI
export const frames=32,delay=90,rim=5
const BODY='#e9ecef',DK='#adb5bd',WIN='#343a40',LIT='#ffe066',CAV='#fff3bf',SEG='#69db7c',MUG='#4dabf7',SK='#ffd43b',SL='#9775fa',BTN='#ff8787'
const ez=(t,a,b)=>{const x=min(1,max(0,(t-a)/(b-a)));return x*x*(3-2*x)}
const SG=[63,6,91,79,102,109,125,7,127,111],SP=[[0,0,1,0],[1,0,1,.5],[1,.5,1,1],[0,1,1,1],[0,.5,0,1],[0,0,0,.5],[0,.5,1,.5]]
const dig=(c,x,y,n)=>{c.beginPath();SP.forEach(([a,b,e,f],k)=>{if(SG[n]>>k&1){const g=a==e?.14:.2,h=a==e?.1:0;c.moveTo(x+(a+(e-a)*g)*9+h,y+(b+(f-b)*g)*18);c.lineTo(x+(e-(e-a)*g)*9+h,y+(f-(f-b)*g)*18)}});c.stroke()}
const mug=(c,x,y,a)=>{const hs=sin(a)
  if(cos(a)<0)c.lineWidth=5,c.beginPath(),c.arc(x+hs*16,y-12,8,0,T),c.stroke()
  c.lineWidth=5;c.fillStyle=MUG;c.beginPath();c.roundRect(x-15,y-28,30,30,[2,2,7,7]);c.fill();c.stroke()
  c.fillStyle='#fff';c.beginPath();c.ellipse(x,y-28,15,4,0,0,T);c.fill();c.stroke()
  if(cos(a)>=0)c.beginPath(),c.arc(x+hs*16,y-12,8,0,T),c.stroke()
}
const hand=(c,x,y,a)=>{c.save();c.translate(x,y);c.rotate(a);c.lineWidth=6
  c.fillStyle=SL;c.beginPath();c.roundRect(58,-18,140,44,8);c.fill();c.stroke()
  c.fillStyle='#fff';c.beginPath();c.roundRect(52,-20,14,48,6);c.fill();c.stroke()
  c.fillStyle=SK;c.beginPath();c.roundRect(-4,-7,46,15,7.5);c.fill();c.stroke()
  c.beginPath();c.roundRect(22,-12,34,36,12);c.fill();c.stroke()
  c.lineWidth=4;c.beginPath();c.moveTo(30,10);c.lineTo(44,10);c.moveTo(30,18);c.lineTo(44,18);c.stroke()
  c.restore()}
export default(c,t,i)=>{
  const n=t>=.9||t<.12?4:t<.24?3:t<.36?2:1,run=t<.43||t>=.9,op=ez(t,.43,.48)*(1+.12*sin(ez(t,.48,.62)*PI))-ez(t,.8,.9),ang=op*1.25
  const press=t>=.39&&t<.48,tbl=(t<.43?t:t>=.9?t-.47:.43)*T*2.2
  // sneaky hand: creeps in from the right, jabs at 0:01, slides away
  const cr=ez(t,.14,.34),jab=ez(t,.36,.39),out=ez(t,.5,.64),tr=t>.2&&t<.36?1.5*sin(i*3):0
  const hx=184+110*(1-cr)+14*(cr-jab)+110*out,hy=172+80*(1-cr)+12*(cr-jab)+80*out
  c.save();c.translate(4,12);c.scale(.88,.88)
  c.fillStyle=DK;for(const x of[40,216])c.beginPath(),c.roundRect(x-14,198,28,14,4),c.fill(),c.stroke()
  c.fillStyle=BODY;c.beginPath();c.roundRect(10,58,236,148,16);c.fill();c.stroke()
  // cavity
  c.fillStyle=CAV;c.beginPath();c.roundRect(24,70,136,124,8);c.fill();c.stroke()
  c.save();c.beginPath();c.roundRect(24,70,136,124,8);c.clip()
  c.fillStyle='#ffd43b';c.beginPath();c.moveTo(24,70);c.lineTo(46,90);c.lineTo(46,172);c.lineTo(24,194);c.fill()
  c.fillStyle='#ffec99';c.beginPath();c.moveTo(160,70);c.lineTo(138,90);c.lineTo(138,172);c.lineTo(160,194);c.fill()
  c.lineWidth=4;c.beginPath();c.moveTo(46,90);c.lineTo(138,90);c.lineTo(138,172);c.lineTo(46,172);c.closePath();c.moveTo(24,70);c.lineTo(46,90);c.moveTo(160,70);c.lineTo(138,90);c.moveTo(24,194);c.lineTo(46,172);c.moveTo(160,194);c.lineTo(138,172);c.stroke()
  c.fillStyle='#fff';c.lineWidth=5;c.beginPath();c.ellipse(92,172,48,10,0,0,T);c.fill();c.stroke()
  mug(c,92+sin(tbl)*22,170+cos(tbl)*3,tbl)
  if(!run){c.strokeStyle='#868e96';c.lineWidth=4;for(let k=0;k<3;k++){const ph=(t*3+k/3)%1,x0=86+k*9;c.globalAlpha=1-ph;c.beginPath();for(let y=0;y<16;y+=2)c.lineTo(x0+3*sin(y/3+ph*8),132-ph*26-y);c.stroke()}c.globalAlpha=1;c.strokeStyle='#111'}
  c.restore()
  // door, hinged on the left, swings toward us
  const w=136*cos(ang),gr=14*sin(ang)
  c.fillStyle=ang>PI/2?DK:BODY;c.lineWidth=6
  c.beginPath();c.moveTo(22,68);c.lineTo(22+w,68-gr);c.lineTo(22+w,196+gr);c.lineTo(22,196);c.closePath();c.fill();c.stroke()
  if(cos(ang)>.25){const f=v=>22+v*w/136,g=(v,y)=>y+(y<132?-1:1)*gr*v/136*(y<132?(132-y)/64:(y-132)/64)
    c.fillStyle=LIT;c.beginPath();c.moveTo(f(12),g(12,82));c.lineTo(f(124),g(124,82));c.lineTo(f(124),g(124,182));c.lineTo(f(12),g(12,182));c.closePath();c.fill();c.stroke()
    if(run&&op<.05){c.save();c.beginPath();c.roundRect(34,82,112,100,4);c.clip();c.fillStyle='#fff';c.beginPath();c.ellipse(90,170,40,8,0,0,T);c.fill();c.lineWidth=4;c.stroke();c.lineWidth=5;mug(c,90+sin(tbl)*20,168+cos(tbl)*3,tbl)
      c.fillStyle='rgba(52,58,64,.28)';for(let y=86;y<182;y+=8)for(let x=38+(y%16?4:0);x<146;x+=8)c.fillRect(x,y,3,3);c.restore()
      c.strokeStyle='#fff';c.lineWidth=5;c.beginPath();c.moveTo(48,98);c.lineTo(60,92);c.moveTo(48,112);c.lineTo(74,98);c.stroke();c.strokeStyle='#111';c.lineWidth=6;c.beginPath();c.roundRect(34,82,112,100,4);c.stroke()}
  }
  // panel
  c.lineWidth=6;c.fillStyle='#212529';c.beginPath();c.roundRect(170,72,62,36,6);c.fill();c.stroke()
  const blink=t>.52&&t<.8&&i%2
  c.strokeStyle=SEG;c.lineWidth=3.5
  if(!blink){dig(c,178,81,0);dig(c,199,81,0);dig(c,215,81,n);c.fillStyle=SEG;for(const y of[86,94])c.beginPath(),c.arc(191,y,2,0,T),c.fill()}
  c.strokeStyle='#111';c.lineWidth=4;c.fillStyle='#f8f9fa'
  for(let r=0;r<3;r++)for(let k=0;k<3;k++)c.beginPath(),c.roundRect(176+k*20,118+r*15,12,9,3),c.fill(),c.stroke()
  c.lineWidth=6;c.fillStyle=press?'#e03131':BTN;c.beginPath();c.roundRect(176,167+(press?3:0),52,22-(press?3:0),11);c.fill();c.stroke()
  if(t>=.39&&t<.52){const p=ez(t,.39,.48);for(let k=0;k<5;k++){const a=-PI*.95+k*PI*.5/2;for(const[lw,s]of[[9,'#111'],[4,'#fff']])c.lineWidth=lw,c.strokeStyle=s,c.beginPath(),c.moveTo(202+cos(a)*(34+10*p),178+sin(a)*(20+8*p)),c.lineTo(202+cos(a)*(46+14*p),178+sin(a)*(28+10*p)),c.stroke()}c.strokeStyle='#111'}
  c.restore()
  if(hx<300)c.save(),c.translate(hx+tr,hy),c.scale(1.5,1.5),hand(c,0,0,.62),c.restore()
}
