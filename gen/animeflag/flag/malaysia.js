// Malaysia's flag (Jalur Gemilang) waving on a silver pole: 14 red and white stripes, blue canton with the yellow crescent and 14-point star, and a smiling anime girl printed on the fly side, long dark hair streaming in the wind, red hibiscus (bunga raya) behind her ear, royal yellow top with a navy collar, waving hello and blinking while hibiscus petals drift away
export const frames=16
const P=Math.PI
const p=(c,d)=>{
  c.beginPath()
  const a=d.match(/[A-Z]|-?[\d.]+(e-?\d+)?/g),n=()=>+a[j++]
  let j=0,k
  while(j<a.length){
    if(/[A-Z]/.test(a[j]))k=a[j++]
    k=='M'?c.moveTo(n(),n()):k=='L'?c.lineTo(n(),n()):k=='Q'?c.quadraticCurveTo(n(),n(),n(),n()):k=='C'?c.bezierCurveTo(n(),n(),n(),n(),n(),n()):c.closePath()
  }
}
// bangs edge from right temple to left temple: each tip [x,y] reached from a valley, locks sweep to the left
const bang=(r,l,tp,vy=-11)=>{
  let s=`M${r[0]},${r[1]}`,q=r
  tp.forEach(([x,y,z],k)=>{
    const v=[(x+q[0])/2+1,z??vy+(k%2)]
    s+=`Q${q[0]-1},${(q[1]+v[1])/2-2} ${v[0]},${v[1]}Q${x+2},${y-6} ${x},${y}`
    q=[x,y]
  })
  return s+`Q${l[0]+5},${l[1]-12} ${l[0]},${l[1]}`
}
export default(c,t,i)=>{
  const X=16,Y=52,W=232,H=116,A=5,T=2*P*t,S=256
  const F=(d,f,s,w=1.6)=>{p(c,d);if(f)c.fillStyle=f,c.fill();if(s)c.strokeStyle=s,c.lineWidth=w,c.stroke()}
  const E=(x,y,rx,ry,f,r=0)=>{c.beginPath();c.ellipse(x,y,rx,ry,r,0,2*P);c.fillStyle=f;c.fill()}
  const w=v=>Math.sin(T+v)
  // flat flag: 14 stripes, canton over 8 of them
  for(let k=0;k<14;k++)c.fillStyle=k%2?'#fff':'#cc0001',c.fillRect(X,Y+k*H/14,W,H/14+.5)
  const cw=W/2,ch=H*8/14
  c.fillStyle='#010066';c.fillRect(X,Y,cw,ch)
  c.fillStyle='#fc0'
  const cx=X+cw*.37,cy=Y+ch/2,R=ch*.4,r=ch*.36,dd=ch*.1,x0=(R*R-r*r+dd*dd)/(2*dd),y0=Math.sqrt(R*R-x0*x0)
  const a1=Math.atan2(y0,x0),a2=Math.atan2(y0,x0-dd)
  c.beginPath();c.arc(cx,cy,R,a1,2*P-a1);c.arc(cx+dd,cy,r,2*P-a2,a2,true);c.fill()
  c.beginPath()
  for(let k=0;k<28;k++){const a=-P/2+k*P/14,q=k%2?ch*.155:ch*.3;c.lineTo(X+cw*.64+q*Math.cos(a),cy+q*Math.sin(a))}
  c.fill()
  c.save();c.beginPath();c.rect(X,Y,W,H);c.clip()
  // drifting hibiscus petals, out of her hair towards the fly
  for(let k=0;k<3;k++){
    const u=(t+k/3)%1
    c.save();c.translate(X+W*(.8+u*.3),Y+20+k*34+Math.sin(u*2*P*2+k)*6);c.rotate(u*8+k)
    F('M0,-5Q5,0 0,5Q-5,0 0,-5Z','#ff8fa3','#8a0a1e',1.2);c.restore()
  }
  c.translate(X+W*.75,Y+51);c.scale(.88,.88)
  const L='#3b2019',K='#f3c9a4',KS='#dc9e7a',h='#2a1a1c',hm='#1c1012',hl='#64464c',HL='#120809',HH=H/.88
  // long back hair streaming right
  const a=w(0)*2.5,b=w(-1)*2.5
  F(`M-28,-16C-38,0-38,24-36,44Q-36,58-38,${HH}L46,${HH}Q44,80 ${60+a},${70+b}Q48,64 45,56Q52,48 ${64+b},${42+a}Q50,34 40,24Q40,0 28,-16Z`,hm,HL)
  F(`M36,30Q46,38 ${58+b},${42+a}M40,62Q50,68 ${56+a},${70+b}`,0,hl,1)
  // neck + top
  F('M-6.5,18L-6.5,42L6.5,42L6.5,18Z',K,L)
  F('M-6.5,26Q0,35 6.5,26L6.5,32Q0,39-6.5,32Z',KS)
  const bd=`M-8,38Q-28,40-37,52L-41,${HH}L41,${HH}L37,52Q28,40 8,38Z`
  F(bd,'#ffcf2e',L)
  c.save();p(c,bd);c.clip()
  F('M-12,38Q0,50 12,38L16,40Q0,60-16,40Z','#14137a',L,1.2)
  for(let k=-3;k<=3;k++)E(k*3.6,46+(3-Math.abs(k))*1.6-Math.abs(k)*.3,1,1,'#fc0')
  F(`M-24,60Q-26,72-25,${HH}M24,60Q26,72 25,${HH}`,0,'#d9a400',1.4)
  c.restore()
  F('M-7,38Q0,46 7,38',0,L,1.4)
  // face
  const fc='M-24,-12L-23,4Q-21,16-8,26Q0,31 8,26Q21,16 23,4L24,-12C24,-40-24,-40-24,-12Z',bg=[[21,-1],[12,-3],[4,-4],[-5,-4,-17],[-13,-3],[-22,-1]]
  F(fc,K,L)
  c.save();p(c,fc);c.clip()
  c.translate(0,2);F(bang([29,12],[-29,12],bg)+'L-40,-60L40,-60Z',KS);c.restore()
  const bl=i==5||i==6
  for(const s of[-1,1]){
    c.save();c.scale(s,1)
    if(bl)F('M4,6Q13,11 22,5',0,HL,2.4)
    else{
      const ey='M4,4C6,-1 12,-3 17.5,-2.5C21,-2 22,2 21.5,5C21,9 18,13 12.5,13.5C7,13.5 4.5,10 4,4Z'
      F(ey,'#fff')
      c.save();p(c,ey);c.clip()
      E(12.6,6,6.8,8.6,'#6b3a1e');E(12.6,2,6.8,5.4,'#3a1d0c');E(12.6,6,2.9,4.2,'#1a0c06')
      E(12.6,12.2,4.6,2.6,'#c48a52');c.restore()
      E(10.2,2.4,2.6,2.9,'#fff');E(15.6,9.8,1.2,1.2,'#fff')
      F('M3,4.5C5,-2 12,-5 18,-4C21.5,-3.5 23.5,-1 24.5,2.5L22.5,1.5C21,-.5 18,-1.6 13.5,-1.6C9,-1.6 5.5,1 3,4.5Z',HL,HL,1)
      F('M14,13.5Q18.5,13 20.5,10',0,L,.9)
    }
    E(17,15,4.4,2,'rgba(255,105,120,.35)')
    c.restore()
  }
  F('M1,13L0,14.5',0,L,1.1)
  F('M-4.5,18.5Q0,25.5 4.5,18.5Q0,19.5-4.5,18.5Z','#a8323f',L,1.2)
  F('M-2.2,22.4Q0,21 2.2,22.4Q0,24.4-2.2,22.4Z','#f07a86')
  // front hair
  F(bang([29,12],[-29,12],bg)+'C-36,-12-33,-45 0,-46C33,-45 36,-12 29,12Z',h,HL)
  F('M-19,-33Q0,-42 19,-33L17,-29L13,-32L9,-28.5L5,-32L1,-28.5L-3,-32L-7,-28.5L-11,-32L-15,-29Z',hl)
  F('M-4,-42Q-9,-26-11,-15M9,-41Q11,-26 12,-16M-16,-36Q-22,-22-22,-12',0,HL,1)
  F(`M-24,-8Q-32,14-29,${44+w(1)}Q-25,26-20,4Z`,h,HL,1.2)
  F(`M24,-8Q32,12 ${36+w(2)*2},${40+w(1)}Q28,24 20,4Z`,h,HL,1.2)
  // hibiscus behind the left ear
  c.save();c.translate(-25,-22);c.rotate(-.3+w(1)*.06)
  F('M2,4Q14,6 16,14Q6,14 2,4Z','#3f8a3a','#1f4a1c',1)
  for(let k=0;k<5;k++){c.save();c.rotate(k*2*P/5);F('M0,0Q-7,-6-5,-11Q0,-14 5,-11Q7,-6 0,0Z','#e8112d','#6d0010',1.1);c.restore()}
  E(0,0,2.4,2.4,'#a0001a')
  F('M0,0Q3,-6 7,-9',0,'#ffd54a',1.3);E(7,-9,1.4,1.4,'#ffd54a')
  c.restore()
  // waving hand
  F(`M26,31L36,31L45,${HH}L25,${HH}Z`,'#ffcf2e',L,1.4)
  F('M26,31L36,31L36.3,35L26.3,35Z','#14137a',L,1.2)
  c.save();c.translate(31,31);c.scale(-1,1);c.rotate(-.12+.24*Math.sin(2*T))
  F('M-4.5,0L-5.5,-10Q-6,-15-3.8,-15Q-2,-15-2,-11Q-2,-17 0,-17Q2,-17 2,-11.5Q2.2,-16 4,-15.6Q5.8,-15 5.5,-10L5.5,-7Q8,-11 9.6,-9.4Q10.4,-8 6.5,-2.5L4.5,0Z',K,L,1.2)
  F('M-2,-11L-2,-8M2,-11.5L2,-8',0,KS,.9)
  c.restore()
  c.restore()
  c.lineWidth=2;c.strokeStyle='#1b1b1b';c.strokeRect(X+1,Y+1,W-2,H-2)
  // wave: columns shifted along a travelling sine, softly shaded
  const d=c.getImageData(0,0,S,S).data,o=c.createImageData(S,S),e=o.data
  for(let x=0;x<S;x++){
    const u=Math.max(0,(x-X)/W),ph=2*P*(1.25*u-t),dy=A*u*Math.sin(ph),k=1+.07*Math.cos(ph)*Math.min(1,u*5)
    for(let y=0;y<S;y++){
      const sy=y-dy,y0=Math.floor(sy),f=sy-y0,j0=(y0*S+x)*4,j1=j0+S*4
      const a0=y0>=0&&y0<S?d[j0+3]*(1-f):0,a1=y0+1>=0&&y0+1<S?d[j1+3]*f:0,a=a0+a1,j=(y*S+x)*4
      if(a<1)continue
      for(let q=0;q<3;q++)e[j+q]=Math.min(255,(d[j0+q]*a0+d[j1+q]*a1)/a*k)
      e[j+3]=a
    }
  }
  c.putImageData(o,0,0)
  // pole
  c.lineWidth=2;c.strokeStyle='#2a2a2a'
  c.fillStyle='#c9ced6';c.beginPath();c.rect(9,44,7,206);c.fill();c.stroke()
  c.fillStyle='#eef1f5';c.fillRect(10.5,45,2,204)
  c.fillStyle='#f2b632';c.beginPath();c.arc(12.5,40,6,0,2*P);c.fill();c.stroke()
  c.fillStyle='#fff2b0';c.beginPath();c.arc(10.5,38,2,0,2*P);c.fill()
}
