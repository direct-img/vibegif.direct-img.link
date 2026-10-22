// manga girl with screentone twin tails chomps a big crepe, gets cream on her nose, chews happily, then licks it off cross-eyed
import{createCanvas}from'@napi-rs/canvas'
const{sin,cos,PI,min,max}=Math,T=2*PI
export const frames=20,delay=80,rim=4
const tone=(c,s,r)=>{const k=createCanvas(s,s),x=k.getContext('2d');x.fillStyle='#111';for(const[a,b]of[[0,0],[s,0],[0,s],[s,s],[s/2,s/2]])x.beginPath(),x.arc(a,b,r,0,T),x.fill();return c.createPattern(k,'repeat')}
const ease=u=>(u=max(0,min(1,u)),u*u*(3-2*u))
const eye=(c,x,y,d,lx=0)=>{
  c.fillStyle='#fff';c.beginPath();c.ellipse(x,y,13,16,0,0,T);c.fill()
  c.save();c.beginPath();c.ellipse(x,y,13,16,0,0,T);c.clip();c.beginPath();c.ellipse(x+lx,y+2,10.5,14,0,0,T);c.fillStyle='#111';c.fill();c.fillStyle='#777';c.beginPath();c.ellipse(x+lx,y+13,10,6,0,0,T);c.fill()
  c.fillStyle='#fff';c.beginPath();c.ellipse(x+lx-4,y-4,4,5.5,0,0,T);c.fill();c.beginPath();c.arc(x+lx+4,y+8,2,0,T);c.fill()
  c.save();c.translate(x+lx+5,y-6);c.beginPath();for(let k=0;k<8;k++){const r=k%2?1.2:4,b=k*PI/4;c.lineTo(cos(b)*r,sin(b)*r)}c.fill();c.restore();c.restore()
  c.lineWidth=6;c.beginPath();c.moveTo(x-16,y-5);c.quadraticCurveTo(x,y-20,x+16,y-5);c.moveTo(x+d*14,y-8);c.lineTo(x+d*21,y-13);c.moveTo(x+d*15,y-3);c.lineTo(x+d*21,y-4);c.stroke()
}
const flower=(c,x,y,r,a)=>{c.save();c.translate(x,y);c.rotate(a);c.fillStyle='#fff';c.lineWidth=3;for(let k=0;k<5;k++){const b=k*T/5;c.beginPath();c.ellipse(cos(b)*r*.6,sin(b)*r*.6,r*.5,r*.35,b,0,T);c.fill();c.stroke()}c.fillStyle='#111';c.beginPath();c.arc(0,0,r*.25,0,T);c.fill();c.restore()}
const L=createCanvas(256,256),lc=L.getContext('2d')
const crepe=(x,y,DOT,FINE)=>{
  const c=lc;c.clearRect(0,0,256,256);c.lineCap=c.lineJoin='round';c.strokeStyle='#111';c.save();c.translate(x,y);c.scale(1.1,1.1);c.translate(-x,-y)
  c.lineWidth=6;c.fillStyle='#fff';c.beginPath();c.moveTo(x-30,y-14);c.quadraticCurveTo(x,y-30,x+30,y-14);c.lineTo(x+4,y+44);c.quadraticCurveTo(x,y+50,x-4,y+44);c.closePath();c.fill();c.fillStyle=FINE;c.fill();c.stroke()
  const C=[[x-20,y-24,15],[x,y-30,17],[x+20,y-24,15],[x-10,y-46,14],[x+12,y-46,13],[x+1,y-60,11]]
  c.lineWidth=12;for(const[a,b,r]of C)c.beginPath(),c.arc(a,b,r,0,T),c.stroke()
  c.fillStyle='#fff';for(const[a,b,r]of C)c.beginPath(),c.arc(a,b,r,0,T),c.fill()
  c.lineWidth=3;for(const[a,b,r]of C)c.beginPath(),c.arc(a+2,b+2,r*.6,.1*PI,.7*PI),c.stroke()
  c.lineWidth=4;for(const[a,b,r]of[[x+22,y-40,-.4],[x-24,y-34,.5]]){c.save();c.translate(a,b);c.rotate(r);c.fillStyle='#fff';c.beginPath();c.moveTo(0,12);c.quadraticCurveTo(-13,0,-9,-9);c.quadraticCurveTo(0,-14,9,-9);c.quadraticCurveTo(13,0,0,12);c.fill();c.fillStyle=DOT;c.fill();c.stroke();c.fillStyle='#fff';for(const[p,q]of[[-4,-3],[4,-3],[0,4]])c.beginPath(),c.ellipse(p,q,1.5,2.2,0,0,T),c.fill();c.restore()}
  c.save();c.translate(x+8,y-62);c.rotate(.35);c.fillStyle='#111';c.beginPath();c.roundRect(-4,-26,8,30,3);c.fill();c.strokeStyle='#fff';c.lineWidth=2;c.beginPath();c.moveTo(-1,-22);c.lineTo(-1,-4);c.stroke();c.restore()
  c.lineWidth=6;c.beginPath();c.moveTo(x-30,y-14);c.lineTo(x-24,y-6);c.lineTo(x-16,y-12);c.lineTo(x-8,y-4);c.lineTo(x,y-11);c.lineTo(x+8,y-4);c.lineTo(x+16,y-12);c.lineTo(x+24,y-6);c.lineTo(x+30,y-14);c.fillStyle='#fff';c.fill();c.stroke()
  c.globalCompositeOperation='destination-out';for(const[a,b,r]of[[x-26,y-50,13],[x-14,y-62,10]])c.beginPath(),c.arc(a,b,r,0,T),c.fill()
  c.globalCompositeOperation='source-atop';c.lineWidth=10;for(const[a,b,r]of[[x-26,y-50,13],[x-14,y-62,10]])c.beginPath(),c.arc(a,b,r,0,T),c.stroke()
  c.globalCompositeOperation='source-over';c.restore()
}
export default(c,t)=>{
  const DOT=tone(c,6,1.3),FINE=tone(c,4,.8),HAIR=tone(c,5,1.1)
  const go=t<.25?0:t<.33?ease((t-.25)/.08):t<.4?1:1-ease((t-.4)/.08),bite=t>=.3&&t<.42,chew=t>=.42&&t<.75,lick=t>=.75&&t<.94,cream=t>=.37&&t<.9
  // twin tails
  for(const d of[-1,1]){const w=0;c.lineWidth=6;c.fillStyle='#fff';c.beginPath();c.moveTo(128+d*60,72);c.bezierCurveTo(128+d*112,84,128+d*104+w,170,128+d*92+w,236);c.quadraticCurveTo(128+d*80+w,214,128+d*72,226);c.bezierCurveTo(128+d*82,170,128+d*76,110,128+d*52,92);c.closePath();c.fill();c.fillStyle=HAIR;c.fill();c.stroke()
    c.strokeStyle='#fff';c.lineWidth=4;c.beginPath();c.moveTo(128+d*76,92);c.bezierCurveTo(128+d*96,120,128+d*94,160,128+d*88+w,200);c.stroke();c.strokeStyle='#111'}
  // striped top
  c.lineWidth=6;c.fillStyle='#fff';c.beginPath();c.moveTo(100,190);c.quadraticCurveTo(62,198,54,252);c.lineTo(202,252);c.quadraticCurveTo(194,198,156,190);c.closePath();c.fill()
  c.save();c.clip();c.fillStyle='#111';for(let y=204;y<252;y+=16)c.fillRect(40,y,180,8);c.restore();c.stroke()
  c.fillStyle='#fff';c.beginPath();c.moveTo(102,190);c.quadraticCurveTo(128,212,154,190);c.lineTo(150,186);c.lineTo(106,186);c.fill();c.lineWidth=5;c.stroke()
  // face
  c.lineWidth=6;c.fillStyle='#fff';c.beginPath();c.moveTo(74,96);c.bezierCurveTo(70,152,100,184,128,186);c.bezierCurveTo(156,184,186,152,182,96);c.bezierCurveTo(182,44,74,44,74,96);c.fill();c.stroke()
  if(chew){c.lineWidth=5;for(const x of[103,153])c.beginPath(),c.arc(x,144,12,PI*1.15,PI*1.85),c.stroke()
    const p=1+.25*Math.abs(sin(t*T*6));c.fillStyle='#fff';for(const d of[-1,1])c.beginPath(),c.arc(128+d*42,164,12*p,d<0?PI*.5:-PI*.5,d<0?PI*1.5:PI*.5),c.fill(),c.stroke()
    c.lineWidth=3.5;c.beginPath();c.moveTo(121,170);c.quadraticCurveTo(124,166,128,170);c.quadraticCurveTo(132,166,135,170);c.stroke()}
  else if(bite){c.lineWidth=5;for(const d of[-1,1]){const x=128+d*25;c.beginPath();c.moveTo(x-d*12,130);c.lineTo(x+d*10,140);c.lineTo(x-d*12,150);c.stroke()}}
  else{const lx=lick?[6,-6]:t<.25?[5,5]:[0,0];eye(c,103,140,-1,lx[0]);eye(c,153,140,1,lx[1])
    c.lineWidth=4.5;c.fillStyle='#111';c.beginPath();c.moveTo(116,166);c.quadraticCurveTo(128,186,140,166);c.closePath();c.fill();c.stroke()
    if(lick){const u=ease((t-.75)/.08)*(1-ease((t-.88)/.06));c.fillStyle='#fff';c.lineWidth=4;c.beginPath();c.moveTo(120,170);c.bezierCurveTo(116,164-10*u,120,160-14*u,128,160-14*u);c.bezierCurveTo(136,160-14*u,140,164-10*u,136,170);c.closePath();c.fill();c.fillStyle=DOT;c.fill();c.stroke();c.lineWidth=2.5;c.beginPath();c.moveTo(128,168);c.lineTo(128,164-12*u);c.stroke()}}
  c.lineWidth=2.5;c.beginPath();c.moveTo(128,154);c.lineTo(126,157);c.stroke()
  c.lineWidth=3;for(const d of[-1,1])for(const k of[-6,0,6])c.beginPath(),c.moveTo(128+d*42+k-3,166),c.lineTo(128+d*42+k+3,158),c.stroke()
  if(cream){c.fillStyle='#fff';c.lineWidth=4;c.beginPath();c.arc(124,152,6,0,T);c.arc(131,150,5,0,T);c.stroke();c.beginPath();c.arc(124,152,6,0,T);c.arc(131,150,5,0,T);c.fill()}
  // screentone bangs with a white shine
  c.lineWidth=6;c.fillStyle='#fff';c.beginPath();c.moveTo(70,150)
  c.bezierCurveTo(54,74,88,36,128,36);c.bezierCurveTo(168,36,202,74,186,150)
  c.quadraticCurveTo(186,118,178,104);c.quadraticCurveTo(172,104,166,112);c.quadraticCurveTo(160,98,150,92);c.quadraticCurveTo(144,104,136,110)
  c.quadraticCurveTo(132,96,124,90);c.quadraticCurveTo(118,102,110,108);c.quadraticCurveTo(106,96,96,94);c.quadraticCurveTo(90,104,86,112)
  c.quadraticCurveTo(80,104,78,102);c.quadraticCurveTo(70,122,70,150);c.closePath();c.fill();c.fillStyle=HAIR;c.fill();c.stroke()
  c.strokeStyle='#fff';c.lineWidth=7;for(const[s,e]of[[1.24,1.36],[1.44,1.54],[1.62,1.74]])c.beginPath(),c.arc(128,108,54,PI*s,PI*e),c.stroke()
  c.strokeStyle='#111';c.fillStyle='#111';for(const d of[-1,1])c.beginPath(),c.roundRect(128+d*58-7,66,14,16,4),c.fill()
  if(chew)for(let k=0;k<3;k++){const p=(t*4+k/3)%1;flower(c,[40,214,30][k],[70,64,140][k]-p*20,8+4*sin(PI*p),p*3)}
  if(t<.25){c.fillStyle='#fff';c.lineWidth=3;for(const[x,y,s]of[[232,112,9],[190,96,6]]){const r=s*(1+.3*sin(t*T*8));c.beginPath();c.moveTo(x,y-r);c.quadraticCurveTo(x,y,x+r,y);c.quadraticCurveTo(x,y,x,y+r);c.quadraticCurveTo(x,y,x-r,y);c.quadraticCurveTo(x,y,x,y-r);c.fill();c.stroke()}}
  // crepe in her hand
  const x=208-go*54,y=190+go*34
  for(const[l,st]of[[24,'#111'],[15,'#fff']])c.lineWidth=l,c.strokeStyle=st,c.beginPath(),c.moveTo(x-6,y+16),c.lineTo(x+12,262),c.stroke()
  c.strokeStyle='#111'
  crepe(x,y,DOT,FINE);c.drawImage(L,0,0)
  if(bite){c.lineWidth=5;for(const[a,b]of[[-1,-1],[-1,1],[1,-1]]){c.beginPath();c.moveTo(x-30+a*30,y-70+b*24);c.lineTo(x-30+a*40,y-70+b*32);c.stroke()}}
  c.lineWidth=5;c.fillStyle='#fff';c.beginPath();c.ellipse(x-6,y+14,15,13,.3,0,T);c.fill();c.stroke();c.lineWidth=3;c.beginPath();c.moveTo(x-15,y+9);c.lineTo(x+2,y+7);c.moveTo(x-15,y+17);c.lineTo(x+2,y+15);c.stroke()
}
