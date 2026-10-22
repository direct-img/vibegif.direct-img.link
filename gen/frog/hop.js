// frog hopping in place: squashes on the ground, stretches on takeoff and landing, kicks up dust
const{sin,PI}=Math,T=2*PI
export const delay=60
export default(c,t)=>{
  const air=t>=.2,a=(t-.2)/.8,h=air?80*4*a*(1-a):0,g=air?0:sin(PI*t/.2),st=air?.1*(1-4*a*(1-a)):0
  const sx=1+.2*g-.5*st,sy=1-.2*g+st
  const P=(f,fill='#fff',line=1)=>{c.save();c.translate(128,228-h);c.scale(sx,sy);c.beginPath();f();c.restore();if(fill)c.fillStyle=fill,c.fill();if(line)c.stroke()}
  for(const s of[-1,1])P(()=>c.ellipse(s*50,-16,26,16,0,0,T)),P(()=>c.ellipse(s*68,-6,18,7,0,0,T)),P(()=>c.arc(s*30,-96,22,0,T))
  P(()=>c.ellipse(0,-44,64,46,0,0,T))
  for(const s of[-1,1]){
    P(()=>c.arc(s*30,-102,8,0,T),'#111',0);P(()=>c.arc(s*30-3,-105,2.5,0,T),'#fff',0)
    P(()=>c.arc(s*8,-66,2.5,0,T),'#111',0);P(()=>c.ellipse(s*26,-4,13,8,0,0,T))
  }
  P(()=>c.arc(0,-58,30,.2*PI,.8*PI),0)
  c.fillStyle='#fff'
  if(g>.2)for(const s of[-1,1])c.beginPath(),c.arc(128+s*(108+12*g),220,9*g,0,T),c.fill(),c.stroke()
}
