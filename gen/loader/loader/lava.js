// glossy orange lava lamp goo with a dark maroon outline: three blobs peel off a pool at the bottom, rise, merge into a cap at the top and sink back, stretching gooey necks as they split and join
export const frames=36,delay=60
const{sin,cos,PI,sqrt,max,min}=Math,T=2*PI,TH=.42,
L=[-.45,-.6,.66],
mix=(a,b,k)=>(k=max(0,min(1,k)),a.map((v,j)=>v+(b[j]-v)*k))
export default(c,t)=>{
 const B=[[96,186,32],[160,188,33],[128,198,26],[108,68,27],[148,64,26],
  [128+16*sin(T*t),128+64*cos(T*t),25],
  [128-20*sin(T*t+1),128+64*cos(T*(t+1/3)),22],
  [128+18*sin(2*T*t+2),128+64*cos(T*(t+2/3)),19]]
 // the pool and the cap breathe a little
 B[0][1]+=4*sin(T*t),B[1][1]+=4*cos(T*t),B[3][0]+=4*sin(T*t+2),B[4][0]+=4*cos(T*t)
 const D=c.createImageData(256,256),d=D.data
 for(let y=0;y<256;y++)for(let x=0;x<256;x++){
  let f=0,gx=0,gy=0
  // compact (1-q/R^2)^3 kernel, R=2r so a lone blob's edge sits at r
  for(const[bx,by,r]of B){const dx=x+.5-bx,dy=y+.5-by,R=4*r*r,q=(dx*dx+dy*dy)/R
   if(q<1){const w=(1-q)**2;f+=w*(1-q),gx-=6*w*dx/R,gy-=6*w*dy/R}}
  if(f<TH*.7)continue
  const g=sqrt(gx*gx+gy*gy)+1e-9,e=(f-TH)/g // approx. pixel distance inside the edge
  if(e<-.5)continue
  // fake a rounded surface: slope falls off over 22px inside the edge
  const o=(y*256+x)*4,k=min(1,e/22),hs=k<1?(1-k)/sqrt(1-(1-k)**2+.03):0,
   nx=-gx/g*hs,ny=-gy/g*hs,nl=sqrt(nx*nx+ny*ny+1),
   df=(nx*L[0]+ny*L[1]+L[2])/nl,sp=(nx*-.32+ny*-.45+.83)/nl
  let col=mix([200,50,22],mix([244,96,34],[255,138,44],e-14),(df-.3)*25)
  col=mix(col,[255,150,52],(df-.86)*25)
  col=mix(col,[255,240,200],(sp-.975)*80)
  col=col.map(v=>v&248),col=mix([88,20,10],col,e-3.5)
  d[o]=col[0],d[o+1]=col[1],d[o+2]=col[2],d[o+3]=255*min(1,e+.5)
 }
 c.putImageData(D,0,0)
}
