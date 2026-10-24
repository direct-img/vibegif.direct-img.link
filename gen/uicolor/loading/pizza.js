// pizza progress circle: slices pop onto the plate one by one clockwise until the pie is whole and smiling with sparkles, then all the slices shrink away to load again
const{sin,cos,PI,min,max}=Math,T=2*PI
export const frames=24,delay=80
const CR='#e8a15a',CH='#ffd43b',PP='#fa5252',PR='#a5d8ff',X=128,Y=128,R=92
const ss=x=>x<=0?0:x>=1?1:x*x*(3-2*x)
const back=p=>p<=0?0:p>=1?1:1+2.7*(p-1)**3+1.7*(p-1)**2
export default(c,t)=>{
  const out=1-ss((t-.86)/.1)
  c.fillStyle=PR;c.beginPath();c.arc(X,Y,112,0,T);c.fill();c.stroke()
  c.fillStyle='#fff';c.beginPath();c.arc(X,Y,100,0,T);c.fill();c.lineWidth=4;c.stroke()
  c.strokeStyle='#ced4da';c.lineWidth=4;c.setLineDash([6,8]);for(let k=0;k<8;k++){const a=-PI/2+k*PI/4;c.beginPath();c.moveTo(X+cos(a)*14,Y+sin(a)*14);c.lineTo(X+cos(a)*R,Y+sin(a)*R);c.stroke()}
  c.beginPath();c.arc(X,Y,R-2,0,T);c.stroke();c.setLineDash([]);c.strokeStyle='#111'
  for(let k=0;k<8;k++){
    const s=back((t-k/12)/.08)*out;if(s<.02)continue
    const a0=-PI/2+k*PI/4,a1=a0+PI/4,m=(a0+a1)/2,cx=X+cos(m)*(48+3),cy=Y+sin(m)*(48+3)
    c.save();c.translate(cx,cy);c.scale(s,s);c.translate(-cx,-cy);c.translate(cos(m)*3,sin(m)*3)
    c.lineWidth=6;c.fillStyle=CR;c.beginPath();c.moveTo(X,Y);c.arc(X,Y,R,a0,a1);c.closePath();c.fill();c.stroke()
    c.fillStyle=CH;c.beginPath();c.moveTo(X,Y);c.arc(X,Y,R-16,a0+.03,a1-.03);c.closePath();c.fill()
    c.lineWidth=4;c.fillStyle=PP;for(const[r,o]of[[62,-.13],[40,.12]]){const a=m+o;c.beginPath();c.arc(X+cos(a)*r,Y+sin(a)*r,8,0,T);c.fill();c.stroke()}
    c.restore()
  }
  const f=t>.72&&t<.86
  if(f){c.fillStyle=CH;c.beginPath();c.arc(X,Y,27,0,T);c.fill()
    c.fillStyle='#111';for(const d of[-1,1])c.beginPath(),c.arc(X+d*11,Y-4,5,0,T),c.fill()
    c.fillStyle='#fff';for(const d of[-1,1])c.beginPath(),c.arc(X+d*11-1.6,Y-5.6,1.8,0,T),c.fill()
    c.lineWidth=4;c.beginPath();c.arc(X,Y+3,7,.15*PI,.85*PI);c.stroke()
    c.fillStyle='#ff8787';for(const d of[-1,1])c.beginPath(),c.ellipse(X+d*19,Y+5,5,3,0,0,T),c.fill()}
  if(t>.68&&t<.9)for(const[x,y,o]of[[26,30,0],[230,30,.3],[22,66,.45],[234,66,.15]]){const q=(t-.68)/.22*1.5-o,z=12*sin(PI*min(1,max(0,q)));if(z>1.5){c.lineWidth=4;c.fillStyle='#fff';c.beginPath();c.moveTo(x,y-z);for(const[px,py,qx,qy]of[[z,0,z*.2,-z*.2],[0,z,z*.2,z*.2],[-z,0,-z*.2,z*.2],[0,-z,-z*.2,-z*.2]])c.quadraticCurveTo(x+qx,y+qy,x+px,y+py);c.fill();c.stroke()}}
}
