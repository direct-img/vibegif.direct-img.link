// yellow acid smiley face with spinning spiral eyes melting at the chin into rainbow-striped drips that stretch, drop off and regrow
export const frames=24,delay=70
const P=Math.PI*2,X=128,Y=88,R=74,B=11
const C=['#ffd60a','#ff8a1a','#ff2d75','#c33cff','#3f5bff','#00c8ff','#24e06a']
// drip: x offset, width, phase, max length
const D=[[-52,14,.1,34],[-27,19,.62,64],[0,16,.3,48],[26,20,.85,70],[50,13,.45,30]]
const yb=x=>Y+Math.sqrt(Math.max(0,R*R-(x-X)**2))
export default(c,t)=>{
  const y0=Y+24,g=c.createLinearGradient(0,0,0,256),n0=Math.floor(-7*t),st=(y,k)=>g.addColorStop(Math.min(1,Math.max(0,y/256)),C[(k%7+7)%7])
  st(0,0);st(y0,0);st(y0+.01,n0)
  for(let n=n0+1;;n++){
    const y=y0+(n+7*t)*B
    if(y>256)break
    st(y-.01,n-1);st(y,n)
  }
  const sh=[]
  for(const[dx,w,ph,m]of D){
    const u=(t+ph)%1,x=X+dx,h=w/2,b=yb(x),f=7
    let L
    if(u<.7)L=6+(m-6)*(u/.7)**1.6
    else{
      const v=(u-.7)/.3,y=b+m+330*v*v,r=h*1.05
      L=m-(m-6)*(1-(1-v)**3)
      sh.push(()=>{
        c.moveTo(x,y-r*2.3);c.bezierCurveTo(x+r*.3,y-r*1.5,x+r,y-r*.7,x+r,y)
        c.arc(x,y,r,0,Math.PI);c.bezierCurveTo(x-r,y-r*.7,x-r*.3,y-r*1.5,x,y-r*2.3)
      })
    }
    const e=b+L
    sh.push(()=>{
      c.moveTo(x-h-f,yb(x-h-f)-4);c.quadraticCurveTo(x-h,b,x-h,b+f)
      c.lineTo(x-h,e);c.arc(x,e,h,Math.PI,0,true);c.lineTo(x+h,b+f)
      c.quadraticCurveTo(x+h,b,x+h+f,yb(x+h+f)-4);c.closePath()
    })
  }
  sh.push(()=>c.arc(X,Y,R,0,P))
  c.lineWidth=12
  for(const f of sh)c.beginPath(),f(),c.stroke()
  c.fillStyle=g
  for(const f of sh)c.beginPath(),f(),c.fill()
  // hypno spiral eyes spinning opposite ways
  for(const s of[-1,1]){
    const ex=X+s*28,ey=Y-14
    c.lineWidth=4;c.fillStyle='#fff'
    c.beginPath();c.arc(ex,ey,16,0,P);c.fill();c.stroke()
    c.lineWidth=3.2
    c.beginPath()
    for(let a=0;a<4.4*Math.PI;a+=.12){
      const r=a*.86+.5,b=a+s*P*t
      c.lineTo(ex+s*r*Math.cos(b),ey+r*Math.sin(b))
    }
    c.stroke()
  }
  c.lineWidth=7
  c.beginPath();c.arc(X,Y+2,46,.17*Math.PI,.83*Math.PI);c.stroke()
}
