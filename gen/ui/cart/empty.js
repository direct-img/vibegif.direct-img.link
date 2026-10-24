// empty shopping cart rolling back and forth on its own, wheels spinning, leaving little dust puffs behind its wheels
const{sin,cos,PI,min}=Math,T=2*PI
export const frames=20,delay=80
export default(c,t)=>{
  const D=(f,a=12,b=5)=>{for(const[w,s]of[[a,'#111'],[b,'#fff']])c.lineWidth=w,c.strokeStyle=s,c.beginPath(),f(),c.stroke();c.lineWidth=7;c.strokeStyle='#111'}
  const S=.94,x=140+14*sin(T*t),G=216,a=(x-140)/(15*S)
  D(()=>{c.moveTo(18,G+6);c.lineTo(238,G+6)},11,4)
  c.translate(x,G);c.rotate(.03*sin(T*t));c.scale(S,S);const w=7/S;c.lineWidth=w
  const D2=(f)=>D(f,20/S,7/S)
  D2(()=>{c.moveTo(-52,-78);c.lineTo(-56,-44);c.lineTo(70,-44)})
  D2(()=>{c.moveTo(-64,-140);c.lineTo(-86,-166)})
  c.lineWidth=w;c.beginPath();c.roundRect(-106,-176,32,16,8);c.fill();c.stroke()
  c.beginPath();c.moveTo(-66,-140);c.lineTo(80,-140);c.lineTo(64,-78);c.lineTo(-52,-78);c.closePath();c.fill();c.stroke()
  c.lineWidth=5/S;for(const u of[.25,.5,.75])c.beginPath(),c.moveTo(-66+146*u,-140),c.lineTo(-52+116*u,-78),c.stroke()
  c.beginPath();c.moveTo(-59,-109);c.lineTo(72,-109);c.stroke()
  for(const wx of[-38,54]){
    c.lineWidth=w;c.beginPath();c.arc(wx,-17,15,0,T);c.fill();c.stroke()
    c.lineWidth=4/S;c.beginPath();for(const k of[0,1])c.moveTo(wx+cos(a+k*PI/2)*9,-17+sin(a+k*PI/2)*9),c.lineTo(wx-cos(a+k*PI/2)*9,-17-sin(a+k*PI/2)*9);c.stroke()
  }
  c.setTransform(1,0,0,1,0,0);c.strokeStyle='#111';c.fillStyle='#fff'
  for(const[o,d]of[[0,1],[.5,-1]]){
    const q=((t-o)%1+1)%1/.4,g=sin(PI*min(1,q)),wx=140+(d>0?-44:59)
    if(q<1)for(const[k,r]of[[0,14],[1,10],[2,8]])if(r*g>1)c.lineWidth=5,c.beginPath(),c.arc(wx-d*(k*12+8*q),G-6-(k==1?9:0)-8*q,r*g,0,T),c.fill(),c.stroke()
  }
}
