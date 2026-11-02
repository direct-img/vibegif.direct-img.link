// cuttlefish hovering with neon rainbow color waves rippling across its body toward its head, fins undulating, arms curling, W-shaped pupil
import{createCanvas}from'@napi-rs/canvas'
const P=Math.PI*2,hex=s=>[1,3,5].map(i=>parseInt(s.slice(i,i+2),16))
const C=['#ff2bd6','#9b5cff','#2f7bff','#00e5ff','#3dff8a','#fff23d','#ff8a2b'].map(hex)
const pal=[...C,...['#c9f6ff','#ffffff','#111111'].map(hex)]
export const frames=24,delay=70
export default(o,t)=>{
  const g=createCanvas(512,512).getContext('2d'),by=3*Math.sin(P*t)
  // colour band at a point: wavy stripes sweeping from tail to head
  const band=(x,y)=>((Math.floor(x/13+1.3*Math.sin(y/11+x/40)+t*7)%7)+7)%7
  const pv=createCanvas(512,512),px=pv.getContext('2d'),I=px.createImageData(512,512),d=I.data
  for(let y=0;y<512;y++)for(let x=0;x<512;x++){const c=C[band(x/2,y/2-by)],k=(y*512+x)*4;d[k]=c[0];d[k+1]=c[1];d[k+2]=c[2];d[k+3]=255}
  px.putImageData(I,0,0)
  g.scale(2,2);g.lineJoin=g.lineCap='round';g.strokeStyle='#111'
  g.translate(128,128+by);g.rotate(-.07+.035*Math.cos(P*t));g.translate(-128,-128)
  const fp=path=>{
    g.save();path();g.clip();g.save();g.setTransform(1,0,0,1,0,0);g.drawImage(pv,0,0);g.restore()
    // white chromatophore dots pulsing in a travelling wave
    g.fillStyle='#fff'
    for(let y=60;y<190;y+=11)for(let x=50+(y/11%2)*6;x<250;x+=12){
      const r=2.6*Math.max(0,Math.sin(P*(x/60+t*2)+y/14))-.4
      if(r>.4){g.beginPath();g.arc(x,y,r,0,P);g.fill()}
    }
    g.restore();path();g.lineWidth=5;g.stroke()
  }
  const mx=166,my=126,rx=70,ry=48
  // fin skirt with a travelling ripple
  g.beginPath()
  for(let i=0;i<=200;i++){
    const a=i/200*P,f=Math.min(1,Math.max(0,Math.cos(a)*.7+.75)),o=f*(10+5*Math.sin(a*12-P*t*2))
    g.lineTo(mx+(rx+o)*Math.cos(a),my+(ry*(1-.16*Math.cos(a))+o)*Math.sin(a))
  }
  g.closePath();g.fillStyle='#c9f6ff';g.lineWidth=4;g.fill();g.stroke()
  // arms: tapered tubes waving, each drawn whole so they stay separate
  for(const j of[0,5,1,4,2,3]){
    const sp=(j-2.5)/2.5,ang=-sp*.34-.06+.06*Math.sin(P*t+j),cu=.7*Math.sin(P*t+j*1.3),L=52-Math.abs(sp)*8
    const pts=[...Array(20)].map((_,i)=>{
      const s=i/19,q=Math.PI+ang+cu*s*s
      return[68+s*L*Math.cos(q),132+sp*15+s*L*Math.sin(q),8.5-6.5*s]
    })
    g.fillStyle='#111';pts.forEach(([x,y,r])=>{g.beginPath();g.arc(x,y,r+2.3,0,P);g.fill()})
    pts.forEach(([x,y,r])=>{g.beginPath();g.arc(x,y,r,0,P);g.fillStyle=`rgb(${C[band(x,y)]})`;g.fill()})
  }
  // head, then the mantle collar over it
  fp(()=>{g.beginPath();g.ellipse(88,130,32,32,0,0,P)})
  fp(()=>{g.beginPath();for(let i=0;i<120;i++){const a=i/120*P;g.lineTo(mx+rx*Math.cos(a),my+ry*(1-.16*Math.cos(a))*Math.sin(a))}g.closePath()})
  // eye with W pupil
  g.beginPath();g.arc(80,116,15,0,P);g.fillStyle='#fff23d';g.lineWidth=4;g.fill();g.stroke()
  g.lineWidth=4.5;g.beginPath()
  ;[[-9,-2],[-4.5,5],[0,-1],[4.5,5],[9,-2]].forEach(([x,y])=>g.lineTo(80+x,116+y*(1+.25*Math.sin(P*t))))
  g.stroke()
  g.lineWidth=4;g.beginPath();g.arc(80,116,19,1.1*Math.PI,1.8*Math.PI);g.stroke()
  // posterize to the palette, then 2x2 box-downsample
  const D=g.getImageData(0,0,512,512).data,O=o.createImageData(256,256),e=O.data
  for(let k=0;k<D.length;k+=4){
    if(D[k+3]<128){D[k+3]=0;continue}
    let bi=0,bd=1e9
    pal.forEach((p,j)=>{const q=(p[0]-D[k])**2+(p[1]-D[k+1])**2+(p[2]-D[k+2])**2;if(q<bd){bd=q;bi=j}})
    ;[D[k],D[k+1],D[k+2]]=pal[bi];D[k+3]=255
  }
  for(let y=0;y<256;y++)for(let x=0;x<256;x++){
    let r=0,G=0,b=0,n=0
    for(const[dx,dy]of[[0,0],[1,0],[0,1],[1,1]]){const k=((y*2+dy)*512+x*2+dx)*4;if(D[k+3]){r+=D[k];G+=D[k+1];b+=D[k+2];n++}}
    const k=(y*256+x)*4
    if(n){e[k]=r/n;e[k+1]=G/n;e[k+2]=b/n;e[k+3]=n*255/4}
  }
  o.putImageData(O,0,0)
}
