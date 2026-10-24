// a little guy leans over a dark pit, two huge eyes blink open down in the dark and stare back, he backs away sweating, then creeps back for another look
const{sin,cos,PI,min,max,hypot}=Math,T=2*PI
export const frames=32,delay=90,rim=4
const cl=u=>min(1,max(0,u)),ez=(t,a,b)=>{const x=cl((t-a)/(b-a));return x*x*(3-2*x)},bump=(t,a,w)=>cl(1-Math.abs(t-a)/w)
const PX=158,PY=184,K=1.5
const eye=(c,x,y,o,gx,gy)=>{
  if(o<.05)return c.lineWidth=4,c.strokeStyle='#343a40',c.beginPath(),c.moveTo(x-18,y),c.quadraticCurveTo(x,y+5,x+18,y),c.stroke()
  c.save();c.beginPath();c.moveTo(x-21,y);c.quadraticCurveTo(x,y-30*o,x+21,y);c.quadraticCurveTo(x,y+30*o,x-21,y);c.closePath();c.fillStyle='#fff';c.fill();c.clip()
  const d=hypot(gx-x,gy-y),px=x+(gx-x)/d*8,py=y+(gy-y)/d*6;c.fillStyle="#111";c.beginPath();c.arc(px,py,7.5,0,T);c.fill();c.fillStyle="#fff";c.beginPath();c.arc(px-2.5,py-2.5,2.2,0,T);c.fill();c.restore()
}
export default(c,t)=>{
  c.translate(0,-16)
  const back=ez(t,.34,.6)-ez(t,.8,.97),gx=70-8*back,walk=(t>.34&&t<.6)||(t>.8&&t<.97),st=walk?sin(t*T*9):0
  const shock=ez(t,.25,.28)*(1-ez(t,.7,.8)),lean=.42*(1-ez(t,.24,.27))-.16*shock+.42*ez(t,.9,.99)
  const blink=1-bump(t,.47,.035),o1=(ez(t,.12,.15)-ez(t,.66,.73))*blink,o2=(ez(t,.17,.2)-ez(t,.68,.75))*blink
  // island
  c.fillStyle='#c08a5b';c.lineWidth=6;c.beginPath();c.moveTo(6,178);c.lineTo(6,196);c.ellipse(128,196,122,56,0,PI,0,true);c.lineTo(250,178);c.closePath();c.fill();c.stroke()
  c.fillStyle='#8ce99a';c.beginPath();c.ellipse(128,178,122,56,0,0,T);c.fill();c.stroke()
  c.strokeStyle='#37b24d';c.lineWidth=3.5;for(const[x,y]of[[28,184],[56,214],[106,226],[230,190],[216,150],[92,138],[150,130]])c.beginPath(),c.moveTo(x-5,y-7),c.lineTo(x,y),c.lineTo(x+5,y-8),c.stroke()
  // pit with its far wall showing
  c.save();c.beginPath();c.ellipse(PX,PY,78,36,0,0,T);c.fillStyle='#a9784f';c.fill();c.clip();c.fillStyle='#111';c.beginPath();c.ellipse(PX,PY+12,80,36,0,0,T);c.fill();c.restore()
  c.strokeStyle='#111';c.lineWidth=6;c.beginPath();c.ellipse(PX,PY,78,36,0,0,T);c.stroke()
  // the eyes look at his head
  const hx=gx+sin(lean)*66,hy=166-cos(lean)*66
  eye(c,PX-26,PY+10,o1,hx,hy);eye(c,PX+26,PY+10,o2,hx,hy)
  // little guy, feet at (gx,166), facing right
  c.save();c.translate(gx,166);c.scale(K,K);c.rotate(lean);c.strokeStyle='#111'
  c.lineWidth=5;for(const d of[-1,1])c.beginPath(),c.moveTo(d*7,-14),c.lineTo(d*7+d*st*5,0),c.stroke()
  const ar=shock*.9;c.lineWidth=4.5;for(const d of[-1,1])c.beginPath(),c.moveTo(d*18,-36),c.lineTo(d*(26+4*ar),-22-26*ar),c.stroke()
  c.fillStyle='#fff';c.lineWidth=5;c.beginPath();c.ellipse(0,-40,22,28,0,0,T);c.fill();c.stroke()
  if(shock>.5){
    c.lineWidth=3;for(const x of[2,17])c.beginPath(),c.arc(x,-48,7.5,0,T),c.fill(),c.stroke()
    c.fillStyle='#111';for(const x of[2,17])c.beginPath(),c.arc(x+2.5,-46,2.2,0,T),c.fill()
    c.lineWidth=3;c.beginPath();c.ellipse(11,-30,4,5,0,0,T);c.stroke()
    c.fillStyle='#74c0fc';c.lineWidth=2.5;const s=(t*3)%1,sy=-60+14*s;c.beginPath();c.moveTo(-17,sy-9);c.quadraticCurveTo(-11,sy,-11,sy+3);c.arc(-17,sy+3,6,0,PI);c.quadraticCurveTo(-23,sy,-17,sy-9);c.fill();c.stroke()
  }else{
    c.fillStyle='#111';for(const x of[5,17])c.beginPath(),c.ellipse(x,-44,3,4,0,0,T),c.fill()
    c.lineWidth=2.5;c.beginPath();c.moveTo(8,-31);c.quadraticCurveTo(12,-29,16,-31);c.stroke()
  }
  c.restore()
  // ! pop over his head
  const ex=bump(t,.34,.08)
  if(ex>0){const s=min(1,ex*2.5);c.save();c.translate(hx+16,hy-42);c.scale(s,s);for(const[w,col]of[[16,'#111'],[7,'#fff']])c.lineWidth=w,c.strokeStyle=col,c.beginPath(),c.moveTo(0,-20),c.lineTo(0,2),c.moveTo(0,14),c.lineTo(0,14.1),c.stroke();c.restore()}
}
