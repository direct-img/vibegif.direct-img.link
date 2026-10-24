// a calm guy's thought bubble replays the day he waved back at someone who was waving at the person behind him, and he cringes all over
const{sin,cos,PI,min,max,abs}=Math,T=2*PI
export const frames=40,delay=75,rim=3
const cl=u=>min(1,max(0,u)),io=u=>(u=cl(u),u<.5?2*u*u:1-2*(1-u)**2),lp=(a,b,u)=>a+(b-a)*u
const BG='#e7f5ff',SKIN='#ffd3b0',HAIR='#5c3d2e',ME='#ff922b',A='#4dabf7',B='#da77f2',RED='#ff6b6b'
const fig=(c,x,col,hair,d,arm,face)=>{
  c.save();c.translate(x,134);c.scale(1.3,1.3);c.strokeStyle='#111';c.lineWidth=4
  c.beginPath();c.moveTo(-5,-14);c.lineTo(-6,0);c.moveTo(5,-14);c.lineTo(6,0);c.stroke()
  const sx=d*8,sy=-30,ax=sx+d*13*cos(arm),ay=sy-13*sin(arm),hx=ax+d*10*cos(arm+.5),hy=ay-10*sin(arm+.5)
  for(const[w,s]of[[11,'#111'],[5,col]])c.lineWidth=w,c.strokeStyle=s,c.beginPath(),c.moveTo(sx,sy),c.lineTo(ax,ay),c.lineTo(hx,hy),c.stroke()
  c.strokeStyle='#111';c.lineWidth=4;c.fillStyle=SKIN;c.beginPath();c.arc(hx,hy,4.5,0,T);c.fill();c.stroke()
  c.fillStyle=col;c.beginPath();c.roundRect(-10,-36,20,24,7);c.fill();c.stroke()
  c.fillStyle=SKIN;c.beginPath();c.arc(0,-46,11,0,T);c.fill();c.stroke()
  c.fillStyle=hair;c.beginPath();c.arc(0,-48,11,PI*1.05,PI*1.95);c.closePath();c.fill();c.stroke()
  c.fillStyle='#111';for(const e of[2,8])c.beginPath(),c.arc(d*e-d*2,-45,1.8,0,T),c.fill()
  c.lineWidth=2.5;c.beginPath();if(face==1)c.arc(d*3,-41,3.5,.1*PI,.9*PI);else if(face==2)c.moveTo(d*1,-39),c.lineTo(d*6,-39);c.stroke()
  c.restore()
}
export default(c,t,i)=>{
  const bub=io((t-.05)/.08)*(1-io((t-.86)/.08)),cr=io((t-.47)/.05)*(1-io((t-.86)/.07)),sk=cr>.3?3*sin(i*2.6):0
  const wa=sin(T*t*8)*.4,meUp=io((t-.2)/.04)*(1-io((t-.56)/.08)),bIn=io((t-.3)/.08),freeze=t>.42
  c.save();c.beginPath();c.roundRect(6,6,244,244,28);c.fillStyle=BG;c.fill();c.clip()
  c.lineWidth=6;c.strokeStyle='#111';c.fillStyle=ME;c.beginPath();c.moveTo(-6,262);c.quadraticCurveTo(-2,222,66,220-10*cr);c.quadraticCurveTo(134,222,140,262);c.closePath();c.fill();c.stroke()
  c.save();c.translate(66+sk,194+6*cr);c.rotate(sk*.01)
  c.fillStyle=SKIN;c.lineWidth=6;c.beginPath();c.arc(0,0,44,0,T);c.fill();c.stroke()
  if(cr>.01){c.fillStyle=`rgba(255,107,107,${(.55*cr).toFixed(2)})`;c.beginPath();c.arc(0,0,41,0,T);c.fill()}
  c.fillStyle=HAIR;c.beginPath();c.moveTo(-44,-4);c.quadraticCurveTo(-48,-48,0,-46);c.quadraticCurveTo(46,-48,44,-4);c.quadraticCurveTo(36,-26,14,-26);c.lineTo(6,-18);c.lineTo(-2,-28);c.quadraticCurveTo(-34,-26,-44,-4);c.fill();c.stroke()
  c.fillStyle='#111';c.strokeStyle='#111';c.lineWidth=5
  if(cr>.5){for(const d of[-1,1])c.beginPath(),c.moveTo(d*26,-4),c.lineTo(d*12,2),c.lineTo(d*26,8),c.stroke()
    c.fillStyle='#fff';c.lineWidth=4;c.beginPath();c.roundRect(-16,16,32,14,4);c.fill();c.stroke();c.beginPath();c.moveTo(-16,23);c.lineTo(16,23);for(const x of[-8,0,8])c.moveTo(x,16),c.lineTo(x,30);c.stroke()
    c.lineWidth=4;c.beginPath();for(const d of[-1,1])c.moveTo(d*28,-16),c.lineTo(d*12,-10);c.stroke()}
  else{const lx=6*bub,ly=-5*bub;for(const d of[-1,1])c.beginPath(),c.arc(d*16+lx,2+ly,5,0,T),c.fill()
    c.lineWidth=4;c.beginPath();c.arc(lx*.5,16,11,.15*PI,.85*PI);c.stroke()
    c.fillStyle='#ffa8a8';for(const d of[-1,1])c.beginPath(),c.ellipse(d*28,16,7,4,0,0,T),c.fill()}
  c.restore()
  if(cr>.3){c.strokeStyle=RED;c.lineWidth=5;for(const[x,y,a]of[[20,140,-2.2],[116,150,-.9],[124,196,0],[4,192,PI]]){c.save();c.translate(x+sk,y);c.rotate(a);c.beginPath();for(let k=0;k<=12;k++)c.lineTo(k*2.4,4*sin(k*1.4+i*1.8));c.stroke();c.restore()}}
  if(bub>.01){
    c.strokeStyle='#111';c.lineWidth=5;c.fillStyle='#fff'
    for(const[x,y,r,k]of[[98,158,6,.2],[108,144,8,.5]])if(bub>k)c.beginPath(),c.arc(x,y,r,0,T),c.fill(),c.stroke()
    c.save();c.translate(166,84);c.scale(bub,bub);c.translate(-166,-84)
    const C=[[112,66,30],[152,44,30],[196,44,28],[220,76,22],[212,110,26],[166,120,28],[118,108,28],[166,80,54]]
    c.lineWidth=12;for(const[x,y,r]of C)c.beginPath(),c.arc(x,y,r,0,T),c.stroke()
    c.fillStyle='#fff';for(const[x,y,r]of C)c.beginPath(),c.arc(x,y,r,0,T),c.fill()
    c.save();c.beginPath();for(const[x,y,r]of C)c.moveTo(x+r,y),c.arc(x,y,r,0,T);c.clip()
    c.strokeStyle='#adb5bd';c.lineWidth=4;c.beginPath();c.moveTo(80,134);c.lineTo(250,134);c.stroke()
    fig(c,112,A,'#343a40',1,1.2+(t<.62?wa:0),1)
    fig(c,lp(266,218,bIn),B,'#f08c00',-1,bIn>.5?1.2-wa:-1.5,1)
    fig(c,166,ME,HAIR,-1,meUp>.01?lp(-1.5,1.3+(freeze?0:wa*.7),meUp):-1.5,freeze?2:1)
    if(t>.42&&t<.6){c.fillStyle='#111';c.save();c.translate(176,44);c.beginPath();c.roundRect(-3.5,-16,7,16,3.5);c.fill();c.beginPath();c.arc(0,5,3.5,0,T);c.fill();c.restore()}
    c.restore();c.restore()
  }
  c.restore();c.lineWidth=6;c.strokeStyle='#111';c.beginPath();c.roundRect(6,6,244,244,28);c.stroke()
}
