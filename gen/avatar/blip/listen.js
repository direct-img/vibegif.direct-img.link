// round violet avatar blip listening: a glossy violet ball leans toward mint sound arcs arriving from the upper right while its two white square pixel eyes join into one waveform line that ripples with each incoming sound, then it nods
export const frames=72,delay=40
const{sin,exp,PI:P,min,max,abs}=Math,
k=x=>max(0,min(1,x)),
s=(t,a,b)=>(t=k((t-a)/(b-a)))*t*(3-2*t),
o=(t,a,b)=>(t=k((t-a)/(b-a))-1,1+2.75*t*t*t+1.75*t*t),
T=[.13,.2,.34,.41,.48,.55,.62],V=[1,.7,.9,.6,1,.75,.5]
export default(c,t)=>{
  let m=o(t,.01,.1)-o(t,.84,.93),u=s(t,.02,.12)-s(t,.82,.92),
  n=sin(P*k((t-.88)/.1))**2,
  e=max(...T.map((a,i)=>V[i]*(a=t-a)<0?0:V[i]*k(a/.015)*k(1-a/.09))),
  x=9*u,y=-7*u+7*n,w=22+30*m,h=26-16*m
  c.strokeStyle='#1fbf9c'
  for(let i=14;i--;){
    let j=i%2,v=V[i>>1],l=k(1-(T[i>>1]+.04*j-t)/.13)
    c.lineWidth=(6+4*v)*(1-j/4)*min(1,l*8)+.01
    if(l%1&&c.lineWidth>4){
      c.beginPath();c.arc(128,132,130-50*l*l,-P/4-.3+.06*j,-P/4+.3-.06*j);c.stroke()
    }
  }
  c.translate(128+4*u-3*e,222+3*e+2*n-3*sin(4*P*t))
  c.scale(1+.02*e+.02*n,1-.02*e-.02*n);c.translate(0,-90)
  c.fillStyle='#7a5cff';c.beginPath();c.arc(0,0,90,0,7);c.fill()
  c.save();c.clip()
  c.fillStyle='#5b3fe0';c.beginPath();c.arc(0,0,99,0,7);c.arc(-14,-16,94,7,0,1);c.fill()
  c.restore()
  c.globalAlpha=.55;c.fillStyle='#fff'
  c.beginPath();c.ellipse(-44,-52,20,9,-.7,0,7);c.fill()
  c.globalAlpha=1
  c.translate(x,y-6);c.rotate(-.09*u);c.scale(1-abs(x)/150,1-abs(y)/150)
  c.beginPath()
  if(m<.999){
    for(let d of[-1,1]){c.roundRect(d*(28-2*m)-w/2,-h/2,w,h,6-m);m||(c.fill(),c.beginPath())}
    c.fill()
  }else{
    c.strokeStyle='#fff';c.lineWidth=10
    for(let x=-47;x<48;x++)c.lineTo(x,(1-(x/47)**2)*
      T.reduce((q,a,i)=>(a=x-62+680*(t-a),q+27*V[i]*exp(-a*a/600)*sin(a/8)),0))
    c.stroke()
  }
}
