// two lovebirds on a branch leaning in to nuzzle, eyes closing happily, a little heart floats up between them
const{sin,PI,max,min}=Math,T=2*PI
export const frames=24,delay=85
const B='#8cc084',L='#c6e0c1',F='#ff7a5c',W='#c9a27e',D='#2b2633'
const bump=(t,a,w)=>{const x=(t-a)/w;return x>0&&x<1?sin(PI*x)**2:0}
export default(c,t)=>{
  const n=bump(t,.1,.36)+bump(t,.56,.36),wig=.05*sin(6*T*t)*n,hp=(t-.22)/.5
  const fill=(col,f)=>{c.fillStyle=c.strokeStyle=col;c.lineWidth=6;c.beginPath();f();c.fill();c.stroke()}
  c.strokeStyle=W;c.lineWidth=12;c.lineCap='round'
  c.beginPath();c.moveTo(18,172);c.quadraticCurveTo(128,180,238,168);c.stroke()
  c.lineWidth=6;c.beginPath();c.moveTo(210,170);c.lineTo(226,152);c.stroke()
  for(const d of[1,-1]){
    const x=128-d*56,a=d*(.2*n+wig)+(d>0?.02:-.02)*sin(T*t)
    c.save();c.translate(x,170);c.scale(d,1);c.rotate(a*d)
    fill(B,()=>{c.moveTo(-14,-14);c.lineTo(-32,26);c.lineTo(-18,30);c.lineTo(0,-6);c.closePath()})
    fill(B,()=>c.ellipse(0,-36,30,38,0,0,T))
    fill(L,()=>c.ellipse(8,-28,18,24,0,0,T))
    fill(B,()=>c.arc(6,-82,26,0,T))
    c.save();c.beginPath();c.arc(6,-82,29,0,T);c.clip();fill(F,()=>c.ellipse(28,-84,30,30,0,0,T));c.restore()
    fill(W,()=>{c.moveTo(28,-90);c.quadraticCurveTo(44,-86,40,-74);c.lineTo(28,-76);c.closePath()})
    c.fillStyle=c.strokeStyle=D
    if(n>.5)c.lineWidth=3.5,c.beginPath(),c.arc(16,-90,5,1.15*PI,1.85*PI),c.stroke()
    else c.beginPath(),c.arc(16,-88,5,0,T),c.fill()
    c.restore()
  }
  for(const k of[0,1]){
    const q=hp-k*.46;if(q<0||q>.5)continue
    const z=min(1,6*min(q,.5-q)),y=72-60*q
    c.save();c.translate(128,y);c.scale(z,z);c.fillStyle=c.strokeStyle=F;c.lineWidth=4
    c.beginPath();c.moveTo(0,8);c.bezierCurveTo(-16,-4,-8,-16,0,-7);c.bezierCurveTo(8,-16,16,-4,0,8);c.fill();c.stroke();c.restore()
  }
}
