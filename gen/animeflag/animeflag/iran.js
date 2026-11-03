// Iran's flag waving on a silver pole: green-white-red horizontal bands with the red emblem in the centre and the white Kufic takbir bands along the stripe edges, with a smiling anime girl standing in front of its lower edge (clear of the emblem and text), long dark hair with a turquoise hairpin, rose-pink top and turquoise shawl dotted with gold, holding up a pink Persian rose, hair and shawl fluttering in the wind as she blinks
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
  const X=16,Y=12,W=232,H=133,A=6,T=2*P*t,S=256,b3=H/3
  const F=(d,f,s,w=1.6)=>{p(c,d);if(f)c.fillStyle=f,c.fill();if(s)c.strokeStyle=s,c.lineWidth=w,c.stroke()}
  const E=(x,y,rx,ry,f,r=0)=>{c.beginPath();c.ellipse(x,y,rx,ry,r,0,2*P);c.fillStyle=f;c.fill()}
  const w=v=>Math.sin(T+v)
  // flat flag
  c.fillStyle='#239f40';c.fillRect(X,Y,W,b3)
  c.fillStyle='#fff';c.fillRect(X,Y+b3,W,b3)
  c.fillStyle='#da0000';c.fillRect(X,Y+2*b3,W,H-2*b3)
  // takbir: 11 square-Kufic units along each inner stripe edge
  const kb=[[18,0,1,5],[16,0,1,5],[14,0,1,5],[11,4,8,1],[11,2,1,3],[11,2,2,1],[8,0,1,5],[6,0,1,5],[4,0,3,1],[3,3,1,2],[0,4,9,1],[0,3,1,2]]
  c.fillStyle='#fff'
  for(let k=0;k<11;k++)for(const yy of[Math.round(Y+b3)-6,Math.round(Y+2*b3)+1]){
    const x0=Math.round(X+k*W/11+1)
    for(const[a,b,cw,ch]of kb)c.fillRect(x0+a,yy+b,cw,ch)
  }
  // emblem
  c.save();c.translate(X+W/2,Y+H/2);c.scale(.95,.95)
  c.fillStyle='#da0000'
  for(const s of[-1,1]){
    c.save();c.scale(s,1)
    p(c,'M2.5,17C14,12 18,0 12,-12C11,-14 9.5,-16 7.5,-17.5C12,-8 12,4 2.5,13.5Z');c.fill()
    p(c,'M2,10.5C9,6.5 10,-3 6.5,-10.5C8.8,-3 7,4 2,7.5Z');c.fill()
    c.restore()
  }
  p(c,'M-1.3,15L-1.3,-10.5L0,-15L1.3,-10.5L1.3,15ZM-3,15L3,15L1.6,17.5L-1.6,17.5Z');c.fill()
  c.strokeStyle='#da0000';c.lineWidth=1.3;p(c,'M-3.5,-17Q-2.6,-19.6-1.6,-17.2Q-.8,-19.6 0,-17.2Q.8,-19.6 1.6,-17.2Q2.6,-19.6 3.5,-17');c.stroke()
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
  c.fillStyle='#c9ced6';c.beginPath();c.rect(9,16,7,234);c.fill();c.stroke()
  c.fillStyle='#eef1f5';c.fillRect(10.5,17,2,232)
  c.fillStyle='#f2b632';c.beginPath();c.arc(12.5,11,6,0,2*P);c.fill();c.stroke()
  c.fillStyle='#fff2b0';c.beginPath();c.arc(10.5,9,2,0,2*P);c.fill()
  // the girl, standing in front of the flag's lower edge
  c.translate(156,174)
  const L='#3b2019',K='#f0c7a2',KS='#d9a07c',h='#2e1c18',hm='#1f120f',hl='#6e4a40',HL='#140a08',Q='#17a2a6',QD='#0b6d70',G='#f2c14e'
  const a=w(0)*2.5,b=w(-1)*2.5,g=w(-2)*3
  // long back hair streaming right
  F(`M-28,-16C-38,0-38,24-36,44Q-36,60-38,90L46,90Q44,80 ${60+a},${70+b}Q48,64 45,56Q52,48 ${64+b},${42+a}Q50,34 40,24Q40,0 28,-16Z`,hm,HL)
  F(`M36,30Q46,38 ${58+b},${42+a}M40,62Q50,68 ${56+a},${70+b}`,0,hl,1)
  // neck + rose-pink top
  F('M-6.5,18L-6.5,42L6.5,42L6.5,18Z',K,L)
  F('M-6.5,26Q0,35 6.5,26L6.5,32Q0,39-6.5,32Z',KS)
  F('M-8,38Q-28,40-37,52L-41,90L41,90L37,52Q28,40 8,38Z','#e0577a',L)
  F('M-8,38Q0,48 8,38',0,G,2.6)
  F('M-8,38Q0,46 8,38',0,L,1.4)
  // turquoise shawl over the shoulders, its end fluttering right
  F(`M-38,50Q-20,62 0,62Q20,62 38,50Q48,48 ${66+g},${54+a}Q${60+b},${62+a} ${72+a},${72+b}Q56,74 44,68L42,90L-42,90L-40,60Z`,Q,QD,1.4)
  F('M-38,50Q-20,62 0,62Q20,62 38,50',0,G,1.6)
  for(const[x,y]of[[-30,66],[-16,72],[0,74],[16,72],[30,66],[-24,82],[-6,84],[12,84],[28,80],[52,64],[60,70]])E(x,y,1.5,2.3,G,.6)
  // face
  const fc='M-24,-12L-23,4Q-21,16-8,26Q0,31 8,26Q21,16 23,4L24,-12C24,-40-24,-40-24,-12Z',bg=[[21,-1],[12,-3],[4,-4],[-5,-4,-17],[-13,-3],[-22,-1]]
  F(fc,K,L)
  c.save();p(c,fc);c.clip()
  c.translate(0,2);F(bang([29,12],[-29,12],bg)+'L-40,-60L40,-60Z',KS);c.restore()
  const bl=i==12||i==13
  for(const s of[-1,1]){
    c.save();c.scale(s,1)
    if(bl)F('M4,6Q13,11 22,5',0,HL,2.4)
    else{
      const ey='M4,4C6,-1 12,-3 17.5,-2.5C21,-2 22,2 21.5,5C21,9 18,13 12.5,13.5C7,13.5 4.5,10 4,4Z'
      F(ey,'#fff')
      c.save();p(c,ey);c.clip()
      E(12.6,6,6.8,8.6,'#6e4020');E(12.6,2,6.8,5.4,'#3a1e0c');E(12.6,6,2.9,4.2,'#1a0c06')
      E(12.6,12.2,4.6,2.6,'#c78e56');c.restore()
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
  // gold hairpin with turquoise stones
  c.save();c.translate(22,-26);c.rotate(.5)
  F('M-7,0L7,0',0,G,2.4);E(-6,0,2.6,2.6,Q);E(0,0,2.2,2.2,Q);E(6,0,2.6,2.6,Q)
  E(-6.6,-.6,.9,.9,'#bff');E(-.5,-.5,.8,.8,'#bff');E(5.4,-.6,.9,.9,'#bff')
  c.restore()
  // pink Persian rose held up by her cheek
  c.save();c.translate(-31,42);c.rotate(-.1+w(0)*.07)
  F('M0,0Q-2,-14 0,-24',0,'#2f7d32',2.2)
  F('M0,-10Q-11,-12-13,-22Q-5,-19 0,-14Z','#4caf50','#1f5222',1.1)
  c.translate(0,-27);c.rotate(w(1)*.08)
  F('M-7,-1Q-8,-10 0,-11Q8,-10 7,-1Q7,6 0,7Q-7,6-7,-1Z','#f06292','#880e4f',1.2)
  F('M-3,-3Q0,-7 3,-3Q3.6,1 0,1.6Q-3.6,1-3,-3M-5,0Q-4,4 0,4.4Q4,4 5,0',0,'#ad1457',1)
  c.restore()
  F('M-37,50L-24,50L-22,90L-45,90Z','#e0577a',L,1.4)
  F('M-37,50L-24,50L-24.2,54L-37.2,54Z',G,'#8a6a10',1.1)
  c.save();c.translate(-30,45)
  F('M-6,-3Q-7,5-1,7Q6,7 6,1Q6,-5 0,-6Q-5,-6-6,-3Z',K,L,1.2)
  F('M-5,-1Q-1,0 4,-2M-5,2.4Q-1,3.4 4.5,1.8',0,KS,.9)
  c.restore()
}
