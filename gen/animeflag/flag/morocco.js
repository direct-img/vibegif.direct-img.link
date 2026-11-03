// Morocco's flag waving on a silver pole: red field with the green interlaced pentagram in the centre, and a smiling anime girl printed on the fly side clear of the star, wavy dark hair blowing out in the wind, pink Damask rose in her hair, emerald top with gold trim, blinking while rose petals drift off the flag's edge
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
  const X=16,Y=36,W=232,H=155,A=5,T=2*P*t,S=256
  const F=(d,f,s,w=1.6)=>{p(c,d);if(f)c.fillStyle=f,c.fill();if(s)c.strokeStyle=s,c.lineWidth=w,c.stroke()}
  const E=(x,y,rx,ry,f,r=0)=>{c.beginPath();c.ellipse(x,y,rx,ry,r,0,2*P);c.fillStyle=f;c.fill()}
  const w=v=>Math.sin(T+v)
  // flat flag: red field, green pentagram
  c.fillStyle='#c1272d';c.fillRect(X,Y,W,H)
  c.save();c.beginPath()
  for(let k=0;k<5;k++){const a=-P/2+k*4*P/5,R=H*.27;c.lineTo(X+W/2+R*Math.cos(a),Y+H/2+R*Math.sin(a))}
  c.closePath();c.lineJoin='miter';c.miterLimit=9;c.lineWidth=H*.042;c.strokeStyle='#006233';c.stroke();c.restore()
  c.save();c.beginPath();c.rect(X,Y,W,H);c.clip()
  // rose petals drifting from her hair off the fly edge
  for(let k=0;k<3;k++){
    const u=(t+k/3)%1
    c.save();c.translate(X+W*(.86+u*.22),Y+30+k*36+Math.sin(u*2*P*2+k)*6);c.rotate(u*8+k)
    F('M0,-5Q5,0 0,5Q-5,0 0,-5Z','#ffb3c8','#8a1038',1.2);c.restore()
  }
  c.translate(X+W*.856,Y+59);c.scale(.84,.84);c.rotate(w(0)*.03)
  const L='#3b2019',K='#ecba90',KS='#d4936f',h='#3a2218',hm='#28160f',hl='#7a5240',HL='#170c08',HH=H/.84
  // wavy back hair blowing right
  const a=w(0)*2.5,b=w(-1)*2.5,g=w(-2)*2.5
  F(`M-28,-16C-38,0-40,22-36,40Q-42,52-38,64Q-44,76-40,${HH}L46,${HH}Q48,84 ${58+g},${76+a}Q48,70 47,62Q54,54 ${64+a},${52+b}Q52,44 46,36Q52,26 ${62+b},${22+g}Q46,16 38,6Q38,-6 28,-16Z`,hm,HL)
  F(`M40,40Q50,46 ${60+a},${50+b}M42,68Q50,72 ${56+g},${74+a}M-34,46Q-38,58-34,66`,0,hl,1)
  // neck + emerald top
  F('M-6.5,18L-6.5,42L6.5,42L6.5,18Z',K,L)
  F('M-6.5,26Q0,35 6.5,26L6.5,32Q0,39-6.5,32Z',KS)
  const bd=`M-8,38Q-28,40-37,52L-41,${HH}L41,${HH}L37,52Q28,40 8,38Z`
  F(bd,'#0f7a4a',L)
  c.save();p(c,bd);c.clip()
  F(`M-9,38Q0,50 9,38L1.8,${HH}L-1.8,${HH}Z`,'#e8b130','#7a5a10',1)
  F(`M-9,38Q0,50 9,38`,0,'#e8b130',3)
  for(let k=0;k<5;k++)E(0,54+k*7,1.6,1.6,'#fff2b0')
  F(`M-26,58Q-28,72-27,${HH}M26,58Q28,72 27,${HH}`,0,'#0a5a36',1.4)
  c.restore()
  F('M-7,38Q0,46 7,38',0,L,1.4)
  // face
  const fc='M-24,-12L-23,4Q-21,16-8,26Q0,31 8,26Q21,16 23,4L24,-12C24,-40-24,-40-24,-12Z',bg=[[21,-1],[13,-3],[6,-5],[-3,-5,-17],[-12,-3],[-21,-1]]
  F(fc,K,L)
  c.save();p(c,fc);c.clip()
  c.translate(0,2);F(bang([29,12],[-29,12],bg)+'L-40,-60L40,-60Z',KS);c.restore()
  const bl=i==8||i==9
  for(const s of[-1,1]){
    c.save();c.scale(s,1)
    if(bl)F('M4,6Q13,11 22,5',0,HL,2.4)
    else{
      const ey='M4,4C6,-1 12,-3 17.5,-2.5C21,-2 22,2 21.5,5C21,9 18,13 12.5,13.5C7,13.5 4.5,10 4,4Z'
      F(ey,'#fff')
      c.save();p(c,ey);c.clip()
      E(12.6,6,6.8,8.6,'#7a5a26');E(12.6,2,6.8,5.4,'#3a2a10');E(12.6,6,2.9,4.2,'#1c1206')
      E(12.6,12.2,4.6,2.6,'#c2a556');c.restore()
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
  F(`M-24,-8Q-33,8-28,22Q-34,34-28,${46+w(1)}Q-24,30-22,20Q-24,10-20,4Z`,h,HL,1.2)
  F(`M24,-8Q33,8 30,20Q36,30 ${34+w(2)*2},${42+w(1)}Q28,30 25,20Q26,10 20,4Z`,h,HL,1.2)
  // damask rose over the right ear
  c.save();c.translate(25,-20);c.rotate(w(1)*.06)
  F('M-2,5Q-12,10-15,4Q-8,0-2,5ZM4,4Q8,10 12,8Q9,2 4,4Z','#3f8a3a','#1f4a1c',1)
  F('M-7,-1Q-8,-8 0,-9Q8,-8 7,-1Q7,6 0,7Q-7,6-7,-1Z','#f06292','#880e4f',1.2)
  F('M-3,-2Q0,-6 3,-2Q4,2 0,3Q-4,2-3,-2M-5,1Q-4,5 0,5.5Q4,5 5,1',0,'#ad1457',1)
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
