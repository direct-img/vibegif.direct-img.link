// emoticon sobbing with T glyph eyes whose stems pour into rivers of tears, wailing mouth opens wide as grey ))) sound arcs ring out and , comma drops spill off the jaw
export const frames=26,delay=70
const P=Math.PI,{sin,max,min}=Math,K='#111',G='#9a9a9a'
// river centreline down the cheek, v 0..1
const rv=(s,v)=>[s*(40+18*v**1.3+3*sin(v*P*2)),2+74*v]
// , glyph: round head and a tail hooking down-left, in two passes so it has an ink outline
const comma=(c,x,y,r,a)=>{c.save();c.translate(x,y);c.rotate(a);c.lineCap='butt'
  for(const[o,f]of[[3.5,K],[0,G]]){c.fillStyle=c.strokeStyle=f
    c.beginPath();c.arc(0,0,r+o,0,2*P);c.fill()
    c.lineWidth=r*.9+2*o;c.beginPath();c.moveTo(r*.55,0);c.quadraticCurveTo(r*.8,r*1.5,-r*.5,r*2.3);c.stroke()}
  c.restore()}
export default(c,t)=>{
  // two sobs per loop: a = how far into the wail, hic = little gasp before the next one
  const u=t*2%1,a=sin(P*u)**.7,hic=max(0,sin(P*(u*5-4)))*(u>.8)
  const q=Math.round,rx=96+q(3*a),ry=96-q(3*a-2*hic)
  c.translate(128,130+q(2*a-4*hic))
  c.beginPath();c.ellipse(0,0,rx,ry,0,0,2*P)
  c.fillStyle='#fff';c.fill();c.lineWidth=8;c.strokeStyle=K;c.stroke()
  c.save();c.clip()
  // tear rivers: tapered grey bands with white ripples flowing down
  for(const s of[-1,1]){
    const L=[],R=[]
    for(let k=0;k<=16;k++){
      const v=k/16,[x,y]=rv(s,v),w=3+8*v**.6+3*a*v**.5
      L.push([x-w,y]);R.unshift([x+w,y])
    }
    c.beginPath();[...L,...R].forEach(([x,y],k)=>k?c.lineTo(x,y):c.moveTo(x,y));c.closePath()
    c.fillStyle=G;c.fill()
    for(let j=0;j<4;j++){
      const v=(t*4+j/4)%1,[x,y]=rv(s,v),[x2,y2]=rv(s,min(1,v+.08))
      c.beginPath();c.moveTo(x-s*1.5,y);c.lineTo(x2-s*1.5,y2);c.lineWidth=3+2*v;c.strokeStyle='#fff';c.stroke()
    }
  }
  c.restore()
  // steep worried brows, jumping up on each wail
  c.lineWidth=9;c.strokeStyle=K
  for(const s of[-1,1]){
    c.beginPath();c.moveTo(s*66,-36);c.quadraticCurveTo(s*44,-44-4*a,s*18,-62-8*a);c.stroke()
  }
  // eyes as bold T glyphs, crossbar drooping at the outer end, the stem running straight into the river
  c.lineCap='butt';c.lineWidth=10
  for(const s of[-1,1]){
    c.beginPath();c.moveTo(s*19,-19-3*a);c.lineTo(s*61,-9-a);c.stroke()
    c.beginPath();c.moveTo(s*40,-14-2*a);c.lineTo(s*40,6);c.stroke()
  }
  // ))) wail arcs ring out from the upper corners, one more with each beat of the wail
  for(const s of[-1,1])for(let k=0;k<3;k++){if(k==1)continue;
    if(u<.12+k*.1||u>.8)continue
    const R=106+16*k,m=s>0?-P/4:-3*P/4,h=.34-.06*k
    c.lineWidth=9;c.strokeStyle=G;c.beginPath();c.arc(0,0,R,m-h,m+h);c.stroke()
  }
  c.lineCap='round';c.lineWidth=8;c.strokeStyle=K
  // wailing mouth: arched top lip with drooping corners, deep open jaw, tongue inside
  const w=24+10*a,h=18+38*a,y0=38-4*a
  const m=()=>{c.beginPath();c.moveTo(-w,y0+6);c.quadraticCurveTo(0,y0-16-8*a,w,y0+6)
    c.bezierCurveTo(w*1.05,y0+6+h,-w*1.05,y0+6+h,-w,y0+6);c.closePath()}
  m();c.fillStyle=K;c.fill();c.save();c.clip()
  c.beginPath();c.ellipse(0,y0+6+h*.78,w*.62,h*.3+3,0,0,2*P);c.fillStyle=G;c.fill()
  c.restore()
  m();c.lineWidth=8;c.stroke()
  // , comma drops spilling off the jaw under each river, tumbling as they fall
  for(const s of[-1,1])for(let j=0;j<2;j++){
    const f=(t*4+j/2+(s>0?.25:0))%1,[x,y]=rv(s,1),r=(6+2*a)*(1-f)**.5
    comma(c,x+s*4*f,y+6+30*f*f,r,-s*.2)
  }
}
