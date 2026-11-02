// white cartoon sugar skull wearing a crown of neon flowers that bloom open and closed in a wave, arches of rainbow dots over its eye sockets, star sparkles pulsing inside them, cheek swirls, jaw chattering
export const frames=16,delay=80
const P=Math.PI*2,H=(h,l=58)=>`hsl(${(h%360+360)%360},95%,${l}%)`
export default(c,t)=>{
  const s=t*P,L=(w,k='#111')=>(c.lineWidth=w,c.strokeStyle=k,c.stroke()),F=k=>(c.fillStyle=k,c.fill())
  const bone='#fff4e6',jd=Math.max(0,Math.sin(s*2))*7
  c.translate(0,Math.sin(s*2)*2+4)
  // mandible and lower teeth
  c.beginPath();c.moveTo(90,184);c.quadraticCurveTo(88,226+jd,128,230+jd);c.quadraticCurveTo(168,226+jd,166,184);c.closePath()
  F(bone);L(6)
  c.fillStyle='#1a0b2e';c.fillRect(96,188,64,12+jd)
  c.beginPath();c.moveTo(96,196+jd);c.lineTo(160,196+jd);c.lineTo(158,210+jd);c.quadraticCurveTo(128,214+jd,98,210+jd);c.closePath();F(bone);L(4)
  for(let k=1;k<6;k++){c.beginPath();c.moveTo(96+k*10.7,197+jd);c.lineTo(96+k*10.7,210+jd);L(3)}
  // cranium
  c.beginPath();c.moveTo(128,50)
  c.bezierCurveTo(176,50,206,84,204,124);c.bezierCurveTo(203,150,192,166,182,176)
  c.quadraticCurveTo(172,184,162,186);c.lineTo(162,198);c.lineTo(94,198);c.lineTo(94,186)
  c.quadraticCurveTo(84,184,74,176);c.bezierCurveTo(64,166,53,150,52,124);c.bezierCurveTo(50,84,80,50,128,50)
  F(bone);L(7)
  c.beginPath();c.moveTo(94,184);c.quadraticCurveTo(128,178,162,184);L(4)
  for(let k=1;k<6;k++){c.beginPath();c.moveTo(94+k*11.3,183);c.lineTo(94+k*11.3,198);L(3)}
  // nose
  c.beginPath();c.moveTo(128,174);c.bezierCurveTo(112,166,116,150,128,158);c.bezierCurveTo(140,150,144,166,128,174);F('#1a0b2e');L(4)
  // sockets with rainbow dot rings and pulsing star sparkles
  for(const m of[-1,1]){
    const x=128+m*29,y=134
    for(let k=0;k<7;k++){
      const a=-P/4+m*(k-3)*.36
      c.beginPath();c.arc(x+Math.cos(a)*33,y+Math.sin(a)*31,k%2?3.5:4.5,0,P);F(H(k*50*m-t*720,58));L(2.5)
    }
    c.beginPath();c.ellipse(x,y,23,21,m*.2,0,P);F('#1a0b2e');L(6)
    const R=8+Math.sin(s*2+m)*4
    c.beginPath()
    for(let k=0;k<8;k++){const r=k%2?R*.28:R,a=k*P/8+m*s/4;c.lineTo(x+Math.cos(a)*r,y+Math.sin(a)*r)}
    c.closePath();F(H(t*360+(m>0?140:0),62))
  }
  // cheek curls
  for(const m of[-1,1]){
    c.beginPath()
    for(let a=0;a<9;a+=.3)c.lineTo(128+m*(46+Math.cos(a)*a*1.1),168+Math.sin(a)*a*1.1)
    L(3.5,H(t*-360+(m>0?60:240),55))
  }
  // flower crown, blooming in a wave from left to right
  for(let k=0;k<4;k++){
    const a=(-142+k*35)*P/360
    c.save();c.translate(128+Math.cos(a)*80,128+Math.sin(a)*80);c.rotate(a)
    c.beginPath();c.ellipse(4,0,14,6.5,0,0,P);F('#2fcf6a');L(3);c.restore()
  }
  for(const k of[0,4,1,3,2]){
    const a=(-160+k*35)*P/360,R=[22,26,32,26,22][k],n=[6,8,10,8,6][k]
    const b=.42+.58*(.5-.5*Math.cos(s-k*P/5)),h=k*72+t*360
    c.save();c.translate(128+Math.cos(a)*76,124+Math.sin(a)*76);c.rotate(Math.sin(s-k)*.3)
    for(let p=0;p<n;p++){
      c.rotate(P/n);c.beginPath();c.ellipse(R*b*.55,0,R*b*.55,R*(.15+.2*b),0,0,P);F(H(h+p%2*28,60));L(3)
    }
    c.beginPath();c.arc(0,0,R*.26,0,P);F(H(h+170,55));L(3)
    c.restore()
  }
}
