// round violet avatar blip talking: a glossy violet ball speaks as its two white square pixel eyes split into four equaliser bars that jump with the rhythm of speech, while the ball bops and yellow sound arcs pulse out on both sides
export const frames=72,delay=40
const{sin,PI:P,min,max,abs}=Math,
k=x=>max(0,min(1,x)),
s=(t,a,b)=>(t=k((t-a)/(b-a)))*t*(3-2*t),
o=(t,a,b)=>(t=k((t-a)/(b-a))-1,1+2.75*t*t*t+1.75*t*t),
T=[.07,.15,.22,.3,.37,.56,.62,.69,.76,.82],V=[1,.6,.9,.65,1,1,.6,.95,.55,.85],
B=x=>x<0?0:x<.02?x/.02:k(1.15-x/.13)**1.6,
E=(t,j)=>max(...T.map((a,i)=>V[i]*(j+1?.35+.65*abs(sin(i*1.9+j*2.3+1)):1)*B(t-a-(j+1&&j*.004))))
export default(c,t)=>{
  let m=o(t,.01,.14)-s(t,.89,.99),e=E(t,-1),w=22-8*m,x=5*sin(2*P*t)*m
  c.strokeStyle='#ffc62e'
  for(let i of[0,2,4,5,7,9]){
    let l=k((t-T[i])/.13),r=115-16*(1-l)**3
    c.lineWidth=l=10*min(1,l*8)*(1-s(l,.45,1))+.01
    if(l>4)for(let a of[0,P]){c.beginPath();c.arc(128,132,r,a-.3,a+.3);c.stroke()}
  }
  c.translate(128,222-5*e-3*sin(4*P*t));c.scale(1-.03*e,1+.04*e);c.translate(0,-90)
  c.fillStyle='#7a5cff';c.beginPath();c.arc(0,0,90,0,7);c.fill()
  c.save();c.clip()
  c.fillStyle='#5b3fe0';c.beginPath();c.arc(0,0,99,0,7);c.arc(-14,-16,94,7,0,1);c.fill()
  c.restore()
  c.globalAlpha=.55;c.fillStyle='#fff'
  c.beginPath();c.ellipse(-44,-52,20,9,-.7,0,7);c.fill()
  c.globalAlpha=1
  c.translate(x,-6-2*e);c.scale(1-abs(x)/150,1)
  c.beginPath()
  for(let j=4;j--;){
    let h=26+m*44*E(t,j),x=(j<2?-28:28)+14*m*(j%2*2-1)
    if(m||j%2){c.roundRect(x-w/2,-h/2,w,h,6+m);m||(c.fill(),c.beginPath())}
  }
  c.fill()
}
