// gold pocket watch with a wobbling case whose face is a spinning rainbow-and-black spiral vortex, curved hands whirling around and upright roman numerals bobbing and tilting in a wave
export const frames=18,delay=80
const P=Math.PI*2,R=84,cx=128,cy=140
const G={I:[[[0,0],[0,1]]],V:[[[0,0],[.33,1],[.66,0]]],X:[[[0,0],[.66,1]],[[.66,0],[0,1]]]}
const num=['XII','I','II','III','IIII','V','VI','VII','VIII','IX','X','XI']
const glyph=(c,s,h)=>{
  const w=([...s].reduce((a,k)=>a+(k=='I'?.36:.88),0)-.22)*h,L=[]
  let x=-w/2
  for(const k of s){for(const l of G[k])L.push(l.map(([u,v])=>[x+u*h,(v-.5)*h]));x+=(k=='I'?.36:.88)*h}
  for(const[lw,st]of[[5.5,'#111'],[2.6,'#fff']]){
    c.lineWidth=lw;c.strokeStyle=st
    for(const l of L){c.beginPath();for(const p of l)c.lineTo(...p);c.stroke()}
  }
}
export default(c,t)=>{
  const W=2.4+1.3*Math.sin(t*P),tw=r=>W*(1-r/R)**2,rot=-t*P
  c.translate(cx,cy)
  // bow ring and crown
  c.lineWidth=5;c.fillStyle='#f7c948'
  c.beginPath();c.ellipse(0,-118,13,11,0,0,P);c.ellipse(0,-118,6,5,0,0,P);c.fill('evenodd');c.stroke()
  c.beginPath();c.roundRect(-9,-110,18,14,4);c.fill();c.stroke()
  // wobbly case
  c.beginPath()
  for(let j=0;j<=120;j++){
    const a=j/120*P,r=101+3*Math.sin(a*5-t*P*2)
    c.lineTo(r*Math.cos(a),r*Math.sin(a))
  }
  c.fill();c.stroke()
  c.fillStyle='#e09b2d';c.beginPath();c.arc(0,0,R+7,0,P);c.fill();c.stroke()
  // vortex face
  c.save();c.beginPath();c.arc(0,0,R,0,P);c.clip()
  for(let j=0;j<12;j++){
    c.beginPath()
    for(const[k,d]of[[j,1],[j+1,-1]])for(let m=0;m<=20;m++){
      const r=(d>0?m:20-m)/20*R*1.02,a=k/12*P+rot+tw(r)
      c.lineTo(r*Math.cos(a),r*Math.sin(a))
    }
    c.fillStyle=j%2?'#1b1030':`hsl(${j*30},100%,58%)`;c.fill()
  }
  c.restore()
  c.beginPath();c.arc(0,0,R,0,P);c.stroke()
  // numerals bobbing in a wave
  num.forEach((s,n)=>{
    const v=t*P*2-n*P/6,r=64+5*Math.sin(v),a=n/12*P-P/4
    c.save();c.translate(r*Math.cos(a),r*Math.sin(a));c.rotate(.25*Math.cos(v))
    glyph(c,s,14);c.restore()
  })
  // curved hands following the swirl
  for(const[L,h,lw]of[[44,-t*P-P/4,9],[70,t*P*2-P/4,7]]){
    const pts=[]
    for(let m=0;m<=16;m++){const r=m/16*L,a=h+tw(r)-tw(0);pts.push([r*Math.cos(a),r*Math.sin(a)])}
    for(const[w,st]of[[lw+4,'#111'],[lw-1,'#fff']]){
      c.lineWidth=w;c.strokeStyle=st;c.beginPath();for(const p of pts)c.lineTo(...p);c.stroke()
    }
    const[x,y]=pts[16];c.fillStyle='#fff';c.lineWidth=3.5
    c.beginPath();c.arc(x,y,lw*.7,0,P);c.fill();c.stroke()
  }
  c.fillStyle='#f7c948';c.lineWidth=4
  c.beginPath();c.arc(0,0,8,0,P);c.fill();c.stroke()
}
