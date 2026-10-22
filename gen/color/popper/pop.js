// party popper wobbles, then bangs out confetti and curly streamers that drift down
const{sin,cos,PI,min,max}=Math,T=2*PI
export const frames=24,delay=70
const STRIPES=['#4dabf7','#ffd43b','#ff6b6b'],CF=['#ff6b6b','#ffd43b','#4dabf7','#69db7c','#b197fc','#f783ac','#ffa94d']
export default(c,t,i)=>{
  const shake=t<.2?(i%2?.06:-.06):0,u=(t-.2)/.7,kick=u>0&&u<.15?-.15*(1-u/.15):0
  if(u>0&&u<1){
    for(let k=0;k<3;k++){
      const a=-PI/4+(k-1)*.45,len=150*min(1,u*2.2),col=CF[k+3]
      for(const[w,s]of[[11,'#111'],[5,col]]){c.lineWidth=w;c.strokeStyle=s;c.beginPath();for(let v=0;v<=1;v+=.04){const d=24+len*v,x=88+cos(a)*d-sin(a)*10*sin(v*14),y=168+sin(a)*d+cos(a)*10*sin(v*14)+u*u*60*v;c.lineTo(x,y)}c.stroke()}
    }
    c.strokeStyle='#111'
    for(let k=0;k<14;k++){
      const a=-PI/4+((k*.37)%1-.5)*1.4,sp=140+(k*53%60),x=88+cos(a)*sp*u+16,y=168+sin(a)*sp*u+190*u*u-16
      if(y>250)continue
      c.save();c.translate(x,y);c.rotate(u*T*(1+k%3));c.fillStyle=CF[k%CF.length];c.lineWidth=3;c.beginPath()
      if(k%3==0)c.rect(-6,-3.5,12,7);else if(k%3==1)c.arc(0,0,5,0,T);else c.moveTo(0,-6),c.lineTo(6,5),c.lineTo(-6,5),c.closePath()
      c.fill();c.stroke();c.restore()
    }
  }
  c.lineWidth=7
  c.translate(60,200);c.rotate(shake+kick);c.translate(-60,-200)
  const cone=()=>{c.beginPath();c.moveTo(34,230);c.lineTo(72,140);c.lineTo(122,190);c.closePath()}
  cone();c.fillStyle='#fff';c.fill()
  c.save();cone();c.clip();STRIPES.forEach((col,k)=>{c.strokeStyle=col;c.lineWidth=14;c.beginPath();c.moveTo(20+k*30,250);c.lineTo(110+k*30,140);c.stroke()});c.restore()
  cone();c.strokeStyle='#111';c.lineWidth=7;c.stroke()
  c.fillStyle='#ffd43b';c.beginPath();c.ellipse(97,165,35,10,PI/4,0,T);c.fill();c.stroke()
}
