// three tilted orbit rings in coral, teal and gold around a violet nucleus with a pulsing bright core, a white electron bead races along inside each ring, rings and electrons pass correctly in front of and behind the nucleus and step darker at the back
export const frames=40,delay=40
const{sin,cos,PI,round,floor}=Math,T=2*PI,R=92,D=7,ps=1.1,vx=-.35
const O=[[1.2,.15,[255,94,98],1],[1.1,1.2,[22,184,166],-1],[1.28,2.25,[255,182,32],1]] // tilt, spin, rgb, direction
const sh=(c,f)=>`rgb(${c.map(v=>round(v*f))})`
// point on ring k at angle a -> [x,y,depth], depth toward the viewer
const P=(k,a)=>{
  const[al,be]=O[k],x=cos(a),y=sin(a)*cos(al),z=sin(a)*sin(al),
    X=x*cos(be)-y*sin(be),Y=x*sin(be)+y*cos(be),
    X2=X*cos(ps)+z*sin(ps),Z=-X*sin(ps)+z*cos(ps),
    Y3=Y*cos(vx)-Z*sin(vx),Z3=Y*sin(vx)+Z*cos(vx),s=D/(D-Z3)
  return[128+R*X2*s,128+R*Y3*s,Z3]
}
export default(c,t)=>{
  const q=[]
  O.forEach(([,,col,dr],k)=>{
    for(let j=0;j<60;j++){
      const a=P(k,T*j/60),b=P(k,T*(j+1)/60),z=(a[2]+b[2])/2,
        st=sh(col,[.6,.8,1][floor((z+1)*1.5)]||1) // three depth tones
      q.push([z,()=>{c.strokeStyle=st,c.lineWidth=22,c.beginPath(),c.moveTo(a[0],a[1]),c.lineTo(b[0],b[1]),c.stroke()}])
    }
    // electron sits inside the ring stroke; biased so its own neighbouring segments never cover it
    const e=P(k,T*(dr*t+k/3+.1))
    q.push([e[2]+.12,()=>{
      c.fillStyle='#111',c.beginPath(),c.arc(e[0],e[1],9.8,0,T),c.fill()
      c.fillStyle='#fff',c.beginPath(),c.arc(e[0],e[1],6.6,0,T),c.fill()
    }])
  })
  q.push([0,()=>{
    const p=sin(PI*((2*t)%1))**4 // two heartbeats per loop
    c.fillStyle='#111',c.beginPath(),c.arc(128,128,30,0,T),c.fill()
    c.fillStyle='#5b3dd4',c.beginPath(),c.arc(128,128,26,0,T),c.fill()
    c.fillStyle='#8f74ff',c.beginPath(),c.arc(126,126,14+8*p,0,T),c.fill()
    c.fillStyle='#fff',c.beginPath(),c.arc(124,124,5+4*p,0,T),c.fill()
  }])
  q.sort((a,b)=>a[0]-b[0]).forEach(([,f])=>f())
}
