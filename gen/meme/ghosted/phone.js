// a phone sends "hey :)", it gets marked read, then the contact's little avatar turns into a ghost that floats up out of the phone, waves bye and drifts away
const{sin,cos,PI,min,max,abs}=Math,T=2*PI
export const frames=32,delay=90,rim=4
const cl=u=>min(1,max(0,u)),ez=(t,a,b)=>{const x=cl((t-a)/(b-a));return x*x*(3-2*x)},pop=u=>(u=cl(u),u<.6?1.2*u/.6:1.2-.2*(u-.6)/.4)
const G={H:'000c 808c 0686',E:'80000c8c 0666',Y:'004680 464c'," ":'',":":'0404 0a0a',")":'00222a0c',R:'0c006082856707 478c',A:'0c0440848c 0787',D:'005083895c0c00'}
const txt=(c,s,x,y,h,f='#fff',b='#111')=>{const k=h/12,P=[...s].map(ch=>(G[ch]||'').split(' ').filter(Boolean).map(q=>q.match(/../g).map(p=>[parseInt(p[0],36),parseInt(p[1],36)])));let w=-5;const X=P.map(g=>{const o=w+5;w=o+(g.length?max(...g.flat().map(p=>p[0])):3);return o})
  c.save();c.translate(x-w*k/2,y-h/2);c.scale(k,k);for(const[l,s]of[[7,b],[3,f]]){if(!s)continue;c.lineWidth=l;c.strokeStyle=s;c.beginPath();P.forEach((g,i)=>g.forEach(q=>q.forEach(([a,b],j)=>c[j?'lineTo':'moveTo'](X[i]+a,b))));c.stroke()}c.restore()}
const ghost=(c,x,y,s,t,wave)=>{
  c.save();c.translate(x,y);c.scale(s,s);c.lineWidth=5;c.strokeStyle='#111';c.fillStyle='#fff'
  for(const d of[-1,1]){c.save();c.translate(d*22,8);c.scale(d,1);c.rotate(d>0?-.2-wave:.7);c.beginPath();c.moveTo(0,-6);c.quadraticCurveTo(9,-8,13,-16);c.arc(17,-13,5.5,PI*1.2,PI*.25);c.quadraticCurveTo(14,4,0,9);c.fill();c.stroke();c.restore()}
  c.beginPath();c.moveTo(-26,30);c.lineTo(-26,0);c.arc(0,0,26,PI,0);c.lineTo(26,30)
  for(let k=0;k<3;k++){const a=26-k*52/3,b=a-52/3;c.quadraticCurveTo((a+b)/2,30+14+5*sin(t*T*2+k*2),b,30)}
  c.closePath();c.fill();c.stroke()
  c.fillStyle='#111';for(const d of[-1,1])c.beginPath(),c.ellipse(d*9,-2,4,6,0,0,T),c.fill()
  c.fillStyle='#ffa8a8';for(const d of[-1,1])c.beginPath(),c.ellipse(d*16,8,5,3,0,0,T),c.fill()
  c.lineWidth=3.5;c.beginPath();c.arc(0,8,5,.15*PI,.85*PI);c.stroke()
  c.restore()
}
export default(c,t)=>{
  const msg=pop((t-.04)/.08)*(1-ez(t,.9,.96)),rd=ez(t,.16,.2)*(1-ez(t,.9,.95)),out=ez(t,.36,.5),back=ez(t,.94,1)
  const shake=t>.26&&t<.36?2.5*sin(t*T*24):0
  // phone
  c.fillStyle='#845ef7';c.lineWidth=7;c.beginPath();c.roundRect(56,78,144,174,24);c.fill();c.stroke()
  c.fillStyle='#f8f9fa';c.lineWidth=4;c.beginPath();c.roundRect(67,90,122,150,13);c.fill();c.stroke()
  c.fillStyle='#111';c.beginPath();c.roundRect(110,94,36,8,4);c.fill()
  c.strokeStyle='#dee2e6';c.lineWidth=3;c.beginPath();c.moveTo(69,136);c.lineTo(187,136);c.stroke()
  c.strokeStyle='#adb5bd';c.lineWidth=7;c.beginPath();c.moveTo(114,119);c.lineTo(164,119);c.stroke()
  // avatar slot, the contact is there until they ghost
  const ax=92+shake,ay=119
  if(out<.05||back>.05){const s=back>.05?pop(back):1;c.save();c.translate(ax,ay);c.scale(s*1.25,s*1.25);c.fillStyle='#ffd43b';c.strokeStyle='#111';c.lineWidth=3.5;c.beginPath();c.arc(0,0,11,0,T);c.fill();c.stroke();c.fillStyle='#111';for(const d of[-1,1])c.beginPath(),c.arc(d*4,-1,1.8,0,T),c.fill();c.lineWidth=2;c.beginPath();c.arc(0,2,4,.2*PI,.8*PI);c.stroke();c.restore()}
  else{c.strokeStyle='#adb5bd';c.lineWidth=3;c.setLineDash([4,4]);c.beginPath();c.arc(92,119,14,0,T);c.stroke();c.setLineDash([])}
  // the message
  if(msg>0){c.save();c.beginPath();c.roundRect(67,90,122,150,13);c.clip();c.translate(178,184);c.scale(msg*1.2,msg*1.2)
    c.fillStyle='#4dabf7';c.strokeStyle='#111';c.lineWidth=4;c.beginPath();c.moveTo(-4,-14);c.lineTo(-4,10);c.quadraticCurveTo(-4,16,6,18);c.quadraticCurveTo(-4,20,-12,14);c.lineTo(-74,14);c.quadraticCurveTo(-82,14,-82,6);c.lineTo(-82,-14);c.quadraticCurveTo(-82,-22,-74,-22);c.lineTo(-12,-22);c.quadraticCurveTo(-4,-22,-4,-14);c.fill();c.stroke()
    txt(c,'HEY :)',-43,-4,14,'#fff','#1864ab');c.restore()}
  if(rd>0){c.save();c.globalAlpha=1;c.translate(160,224);c.scale(rd,rd);txt(c,'READ',0,0,10,'#868e96',null);c.restore()}
  // the ghost leaving
  if(out>.05&&back<.05){const u=ez(t,.36,.52)
    ,lv=ez(t,.72,.92),gx=ax+(128-ax)*u+10*sin(t*T*2),gy=ay+(42-ay)*u-180*lv*lv,s=.45+.6*u,wave=t>.48&&t<.82?.5*sin(t*T*6):0
    ghost(c,gx,gy,s,t,wave)}
}
