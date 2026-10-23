// three-headed hydra: the heads bob out of step on long necks, each flicks its forked tongue in turn, the tail tip sways
const{sin,PI}=Math,T=2*PI
export const frames=24,delay=80,rim=3
export default(c,t)=>{
  const ts=6*sin(T*t)
  c.fillStyle=c.strokeStyle='#111';c.lineWidth=6
  c.beginPath();c.moveTo(48,222);c.bezierCurveTo(52,168,196,164,204,222);c.closePath();c.fill();c.stroke()
  c.beginPath();c.moveTo(192,196);c.quadraticCurveTo(222,200,234,178+ts);c.quadraticCurveTo(240,220,196,218);c.closePath();c.fill();c.stroke()
  for(const[i,[bx,by,X,Y,d]]of[[100,190,78,100,-1],[128,186,130,64,1],[156,190,180,100,1]].entries()){
    const ph=i*2.1,hx=X+5*sin(T*t+ph),hy=Y+9*sin(T*t+ph),q=((t-i/3)%1+1)%1,s=q<.2?sin(PI*q/.2):0
    c.lineWidth=20;c.beginPath();c.moveTo(bx,by);c.bezierCurveTo(bx+(hx-bx)*.1,by-60,hx-d*24,hy+40,hx-d*6,hy+4);c.stroke()
    c.save();c.translate(hx,hy);c.scale(d,1);c.rotate(-.15+.1*sin(T*t+ph))
    c.lineWidth=6;c.beginPath();c.moveTo(-16,-10);c.quadraticCurveTo(10,-20,30,-6);c.quadraticCurveTo(36,0,30,6);c.quadraticCurveTo(10,16,-16,10);c.closePath();c.fill();c.stroke()
    c.beginPath();c.moveTo(-12,-10);c.lineTo(-26,-22);c.lineTo(-4,-14);c.closePath();c.fill();c.stroke()
    if(s)c.lineWidth=3.5,c.beginPath(),c.moveTo(32,2),c.lineTo(32+12*s,2),c.lineTo(38+12*s,-2*s),c.moveTo(32+12*s,2),c.lineTo(38+12*s,6*s),c.stroke()
    c.fillStyle='#fff';c.beginPath();c.arc(8,-6,3.8,0,T);c.fill();c.fillStyle='#111'
    c.restore()
  }
}
