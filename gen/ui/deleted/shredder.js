// a sheet of paper pops up and feeds into a chomping shredder, and thin wavy strips stream out the bottom into the bin
const{sin,cos,PI,min,max}=Math,T=2*PI
export const frames=24,delay=70
const back=u=>(u=min(1,max(0,u)),1+2.7*(u-1)**3+1.7*(u-1)**2)
export default(c,t,i)=>{
  const H=84,s=back(t/.16),f=t<.2?0:min(210,(t-.2)/.58*210),go=t>.2&&t<.8,j=go?(i%2?2:-2):0
  if(f<H){
    c.save();c.beginPath();c.rect(0,0,256,100);c.clip()
    c.translate(128,54+f);c.scale(s,s);c.translate(-128,-54)
    c.beginPath();c.rect(80,12,96,H);c.fill();c.stroke()
    c.lineWidth=5;for(const[y,w]of[[30,60],[46,48],[62,60],[78,36]])c.beginPath(),c.moveTo(96,y),c.lineTo(96+w,y),c.stroke()
    c.restore()
  }
  c.save();c.beginPath();c.rect(0,146,256,70);c.clip();c.lineWidth=4
  for(let k=0;k<6;k++){
    const x=81+k*16,y0=96-H+f,y1=96+f,w=y=>2*sin(y*.1+k*2.1-T*t*3)
    if(y1<146||y0>216)continue
    c.beginPath();for(let y=max(y0,142);y<=min(y1,218);y+=4)c.lineTo(x+w(y),y);for(let y=min(y1,218);y>=max(y0,142);y-=4)c.lineTo(x+12+w(y),y);c.closePath();c.fill();c.stroke()
  }
  c.restore();c.lineWidth=5
  for(const[x,a]of[[86,-.6],[116,.3],[146,-.25],[172,.5]])c.save(),c.translate(x,216),c.rotate(a),c.beginPath(),c.roundRect(-5,-16,10,20,4),c.fill(),c.stroke(),c.restore()
  c.lineWidth=7
  c.beginPath();c.moveTo(48,208);c.lineTo(208,208);c.lineTo(196,244);c.lineTo(60,244);c.closePath();c.fill();c.stroke()
  c.lineWidth=5;for(const x of[96,128,160])c.beginPath(),c.moveTo(x,218),c.lineTo(x,234),c.stroke()
  c.translate(j,0);c.lineWidth=7
  c.beginPath();c.roundRect(22,96,212,56,18);c.fill();c.stroke()
  c.lineWidth=8;c.beginPath();c.moveTo(66,106);c.lineTo(190,106);c.stroke()
  c.fillStyle='#111'
  if(go){c.lineWidth=5;for(const d of[-1,1])c.beginPath(),c.moveTo(128+d*36,120),c.lineTo(128+d*26,126),c.lineTo(128+d*36,132),c.stroke()
    c.beginPath();c.ellipse(128,138,9,i%2?7:3,0,0,T);c.fill()}
  else{for(const d of[-1,1])c.beginPath(),c.arc(128+d*28,124,6,0,T),c.fill();c.lineWidth=5;c.beginPath();c.arc(128,132,9,PI*.15,PI*.85);c.stroke()}
}
