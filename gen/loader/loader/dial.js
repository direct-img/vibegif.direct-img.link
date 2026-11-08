// dark outlined round speedometer gauge, a segmented arc that lights from green through amber to red as the dark needle revs up in three bursts with overshoot, wobbles at the top while a little lamp turns red, then the needle falls back and settles with a bounce
const{sin,cos,PI,round}=Math,T=2*PI
export const frames=60,delay=40
const cl=x=>x<0?0:x>1?1:x,sm=x=>(x=cl(x),x*x*(3-2*x)),
 bo=x=>(x=cl(x),1+3.2*(x-1)**3+2.2*(x-1)**2),
 // fall back: ease in, then a small bounce off the stop
 dn=x=>(x=cl(x),x<.75?(x/.75)**2:1-.12*sin((x-.75)/.25*PI)),
 // [t end, value end, ease]
 K=[[.04,.03,sm],[.14,.42,bo],[.2,.34,sm],[.3,.68,bo],[.36,.6,sm],[.46,.91,bo],[.66,.91,sm],[.9,.03,dn],[1,.03,sm]],
 V=t=>{
  let a=0,p=.03
  for(const[b,q,e]of K){
   if(t<b){
    const u=(t-a)/(b-a)
    // revving judder near the top
    return p+(q-p)*e(u)+(b==.66?.035*sin(u*PI*9)*sin(u*PI):0)
   }
   a=b,p=q
  }
  return .03
 },
 X=128,Y=132,A0=PI*5/6,SW=PI*4/3,N=12,
 hex=(a,b,u)=>'#'+[0,2,4].map(i=>round(parseInt(a.substr(i,2),16)*(1-u)+parseInt(b.substr(i,2),16)*u).toString(16).padStart(2,'0')).join(''),
 // segment colors green to amber to red, plus pale unlit versions
 S=[...Array(N)].map((_,k)=>{const u=k/(N-1),c=u<.5?hex('2fbf5b','ffb020',u*2):hex('ffb020','ee4433',u*2-1);return[c,hex(c.slice(1),'e3e6ec',.68)]})
export default(c,t)=>{
 const v=V(t),a=A0+SW*v
 c.translate(X,Y)
 c.fillStyle='#f3f4f7',c.lineWidth=10,c.beginPath(),c.arc(0,0,98,0,T),c.fill(),c.stroke()
 c.lineCap='butt',c.lineWidth=20
 for(let k=0;k<N;k++){
  const s=A0+SW*k/N
  c.strokeStyle=S[k][v*N>k+.3?0:1],c.beginPath(),c.arc(0,0,74,s+.025,s+SW/N-.025),c.stroke()
 }
 c.lineCap='round',c.lineWidth=5,c.strokeStyle='#3a4152'
 for(let k=0;k<=6;k++){
  const s=A0+SW*k/6
  c.beginPath(),c.moveTo(cos(s)*50,sin(s)*50),c.lineTo(cos(s)*58,sin(s)*58),c.stroke()
 }
 // zone lamp
 c.fillStyle=v<.45?'#2fbf5b':v<.78?'#ffb020':'#ee4433',c.strokeStyle='#111',c.lineWidth=5
 c.beginPath(),c.roundRect(-20,46,40,18,9),c.fill(),c.stroke()
 // needle
 c.rotate(a),c.fillStyle='#232a3b',c.beginPath(),c.moveTo(78,0),c.lineTo(0,9),c.lineTo(-18,5),c.lineTo(-18,-5),c.lineTo(0,-9),c.closePath(),c.fill()
 c.rotate(-a),c.fillStyle='#ee4433',c.lineWidth=5,c.beginPath(),c.arc(0,0,12,0,T),c.fill(),c.stroke()
}
