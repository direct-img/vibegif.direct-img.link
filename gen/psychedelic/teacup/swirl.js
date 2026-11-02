// pink polka-dot teacup on a saucer, a rainbow whirlpool spinning in the tea, three wavy rainbow-striped steam ribbons rising, sparkles twinkling
export const frames=24,delay=70
const P=Math.PI*2,K='#111',rb=['#ff2e63','#ff8c1a','#ffd400','#25d962','#1ea7ff','#9b4dff']
const el=(c,x,y,rx,ry)=>{c.beginPath();c.ellipse(x,y,rx,ry,0,0,P)}
export default(c,t)=>{
  c.lineWidth=6
  // saucer
  el(c,128,218,112,28);c.fillStyle='#ffd6f0';c.fill();c.stroke()
  el(c,128,214,64,14);c.lineWidth=4;c.strokeStyle='#e46bb3';c.stroke()
  c.strokeStyle=K;c.lineWidth=6
  // steam ribbons with rainbow bands drifting up
  for(let k=0;k<3;k++){
    const x0=88+k*40,f=k*2.1,l=[],r=[]
    let x,w
    for(let y=114;y>=22;y-=2){
      const u=(114-y)/92
      x=x0+Math.sin(y/15+P*t+f)*(3+u*9),w=9*(1-u)+5
      l.push([x-w,y]);r.unshift([x+w,y])
    }
    for(let a=1;a<8;a++)l.push([x-w*Math.cos(a/8*Math.PI),22-w*Math.sin(a/8*Math.PI)])
    const rib=()=>{c.beginPath();[...l,...r].forEach(p=>c.lineTo(...p));c.closePath()}
    c.save();rib();c.clip()
    for(let y=0;y<132;y+=12){
      c.fillStyle=rb[(Math.floor(y/12+t*6+k*2)%6+6)%6];c.fillRect(0,y-t*72%12,256,12.5)
    }
    c.restore();rib();c.lineWidth=4.5;c.stroke()
  }
  c.lineWidth=6
  // handle
  c.beginPath();c.moveTo(196,138);c.bezierCurveTo(250,124,248,192,184,186)
  c.lineWidth=24;c.strokeStyle=K;c.stroke();c.lineWidth=12;c.strokeStyle='#ff4fa3';c.stroke()
  c.lineWidth=6;c.strokeStyle=K
  // body
  const body=()=>{c.beginPath();c.moveTo(52,128);c.bezierCurveTo(54,176,74,204,100,208)
    c.lineTo(156,208);c.bezierCurveTo(182,204,202,176,204,128);c.ellipse(128,128,76,22,0,0,Math.PI)}
  body();c.fillStyle='#ff4fa3';c.fill()
  c.save();body();c.clip()
  c.beginPath()
  for(let x=40;x<=216;x+=4)c.lineTo(x,168+Math.sin(x/9-P*t)*5)
  for(let x=216;x>=40;x-=4)c.lineTo(x,184+Math.sin(x/9-P*t)*5)
  c.fillStyle='#ffd400';c.fill();c.lineWidth=4;c.stroke()
  for(let k=0;k<8;k++){
    el(c,58+k*20,152,5,5);c.fillStyle='#fff';c.fill()
    el(c,68+k*20,198,4,4);c.fill()
  }
  c.restore();body();c.lineWidth=6;c.stroke()
  // rim and tea whirlpool
  el(c,128,128,76,22);c.fillStyle='#fff';c.fill();c.stroke()
  c.save();el(c,128,129,66,16);c.clip()
  c.translate(128,130);c.scale(1,16/66);c.rotate(-t*Math.PI)
  for(let k=0;k<12;k++){
    c.beginPath()
    for(let r=0;r<=72;r+=4)c.lineTo(Math.cos(k*P/12+r/18)*r,Math.sin(k*P/12+r/18)*r)
    for(let r=72;r>=0;r-=4)c.lineTo(Math.cos((k+1)*P/12+r/18)*r,Math.sin((k+1)*P/12+r/18)*r)
    c.fillStyle=rb[k%6];c.fill()
  }
  c.beginPath();c.arc(0,0,9,0,P);c.fillStyle=K;c.fill()
  c.restore()
  el(c,128,129,66,16);c.lineWidth=4;c.stroke()
  // twinkles
  ;[[40,52,0],[218,64,.33],[30,128,.66],[226,22,.5]].forEach(([x,y,o],k)=>{
    const z=Math.max(0,Math.sin(P*(t+o)))*16
    if(z<4)return
    c.beginPath()
    for(let a=0;a<8;a++){const r=a%2?z*.36:z;c.lineTo(x+Math.cos(a*P/8)*r,y+Math.sin(a*P/8)*r)}
    c.closePath();c.fillStyle=rb[k*2%6+1];c.lineWidth=2.5;c.fill();c.stroke()
  })
}
