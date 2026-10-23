// anglerfish drifting in the dark: its glowing lure bobs and pulses on the stalk, the jaw opens a little to show its teeth
const{sin,cos,PI,max}=Math,T=2*PI
export const frames=24,delay=80,rim=3
export default(c,t)=>{
  const s=sin(T*t),k=sin(T*t-1.2),o=t>.35&&t<.85?sin(PI*(t-.35)/.5):0,pu=.5+.5*sin(T*t*2)
  const lx=212+8*sin(T*t-1),ly=62+5*cos(T*t-1)
  c.fillStyle=c.strokeStyle='#111';c.lineWidth=6
  c.translate(128,128+6*s);c.rotate(.03*cos(T*t));c.scale(.92,.92);c.translate(-137,-124)
  const shape=(x,y,r,f)=>{c.save();c.translate(x,y);c.rotate(r);c.beginPath();f();c.fill();c.stroke();c.restore()}
  shape(66,140,.18*k,()=>{
    c.moveTo(4,-16);c.quadraticCurveTo(-18,-30,-36,-32);c.quadraticCurveTo(-28,0,-36,32);c.quadraticCurveTo(-18,30,4,16)})
  shape(0,0,0,()=>{
    c.moveTo(66,124);c.bezierCurveTo(80,82,140,70,178,96);c.bezierCurveTo(196,108,204,124,204,136)
    c.bezierCurveTo(206,160,190,186,150,192);c.bezierCurveTo(110,198,76,176,66,156)})
  shape(106,82,-.2+.1*k,()=>{c.moveTo(-14,8);c.lineTo(-2,-16);c.lineTo(14,6)})
  shape(122,188,-.5-.3*sin(T*t*2),()=>c.ellipse(-16,8,18,8,0,0,T))
  c.lineWidth=4;c.beginPath();c.moveTo(156,86);c.quadraticCurveTo(192,22,lx,ly);c.stroke()
  c.beginPath();c.arc(lx,ly,10,0,T);c.fill()
  c.lineWidth=3;for(let i=0;i<8;i++){
    const a=i*PI/4+T*t/8;c.beginPath();c.moveTo(lx+15*cos(a),ly+15*sin(a));c.lineTo(lx+(18+5*pu)*cos(a),ly+(18+5*pu)*sin(a));c.stroke()
  }
  c.fillStyle=c.strokeStyle='#fff'
  c.beginPath();c.arc(lx,ly,3.5+1.5*pu,0,T);c.fill()
  c.beginPath();c.arc(170,118,6,0,T);c.fill()
  // mouth: white rim with teeth, the lower lip drops as the jaw opens
  const q=(a,b,e,u)=>[(1-u)**2*a[0]+2*u*(1-u)*b[0]+u*u*e[0],(1-u)**2*a[1]+2*u*(1-u)*b[1]+u*u*e[1]]
  const M=[150,150],U=[[178,148],[198,136]],L=[[176,156+12*o],[197,140+10*o]]
  c.lineWidth=3.5;c.beginPath();c.moveTo(...M);c.quadraticCurveTo(...U[0],...U[1]);c.lineTo(...L[1]);c.quadraticCurveTo(...L[0],...M);c.closePath();c.stroke()
  for(const[E,u,d]of[[U,.35,1],[U,.6,1],[U,.84,1],[L,.48,-1],[L,.74,-1]]){
    const[x,y]=q(M,...E,u);c.beginPath();c.moveTo(x-3.5,y);c.lineTo(x+3.5,y);c.lineTo(x,y+7*d);c.fill()
  }
}
