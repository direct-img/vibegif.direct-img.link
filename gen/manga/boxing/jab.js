// chibi boxer with a white wolf cut and flapping sweatband bounces in her stance, then fires jab, jab, cross into impact bursts
import{createCanvas}from'@napi-rs/canvas'
const{sin,cos,PI,abs}=Math,T=2*PI
export const frames=20,delay=60,rim=4
const J=[0,1,.45,0,1,.45,0,0,0,0,0,0,0,0,0,0,0,0,0,0],X=[0,0,0,0,0,0,0,-.3,1,1,.5,0,0,0,0,0,0,0,0,0]
const tile=(s,col,r)=>{const k=createCanvas(s,s),x=k.getContext('2d');x.fillStyle=col;for(const[a,b]of[[s/2,s/2],[0,0],[s,0],[0,s],[s,s]])x.beginPath(),x.arc(a,b,r,0,T),x.fill();return k}
const DOT=tile(6,'#111',1.3),LITE=tile(5,'#fff',1)
const limb=(c,p,w)=>{for(const[l,s]of[[w+8,'#111'],[w,'#fff']]){c.lineWidth=l;c.strokeStyle=s;c.beginPath();c.moveTo(...p[0]);for(const q of p.slice(1))c.lineTo(...q);c.stroke()}c.strokeStyle='#111'}
const burst=(c,x,y,R)=>{c.fillStyle='#fff';c.lineWidth=4;c.beginPath();for(let k=0;k<20;k++){const r=k%2?R*.55:R,a=k*PI/10;c.lineTo(x+cos(a)*r,y+sin(a)*r)}c.closePath();c.fill();c.stroke()
  c.lineWidth=4;for(let k=0;k<8;k++){const a=k*PI/4+.4;c.beginPath();c.moveTo(x+cos(a)*(R+6),y+sin(a)*(R+5));c.lineTo(x+cos(a)*(R+13),y+sin(a)*(R+13));c.stroke()}}
const glove=(c,x,y,a)=>{c.save();c.translate(x,y);c.rotate(a);c.fillStyle='#111';c.lineWidth=5
  c.beginPath();c.roundRect(-26,-10,12,20,4);c.fill();c.stroke();c.fillStyle='#fff';c.fillRect(-24,-6,8,12)
  c.fillStyle='#111';c.beginPath();c.ellipse(2,0,19,17,0,0,T);c.fill();c.stroke();c.beginPath();c.ellipse(-4,-13,9,7,-.3,0,T);c.fill();c.stroke()
  c.strokeStyle='#fff';c.lineWidth=3.5;c.beginPath();c.arc(4,-1,11,-1.7,-.5);c.stroke();c.beginPath();c.moveTo(-8,-6);c.quadraticCurveTo(-2,2,-8,9);c.stroke();c.strokeStyle='#111';c.restore()}
const eye=(c,x,y,d,lt,o)=>{
  c.save();c.beginPath();c.moveTo(x-17,y-8+d*3);c.lineTo(x+17,y-8-d*3);c.lineTo(x+17,y+24);c.lineTo(x-17,y+24);c.clip()
  c.fillStyle='#fff';c.beginPath();c.ellipse(x,y+3,13,15,0,0,T);c.fill();c.clip()
  c.fillStyle='#111';c.beginPath();c.ellipse(x+5,y+5,9,12,0,0,T);c.fill();c.fillStyle=lt;c.fillRect(x-6,y+8,22,12)
  c.fillStyle='#fff';c.beginPath();c.arc(x+2,y+1,4,0,T);c.fill();c.restore()
  c.lineWidth=8;c.beginPath();c.moveTo(x-16,y-8+d*3);c.lineTo(x+16,y-8-d*3);c.lineTo(x+d*22,y-14+d*0);c.stroke()
  c.lineWidth=7;c.beginPath();c.moveTo(x-14,y-26+d*6);c.lineTo(x+14,y-26-d*6);c.stroke()
}
export default(c,t,i)=>{
  const dt=c.createPattern(DOT,'repeat'),lt=c.createPattern(LITE,'repeat')
  const j=J[i],x=X[i],hit=j==1||x==1,b=x>0||j>0?0:3*abs(sin(i/20*T*2)),lean=.14*Math.max(0,x)
  const hx=90,hy=174+b
  c.save();c.translate(hx,hy);c.rotate(lean)
  // legs and boots
  for(const[p,f]of[[[[-8,0],[-24,30],[-30,58]],-34],[[[10,0],[24,28],[30,58]],32]]){limb(c,p,15)
    c.fillStyle='#111';c.lineWidth=4;c.beginPath();c.roundRect(f-14+(f>0?2:-2),48,26,18,6);c.fill();c.stroke()
    c.strokeStyle='#fff';c.lineWidth=2;c.beginPath();for(const y of[53,58])c.moveTo(f-6,y),c.lineTo(f+6,y);c.stroke();c.strokeStyle='#111'}
  // trunks
  c.fillStyle='#fff';c.lineWidth=5;c.beginPath();c.moveTo(-26,-8);c.lineTo(26,-8);c.lineTo(32,18);c.lineTo(6,22);c.lineTo(2,10);c.lineTo(-2,22);c.lineTo(-30,18);c.closePath();c.fill();c.stroke()
  c.save();c.clip();c.fillStyle='#111';c.fillRect(-30,-8,60,8);c.fillStyle=dt;c.fillRect(18,0,16,24);c.fillRect(-34,0,12,24);c.restore();c.stroke()
  // tank top
  c.fillStyle='#fff';c.beginPath();c.moveTo(-22,-6);c.lineTo(24,-6);c.lineTo(26,-50);c.quadraticCurveTo(4,-60,-20,-52);c.closePath();c.fill();c.save();c.clip();c.fillStyle=dt;c.fillRect(-30,-62,60,58);c.restore();c.stroke()
  c.fillStyle='#fff';c.lineWidth=4;c.beginPath();c.moveTo(-4,-56);c.quadraticCurveTo(6,-40,16,-56);c.fill();c.stroke()
  c.restore()
  // head
  const tl=sin(i/20*T*2)
  c.save();c.translate(hx+8+lean*60,hy-100+b*.3);c.rotate(lean*.6);c.scale(.7,.7);c.translate(-128,-121)
  c.lineWidth=9
  for(const d of[0,1]){const w=8*sin(i/20*T*3+d)+tl*4;c.fillStyle='#111';c.beginPath();c.moveTo(70,92);c.quadraticCurveTo(40,84+d*16+w,8,90+d*28+w);c.lineTo(14,104+d*28+w);c.quadraticCurveTo(44,98+d*14,70,104);c.closePath();c.fill();c.stroke()}
  c.fillStyle='#fff';c.beginPath();c.moveTo(62,176);c.lineTo(70,140);c.bezierCurveTo(44,70,88,30,130,30);c.bezierCurveTo(178,30,214,74,190,140);c.lineTo(198,174);c.lineTo(182,160);c.lineTo(178,182);c.lineTo(164,162);c.lineTo(92,162);c.lineTo(80,184);c.lineTo(76,160);c.closePath();c.fill();c.stroke()
  c.beginPath();c.moveTo(74,96);c.bezierCurveTo(70,152,100,184,128,186);c.bezierCurveTo(156,184,186,152,182,96);c.bezierCurveTo(182,44,74,44,74,96);c.fill();c.stroke()
  eye(c,110,138,-1,lt);eye(c,160,138,1,lt)
  c.lineWidth=3.5;for(const d of[-1,1])for(const k of[-6,0,6])c.beginPath(),c.moveTo(135+d*42+k-3,166),c.lineTo(135+d*42+k+3,158),c.stroke()
  c.lineWidth=5;c.fillStyle='#111';c.beginPath()
  if(hit||j||x>0)c.moveTo(124,164),c.lineTo(152,162),c.quadraticCurveTo(148,184,138,184),c.quadraticCurveTo(126,184,124,164),c.fill(),c.stroke(),c.fillStyle='#fff',c.beginPath(),c.moveTo(128,165),c.lineTo(134,165),c.lineTo(131,172),c.fill()
  else c.moveTo(126,166),c.quadraticCurveTo(138,172,150,164),c.stroke(),c.fillStyle='#fff',c.beginPath(),c.moveTo(140,169),c.lineTo(146,167),c.lineTo(144,175),c.closePath(),c.fill(),c.lineWidth=3,c.stroke()
  c.lineWidth=9;c.fillStyle='#fff';c.beginPath();c.moveTo(72,120);c.lineTo(70,92);c.bezierCurveTo(84,52,172,52,186,92);c.lineTo(186,124);c.lineTo(174,104);c.lineTo(166,126);c.lineTo(154,100);c.lineTo(142,122);c.lineTo(130,98);c.lineTo(118,124);c.lineTo(106,100);c.lineTo(94,120);c.lineTo(86,102);c.closePath();c.fill();c.stroke()
  c.lineWidth=4;for(const[a,b2,e,f]of[[100,60,96,82],[150,58,156,80],[126,46,124,64]])c.beginPath(),c.moveTo(a,b2),c.quadraticCurveTo((a+e)/2+6,(b2+f)/2,e,f),c.stroke()
  c.fillStyle='#111';c.lineWidth=9;c.beginPath();c.moveTo(68,98);c.quadraticCurveTo(128,66,188,98);c.lineTo(188,84);c.quadraticCurveTo(128,52,68,84);c.closePath();c.fill();c.stroke()
  c.strokeStyle='#fff';c.lineWidth=4;c.beginPath();c.moveTo(84,86);c.quadraticCurveTo(128,64,172,86);c.stroke();c.strokeStyle='#111'
  c.restore()
  // arms: lead (far) then rear (near); guard positions blend to full reach
  const sh=(px,py)=>[hx+px*cos(lean)-py*sin(lean),hy+b*0+px*sin(lean)+py*cos(lean)]
  for(const[e,s,g,r,el]of[[j,sh(16,-48),[150,124],[194,104],[34,-40]],[Math.max(0,x),sh(-6,-46),[134,140],[198,112],[18,-22]]]){
    const gx=g[0]+(r[0]-g[0])*e,gy=g[1]+(r[1]-g[1])*e+b,ex=s[0]+(gx-s[0])*.5+el[0]*(1-e)*.6,ey=s[1]+(gy-s[1])*.5+el[1]*(1-e)*-.6+18*(1-e)
    if(e>.9){c.lineWidth=4;for(const d of[-12,0,12])c.beginPath(),c.moveTo(gx-70+abs(d)*2,gy+d*1.4),c.lineTo(gx-30,gy+d*1.4),c.stroke()}
    if(e==1)burst(c,gx+18,gy,s[0]<hx?24:19)
    limb(c,[s,[ex,ey],[gx-14,gy]],13);glove(c,gx,gy,(1-e)*-.9)
  }
}
