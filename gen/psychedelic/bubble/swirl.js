// floating soap bubble with marbled iridescent rainbow film swirling and draining over its surface, gently wobbling, white shine highlights and twinkling sparkles
import{createCanvas}from'@napi-rs/canvas'
const P=Math.PI*2,F=[[255,214,64],[255,140,66],[255,64,160],[150,90,255],[60,170,255],[40,225,200],[150,230,90]]
const pale=F.map(x=>x.map(v=>v*.68+82|0)),pal=[...F,...pale,[255,255,255],[17,17,17]]
export const frames=32,delay=60
export default(o,t)=>{
  const g=createCanvas(512,512).getContext('2d'),I=g.createImageData(512,512),d=I.data
  const w=.035*Math.sin(P*t*2),cx=128,cy=126+4*Math.sin(P*t),rx=98*(1+w),ry=98*(1-w)
  const a=P*t,r=.18*Math.sin(a),sn=.35*Math.sin(a),cs=.35*Math.cos(a),ca=Math.cos(r),sa=Math.sin(r)
  for(let y=0;y<512;y++)for(let x=0;x<512;x++){
    const nx=((x+.5)/2-cx)/rx,ny=((y+.5)/2-cy)/ry,r2=nx*nx+ny*ny
    if(r2>1)continue
    const nz=Math.sqrt(1-r2),X=nx*ca+nz*sa,Z=nz*ca-nx*sa,Y=ny
    // film thickness: draining downward plus domain-warped swirls, all periodic in t
    const u=X+.45*Math.sin(2.6*Y+1.8*Math.sin(2.1*Z+sn)),v=Z+.45*Math.sin(2.4*X+cs)
    const h=1.3*Y+.8*Math.sin(3*u+1.6*Math.sin(2.7*v+cs))+.5*Math.sin(3.4*v-2*Y)
    const b=((Math.floor(h*3.2-t*7)%7)+7)%7,c=r2>.68?F[b]:pale[b],k=(y*512+x)*4
    d[k]=c[0];d[k+1]=c[1];d[k+2]=c[2];d[k+3]=255
  }
  g.putImageData(I,0,0)
  g.scale(2,2);g.lineCap='round'
  g.beginPath();g.ellipse(cx,cy,rx,ry,0,0,P);g.lineWidth=4;g.strokeStyle='#111';g.stroke()
  g.strokeStyle='#fff'
  const arc=(r,a0,a1,lw)=>{g.beginPath();g.ellipse(cx,cy,rx*r,ry*r,0,a0*P,a1*P);g.lineWidth=lw;g.stroke()}
  arc(.78,.56,.69,11);arc(.78,.725,.75,11);arc(.8,.08,.17,6)
  // two twinkles taking turns
  ;[[222,38,0],[34,222,.5]].forEach(([x,y,o])=>{
    const r=13*Math.sin(Math.PI*((t+o)%1))**2
    if(r<1)return
    g.beginPath()
    for(let i=0;i<8;i++){const q=i*P/8,m=i%2?r*.3:r;g.lineTo(x+m*Math.cos(q),y+m*Math.sin(q))}
    g.closePath();g.lineWidth=3;g.strokeStyle='#111';g.lineJoin='round';g.stroke();g.fillStyle='#fff';g.fill()
  })
  // posterize to the palette, then 2x2 box-downsample
  const D=g.getImageData(0,0,512,512).data,O=o.createImageData(256,256),e=O.data
  for(let k=0;k<D.length;k+=4){
    if(D[k+3]<128){D[k+3]=0;continue}
    let bi=0,bd=1e9
    pal.forEach((p,j)=>{const q=(p[0]-D[k])**2+(p[1]-D[k+1])**2+(p[2]-D[k+2])**2;if(q<bd){bd=q;bi=j}})
    ;[D[k],D[k+1],D[k+2]]=pal[bi];D[k+3]=255
  }
  for(let y=0;y<256;y++)for(let x=0;x<256;x++){
    let r=0,gg=0,b=0,n=0
    for(const[dx,dy]of[[0,0],[1,0],[0,1],[1,1]]){const k=((y*2+dy)*512+x*2+dx)*4;if(D[k+3]){r+=D[k];gg+=D[k+1];b+=D[k+2];n++}}
    const k=(y*256+x)*4
    if(n){e[k]=r/n;e[k+1]=gg/n;e[k+2]=b/n;e[k+3]=n*255/4}
  }
  o.putImageData(O,0,0)
}
