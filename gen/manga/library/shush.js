// librarian with a pencil through her top bun and round glasses, finger to her lips, shh arcs rolling out and a glint across the lenses
import{createCanvas}from'@napi-rs/canvas'
const{sin,cos,PI,max}=Math,T=2*PI
export const frames=16,delay=80,rim=4
const tile=createCanvas(6,6),q=tile.getContext('2d');q.fillStyle='#111';for(const[x,y]of[[1.5,1.5],[4.5,4.5]])q.beginPath(),q.arc(x,y,1.1,0,T),q.fill()
const ht=createCanvas(6,6),h=ht.getContext('2d');h.strokeStyle='#111';h.lineWidth=1.4;for(const o of[-6,0,6])h.beginPath(),h.moveTo(o,6),h.lineTo(o+6,0),h.stroke()
const toned=(c,p)=>{c.fillStyle='#fff';c.fill();c.fillStyle=p;c.fill();c.stroke()}
const face=c=>{c.beginPath();c.moveTo(74,96);c.bezierCurveTo(70,152,100,184,128,186);c.bezierCurveTo(156,184,186,152,182,96);c.bezierCurveTo(182,44,74,44,74,96)}
export default(c,t,i)=>{
  const dot=c.createPattern(tile,'repeat'),hat=c.createPattern(ht,'repeat'),shut=i==3||i==4,g=(t-.55)/.25
  // pencil stuck through the bun, then the bun
  c.save();c.translate(128,30);c.rotate(-.42);c.lineWidth=4;c.fillStyle='#fff';c.beginPath();c.rect(-44,-6,78,12);c.fill();c.stroke()
  c.beginPath();c.moveTo(34,-6);c.lineTo(50,0);c.lineTo(34,6);c.closePath();c.fill();c.stroke();c.fillStyle='#111';c.beginPath();c.moveTo(45,-2);c.lineTo(50,0);c.lineTo(45,2);c.fill()
  c.beginPath();c.rect(-52,-6,8,12);toned(c,dot);c.restore()
  c.lineWidth=6;c.beginPath();c.arc(128,32,23,0,T);toned(c,dot)
  c.lineWidth=2.5;for(const a of[.6,1.2,2])c.beginPath(),c.arc(128,32,14,a,a+.9),c.stroke()
  // back of the hair, pulled up
  c.lineWidth=6;c.beginPath();c.moveTo(128,38);c.bezierCurveTo(196,38,204,96,196,140);c.lineTo(60,140);c.bezierCurveTo(52,96,60,38,128,38);toned(c,dot)
  // cardigan over a white blouse
  c.beginPath();c.moveTo(100,188);c.quadraticCurveTo(62,196,54,250);c.lineTo(202,250);c.quadraticCurveTo(194,196,156,188);c.closePath();toned(c,dot)
  c.fillStyle='#fff';c.lineWidth=4;c.beginPath();c.moveTo(108,189);c.lineTo(118,250);c.lineTo(138,250);c.lineTo(148,189);c.closePath();c.fill();c.stroke()
  for(const d of[-1,1])c.beginPath(),c.moveTo(128,206),c.lineTo(128+d*22,190),c.lineTo(128+d*16,212),c.closePath(),c.fill(),c.stroke()
  c.fillStyle='#111';for(const y of[226,240])c.beginPath(),c.arc(128,y,3,0,T),c.fill()
  c.fillStyle='#fff';c.beginPath();c.rect(116,168,24,24);c.fill();c.lineWidth=5;c.beginPath();c.moveTo(116,168);c.lineTo(116,190);c.moveTo(140,168);c.lineTo(140,190);c.stroke()
  c.lineWidth=6;face(c);c.fill();c.stroke()
  // calm half-lidded eyes behind the glasses
  for(const[x,d]of[[103,-1],[153,1]]){
    if(shut){c.lineWidth=5;c.beginPath();c.arc(x,136,12,.15*PI,.85*PI);c.stroke();continue}
    c.save();c.beginPath();c.rect(x-16,135,32,24);c.clip()
    c.fillStyle='#fff';c.beginPath();c.ellipse(x,142,12,14,0,0,T);c.fill()
    c.fillStyle='#111';c.beginPath();c.ellipse(x,145,9,12,0,0,T);c.fill()
    c.fillStyle='#fff';c.beginPath();c.arc(x-3,142,3.4,0,T);c.fill();c.beginPath();c.arc(x+3,151,1.6,0,T);c.fill();c.restore()
    c.lineWidth=6;c.beginPath();c.moveTo(x-14,136);c.quadraticCurveTo(x,132,x+14,136);c.lineTo(x+d*19,131);c.stroke()
  }
  c.lineWidth=3.5;for(const[x,d]of[[103,1],[153,-1]])c.beginPath(),c.moveTo(x-14,112+d*2),c.quadraticCurveTo(x,107,x+14,112-d*2),c.stroke()
  // round glasses with a glint sweeping across
  c.lineWidth=4.5;for(const x of[103,153])c.beginPath(),c.arc(x,140,20,0,T),c.stroke()
  c.beginPath();c.moveTo(123,138);c.quadraticCurveTo(128,133,133,138);c.moveTo(83,134);c.lineTo(76,130);c.moveTo(173,134);c.lineTo(180,130);c.stroke()
  if(g>0&&g<1)for(const x of[103,153]){c.save();c.beginPath();c.arc(x,140,18,0,T);c.clip();c.fillStyle='#fff';const o=-44+g*88;c.beginPath();c.moveTo(x+o-6,110);c.lineTo(x+o+6,110);c.lineTo(x+o-14,170);c.lineTo(x+o-26,170);c.closePath();c.fill();c.restore()}
  c.lineWidth=2.5;for(const d of[-1,1])for(let k=0;k<3;k++)c.beginPath(),c.moveTo(128+d*44+(k-1)*5-3,170),c.lineTo(128+d*44+(k-1)*5+3,162),c.stroke()
  c.lineWidth=3;c.fillStyle='#fff';c.beginPath();c.ellipse(128,168,6,4,0,0,T);c.fill();c.stroke()
  // center-parted bangs and side locks
  c.lineWidth=6;c.beginPath();c.moveTo(70,140);c.bezierCurveTo(54,70,90,40,128,40);c.bezierCurveTo(166,40,202,70,186,140)
  c.quadraticCurveTo(184,120,174,118);c.quadraticCurveTo(140,110,128,66);c.quadraticCurveTo(116,110,82,118);c.quadraticCurveTo(72,120,70,140);c.closePath();toned(c,dot)
  for(const d of[-1,1])c.beginPath(),c.moveTo(128+d*48,104),c.quadraticCurveTo(128+d*60,142,128+d*52,180),c.quadraticCurveTo(128+d*46,146,128+d*40,108),c.closePath(),toned(c,dot)
  c.fillStyle='#fff';c.beginPath();for(let k=0;k<=24;k++){const a=PI*(1.24+k*.022);c.lineTo(128+(k%2?54:50)*cos(a),106+(k%2?54:50)*sin(a))}for(let k=24;k>=0;k--){const a=PI*(1.24+k*.022);c.lineTo(128+(k%2?46:42)*cos(a),106+(k%2?46:42)*sin(a))}c.fill()
  // hand with one finger up to her lips
  for(const[l,s]of[[30,'#111'],[23,'#fff'],[23,dot]])c.lineWidth=l,c.strokeStyle=s,c.beginPath(),c.moveTo(70,252),c.quadraticCurveTo(84,214,118,200),c.stroke()
  c.strokeStyle='#111';c.fillStyle='#fff';c.lineWidth=4;c.beginPath();c.roundRect(122,148,13,40,6.5);c.fill();c.stroke()
  c.lineWidth=2;c.beginPath();c.arc(128.5,155,4,PI,0);c.stroke()
  c.lineWidth=4;c.beginPath();c.roundRect(110,178,34,26,11);c.fill();c.stroke()
  c.lineWidth=2.5;for(const y of[186,194])c.beginPath(),c.moveTo(114,y),c.quadraticCurveTo(122,y+3,130,y),c.stroke()
  // book stack on the left
  for(const[x,y,w,p]of[[6,228,72,hat],[12,210,64,'#fff'],[2,192,70,dot]]){c.lineWidth=4;c.beginPath();c.roundRect(x,y,w,18,3);toned(c,p);c.fillStyle='#fff';c.beginPath();c.rect(x+w-12,y+3,8,12);c.fill();c.stroke()}
  c.lineWidth=3;c.fillStyle='#fff';c.beginPath();c.moveTo(30,192);c.lineTo(30,178);c.lineTo(36,184);c.lineTo(42,178);c.lineTo(42,192);c.fill();c.stroke()
  // shh arcs rolling out to the right
  c.lineCap='round';for(let k=0;k<3;k++){const u=(k+t*3)%3/3,r=40+u*36,w=1-u;if(w<.08)continue;c.lineWidth=2+4.5*w;c.beginPath();c.arc(150,168,r,-.42,.42);c.stroke()}
}
