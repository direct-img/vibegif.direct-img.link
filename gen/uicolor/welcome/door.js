// blue front door swings open toward you, warm golden light pours out with sparkles over a heart welcome mat, then it eases shut
const{sin,cos,PI,min,max}=Math,T=2*PI
export const frames=20,delay=80
const FR='#a9744f',FRD='#8d6346',DR='#4dabf7',DRD='#339af0',IN='#ffd43b',GLOW='#fff3bf',MAT='#ff6b6b',MATL='#ffa8a8',KN='#ffd43b'
const back=u=>{const s=1.4;return 1+(s+1)*(u-1)**3+s*(u-1)**2},io=u=>u*u*(3-2*u)
const sp=(c,x,y,s)=>{c.lineWidth=4;c.fillStyle='#fff';c.beginPath();c.moveTo(x,y-s);for(const[px,py,qx,qy]of[[s,0,s*.18,-s*.18],[0,s,s*.18,s*.18],[-s,0,-s*.18,s*.18],[0,-s,-s*.18,-s*.18]])c.quadraticCurveTo(x+qx,y+qy,x+px,y+py);c.fill();c.stroke()}
const X0=76,X1=180,Y0=36,Y1=208
export default(c,t)=>{
  const o=t<.08?0:t<.36?back((t-.08)/.28):t<.78?1:t<.94?1-io((t-.78)/.16):0,th=o*1.2,fx=X0+(X1-X0)*cos(th),d=18*sin(th)
  const m=(u,v)=>[X0+u*(fx-X0),(Y0-d*u)+v*((Y1+d*u)-(Y0-d*u))],q=(u0,v0,u1,v1)=>{c.beginPath();for(const[u,v]of[[u0,v0],[u1,v0],[u1,v1],[u0,v1]])c.lineTo(...m(u,v));c.closePath()}
  const L=min(1,o*1.5)
  if(L>.05)for(let k=0;k<6;k++){
    const e=k%3-1,a=k<3?e*.5:PI-e*.5,tw=.75+.25*sin(2*T*t+k*2),x=128+(k<3?78:-78),y=118+e*64,l=24*L*tw
    for(const[w,s]of[[11,'#111'],[5,IN]])c.lineWidth=w,c.strokeStyle=s,c.beginPath(),c.moveTo(x,y),c.lineTo(x+cos(a)*l,y+sin(a)*l),c.stroke()
  }
  c.strokeStyle='#111';c.lineWidth=7
  c.fillStyle=FR;c.beginPath();c.roundRect(60,20,136,196,[18,18,4,4]);c.fill();c.stroke()
  c.fillStyle=FRD;c.fillRect(64,24,8,188)
  c.fillStyle=IN;c.beginPath();c.rect(X0,Y0,X1-X0,Y1-Y0);c.fill()
  c.save();c.clip();c.fillStyle=GLOW;c.beginPath();c.ellipse(140,120,40*L+4,70*L+4,0,0,T);c.fill();c.restore()
  c.lineWidth=5;c.beginPath();c.rect(X0,Y0,X1-X0,Y1-Y0);c.stroke()
  c.lineWidth=7;c.fillStyle=MAT;c.beginPath();c.roundRect(46,212,164,30,8);c.fill();c.stroke()
  c.strokeStyle=MATL;c.lineWidth=4;c.beginPath();c.roundRect(56,219,144,16,4);c.stroke();c.strokeStyle='#111'
  c.fillStyle='#fff';c.lineWidth=4;c.beginPath();c.moveTo(128,234);c.bezierCurveTo(112,226,116,214,128,221);c.bezierCurveTo(140,214,144,226,128,234);c.fill();c.stroke()
  if(L>.3)for(const[x0,y0,ph]of[[150,150,0],[118,96,.33],[160,70,.66]]){const p=(t*2+ph)%1,s=11*sin(PI*p)*min(1,(L-.3)*3);if(s>1.5)sp(c,x0+30*p,y0-26*p,s)}
  c.lineWidth=7;q(0,0,1,1);c.fillStyle=DR;c.fill();c.stroke()
  if(th<1.45){
    c.fillStyle=DRD;c.lineWidth=5
    for(const[u0,v0,u1,v1]of[[.18,.5,.82,.68],[.18,.74,.82,.9]])q(u0,v0,u1,v1),c.fill(),c.stroke()
    c.fillStyle=IN;c.beginPath();for(let k=0;k<24;k++){const a=k*T/24;c.lineTo(...m(.5+.26*cos(a),.25+.15*sin(a)))}c.closePath();c.fill();c.stroke()
    c.strokeStyle='#fff';c.lineWidth=4;c.beginPath();for(let k=0;k<6;k++){const a=PI*1.1+k*.08;c.lineTo(...m(.5+.19*cos(a),.25+.11*sin(a)))}c.stroke();c.strokeStyle='#111'
    const[kx,ky]=m(.86,.46);c.fillStyle=KN;c.lineWidth=4;c.beginPath();c.ellipse(kx,ky,7*max(.35,cos(th)),7,0,0,T);c.fill();c.stroke()
  }
}
