// Peru's flag waving on a silver pole: red-white-red vertical bands, with a smiling anime girl printed in the white middle band, dark shoulder-length hair blowing in the wind, red cantuta flowers in her hair, white blouse with a red and gold Andean diamond embroidered collar, waving hello and blinking while cantuta petals drift by
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
  tp.forEach(([x,y],k)=>{
    const v=[(x+q[0])/2+1,vy+(k%2)]
    s+=`Q${q[0]-1},${(q[1]+v[1])/2-2} ${v[0]},${v[1]}Q${x+2},${y-6} ${x},${y}`
    q=[x,y]
  })
  return s+`Q${l[0]+5},${l[1]-12} ${l[0]},${l[1]}`
}
export default(c,t,i)=>{
  const X=16,Y=36,W=232,H=155,A=6,T=2*P*t,S=256
  const F=(d,f,s,w=1.6)=>{p(c,d);if(f)c.fillStyle=f,c.fill();if(s)c.strokeStyle=s,c.lineWidth=w,c.stroke()}
  const E=(x,y,rx,ry,f,r=0)=>{c.beginPath();c.ellipse(x,y,rx,ry,r,0,2*P);c.fillStyle=f;c.fill()}
  const w=v=>Math.sin(T+v)
  // flat flag
  c.fillStyle='#d91023';c.fillRect(X,Y,W,H)
  c.fillStyle='#fff';c.fillRect(X+W/3,Y,W/3,H)
  c.save();c.beginPath();c.rect(X,Y,W,H);c.clip()
  // drifting petals
  for(let k=0;k<3;k++){
    const u=(t+k/3)%1
    c.save();c.translate(X+W*(.5+u*.6),Y+40+k*42+Math.sin(u*2*P*2+k)*8);c.rotate(u*8+k)
    F('M0,-5Q5,0 0,5Q-5,0 0,-5Z','#ffc4d6','#9a1238',1.2);c.restore()
  }
  c.translate(X+W/2,Y+64)
  const L='#3b2019',K='#efbf98',KS='#d4936f',h='#2e1c1a',hm='#1f1211',hl='#6e4a47',HL='#140a09'
  // back hair
  F(`M-28,-16C-38,0-37,22-33,36Q-37,42-41,47Q-30,47-24,43Q-12,47 0,46Q14,47 27,${44+w(1)}Q${37+w(0)*2},${47+w(2)} ${46+w(.5)*3},${40+w(1)*2}Q37,34 34,22C37,4 36,-6 28,-16Z`,hm,HL)
  // neck + blouse
  F('M-6.5,18L-6.5,42L6.5,42L6.5,18Z',K,L)
  F('M-6.5,26Q0,35 6.5,26L6.5,32Q0,39-6.5,32Z',KS)
  F(`M-7,38Q-26,40-36,52L-40,${H}L40,${H}L36,52Q26,40 7,38Z`,'#fff',L)
  F('M-7,38Q0,47 7,38L9,40Q0,52-9,40Z','#fff',L,1.2)
  // embroidered yoke: band of diamonds
  c.save();p(c,`M-7,38Q-26,40-36,52L-40,${H}L40,${H}L36,52Q26,40 7,38Z`);c.clip()
  F('M-36,52Q-22,44-9,41Q0,54 9,41Q22,44 36,52L37,60Q22,52 10,50Q0,64-10,50Q-22,52-37,60Z','#d91023','#8e0a17',1)
  for(let k=-4;k<=4;k++){
    const x=k*8,y=50+Math.abs(k)*.2+(k==0?6:Math.abs(k)<2?1:0)+(Math.abs(k)>2?-1:0)
    F(`M${x},${y-3}L${x+3},${y}L${x},${y+3}L${x-3},${y}Z`,'#f2b632')
    E(x+4,y,1,1,'#fff')
  }
  c.restore()
  F('M-7,38Q0,47 7,38',0,L,1.4)
  // face
  F('M-24,-12L-23,4Q-21,16-8,26Q0,31 8,26Q21,16 23,4L24,-12C24,-40-24,-40-24,-12Z',K,L)
  // shadow under bangs
  c.save();p(c,'M-24,-12L-23,4Q-21,16-8,26Q0,31 8,26Q21,16 23,4L24,-12C24,-40-24,-40-24,-12Z');c.clip()
  c.translate(0,2);F(bang([29,12],[-29,12],[[20,-1],[9,-3],[-1,-5],[-11,-2],[-21,0]])+'L-40,-60L40,-60Z',KS);c.restore()
  // eyes
  const bl=i==11||i==12
  for(const s of[-1,1]){
    c.save();c.scale(s,1)
    if(bl)F('M4,6Q13,11 22,5',0,HL,2.4)
    else{
      const ey='M4,4C6,-1 12,-3 17.5,-2.5C21,-2 22,2 21.5,5C21,9 18,13 12.5,13.5C7,13.5 4.5,10 4,4Z'
      F(ey,'#fff')
      c.save();p(c,ey);c.clip()
      E(12.6,6,6.8,8.6,'#8a4a22');E(12.6,2,6.8,5.4,'#4a220e');E(12.6,6,2.9,4.2,'#22100a')
      E(12.6,12.2,4.6,2.6,'#d89a5a');c.restore()
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
  // front hair: dome + swept bangs
  F(bang([29,12],[-29,12],[[20,-1],[9,-3],[-1,-5],[-11,-2],[-21,0]])+'C-36,-12-33,-45 0,-46C33,-45 36,-12 29,12Z',h,HL)
  F('M-19,-33Q0,-42 19,-33L17,-29L13,-32L9,-28.5L5,-32L1,-28.5L-3,-32L-7,-28.5L-11,-32L-15,-29Z',hl)
  F('M-4,-42Q-9,-26-11,-15M9,-41Q11,-26 12,-16M-16,-36Q-22,-22-22,-12',0,HL,1)
  // side locks, tips flick right in the wind
  F(`M-24,-8Q-31,10-27,${33+w(1)}Q-24,20-20,4Z`,h,HL,1.2)
  F(`M24,-8Q31,10 ${31+w(2)*2},${31+w(1)}Q26,20 20,4Z`,h,HL,1.2)
  // cantuta flowers: drooping magenta tubes behind the right ear
  c.save();c.translate(23,-24);c.rotate(w(1)*.06)
  F('M0,0Q-8,-6-13,-1Q-6,3 0,0ZM0,0Q4,-9 11,-9Q7,-2 0,0Z','#3f8a3a','#1f4a1c',1)
  for(const[a,l]of[[-.2,1],[.35,.9],[.85,.8]]){
    c.save();c.rotate(a);c.scale(l,l)
    F('M-1.6,0Q-3,9-2.6,16L2.6,16Q3,9 1.6,0Z','#d81b60','#6d0a2a',1)
    F('M-2.6,16Q-7,18-6,21Q-3,20-1.5,19Q0,22 1.5,19Q3,20 6,21Q7,18 2.6,16Z','#ff4f8b','#6d0a2a',1)
    F('M-.8,19L-1.2,23M.8,19L1.2,23',0,'#ffd54a',.9)
    c.restore()
  }
  c.restore()
  // waving hand
  F(`M-36,31L-26,31L-25,${H}L-45,${H}Z`,'#fff',L,1.4)
  F('M-36,31L-26,31L-26.3,35L-36.3,35Z','#d91023',L,1.2)
  c.save();c.translate(-31,31);c.rotate(-.12+.24*Math.sin(2*T))
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
  c.fillStyle='#c9ced6';c.beginPath();c.rect(9,28,7,222);c.fill();c.stroke()
  c.fillStyle='#eef1f5';c.fillRect(10.5,29,2,220)
  c.fillStyle='#f2b632';c.beginPath();c.arc(12.5,24,6,0,2*P);c.fill();c.stroke()
  c.fillStyle='#fff2b0';c.beginPath();c.arc(10.5,22,2,0,2*P);c.fill()
}
