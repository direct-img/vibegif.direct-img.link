// impossible Penrose triangle made of three square beams, rainbow stripes flowing endlessly around the beams in a loop, each face shaded, black outline
export const frames=24,delay=70
const S=256,Q=3,N=S*Q,L=1,w=.2,c=Math.sqrt(3)/2,F=2*w/Math.PI
// boxes [lo,hi] + s(x,y,z) = distance along the loop
const B=[
  [[w,0,0],[L,w,w],(x)=>x],
  [[L,0,0],[L+w,w,w],(x,y)=>L+F*Math.atan2(x-L,w-y)],
  [[L,w,0],[L+w,L,w],(x,y)=>L+y],
  [[L,L,0],[L+w,L+w,w],(x,y,z)=>2*L+F*Math.atan2(y-L,w-z)],
  [[L,L,w],[L+w,L+w,L],(x,y,z)=>2*L+z],
  [[L,L,L],[L+w,L+w,L+w],(x,y,z)=>3*L+F*Math.atan2(z-L,w-x+L)]]
// fit the rotated iso projection (apex up) into the canvas
const pr=([x,y,z])=>[(x+y)/2-z,(y-x)*c],cs=B.flatMap(([l,h])=>[0,1,2,3,4,5,6,7].map(m=>pr([0,1,2].map(a=>m>>a&1?h[a]:l[a]))))
const[x0,x1,y0,y1]=[0,0,1,1].map((a,k)=>Math[k%2?'max':'min'](...cs.map(p=>p[a])))
const sc=N*.92/Math.max(x1-x0,y1-y0),ox=N/2-sc*(x0+x1)/2,oy=N/2-sc*(y0+y1)/2
const cls=new Int8Array(N*N),sv=new Float32Array(N*N)
for(let j=0;j<N;j++)for(let i=0;i<N;i++){
  const X=-(j-oy)/sc,Y=(i-ox)/sc,q=[Y+X/(2*c),Y-X/(2*c),0]
  let best=-1e9,k=-1,ax=-1,hit=[]
  B.forEach(([lo,hi],b)=>{
    let d0=-1e9,d1=1e9,a=0
    for(let m=0;m<3;m++){d0=Math.max(d0,lo[m]-q[m]);if(hi[m]-q[m]<d1)d1=hi[m]-q[m],a=m}
    if(d0>=d1||b==5&&a==0)return
    hit[b]=1
    if(d1>best)best=d1,k=b,ax=a
  })
  // the impossible join: near the top-left corner beam A sits in front of beam C
  if(hit[0]&&k==4&&i<ox+sc*.45){
    const[lo,hi]=B[0];let d1=1e9
    for(let m=0;m<3;m++)if(hi[m]-q[m]<d1)d1=hi[m]-q[m],ax=m
    k=0,best=d1
  }
  const n=j*N+i
  cls[n]=ax
  if(k>=0)sv[n]=B[k][2](q[0]+best,q[1]+best,q[2]+best)
}
const edge=new Uint8Array(N*N),R=6
for(let j=0;j<N;j++)for(let i=0;i<N;i++){
  const v=cls[j*N+i]
  e:for(let dy=-R;dy<=R;dy++)for(let dx=-R;dx<=R;dx++){
    if(dx*dx+dy*dy>R*R)continue
    const y=j+dy,x=i+dx,u=x<0||y<0||x>=N||y>=N?-1:cls[y*N+x]
    if(u!=v){edge[j*N+i]=1;break e}
  }
}
const hue=['#ff2e63','#ff8c1a','#ffd400','#25d962','#1ea7ff','#9b4dff'].map(h=>[1,3,5].map(k=>parseInt(h.slice(k,k+2),16)))
// face tints: x faces pure, y faces sunk toward indigo, z faces lifted toward white
const mix=(h,m,f)=>h.map((v,k)=>v+(m[k]-v)*f),pal=[0,1,2].map(k=>hue.map(h=>k==1?mix(h,[40,10,90],.45):k==2?mix(h,[255,255,255],.3):h))
export default(c,t)=>{
  const im=c.createImageData(S,S),d=im.data
  for(let j=0;j<S;j++)for(let i=0;i<S;i++){
    let r=0,g=0,b=0,a=0
    for(let v=0;v<Q;v++)for(let u=0;u<Q;u++){
      const n=(j*Q+v)*N+i*Q+u,k=cls[n]
      if(edge[n]){r+=17;g+=17;b+=17;a++;continue}
      if(k<0)continue
      const h=pal[k][((Math.floor(sv[n]/(3*L)*18-t*6)%6)+6)%6]
      r+=h[0];g+=h[1];b+=h[2];a++
    }
    const p=(j*S+i)*4
    if(a)d[p]=r/a,d[p+1]=g/a,d[p+2]=b/a,d[p+3]=a*255/Q/Q
  }
  c.putImageData(im,0,0)
}
