// pine wreath with holly and a red bow, two gold bells swinging and jingling in the middle
export const frames=24,delay=50,rim=6
const P=Math.PI*2,O='#1d1418',sn=Math.sin,cs=Math.cos,X=128,Y=136
const rn=n=>{const s=Math.sin(n*78.233+1.7)*43758.5;return s-Math.floor(s)}
// puffs that make up the bumpy ring [x,y,r]
const PF=[];for(let k=0;k<22;k++){const a=k*P/22;PF.push([X+88*cs(a),Y+88*sn(a),14])}
for(let k=0;k<14;k++){const a=k*P/14+.2;PF.push([X+52*cs(a),Y+52*sn(a),11])}
for(let k=0;k<18;k++){const a=k*P/18+.1;PF.push([X+70*cs(a),Y+70*sn(a),19])}
// needle tufts
const ND=[];for(let k=0;k<70;k++){const a=k*P/70+rn(k)*.2,r=54+34*rn(k+99);ND.push([X+r*cs(a),Y+r*sn(a),a+(rn(k+7)-.5)*1.6,k%3])}
const leaf=(c,x,y,a,s)=>{
  c.save();c.translate(x,y);c.rotate(a);c.scale(s,s);c.beginPath();c.moveTo(0,0)
  for(const m of[1,-1]){for(let k=1;k<=3;k++)c.quadraticCurveTo(k*10-5,m*4,k*10,m*(k<3?10:4));c.lineTo(34,0)}
  c.closePath();c.fillStyle='#1f7a45';c.fill();c.lineWidth=3.5/s;c.stroke()
  c.strokeStyle='#5cc47f';c.lineWidth=2/s;c.beginPath();c.moveTo(4,0);c.lineTo(28,0);c.stroke();c.restore()
}
const bell=(c,x,y,a)=>{
  c.save();c.translate(x,y);c.rotate(a)
  c.lineWidth=4.5;c.strokeStyle=O
  // clapper peeks out the mouth and lags behind
  c.fillStyle='#b8862a';c.beginPath();c.arc(-6*sn(a*3),46,7,0,P);c.fill();c.stroke()
  c.fillStyle='#ffd23a';c.beginPath();c.moveTo(-10,4);c.bezierCurveTo(-18,6,-16,30,-26,42);c.quadraticCurveTo(0,52,26,42);c.bezierCurveTo(16,30,18,6,10,4);c.quadraticCurveTo(0,-2,-10,4);c.fill();c.stroke()
  c.fillStyle='#e9a21c';c.beginPath();c.moveTo(4,6);c.bezierCurveTo(12,10,12,30,20,42);c.quadraticCurveTo(10,46,6,46);c.bezierCurveTo(8,30,8,14,4,6);c.fill()
  c.fillStyle='#fff3b0';c.beginPath();c.ellipse(-8,20,3,9,.15,0,P);c.fill()
  c.strokeStyle=O;c.lineWidth=4;c.beginPath();c.moveTo(-24,40);c.quadraticCurveTo(0,48,24,40);c.stroke()
  c.restore()
}
export default(c,t)=>{
  c.strokeStyle=O
  // ribbons and bells hang from the bow knot, swinging out of step: [length, phase, bell x offset]
  const BL=[[72,0,-1],[96,.5,1]],kx=X,ky=42
  const sw=BL.map(([l,f])=>.2*sn(P*(2*t+f))+.06*sn(P*(6*t+f)))
  // wreath ring
  const pf=()=>{c.beginPath();for(const[x,y,r]of PF){c.moveTo(x+r,y);c.arc(x,y,r,0,P)}}
  c.lineWidth=12;pf();c.stroke();c.fillStyle='#237a45';pf();c.fill()
  c.save();pf();c.clip()
  c.lineCap='round';c.lineWidth=4.5
  for(const[x,y,a,k]of ND){c.strokeStyle=['#2f9a58','#3fae67','#1b6b3c'][k];c.beginPath();for(const d of[-.5,0,.5]){c.moveTo(x,y);c.lineTo(x+16*cs(a+d),y+16*sn(a+d))}c.stroke()}
  c.restore()
  // holly + berries around the ring
  c.strokeStyle=O
  for(const a of[.55,1.6,2.6,3.9]){const x=X+71*cs(a),y=Y+71*sn(a);leaf(c,x,y,a+2.1,.9);leaf(c,x,y,a+.9,.9)
    for(const[dx,dy]of[[0,0],[9,-5],[2,10]]){c.fillStyle='#e23b45';c.lineWidth=3;c.beginPath();c.arc(x+dx-4,y+dy-2,6,0,P);c.fill();c.stroke();c.fillStyle='#fff';c.beginPath();c.arc(x+dx-6,y+dy-4,1.6,0,P);c.fill()}}
  // ribbons + bells
  for(const[j,[l,f,o]]of BL.entries()){const a=sw[j],bx=kx+l*sn(-a)+o*10,by=ky+l*cs(a)
    c.lineWidth=9;c.strokeStyle=O;c.beginPath();c.moveTo(kx,ky);c.lineTo(bx,by);c.stroke();c.lineWidth=4;c.strokeStyle='#e23b45';c.stroke()
    bell(c,bx,by,a*1.3)}
  // jingle marks beside the bells at the ends of their swings
  for(const[j,[l,f,o]]of BL.entries()){const a=sw[j];if(Math.abs(sn(P*(2*t+f)))<.7)continue
    const s=a>0?-1:1,bx=kx+l*sn(-a)+o*10,by=ky+l*cs(a)+28
    for(const[w,col]of[[8.5,O],[4,'#ffd23a']]){c.lineWidth=w;c.strokeStyle=col;for(const r of[32,42]){c.beginPath();c.arc(bx,by,r,s>0?-.42:Math.PI-.42,s>0?.42:Math.PI+.42);c.stroke()}}}
  // bow on top
  c.fillStyle='#e23b45';c.lineWidth=5;c.strokeStyle=O
  for(const s of[-1,1]){
    c.beginPath();c.moveTo(X,ky);c.quadraticCurveTo(X+s*20,ky+30,X+s*30,ky+52);c.lineTo(X+s*16,ky+48);c.quadraticCurveTo(X+s*10,ky+28,X,ky);c.fill();c.stroke()
    c.beginPath();c.moveTo(X,ky);c.bezierCurveTo(X+s*18,ky-40,X+s*64,ky-30,X+s*52,ky-2);c.quadraticCurveTo(X+s*34,ky+16,X,ky);c.fill();c.stroke()
    c.fillStyle='#b8283a';c.beginPath();c.moveTo(X+s*8,ky-4);c.quadraticCurveTo(X+s*30,ky-28,X+s*46,ky-8);c.quadraticCurveTo(X+s*28,ky-2,X+s*8,ky-4);c.fill();c.fillStyle='#e23b45'
  }
  c.beginPath();c.ellipse(X,ky,12,11,0,0,P);c.fill();c.stroke()
  c.fillStyle='#ff8f8f';c.beginPath();c.ellipse(X-3,ky-4,4,3,0,0,P);c.fill()
}
