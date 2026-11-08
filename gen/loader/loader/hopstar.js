// chunky orange six-arm asterisk with a dark brown outline hops on the spot, squashing down, stretching up and turning a sixth of a turn in the air, over a soft brown shadow that shrinks as it rises
const{sin,cos,PI,min,max}=Math,T=2*PI
export const frames=36,delay=30
const G=208,Rc=60,H=62,
  cl=x=>min(1,max(0,x)),
  ss=x=>x*x*(3-2*x),
  io=x=>(1-cos(PI*x))/2,
  // squash keys [t, amount]: + squash, - stretch
  K=[[0,0],[.16,.3],[.23,-.2],[.4,0],[.62,-.1],[.7,0],[.75,.3],[.84,-.1],[.92,.04],[1,0]],
  sq=t=>{let k=0;while(K[k+1][0]<t)k++;const[a,p]=K[k],[b,q]=K[k+1];return p+(q-p)*ss((t-a)/(b-a))}
export default(c,t)=>{
  const u=cl((t-.2)/.5),y=H*4*u*(1-u),q=sq(t),rot=T/6*io(u),f=1-y/H
  c.fillStyle='#b08670',c.beginPath()
  c.ellipse(128,G+8,44*(.55+.45*f)*(1+q*.4),9*(.6+.4*f),0,0,T),c.fill()
  c.translate(128,G-y),c.scale(1+q*.8,1-q),c.translate(0,-Rc),c.rotate(rot)
  const arms=()=>{
    c.beginPath()
    for(let j=0;j<6;j++){const a=j*T/6-PI/2;c.moveTo(0,0),c.lineTo(44*cos(a),44*sin(a))}
    c.stroke()
  }
  c.lineWidth=40,c.strokeStyle='#5a2614',arms()
  c.lineWidth=27,c.strokeStyle='#e8875f',arms()
}
