// lavender-gray haired girl with a scrunchie in her teeth gathering her long hair up, tying a high ponytail that swishes, then pulling it loose again
const{sin,cos,PI,max,min}=Math,T=2*PI
export const frames=20,delay=80
const SKIN='#ffe3d1',HAIR='#b9b8d6',HD='#8d8ab8',HL='#f1f0fa',EYE='#f06595',ED='#a61e4d',HOOD='#74c0fc',HOD='#4dabf7',SCR='#ff8787',SCD='#e03131',BL='#ffa8a8',MO='#c92a2a'
const ease=x=>x<=0?0:x>=1?1:x*x*(3-2*x)
const MOUTH=[128,174],TIE=[128,40]
const eye=(c,x,y,d,u)=>{
  c.fillStyle='#fff';c.beginPath();c.ellipse(x,y,14,17,0,0,T);c.fill()
  c.save();c.beginPath();c.ellipse(x,y+2,11.5,15,0,0,T);c.clip();c.fillStyle=EYE;c.fill();c.fillStyle=ED;c.beginPath();c.ellipse(x,y-8,13,10,0,0,T);c.fill()
  c.fillStyle='#111';c.beginPath();c.ellipse(x,y+3-u,5.5,7.5,0,0,T);c.fill();c.fillStyle='#fff';c.beginPath();c.arc(x-4,y-5-u,4.5,0,T);c.fill();c.beginPath();c.arc(x+5,y+8-u,2,0,T);c.fill();c.restore()
  c.lineWidth=2.5;c.beginPath();c.ellipse(x,y+2,11.5,15,0,0,T);c.stroke()
  c.lineWidth=6;c.beginPath();c.moveTo(x-16,y-6);c.quadraticCurveTo(x,y-20,x+16,y-6);c.moveTo(x+d*15,y-7);c.lineTo(x+d*21,y-12);c.stroke()
}
// puffy scrunchie ring
const scrunchie=(c,x,y,sx,sy)=>{
  c.fillStyle=SCR;c.lineWidth=4;c.beginPath();for(let k=0;k<=24;k++){const a=k*T/24,r=1+.14*(k%2);c.lineTo(x+cos(a)*sx*r,y+sin(a)*sy*r)}c.closePath();c.fill();c.stroke()
  c.fillStyle=SCD;c.beginPath();c.ellipse(x,y,sx*.45,sy*.45,0,0,T);c.fill();c.stroke()
}
export default(c,t)=>{
  const g=ease((t-.12)/.2)-ease((t-.84)/.1),tied=t>=.42&&t<.84
  const al=ease((t-.12)/.18)-ease((t-.42)/.1),ar=max(al,ease((t-.78)/.06)-ease((t-.88)/.06))
  // where the scrunchie is: teeth, carried round the side of her head, on the ponytail, then back to her teeth
  const side=s=>{const u=1-s;return[u*u*MOUTH[0]+2*u*s*226+s*s*TIE[0]+12*s*(1-s),u*u*MOUTH[1]+2*u*s*110+s*s*TIE[1]]}
  const sp=t<.32?MOUTH:t<.42?side(Math.sqrt((t-.32)/.1)):t<.82?TIE:t<.94?side(1-((t-.82)/.12)**2):MOUTH
  const carry=t>=.32&&t<.42||t>=.82&&t<.94,sw=.16*sin(T*(t-.42)/.42*2)
  c.lineWidth=6
  // ponytail sits behind the head, swinging from the tie
  if(tied){
    c.save();c.translate(...TIE);c.rotate(sw)
    c.fillStyle=HAIR;c.beginPath();c.moveTo(-12,4);c.bezierCurveTo(-10,-30,46,-40,70,-6);c.bezierCurveTo(94,30,86,90,96,134);c.bezierCurveTo(70,108,66,60,56,20);c.bezierCurveTo(44,-6,14,-6,12,6);c.closePath();c.fill();c.stroke()
    c.strokeStyle=HD;c.lineWidth=3;c.beginPath();c.moveTo(30,-16);c.bezierCurveTo(64,-14,76,40,84,100);c.stroke();c.strokeStyle='#111'
    c.restore()
  }
  // back hair: long and loose, shrinking into the gathered shape
  const by=250-112*g,bw=86-14*g
  c.fillStyle=HD;c.beginPath();c.moveTo(128,34);c.bezierCurveTo(128+bw,34,128+bw+8,110,128+bw+2,by-20);c.quadraticCurveTo(128+bw-4,by+4,128+bw-24,by)
  c.lineTo(128-bw+24,by);c.quadraticCurveTo(128-bw+4,by+4,128-bw-2,by-20);c.bezierCurveTo(128-bw-8,110,128-bw,34,128,34);c.fill();c.stroke()
  // the bundle she's holding up before it's tied
  if(g>.05&&!tied){c.fillStyle=HAIR;c.beginPath();c.moveTo(108,44);c.quadraticCurveTo(112,44-30*g,128,40-36*g);c.quadraticCurveTo(144,44-30*g,148,44);c.closePath();c.fill();c.stroke()}
  c.fillStyle=HOOD;c.beginPath();c.moveTo(100,190);c.quadraticCurveTo(62,198,54,256);c.lineTo(202,256);c.quadraticCurveTo(194,198,156,190);c.closePath();c.fill();c.stroke()
  c.fillStyle=HOD;for(const d of[-1,1])c.beginPath(),c.moveTo(128+d*6,194),c.quadraticCurveTo(128+d*44,190,128+d*52,214),c.quadraticCurveTo(128+d*30,206,128+d*6,214),c.closePath(),c.fill(),c.stroke()
  c.lineWidth=4;for(const d of[-1,1])c.beginPath(),c.moveTo(128+d*12,212),c.lineTo(128+d*14,240),c.stroke()
  c.fillStyle=SKIN;c.lineWidth=6;c.beginPath();c.moveTo(116,168);c.lineTo(116,194);c.lineTo(140,194);c.lineTo(140,168);c.fill();c.beginPath();c.moveTo(116,168);c.lineTo(116,192);c.moveTo(140,168);c.lineTo(140,192);c.stroke()
  // arms up behind her head
  const hands=[]
  for(const[d,a]of[[-1,al],[1,ar]]){
    if(a<.02)continue
    // elbows and hands swing out wide on the way up and down instead of crossing the chest
    const q=(p0,p1,p2)=>[0,1].map(i=>(1-a)*(1-a)*p0[i]+2*a*(1-a)*p1[i]+a*a*p2[i])
    const hp=d>0&&carry?sp:[128+d*60,58],e=q([128+d*70,282],[128+d*126,214],[128+d*110,116]),h=q([128+d*64,310],[128+d*134,170],hp)
    for(const[l,s]of[[28,'#111'],[18,HOOD]])c.lineWidth=l,c.strokeStyle=s,c.beginPath(),c.moveTo(128+d*46,216),c.lineTo(...e),c.lineTo(...h),c.stroke()
    hands.push(h)
  }
  c.strokeStyle='#111';c.lineWidth=6
  c.fillStyle=SKIN;c.beginPath();c.moveTo(74,96);c.bezierCurveTo(70,152,100,184,128,186);c.bezierCurveTo(156,184,186,152,182,96);c.bezierCurveTo(182,44,74,44,74,96);c.fill();c.stroke()
  if(tied){c.lineWidth=6;for(const x of[103,153])c.beginPath(),c.arc(x,146,13,PI*1.15,PI*1.85),c.stroke()}
  else{const u=g>.3?6:0;eye(c,103,140,-1,u);eye(c,153,140,1,u)}
  c.fillStyle=BL;for(const d of[-1,1])c.beginPath(),c.ellipse(128+d*44,160,13,6,0,0,T),c.fill()
  c.lineWidth=3.5;c.fillStyle=MO
  if(tied){c.beginPath();c.moveTo(116,164);c.quadraticCurveTo(128,184,140,164);c.closePath();c.fill();c.stroke()}
  else{c.beginPath();c.ellipse(128,172,9,6,0,0,T);c.fill();c.stroke()}
  // side locks framing the face, short once the hair is gathered
  const sy=232-84*g
  c.lineWidth=6;c.fillStyle=HAIR
  for(const d of[-1,1])c.beginPath(),c.moveTo(128+d*52,100),c.quadraticCurveTo(128+d*64,sy-40,128+d*56,sy),c.quadraticCurveTo(128+d*48,sy-30,128+d*40,120),c.closePath(),c.fill(),c.stroke()
  c.beginPath();c.moveTo(70,140);c.bezierCurveTo(54,74,88,36,128,36);c.bezierCurveTo(168,36,202,74,186,140)
  c.quadraticCurveTo(184,112,178,100);c.quadraticCurveTo(168,100,162,114);c.quadraticCurveTo(156,98,144,94);c.quadraticCurveTo(140,106,130,112)
  c.quadraticCurveTo(124,98,112,94);c.quadraticCurveTo(108,106,98,112);c.quadraticCurveTo(92,98,84,98);c.quadraticCurveTo(78,110,78,104)
  c.quadraticCurveTo(70,120,70,140);c.closePath();c.fill();c.stroke()
  c.strokeStyle=HL;c.lineWidth=5;for(const[a,e]of[[1.24,1.36],[1.44,1.52],[1.62,1.74]])c.beginPath(),c.arc(128,102,56,PI*a,PI*e),c.stroke()
  c.strokeStyle='#111'
  // scrunchie: squashed in her teeth, upright on the ponytail
  const m=(sp[1]-TIE[1])/(MOUTH[1]-TIE[1])
  scrunchie(c,...sp,13-3*m,8+6*(1-m)*(tied?1:.6))
  c.lineWidth=5;c.fillStyle=SKIN;for(const[x,y]of hands)c.beginPath(),c.ellipse(x,y+6,11,12,0,0,T),c.fill(),c.stroke()
  if(tied&&t<.56){c.fillStyle='#ffd43b';c.lineWidth=3.5;const r=12*sin(PI*(t-.42)/.14);for(const[x,y]of[[96,24],[176,44]]){c.beginPath();c.moveTo(x,y-r);c.quadraticCurveTo(x+r*.2,y-r*.2,x+r,y);c.quadraticCurveTo(x+r*.2,y+r*.2,x,y+r);c.quadraticCurveTo(x-r*.2,y+r*.2,x-r,y);c.quadraticCurveTo(x-r*.2,y-r*.2,x,y-r);c.fill();c.stroke()}}
}
