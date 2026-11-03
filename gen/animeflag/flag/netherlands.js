// Netherlands flag waving on a silver pole: red-white-blue horizontal bands, with a cheerful anime girl printed across the middle, golden blonde ponytail with an orange bow streaming in the wind, blue eyes, cream sweater with an orange neckerchief, holding up a red tulip that sways as she winks
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
  const X=16,Y=36,W=232,H=155,A=6,T=2*P*t,S=256
  const F=(d,f,s,w=1.6)=>{p(c,d);if(f)c.fillStyle=f,c.fill();if(s)c.strokeStyle=s,c.lineWidth=w,c.stroke()}
  const E=(x,y,rx,ry,f,r=0)=>{c.beginPath();c.ellipse(x,y,rx,ry,r,0,2*P);c.fillStyle=f;c.fill()}
  const w=v=>Math.sin(T+v)
  // flat flag
  c.fillStyle='#ae1c28';c.fillRect(X,Y,W,H/3)
  c.fillStyle='#fff';c.fillRect(X,Y+H/3,W,H/3)
  c.fillStyle='#21468b';c.fillRect(X,Y+H*2/3,W,H/3)
  c.save();c.beginPath();c.rect(X,Y,W,H);c.clip()
  c.translate(X+W*.47,Y+64)
  const L='#5a3328',K='#ffe1cf',KS='#f0b59c',h='#f3c650',hm='#dba63c',hl='#fff3c4',HL='#7a4f12'
  // ponytail streaming right
  const a=w(0)*3,b=w(-1)*4,g=w(-2)*4
  F(`M8,-40C26,-54 46,-44 60,${-36+a}C72,${-30+b} 84,${-30+g} 96,${-24+g}C86,${-18+g} 78,${-18+b} 72,${-17+b}C80,${-12+b} 86,${-6+g} 92,${2+g}C80,${-2+g} 68,${-6+b} 60,${-10+a}C52,-14 40,-18 30,-22C22,-24 16,-26 12,-30Z`,h,HL)
  F(`M24,-38C40,-42 52,-36 62,${-31+a}C70,${-27+b} 78,${-25+g} 86,${-24+g}C76,${-22+b} 66,${-24+a} 56,-28C46,-32 36,-34 24,-38Z`,hl)
  F(`M30,-30C46,-30 58,${-22+a} 70,${-14+b}M44,-39C56,-38 66,${-32+a} 80,${-26+b}`,0,HL,1)
  // back hair
  F('M-27,-14C-35,2-34,18-28,27Q-20,31-12,25L12,25Q20,31 28,27C34,18 35,2 27,-14Z',hm,HL)
  // neck + sweater
  F('M-6.5,18L-6.5,42L6.5,42L6.5,18Z',K,L)
  F('M-6.5,26Q0,35 6.5,26L6.5,32Q0,39-6.5,32Z',KS)
  F(`M-8,38Q-28,40-37,52L-41,${H}L41,${H}L37,52Q28,40 8,38Z`,'#fff4e2',L)
  F(`M-21,58Q-24,80-22,${H}M21,58Q24,80 22,${H}`,0,'#e6d3b5',1.4)
  F('M-8,38Q0,46 8,38L10,41Q0,50-10,41Z','#fff',L,1.2)
  // orange neckerchief
  F('M-11,41Q0,49 11,41L13,46Q0,55-13,46Z','#ff7f11','#8a3c00',1.2)
  F(`M-2,50L-8,${64+w(1)}L-1,${61+w(1)}L0,53ZM2,50L8,${64+w(2)}L1,${61+w(2)}L0,53Z`,'#ff7f11','#8a3c00',1.2)
  E(0,50,3,2.6,'#ff9a3c')
  // face
  const fc='M-24,-12L-23,4Q-21,16-8,26Q0,31 8,26Q21,16 23,4L24,-12C24,-40-24,-40-24,-12Z',bg=[[21,-1],[12,-3],[4,-4],[-5,-4,-17],[-13,-3],[-22,-1]]
  F(fc,K,L)
  c.save();p(c,fc);c.clip()
  c.translate(0,2);F(bang([29,12],[-29,12],bg)+'L-40,-60L40,-60Z',KS);c.restore()
  // eyes, a wink on the right
  for(const s of[-1,1]){
    c.save();c.scale(s,1)
    if(s>0&&(i==10||i==11))F('M4,6Q13,0 22,5',0,HL,2.4),F('M5,4L1,2M5,6L1,7',0,HL,1.2)
    else{
      const ey='M4,4C6,-1 12,-3 17.5,-2.5C21,-2 22,2 21.5,5C21,9 18,13 12.5,13.5C7,13.5 4.5,10 4,4Z'
      F(ey,'#fff')
      c.save();p(c,ey);c.clip()
      E(12.6,6,6.8,8.6,'#3a7ad0');E(12.6,2,6.8,5.4,'#1d3f7a');E(12.6,6,2.9,4.2,'#0f2249')
      E(12.6,12.2,4.6,2.6,'#8fc4f5');c.restore()
      E(10.2,2.4,2.6,2.9,'#fff');E(15.6,9.8,1.2,1.2,'#fff')
      F('M3,4.5C5,-2 12,-5 18,-4C21.5,-3.5 23.5,-1 24.5,2.5L22.5,1.5C21,-.5 18,-1.6 13.5,-1.6C9,-1.6 5.5,1 3,4.5Z','#4a2a10','#4a2a10',1)
      F('M14,13.5Q18.5,13 20.5,10',0,L,.9)
    }
    E(17,15,4.4,2,'rgba(255,105,120,.35)')
    c.restore()
  }
  F('M1,13L0,14.5',0,L,1.1)
  F('M-4.5,18.5Q0,25.5 4.5,18.5Q0,19.5-4.5,18.5Z','#b23a48',L,1.2)
  F('M-2.2,22.4Q0,21 2.2,22.4Q0,24.4-2.2,22.4Z','#f07a86')
  // front hair
  F(bang([29,12],[-29,12],bg)+'C-36,-12-33,-45 0,-46C33,-45 36,-12 29,12Z',h,HL)
  F('M-19,-33Q0,-42 19,-33L17,-29L13,-32L9,-28.5L5,-32L1,-28.5L-3,-32L-7,-28.5L-11,-32L-15,-29Z',hl)
  F('M-4,-42Q-9,-26-11,-15M9,-41Q11,-26 12,-16M-16,-36Q-22,-22-22,-12',0,HL,1)
  F(`M-24,-8Q-31,10-27,${30+w(1)}Q-24,18-20,4Z`,h,HL,1.2)
  F(`M24,-8Q31,10 ${30+w(2)*2},${29+w(1)}Q26,18 20,4Z`,h,HL,1.2)
  // orange bow at the ponytail
  c.save();c.translate(17,-38);c.rotate(-.5+w(.5)*.06)
  F('M0,0Q-9,-10-12,-2Q-11,6 0,0ZM0,0Q9,-10 12,-2Q11,6 0,0Z','#ff7f11','#8a3c00',1.2)
  F('M0,0Q-5,8-4,13L-1,11ZM0,0Q5,8 6,12L2,11Z','#ff9a3c','#8a3c00',1)
  E(0,0,2.6,2.6,'#ff9a3c');c.restore()
  // tulip held up by the left hand
  c.save();c.translate(-30,44);c.rotate(-.12+w(0)*.07);c.scale(1.25,1.25)
  F('M0,0Q-2,-18 0,-34',0,'#2f7d32',2.4)
  F('M0,-8Q-14,-14-13,-30Q-6,-22 0,-14Z','#4caf50','#1f5222',1.1)
  c.translate(0,-34);c.rotate(w(1)*.08)
  F('M-7,-2Q-9,-14-5,-20L-2,-14L0,-21L2,-14L5,-20Q9,-14 7,-2Q0,4-7,-2Z','#e8304a','#7a1020',1.2)
  F('M-2,-1Q-3,-10 0,-17Q3,-10 2,-1Z','#ff6b7a')
  c.restore()
  F(`M-37,51L-24,51L-22,${H}L-45,${H}Z`,'#fff4e2',L,1.4)
  F('M-37,51L-24,51L-24.2,55L-37.2,55Z','#ff7f11','#8a3c00',1.1)
  c.save();c.translate(-30,46)
  F('M-6,-3Q-7,5-1,7Q6,7 6,1Q6,-5 0,-6Q-5,-6-6,-3Z',K,L,1.2)
  F('M-5,-1Q-1,0 4,-2M-5,2.4Q-1,3.4 4.5,1.8',0,KS,.9)
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
