// white quadcopter drone hovering in place with blurred spinning rotors and blinking arm lights, its gimbal camera sweeping a cyan scan beam across the ground below
export const frames=24,delay=70
const{PI,sin,cos}=Math,T=PI*2,K=.36
export default(c,t)=>{
  const X=128,Y=82+5*sin(T*t),ro=.05*sin(T*t+1),gx=128+30*sin(T*t-.6),G=226
  // scan beam: dashed cone edges, ground ring, expanding pulses
  const lx=X+2*1.35,ly=Y+47
  c.lineWidth=2;c.strokeStyle='#26c6e6';c.setLineDash([6,5]);c.lineDashOffset=-t*44
  c.beginPath();c.moveTo(lx,ly);c.lineTo(gx-42,G);c.moveTo(lx,ly);c.lineTo(gx+42,G);c.stroke();c.setLineDash([])
  c.lineWidth=3;c.beginPath();c.ellipse(gx,G,42,11,0,0,T);c.stroke()
  c.lineWidth=2
  for(let j=0;j<2;j++){const u=(t*2+j/2)%1;c.beginPath();c.ellipse(gx,G,42*u,11*u,0,0,T);c.stroke()}
  c.beginPath();c.moveTo(gx+42*sin(T*t*2),G-10.5*cos(T*t*2));c.lineTo(gx+42*sin(T*t*2),G+10.5*cos(T*t*2));c.stroke()
  c.strokeStyle='#111'
  c.translate(X,Y);c.rotate(ro);c.scale(1.35,1.35)
  const pt=(a,r,z=0)=>[cos(a)*r,sin(a)*r*K-z]
  const arms=[PI*1.25,PI*1.75,PI*.75,PI*.25]
  const rotor=(a,k)=>{
    const[x,y]=pt(a,72,14)
    // disc, blur smears and hub
    c.fillStyle='rgba(205,220,235,.55)';c.lineWidth=2;c.strokeStyle='#8795a4'
    c.beginPath();c.ellipse(x,y,32,32*K,0,0,T);c.fill();c.stroke()
    c.lineCap='round';c.strokeStyle='#4a5560'
    for(let s=0;s<3;s++){
      const b=(k%2?1:-1)*T*t*4+s*T/3+k
      c.lineWidth=3.5;c.beginPath();c.ellipse(x,y,28,28*K,0,b,b+.55);c.stroke()
      c.lineWidth=2;c.beginPath();c.ellipse(x,y,17,17*K,0,b-.15,b+.35);c.stroke()
    }
    c.strokeStyle='#111';c.fillStyle='#2c3138';c.lineWidth=2.5;c.beginPath();c.ellipse(x,y,5,5*K+1,0,0,T);c.fill();c.stroke()
  }
  const arm=(a,k)=>{
    const[x,y]=pt(a,72),[bx,by]=pt(a,24)
    c.lineWidth=11;c.beginPath();c.moveTo(bx,by);c.lineTo(x,y);c.stroke()
    c.strokeStyle='#e9edf1';c.lineWidth=5;c.stroke();c.strokeStyle='#111'
    // motor pod
    c.fillStyle='#3a414a';c.lineWidth=3;c.beginPath();c.moveTo(x-8,y);c.lineTo(x-8,y-12);c.lineTo(x+8,y-12);c.lineTo(x+8,y);c.ellipse(x,y,8,8*K,0,0,PI);c.closePath();c.fill();c.stroke()
    c.fillStyle='#59626d';c.beginPath();c.ellipse(x,y-12,8,8*K,0,0,T);c.fill();c.stroke()
    // nav light under the arm tip: front green, back red, blinking out of step
    const on=((t*4+k*.5)%1)<.5
    c.fillStyle=k<2?(on?'#ff3b30':'#7a1f1a'):(on?'#3dff7a':'#1d6b38')
    c.lineWidth=2;c.beginPath();c.arc(x,y+6,3.5,0,T);c.fill();c.stroke()
  }
  // back arms and rotors first
  for(const k of[0,1])arm(arms[k],k),rotor(arms[k],k)
  // landing skids
  c.lineWidth=4
  for(const d of[-1,1]){c.beginPath();c.moveTo(d*14,8);c.lineTo(d*22,32);c.stroke()
    c.beginPath();c.moveTo(d*26-10,30);c.lineTo(d*18+12,36);c.stroke()}
  // body shell
  c.fillStyle='#c9d1da';c.lineWidth=4;c.beginPath();c.ellipse(0,8,32,15,0,0,T);c.fill();c.stroke()
  c.fillStyle='#c9d1da';c.fillRect(-30,-2,60,10)
  c.beginPath();c.moveTo(-32,8);c.lineTo(-32,-2);c.moveTo(32,8);c.lineTo(32,-2);c.stroke()
  const g=c.createLinearGradient(-20,-20,20,10);g.addColorStop(0,'#ffffff');g.addColorStop(1,'#dfe5eb')
  c.fillStyle=g;c.beginPath();c.ellipse(0,-2,32,15,0,0,T);c.fill();c.stroke()
  c.fillStyle='#ff7a2f';c.lineWidth=2.5;c.beginPath();c.ellipse(0,-6,14,6,0,0,T);c.fill();c.stroke()
  c.fillStyle='#1d2a33';c.lineWidth=2.5;c.beginPath();c.ellipse(0,9,18,4.5,0,0,PI);c.lineTo(-18,6);c.ellipse(0,6,18,3,0,PI,0,1);c.closePath();c.fill();c.stroke()
  // gimbal camera
  c.lineWidth=3;c.fillStyle='#3a414a';c.fillRect(-3,20,6,8);c.strokeRect(-3,20,6,8)
  c.fillStyle='#e9edf1';c.beginPath();c.arc(2,33,9,0,T);c.fill();c.stroke()
  c.fillStyle='#14303a';c.beginPath();c.arc(2+(gx-128)*.06,35,4.5,0,T);c.fill();c.lineWidth=2;c.stroke()
  c.fillStyle='#7ff0ff';c.beginPath();c.arc(2+(gx-128)*.06-1,34,1.6,0,T);c.fill()
  // front arms and rotors
  for(const k of[2,3])arm(arms[k],k),rotor(arms[k],k)
}
