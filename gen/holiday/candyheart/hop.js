// three pastel conversation-heart candies hopping in turn, squashing as they take off and land
export const frames=24,delay=62,rim=5
const P=Math.PI*2,S=Math.sin,C=Math.cos
// candy heart outline, y up, ~32 wide, origin at the middle
const H=(c,x,y,s)=>{for(let k=0;k<72;k++){const a=k/72*P,X=16*S(a)**3,Y=13*C(a)-5*C(2*a)-2*C(3*a)-C(4*a);c[k?'lineTo':'moveTo'](x+X*s,y-(Y+2.5)*s)}c.closePath()}
// hop curve for local phase u: [lift, squash, tilt]
const hop=u=>{
  if(u<.14){const k=S(Math.PI*u/.14);return[0,1-.16*k,0]}
  if(u<.52){const v=(u-.14)/.38;return[S(Math.PI*v),1+.1*C(Math.PI*v)*(v<.5?1:.6),.14*S(P*v)]}
  if(u<.66){const k=S(Math.PI*(u-.52)/.14);return[0,1-.2*k,0]}
  return[0,1,0]
}
export default(c,t)=>{
  const hearts=[ // x, ground y, scale, face, side, words, phase, hop height
    [68,148,2.6,'#c9f2d4','#8fd6a8',['HUG','ME'],1/3,42],
    [188,148,2.6,'#fff0a3','#f1cf5c',['XO','XO'],2/3,42],
    [128,230,3.3,'#ffbfd2','#f08cab',['BE','MINE'],0,50]]
  for(const[x,g,s,f,sd,w,ph,hh]of hearts){
    const[l,q,a]=hop((t-ph+1)%1),h=14.5*s
    c.save();c.translate(x,g-l*hh);c.scale(1/Math.sqrt(q),q);c.rotate(a*(x<128?-1:1));c.translate(0,-h)
    // candy thickness: stacked darker copies, outlined once around the whole slab
    c.lineWidth=12;for(let k=0;k<=4;k++){c.beginPath();H(c,0,2*k,s);c.stroke()}
    c.fillStyle=sd;for(let k=0;k<=4;k++){c.beginPath();H(c,0,2*k,s);c.fill()}
    c.lineWidth=5;c.beginPath();H(c,0,0,s);c.fillStyle=f;c.fill();c.stroke()
    // chalky shine
    c.beginPath();c.ellipse(-8.5*s,-6.5*s,2.6*s,1.5*s,-.7,0,P);c.fillStyle='rgba(255,255,255,.75)';c.fill()
    // printed words
    c.fillStyle='#e0406b';c.font=`bold ${Math.round(6*s)}px DejaVu Sans`;c.textAlign='center';c.textBaseline='middle'
    c.save();c.rotate(-.08);c.fillText(w[0],0,-1.2*s);c.fillText(w[1],0,5.2*s);c.restore()
    c.restore()
  }
}
