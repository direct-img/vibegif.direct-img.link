// 60s liquid light show in a round glass dish: pink, yellow and cyan dye blobs oozing, merging and splitting, overlaps turning orange, green, violet and white, oil bubbles drifting through
export const frames=32,delay=70
const S=256,Q=2,P=Math.PI*2,R=113,TH=.8
let sd=7
const rnd=()=>(sd=sd*16807%2147483647)/2147483647
// 3 dyes, each a sum of 4 drifting plane waves; where it's high the dye pools
const D=[0,1,2].map(()=>[0,1,2,3].map(()=>{const a=rnd()*P,k=.03+rnd()*.03;return[Math.cos(a)*k,Math.sin(a)*k,rnd()<.5?1:-1,rnd()*P]}))
const O=[...Array(6)].map(()=>[70+rnd()*116,70+rnd()*116,4+rnd()*11,rnd()*P,20+rnd()*30])
const pal=['#1b0736','#ff2d95','#ffd21a','#ff5a1f','#19d3ff','#8a3bff','#3df05a','#fff6d8'].map(h=>[1,3,5].map(k=>parseInt(h.slice(k,k+2),16)))
export default(c,t)=>{
  const im=c.createImageData(S,S),d=im.data,T=P*t
  const bb=O.map(([x,y,r,p,a])=>[x+Math.sin(T+p)*a,y+Math.cos(T+p)*a,r])
  for(let j=0;j<S;j++)for(let i=0;i<S;i++){
    const dx0=i+.5-128,dy0=j+.5-128
    if(dx0*dx0+dy0*dy0>(R+2)**2)continue
    let r=0,g=0,b=0,a=0
    for(let v=0;v<Q;v++)for(let u=0;u<Q;u++){
      let x=i+(u+.5)/Q,y=j+(v+.5)/Q
      if((x-128)**2+(y-128)**2>R*R)continue
      // swirling warp: twist that sloshes back and forth plus a slow wobble
      const X=x-128,Y=y-128,rr=Math.hypot(X,Y),w=.35*Math.sin(T-rr/28),cs=Math.cos(w),sn=Math.sin(w)
      const wx=128+X*cs-Y*sn+6*Math.sin(y/21+T),wy=128+X*sn+Y*cs+6*Math.cos(x/23-T)
      let k=0,e=0,o=0
      for(const[bx,by,br]of bb){
        let q=Math.hypot(x-bx,y-by)-br
        if(q<0)o=Math.hypot(x-bx+br*.4,y-by+br*.4)<br*.22?2:1
        else if(q<1.6)e=1
      }
      if(!o)D.forEach((g,n)=>{
        let f=0
        for(const[kx,ky,s,p]of g)f+=Math.sin(kx*wx+ky*wy+s*T+p)
        if(f>TH)k|=1<<n
        if(f>TH&&f<TH+.22)e=e||2
      })
      let p=pal[o?0:k]
      if(e==1||o==2)p=[255,255,255]
      else if(e==2)p=p.map((z,k)=>z*.5+pal[0][k]*.5)
      r+=p[0];g+=p[1];b+=p[2];a++
    }
    const p=(j*S+i)*4
    if(a)d[p]=r/a,d[p+1]=g/a,d[p+2]=b/a,d[p+3]=a*255/Q/Q
  }
  c.putImageData(im,0,0)
  c.beginPath();c.arc(128,128,R+2,0,P)
  c.lineWidth=9;c.stroke();c.lineWidth=3;c.strokeStyle='#d9e2ff';c.stroke()
}
