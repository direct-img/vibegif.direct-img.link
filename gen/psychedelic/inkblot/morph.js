// mirror symmetric Rorschach inkblot that keeps morphing and splitting off droplets, filled with neon rainbow contour bands flowing outward from its center
export const frames=32,delay=70
const S=256,TAU=Math.PI*2,P=['#ff2d6f','#ff8a00','#ffd500','#3ddc4a','#00b7ff','#8b4dff'].map(h=>[1,3,5].map(k=>parseInt(h.slice(k,k+2),16)))
// blobs on the right half: x, y, sigma x, sigma y, weight, wander x/y, freq, phase (negative weight punches holes)
const B=[[0,74,14,24,1,0,10,1,0],[0,128,16,30,1.1,0,12,1,1],[0,186,14,22,1,0,10,1,2],[34,96,24,12,.9,14,12,1,.5],[64,70,30,8,.8,18,14,1,2.4],
  [70,134,14,26,.9,16,16,1,4],[48,178,26,10,.9,9,8,2,1.3],[30,222,8,18,.7,10,8,1,5],[96,104,8,30,.65,14,12,2,3.1],[96,190,22,7,.65,18,22,1,.2],
  [104,40,6,6,.6,8,10,2,4.4],[112,228,6,6,.6,12,10,1,2.2],[20,30,8,14,.7,10,8,1,3.7],[86,150,28,5,.7,10,20,1,1.8],
  [22,128,9,9,-.9,10,26,1,2.6],[52,108,7,11,-.8,14,14,1,.9],[44,160,10,6,-.8,12,14,1,5.5],[0,40,6,10,-.7,0,12,1,1.1]]
const h=(x,y)=>{let n=Math.sin(x*127.1+y*311.7)*43758.5;return n-Math.floor(n)}
const N=(x,y)=>{
  const X=Math.floor(x),Y=Math.floor(y),u=x-X,v=y-Y,s=a=>a*a*(3-2*a),U=s(u),V=s(v)
  return h(X,Y)*(1-U)*(1-V)+h(X+1,Y)*U*(1-V)+h(X,Y+1)*(1-U)*V+h(X+1,Y+1)*U*V
}
export default(c,t)=>{
  const T=TAU*t,b=B.map(([x,y,sx,sy,w,ax,ay,f,p])=>[x+ax*Math.sin(f*T+p),y+ay*Math.cos(f*T+p*1.3),1/(2*sx*sx),1/(2*sy*sy),w])
  const F=(x,y)=>{
    x=Math.abs(x-128)*1.08+4*Math.sin(y*.07+T)
    y=128+(y-128)*1.08
    y+=3*Math.sin(x*.09-T)
    let v=(N(x/5,y/5)-.5)*.14+(N(x/2,y/2)-.5)*.08
    for(const[X,Y,kx,ky,w]of b){const dx=x-X,dy=y-Y,e=dx*dx*kx+dy*dy*ky;if(e<9)v+=w*Math.exp(-e)}
    return v
  }
  const im=c.createImageData(S,S),d=im.data
  for(let y=0;y<S;y++)for(let x=0;x<S;x++){
    let r=0,g=0,bl=0,a=0
    for(let j=0;j<4;j++){
      const v=F(x+(j&1)*.5-.25+.5,y+(j>>1)*.5-.25+.5)
      if(v<.42)continue
      const q=Math.log(v/.42)*6+6*t,p=P[((Math.floor(q)%6)+6)%6]
      r+=p[0];g+=p[1];bl+=p[2];a++
    }
    if(!a)continue
    const o=(y*S+x)*4
    d[o]=r/a;d[o+1]=g/a;d[o+2]=bl/a;d[o+3]=a*63.75
  }
  c.putImageData(im,0,0)
}
