// smug platinum blonde ojou-sama with bouncy drill curls and a jeweled gold crown, eyes half-lidded then tilting back into an ohoho laugh behind her hand, a PRO badge bobs, the crown glints and gold coins spin
const{sin,cos,PI,max,abs}=Math,T=2*PI
export const frames=16,delay=95
const SKIN='#ffe3d1',HAIR='#f8f0d4',HD='#d8c58f',EYE='#e64980',ED='#a61e4d',DR='#9775fa',BL='#ffa8a8',MO='#c92a2a',TG='#ff8fab',GD='#ffd43b',GDD='#f59f00',RU='#ff6b6b',SA='#74c0fc',SP='#ffe066'
const ds=(c,a,b,s,f)=>{for(const[l,k]of[[a,'#111'],[b,s]])c.lineWidth=l,c.strokeStyle=k,c.beginPath(),f(),c.stroke();c.strokeStyle='#111'}
const eye=(c,x,y,d)=>{
  c.fillStyle='#fff';c.beginPath();c.ellipse(x,y,14,17,0,0,T);c.fill()
  c.save();c.beginPath();c.ellipse(x,y,14,17,0,0,T);c.clip();c.beginPath();c.ellipse(x+4,y+3,11.5,15,0,0,T);c.fillStyle=EYE;c.fill();c.lineWidth=2.5;c.stroke()
  c.fillStyle=ED;c.beginPath();c.ellipse(x+4,y-7,13,10,0,0,T);c.fill()
  c.fillStyle='#111';c.beginPath();c.ellipse(x+4,y+4,5.5,7.5,0,0,T);c.fill()
  c.fillStyle='#fff';c.beginPath();c.arc(x+1,y+1,4,0,T);c.fill();c.beginPath();c.arc(x+8,y+10,2,0,T);c.fill();c.restore()
  c.save();c.beginPath();c.rect(x-20,y-24,40,22);c.clip();c.fillStyle=SKIN;c.beginPath();c.ellipse(x,y,16,19,0,0,T);c.fill();c.restore()
  c.lineWidth=6;c.beginPath();c.moveTo(x-17,y-1);c.quadraticCurveTo(x,y-8,x+17,y-1);c.moveTo(x+d*16,y-2);c.lineTo(x+d*22,y-6);c.stroke()
}
const spark=(c,x,y,r)=>{c.beginPath();c.moveTo(x,y-r);for(const[a,b]of[[1,0],[0,1],[-1,0],[0,-1]])c.quadraticCurveTo(x+(a+b)*r*.15,y+(b-a)*r*.15,x+a*r,y+b*r);c.fill();c.stroke()}
const drill=(c,x,y,d,s)=>{for(let k=3;k>=0;k--){const w=25-k*5,yy=y+k*27*s
  c.fillStyle=HAIR;c.lineWidth=8;c.beginPath();c.moveTo(x-w,yy-16);c.bezierCurveTo(x-w-6,yy+4,x-w*.4,yy+20,x+d*w*.2,yy+22);c.bezierCurveTo(x+w,yy+20,x+w+6,yy+4,x+w,yy-16);c.closePath();c.fill();c.stroke()
  c.strokeStyle=HD;c.lineWidth=5;c.beginPath();c.moveTo(x-d*w*.6,yy-8);c.quadraticCurveTo(x,yy+12,x+d*w*.7,yy+2);c.stroke();c.strokeStyle='#111'}}
const PRO=c=>{const P=x=>{c.moveTo(x,20);c.lineTo(x,0);c.lineTo(x+6,0);c.bezierCurveTo(x+14,0,x+14,11,x+6,11);c.lineTo(x,11)}
  P(0);P(19);c.moveTo(26,11);c.lineTo(32,20);c.moveTo(51,10);c.ellipse(45,10,6,10,0,0,T)}
export default(c,t,i)=>{
  const lf=i>=8,b=lf?-4*abs(sin(PI*(t-.5)*6)):0,tl=lf?-.06:0,bo=sin(T*t),sx=1+.05*sin(T*t*2)
  c.save();c.translate(54,42+4*bo);c.rotate(-.12)
  c.fillStyle=GD;c.lineWidth=6;c.beginPath();c.roundRect(-44,-22,88,44,22);c.fill();c.stroke()
  c.save();c.clip();c.fillStyle='rgba(255,255,255,.7)';const g=-90+180*((t*1.5)%1);c.beginPath();c.moveTo(g,-30);c.lineTo(g+14,-30);c.lineTo(g-2,30);c.lineTo(g-16,30);c.fill();c.restore()
  c.translate(-27,-10);ds(c,10,5,'#fff',()=>PRO(c));c.restore()
  for(const[x,y,o]of[[222,74,0],[204,122,.4]]){const cs=cos(T*(t+o)),yy=y+5*sin(T*(t+o))
    c.save();c.translate(x,yy);c.scale(max(.12,abs(cs)),1);c.fillStyle=GDD;c.lineWidth=5;c.beginPath();c.arc(0,0,15,0,T);c.fill();c.stroke()
    c.fillStyle=GD;c.lineWidth=3;c.beginPath();c.arc(0,0,10,0,T);c.fill();c.stroke()
    if(cs>0){c.strokeStyle=GDD;c.lineWidth=3.5;c.beginPath();c.moveTo(0,-6);c.lineTo(0,6);c.stroke()}c.restore()}
  const H=f=>{c.save();c.translate(124,184+b);c.rotate(tl);c.scale(.7,.7);c.translate(-128,-186);f();c.restore()}
  H(()=>{
    c.lineWidth=8;c.fillStyle=HD;c.beginPath();c.moveTo(128,34);c.bezierCurveTo(200,34,216,100,210,170);c.lineTo(206,250);c.lineTo(50,250);c.lineTo(46,170);c.bezierCurveTo(40,100,56,34,128,34);c.fill();c.stroke()
    c.fillStyle=DR;c.beginPath();c.moveTo(100,190);c.quadraticCurveTo(52,198,40,330);c.lineTo(216,330);c.quadraticCurveTo(204,198,156,190);c.closePath();c.fill();c.stroke()
    c.fillStyle='#fff';c.lineWidth=6;c.beginPath();c.moveTo(96,192);for(let k=0;k<5;k++)c.quadraticCurveTo(100+k*16,214,112+k*16,198);c.lineTo(160,192);c.closePath();c.fill();c.stroke()
    c.fillStyle=GD;c.beginPath();c.moveTo(128,206);c.lineTo(140,218);c.lineTo(128,232);c.lineTo(116,218);c.closePath();c.fill();c.stroke()
    c.lineWidth=8;c.fillStyle=SKIN;c.beginPath();c.moveTo(114,168);c.lineTo(114,194);c.quadraticCurveTo(128,204,142,194);c.lineTo(142,168);c.fill();c.beginPath();c.moveTo(114,168);c.lineTo(114,190);c.moveTo(142,168);c.lineTo(142,190);c.stroke()
    c.fillStyle=SKIN;c.beginPath();c.moveTo(74,96);c.bezierCurveTo(70,152,100,184,128,186);c.bezierCurveTo(156,184,186,152,182,96);c.bezierCurveTo(182,44,74,44,74,96);c.fill();c.stroke()
    if(lf){c.lineWidth=8;for(const x of[103,153])c.beginPath(),c.arc(x,148,15,1.15*PI,1.85*PI),c.stroke()}
    else eye(c,103,140,-1),eye(c,153,140,1)
    c.fillStyle=BL;for(const d of[-1,1])c.beginPath(),c.ellipse(128+d*44,162,14,8,0,0,T),c.fill()
    c.lineWidth=4;for(const d of[-1,1])for(const k of[-6,0,6])c.beginPath(),c.moveTo(128+d*44+k-2,166),c.lineTo(128+d*44+k+2,158),c.stroke()
    c.lineWidth=6;c.fillStyle=MO
    if(lf){c.beginPath();c.moveTo(116,163);c.quadraticCurveTo(134,166,150,160);c.quadraticCurveTo(150,186,134,186);c.quadraticCurveTo(118,186,116,163);c.fill();c.stroke();c.save();c.clip();c.fillStyle=TG;c.beginPath();c.ellipse(134,188,9,7,0,0,T);c.fill();c.restore()}
    else{c.beginPath();c.moveTo(118,170);c.quadraticCurveTo(132,174,144,164);c.stroke()}
    c.lineWidth=8;c.fillStyle=HAIR;c.beginPath();c.moveTo(66,150)
    c.bezierCurveTo(50,74,88,36,128,36);c.bezierCurveTo(168,36,206,74,190,150)
    c.quadraticCurveTo(186,118,178,100);c.quadraticCurveTo(170,104,164,112);c.quadraticCurveTo(160,98,152,90);c.quadraticCurveTo(146,102,138,108)
    c.quadraticCurveTo(134,96,128,86);c.quadraticCurveTo(122,96,118,108);c.quadraticCurveTo(110,102,104,90);c.quadraticCurveTo(96,104,92,112)
    c.quadraticCurveTo(86,104,78,100);c.quadraticCurveTo(70,120,66,150);c.closePath();c.fill();c.stroke()
    c.strokeStyle=HD;c.lineWidth=6;for(const[s,e]of[[1.24,1.36],[1.44,1.52],[1.62,1.74]])c.beginPath(),c.arc(128,104,56,PI*s,PI*e),c.stroke()
    c.strokeStyle='#111'
    if(!lf){c.lineWidth=5;c.beginPath();c.moveTo(88,112);c.quadraticCurveTo(100,104,114,110);c.moveTo(142,110);c.quadraticCurveTo(156,104,168,112);c.stroke()}
    for(const d of[-1,1]){c.save();c.translate(128+d*84,146);c.scale(1,sx);drill(c,0,0,d,1);c.restore()}
    c.save();c.translate(128,46);c.rotate(.1)
    const cr=()=>{c.beginPath();c.moveTo(-46,14);c.lineTo(-52,-30);c.lineTo(-24,-6);c.lineTo(0,-42);c.lineTo(24,-6);c.lineTo(52,-30);c.lineTo(46,14);c.closePath()}
    c.fillStyle=GD;c.lineWidth=8;cr();c.fill()
    c.save();c.clip();c.fillStyle='rgba(255,255,255,.8)';const gx=-120+240*((t*1.5+.3)%1);c.beginPath();c.moveTo(gx,-50);c.lineTo(gx+16,-50);c.lineTo(gx-4,20);c.lineTo(gx-20,20);c.fill();c.restore();cr();c.stroke()
    c.fillStyle=GDD;c.lineWidth=6;c.beginPath();c.roundRect(-48,4,96,16,6);c.fill();c.stroke()
    c.fillStyle=GD;c.lineWidth=5;for(const x of[-52,0,52])c.beginPath(),c.arc(x,x?-32:-44,6,0,T),c.fill(),c.stroke()
    c.fillStyle=RU;c.lineWidth=5;c.beginPath();c.moveTo(0,-20);c.lineTo(10,-8);c.lineTo(0,4);c.lineTo(-10,-8);c.closePath();c.fill();c.stroke()
    c.fillStyle=SA;for(const x of[-28,28])c.beginPath(),c.arc(x,12,5,0,T),c.fill(),c.stroke()
    c.restore()
  })
  ds(c,24,15,DR,()=>{c.moveTo(70,256);c.quadraticCurveTo(62,214,82,196+b)})
  c.fillStyle='#fff';c.lineWidth=5;c.beginPath();c.ellipse(82,200+b,13,7,-.9,0,T);c.fill();c.stroke()
  c.save();c.translate(92,186+b);c.rotate(-.45);c.scale(.85,.85);c.fillStyle=SKIN;c.lineWidth=5
  c.beginPath();c.moveTo(-10,10);c.quadraticCurveTo(-14,-8,-2,-10);c.lineTo(20,-10);c.quadraticCurveTo(26,-7,20,-4);c.lineTo(22,-3);c.quadraticCurveTo(28,1,21,4);c.lineTo(20,5);c.quadraticCurveTo(25,9,18,11);c.quadraticCurveTo(4,16,-10,10);c.fill();c.stroke()
  c.restore()
  c.fillStyle=SP;c.lineWidth=3.5;for(const[x,y,o]of[[30,110,0],[212,30,.3],[160,24,.65],[236,170,.5]]){const r=11*max(0,sin(T*(t*2+o)));if(r>2)spark(c,x,y,r)}
}
