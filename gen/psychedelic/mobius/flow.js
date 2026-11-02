// 3D Mobius strip spinning in space with rainbow stripes flowing endlessly along its single twisted side, bright where it faces you and pastel where it turns away
import{createCanvas}from'@napi-rs/canvas'
const P=Math.PI*2,C=[[255,45,85],[255,138,0],[255,225,0],[46,224,90],[30,155,255],[122,60,255]]
export const frames=36,delay=55
export default(o,t)=>{
  const c=createCanvas(512,512).getContext('2d');c.scale(2,2);c.lineCap=c.lineJoin='round'
  const NU=180,NV=2,w=.46,a=P*t,tl=1.02+.2*Math.sin(P*t)
  const ca=Math.cos(a),sa=Math.sin(a),ct=Math.cos(tl),st=Math.sin(tl)
  const pt=(u,v)=>{
    const r=1+w*v*Math.cos(u/2),x=r*Math.cos(u),y=r*Math.sin(u),z=w*v*Math.sin(u/2)
    const X=x*ca-y*sa,Y=x*sa+y*ca
    return[X,Y*ct-z*st,Y*st+z*ct]
  }
  const pr=([x,y,z])=>{const k=82/(1+z*.16);return[128+x*k,124+y*k]}
  const q=[]
  for(let i=0;i<NU;i++)for(let j=0;j<NV;j++){
    const u0=i/NU*P,u1=(i+1)/NU*P,v0=-1+2*j/NV,v1=-1+2*(j+1)/NV
    const p3=[pt(u0,v0),pt(u1,v0),pt(u1,v1),pt(u0,v1)],p=p3.map(pr)
    // signed screen area tells which face we see
    const ar=(p[1][0]-p[0][0])*(p[3][1]-p[0][1])-(p[1][1]-p[0][1])*(p[3][0]-p[0][0])
    const b=Math.floor(((i+.5)/NU*12-t*6)%12+12)%12,s=ar>0
    q.push({p,z:p3.reduce((s,x)=>s+x[2],0),col:`rgb(${C[b%6].map(x=>s?x:x*.45+140|0)})`,e0:j==0,e1:j==NV-1})
  }
  q.sort((x,y)=>y.z-x.z)
  for(const{p,col,e0,e1}of q){
    c.beginPath();p.forEach(x=>c.lineTo(...x));c.closePath()
    c.fillStyle=c.strokeStyle=col;c.lineWidth=1.2;c.fill();c.stroke()
    c.strokeStyle='#111';c.lineWidth=5
    if(e0){c.beginPath();c.moveTo(...p[0]);c.lineTo(...p[1]);c.stroke()}
    if(e1){c.beginPath();c.moveTo(...p[2]);c.lineTo(...p[3]);c.stroke()}
  }
  // posterize the 2x render to the flat palette, then box-downsample: crisp flat colors with light AA
  const pal=[...C,...C.map(x=>x.map(v=>v*.45+140|0)),[17,17,17]],d=c.getImageData(0,0,512,512).data,O=o.createImageData(256,256),e=O.data
  for(let k=0;k<d.length;k+=4){
    if(d[k+3]<128){d[k+3]=0;continue}
    let bi=0,bd=1e9
    pal.forEach((p,j)=>{const q=(p[0]-d[k])**2+(p[1]-d[k+1])**2+(p[2]-d[k+2])**2;if(q<bd){bd=q;bi=j}})
    ;[d[k],d[k+1],d[k+2]]=pal[bi];d[k+3]=255
  }
  for(let y=0;y<256;y++)for(let x=0;x<256;x++){
    let r=0,g=0,b=0,a=0
    for(const[dx,dy]of[[0,0],[1,0],[0,1],[1,1]]){const k=((y*2+dy)*512+x*2+dx)*4;if(d[k+3]){r+=d[k];g+=d[k+1];b+=d[k+2];a++}}
    const k=(y*256+x)*4
    if(a){e[k]=r/a;e[k+1]=g/a;e[k+2]=b/a;e[k+3]=a*255/4}
  }
  o.putImageData(O,0,0)
}
