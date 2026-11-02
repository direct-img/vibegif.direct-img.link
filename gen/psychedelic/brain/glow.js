// side view brain whose folds light up with rainbow color waves rippling across the lobes, dark wiggly sulci, neon halo rings pulsing outward
export const frames=16,delay=80
const P=Math.PI*2
let s=5
const R=()=>(s=s*16807%2147483647)/2147483647
const W=[...Array(9)].map((_,i)=>{const a=i/9*Math.PI+R()*.3,k=P/32;return[k*Math.cos(a),k*Math.sin(a),R()*P]})
const pal=[[255,43,214],[255,60,60],[255,150,0],[255,230,0],[90,255,60],[0,230,255],[60,110,255],[160,60,255]]
const hal=['#ff2bd6','#ffe600','#00e5ff','#8a3cff']
const T=c=>c.setTransform(.84,0,0,.84,18,22)
const cere=c=>{
  T(c);c.beginPath();c.moveTo(42,140)
  c.bezierCurveTo(18,104,36,44,96,32)
  c.bezierCurveTo(146,20,206,30,228,78)
  c.bezierCurveTo(244,110,236,146,212,154)
  c.bezierCurveTo(192,162,172,156,158,158)
  c.bezierCurveTo(142,174,110,180,88,172)
  c.bezierCurveTo(72,166,66,158,68,150)
  c.bezierCurveTo(58,152,48,149,42,140)
  c.closePath()
}
const cbl=c=>{T(c);c.beginPath();c.ellipse(190,168,38,22,-.12,0,P)}
const stem=c=>{T(c);c.beginPath();c.moveTo(138,150);c.lineTo(176,150);c.quadraticCurveTo(168,190,172,226);c.quadraticCurveTo(158,236,146,228);c.quadraticCurveTo(146,190,138,150)}
const fis=c=>{T(c);c.beginPath();c.moveTo(70,150);c.bezierCurveTo(96,140,120,116,158,110)}
const sm=(a,b,x)=>(x=Math.min(1,Math.max(0,(x-a)/(b-a))),x*x*(3-2*x))
let M
export default(c,t)=>{
  const F=[stem,cbl,cere]
  if(!M)M=F.map(f=>{f(c);c.resetTransform();const m=[];for(let y=0;y<256;y++)for(let x=0;x<256;x++)if(c.isPointInPath(x+.5,y+.5))m.push(x,y);return m})
  F.forEach((f,r)=>{
    const d=c.getImageData(0,0,256,256),D=d.data,m=M[r]
    for(let j=0;j<m.length;j+=2){
      const x=m[j],y=m[j+1],o=(y*256+x)*4
      let v,e
      if(r==2){
        let g=0,gx=0,gy=0
        for(const[a,b,p]of W){const q=a*x+b*y+p;g+=Math.cos(q);const sn=Math.sin(q);gx-=a*sn;gy-=b*sn}
        e=Math.abs(g)/(Math.hypot(gx,gy)+1e-3)
        v=Math.hypot(x-118,y-104)/12+g*.3
      }else if(r==1){
        const h=Math.hypot(x-150,(y-150)*1.5)
        e=Math.abs(Math.sin(h*P/14))*14/P*1.4;v=h/12
      }else e=10-Math.abs(x-151)*.45,v=(256-y)/12
      const col=pal[((Math.floor(v-8*t))%8+8)%8],a=sm(1.6,2.8,e),sh=Math.round((.55+.45*sm(1.5,8,e))*6)/6*a
      D[o]=17+(col[0]-17)*sh;D[o+1]=17+(col[1]-17)*sh;D[o+2]=17+(col[2]-17)*sh;D[o+3]=255
    }
    c.putImageData(d,0,0)
    f(c);c.lineWidth=7;c.strokeStyle='#111';c.stroke()
    if(r==2)fis(c),c.lineWidth=6,c.stroke()
    c.resetTransform()
  })
  c.globalCompositeOperation='destination-over'
  for(let n=-4;n<5;n++){
    const b=3+(n+4*t)*5
    if(b<=3||b-5>=20)continue
    F.forEach(f=>{f(c);c.lineWidth=Math.min(b,20)*2/.84;c.strokeStyle=hal[(n+8)%4];c.stroke();c.resetTransform()})
  }
}
