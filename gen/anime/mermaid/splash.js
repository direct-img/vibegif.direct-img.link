// mermaid with sea green hair lifts her purple tail out of the water and slaps it down, splash and ripples, bubbles rising
const{sin,cos,PI,min,max}=Math,T=2*PI
export const frames=20,delay=70
const SKIN='#ffe3d1',HAIR='#38d9a9',HD='#0ca678',HL='#c3fae8',EYE='#f06595',ED='#a61e4d',TL='#9775fa',TD='#6741d9',FIN='#d0bfff',SH='#faa2c1',SEA='#4dabf7',SL='#d0ebff',BL='#ffa8a8',STAR='#ffd43b'
const ease=x=>x<.5?2*x*x:1-2*(1-x)**2
const eye=(c,x,y,d,shut)=>{
  if(shut){c.lineWidth=6;c.beginPath();c.moveTo(x-14,y+4);c.quadraticCurveTo(x,y-12,x+14,y+4);c.stroke();return}
  c.fillStyle='#fff';c.beginPath();c.ellipse(x,y,14,17,0,0,T);c.fill()
  c.save();c.beginPath();c.ellipse(x,y+2,11.5,15,0,0,T);c.clip();c.fillStyle=EYE;c.fill();c.fillStyle=ED;c.beginPath();c.ellipse(x,y-8,13,10,0,0,T);c.fill();c.restore()
  c.lineWidth=2.5;c.beginPath();c.ellipse(x,y+2,11.5,15,0,0,T);c.stroke()
  c.fillStyle='#111';c.beginPath();c.ellipse(x,y+3,5.5,7.5,0,0,T);c.fill()
  c.fillStyle='#fff';c.beginPath();c.arc(x-4,y-5,4.5,0,T);c.fill();c.beginPath();c.arc(x+5,y+8,2,0,T);c.fill()
  c.lineWidth=6;c.beginPath();c.moveTo(x-16,y-6);c.quadraticCurveTo(x,y-20,x+16,y-6);c.moveTo(x+d*15,y-7);c.lineTo(x+d*21,y-12);c.stroke()
}
const star=(c,x,y,r,a)=>{c.save();c.translate(x,y);c.rotate(a);c.beginPath();for(let k=0;k<10;k++){const rr=k%2?r*.5:r,b=k*PI/5-PI/2;c.lineTo(cos(b)*rr,sin(b)*rr)}c.closePath();c.restore();c.fill();c.stroke()}
const tail=(c,r,b,dy)=>{
  c.save();c.beginPath();c.rect(0,0,256,230);c.clip();c.translate(140,214+dy);c.rotate(r)
  const e=b*1.3,p=()=>{c.beginPath();c.moveTo(-17,8);c.bezierCurveTo(-19,-30,-11+b,-60,-6+e,-82);c.quadraticCurveTo(-24+e,-86,-38+e,-112);c.quadraticCurveTo(-14+e,-108,e,-94);c.quadraticCurveTo(14+e,-108,38+e,-112);c.quadraticCurveTo(24+e,-86,6+e,-82);c.bezierCurveTo(11+b,-60,19,-30,17,8);c.closePath()}
  c.lineWidth=6;c.fillStyle=TL;p();c.fill();c.save();c.clip()
  c.fillStyle=FIN;c.beginPath();c.rect(-60,-140,120,54+0);c.fill()
  c.strokeStyle=TD;c.lineWidth=3;for(const y of[-14,-34,-54])c.beginPath(),c.arc(b*(-y/90)-7,y,7,.15*PI,.85*PI),c.arc(b*(-y/90)+7,y,7,.15*PI,.85*PI),c.stroke()
  c.beginPath();for(const d of[-1,1])c.moveTo(e,-92),c.quadraticCurveTo(e+d*14,-100,e+d*28,-106);c.stroke()
  c.restore();c.strokeStyle='#111';c.lineWidth=6;p();c.stroke()
  c.lineWidth=4;c.beginPath();c.moveTo(-6+e,-84);c.lineTo(6+e,-84);c.stroke()
  c.restore();c.restore()
}
export default(c,t,i)=>{
  const ts=.02,tu=.4,tw=.55,te=.66,u=t<te?-1:(t-te)/(1-te),p=(t-tw)/(te-tw)
  const dy=t<ts?110:t<tu?110*(1-(t-ts)/(tu-ts))**2:t<tw?0:t<te?48*p*p:48+62*min(1,u*4)
  const r=t<tw?.2:t<te?.2+.8*p*p:1,b=t<tu?-12:t<tw?-12*cos(2*PI*(t-tu)/(tw-tu)):14
  if(dy<110)tail(c,r,b,dy)
  c.save();c.translate(80,118);c.scale(.62,.62);c.translate(-128,-128)
  c.lineWidth=6;c.fillStyle=HD;c.beginPath();c.moveTo(128,34);c.bezierCurveTo(200,34,214,96,206,150);c.bezierCurveTo(224,196,198,226,216,300);c.lineTo(40,300);c.bezierCurveTo(58,226,32,196,50,150);c.bezierCurveTo(42,96,56,34,128,34);c.fill();c.stroke()
  c.fillStyle=SKIN;c.beginPath();c.moveTo(116,166);c.lineTo(116,190);c.quadraticCurveTo(70,194,66,236);c.lineTo(64,300);c.lineTo(192,300);c.lineTo(190,236);c.quadraticCurveTo(186,194,140,190);c.lineTo(140,166);c.fill();c.stroke()
  c.lineWidth=5;c.beginPath();c.moveTo(92,236);c.lineTo(94,300);c.moveTo(164,236);c.lineTo(162,300);c.stroke()
  c.fillStyle=SH;c.beginPath();c.moveTo(94,226);c.quadraticCurveTo(128,236,162,226);c.lineTo(162,250);c.quadraticCurveTo(128,258,94,250);c.closePath();c.fill();c.stroke()
  for(const x of[110,146]){c.fillStyle='#fff';c.beginPath();c.moveTo(x,250);c.lineTo(x-12,232);c.quadraticCurveTo(x,218,x+12,232);c.closePath();c.fill();c.lineWidth=4;c.stroke();c.lineWidth=2.5;c.beginPath();for(const k of[-6,0,6])c.moveTo(x,248),c.lineTo(x+k,228);c.stroke()}
  c.lineWidth=6;c.fillStyle=SKIN;c.beginPath();c.moveTo(74,96);c.bezierCurveTo(70,152,100,184,128,186);c.bezierCurveTo(156,184,186,152,182,96);c.bezierCurveTo(182,44,74,44,74,96);c.fill();c.stroke()
  const joy=u>=0&&u<.55,bl=i==5
  eye(c,103,140,-1,joy||bl);eye(c,153,140,1,joy||bl)
  c.fillStyle=BL;for(const d of[-1,1])c.beginPath(),c.ellipse(128+d*42,161,12,6,0,0,T),c.fill()
  c.lineWidth=3.5;c.fillStyle='#c92a2a';c.beginPath()
  if(joy)c.moveTo(116,164),c.quadraticCurveTo(128,184,140,164),c.closePath(),c.fill();else c.arc(128,164,7,.15*PI,.85*PI)
  c.stroke()
  c.lineWidth=6;c.fillStyle=HAIR;c.beginPath();c.moveTo(56,250)
  c.bezierCurveTo(68,200,40,170,52,120);c.bezierCurveTo(56,64,90,36,128,36);c.bezierCurveTo(166,36,200,64,204,120);c.bezierCurveTo(216,170,188,200,200,250)
  c.quadraticCurveTo(182,232,184,206);c.bezierCurveTo(190,170,176,140,180,104);c.quadraticCurveTo(172,100,166,110);c.quadraticCurveTo(158,96,148,92);c.quadraticCurveTo(142,104,134,110)
  c.quadraticCurveTo(128,96,120,92);c.quadraticCurveTo(116,104,108,110);c.quadraticCurveTo(100,96,92,94);c.quadraticCurveTo(86,104,84,110)
  c.quadraticCurveTo(80,102,76,104);c.bezierCurveTo(80,140,66,170,72,206);c.quadraticCurveTo(74,232,56,250);c.closePath();c.fill();c.stroke()
  c.strokeStyle=HL;c.lineWidth=5;for(const[a,e]of[[1.24,1.36],[1.44,1.52],[1.62,1.74]])c.beginPath(),c.arc(128,104,56,PI*a,PI*e),c.stroke()
  c.strokeStyle='#111';c.fillStyle=STAR;c.lineWidth=4;star(c,176,70,14,.3)
  c.restore()
  c.lineWidth=6;c.fillStyle=SEA;const sea=()=>{c.beginPath();c.moveTo(12,210);for(let k=0;k<6;k++)c.quadraticCurveTo(31+k*39,200,50+k*39,210);c.quadraticCurveTo(248,212,246,226);c.bezierCurveTo(240,252,16,252,10,226);c.quadraticCurveTo(8,212,12,210);c.closePath()}
  sea();c.fill();c.save();c.clip()
  c.strokeStyle=SL;c.lineWidth=4;c.beginPath();for(let k=0;k<6;k++)c.moveTo(18+k*39,220),c.quadraticCurveTo(31+k*39,214,44+k*39,220);c.stroke()
  c.fillStyle=SL;c.strokeStyle='#111';c.lineWidth=2.5;for(const[x,o,s]of[[40,0,4],[64,.4,3],[118,.7,5],[196,.2,3.5],[226,.55,4.5]]){const p=(t+o)%1;c.beginPath();c.arc(x+3*sin(p*T*2),246-34*p,s,0,T);c.fill();c.stroke()}
  if(u>=0){c.strokeStyle=SL;c.lineWidth=4;for(const k of[0,1]){const v=u-k*.25;if(v>0&&v<.7)c.beginPath(),c.ellipse(222,214,14+70*v,4+10*v,0,0,T),c.stroke()}}
  c.restore();c.strokeStyle='#111';c.lineWidth=6;sea();c.stroke()
  if(u>=0){
    c.fillStyle='#a5d8ff';c.lineWidth=3.5
    for(const[vx,vy,s]of[[-70,-150,6],[-40,-190,5],[-10,-210,7],[20,-180,5],[50,-160,6],[75,-120,4],[-90,-110,4]]){const x=222+vx*u,y=200+vy*u+260*u*u;if(y<206)c.beginPath(),c.moveTo(x,y-s*1.6),c.quadraticCurveTo(x+s,y,x,y+s),c.quadraticCurveTo(x-s,y,x,y-s*1.6),c.fill(),c.stroke()}
    const h=46*sin(PI*min(1,u*2.4));if(h>4){c.fillStyle=SL;c.lineWidth=5;c.beginPath();c.moveTo(196,208);for(const[x,y]of[[200,-.7],[206,-.3],[212,-1],[220,-.4],[228,-.95],[236,-.35],[242,-.6]])c.lineTo(x,208+y*h);c.lineTo(248,208);c.closePath();c.fill();c.stroke()}
  }
}
