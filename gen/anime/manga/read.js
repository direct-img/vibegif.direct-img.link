// red haired girl sprawled over a manga, eyes following the panels, flipping a page and gasping at every turn
const{sin,cos,PI,min}=Math,T=2*PI
export const frames=16,delay=90
const SKIN='#ffe3d1',HAIR='#a68a7b',HD='#7d6355',HL='#e6d5cc',EYE='#20c997',ED='#087f5b',BL='#ffa8a8',TEE='#fff',STR='#74c0fc',COV='#ffd43b',INK='#495057'
const ds=(c,a,b,s,f)=>{for(const[l,k]of[[a,'#111'],[b,s]])c.lineWidth=l,c.strokeStyle=k,c.beginPath(),f(),c.stroke();c.strokeStyle='#111'}
const eye=(c,x,y,d,g,lx)=>{
  c.fillStyle='#fff';c.beginPath();c.ellipse(x,y,14,g?18:15,0,0,T);c.fill()
  c.save();c.clip()
  if(g){c.fillStyle=EYE;c.beginPath();c.arc(x,y,6,0,T);c.fill();c.lineWidth=2.5;c.stroke();c.fillStyle='#111';c.beginPath();c.arc(x,y,2.5,0,T);c.fill()}
  else{c.beginPath();c.ellipse(x+lx,y+6,11.5,14,0,0,T);c.fillStyle=EYE;c.fill();c.lineWidth=2.5;c.stroke();c.save();c.clip();c.fillStyle=ED;c.beginPath();c.ellipse(x+lx,y-3,14,8,0,0,T);c.fill();c.restore();c.fillStyle='#111';c.beginPath();c.ellipse(x+lx,y+8,5.5,7,0,0,T);c.fill();c.fillStyle='#fff';c.beginPath();c.arc(x+lx-4,y+2,4,0,T);c.fill()}
  c.restore()
  c.lineWidth=7;c.beginPath();c.moveTo(x-16,y-(g?8:4));c.quadraticCurveTo(x,y-(g?24:14),x+16,y-(g?8:4));c.moveTo(x+d*15,y-(g?9:5));c.lineTo(x+d*21,y-(g?14:10));c.stroke()
}
const panels=(c,a,b,cc,d)=>{  // a,b: spine far/near, cc,d: outer far/near corner
  const L=(p,q,s)=>[p[0]+(q[0]-p[0])*s,p[1]+(q[1]-p[1])*s],Q=(u,v)=>L(L(a,cc,u),L(b,d,u),v)
  c.strokeStyle=INK;c.lineWidth=2;c.beginPath()
  for(const[u0,v0,u1,v1]of[[.12,.1,.88,.42],[.12,.52,.46,.9],[.56,.52,.88,.9]]){for(const[u,v]of[[u0,v0],[u1,v0],[u1,v1],[u0,v1],[u0,v0]])c.lineTo(...Q(u,v));c.moveTo(...Q(u0,v0))}
  c.stroke();c.strokeStyle='#111'
}
export default(c,t)=>{
  const a=t*T,u=(t*2)%1,fl=u<.375,g=u>=.375&&u<.625,ph=fl?PI*min(1,u/.3):0,lx=g||fl?0:-5+10*((u-.625)/.375)
  c.lineWidth=6;c.fillStyle=TEE;c.beginPath();c.moveTo(66,200);c.quadraticCurveTo(64,152,100,146);c.lineTo(156,146);c.quadraticCurveTo(192,152,190,200);c.closePath();c.fill();c.stroke()
  c.save();c.clip();c.strokeStyle=STR;c.lineWidth=6;c.beginPath();for(let y=156;y<200;y+=13)c.moveTo(60,y),c.lineTo(196,y);c.stroke();c.restore()
  c.beginPath();c.moveTo(66,200);c.quadraticCurveTo(64,152,100,146);c.lineTo(156,146);c.quadraticCurveTo(192,152,190,200);c.lineWidth=6;c.stroke()
  for(const d of[-1,1])ds(c,22,14,TEE,()=>{c.moveTo(128+d*52,166);c.lineTo(128+d*86,206)})
  c.save();c.translate(128,174);c.scale(.78,.78);c.translate(-128,-186)
  c.lineWidth=7;c.fillStyle=HD;c.beginPath();c.moveTo(128,34);c.bezierCurveTo(198,34,210,96,200,146);c.quadraticCurveTo(212,154,216,168);c.quadraticCurveTo(196,168,186,156);c.lineTo(70,156);c.quadraticCurveTo(60,168,40,168);c.quadraticCurveTo(44,154,56,146);c.bezierCurveTo(46,96,58,34,128,34);c.fill();c.stroke()
  c.fillStyle=SKIN;c.beginPath();c.moveTo(74,96);c.bezierCurveTo(70,152,100,184,128,186);c.bezierCurveTo(156,184,186,152,182,96);c.bezierCurveTo(182,44,74,44,74,96);c.fill();c.stroke()
  eye(c,103,140,-1,g,lx);eye(c,153,140,1,g,lx)
  c.fillStyle=BL;for(const d of[-1,1])c.beginPath(),c.ellipse(128+d*44,162,13,7,0,0,T),c.fill()
  c.lineWidth=2.5;for(const d of[-1,1])for(const k of[-5,0,5])c.beginPath(),c.moveTo(128+d*44+k-2,165),c.lineTo(128+d*44+k+2,159),c.stroke()
  c.lineWidth=4.5;c.fillStyle='#c92a2a';c.beginPath()
  if(g)c.ellipse(128,170,7,9,0,0,T),c.fill(),c.stroke();else c.moveTo(121,167),c.quadraticCurveTo(128,173,135,167),c.stroke()
  c.lineWidth=7;c.fillStyle=HAIR;c.beginPath();c.moveTo(66,160)
  c.bezierCurveTo(50,80,88,36,128,36);c.bezierCurveTo(168,36,206,80,190,160)
  c.quadraticCurveTo(188,124,180,106);c.quadraticCurveTo(170,108,162,100);c.quadraticCurveTo(156,90,144,88);c.quadraticCurveTo(144,102,136,108)
  c.quadraticCurveTo(128,100,124,90);c.quadraticCurveTo(116,104,104,108);c.quadraticCurveTo(102,98,94,92);c.quadraticCurveTo(88,104,78,108)
  c.quadraticCurveTo(68,126,66,160);c.closePath();c.fill();c.stroke()
  c.strokeStyle=HL;c.lineWidth=6;for(const[s,e]of[[1.24,1.36],[1.44,1.52],[1.62,1.74]])c.beginPath(),c.arc(128,104,56,PI*s,PI*e),c.stroke()
  for(const r of[.5,-.5])ds(c,12,6,'#ffd43b',()=>{c.moveTo(66+10*r,82-16*r);c.lineTo(86-10*r,72+16*r)})
  c.restore()
  if(g){const s=1+.3*sin(PI*(u-.375)/.25);ds(c,13*s,7*s,'#ffd43b',()=>{c.moveTo(128,16);c.lineTo(128,34+4*s)});c.fillStyle='#ffd43b';c.lineWidth=4;c.beginPath();c.arc(128,47+4*s,4.5*s,0,T);c.fill();c.stroke()
    for(const d of[-1,1])ds(c,7,3,'#fff',()=>{c.moveTo(128+d*22,26);c.lineTo(128+d*32,16)})}
  const sf=[128,186],sn=[128,240],Rf=[184,186],Rn=[208,240],Lf=[72,186],Ln=[48,240]
  c.fillStyle=COV;c.lineWidth=6;c.beginPath();c.moveTo(66,182);c.lineTo(190,182);c.lineTo(216,246);c.lineTo(40,246);c.closePath();c.fill();c.stroke()
  for(const[f,n]of[[Lf,Ln],[Rf,Rn]]){c.fillStyle='#fff';c.lineWidth=4;c.beginPath();c.moveTo(...sf);c.lineTo(...f);c.lineTo(...n);c.lineTo(...sn);c.closePath();c.fill();c.stroke();panels(c,sf,sn,f,n)}
  if(fl){
    const cf=[128+56*cos(ph),186-34*sin(ph)],cn=[128+80*cos(ph),240-48*sin(ph)],lag=.35*sin(ph),bf=[128+56*cos(ph-lag)*.6,186-34*sin(ph-lag)*.6],bn=[128+80*cos(ph-lag)*.6,240-48*sin(ph-lag)*.6]
    c.fillStyle='#f8f9fa';c.lineWidth=4;c.beginPath();c.moveTo(...sf);c.quadraticCurveTo(...bf,...cf);c.lineTo(...cn);c.quadraticCurveTo(...bn,...sn);c.closePath();c.fill();c.stroke()
    if(ph<PI/2)panels(c,sf,sn,cf,cn)
    for(const d of[0,1])ds(c,6,2.5,'#fff',()=>{c.moveTo(cn[0]+18-d*6,cn[1]-20+d*14);c.lineTo(cn[0]+28-d*6,cn[1]-26+d*14)})
  }
  const hr=fl&&ph<PI/2?[128+80*cos(ph)+6,240-48*sin(ph)-4]:[202,232]
  ds(c,20,13,SKIN,()=>{c.moveTo(42,206);c.lineTo(56,232)});ds(c,20,13,SKIN,()=>{c.moveTo(214,206);c.lineTo(...hr)})
  c.lineWidth=5;c.fillStyle=SKIN;c.beginPath();c.ellipse(56,234,9,9,0,0,T);c.fill();c.stroke();c.beginPath();c.ellipse(hr[0],hr[1]+2,9,9,0,0,T);c.fill();c.stroke()
}
