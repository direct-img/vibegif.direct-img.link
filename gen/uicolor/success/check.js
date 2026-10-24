// green badge pops in, a white check mark draws itself, a burst of colorful rays and sparkles goes off, then it shrinks away
const{sin,cos,PI,min,max,hypot}=Math,T=2*PI
export const frames=24,delay=60
const GR='#51cf66',GD='#37b24d',CF=['#ffd43b','#ff6b6b','#4dabf7','#f783ac']
const back=u=>{const s=2;return 1+(s+1)*(u-1)**3+s*(u-1)**2}
const P=[[90,132],[116,158],[168,100]],L=hypot(26,26)+hypot(52,58)
const sp=(c,x,y,s)=>{c.lineWidth=4;c.fillStyle='#fff';c.beginPath();c.moveTo(x,y-s);for(const[px,py,qx,qy]of[[s,0,s*.18,-s*.18],[0,s,s*.18,s*.18],[-s,0,-s*.18,s*.18],[0,-s,-s*.18,-s*.18]])c.quadraticCurveTo(x+qx,y+qy,x+px,y+py);c.fill();c.stroke()}
export default(c,t)=>{
  const s=t<.15?back(t/.15):t>.85?1-((t-.85)/.15)**2:1,p=min(1,max(0,(t-.15)/.25)),b=(t-.38)/.32
  if(b>0&&b<1){
    for(let k=0;k<8;k++){
      const a=k*T/8+PI/8,r1=88+30*b,r2=r1+22*(1-b)
      for(const[w,st]of[[13,'#111'],[6,CF[k%4]]])c.lineWidth=w,c.strokeStyle=st,c.beginPath(),c.moveTo(128+cos(a)*r1,128+sin(a)*r1),c.lineTo(128+cos(a)*r2,128+sin(a)*r2),c.stroke()
    }
    c.strokeStyle='#111'
    for(let k=0;k<4;k++){const a=k*T/4-PI/2,r=92+16*b;sp(c,128+cos(a)*r,128+sin(a)*r,14*sin(PI*b))}
  }
  c.strokeStyle='#111'
  if(s<=.01)return
  c.translate(128,128);c.scale(s,s);c.translate(-128,-128);c.lineWidth=7/s
  c.fillStyle=GR;c.beginPath();c.arc(128,128,76,0,T);c.fill();c.stroke()
  c.strokeStyle=GD;c.lineWidth=6;c.beginPath();c.arc(128,128,62,0,T);c.stroke()
  c.strokeStyle='#fff';c.beginPath();c.arc(128,128,66,PI*1.1,PI*1.38);c.stroke()
  if(p>0)for(const[w,st]of[[28,'#111'],[16,'#fff']]){c.lineWidth=w;c.strokeStyle=st;c.setLineDash([L*p,999]);c.beginPath();for(const[x,y]of P)c.lineTo(x,y);c.stroke()}
}
