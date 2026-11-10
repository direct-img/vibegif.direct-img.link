// round yellow avatar ball fuming with anger: its black eyes slant into a glare over a trembling frown, coral red rises through its body like a thermometer while it swells and shakes, then steam puffs blast out of both sides of its head in three bursts and it cools back to yellow
export const frames=60,delay=50
const T=Math.PI*2,S=Math.sin,C=Math.cos,A=Math.asin,
e=x=>x<0?0:x>1?1:x*x*(3-2*x),
o=x=>x<0?0:x>1?1:1+2.7*(x-1)**3+1.7*(x-1)**2
export default(c,t,i)=>{
  let Q=0
  const r=(a,b,f=e)=>f((t-a)/(b-a)),
  g=r(.04,.1,o)-r(.8,.87,o),
  l=.55*r(.07,.2)+.45*r(.24,.4)-(r(.48,.54)+r(.56,.62)+r(.64,.74))/3,
  k=r(.43,.48)*(1-r(.5,.72)),
  b=.05*g,
  f=(x,y,g)=>{
    let v=A(y/90)
    c.save()
    c.translate(128+x,132+90*S(v+b))
    c.scale(1,C(v+b)/C(v))
    g()
    c.restore()
  },
  B=(k,s)=>{
    c.fillStyle=k
    c.beginPath();c.arc(128,132,90,0,T);c.fill()
    c.save();c.clip()
    c.fillStyle=s
    c.beginPath();c.rect(38,42,180,180);c.arc(114,116,94,0,T);c.fill('evenodd')
    c.restore()
  },
  p=(x,y,z)=>{
    for(let[u,v,w]of[[0,0,1],[-.7,.4,.62],[.65,.45,.66]]){
      c.beginPath();c.arc(x+u*z,y+v*z,w*z,0,T);c.fill()
    }
  }
  c.fillStyle='#ff5d4a'
  for(let j=0;j<3;j++){
    let x=(t-.48-j*.08)/.07
    if(x>0&x<1)Q+=S(x*T/2)
    for(let s of[-1,1]){
      let u=(t-.48-j*.08-(s>0)*.015)/.17,d=92+42*u*(2-u)
      if(u>0&u<1)p(128+s*.68*d,132-.73*d-10*u*u,(18-2*j)*Math.min(1,u*4)*(1-e(u*3-2)))
    }
  }
  let u=(t-.85)/.12,
  sc=1+.07*l*l,
  sy=1-.03*g+.05*k-.07*Q
  if(u>0&u<1)p(128,46-24*u*(2-u),11*Math.min(1,u*5)*(1-e(u*3-2)))
  c.translate(128+(1.5*g+2*l+3*k)*S(i*2.4),222)
  c.scale(sc/sy,sc*sy)
  c.translate(-128,-222)
  B('#ffc62e','#f09a10')
  c.save()
  c.beginPath();c.moveTo(30,230)
  for(let x=30;x<230;x+=14)c.lineTo(x,226-188*l+3*S(x/15+t*T*5))
  c.lineTo(226,230);c.clip()
  B('#ff5d4a','#d6392c')
  c.restore()
  c.globalAlpha=.55;c.fillStyle='#fff'
  c.beginPath();c.ellipse(84,80,20,9,-.7,0,T);c.fill()
  c.globalAlpha=1;c.fillStyle=c.strokeStyle='#1b1b24'
  for(let s of[-1,1])f(s*24,-8,_=>{
    c.beginPath()
    c.moveTo(-20,-17+g*(9+s*10));c.lineTo(20,-17+g*(9-s*10));c.lineTo(20,15-3*g);c.lineTo(-20,15-3*g)
    c.clip()
    c.beginPath();c.ellipse(0,0,9+2*g,15+g,0,0,T);c.fill()
  })
  f(0,24,_=>{
    let m=Math.max(0,g)
    c.scale(m,m)
    c.beginPath();c.moveTo(-13,5);c.quadraticCurveTo(S(i*2.4)*2,-8+S(i*1.7),13,5);c.stroke()
  })
}
