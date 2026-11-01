// clockwork brass mechanical bird flying in place, riveted wings of metal feathers beating up and down, copper and steel gears turning behind a round window in its chest, glowing amber lens eye
export const frames=16,delay=55
const T=Math.PI*2
const BR='#d9a54a',BD='#a8752e',BL='#f3d38a',CU='#c8743a',ST='#b9c3cd'
const gear=(c,x,y,r,n,a,f)=>{
  c.beginPath()
  for(let k=0;k<n*4;k++){const g=a+k*T/n/4,q=k%4<2?r:r-3.5;c.lineTo(x+Math.cos(g)*q,y+Math.sin(g)*q)}
  c.closePath();c.fillStyle=f;c.fill();c.lineWidth=2.5;c.stroke()
  c.beginPath();c.arc(x,y,r*.35,0,T);c.fillStyle='#3a2a1a';c.fill();c.stroke()
}
export default(c,t)=>{
  const p=t,b=1.57-1.12*Math.cos(T*p),by=4*Math.cos(T*p)
  c.translate(128,130+by);c.scale(.88,.88);c.translate(-120,-108)
  // wing: feathers fanned in a plane that pivots at the shoulder, projected side-on
  const wing=(ox,oy,lt,dk,bk)=>{
    const cb=Math.cos(b),sb=Math.sin(b)
    const tf=(s,q)=>[ox-q*80+sb*s*12,oy-cb*s*88+sb*s*16]
    const P=(s,q)=>{const[x,y]=tf(s,q);return[x,y]}
    c.save();c.lineWidth=4;c.strokeStyle='#111'
    for(let k=5;k>=0;k--){
      const sa=.1+.15*k,ta=sa+.08+.1*k,qt=.86-.1*k,ds=ta-sa,dq=qt-.04,m=Math.hypot(ds,dq),ns=-dq/m*.09,nq=ds/m*.09
      c.beginPath();c.moveTo(...P(sa-ns,.04-nq));c.lineTo(...P(ta-ns*.9,qt-nq*.9))
      c.quadraticCurveTo(...P(ta+ds/m*.16,qt+dq/m*.16),...P(ta+ns*.9,qt+nq*.9));c.lineTo(...P(sa+ns,.04+nq));c.closePath()
      c.fillStyle=k%2?dk:lt;c.fill();c.stroke()
      c.beginPath();c.moveTo(...P(sa+ds*.25,.04+dq*.25));c.lineTo(...P(ta,qt));c.lineWidth=2;c.strokeStyle=bk;c.stroke();c.lineWidth=4;c.strokeStyle='#111'
    }
    // shoulder plate over the feather roots
    c.beginPath();c.moveTo(...P(-.04,0));c.lineTo(...P(.8,-.02));c.quadraticCurveTo(...P(.62,.14),...P(.3,.22));c.quadraticCurveTo(...P(.05,.3),...P(-.04,.2));c.closePath()
    c.fillStyle=dk;c.fill();c.stroke()
    c.fillStyle='#111';for(const s of[.15,.35,.55]){c.beginPath();c.arc(...P(s,.08),1.8,0,T);c.fill()}
    // leading edge spar
    const r0=P(-.02,0),r1=P(.98,-.02)
    for(const[lw,s]of[[11,'#111'],[5,ST]]){c.lineWidth=lw;c.strokeStyle=s;c.beginPath();c.moveTo(...r0);c.lineTo(...r1);c.stroke()}
    c.strokeStyle='#111';c.lineWidth=3;c.fillStyle=CU
    for(const s of[0,.5,.98]){const[x,y]=P(s,0);c.beginPath();c.arc(x,y,4,0,T);c.fill();c.stroke()}
    c.restore()
  }
  wing(140,104,'#9c7a45','#7f5d30','#5a4020')
  // tail fan
  for(const[a,f]of[[.55,CU],[.32,BR],[.1,CU]]){
    const ta=a+.08*Math.sin(T*p+1)
    c.save();c.translate(82,146);c.rotate(Math.PI-ta)
    c.beginPath();c.moveTo(0,-6);c.lineTo(52,-9);c.quadraticCurveTo(62,0,52,9);c.lineTo(0,6);c.closePath()
    c.fillStyle=f;c.fill();c.lineWidth=4;c.stroke()
    c.lineWidth=2;c.beginPath();c.moveTo(6,0);c.lineTo(50,0);c.stroke();c.restore()
  }
  // tucked legs
  c.lineWidth=4
  for(const x of[112,126]){
    for(const[lw,s]of[[8,'#111'],[3,ST]]){c.lineWidth=lw;c.strokeStyle=s;c.beginPath();c.moveTo(x,166);c.lineTo(x-8,182);c.lineTo(x-18,184);c.stroke()}
  }
  c.strokeStyle='#111'
  // body
  const bod=()=>{c.beginPath();c.ellipse(122,140,48,33,-.22,0,T)}
  bod();c.fillStyle=BD;c.fill()
  c.save();bod();c.clip();c.fillStyle=BR;c.beginPath();c.ellipse(116,132,46,29,-.22,0,T);c.fill()
  c.fillStyle=BL;c.beginPath();c.ellipse(112,118,24,7,-.3,0,T);c.fill()
  c.lineWidth=2.5;c.beginPath();c.ellipse(150,134,40,40,0,1.9,3.6);c.stroke();c.restore()
  bod();c.lineWidth=5;c.stroke()
  // head and neck rings
  c.lineWidth=4
  c.beginPath();c.ellipse(153,116,12,16,.6,0,T);c.fillStyle=BD;c.fill();c.stroke()
  c.beginPath();c.arc(168,100,21,0,T);c.fillStyle=BD;c.fill()
  c.save();c.clip();c.fillStyle=BR;c.beginPath();c.arc(165,97,20,0,T);c.fill();c.restore()
  c.beginPath();c.arc(168,100,21,0,T);c.lineWidth=5;c.stroke()
  // beak
  c.beginPath();c.moveTo(184,92);c.lineTo(214,103);c.lineTo(185,106);c.closePath();c.fillStyle=ST;c.fill();c.lineWidth=4;c.stroke()
  c.beginPath();c.moveTo(186,106);c.lineTo(208,105);c.lineTo(185,113);c.closePath();c.fillStyle='#8d99a6';c.fill();c.stroke()
  // lens eye
  c.beginPath();c.arc(172,96,9,0,T);c.fillStyle='#2a1f14';c.fill();c.stroke()
  c.fillStyle='#ff9a2a';c.beginPath();c.arc(173,96,5,0,T);c.fill()
  c.fillStyle='#fff3c4';c.beginPath();c.arc(171,94,2,0,T);c.fill()
  // chest window with gears
  c.beginPath();c.arc(126,148,19,0,T);c.fillStyle='#2a1f14';c.fill()
  c.save();c.clip();c.strokeStyle='#111'
  gear(c,119,152,13,10,T*t*2/10,CU);gear(c,135,138,8.5,6,-T*t*2/6+.3,ST)
  c.restore()
  c.beginPath();c.arc(126,148,19,0,T);c.lineWidth=6;c.strokeStyle='#111';c.stroke()
  c.lineWidth=3;c.strokeStyle=BL;c.beginPath();c.arc(126,148,19,0,T);c.stroke();c.strokeStyle='#111'
  c.fillStyle='#111';for(let k=0;k<8;k++){const g=k*T/8;c.beginPath();c.arc(126+Math.cos(g)*25,148+Math.sin(g)*25,1.6,0,T);c.fill()}
  wing(124,116,BL,BR,BD)
}
