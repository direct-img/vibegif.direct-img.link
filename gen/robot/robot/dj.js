// robot DJ in sunglasses and pink headphones nodding to the beat behind a purple deck, scratching a spinning vinyl record with one hand and the other fist pumping in the air, chest speaker thumping and music notes floating up
export const frames=32,delay=60
const T=Math.PI*2,{sin:S,cos:C,max,min,abs}=Math
const P=(c,f,s=1)=>{f&&(c.fillStyle=f,c.fill());s&&c.stroke()}
const rr=(c,x,y,w,h,r)=>{c.beginPath();c.roundRect(x,y,w,h,r)}
const O=(c,x,y,r)=>{c.beginPath();c.arc(x,y,r,0,T)}
const E=(c,x,y,a,b)=>{c.beginPath();c.ellipse(x,y,a,b,0,0,T)}
const arm=(c,pts,col='#c3ccd4')=>{
  c.beginPath();pts.forEach(([x,y],k)=>k?c.lineTo(x,y):c.moveTo(x,y))
  c.lineWidth=16;c.stroke();c.strokeStyle=col;c.lineWidth=7;c.stroke();c.strokeStyle='#111';c.lineWidth=6
}
const note=(c,x,y,s,col,k)=>{
  c.save();c.translate(x,y);c.scale(s,s);c.rotate(.25*S(k))
  const st=()=>{c.lineWidth=7;c.stroke();c.strokeStyle=col;c.lineWidth=3;c.stroke();c.strokeStyle='#111'}
  c.beginPath()
  if(k%2)c.moveTo(-4,6),c.lineTo(-4,-14),c.lineTo(12,-18),c.lineTo(12,2)
  else c.moveTo(4,4),c.lineTo(4,-16),c.quadraticCurveTo(7,-8,15,-6)
  st();c.lineWidth=4
  if(k%2){c.beginPath();c.ellipse(-9,6,6,4.5,-.4,0,T);P(c,col);c.beginPath();c.ellipse(7,2,6,4.5,-.4,0,T);P(c,col)}
  else{c.beginPath();c.ellipse(-1,5,6.5,5,-.4,0,T);P(c,col)}
  c.restore()
}
export default(c,t)=>{
  const b=t*4%1,bt=t*4|0,kick=(1-b)**4,nod=8*(1+C(T*b))/2,tl=.07*S(t*T*2)
  // music notes drifting up both sides
  const NC=['#5ee6dc','#ff6fb5','#ffd34a','#8fe36b']
  for(let k=0;k<6;k++){
    const p=(t+k/6)%1,l=k%2
    const x=l?236+7*S(p*T+k):34+16*S(p*T+k),y=166-p*150
    note(c,x,y,(l?.9:1.15)*min(1,S(p*Math.PI)*2.2),NC[k%4],k)
  }
  // raised fist, pumping on the beat
  const fy=50+nod*1.4
  c.save();c.translate(0,nod*.5)
  arm(c,[[164,136],[194,118],[202,fy+8]])
  c.lineWidth=5;rr(c,192,fy-12,22,20,7);P(c,'#9aa5b0')
  c.beginPath();c.moveTo(198,fy-12);c.lineTo(198,fy-2);c.moveTo(205,fy-12);c.lineTo(205,fy-2);c.stroke()
  // torso with thumping chest speaker
  c.lineWidth=6
  rr(c,84,116,88,76,18);P(c,'#e3e8ec',0)
  c.save();c.clip();c.fillStyle='#c3ccd4';c.fillRect(152,100,30,100);c.restore()
  rr(c,84,116,88,76,18);P(c,0)
  O(c,128,146,17+kick*3);P(c,'#2a3138')
  O(c,128,146,9+kick*3);P(c,'#5c6670')
  O(c,128,146,3.5);P(c,'#c3ccd4',0)
  c.restore()
  // head, nodding
  c.save();c.translate(128,110+nod);c.rotate(tl);c.translate(-128,-110)
  rr(c,116,100,24,16,4);P(c,'#9aa5b0')
  c.lineWidth=5;c.beginPath();c.moveTo(128,36);c.lineTo(128,24);c.stroke()
  O(c,128,21,6);P(c,b<.3?'#ff5a5f':'#8a2b2b')
  c.lineWidth=6
  rr(c,84,36,88,68,22);P(c,'#e3e8ec',0)
  c.save();c.clip();c.fillStyle='#c3ccd4';c.fillRect(152,30,30,80);c.restore()
  rr(c,84,36,88,68,22);P(c,0)
  // shades with a glint sweeping across
  c.beginPath();c.moveTo(92,60);c.lineTo(164,60);c.lineTo(162,72);c.quadraticCurveTo(148,84,135,73);c.lineTo(121,73);c.quadraticCurveTo(108,84,94,72);c.closePath();P(c,'#1b1d22')
  c.save();c.clip();c.strokeStyle='#5ee6dc';c.lineWidth=4;c.beginPath()
  const g=(t*2%1)*110-20
  c.moveTo(90+g,78);c.lineTo(100+g,58);c.stroke();c.restore();c.lineWidth=6
  // grin
  c.lineWidth=4;c.beginPath();c.moveTo(114,88);c.quadraticCurveTo(128,97,142,88);c.stroke()
  // headphones
  c.lineWidth=14;c.beginPath();c.arc(128,68,50,Math.PI*1.08,Math.PI*1.92);c.stroke()
  c.strokeStyle='#ff6fb5';c.lineWidth=6;c.stroke();c.strokeStyle='#111';c.lineWidth=6
  for(const s of[-1,1]){rr(c,128+s*47-10,50,20,38,8);P(c,'#ff6fb5');rr(c,128+s*51-4,58,8,22,3);P(c,'#c2487f',0)}
  c.restore()
  // deck
  c.beginPath();c.moveTo(24,172);c.lineTo(232,172);c.lineTo(246,198);c.lineTo(10,198);c.closePath();P(c,'#8f84f0')
  c.beginPath();c.moveTo(10,198);c.lineTo(246,198);c.lineTo(240,248);c.lineTo(16,248);c.closePath();P(c,'#5b4fcf')
  // equalizer on the deck front
  rr(c,46,205,164,37,6);c.lineWidth=4;P(c,'#3e3591');c.lineWidth=6
  for(let k=0;k<10;k++){
    const h=max(1,min(5,Math.round(1+4*abs(S(k*1.7+bt*2.3))*(.4+.6*kick)+(k%4==bt?1:0))))
    for(let j=0;j<h;j++){
      c.fillStyle=j>3?'#ff5a5f':j>1?'#ffd34a':'#7dffa0'
      c.fillRect(53+k*15.5,233-j*6.5,11,4.5)
    }
  }
  // mixer knobs
  for(const[x,y]of[[168,180],[186,180],[204,180],[176,190],[198,190]]){E(c,x,y,5,3);c.lineWidth=3;P(c,NC[x%4])}
  c.lineWidth=6
  // record: spins, rocks back and forth on scratch beats
  const sc=bt%2?.9*S(T*b*2):0,ph=t*T*3+sc,ry=184
  E(c,70,ry+2,48,13);P(c,'#3a3e46')
  E(c,70,ry,44,11);P(c,'#1b1d22',0)
  c.strokeStyle='#454b55';c.lineWidth=1.5
  for(const r of[.55,.72,.88]){E(c,70,ry,44*r,11*r);c.stroke()}
  c.strokeStyle='#111';c.lineWidth=3
  E(c,70,ry,14,3.8);P(c,'#ff5a5f')
  c.fillStyle='#fff';E(c,70+C(ph)*9,ry+S(ph)*2.3,2.6,1.4);c.fill()
  c.lineWidth=6;E(c,70,ry,44,11);P(c,0)
  // tone arm
  c.lineWidth=4;c.beginPath();c.moveTo(128,176);c.lineTo(120,190);c.lineTo(100,190);c.stroke()
  O(c,128,176,4);P(c,'#c3ccd4')
  // scratching hand
  const hx=56+sc*16,hy=180
  arm(c,[[90,138],[60,152],[hx,hy]])
  c.lineWidth=5;E(c,hx,hy,11,7);P(c,'#9aa5b0')
  if(bt%2){
    c.strokeStyle='#9aa5b0';c.lineWidth=3;c.beginPath()
    const d=Math.sign(C(T*b*2))
    c.moveTo(hx-d*16,hy-14);c.quadraticCurveTo(hx-d*23,hy-4,hx-d*16,hy+4);c.stroke()
    c.strokeStyle='#111'
  }
}
