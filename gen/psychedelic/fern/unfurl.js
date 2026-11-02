// three fern fiddleheads taking turns uncoiling into tall fronds of bumpy rainbow leaflets, colors flowing up them, then rolling back into spirals
export const frames=22,delay=85
const P=Math.PI*2,N=64
const sm=(a,b,x)=>(x=Math.min(1,Math.max(0,(x-a)/(b-a))),x*x*(3-2*x))
const fern=(c,t,bx,by,sc,p,a0,dr,hs)=>{
  const l=3.5*sc,pts=[[bx,by,a0]]
  let x=bx,y=by,a=a0
  for(let k=0;k<N;k++){
    const s=k/N,u=sm(s-.25,s+.05,p*1.3),kc=.008+.1*Math.exp(1.5*(s-.3)/.7)*sm(.24,.34,s),kf=.006+.05*sm(.8,1,s)
    a+=dr*(kc+(kf-kc)*u)
    x+=Math.cos(a)*l;y+=Math.sin(a)*l;pts.push([x,y,a,s+1/N,u])
  }
  const lf=[]
  for(let k=N-1;k>=14;k-=5){
    const[x,y,a,s,u]=pts[k],L=(58*Math.pow(1-s,.85)*sm(.2,.3,s)*(.45+.55*u)+3)*sc,h=(Math.round((s*330-360*t+hs)/30)*30+720)%360
    for(const d of[-1,1])lf.push([x,y,a+d*(.6+.8*u),d,L,`hsl(${h|0},100%,58%)`])
  }
  for(const[x,y,f,d,L,col]of lf){
    const n=Math.max(2,Math.round(L/5.5)),w=Math.min(4.8,1.8+L*.12)*sc
    for(const o of[1,0])for(let j=n-1;j>=0;j--){
      const v=(j+.5)/n,g=f-d*.3*v,r=w*(1-.55*j/n)
      c.beginPath();c.arc(x+Math.cos(g)*L*v,y+Math.sin(g)*L*v,o?r+2.3:r,0,P)
      c.fillStyle=o?'#111':col;c.fill()
    }
  }
  for(const o of[1,0])for(let k=0;k<N;k++){
    const[x0,y0]=pts[k],[x1,y1]=pts[k+1],w=(8-k/N*5)*sc
    c.lineWidth=o?w+5:w;c.strokeStyle=o?'#111':'#3ddc4a'
    c.beginPath();c.moveTo(x0,y0);c.lineTo(x1,y1);c.stroke()
  }
}
export default(c,t)=>{
  const p=o=>.5-.5*Math.cos(P*(t-o)),w=.03*Math.sin(P*t)
  fern(c,t,121,252,.68,p(.36),-Math.PI/2-.42+w,-1,120)
  fern(c,t,135,252,.72,p(.7),-Math.PI/2+.34+w,1,240)
  fern(c,t,128,252,1,p(0),-Math.PI/2-.12+w,1,0)
}
