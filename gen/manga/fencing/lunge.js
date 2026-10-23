// chibi fencer with a screentone bun lunges from en garde, her foil bending into the hanging target with a touche spark
import{createCanvas}from'@napi-rs/canvas'
const{sin,cos,PI,abs,min,max}=Math,T=2*PI
export const frames=16,delay=70,rim=4
const tile=(s,col,r)=>{const k=createCanvas(s,s),x=k.getContext('2d');x.fillStyle=col;for(const[a,b]of[[s/2,s/2],[0,0],[s,0],[0,s],[s,s]])x.beginPath(),x.arc(a,b,r,0,T),x.fill();return k}
const DOT=tile(6,'#111',1.3),SOFT=tile(5,'#111',.9),LITE=tile(5,'#fff',1)
const ease=u=>u<0?0:u>1?1:u*u*(3-2*u),mix=(a,b,k)=>a.map((v,n)=>v+(b[n]-v)*k)
const limb=(c,p,w)=>{for(const[l,s]of[[w+8,'#111'],[w,'#fff']]){c.lineWidth=l;c.strokeStyle=s;c.beginPath();c.moveTo(...p[0]);for(const q of p.slice(1))c.lineTo(...q);c.stroke()}c.strokeStyle='#111'}
const eye=(c,x,y,d,lt)=>{
  c.fillStyle='#fff';c.beginPath();c.ellipse(x,y+2,12,15,0,0,T);c.fill()
  c.save();c.clip();c.fillStyle='#111';c.beginPath();c.ellipse(x+5,y+3,9,12,0,0,T);c.fill();c.fillStyle=lt;c.fillRect(x-6,y+6,22,12)
  c.fillStyle='#fff';c.beginPath();c.arc(x+2,y-2,4,0,T);c.fill();c.beginPath();c.arc(x+9,y+9,1.8,0,T);c.fill();c.restore()
  c.lineWidth=8;c.beginPath();c.moveTo(x-14,y-10);c.quadraticCurveTo(x,y-18,x+14,y-10);c.lineTo(x+d*20,y-16);c.stroke()
  c.lineWidth=4;c.beginPath();c.moveTo(x-12,y-30);c.quadraticCurveTo(x,y-34,x+12,y-30-d*2);c.stroke()
}
export default(c,t)=>{
  const dt=c.createPattern(DOT,'repeat'),sf=c.createPattern(SOFT,'repeat'),lt=c.createPattern(LITE,'repeat')
  const p=t<.25?0:t<.38?ease((t-.25)/.13):t<.62?1:1-ease((t-.62)/.3),hit=t>=.36&&t<.62,fl=hit?sin(min(1,(t-.36)/.1)*PI/2)*(1-.6*max(0,(t-.46)/.16)):0
  const st=t<.25?3*abs(sin(t*T*4)):0
  const H=mix([96,170-st],[116,184],p),lean=.16*p
  // hanging target
  const sw=.03*sin(t*T)+(hit?.05*sin((t-.36)*T*3)*(1-(t-.36)/.26):0),tx=226+80*sin(sw),ty=-10+80*cos(sw)+30
  c.lineWidth=3;c.beginPath();c.moveTo(226,6);c.lineTo(tx,ty-18);c.stroke()
  c.fillStyle='#fff';c.lineWidth=5;c.beginPath();c.arc(tx,ty,15,0,T);c.fill();c.stroke();c.fillStyle=dt;c.beginPath();c.arc(tx,ty,10,0,T);c.fill();c.stroke();c.fillStyle='#111';c.beginPath();c.arc(tx,ty,5,0,T);c.fill()
  // rear leg, front leg
  const rk=mix([72,206],[78,212],p),rf=mix([58,234],[40,236],p),fk=mix([128,204],[168,206],p),ff=mix([142,236],[178,236],p)
  for(const[k,f,d]of[[rk,rf,-1],[fk,ff,1]]){limb(c,[[H[0]+d*8,H[1]],k,f],14)
    c.fillStyle='#fff';c.lineWidth=5;c.beginPath();c.ellipse(f[0]+d*6,f[1]+4,15,8,0,0,T);c.fill();c.stroke()}
  // knickers
  c.save();c.translate(...H);c.rotate(lean)
  c.fillStyle='#fff';c.lineWidth=5;c.beginPath();c.moveTo(-22,-8);c.lineTo(22,-8);c.lineTo(26,14);c.lineTo(-26,14);c.closePath();c.fill();c.save();c.clip();c.fillStyle=sf;c.fillRect(-30,-8,60,24);c.restore();c.stroke()
  // jacket
  c.fillStyle='#fff';c.beginPath();c.moveTo(-22,-4);c.lineTo(24,-4);c.lineTo(26,-50);c.quadraticCurveTo(2,-60,-22,-50);c.closePath();c.fill();c.stroke()
  c.lineWidth=3;c.beginPath();c.moveTo(8,-56);c.lineTo(20,-6);c.stroke();c.save();c.beginPath();c.moveTo(-22,-4);c.lineTo(-4,-4);c.lineTo(-10,-50);c.lineTo(-22,-48);c.closePath();c.clip();c.fillStyle=dt;c.fillRect(-30,-60,40,60);c.restore()
  c.fillStyle='#fff';c.lineWidth=4;c.beginPath();c.roundRect(-10,-62,22,10,4);c.fill();c.stroke()
  c.restore()
  const sh=(x,y)=>[H[0]+x*cos(lean)-y*sin(lean),H[1]+x*sin(lean)+y*cos(lean)]
  // rear arm: curled up behind the head in guard, thrown straight back on the lunge
  const rs=sh(-14,-46),re=mix([rs[0]-24,rs[1]-26],[rs[0]-28,rs[1]+6],p),rh=mix([rs[0]-6,rs[1]-56],[rs[0]-56,rs[1]+16],p)
  limb(c,[rs,re,rh],12);c.fillStyle='#fff';c.lineWidth=5;c.beginPath();c.arc(...rh,8,0,T);c.fill();c.stroke()
  // head
  c.save();c.translate(...sh(8,-98));c.rotate(lean*.5);c.scale(.66,.66);c.translate(-128,-121)
  c.lineWidth=9;c.fillStyle='#fff'
  c.beginPath();c.arc(62,96,30,0,T);c.fill();c.save();c.clip();c.fillStyle=dt;c.fillRect(20,60,90,80);c.restore();c.stroke()
  c.lineWidth=4;c.beginPath();c.arc(62,96,18,.4,2.6);c.stroke()
  c.lineWidth=9;c.beginPath();c.moveTo(70,150);c.bezierCurveTo(52,70,90,36,130,36);c.bezierCurveTo(176,36,206,74,190,140);c.lineTo(160,150);c.closePath();c.fill();c.save();c.clip();c.fillStyle=dt;c.fillRect(40,20,180,140);c.restore();c.stroke()
  c.fillStyle='#fff';c.beginPath();c.moveTo(74,96);c.bezierCurveTo(70,152,100,184,128,186);c.bezierCurveTo(156,184,186,152,182,96);c.bezierCurveTo(182,44,74,44,74,96);c.fill();c.stroke()
  eye(c,112,140,-1,lt);eye(c,160,140,1,lt)
  c.lineWidth=3.5;for(const d of[-1,1])for(const k of[-6,0,6])c.beginPath(),c.moveTo(136+d*42+k-3,166),c.lineTo(136+d*42+k+3,158),c.stroke()
  c.lineWidth=5;c.beginPath();if(hit)c.moveTo(128,166),c.quadraticCurveTo(140,178,152,164);else c.moveTo(132,170),c.lineTo(146,169);c.stroke()
  c.lineWidth=9;c.fillStyle='#fff';c.beginPath();c.moveTo(74,124);c.bezierCurveTo(70,70,110,46,150,50);c.bezierCurveTo(176,54,190,76,188,118);c.lineTo(176,98);c.lineTo(166,112);c.quadraticCurveTo(156,90,140,100);c.lineTo(134,114);c.quadraticCurveTo(122,92,106,104);c.lineTo(100,118);c.quadraticCurveTo(92,104,86,120);c.lineTo(80,108);c.lineTo(74,124);c.closePath();c.fill()
  c.save();c.clip();c.fillStyle=dt;c.fillRect(60,30,140,100);c.restore();c.stroke();c.strokeStyle='#fff';c.lineWidth=7;for(const[a,e]of[[1.2,1.32],[1.4,1.55],[1.63,1.74]])c.beginPath(),c.arc(130,118,58,PI*a,PI*e),c.stroke();c.strokeStyle='#111'
  c.restore()
  // sword arm, guard, foil
  const ss=sh(14,-46),hd=mix([150,144-st],[168,132],p),el=mix([ss[0]+18,ss[1]+22],[(ss[0]+hd[0])/2,(ss[1]+hd[1])/2-2],p)
  const tip=hit?[tx-13,ty+3]:mix([hd[0]+62,hd[1]-26],[hd[0]+64,hd[1]-6],p),mx=(hd[0]+tip[0])/2,my=(hd[1]+tip[1])/2-34*fl
  c.lineWidth=7;c.beginPath();c.moveTo(...hd);c.quadraticCurveTo(mx,my,...tip);c.stroke();c.strokeStyle='#fff';c.lineWidth=2.5;c.stroke();c.strokeStyle='#111'
  c.fillStyle='#fff';c.lineWidth=4;c.beginPath();c.arc(tip[0],tip[1],4,0,T);c.fill();c.stroke()
  limb(c,[ss,el,hd],12)
  const a=Math.atan2(my-hd[1],mx-hd[0])
  c.save();c.translate(...hd);c.rotate(a);c.fillStyle='#fff';c.lineWidth=4;c.beginPath();c.ellipse(8,0,6,15,0,0,T);c.fill();c.stroke();c.fillStyle=dt;c.beginPath();c.ellipse(9,0,3,10,0,0,T);c.fill();c.restore()
  c.fillStyle='#fff';c.lineWidth=5;c.beginPath();c.arc(...hd,9,0,T);c.fill();c.stroke()
  if(hit&&t<.52){const k=(t-.36)/.16,R=14+10*k;c.lineWidth=3.5;for(let j=0;j<8;j++){const b=j*PI/4+.2;c.beginPath();c.moveTo(tip[0]+cos(b)*R*.6,tip[1]+sin(b)*R*.6);c.lineTo(tip[0]+cos(b)*R,tip[1]+sin(b)*R);c.stroke()}}
}
