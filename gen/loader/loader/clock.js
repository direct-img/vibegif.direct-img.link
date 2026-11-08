// round teal desk clock on two little feet with a cream face: the coral minute hand whirls once round with a pale motion wedge and springs to a stop at twelve, the dark hour hand creeps an hour then eases back while the clock rocks and settles
const{sin,cos,exp,PI,min}=Math,T=2*PI
export const frames=32,delay=60
const z=.72,w=7.5,wd=w*Math.sqrt(1-z*z)
// damped spring step response, 0 -> 1 with a small overshoot
const sp=s=>1-exp(-z*w*s)*(cos(wd*s)+z*w/wd*sin(wd*s)),S1=sp(1),
 dsp=s=>w*w/wd*exp(-z*w*s)*sin(wd*s)
const sm=x=>x*x*(3-2*x)
export default(c,t)=>{
 const s=min(t/.62,1),M=T*sp(s)/S1,v=s<1?dsp(s)/.62/frames*T:0, // minute angle, turn per frame
  H=t<.55?M/12:T/12*(1-sm(min(1,(t-.55)/.3))), // hour hand creeps then eases back
  q=(t-.2)/.5,W=q>0&&q<1?.12*sin(T*2*q)*(1-q)**2:0, // a short rock after the whirl
  R=78
 c.translate(128,212),c.rotate(W),c.translate(0,-94)
 c.lineWidth=6
 // feet and crown
 c.fillStyle='#2ec4b6'
 for(const a of[-.62,.62,PI]){
  c.save(),c.rotate(a),c.beginPath(),c.roundRect(-11,R-8,22,22,7),c.fill(),c.stroke(),c.restore()
 }
 c.beginPath(),c.arc(0,0,R,0,T),c.fill(),c.stroke()
 c.fillStyle='#fff8ea',c.beginPath(),c.arc(0,0,R-14,0,T),c.fill(),c.stroke()
 // motion wedge behind the minute hand while it whirls
 const L=min(v*1.4,2.6)
 if(L>.08){
  c.fillStyle='#ffd3c8',c.beginPath(),c.moveTo(0,0)
  c.arc(0,0,54,M-PI/2-L,M-PI/2),c.fill()
 }
 // hour marks
 for(let k=0;k<12;k++){
  const a=k*T/12,q=k%3==0
  c.fillStyle=q?'#262b33':'#9aa1ab',c.beginPath()
  c.arc(53*sin(a),-53*cos(a),q?5.5:3.5,0,T),c.fill()
 }
 const hand=(a,l,wid,f)=>{
  c.save(),c.rotate(a),c.beginPath(),c.moveTo(0,8),c.lineTo(0,-l)
  c.lineWidth=wid+6,c.strokeStyle='#111',c.stroke()
  c.lineWidth=wid,c.strokeStyle=f,c.stroke(),c.restore()
 }
 hand(H,32,9,'#3b4350')
 hand(M,50,7,'#ff6b57')
 c.strokeStyle='#111',c.lineWidth=5,c.fillStyle='#ff6b57'
 c.beginPath(),c.arc(0,0,8,0,T),c.fill(),c.stroke()
}
