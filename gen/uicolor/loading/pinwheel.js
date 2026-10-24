// four-color paper pinwheel whirling round on its stick in the breeze, little wind swooshes blowing past
const{sin,cos,PI}=Math,T=2*PI
export const frames=16,delay=60
const C=['#ff6b6b','#ffd43b','#4dabf7','#69db7c'],L=['#ffa8a8','#fff3bf','#a5d8ff','#b2f2bb'],X=128,Y=106,R=88,BL='#ffa8a8'
const p=(a,r)=>[cos(a)*r,sin(a)*r]
export default(c,t)=>{
  for(const[y,o,w]of[[178,0,50],[206,.5,58]]){const q=(t+o)%1,x=16+q*40,a=sin(PI*q)
    if(a>.15)for(const[lw,st]of[[11,'#111'],[5,'#fff']]){c.lineWidth=lw;c.strokeStyle=st;c.beginPath();c.moveTo(x,y);c.quadraticCurveTo(x+w*a*.5,y-6*a,x+w*a,y);c.stroke()}}
  c.strokeStyle='#111'
  for(const[w,s]of[[22,'#111'],[10,'#e8a15a']])c.lineWidth=w,c.strokeStyle=s,c.beginPath(),c.moveTo(X,Y),c.lineTo(X,240),c.stroke()
  c.strokeStyle='#111';c.lineWidth=7
  c.save();c.translate(X,Y);const rot=-t*T
  for(let k=0;k<4;k++){const a=rot+k*PI/2
    c.fillStyle=C[k];c.beginPath();c.moveTo(0,0);c.lineTo(...p(a,R));c.quadraticCurveTo(...p(a+1.2,R*1.02),...p(a+PI/2,R*.4));c.closePath();c.fill();c.stroke()
    c.fillStyle=L[k];c.lineWidth=5;c.beginPath();c.moveTo(0,0);c.lineTo(...p(a,R-6));c.quadraticCurveTo(...p(a+.55,R*.62),...p(a+.85,R*.26));c.closePath();c.fill();c.stroke();c.lineWidth=7}
  c.restore()
  c.fillStyle='#fff';c.beginPath();c.arc(X,Y,20,0,T);c.fill();c.stroke()
  c.fillStyle='#111';for(const d of[-1,1])c.beginPath(),c.arc(X+d*7,Y-2,3.5,0,T),c.fill()
  c.lineWidth=3.5;c.beginPath();c.arc(X,Y+3,4.5,.15*PI,.85*PI);c.stroke()
  c.fillStyle=BL;for(const d of[-1,1])c.beginPath(),c.ellipse(X+d*12,Y+5,3.5,2.2,0,0,T),c.fill()
}
