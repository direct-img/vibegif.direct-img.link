// fireworks shooting up and bursting into colored sparks, one after another
const{sin,cos,PI,min}=Math,T=2*PI
export const frames=24,delay=70
const F=[[80,70,'#ff6b6b',0,52],[180,90,'#4dabf7',.33,46],[128,52,'#ffd43b',.66,58]]
export default(c,t)=>{
  for(const[x,y,col,o,R]of F){
    const p=(t+o)%1
    if(p<.28){
      const q=p/.28,yy=250-(250-y)*(1-(1-q)**2)
      for(const[w,s]of[[9,'#111'],[4,col]])c.lineWidth=w,c.strokeStyle=s,c.beginPath(),c.moveTo(x,yy),c.lineTo(x,yy+22),c.stroke()
      c.fillStyle='#fff';c.lineWidth=3;c.strokeStyle='#111';c.beginPath();c.arc(x,yy,4,0,T);c.fill();c.stroke()
      continue
    }
    const q=(p-.28)/.72,r=R*(1-(1-q)**2.5),len=min(22,r)*(1-q*.7),fall=q*q*24
    for(let k=0;k<12;k++){
      const a=k*T/12+o*3,x1=x+cos(a)*(r-len),y1=y+sin(a)*(r-len)+fall,x2=x+cos(a)*r,y2=y+sin(a)*r+fall
      if(q<.9)for(const[w,s]of[[9,'#111'],[4,col]])c.lineWidth=w,c.strokeStyle=s,c.beginPath(),c.moveTo(x1,y1),c.lineTo(x2,y2),c.stroke()
      const ds=4*(1-q)+1;c.fillStyle=k%2?col:'#fff';c.lineWidth=3;c.strokeStyle='#111';c.beginPath();c.arc(x2+cos(a)*6,y2+sin(a)*6+fall*.3,ds,0,T);c.fill();c.stroke()
    }
  }
}
