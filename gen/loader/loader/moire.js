// white disc in a thick black rim holding two sets of bold black concentric rings, one set glides left and right over the other so wide moire bands swell and sweep across it
const{cos,PI,min}=Math,T=2*PI
export const frames=40,delay=50
const R=98,G=20
const Q=c=>{
  const d=c.getImageData(0,0,256,256),D=d.data
  for(let k=0;k<D.length;k+=4)if(D[k+3]){
    D[k+3]=D[k+3]<64?0:D[k+3]<192?128:255
    for(let j=k;j<k+3;j++)D[j]=min(255,D[j]+16&~31)
  }
  c.putImageData(d,0,0)
}
export default(c,t)=>{
  // eased swing, never fully lined up so the bands never vanish
  const d=5+27*(.5-.5*cos(T*t))
  c.save()
  c.beginPath();c.arc(128,128,R,0,T);c.fillStyle='#fff';c.fill();c.clip()
  c.strokeStyle='#000';c.lineWidth=G/2
  for(let r=G/2;r<R+10;r+=G){c.beginPath();c.arc(128,128,r,0,T);c.stroke()}
  // second set inverts what it covers, so where rings cross black and white swap
  c.globalCompositeOperation='difference';c.strokeStyle='#fff'
  for(let r=G/2;r<R+50;r+=G){c.beginPath();c.arc(128+d,128,r,0,T);c.stroke()}
  c.restore()
  c.beginPath();c.arc(128,128,R,0,T);c.lineWidth=12;c.strokeStyle='#111';c.stroke()
  Q(c)
}
