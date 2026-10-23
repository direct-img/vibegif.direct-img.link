// comet with a glowing smiley head bobbing in a small loop, its long striped tail swishing, sparks peeling off
const{sin,cos,PI,max,hypot}=Math,T=2*PI
export const frames=16,delay=80
const L=[['#9775fa',1],['#4dabf7',.74],['#d0ebff',.46]],SC=['#ffd43b','#fff','#faa2c1'],HD='#ffd43b',HALO='#fff3bf',BL='#ff8787'
const spk=(c,x,y,s,f)=>{c.lineWidth=3;c.fillStyle=f;c.beginPath();c.moveTo(x,y-s);for(const[px,py,qx,qy]of[[s,0,s*.2,-s*.2],[0,s,s*.2,s*.2],[-s,0,-s*.2,s*.2],[0,-s,-s*.2,-s*.2]])c.quadraticCurveTo(x+qx,y+qy,x+px,y+py);c.fill();c.stroke()}
export default(c,t)=>{
  const a=t*T,hx=84+8*cos(a),hy=170+6*sin(a),dx=236-hx,dy=24-hy,D=hypot(dx,dy),ux=dx/D,uy=dy/D,nx=-uy,ny=ux,sw=20*sin(a+.6)
  const cen=v=>{const w=1-v,mx=hx+ux*D*.5+nx*sw,my=hy+uy*D*.5+ny*sw;return[w*w*hx+2*v*w*mx+v*v*(hx+ux*D),w*w*hy+2*v*w*my+v*v*(hy+uy*D)]}
  for(const[col,f]of L){
    const A=[],B=[],n=24
    for(let j=0;j<=n;j++){const v=j/n*(.45+.55*f),[x,y]=cen(v),[x1,y1]=cen(v+.01),l=hypot(x1-x,y1-y),w=50*f*(1-v/(.45+.55*f))**.9;A.push([x-(y1-y)/l*w,y+(x1-x)/l*w]);B.unshift([x+(y1-y)/l*w,y-(x1-x)/l*w])}
    c.beginPath();for(const[x,y]of[...A,...B])c.lineTo(x,y);c.closePath();c.fillStyle=col;c.fill();c.lineWidth=f==1?7:3;c.stroke()
  }
  for(let k=0;k<5;k++){const p=(t+k/5)%1,v=.3+.12*k+p*.06,sd=k%2?1:-1,[x,y]=cen(v),o=sd*(40*(1-v)+10+p*26),s=10*sin(PI*p);if(s>1.5)spk(c,x+nx*o,y+ny*o,s,SC[k%3])}
  c.lineWidth=5;c.fillStyle=HALO;c.beginPath();c.arc(hx,hy,42,0,T);c.fill();c.stroke()
  c.lineWidth=7;c.fillStyle=HD;c.beginPath();c.arc(hx,hy,30,0,T);c.fill();c.stroke()
  c.fillStyle='#fff';c.beginPath();c.ellipse(hx+12,hy-14,7,4,-.6,0,T);c.fill()
  c.fillStyle='#111';for(const d of[-1,1])c.beginPath(),c.arc(hx+d*10-2,hy+1,4.5,0,T),c.fill()
  c.fillStyle='#fff';for(const d of[-1,1])c.beginPath(),c.arc(hx+d*10-3,hy-1,1.6,0,T),c.fill()
  c.lineWidth=4;c.beginPath();c.arc(hx-2,hy+8,6,.15*PI,.85*PI);c.stroke()
  c.fillStyle=BL;for(const d of[-1,1])c.beginPath(),c.ellipse(hx+d*19-2,hy+9,5,3,0,0,T),c.fill()
}
