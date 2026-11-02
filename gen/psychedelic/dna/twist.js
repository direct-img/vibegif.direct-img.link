// DNA double helix twisting in 3D, two rainbow backbone strands with colors flowing along them, neon base-pair rungs
export const frames=18,delay=85
const P=Math.PI*2,cx=128,A=64,per=150,dd=P*.37
let s=11
const R=()=>(s=s*16807%2147483647)/2147483647
const bs=[...Array(16)].map(()=>R()*4|0)
const B=['#ff2bd6','#ffe600','#00e5ff','#5dff2b']
export default(c,t)=>{
  const pt=(y,o)=>{const a=(y-128)/per*P+P*t+o;return[cx+A*Math.sin(a),Math.cos(a)]}
  const hue=(y,k)=>`hsl(${Math.round((y*1.2+k*150-360*t+720)/15)*15%360},100%,56%)`
  const tube=f=>{
    for(const o of[1,0,2])for(let k=0;k<2;k++){
      let on=0
      c.beginPath()
      for(let y=14;y<242;y+=2){
        const[x0,z0]=pt(y,k*dd),[x1,z1]=pt(y+2,k*dd),z=(z0+z1)/2,w=12+5*z
        if(!f(z)){on=0;continue}
        if(o<2){
          c.lineWidth=o?w+7:w;c.strokeStyle=o?'#111':hue(y,k)
          c.beginPath();c.moveTo(x0,y);c.lineTo(x1,y+2);c.stroke()
        }else if(z>.3){
          on?0:c.moveTo(x0-w*.2,y);on=1;c.lineTo(x1-w*.2,y+2)
        }else on=0
      }
      if(o==2)c.lineWidth=3,c.strokeStyle="#fff",c.stroke()
    }
  }
  const rungs=f=>{
    const h=[]
    bs.forEach((b,j)=>{
      const y=26+j*13.6,[xa,za]=pt(y,0),[xb,zb]=pt(y,dd),xm=(xa+xb)/2,zm=(za+zb)/2
      h.push([xa,za,B[b],xm,y,zm],[xb,zb,B[b^1],xm,y,zm])
    })
    h.filter(r=>f(r[1])).sort((a,b)=>a[1]-b[1]).forEach(([x,z,col,xm,y,zm])=>{
      const w=7+3*(z+zm)/2
      for(const o of[1,0]){
        c.lineWidth=o?w+6:w;c.strokeStyle=o?'#111':col
        c.beginPath();c.moveTo(x,y);c.lineTo(xm,y);c.stroke()
      }
    })
  }
  rungs(z=>z<0)
  tube(z=>z<0)
  rungs(z=>z>=0)
  tube(z=>z>=0)
}
