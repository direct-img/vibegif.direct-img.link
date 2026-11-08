// puffy grey-blue cloud with a sleepy smiling face and bold black outline bobbing gently, fat blue raindrops swelling under it one after another, dropping and splashing into little droplets on a short blue-grey line below
export const frames=36,delay=50
const{sin,cos,min,max,PI}=Math,T=2*PI
const cl=x=>min(1,max(0,x))
const back=x=>x<=0?0:1+2.7*(x-1)**3+1.7*(x-1)**2
const PUFF=[[-46,8,28],[-16,-16,36],[24,-10,32],[52,10,24]]
const drop=(c,x,y,r,sx,sy)=>{
  c.save(),c.translate(x,y),c.scale(sx,sy),c.beginPath(),c.moveTo(0,-2.1*r)
  c.bezierCurveTo(.35*r,-1.3*r,r,-.7*r,r,0),c.arc(0,0,r,0,PI),c.bezierCurveTo(-r,-.7*r,-.35*r,-1.3*r,0,-2.1*r)
  c.lineWidth=5/sx,c.fillStyle='#3d8ef0',c.stroke(),c.fill()
  c.fillStyle='#bfe0ff',c.beginPath(),c.ellipse(-r*.4,-r*.3,r*.22,r*.36,.3,0,T),c.fill(),c.restore()
}
const G=218
export default(c,t)=>{
  const by=86+3*sin(3*T*t+1.2)
  // ground line
  c.lineWidth=8,c.strokeStyle='#5f7da6',c.beginPath(),c.moveTo(66,G+4),c.lineTo(190,G+4),c.stroke(),c.strokeStyle='#111'
  // drops: each lane forms, falls, splashes once per loop, a third of a loop apart
  for(let k=0;k<3;k++){
    const u=(t+1-k/3)%1,lx=128+(k-1)*38-(k==1?4:0),top=by+40
    if(u<.18){const g=back(u/.18);drop(c,lx,top+9*g,10*g+.01,1,1)}
    else if(u<.46){const v=(u-.18)/.28,y=top+9+(G-11-top-9)*v*v;drop(c,lx,y,10,1-.1*v,1+.25*v)}
    else if(u<.64){
      const w=(u-.46)/.18
      if(w<.3)c.fillStyle='#3d8ef0',c.lineWidth=4.5,c.beginPath(),c.ellipse(lx,G-2,16-20*w,6-8*w,0,0,T),c.stroke(),c.fill()
      c.fillStyle='#3d8ef0',c.lineWidth=4
      for(const[s,h,r0]of[[-1,1,5.5],[1,1,5.5],[-.25,1.5,3.5]]){const r=r0*(1-w)**.5;if(r>1)c.beginPath(),c.arc(lx+s*(8+30*w),G-6-120*h*w*(1-w)**1.4,r,0,T),c.stroke(),c.fill()}
    }
  }
  // cloud: thick outline pass under a flat fill pass
  c.save(),c.translate(128,by)
  const sh=()=>{c.beginPath(),c.roundRect(-72,0,144,38,19);for(const[x,y,r]of PUFF)c.moveTo(x+r,y),c.arc(x,y,r,0,T)}
  c.lineWidth=14,sh(),c.stroke(),c.fillStyle='#a3b6cf',sh(),c.fill()
  c.save(),sh(),c.clip(),c.fillStyle='#8aa0bd',c.beginPath(),c.ellipse(0,52,96,28,0,0,T),c.fill()
  c.fillStyle='#c7d5e6',c.beginPath(),c.arc(-22,-24,16,0,T),c.arc(-50,0,9,0,T),c.fill(),c.restore()
  // face
  c.lineWidth=4.5
  for(const s of[-1,1])c.beginPath(),c.arc(s*20,10,6.5,PI*1.1,PI*1.9),c.stroke()
  c.fillStyle='#f39ab4';for(const s of[-1,1])c.beginPath(),c.ellipse(s*34,20,7,4,0,0,T),c.fill()
  c.beginPath(),c.arc(0,17,6,.15*PI,.85*PI),c.stroke(),c.restore()
}
