// side-view retro teal robot winds up, its chest hatch flips open and a red boxing glove on a coiled spring punches out with a yellow POW burst, then boings back and forth and reels back in
// spring length, hatch open 0..1, lean deg, eye, arm swing, glove dy, ms
const K=[
  [0,0,0,'o',0,0,360],[0,0,-3,'s',-.1,0,110],[0,0,-6,'s',-.25,0,110],[0,1,-6,'s',-.3,0,80],[40,1,2,'w',.5,0,50],
  [62,1,4,'w',.7,0,70],[62,1,4,'w',.7,0,220],[44,1,3,'w',.4,-4,60],[16,1,0,'o',.2,5,60],[40,1,-1,'o',.25,-3,70],
  [22,1,0,'o',.15,3,70],[34,1,0,'o',.2,-2,70],[27,1,0,'o',.15,1,80],[12,1,0,'o',.1,0,70],[0,.4,0,'o',0,0,60],
  [0,0,0,'h',0,0,640],[0,0,0,'b',0,0,90]
]
export const frames=17,delay=K.map(k=>k[6])
export default(c,t,i)=>{
  const[L,D,a,e,s,dy]=K[i],P=Math.PI,F=86,gy=138+dy
  const rr=(x,y,w,h,r)=>{c.beginPath();c.roundRect(x,y,w,h,r)}
  const shell=(x,y,w,h,r,b,s,l)=>{
    rr(x,y,w,h,r);c.fillStyle=b;c.fill()
    c.save();c.clip();c.fillStyle=s;c.fillRect(x,y+h-12,w,12);c.fillRect(x+w-10,y,10,h)
    c.fillStyle=l;c.fillRect(x+8,y+6,w*.5,6);c.restore()
    rr(x,y,w,h,r);c.stroke()
  }
  const T='#5fb3c7',S='#3f8ea3',H='#9fd6e3',D2='#2f6f80'
  c.translate(16,0);c.lineWidth=6
  // legs stay planted
  shell(26,166,16,50,4,S,D2,S);shell(20,212,34,18,7,S,D2,S)
  shell(56,166,16,50,4,T,S,H);shell(50,212,42,18,7,T,S,H)
  // upper body leans around the hips
  c.translate(48,170);c.rotate(a*P/180);c.translate(-48,-170)
  const tip=F+L+54
  if(i==5||i==6){
    const R=i==5?28:38,star=(k,f)=>{c.beginPath();for(let j=0;j<18;j++){const r=(j%2?R*.55:R)*k,q=j*P/9+.2;c.lineTo(tip+r*Math.cos(q),gy+r*Math.sin(q))}c.closePath();c.fillStyle=f;c.fill()}
    star(1,'#ffd23f');c.stroke();star(.55,'#ff8a1f')
  }
  if(i==4){c.strokeStyle='#8a8f98';c.lineWidth=4;for(const y of[110,124,152,166]){c.beginPath();c.moveTo(F+12,y);c.lineTo(F+L-2,y);c.stroke()}c.strokeStyle='#111';c.lineWidth=6}
  // neck and head
  shell(38,94,24,14,3,S,D2,S)
  c.lineWidth=5;c.beginPath();c.moveTo(42,40);c.lineTo(36,18);c.stroke()
  c.fillStyle='#ff4a3d';c.beginPath();c.arc(35,15,7,0,7);c.fill();c.stroke()
  c.lineWidth=6;shell(14,38,72,60,16,T,S,H)
  c.fillStyle='#e8eef2';rr(70,78,22,14,4);c.fill();c.stroke()
  c.lineWidth=3;for(const x of[77,84]){c.beginPath();c.moveTo(x,81);c.lineTo(x,89);c.stroke()}
  c.lineWidth=5;c.fillStyle=H;c.beginPath();c.arc(34,68,8,0,7);c.fill();c.stroke()
  c.beginPath();c.moveTo(30,68);c.lineTo(38,68);c.stroke()
  // eye
  c.fillStyle='#fff8d6'
  if(e=='h'||e=='b'){c.beginPath();e=='h'?c.arc(66,68,9,P*1.1,P*1.9):(c.moveTo(56,64),c.lineTo(76,64));c.stroke()}
  else{
    const r=e=='w'?14:12
    c.beginPath();c.arc(66,63,r,0,7);c.fill()
    c.fillStyle='#111';c.beginPath();c.arc(e=='w'?71:70,63,e=='w'?4:6,0,7);c.fill()
    if(e=='s'){c.fillStyle=S;c.fillRect(50,47,32,14)}
    c.beginPath();c.arc(66,63,r,0,7);c.stroke()
    if(e=='s'){c.beginPath();c.moveTo(52,57);c.lineTo(80,62);c.stroke()}
  }
  // torso with a hatch outline on its front edge
  c.lineWidth=6;shell(8,104,78,70,12,T,S,H)
  c.fillStyle='#ffd23f';for(const y of[116,162])c.beginPath(),c.arc(20,y,4,0,7),c.fill()
  c.fillStyle=D2;c.fillRect(F-4,118,4,40)
  // spring + glove, clipped so they come out of the chest
  if(L>0){
    c.save();c.beginPath();c.rect(F-2,0,300,256);c.clip()
    const n=5,N=n*16,pt=k=>{const u=k/N,q=u*n*2*P;return[F-4+u*(L+4)+Math.sin(q)*4,139+(gy-139)*u+Math.cos(q)*13,Math.sin(q+P/n/16)>0]}
    for(const f of[0,1]){
      c.strokeStyle=f?'#d5dbe2':'#6c7682';c.lineWidth=5
      for(let k=0;k<N;k++){const[x,y,o]=pt(k),[x2,y2]=pt(k+1);if(o==f){c.beginPath();c.moveTo(x,y);c.lineTo(x2,y2);c.stroke()}}
    }
    c.strokeStyle='#111';c.lineWidth=6
    const x=F+L
    rr(x,gy-17,12,34,4);c.fillStyle='#f4f1ea';c.fill();c.stroke()
    c.beginPath();c.ellipse(x+33,gy+1,25,23,0,0,7);c.fillStyle='#e8392f';c.fill()
    c.save();c.clip();c.fillStyle='#b52520';c.fillRect(x,gy+13,70,20);c.fillStyle='#ff7a6b';c.beginPath();c.ellipse(x+36,gy-10,13,5,-.1,0,7);c.fill();c.restore()
    c.beginPath();c.ellipse(x+33,gy+1,25,23,0,0,7);c.stroke()
    c.beginPath();c.ellipse(x+23,gy-18,13,7,-.15,0,7);c.fillStyle='#e8392f';c.fill();c.stroke()
    c.lineWidth=4;c.beginPath();c.arc(x+45,gy+4,10,-P*.5,P*.3);c.stroke()
    c.restore()
  }
  // hatch door, hinged at the top, flips up
  c.save();c.translate(F+2,118);c.rotate(P/2-D*P*.86)
  c.fillStyle=H;c.lineWidth=5;rr(-2,-6,40,12,4);c.fill();c.stroke()
  c.fillStyle='#ffd23f';c.beginPath();c.arc(26,0,3,0,7);c.fill()
  c.fillStyle='#e8eef2';c.beginPath();c.arc(0,0,5,0,7);c.fill();c.stroke();c.restore()
  // near arm with a pincer hand, swings back as the glove fires
  c.save();c.translate(44,122);c.rotate(s);c.lineWidth=6
  c.strokeStyle='#111';c.lineWidth=7;c.beginPath();c.arc(0,46,11,P*.68,P*2.32);c.stroke()
  c.strokeStyle='#c8d0d8';c.lineWidth=3;c.stroke()
  c.strokeStyle='#111';c.lineWidth=6;shell(-9,-8,18,46,8,T,S,H)
  c.restore()
  c.fillStyle='#ffd23f';c.beginPath();c.arc(44,122,4,0,7);c.fill()
}
