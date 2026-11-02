// glass triangular prism splitting a white light beam into a wavy rainbow fan that ripples to the right, sparkles flowing along the light
const P=Math.PI*2,C=['#ff2d55','#ff8a00','#ffe100','#2ee05a','#1e9bff','#7a3cff']
const L=(p,q,f)=>[p[0]+(q[0]-p[0])*f,p[1]+(q[1]-p[1])*f]
export const frames=24,delay=60
const star=(c,x,y,r)=>{
  if(r<1.5)return
  c.beginPath()
  for(let a=0;a<8;a++){const q=a*P/8,d=a%2?r*.33:r;c.lineTo(x+d*Math.cos(q),y+d*Math.sin(q))}
  c.closePath();c.lineWidth=3;c.strokeStyle='#111';c.stroke();c.fillStyle='#fff';c.fill()
}
export default(c,t)=>{
  const A=[100,58],B=[36,174],D=[164,174],E=L(B,A,.42),X0=L(D,A,.66),X1=L(D,A,.46)
  // y of fan boundary k at x
  const by=(k,x)=>{
    const s=L(X0,X1,k/6),f=Math.max(0,(x-s[0])/(264-s[0]))
    return s[1]+(70+k*26-s[1])*f+17*f**1.3*Math.sin(P*(x/76-t)+k*.5)
  }
  const bd=k=>{const s=L(X0,X1,k/6),o=[s];for(let x=s[0]+3;x<=267;x+=3)o.push([x,by(k,x)]);return o}
  const b=[...Array(7)].map((_,k)=>bd(k))
  C.forEach((col,k)=>{
    c.beginPath()
    b[k].forEach(p=>c.lineTo(...p))
    ;[...b[k+1]].reverse().forEach(p=>c.lineTo(...p))
    c.fillStyle=col;c.fill()
  })
  c.lineWidth=5
  ;[b[0],b[6]].forEach(l=>{c.beginPath();l.forEach(p=>c.lineTo(...p));c.stroke()})
  // incoming beam
  const S=[-14,166]
  c.lineWidth=19;c.beginPath();c.moveTo(...S);c.lineTo(...E);c.stroke()
  c.lineWidth=10;c.strokeStyle='#fff';c.stroke()
  // glass
  const tri=()=>{c.beginPath();c.moveTo(...A);c.lineTo(...B);c.lineTo(...D);c.closePath()}
  tri();c.fillStyle='#c9ecff';c.fill()
  c.save();tri();c.clip()
  C.forEach((col,k)=>{
    c.beginPath();c.moveTo(...E);c.lineTo(...L(X0,X1,k/6));c.lineTo(...L(X0,X1,(k+1)/6))
    c.fillStyle=col;c.globalAlpha=.6;c.fill()
  })
  c.globalAlpha=1
  // glint sweeping the glass
  const g=-80+330*t
  c.fillStyle='#fff';c.beginPath()
  c.moveTo(g,44);c.lineTo(g+20,44);c.lineTo(g-48,194);c.lineTo(g-68,194);c.fill()
  c.beginPath();c.moveTo(g+30,44);c.lineTo(g+37,44);c.lineTo(g-31,194);c.lineTo(g-38,194);c.fill()
  c.restore()
  c.lineWidth=7;c.strokeStyle='#111';tri();c.stroke()
  // sparkles riding the beam and the rainbow
  for(let j=0;j<3;j++){const f=(t+j/3)%1;star(c,...L(S,E,f),8*Math.sin(Math.PI*f))}
  for(let j=0;j<4;j++){
    const f=(t+j/4)%1,k=[1,4,2,5][j],x=X0[0]+8+f*(250-X0[0])
    star(c,x,(by(k,x)+by(k+1,x))/2-1,8*Math.sin(Math.PI*f))
  }
}
