// exorcist girl with a white pixie cut flicks three paper talismans that spin out across the panel and flash
import{createCanvas}from'@napi-rs/canvas'
const{sin,cos,PI,max,min}=Math,T=2*PI
export const frames=16,delay=70,rim=4
const dots=(col,r,s=6)=>{const k=createCanvas(s,s),x=k.getContext('2d');x.fillStyle=col;for(const[a,b]of[[s/2,s/2],[0,0],[s,0],[0,s],[s,s]])x.beginPath(),x.arc(a,b,r,0,T),x.fill();return k}
const TONE=dots('#111',1.5),LITE=dots('#fff',1.2)
const ease=u=>u<0?0:u>1?1:u*u*(3-2*u),out=u=>1-(1-u)**2
const card=(c,x,y,a,sx=1,s=1)=>{c.save();c.translate(x,y);c.rotate(a);c.scale(sx*s,s)
  c.lineWidth=3.5;c.fillStyle='#fff';c.beginPath();c.rect(-8,-20,16,40);c.fill();c.stroke()
  c.lineWidth=2.5;c.beginPath();c.arc(0,-11,4,0,T);c.moveTo(0,-5);c.lineTo(0,15);for(const y of[-1,5,11])c.moveTo(-4,y),c.lineTo(4,y-1.5);c.stroke();c.restore()}
const burst=(c,x,y,R,n)=>{c.beginPath();for(let k=0;k<n*2;k++){const r=k%2?R*.45:R,a=k*PI/n+.2;c.lineTo(x+cos(a)*r,y+sin(a)*r)}c.closePath()}
export default(c,t)=>{
  const tn=c.createPattern(TONE,'repeat'),lt=c.createPattern(LITE,'repeat')
  const k=t<.3?0:t<.38?ease((t-.3)/.08):t<.6?1:1-ease((t-.6)/.3),hold=t<.34||t>=.9
  const hx=132+64*k,hy=112+14*k,fl=t>=.34&&t<.9
  c.lineWidth=6;c.fillStyle='#111';c.beginPath();c.moveTo(70,176);c.quadraticCurveTo(26,186,22,252);c.lineTo(150,252);c.quadraticCurveTo(146,186,104,176);c.closePath();c.fill();c.stroke()
  c.fillStyle='#fff';c.beginPath();c.moveTo(72,176);c.lineTo(88,226);c.lineTo(102,176);c.closePath();c.fill();c.lineWidth=4;c.stroke()
  c.fillStyle='#111';c.beginPath();c.moveTo(87,184);c.lineTo(82,214);c.lineTo(88,222);c.lineTo(94,214);c.lineTo(89,184);c.fill()
  c.strokeStyle='#fff';c.lineWidth=3;c.beginPath();c.moveTo(66,180);c.lineTo(84,236);c.moveTo(108,180);c.lineTo(92,236);c.stroke();c.strokeStyle='#111'
  c.fillStyle='#fff';c.lineWidth=6;c.beginPath();c.rect(76,154,22,26);c.fill();c.beginPath();c.moveTo(76,154);c.lineTo(76,176);c.moveTo(98,154);c.lineTo(98,176);c.stroke()
  c.save();c.translate(88,100);c.scale(.7,.7);c.translate(-128,-128)
  c.lineWidth=8;c.fillStyle='#fff';c.beginPath();c.moveTo(74,96);c.bezierCurveTo(70,152,100,184,128,186);c.bezierCurveTo(156,184,186,152,182,96);c.bezierCurveTo(182,44,74,44,74,96);c.fill();c.stroke()
  for(const[x,d]of[[106,-1],[156,1]]){const y=138
    c.save();c.beginPath();c.moveTo(x-17,y-5+d*3);c.lineTo(x+17,y-5-d*3);c.lineTo(x+17,y+22);c.lineTo(x-17,y+22);c.clip()
    c.fillStyle='#fff';c.beginPath();c.ellipse(x,y+3,13,15,0,0,T);c.fill();c.clip();c.fillStyle='#111';c.beginPath();c.ellipse(x+5,y+4,9.5,13,0,0,T);c.fill();c.fillStyle=lt;c.fillRect(x-4,y+8,22,12)
    c.fillStyle='#fff';c.beginPath();c.arc(x+2,y-1,4,0,T);c.fill();c.beginPath();c.arc(x+9,y+10,2,0,T);c.fill();c.restore()
    c.lineWidth=8;c.beginPath();c.moveTo(x-15,y-5+d*3);c.lineTo(x+15,y-5-d*3);c.lineTo(x+d*21,y-10);c.stroke()
    c.lineWidth=5;c.beginPath();c.moveTo(x-12,y-24+d*4);c.lineTo(x+12,y-24-d*4);c.stroke()}
  c.lineWidth=4.5;c.beginPath();c.moveTo(130,170);c.quadraticCurveTo(140,174,150,166);c.stroke()
  c.lineWidth=3;for(const d of[-1,1])for(const j of[-6,0,6])c.beginPath(),c.moveTo(131+d*44+j-3,166),c.lineTo(131+d*44+j+3,158),c.stroke()
  c.lineWidth=8;c.fillStyle='#fff';c.beginPath();c.moveTo(70,178);c.quadraticCurveTo(52,150,60,120);c.bezierCurveTo(40,70,90,30,132,32);c.bezierCurveTo(180,34,212,74,196,124);c.quadraticCurveTo(204,154,188,178);c.quadraticCurveTo(184,150,182,130)
  c.lineTo(186,112);c.lineTo(174,118);c.lineTo(170,96);c.lineTo(152,110);c.lineTo(146,90);c.lineTo(128,108);c.lineTo(118,90);c.lineTo(102,110);c.lineTo(94,96);c.lineTo(80,116);c.lineTo(76,104);c.quadraticCurveTo(72,140,70,178);c.closePath();c.fill();c.stroke()
  c.lineWidth=3;c.beginPath();for(const[x0,y0,x1,y1]of[[100,48,84,84],[126,42,118,82],[152,44,156,86],[174,58,180,98]])c.moveTo(x0,y0),c.quadraticCurveTo((x0+x1)/2+6,(y0+y1)/2,x1,y1);c.stroke()
  c.save();c.translate(176,52);c.rotate(.4);c.lineWidth=6;c.fillStyle='#111';for(const d of[-1,1])c.beginPath(),c.moveTo(0,0),c.quadraticCurveTo(d*22,-20,d*30,-2),c.quadraticCurveTo(d*22,14,0,0),c.fill(),c.stroke();c.beginPath();c.moveTo(-4,4);c.lineTo(-14,30);c.lineTo(-4,26);c.lineTo(2,34);c.lineTo(4,6);c.fill();c.beginPath();c.arc(0,0,7,0,T);c.fill();c.restore()
  c.restore()
  if(fl){const u=(t-.34)/.56
    for(const[j,ex,ey,o]of[[0,218,34,0],[1,236,110,.06],[2,224,190,.12]]){const v=min(1,max(0,(u-o)/.62)),x=hx+(ex-hx)*out(v),y=hy-20+(ey-hy+20)*out(v)
      if(v<=0)continue
      if(v<.95){c.lineWidth=2.5;const b=Math.atan2(ey-hy,ex-hx);for(const d of[-6,6])c.beginPath(),c.moveTo(x-cos(b)*30+d*sin(b),y-sin(b)*30-d*cos(b)),c.lineTo(x-cos(b)*12+d*sin(b),y-sin(b)*12-d*cos(b)),c.stroke();const q=cos(v*T*2);card(c,x,y,v*T*1.5,Math.sign(q||1)*max(.3,Math.abs(q)),1.25)}
      else{const f=(u-o-.62*.95)/.25;if(f<1){c.lineWidth=4;c.fillStyle='#fff';burst(c,ex,ey,18*(1.2-.6*f),8);c.fill();c.stroke();c.fillStyle=lt;c.fillStyle='#111';c.beginPath();c.arc(ex,ey,4*(1-f),0,T);c.fill()}}}}
  for(const[l,s]of[[22,'#111'],[12,'#111']])c.lineWidth=l,c.strokeStyle=s,c.beginPath(),c.moveTo(118,186),c.quadraticCurveTo(140+20*k,170-30*k,hx-4,hy+12),c.stroke()
  c.strokeStyle='#fff';c.lineWidth=3;c.beginPath();c.moveTo(hx-14,hy+8);c.lineTo(hx+2,hy+20);c.stroke();c.strokeStyle='#111'
  if(hold)for(const a of[-.35,0,.35])card(c,hx+2+sin(a)*22,hy-20-cos(a)*18,a,1,.9)
  c.lineWidth=5;c.fillStyle='#fff';c.beginPath();c.ellipse(hx,hy+2,10,10,0,0,T);c.fill();c.stroke()
  c.beginPath();c.roundRect(hx-4,hy-20,7,18,3);c.fill();c.stroke();c.beginPath();c.roundRect(hx+4,hy-18,7,17,3);c.fill();c.stroke()
}
