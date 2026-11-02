// cross-legged meditating figure levitating up and down while its seven chakra dots light up in a wave from root to crown and wobbly rainbow aura rings ripple outward behind it
export const frames=24,delay=80
const T=Math.PI*2,C=['#ff2e4d','#ff8a00','#ffe600','#2fdc5a','#00c2ff','#4b4bff','#b43bff']
const P=[...C,'#111111','#ffffff','#2a1466','#c02a8a','#ff4fa8','#ff8ac8','#ffc2e2'].map(h=>[1,3,5].map(k=>parseInt(h.slice(k,k+2),16)))
// plus every halfway mix, so edges keep some smoothing
const Q=P.flatMap((a,i)=>P.slice(i).map(b=>a.map((v,k)=>v+b[k]>>1)))
const body=(c,g,col,y)=>{
  c.fillStyle=c.strokeStyle=col
  const O=(x,yy,r)=>{c.beginPath();c.arc(x,y+yy,r+g,0,T);c.fill()}
  const L=(w,...p)=>{c.beginPath();for(let k=0;k<p.length;k+=2)c.lineTo(p[k],y+p[k+1]);c.lineWidth=w+2*g;c.stroke()}
  c.beginPath();c.ellipse(128,y+182,68+g,17+g,0,0,T);c.fill()
  L(15,103,112,84,148,66,176);L(15,153,112,172,148,190,176)
  c.beginPath();c.moveTo(103,106);c.lineTo(153,106);c.lineTo(144,170);c.lineTo(112,170);c.closePath();c.fill();c.lineWidth=12+2*g;c.stroke()
  L(12,128,100,128,84)
  O(128,75,19);O(128,51,7);O(64,178,8);O(192,178,8)
}
export default(c,t)=>{
  const y=-8*Math.cos(t*T)-12,N=7,R=106
  // aura rings born at the heart, drifting out and thinning
  for(let j=0;j<N;j++){
    const p=(j+N*t)%N/N,r=14+p*(R-14),w=13*(1-p)**.7
    c.beginPath()
    for(let k=0;k<=96;k++){const a=k*T/96,q=r*(1+.07*Math.sin(a*9+j*2+t*T*2)*p)
      c.lineTo(128+q*Math.cos(a),y+124+q*Math.sin(a))}
    c.lineWidth=w+4*(1-p);c.strokeStyle='#111';c.stroke()
    c.lineWidth=w;c.strokeStyle=C[j];c.stroke()
  }
  // lotus below
  c.lineWidth=3.5;c.strokeStyle='#111'
  for(const[a,l,col]of[[-1.3,56,'#c02a8a'],[1.3,56,'#c02a8a'],[-.85,60,'#ff4fa8'],[.85,60,'#ff4fa8'],[-.42,62,'#ff8ac8'],[.42,62,'#ff8ac8'],[0,62,'#ffc2e2']]){
    c.save();c.translate(128,250);c.scale(1,.5);c.rotate(a)
    c.beginPath();c.moveTo(0,0);c.quadraticCurveTo(17,-l*.5,0,-l);c.quadraticCurveTo(-17,-l*.5,0,0);c.fillStyle=col;c.fill();c.stroke()
    c.restore()
  }
  // twinkles
  ;[[34,40],[222,52],[24,150],[230,138],[52,226],[206,222],[128,14]].forEach(([x,v],k)=>{
    const e=Math.max(0,Math.sin(T*(t+k*.37)))**2*13
    if(e<1)return
    c.beginPath();for(let m=0;m<8;m++){const r=m&1?e*.3:e;c.lineTo(x+r*Math.cos(m*T/8),v+r*Math.sin(m*T/8))}
    c.closePath();c.fillStyle=C[k];c.fill();c.lineWidth=2;c.strokeStyle='#111';c.stroke()
  })
  body(c,6,'#111',y);body(c,3,'#fff',y);body(c,0,'#2a1466',y)
  // crossed shins
  c.lineWidth=3;c.strokeStyle='#fff'
  c.beginPath();c.moveTo(66,y+186);c.quadraticCurveTo(110,y+200,150,y+180);c.moveTo(190,y+186);c.quadraticCurveTo(150,y+198,112,y+182);c.stroke()
  // chakras pulse up the spine
  const Y=[170,154,138,120,98,76,54]
  Y.forEach((v,k)=>{
    const e=Math.max(0,Math.cos(T*(t-k/7)))**4
    c.beginPath();c.arc(128,y+v,4.5+3.5*e,0,T);c.fillStyle=C[k];c.fill()
    if(e>.2){c.beginPath();c.arc(128,y+v,9+6*e,0,T);c.lineWidth=2.5;c.strokeStyle=C[k];c.stroke()}
  })
  // snap to the palette so it compresses well
  const d=c.getImageData(0,0,256,256),D=d.data
  for(let p=0;p<D.length;p+=4){
    if(D[p+3]<128){D[p+3]=0;continue}
    let m=1e9,k
    for(const q of Q){const e=(D[p]-q[0])**2+(D[p+1]-q[1])**2+(D[p+2]-q[2])**2;if(e<m)m=e,k=q}
    D[p]=k[0];D[p+1]=k[1];D[p+2]=k[2];D[p+3]=255
  }
  c.putImageData(d,0,0)
}
