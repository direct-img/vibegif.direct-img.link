// heart-shaped chocolate box: the lid lifts off and stands up behind it to show the chocolates, then closes again
export const frames=30,delay=60,rim=5
const P=Math.PI*2,S=Math.sin,C=Math.cos,cl=v=>v<0?0:v>1?1:v,ez=v=>v*v*(3-2*v)
const L=(a,b,k)=>a.map((v,i)=>v+(b[i]-v)*k)
// heart outline (y up) as a sub-path at x,y, s wide and s*q tall (q squashes it into perspective)
const H=(c,x,y,s,q)=>{for(let k=0;k<80;k++){const a=k/80*P,X=16*S(a)**3,Y=13*C(a)-5*C(2*a)-2*C(3*a)-C(4*a);c[k?'lineTo':'moveTo'](x+X*s,y-Y*s*q)}c.closePath()}
const B=5.4,Y0=150,Q=.6
export default(c,t)=>{
  // lid poses [x,y,scale,squash,rim depth (negative once it stands up),tilt]: shut, lifted, upright clear of the box, propped behind it
  const tip=(s,q)=>17*s*q,dip=Y0-5*B*Q // the lid's point sits just above the notch of the box when it swaps behind
  const k0=[128,Y0-12,5.65,Q,12,0],k1=[132,Y0-52,5.5,.64,8,-.1],k2=[128,dip-3-tip(5.35,.72),5.35,.72,-3,0],k3=[128,dip+32-tip(5.35,.84),5.35,.84,-6,0]
  const seg=[[0,.1,k0,k0],[.1,.27,k0,k1],[.27,.37,k1,k2],[.37,.46,k2,k3],[.46,.7,k3,k3],[.7,.78,k3,k2],[.78,.85,k2,k1],[.85,.94,k1,k0],[.94,1,k0,k0]]
  const g=seg.find(z=>t>=z[0]&&t<z[1]),[x,y,s,q,d,r]=L(g[2],g[3],ez(cl((t-g[0])/(g[1]-g[0])))),back=t>.37&&t<.78
  const land=t>.94?S(Math.PI*(t-.94)/.06):0
  c.translate(128,132);c.scale(.95,.95);c.translate(-128,-128)
  c.lineWidth=6
  // stacked slab: dark sides from depth d up to the face, outlined as one silhouette
  const slab=(x,y,s,q,d,side)=>{
    const n=Math.ceil(Math.abs(d)/2)+1
    c.lineWidth=12;for(let k=0;k<=n;k++){c.beginPath();H(c,x,y+d*k/n,s,q);c.stroke()}
    c.fillStyle=side;for(let k=0;k<=n;k++){c.beginPath();H(c,x,y+d*k/n,s,q);c.fill()}
    c.lineWidth=6
  }
  const lid=()=>{
    c.save();c.translate(x,y);c.rotate(r);c.translate(-x,-y)
    slab(x,y,s,q,d,'#c41d45')
    c.beginPath();H(c,x,y,s,q);c.fillStyle='#ff3d63';c.fill();c.stroke()
    c.save();c.beginPath();H(c,x,y,s,q);c.clip()
    c.beginPath();H(c,x,y,s,q);H(c,x-9,y-9,s,q);c.fillStyle='rgba(120,0,40,.2)';c.fill('evenodd')
    c.lineWidth=3;c.strokeStyle='#ffa3b8';c.beginPath();H(c,x,y+2*q,s*.8,q);c.stroke()
    c.restore()
    // satin shine and a gold bow
    c.beginPath();c.ellipse(x-s*8,y-s*q*7,s*2.2,s*q*1.2,-.5,0,P);c.fillStyle='rgba(255,255,255,.7)';c.fill()
    const bx=x+s*7.5,by=y-s*q*5.5;c.lineWidth=4.5;c.fillStyle='#ffcf3f'
    for(const m of[-1,1]){c.beginPath();c.moveTo(bx+m*2,by+2);c.quadraticCurveTo(bx+m*10,by+16,bx+m*14,by+28);c.lineTo(bx+m*6,by+26);c.lineTo(bx+m*3,by+30);c.quadraticCurveTo(bx,by+16,bx-m*1,by+2);c.fill();c.stroke()}
    for(const m of[-1,1]){c.beginPath();c.moveTo(bx,by);c.bezierCurveTo(bx+m*30,by-26,bx+m*34,by+14,bx,by);c.fill();c.stroke()}
    c.beginPath();c.ellipse(bx,by,6.5,5.5,0,0,P);c.fill();c.stroke()
    c.restore()
  }
  const base=()=>{
    slab(128,Y0,B,Q,22,'#c41d45')
    c.beginPath();H(c,128,Y0,B,Q);c.fillStyle='#ff3d63';c.fill();c.stroke()
    // recessed tray
    c.beginPath();H(c,128,Y0+1,B*.83,Q);c.fillStyle='#3b1a10';c.fill();c.lineWidth=4;c.stroke()
    c.save();c.beginPath();H(c,128,Y0+1,B*.83,Q);c.clip();c.beginPath();H(c,128,Y0+1,B*.83,Q);H(c,128,Y0+9,B*.83,Q);c.fillStyle='#24100a';c.fill('evenodd');c.restore()
    // chocolates, back row first
    const ch=[[-7.2,5.6,0],[7.2,5.6,1],[-9.2,-1.2,2],[0,-.6,3],[9.2,-1.2,1],[-4.4,-7.6,3],[4.4,-7.6,0]]
    for(const[u,v,k]of ch){
      const X=128+u*B,Yc=Y0+4-v*B*Q,R=14.5
      c.lineWidth=4
      c.beginPath();c.ellipse(X,Yc+3,R+3,(R+3)*.6,0,0,P);c.fillStyle='#e9b53a';c.fill();c.stroke()
      const col=['#5a2b17','#9a5530','#f5e3c8','#ff7aa3'][k],top=['#7a3d22','#b86c40','#fff3df','#ffa0bf'][k]
      c.beginPath();c.ellipse(X,Yc,R,R*.6,0,0,Math.PI);c.lineTo(X-R,Yc-6);c.ellipse(X,Yc-6,R,R*.62,0,Math.PI,P);c.closePath();c.fillStyle=col;c.fill();c.stroke()
      c.beginPath();c.ellipse(X,Yc-6,R-3,(R-3)*.55,0,0,P);c.fillStyle=top;c.fill()
      c.lineWidth=2.5;c.strokeStyle=k==2?'#9a5530':k==3?'#fff':'#f5e3c8'
      c.beginPath();for(let j=0;j<=6;j++)c.lineTo(X-9+j*3,Yc-6+(j%2?3:-3));c.stroke();c.strokeStyle='#111'
    }
    c.lineWidth=6
  }
  // base squashes a touch when the lid lands
  c.save();c.translate(128,Y0+44);c.scale(1+.04*land,1-.05*land);c.translate(-128,-Y0-44)
  if(back){
    // lid propped behind the box: hide whatever the box covers
    c.save();c.beginPath();c.rect(0,0,256,256);H(c,128,Y0,B,Q);c.clip('evenodd')
    lid();c.restore()
    base()
  }else{base();lid()}
  c.restore()
  // twinkles while the box is open
  for(const[a,b,X,Yy,R]of[[.42,.6,34,44,17],[.5,.68,224,62,15],[.57,.75,232,150,13]]){
    const u=(t-a)/(b-a);if(u<=0||u>=1)continue
    const z=R*S(Math.PI*u);c.save();c.translate(X,Yy);c.rotate(u*.8)
    c.beginPath();for(let k=0;k<8;k++){const m=k%2?z*.32:z;c.lineTo(m*S(k*P/8),-m*C(k*P/8))}c.closePath()
    c.fillStyle='#ffe15a';c.lineWidth=3.5;c.fill();c.stroke();c.restore()
  }
}
