// sprout boings up out of the dirt, opens its leaves, wiggles happily, then ducks back down
const{sin,cos,PI,min,max}=Math,T=2*PI
export const frames=24,delay=70
const back=u=>{const s=1.9;return 1+(s+1)*(u-1)**3+s*(u-1)**2}
export default(c,t)=>{
  const g=t<.3?back(t/.3):t<.8?1:1-((t-.8)/.2)**2,H=112*g
  const o=min(1,max(0,(t-.18)/.22))*(t>.8?1-(t-.8)/.2:1),sw=t>.3&&t<.8?.22*sin((t-.3)/.5*2*T*2):0
  const tx=128+sw*H*.5,ty=214-H
  if(H>2){
    for(const[l,s]of[[16,'#111'],[4,'#fff']])c.lineWidth=l,c.strokeStyle=s,c.beginPath(),c.moveTo(128,226),c.quadraticCurveTo(128,214-H*.5,tx,ty),c.stroke()
    c.lineWidth=7;c.strokeStyle='#111'
    for(const d of[-1,1]){
      c.save();c.translate(tx,ty);c.rotate(d*(.15+1.05*o)+sw);c.scale(.5+.8*g,.5+.8*g)
      c.beginPath();c.moveTo(0,0);c.bezierCurveTo(d*10,-30,d*44,-40,d*40,-16);c.bezierCurveTo(d*38,-4,d*16,4,0,0);c.restore();c.fill();c.stroke()
      c.lineWidth=4;c.save();c.translate(tx,ty);c.rotate(d*(.15+1.05*o)+sw);c.scale(.5+.8*g,.5+.8*g);c.beginPath();c.moveTo(d*4,-4);c.quadraticCurveTo(d*20,-20,d*32,-18);c.restore();c.stroke();c.lineWidth=7
    }
  }
  c.lineWidth=7;c.beginPath();c.ellipse(128,232,76,26,0,PI,T);c.closePath();c.fill();c.stroke()
  c.fillStyle='#111';for(const[x,y]of[[96,224],[112,216],[150,220],[166,226],[132,224]])c.beginPath(),c.arc(x,y,3,0,T),c.fill()
}
