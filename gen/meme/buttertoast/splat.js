// buttered toast flipping through the air and landing butter side down with a splat, then just lying there deadpan, every single time
const{sin,cos,PI,abs,min,max}=Math,T=2*PI
export const frames=30,delay=[...Array(29).fill(60),700],rim=4
const CR='#c97a2b',CM='#ffdf9e',BK='#f2bd6b',BU='#ffe14d',FL=206,LY=.38,PF=3*PI+Math.acos(LY),F=.36
// path is built under the squash, stroked after restore so lines stay even
const slice=(c,x,y,r,sx,sy,k)=>{c.save();c.translate(x,y);c.rotate(r);c.scale(sx*k,sy*k);c.beginPath();c.moveTo(-40,46);c.lineTo(-40,-10);c.quadraticCurveTo(-58,-18,-52,-36);c.quadraticCurveTo(-44,-58,0,-56);c.quadraticCurveTo(44,-58,52,-36);c.quadraticCurveTo(58,-18,40,-10);c.lineTo(40,46);c.quadraticCurveTo(40,52,34,52);c.lineTo(-34,52);c.quadraticCurveTo(-40,52,-40,46);c.closePath();c.restore()}
const toast=(c,x,y,cy,r,sx,bl,th=0)=>{
  const back=cy<0,sy=abs(cy)
  if(th){c.fillStyle='#a8611d';c.lineWidth=7;slice(c,x,y+th,r,sx,sy,1);c.fill();c.stroke()}
  c.fillStyle=CR;c.lineWidth=7;slice(c,x,y,r,sx,sy,1);c.fill();c.stroke()
  c.fillStyle=back?BK:CM;slice(c,x,y,r,sx,sy,.8);c.fill()
  c.save();c.translate(x,y);c.rotate(r)
  if(!back){c.save();c.scale(sx,sy);c.beginPath();c.roundRect(-22,-20,44,36,8);c.restore();c.fillStyle=BU;c.lineWidth=5;c.fill();c.stroke()
    c.save();c.scale(sx,sy);c.beginPath();c.roundRect(-14,-12,12,6,3);c.restore();c.fillStyle='#fff';c.fill()}
  else{c.scale(sx,max(.7,sy));c.lineWidth=5
    for(const d of[-1,1])c.beginPath(),bl?(c.moveTo(d*16-8,-8),c.lineTo(d*16+8,-8)):(c.moveTo(d*16-9,-12),c.lineTo(d*16+9,-12),c.moveTo(d*16-5,-11),c.arc(d*16+1,-11,5.5,PI,0,true)),c.stroke()
    c.beginPath();c.moveTo(-9,10);c.lineTo(9,10);c.stroke()}
  c.restore()
}
export default(c,t)=>{
  const fall=min(1,t/F),e=fall*fall,ly=FL-24
  c.fillStyle='#ced4da';c.beginPath();c.ellipse(128,FL+4,26+e*50,5+e*7,0,0,T);c.fill()
  if(t<F){
    const y=64+(ly-64)*e,p=PF*fall,x=128+16*sin(PI*fall)
    if(fall>.15){c.lineWidth=5;for(const d of[-1,0,1])c.beginPath(),c.moveTo(x+d*34,y-70+abs(d)*12),c.lineTo(x+d*34,y-70+abs(d)*12-14-e*26),c.stroke()}
    toast(c,x,y,cos(p),.3*sin(T*fall),1,0)
    return
  }
  const u=(t-F)/(1-F),hit=max(0,1-u*7),sq=1+.16*hit,sp=min(1,u*5),sp2=1-(1-sp)**3
  // butter splat squished out from under
  c.fillStyle=BU;c.lineWidth=5;c.beginPath()
  for(let k=0;k<=40;k++){const a=k/40*T,r=1+.14*sin(a*5+1)+.08*sin(a*9);c.lineTo(128+cos(a)*(44+54*sp2)*r,FL+2+sin(a)*(10+16*sp2)*r)}
  c.closePath();c.fill();c.stroke()
  for(const[x,y,s]of[[26,FL+22,6],[232,FL+16,7],[30,FL-12,5],[224,FL-14,5],[96,FL+36,5],[166,FL+36,4]]){const k=sp2;c.beginPath();c.ellipse(128+(x-128)*k,y,s*k+.5,s*.6*k+.5,0,0,T);c.fill();c.stroke()}
  if(hit>0){c.lineWidth=5;for(const a of[-2.7,-2.2,-.95,-.45])c.beginPath(),c.moveTo(128+cos(a)*72,ly+10+sin(a)*26),c.lineTo(128+cos(a)*(72+36*hit),ly+10+sin(a)*(26+26*hit)),c.stroke()}
  toast(c,128,FL-20+3*hit,-LY/sq,0,1.28*sq,u>.62&&u<.68,9)
}
