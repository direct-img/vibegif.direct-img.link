// Alice falling down the rabbit hole with her blue dress billowing and hair streaming up, a pocket watch, playing card, teacup and key tumbling around her past rainbow striped walls rushing upward
export const frames=16,delay=70
const P=Math.PI*2,H=(h,l=58)=>`hsl(${(h%360+360)%360},90%,${l}%)`
let z=7;const R=()=>(z=z*16807%2147483647)/2147483647
const st=[...Array(14)].map(()=>[70+R()*116,R()*296,8+R()*14,R()])
export default(c,t,i)=>{
  const s=t*P,sc=t*128,L=(w,k='#111')=>(c.lineWidth=w,c.strokeStyle=k,c.stroke()),F=k=>(c.fillStyle=k,c.fill())
  const rr=(x,y,w,h,r)=>{c.beginPath();c.moveTo(x+r,y);c.arcTo(x+w,y,x+w,y+h,r);c.arcTo(x+w,y+h,x,y+h,r);c.arcTo(x,y+h,x,y,r);c.arcTo(x,y,x+w,y,r);c.closePath()}
  rr(20,4,216,248,54);F('#1b0d36')
  c.save();c.clip()
  // speed streaks
  for(const[x,y0,l,k]of st){
    const y=((y0-t*296)%296+296)%296-20
    c.beginPath();c.moveTo(x,y);c.lineTo(x,y+l);L(2.5,k<.5?'rgba(255,255,255,.45)':H(k*360+t*360,70))
  }
  // walls: rainbow strata rushing upward
  for(const m of[-1,1]){
    const ex=y=>128+m*(68+Math.sin((y+sc)*P/64)*6+Math.sin((y+sc)*P/128*3)*3)
    c.save();c.beginPath();c.moveTo(128+m*130,-10)
    for(let y=-10;y<=266;y+=6)c.lineTo(ex(y),y)
    c.lineTo(128+m*130,266);c.closePath();c.save();c.clip()
    for(let b=-2;b<28;b++){
      const y=b*16-sc
      c.beginPath();c.moveTo(128+m*40,y+4);c.lineTo(128+m*140,y-20);c.lineTo(128+m*140,y-4);c.lineTo(128+m*40,y+20);c.closePath()
      F(H(b*45,56))
    }
    for(let k=0;k<12;k++){
      const y=((k%4*32+20-sc)%128+128)%128+(k>>2)*128-128
      c.beginPath();c.arc(128+m*(80+(k*5%3)*9),y,3+k%2*2,0,P);F('#111')
    }
    c.restore()
    c.beginPath();for(let y=-10;y<=266;y+=6)c.lineTo(ex(y),y);L(6)
    c.restore()
  }
  // tumbling things
  const at=(x,y,a,f)=>{c.save();c.translate(x,y);c.rotate(a);c.scale(1.2,1.2);f();c.restore()}
  at(88+Math.sin(s)*6,42+Math.cos(s)*5,s,()=>{ // pocket watch
    c.beginPath();c.arc(0,-17,5,0,P);L(5);L(2,'#ffc61a')
    c.beginPath();c.arc(0,0,14,0,P);F('#ffc61a');L(4)
    c.beginPath();c.arc(0,0,9,0,P);F('#fff');L(2)
    c.beginPath();c.moveTo(0,0);c.lineTo(0,-7);c.moveTo(0,0);c.lineTo(Math.cos(-s*4)*6,Math.sin(-s*4)*6);L(2)
  })
  at(170+Math.cos(s)*5,66+Math.sin(s*2)*5,-s,()=>{ // playing card flipping
    c.scale(Math.cos(s*2)||.01,1);rr(-11,-15,22,30,4);F('#fff');L(3.5)
    if(Math.cos(s*2)>0){
      c.beginPath();c.moveTo(0,6);c.bezierCurveTo(-11,-2,-6,-10,0,-4);c.bezierCurveTo(6,-10,11,-2,0,6);F('#ff2a5a')
    }else{rr(-7,-11,14,22,2);F('#ff4fa3')}
  })
  at(86+Math.cos(s)*5,214+Math.sin(s)*4,-s,()=>{ // teacup
    c.beginPath();c.arc(12,-2,6,0,P);L(6);L(2.5,'#ff8ad6')
    c.beginPath();c.moveTo(-14,-8);c.lineTo(14,-8);c.quadraticCurveTo(13,10,0,10);c.quadraticCurveTo(-13,10,-14,-8);F('#ff8ad6');L(3.5)
    c.beginPath();c.ellipse(0,11,16,3.5,0,0,P);F('#fff');L(3)
  })
  at(172+Math.sin(s)*5,212+Math.cos(s)*5,s,()=>{ // key
    c.beginPath();c.arc(-12,0,6,0,P);c.moveTo(-6,0);c.lineTo(14,0);c.moveTo(9,0);c.lineTo(9,6);c.moveTo(14,0);c.lineTo(14,6)
    L(7);L(3.5,'#ffd23a')
  })
  // Alice
  c.translate(128,142+Math.sin(s*2)*3);c.rotate(Math.sin(s)*.1);c.scale(1.3,1.3)
  c.beginPath() // hair streaming up
  for(let a=-.22;a<=1.22;a+=.02){
    const h=Math.PI+a*Math.PI,u=Math.max(0,-Math.sin(h)),r=13+31*u**1.3*(.7+.3*Math.sin(a*P*2.5-s*2))
    c.lineTo(Math.cos(h)*r,-30+Math.sin(h)*r)
  }
  c.closePath();F('#ffd23a');L(3)
  for(const k of[-1,0,1]){
    c.beginPath();c.moveTo(k*5,-42);c.quadraticCurveTo(k*9+Math.sin(s*2+k)*3,-54,k*11,-62+Math.abs(k)*6);L(2,'#d99a00')
  }
  for(const m of[-1,1]){ // legs
    const k=Math.sin(s*2+(m>0?P/2:0))*4
    c.beginPath();c.moveTo(m*5,10);c.lineTo(m*7+k,36);L(8.5);L(4.5,'#fff')
    c.beginPath();c.ellipse(m*7+k+m*2,39,5,3.5,0,0,P);F('#111')
  }
  for(const m of[-1,1]){ // arms up
    const y=-36+Math.sin(s*2+m)*3
    c.beginPath();c.moveTo(m*9,-13);c.quadraticCurveTo(m*24,-14,m*30,y);L(8);L(4,'#ffd9b8')
    c.beginPath();c.arc(m*30,y-1,3.6,0,P);F('#ffd9b8');L(2.5)
  }
  c.beginPath();c.moveTo(-9,-16);c.lineTo(9,-16);c.lineTo(10,2);c.lineTo(-10,2);c.closePath();F('#3a8de0');L(3)
  c.fillStyle='#fff';c.fillRect(-5,-13,10,14)
  for(const m of[-1,1]){c.beginPath();c.arc(m*10,-13,6,0,P);F('#8fd0ff');L(3)}
  c.beginPath();c.arc(0,-30,11,0,P);F('#ffd9b8');L(3)
  c.beginPath();c.arc(0,-31,11.5,P*.56,P*.94);L(3.5)
  c.beginPath();c.moveTo(-9,-39);c.lineTo(-17,-45);c.lineTo(-15,-35);c.closePath();F('#111')
  for(const m of[-1,1]){c.beginPath();c.arc(m*4.2,-30,1.7,0,P);F('#111');c.beginPath();c.arc(m*7,-25.5,2.2,0,P);F('#ff9ab8')}
  c.beginPath();c.ellipse(0,-23.5,1.8,2.4,0,0,P);F('#111')
  // billowing skirt, petticoat, apron
  const g=Math.sin(s*2)*3,w=34+g
  c.beginPath();c.moveTo(-w+3,15);for(let k=0;k<6;k++)c.arc(-w+3+(k+.5)*(w-3)/3,17,(w-3)/6,P/2,0,1);F('#fff');L(2.5)
  c.beginPath();c.moveTo(-9,0);c.quadraticCurveTo(-w,-6,-w,14)
  for(let k=0;k<4;k++)c.quadraticCurveTo(-w+(k+.5)*w/2,22,-w+(k+1)*w/2,14)
  c.quadraticCurveTo(w,-6,9,0);c.closePath();F('#3a8de0');L(3.5)
  c.beginPath();c.moveTo(-6,0);c.lineTo(6,0);c.lineTo(12,17);c.lineTo(-12,17);c.closePath();F('#fff');L(2.5)
  c.restore()
  c.setTransform(1,0,0,1,0,0)
  rr(20,4,216,248,54);L(7)
}
