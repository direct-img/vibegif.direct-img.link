// the cursor keeps opening new tabs until they're thin slivers, the laptop sweats, smokes, and finally crashes before rebooting with two tabs
const{sin,cos,PI,min,max,round}=Math,T=2*PI
const U=[0,...Array.from({length:10},(_,k)=>.06+k*.06),.64,.68,.92]
export const frames=U.length,delay=[500,...Array(10).fill(130),60,1100,200],rim=4
const cl=u=>min(1,max(0,u))
const K='#1b1b1f',FV=['#ff6b6b','#4dabf7','#ffd43b','#69db7c','#b197fc','#ff922b']
const puff=(c,x,y,r)=>{c.fillStyle='#dee2e6';c.strokeStyle=K;c.lineWidth=4;c.beginPath();for(const[a,b,s]of[[0,0,1],[-.8,.3,.75],[.8,.35,.7]])c.moveTo(x+a*r+r*s,y+b*r),c.arc(x+a*r,y+b*r,r*s,0,T);c.fill();c.stroke();c.fillStyle='#dee2e6';c.beginPath();c.arc(x,y,r-2,0,T);c.arc(x-.8*r,y+.3*r,.75*r-2,0,T);c.fill()}
export default(c,_,i)=>{
  const t=U[i],dead=t>=.66&&t<.9,flash=t>=.62&&t<.66,n=t>=.9?1:t>.6?40:round(2*20**(t/.6)),heat=cl((t-.2)/.4)*(t<.9)
  const sh=t>=.5&&t<.64?2*(i%2?1:-1):0
  c.translate(0,14);c.save();c.translate(sh,0)
  c.strokeStyle=K;c.lineWidth=6;c.lineJoin='round'
  const hb=`rgb(${173+82*heat},${181-80*heat},${189-120*heat})`
  c.fillStyle=hb;c.beginPath();c.moveTo(34,176);c.lineTo(222,176);c.lineTo(248,208);c.lineTo(8,208);c.closePath();c.fill();c.stroke()
  c.fillStyle='#868e96';c.beginPath();c.roundRect(104,188,48,10,4);c.fill()
  c.fillStyle='#ced4da';c.beginPath();c.roundRect(24,24,208,154,12);c.fill();c.stroke()
  const sx=36,sy=36,sw=184,sh2=130
  if(dead){c.fillStyle='#343a40';c.fillRect(sx,sy,sw,sh2);c.strokeStyle='#fff';c.lineWidth=7
    for(const x of[96,160]){c.beginPath();c.moveTo(x-12,82);c.lineTo(x+12,106);c.moveTo(x+12,82);c.lineTo(x-12,106);c.stroke()}
    c.lineWidth=6;c.beginPath();c.moveTo(104,138);for(let k=1;k<=6;k++)c.lineTo(104+8*k,138+(k%2?-6:0));c.stroke()}
  else if(flash){c.fillStyle='#fff';c.fillRect(sx,sy,sw,sh2)}
  else{
    c.fillStyle='#e9ecef';c.fillRect(sx,sy,sw,28)
    const tw=(sw-30)/n;c.lineWidth=2
    for(let k=n-1;k>=0;k--){const x=sx+3+k*tw,a=k==n-1;c.fillStyle=a?'#fff':'#ced4da';c.strokeStyle=K;c.beginPath();c.roundRect(x,sy+4,tw+(tw>8?2:0),24,[min(6,tw/2),min(6,tw/2),0,0]);c.fill();c.stroke()
      if(tw>12){c.fillStyle=FV[k%6];c.beginPath();c.arc(x+min(10,tw/2),sy+16,4.5,0,T);c.fill()}
      if(tw>30){c.fillStyle='#868e96';c.fillRect(x+18,sy+14,tw-28,4)}}
    c.strokeStyle=K;c.lineWidth=3;c.beginPath();c.moveTo(sx+sw-14,sy+9);c.lineTo(sx+sw-14,sy+23);c.moveTo(sx+sw-21,sy+16);c.lineTo(sx+sw-7,sy+16);c.stroke()
    c.fillStyle='#fff';c.fillRect(sx,sy+28,sw,sh2-28)
    c.fillStyle='#f1f3f5';c.beginPath();c.roundRect(sx+8,sy+33,sw-16,11,5);c.fill()
    c.fillStyle=FV[(n-1)%6];c.globalAlpha=.5;c.fillRect(sx+10,sy+50,70,54);c.globalAlpha=1
    c.fillStyle='#ced4da';for(const[y,w]of[[54,80],[66,70],[78,84],[90,60],[112,150],[122,130]])c.fillRect(sx+(y<100?90:10),sy+y,w,6)
  }
  c.strokeStyle=K;c.lineWidth=5;c.strokeRect(sx,sy,sw,sh2)
  c.restore()
  // cursor clicking the new tab button
  if(t>0&&t<.62){const p=i%2,x=sx+sw-12+sh,y=sy+18+(p?2:0);c.save();c.translate(x,y);c.scale(p?.9:1,p?.9:1);c.fillStyle='#fff';c.strokeStyle=K;c.lineWidth=3.5
    c.beginPath();c.moveTo(0,0);c.lineTo(0,26);c.lineTo(7,20);c.lineTo(12,31);c.lineTo(17,29);c.lineTo(12,18);c.lineTo(21,18);c.closePath();c.fill();c.stroke();c.restore()
    if(p){c.strokeStyle=K;c.lineWidth=3;for(const a of[-2.4,-1.6,-.8])c.beginPath(),c.moveTo(x+10*cos(a),y+10*sin(a)),c.lineTo(x+17*cos(a),y+17*sin(a)),c.stroke()}}
  // sweat and smoke as the tabs pile up
  if(t>=.3&&t<.66){c.fillStyle='#74c0fc';c.strokeStyle=K;c.lineWidth=3;for(const[x,d]of[[24,-1],[232,1]]){const u=(t*5+(d>0?.5:0))%1;c.save();c.translate(x+d*14*u,40+30*u);c.rotate(d*.5);c.beginPath();c.moveTo(0,-10);c.quadraticCurveTo(8,2,0,6);c.quadraticCurveTo(-8,2,0,-10);c.fill();c.stroke();c.restore()}}
  if(t>=.42&&t<.9){const s=dead?1.4:cl((t-.4)/.2);puff(c,206+sh,22-6*s,10+8*s);if(s>.5||dead)puff(c,182,14-4*s,8+5*s)}
}
