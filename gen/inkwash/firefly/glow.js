// ink wash fireflies blinking on and off over reeds and cattails at night, warm yellow-green glows in a soft dark wash
export const frames=24,delay=100,dither=true
const{sin,cos,PI,hypot,min,max,abs,round,floor}=Math,T=2*PI
const ink=(a,k='20,18,16')=>`rgba(${k},${a})`
const R=s=>(s=sin(s*127.1+3.7)*43758.5453,s-floor(s))
// brush stroke: outline offset from centerline f by width profile w
const B=(c,f,w,a,n=22,k)=>{
  const P=[],Q=[]
  for(let j=0;j<=n;j++){
    const u=j/n,[x,y]=f(u),[X,Y]=f(u+.02),d=hypot(X-x,Y-y)||1,h=w(u)/2,nx=(Y-y)/d*h,ny=(x-X)/d*h
    P.push([x+nx,y+ny]);Q.unshift([x-nx,y-ny])
  }
  c.fillStyle=ink(a,k);c.beginPath();[...P,...Q].map(([x,y])=>c.lineTo(x,y));c.fill()
}
// dry brush: m hairlines across the stroke width, seeded starts and ends
const D=(c,f,w,a,m=5,s=1)=>{
  for(let j=0;j<m;j++){
    const o=j/(m-1)-.5,u0=R(s+j)*.25,u1=.7+R(s+j*3)*.3
    B(c,u=>{
      const v=u0+(u1-u0)*u,[x,y]=f(v),[X,Y]=f(v+.02),d=hypot(X-x,Y-y)||1,h=w(v)*o
      return[x+(Y-y)/d*h,y-(X-x)/d*h]
    },u=>(1.3+R(s+j*7)*1.6)*(1.1-u),a,14)
  }
}
const E=(c,x,y,rx,ry,r,a,b=0,k)=>{
  c.filter=b?`blur(${b}px)`:'none';c.fillStyle=ink(a,k);c.beginPath();c.ellipse(x,y,rx,ry,r,0,T);c.fill();c.filter='none'
}
// light areas are cut out of the ink
const cut=(c,f)=>{c.save();c.globalCompositeOperation='destination-out';f();c.restore()}
const fade=(c,w=16)=>cut(c,()=>{
  for(const[x0,y0,x1,y1]of[[0,0,w,0],[256,0,256-w,0],[0,0,0,w],[0,256,0,256-w]]){
    const g=c.createLinearGradient(x0,y0,x1,y1)
    g.addColorStop(0,'#000');g.addColorStop(1,'rgba(0,0,0,0)')
    c.fillStyle=g;c.fillRect(0,0,256,256)
  }
})
const snap=(c,s=8,a=4)=>{
  const m=c.getImageData(0,0,256,256),d=m.data
  for(let k=0;k<d.length;k+=4)if(d[k+3]){for(let j=0;j<3;j++)d[k+j]=round(d[k+j]/s)*s;d[k+3]=min(255,round(d[k+3]/a)*a)}
  c.putImageData(m,0,0)
}
export default(c,t)=>{
  // night: loose horizontal sweeps, densest low among the reeds, breaking up into dry streaks above
  c.globalCompositeOperation='multiply'
  for(const[x,X,y,w,a,k]of[
    [16,238,216,50,.46,0],[40,246,190,44,.4,1],[12,204,166,38,.34,2],[66,236,142,30,.28,3],
    [28,152,119,19,.2,4],[122,228,100,13,.16,5],[64,150,82,7,.1,6]
  ]){
    const g=u=>[x+(X-x)*u,y+5*sin(u*3.2+k*1.9)-6*u*(k%2)]
    c.filter='blur(3px)'
    B(c,g,u=>w*sin(PI*min(1,u*.96+.02)**(k%2?.5:.8))**.55*(.72+.28*sin(u*8+k*2.3)),a,30)
    c.filter='blur(.6px)'
    D(c,u=>g((k%2?.66:-.08)+u*.44),()=>w*.8,a*.6,3+k%2,k*5+1)
    c.filter='none'
  }
  c.globalCompositeOperation='source-over'
  // reeds: a few long blades, two cattails
  const sw=(k,u)=>3.5*u*u*sin(k*.9+u)
  for(const[x,y,X,Y,b,w,a,k]of[
    [70,256,52,60,-26,6.5,.9,0],[78,256,122,84,22,6,.8,1],[64,256,22,128,-10,5,.6,2],[86,256,150,150,34,5,.7,3],
    [196,256,214,120,10,5.5,.8,4],[204,256,236,168,16,4,.55,5],[190,256,170,172,-8,4,.6,6]
  ])B(c,u=>[x+(X-x)*u+b*sin(PI*u)+sw(k,u)+(X-x)*.35*u**3,y+(Y-y)*u+abs(X-x)*.3*u**3],u=>w*sin(PI*min(1,u+.05)**.35)+.5,a,24)
  for(const[x,X,Y,k]of[[74,96,52,7],[200,188,92,8]]){
    const g=u=>[x+(X-x)*u+sw(k,u)*.7,256+(Y-256)*u]
    B(c,g,()=>2,.9,20)
    B(c,u=>g(.8+u*.14),u=>9*sin(PI*u)**.3,.95,10)
    B(c,u=>g(.93+u*.09),()=>1.2,.9,6)
  }
  // fireflies: wandering on small loops, each glow cut into the night then tinted
  for(let k=0;k<8;k++){
    const x=44+R(k)*170+9*sin(T*t+k*2.4),y=56+R(k+11)*130+6*sin(T*2*t+k*1.7)
    const b=max(0,sin(T*(t*(1+k%2)+R(k+5))))**1.5,r=5+15*b
    E(c,x,y,1.5,1.1,k,.9)
    if(b>.02){
      cut(c,()=>{
        const g=c.createRadialGradient(x,y,0,x,y,r)
        g.addColorStop(0,ink(b));g.addColorStop(.35,ink(.75*b));g.addColorStop(1,ink(0))
        c.fillStyle=g;c.fillRect(x-r,y-r,2*r,2*r)
      })
      const g=c.createRadialGradient(x,y,0,x,y,r)
      g.addColorStop(0,`rgba(226,228,104,${.75*b})`);g.addColorStop(.4,`rgba(206,214,92,${.5*b})`);g.addColorStop(1,'rgba(196,206,90,0)')
      c.fillStyle=g;c.fillRect(x-r,y-r,2*r,2*r)
    }
  }
  fade(c,16);snap(c)
}
