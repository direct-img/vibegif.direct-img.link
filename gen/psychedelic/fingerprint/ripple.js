// fingerprint whorl whose ridges are rainbow stripes rippling outward from the core, new rings born at the center, ragged fingertip edge
export const frames=24,delay=70
const S=256,P=['#ff2d6f','#ff8a00','#ffd500','#3ddc4a','#00b7ff','#8b4dff'].map(h=>[1,3,5].map(k=>parseInt(h.slice(k,k+2),16)))
const h=(x,y)=>{let n=Math.sin(x*127.1+y*311.7)*43758.5;return n-Math.floor(n)}
const sm=a=>a*a*(3-2*a)
const N=(x,y)=>{
  const X=Math.floor(x),Y=Math.floor(y),u=sm(x-X),v=sm(y-Y)
  return h(X,Y)*(1-u)*(1-v)+h(X+1,Y)*u*(1-v)+h(X,Y+1)*(1-u)*v+h(X+1,Y+1)*u*v
}
// precompute ridge coordinate, angle and edge mask per pixel
const R=new Float32Array(S*S),A=new Float32Array(S*S),M=new Float32Array(S*S)
for(let y=0;y<S;y++)for(let x=0;x<S;x++){
  const k=y*S+x,dx=x-128,dy=y-112
  const wx=dx+7*Math.sin(dy*.03+1.3)+3*Math.sin((dx+dy)*.05),wy=dy+6*Math.sin(dx*.035+.7)
  const sy=wy<0?.72:.72+Math.min(wy/90,1)*.5
  R[k]=Math.hypot(wx*(1+.15*Math.max(0,-wy)/100),wy*sy)/7.2
  A[k]=Math.atan2(wy,wx)
  const e=Math.hypot(dx/94,(y-124)/120)+(N(x/9,y/9)-.5)*.12+(N(x/3,y/3)-.5)*.05
  M[k]=Math.max(0,Math.min(1,(1-e)*24))
}
export default(c,t)=>{
  const im=c.createImageData(S,S),d=im.data,s=6*t
  for(let k=0;k<S*S;k++){
    if(!M[k])continue
    const u=R[k]-s,n=Math.round(u),q=Math.cos(2*Math.PI*u),m=((n%6)+6)%6
    // gaps that belong to each ridge so they travel with it
    const g=N(Math.cos(A[k])*2.2+m*7.3,Math.sin(A[k])*2.2+m*3.1)
    let a=Math.max(0,Math.min(1,(q+.15-Math.max(0,g-.71)*22)*3))*M[k]
    if(a<.04)continue
    const p=P[m],o=k*4
    d[o]=p[0];d[o+1]=p[1];d[o+2]=p[2];d[o+3]=a*255
  }
  c.putImageData(im,0,0)
}
