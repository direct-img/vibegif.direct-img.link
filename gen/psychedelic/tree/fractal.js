// recursive fractal tree whose branch angles breathe and morph its whole shape, rainbow colors flowing up from the trunk to glowing dot tips
export const frames=18,delay=90
const P=Math.PI*2,D=7
export default(c,t)=>{
  const s=Math.sin(t*P),q=Math.cos(t*P),L=[],T=[]
  const go=(x,y,a,l,d)=>{
    const X=x+l*Math.cos(a),Y=y+l*Math.sin(a)
    L.push([x,y,X,Y,d])
    if(d==D)return T.push([X,Y])
    const sp=.38+.17*s*Math.cos(d*.7)+.08*Math.sin(d*1.3+t*P),sk=.07*q
    go(X,Y,a-sp+sk,l*(d?.76:.56),d+1)
    go(X,Y,a+sp+sk,l*(d?.76:.56),d+1)
  }
  go(126,252,-Math.PI/2+.04*s,66,0)
  for(const k of[0,1])for(const[x,y,X,Y,d]of L){
    if(!k&&d>2)continue
    c.lineWidth=14*.72**d+(k?0:4*.75**d)
    c.strokeStyle=k?`hsl(${d*40-t*360},100%,${50+d*2}%)`:'#111'
    c.beginPath();c.moveTo(x,y);c.lineTo(X,Y);c.stroke()
  }
  T.forEach(([x,y],j)=>{
    c.fillStyle=`hsl(${(D+1)*40+j%4*30-t*360},100%,62%)`
    c.beginPath();c.arc(x,y,4.2,0,P);c.fill()
  })
}
