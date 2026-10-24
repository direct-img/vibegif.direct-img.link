// someone off-screen explains charts and jargon while a guy smiles politely and nods along, his thought bubble pure tv static
const{sin,cos,PI,min,max,abs}=Math,T=2*PI
export const frames=16,delay=90,rim=3
const BG='#fff0f6',SKIN='#ffd3b0',HAIR='#e8590c',SH='#20c997',SB='#fff',TX='#868e96'
const rnd=s=>{s=sin(s*127.1)*43758.5453;return s-Math.floor(s)}
export default(c,t,i)=>{
  const nd=max(0,sin(T*t*2))**1.5,hx=150,hy=168+8*nd,tilt=.06*nd
  c.save();c.beginPath();c.roundRect(6,6,244,244,28);c.fillStyle=BG;c.fill();c.clip()
  c.strokeStyle='#111';c.lineWidth=6;c.fillStyle=SB
  c.beginPath();c.moveTo(-4,64);c.lineTo(20,54);c.lineTo(20,24);c.quadraticCurveTo(20,16,28,16);c.lineTo(110,16);c.quadraticCurveTo(118,16,118,24);c.lineTo(118,100);c.quadraticCurveTo(118,108,110,108);c.lineTo(28,108);c.quadraticCurveTo(20,108,20,100);c.lineTo(20,74);c.closePath();c.fill();c.stroke()
  c.save();c.beginPath();c.rect(24,20,90,84);c.clip()
  const sc=t*96
  for(let k=0;k<8;k++){
    const y=26+k*24-sc%24,n=Math.floor(sc/24)+k
    if(n%4==2){c.fillStyle='#4dabf7';c.lineWidth=3;for(let b=0;b<4;b++){const h=6+14*rnd(n*7+b);c.beginPath();c.rect(32+b*14,y+16-h,10,h);c.fill();c.stroke()}c.strokeStyle='#e64980';c.lineWidth=3;c.beginPath();c.moveTo(92,y+16);c.lineTo(98,y+4);c.lineTo(104,y+10);c.lineTo(110,y-2);c.stroke();c.strokeStyle='#111'}
    else{c.strokeStyle=TX;c.lineWidth=6;c.beginPath();let x=32;while(x<104){const w=8+18*rnd(n*13+x);c.moveTo(x,y+6);c.lineTo(min(x+w,106),y+6);x+=w+10}c.stroke();c.strokeStyle='#111'}
  }
  c.restore()
  c.lineWidth=6;c.fillStyle=SH;c.beginPath();c.moveTo(70,262);c.quadraticCurveTo(72,216,hx,212);c.quadraticCurveTo(228,216,232,262);c.closePath();c.fill();c.stroke()
  c.fillStyle='#fff';c.lineWidth=5;for(const d of[-1,1])c.beginPath(),c.moveTo(hx,226),c.lineTo(hx+d*22,212),c.lineTo(hx+d*6,208),c.closePath(),c.fill(),c.stroke()
  c.save();c.translate(hx,hy);c.rotate(tilt)
  c.lineWidth=6;c.fillStyle=SKIN;c.beginPath();c.ellipse(-46,6,9,13,0,0,T);c.ellipse(46,6,9,13,0,0,T);c.fill();c.stroke()
  c.beginPath();c.arc(0,0,46,0,T);c.fill();c.stroke()
  c.fillStyle=HAIR;c.beginPath();c.moveTo(-46,-2);c.quadraticCurveTo(-50,-50,-4,-48);c.quadraticCurveTo(44,-50,46,-4);c.quadraticCurveTo(30,-22,10,-20);c.quadraticCurveTo(14,-30,6,-34);c.quadraticCurveTo(-6,-20,-26,-18);c.quadraticCurveTo(-40,-14,-46,-2);c.fill();c.stroke()
  c.fillStyle='#fff';c.lineWidth=4;for(const d of[-1,1])c.beginPath(),c.arc(d*17-4,2,10,0,T),c.fill(),c.stroke()
  c.fillStyle='#111';for(const d of[-1,1])c.beginPath(),c.arc(d*17-7,3,3.5,0,T),c.fill()
  c.lineWidth=4;c.beginPath();for(const d of[-1,1])c.moveTo(d*17-12,-16+d*0),c.quadraticCurveTo(d*17-4,-22,d*17+4,-16);c.stroke()
  c.lineWidth=5;c.beginPath();c.moveTo(-20,22);c.quadraticCurveTo(-4,32,14,22);c.stroke()
  c.lineWidth=3;c.beginPath();c.moveTo(-22,19);c.lineTo(-19,25);c.moveTo(16,19);c.lineTo(13,25);c.stroke()
  c.fillStyle='#ffa8a8';for(const d of[-1,1])c.beginPath(),c.ellipse(d*28-4,16,7,4,0,0,T),c.fill()
  const sd=(t*2)%1;c.fillStyle='#74c0fc';c.lineWidth=3;c.beginPath();c.moveTo(38,-26+sd*10);c.quadraticCurveTo(46,-12+sd*10,38,-8+sd*10);c.quadraticCurveTo(30,-12+sd*10,38,-26+sd*10);c.fill();c.stroke()
  c.restore()
  c.strokeStyle='#111';c.lineWidth=5;c.fillStyle='#fff'
  for(const[x,y,r]of[[176,116,6],[188,102,9]])c.beginPath(),c.arc(x,y,r,0,T),c.fill(),c.stroke()
  const B=[[166,56,30],[196,44,30],[222,62,24],[204,80,26],[170,82,24],[148,68,22]]
  c.lineWidth=12;for(const[x,y,r]of B)c.beginPath(),c.arc(x,y,r,0,T),c.stroke()
  c.save();c.beginPath();for(const[x,y,r]of B)c.moveTo(x+r,y),c.arc(x,y,r,0,T);c.clip()
  const G=['#495057','#868e96','#ced4da','#f8f9fa','#212529'],Z=7
  for(let y=14;y<112;y+=Z)for(let x=120;x<250;x+=Z){c.fillStyle=G[Math.floor(rnd(x*.13+y*7.7+i*31.3)*5)];c.fillRect(x,y,Z,Z)}
  const by=14+((t*3)%1)*98;c.fillStyle='rgba(255,255,255,.35)';c.fillRect(120,by,130,10)
  c.restore()
  c.restore();c.lineWidth=6;c.strokeStyle='#111';c.beginPath();c.roundRect(6,6,244,244,28);c.stroke()
}
