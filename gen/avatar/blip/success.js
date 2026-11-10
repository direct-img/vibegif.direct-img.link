// round violet avatar blip success and done: a glossy violet ball crouches, then hops up as its two white square pixel eyes swing together into one big white check mark with a burst of mint and yellow sparks, lands with a satisfied bounce and settles back to its eyes
export const frames=64,delay=40
const{sin,cos,PI:P,min,max}=Math,
k=x=>max(0,min(1,x)),
s=(t,a,b)=>(t=k((t-a)/(b-a)))*t*(3-2*t),
b=(t,a,d)=>sin(P*k((t-a)/d))**2
export default(c,t)=>{
  let m=1-k(1-(t-.11)/.1)**3-s(t,.78,.92),u=k((t-.12)/.22),
  q=1-.05*b(t,0,.13)+.06*b(t,.1,.16)-.045*b(t,.33,.11)+.025*b(t,.42,.12)-.025*b(t,.56,.1),
  l=k((t-.15)/.17),g=1+.16*b(t,.12,.16)
  for(let i=6;i--;){
    let a=[-.49,-1.01,-2.13,-2.65,2.54,.6][i],r=97+15*(1-(1-l)**3),d=17*sin(P*l)**.7
    c.strokeStyle=i%2?'#1fbf9c':'#ffc62e';c.lineWidth=10-4*s(l,.6,1)
    if(l%1&&d>6){
      c.beginPath();c.moveTo(128+r*cos(a),122+r*sin(a));c.lineTo(128+(r+d)*cos(a),122+(r+d)*sin(a));c.stroke()
    }
  }
  c.translate(128,222-96*u*(1-u)-3*sin(4*P*t));c.scale(2-q,q);c.translate(0,-90)
  c.fillStyle='#7a5cff';c.beginPath();c.arc(0,0,90,0,7);c.fill()
  c.save();c.clip()
  c.fillStyle='#5b3fe0';c.beginPath();c.arc(0,0,99,0,7);c.arc(-14,-16,94,7,0,1);c.fill()
  c.restore()
  c.globalAlpha=.55;c.fillStyle='#fff'
  c.beginPath();c.ellipse(-44,-52,20,9,-.7,0,7);c.fill()
  c.globalAlpha=1
  c.translate(0,-6+5*b(t,0,.13)-4*b(t,.12,.2));c.scale(g,g)
  for(let d of[-1,1]){
    c.save();c.translate(d*28+m*(d<0?8:-16),m*(d<0?11:1));c.rotate(d*m*P/4)
    let w=22-7*m,h=26-8*b(t,0,.13)+m*(d<0?20:48)
    c.beginPath();c.roundRect(-w/2,-h/2,w,h,6+1.5*m);c.fill();c.restore()
  }
}
