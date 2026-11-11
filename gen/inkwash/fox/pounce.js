// ink wash fox in snow on rice paper, crouching then leaping high and diving nose-first into the snow, snow puff bursting, tail and hind legs waving in the air
const paper=(c,s=7)=>{
  const r=()=>(s=s*16807%2147483647)/2147483647,P=[...Array(160)].map((_,k)=>{
    const e=k/40|0,f=k%40/40,d=9+r()*3.5,w=256-2*d
    return[[d+f*w,d],[256-d,d+f*w],[256-d-f*w,256-d],[d,256-d-f*w]][e]
  }),edge=()=>{c.beginPath();P.forEach(p=>c.lineTo(...p));c.closePath()}
  c.save();edge();c.fillStyle='#f3ecdc';c.fill();c.clip()
  for(let k=0;k<7;k++){
    const x=r()*256,y=r()*256,g=c.createRadialGradient(x,y,0,x,y,40+r()*70)
    g.addColorStop(0,'rgba(190,170,130,.07)');g.addColorStop(1,'rgba(190,170,130,0)')
    c.fillStyle=g;c.fillRect(0,0,256,256)
  }
  for(let k=0;k<170;k++){
    const x=r()*256,y=r()*256,a=r()*6.3,l=8+r()*24
    c.strokeStyle=r()<.7?'rgba(150,128,95,.13)':'rgba(255,253,245,.6)';c.lineWidth=.5+r()*.7
    c.beginPath();c.moveTo(x,y);c.quadraticCurveTo(x+Math.cos(a+.5)*l/2,y+Math.sin(a+.5)*l/2,x+Math.cos(a)*l,y+Math.sin(a)*l);c.stroke()
  }
  c.restore();edge();c.clip()
}
const{sin:S,cos:C,PI,min,max,hypot}=Math,T=PI*2,
R=s=>()=>(s=s*16807%2147483647)/2147483647,
K=(a,v=20)=>`rgba(${v+4},${v},${v-3},${a})`
// brush stroke through points p: width w, alpha (or colour) a, dry-brush hairlines from fraction d, pressure profile f
const B=(c,p,w,a=.85,d=1,f=u=>S(PI*u**.6)**.6)=>{
  const n=p.length-1,m=n*8,g=j=>p[max(0,min(n,j))],o=[]
  for(let k=0;k<=m;k++){
    const u=min(k/8,n-1e-6),i=u|0,v=u-i,
    q=z=>{const[a,b,e,h]=[g(i-1)[z],g(i)[z],g(i+1)[z],g(i+2)[z]];return b+.5*v*(e-a+v*(2*a-5*b+4*e-h+v*(3*(b-e)+h-a)))}
    o.push([q(0),q(1)])
  }
  o.forEach((q,k)=>{
    const[x0,y0]=o[max(0,k-1)],[x1,y1]=o[min(m,k+1)],h=hypot(x1-x0,y1-y0)||1,r=f(k/m)*w/2
    q.push((y0-y1)/h*r,(x1-x0)/h*r)
  })
  // wet part tapers out where the dry-brush hairlines take over
  const e=u=>d<1?max(0,min(1,(d+.1-u)*4)):1
  c.fillStyle=c.strokeStyle=a>0?K(a):a
  c.beginPath()
  for(let k=0;k<=m;k++)c.lineTo(o[k][0]+o[k][2]*e(k/m),o[k][1]+o[k][3]*e(k/m))
  for(let k=m;k>=0;k--)c.lineTo(o[k][0]-o[k][2]*e(k/m),o[k][1]-o[k][3]*e(k/m))
  c.fill()
  for(let j=0;d<1&&j<7;j++){
    c.beginPath();c.lineWidth=max(.5,w*(.06+j*7%3*.035))
    for(let k=max(0,(d-.2)*m|0)+j*3%4;k<=m-j*5%4*2;k++)c.lineTo(o[k][0]+o[k][2]*(j/3-1)*.85,o[k][1]+o[k][3]*(j/3-1)*.85)
    c.stroke()
  }
}
// vermilion seal with uneven edges and carved marks
const seal=(c,x,y,z=15,r=R(5))=>{
  const j=()=>r()*1.4-.7,l=(a,b,d,e)=>{c.moveTo(x+a*z,y+b*z);c.lineTo(x+d*z,y+e*z)}
  c.globalCompositeOperation='source-over';c.filter='none'
  c.fillStyle='rgba(184,50,42,.9)';c.beginPath()
  for(let k=0;k<24;k++){
    const e=k/6|0,f=k%6/6*z
    c.lineTo(...[[x+f+j(),y+j()],[x+z+j(),y+f+j()],[x+z-f+j(),y+z+j()],[x+j(),y+z-f+j()]][e])
  }
  c.fill()
  c.strokeStyle='#f3ecdc';c.lineWidth=z*.1;c.lineCap='butt';c.beginPath()
  l(.22,.26,.78,.24);l(.5,.2,.5,.56);l(.24,.55,.76,.56);l(.3,.56,.24,.8);l(.7,.56,.78,.8);l(.4,.8,.62,.79)
  c.stroke()
}
// put back the sheet's half-transparent deckle pixels (d = pixels grabbed right after paper) so moving ink never alters them
const fix=(c,d)=>{
  const m=c.getImageData(0,0,256,256),e=m.data
  for(let k=0;k<e.length;k+=4)if(d[k+3]<255)for(let j=0;j<4;j++)e[k+j]=d[k+j]
  c.putImageData(m,0,0)
}
const ru=a=>`rgba(188,94,46,${a})`,d=(a,l)=>[C(a)*l,S(a)*l],mix=(a,b,e)=>a+(b-a)*e
export const frames=32,delay=70
export default(c,t)=>{
  paper(c)
  const pd=c.getImageData(0,0,256,256).data,r=R(61),
  // fox at x,y turned by a: e stretches the legs (0 crouched, 1 flying), ta is the tail angle, al its opacity, cl hides what is under the snow
  fox=(x,y,a,e,ta,al,cl)=>{
    c.save()
    cl&&(c.beginPath(),c.rect(0,0,256,194),c.clip())
    c.globalAlpha=al;c.translate(x,y);c.rotate(a)
    const leg=(X,Y,a,b,o)=>{
      const[p,q]=d(a,8),[u,v]=d(b,10)
      B(c,[[X,Y],[X+p,Y+q],[X+p+u,Y+q+v]],4.2,o,1,u=>1-u*.55)
    },[p,q]=d(ta,17),[u,v]=d(ta+.3,36)
    leg(-10,2,mix(1.3,2.9,e),mix(2.3,3.2,e),.55);leg(15,3,mix(1.2,.5,e),mix(1.9,.2,e),.55)
    B(c,[[-15,-1],[-15+p,-1+q],[-15+u,-1+v]],15,ru(.8),.5,u=>S(PI*u**.55)**.5)
    B(c,[[-15+p,-1+q],[-15+u,-1+v]],6,.6,.2,u=>1-u*.5)
    B(c,[[-19,0],[-3,-4],[15,-1]],17,ru(.85),1,u=>.72+S(PI*u)*.28)
    B(c,[[11,-2],[19,-6],[27,-8]],11,ru(.85),1,u=>1-u*.3)
    c.fillStyle=ru(.9);c.beginPath();c.moveTo(21,-14);c.lineTo(38,-5);c.lineTo(23,-1);c.fill()
    c.fillStyle=K(.9)
    c.beginPath();c.moveTo(20,-12);c.lineTo(19,-21);c.lineTo(25,-13);c.moveTo(25,-13);c.lineTo(27,-20);c.lineTo(30,-10);c.fill()
    c.beginPath();c.arc(38,-5,1.5,0,T);c.arc(29,-9,1,0,T);c.fill()
    leg(-13,3,mix(1.1,2.8,e),mix(2.2,3.1,e),.9);leg(12,4,mix(1,.35,e),mix(2,.1,e),.9)
    c.restore()
  }
  c.globalCompositeOperation='multiply'
  // far hill, bare tree, snowy ground with grass
  let g=c.createLinearGradient(0,60,0,104);g.addColorStop(0,K(.16));g.addColorStop(1,K(0))
  c.filter='blur(1px)';c.fillStyle=g;c.beginPath();c.moveTo(0,106)
  for(let x=0;x<=150;x+=3)c.lineTo(x,100-30*max(0,1-Math.abs(x-50)/70)**1.3+S(x*.3)*1.2)
  c.lineTo(150,106);c.fill();c.filter='none'
  B(c,[[230,198],[226,150],[216,96],[220,50]],7,.85,.45,u=>1-u*.7)
  ;[[226,150,244,120],[220,116,198,90],[217,84,236,62],[224,134,206,128]].map(([x,y,X,Y])=>B(c,[[x,y],[(x+X)/2,(y+Y)/2+3],[X,Y]],3,.75,.6,u=>1-u*.8))
  B(c,[[14,201],[70,197],[128,200],[196,196],[244,200]],2.4,.3)
  B(c,[[40,222],[90,218],[130,222]],1.8,.2);B(c,[[160,230],[200,226],[236,229]],1.8,.2)
  ;[[30,200],[36,201],[120,200],[206,197],[200,198]].map(([x,y],k)=>B(c,[[x,y],[x+2-k,y-8],[x+5-k*2,y-14]],1.6,.7))
  // crouch (fading back in at the end of the loop), leap, then stuck in the snow
  const z=t>.9?t-1:t,s=(t-.14)/.36,u=(t-.5)/.3,k=min(1,max(0,(1-t)/.14))
  if(z<.14)fox(72,177+S(z*45)*1.2,-.06+S(z*90)*.05,0,3+S(z*45)*.25,min(1,(z+.1)/.1))
  else if(t<.5)fox(72+98*s,176-352*s*(1-s),Math.atan2(-194*(1-2*s),98)*min(1,s*6),min(1,s*4),3.14+(s-.5)*.8,1,s>.7)
  else{
    c.filter='blur(2px)';c.fillStyle=K(.3*k);c.beginPath();c.ellipse(172,195,13,3,0,0,T);c.fill();c.filter='none'
    fox(170+min(1,u*6),176+min(1,u*6)*7,1.1+min(1,u*6)*.25+S(t*T*4)*.06,.75+S(t*T*5)*.25,3.14+S(t*T*4)*.5,k,1)
  }
  // snow puff: soft cloud plus flying clumps
  if(u>0&&u<1){
    c.filter='blur(4px)';c.fillStyle=K(.32*(1-u))
    c.beginPath();c.ellipse(172,190-u*10,10+u*26,5+u*12,0,0,T);c.fill();c.filter='none'
    c.globalAlpha=(1-u)**.6
    for(let j=0;j<20;j++){
      const a=-PI*(.12+r()*.76),v=44+r()*56,x=172+C(a)*v*u,y=192+S(a)*v*u+60*u*u
      c.fillStyle=c.strokeStyle=K(.6);c.lineWidth=.9
      c.beginPath();c.arc(x,y,1.3+r()*2.2,0,T);j%3?c.stroke():c.fill()
    }
    c.globalAlpha=1
  }
  seal(c,22,216)
  fix(c,pd)
}
