// a VIBE CHECK gauge scans with its needle twitching all over, then slams into the top of the scale and the display flashes IMMACULATE
const{sin,cos,PI,min,max,abs}=Math,T=2*PI
export const frames=30,delay=80,rim=4
const cl=u=>min(1,max(0,u)),ez=(t,a,b)=>{const x=cl((t-a)/(b-a));return x*x*(3-2*x)},pop=u=>(u=cl(u),u<.6?1.2*u/.6:1.2-.2*(u-.6)/.4)
const G={V:'004c80',I:'0040 202c 0c4c',B:'0c006082846606 66888a6c0c',E:'80000c8c 0666'," ":'',C:'826020020a2c6c8a',H:'000c 808c 0686',K:'000c 8007 358c',M:'0c0056a0ac',A:'0c0440848c 0787',U:'000a2c6c8a80',L:'000c8c',T:'0080 404c',".":'0c0c'}
const txt=(c,s,x,y,h,f='#fff',b='#111')=>{const k=h/12,P=[...s].map(ch=>(G[ch]||'').split(' ').filter(Boolean).map(q=>q.match(/../g).map(p=>[parseInt(p[0],36),parseInt(p[1],36)])));let w=-5;const X=P.map(g=>{const o=w+5;w=o+(g.length?max(...g.flat().map(p=>p[0])):3);return o})
  c.save();c.translate(x-w*k/2,y-h/2);c.scale(k,k);for(const[l,s]of[[7,b],[3,f]]){c.lineWidth=l;c.strokeStyle=s;c.beginPath();P.forEach((g,i)=>g.forEach(q=>q.forEach(([a,b],j)=>c[j?'lineTo':'moveTo'](X[i]+a,b))));c.stroke()}c.restore()}
const CX=128,CY=156,R=96,ZONES=['#ff6b6b','#ffa94d','#ffd43b','#69db7c','#f06595']
const star=(c,x,y,s)=>{if(s<=0)return;c.save();c.translate(x,y);c.scale(s,s);c.fillStyle='#fff';c.lineWidth=3/s;c.beginPath();for(let k=0;k<8;k++){const r=k%2?4:14,a=k*PI/4-PI/2;c.lineTo(r*cos(a),r*sin(a))}c.closePath();c.fill();c.stroke();c.restore()}
export default(c,t,i)=>{
  // needle angle from 0 (far left) to 1 (far right)
  const scan=.4+.3*sin(t*T*5.3-1.4)+.16*sin(t*T*12.1+1)+.06*sin(t*T*23),slam=ez(t,.44,.5),home=ez(t,.86,.98)
  let a=t<.06?.06:t<.44?.06+(scan-.06)*ez(t,.06,.12):.06+(scan-.06)*(1-slam)+.96*slam
  if(t>=.5&&t<.86)a=.985+((i>>1)%2?0:.01)
  if(t>=.86)a=.985+(.06-.985)*home
  const done=t>=.5&&t<.9
  // housing and dial
  c.fillStyle='#9775fa';c.lineWidth=7;c.beginPath();c.arc(CX,CY,R+16,PI,0);c.lineTo(CX+R+16,CY+56);c.quadraticCurveTo(CX+R+16,CY+72,CX+R,CY+72);c.lineTo(CX-R,CY+72);c.quadraticCurveTo(CX-R-16,CY+72,CX-R-16,CY+56);c.closePath();c.fill();c.stroke()
  c.fillStyle='#fff';c.lineWidth=5;c.beginPath();c.arc(CX,CY,R,PI,0);c.closePath();c.fill();c.stroke()
  c.lineCap='butt';ZONES.forEach((z,k)=>{c.strokeStyle=z;c.lineWidth=22;c.beginPath();c.arc(CX,CY,R-18,PI+k*PI/5,PI+(k+1)*PI/5);c.stroke()})
  c.strokeStyle='#111';c.lineWidth=3;c.beginPath();c.arc(CX,CY,R-7,PI,0);c.stroke();c.beginPath();c.arc(CX,CY,R-29,PI,0);c.stroke()
  for(let k=1;k<5;k++){const q=PI+k*PI/5;c.beginPath();c.moveTo(CX+(R-29)*cos(q),CY+(R-29)*sin(q));c.lineTo(CX+(R-7)*cos(q),CY+(R-7)*sin(q));c.stroke()}
  c.lineCap='round'
  // little faces on the ends of the scale
  c.lineWidth=3;c.fillStyle='#111';for(const[x,s]of[[CX-56,-1],[CX+56,1]]){const y=CY-22;for(const d of[-1,1])c.beginPath(),c.arc(x+d*5,y-4,2,0,T),c.fill();c.beginPath();c.arc(x,y+(s<0?8:0),6,s<0?1.15*PI:.15*PI,s<0?1.85*PI:.85*PI);c.stroke()}
  // display
  c.fillStyle='#212529';c.lineWidth=5;c.beginPath();c.roundRect(CX-98,CY+14,196,44,10);c.fill();c.stroke()
  if(done){if((i>>1)%3!=2)txt(c,'IMMACULATE',CX,CY+36,17,'#8ce99a','#2b8a3e')}
  else{const n=1+(i>>1)%3;txt(c,'.'.repeat(n),CX,CY+40,16,'#8ce99a','#2b8a3e')}
  // needle
  const q=PI+a*PI;c.save();c.translate(CX,CY);c.rotate(q);c.fillStyle='#fa5252';c.lineWidth=4;c.beginPath();c.moveTo(R-14,0);c.lineTo(0,-8);c.lineTo(-10,0);c.lineTo(0,8);c.closePath();c.fill();c.stroke();c.restore()
  c.fillStyle='#343a40';c.lineWidth=5;c.beginPath();c.arc(CX,CY,12,0,T);c.fill();c.stroke()
  txt(c,'VIBE CHECK',CX,22,20,'#fff')
  if(done){const u=(2*(i>>1)/frames-.5)/.4;for(const[x,y,o]of[[24,64,0],[234,70,.33],[18,118,.6],[238,124,.15],[214,96,.8],[44,92,.45]]){const p=(u*2+o)%1;star(c,x,y,sin(PI*p)*1.1)}}
  if(t>=.5&&t<.56){c.lineWidth=5;for(const k of[-.5,-.25,0])c.beginPath(),c.moveTo(CX+(R+24)*cos(k),CY-30+(R+24)*sin(k)*.8),c.lineTo(CX+(R+40)*cos(k),CY-30+(R+40)*sin(k)*.8),c.stroke()}
}
