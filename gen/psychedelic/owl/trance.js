// front-facing purple owl perched on a branch, rainbow scalloped chest feathers flowing downward, big eyes of concentric neon rings pulsing outward, swaying and blinking
export const frames=16,delay=90
const P=Math.PI*2,H=(h,l=58)=>`hsl(${(h%360+360)%360},95%,${l}%)`
export default(c,t,i)=>{
  const s=t*P,L=(w,k='#111')=>(c.lineWidth=w,c.strokeStyle=k,c.stroke())
  // branch
  c.beginPath();c.moveTo(14,236);c.bezierCurveTo(80,226,170,232,242,222)
  L(16);L(10,'#7a4a24')
  c.save();c.translate(128,232);c.rotate(Math.sin(s)*.05);c.translate(-128,-232)
  const e=Math.sin(s*2)*3
  const body=()=>{
    c.beginPath();c.moveTo(66,36+e)
    c.bezierCurveTo(52,80,44,130,50,170)
    c.bezierCurveTo(56,216,92,238,128,238)
    c.bezierCurveTo(164,238,200,216,206,170)
    c.bezierCurveTo(212,130,204,80,190,36-e)
    c.quadraticCurveTo(158,58,128,54)
    c.quadraticCurveTo(98,58,66,36+e)
    c.closePath()
  }
  body();c.fillStyle='#3d2470';c.fill()
  c.save();body();c.clip()
  // chest scallops, bottom rows first so upper ones overlap
  for(let r=7;r>=0;r--)for(let k=-4;k<=4;k++){
    const x=128+k*19+(r%2)*9.5,y=146+r*12
    c.beginPath();c.moveTo(x-9.5,y-12);c.lineTo(x-9.5,y);c.arc(x,y,9.5,Math.PI,0,1);c.lineTo(x+9.5,y-12)
    c.fillStyle=H((r-t*8)*45+Math.abs(k)*12);c.fill();L(3)
  }
  c.restore()
  // wings
  for(const m of[-1,1]){
    c.save();c.translate(128,0);c.scale(m,1)
    c.beginPath();c.moveTo(-70,112);c.bezierCurveTo(-92,138,-92,196,-60,232)
    c.bezierCurveTo(-46,206,-42,160,-70,112);c.fillStyle='#5a2d91';c.fill()
    c.save();c.clip()
    for(let f=0;f<4;f++){
      const y=140+f*24
      c.beginPath();c.moveTo(-100,y);c.quadraticCurveTo(-70,y+16,-40,y);c.lineTo(-40,260);c.lineTo(-100,260)
      c.fillStyle=H(f*50-t*360+(m>0?180:0),60);c.fill()
      c.beginPath();c.moveTo(-100,y);c.quadraticCurveTo(-70,y+16,-40,y);L(3)
    }
    c.restore();c.beginPath();c.moveTo(-70,112);c.bezierCurveTo(-92,138,-92,196,-60,232)
    c.bezierCurveTo(-46,206,-42,160,-70,112);L(5)
    c.restore()
  }
  // forehead chevrons
  for(let k=0;k<2;k++){
    c.beginPath();c.moveTo(116,61+k*6);c.lineTo(128,67+k*6);c.lineTo(140,61+k*6)
    L(4,H(k*-90+t*360+90,62))
  }
  // facial disk
  c.beginPath();c.arc(96,106,38,P*.2,P*.84);c.arc(160,106,38,P*.66,P*.3);c.lineTo(128,150);c.closePath()
  c.fillStyle='#ffe2f4';c.fill();L(5)
  // eyes: rings flowing outward
  const R=29+Math.sin(s*3)*1.5,b=Math.max(0,1-Math.abs(i-13)/1.6)
  for(const x of[97,159]){
    for(let k=7;k>=0;k--){
      c.beginPath();c.arc(x,106,R*(k+1)/8,0,P);c.fillStyle=k?H((k-t*8)*-45+200):'#111';c.fill()
    }
    c.beginPath();c.arc(x+4,101,3.5,0,P);c.fillStyle='#fff';c.fill()
    if(b){
      c.save();c.beginPath();c.arc(x,106,R,0,P);c.clip()
      c.fillStyle='#3d2470';c.fillRect(x-R,106-R,R*2,R*2*b+.01)
      c.beginPath();c.moveTo(x-R,106-R+R*2*b);c.lineTo(x+R,106-R+R*2*b);L(3)
      if(b>.9)c.beginPath(),c.arc(x,96,R*.62,P*.1,P*.4),L(4,'#ff6ad5')
      c.restore()
    }
    c.beginPath();c.arc(x,106,R,0,P);L(5)
  }
  // beak
  c.beginPath();c.moveTo(118,124);c.quadraticCurveTo(128,118,138,124);c.lineTo(128,146);c.closePath()
  c.fillStyle='#ffb21a';c.fill();L(4)
  body();L(6)
  c.restore()
  // talons
  for(const x of[106,150])for(let k=-1;k<2;k++){
    c.beginPath();c.ellipse(x+k*9,230,5,9,k*.3,0,P);c.fillStyle='#ffb21a';c.fill();L(3)
  }
}
