// ink wash wooden water wheel turning beside a little thatched mill, water spilling off its paddles
const{sin,cos,PI,abs,min,max,floor,hypot,atan2,exp}=Math,T=2*PI
const K=(a,r=20,g=18,b=16)=>`rgba(${r},${g},${b},${a})`
const R=s=>(s=sin(s*127.1+3.7)*43758.5453)-floor(s)
// quadratic curve as a function of u
const Q=(a,b,p,q,x,y)=>u=>[(1-u)**2*a+2*u*(1-u)*p+u*u*x,(1-u)**2*b+2*u*(1-u)*q+u*u*y]
// tapered brush stroke along f(u) with width w, ink a, pressure p
const B=(c,f,w,a,n=20,p=u=>sin(PI*min(1,max(0,u))**.6)**.7)=>{
  const l=[],r=[]
  for(let i=0;i<=n;i++){
    const u=i/n,[x,y]=f(u),[x1,y1]=f(u+.01),[x0,y0]=f(u-.01),d=hypot(x1-x0,y1-y0)||1,h=w*p(u)/2,nx=(y0-y1)/d*h,ny=(x1-x0)/d*h
    l.push([x+nx,y+ny]);r.unshift([x-nx,y-ny])
  }
  c.beginPath();[...l,...r].map(([x,y],i)=>i?c.lineTo(x,y):c.moveTo(x,y));c.closePath()
  c.fillStyle=a>=0?K(a):a;c.fill()
}
// dry-brush hairlines along f, k hairs across width w, seeded gaps
const D=(c,f,w,a,k=5,s=1,g=.3,lw=.9)=>{
  c.lineWidth=lw;c.strokeStyle=a>=0?K(a):a
  for(let j=0;j<k;j++){
    const o=(k>1?j/(k-1)-.5:0)*w;let on=0
    c.beginPath()
    for(let i=0;i<=30;i++){
      const u=i/30,[x,y]=f(u),[x1,y1]=f(u+.01),d=hypot(x1-x,y1-y)||1,v=R(s+j*7+floor(i/3)*13)>g,X=x-(y1-y)/d*o,Y=y+(x1-x)/d*o
      v&&(on?c.lineTo(X,Y):c.moveTo(X,Y));on=v
    }
    c.stroke()
  }
}
// smooth closed blob through points
const P=(c,q)=>{
  const n=q.length,m=i=>[(q[i%n][0]+q[(i+1)%n][0])/2,(q[i%n][1]+q[(i+1)%n][1])/2]
  c.beginPath();c.moveTo(...m(0))
  for(let i=1;i<=n;i++)c.quadraticCurveTo(...q[i%n],...m(i))
}
// wet wash: blurred blob
const W=(c,q,a,b=4)=>{c.save();c.filter=`blur(${b}px)`;P(c,q);c.fillStyle=a>=0?K(a):a;c.fill();c.restore()}
// soft round dab
const O=(c,x,y,r,a,sx=1)=>{
  const g=c.createRadialGradient(0,0,0,0,0,r)
  g.addColorStop(0,a>=0?K(a):a);g.addColorStop(.55,a>=0?K(a*.8):a);g.addColorStop(1,a>=0?K(0):'rgba(0,0,0,0)')
  c.save();c.translate(x,y);c.scale(sx,1);c.fillStyle=g;c.beginPath();c.arc(0,0,r,0,T);c.fill();c.restore()
}
// run fn with blur
const F=(c,b,fn)=>{c.save();c.filter=`blur(${b}px)`;fn();c.restore()}
// run fn as an eraser (cut-outs for light)
const E=(c,fn)=>{c.save();c.globalCompositeOperation='destination-out';fn();c.restore()}
// run fn multiplied over existing ink
const M=(c,fn)=>{c.save();c.globalCompositeOperation='multiply';fn();c.restore()}
const fade=(c,w=16)=>{
  c.save();c.globalCompositeOperation='destination-out'
  for(const[x0,y0,x1,y1]of[[0,0,w,0],[256,0,256-w,0],[0,0,0,w],[0,256,0,256-w]]){
    const g=c.createLinearGradient(x0,y0,x1,y1)
    g.addColorStop(0,'#000');g.addColorStop(1,'rgba(0,0,0,0)')
    c.fillStyle=g;c.fillRect(0,0,256,256)
  }
  c.restore()
}
const snap=(c,s=8,a=4)=>{
  const m=c.getImageData(0,0,256,256),d=m.data
  for(let k=0;k<d.length;k+=4)if(d[k+3]){for(let j=0;j<3;j++)d[k+j]=Math.round(d[k+j]/s)*s;d[k+3]=Math.min(255,Math.round(d[k+3]/a)*a)}
  c.putImageData(m,0,0)
}

export const frames=24,delay=80,dither=true

export default(c,t)=>{
  const X=98,Y=116,r=60,a0=t*T/8,
  pt=(a,k)=>[X+k*r*.92*cos(a),Y+k*r*sin(a)]
  // mill behind the wheel: heavy thatch, open wall with posts and a dark doorway
  M(c,()=>{
    F(c,1.5,()=>W(c,[[152,108],[176,72],[200,54],[222,60],[240,84],[252,110],[228,116],[176,115]],.4,1))
    B(c,Q(150,110,170,74,202,54),11,.88,14,u=>.4+.6*u)
    B(c,Q(202,54,228,62,250,106),5,.6,14,u=>1-u*.7)
    for(let j=0;j<7;j++){
      const x=160+j*14
      B(c,Q(x,106+R(j)*3,x-1+R(j+3)*3,112,x-2+R(j+5)*4,118+R(j+7)*5),5,.8,6,u=>1-u*.8)
    }
  })
  D(c,Q(196,64,208,84,214,108),18,.75,5,3,.4)
  D(c,Q(214,66,232,86,240,106),12,.55,4,5,.45)
  D(c,Q(178,82,176,96,170,108),10,.6,3,7,.45)
  B(c,Q(170,118,171,146,169,180),3.2,.82,8,u=>1-u*.4)
  B(c,Q(240,116,241,146,240,176),2.6,.7,8,u=>1-u*.4)
  B(c,Q(200,140,201,160,200,180),10,.84,6,u=>1-u*.15)
  D(c,Q(222,124,223,148,222,174),12,.4,3,8,.5)
  B(c,Q(160,182,206,186,250,180),2,.5,12)
  // wheel: brushed rim in eight loaded strokes, dry inner rim, spokes and paddle boards
  M(c,()=>{
    for(let j=0;j<8;j++){
      const a=a0+j*T/8
      B(c,u=>pt(a+.03+u*T/8*.98,1+.008*sin(u*T)),7,.84,12,u=>.45+.55*sin(PI*u**.7)**.6)
      B(c,Q(...pt(a,.08),...pt(a+.05,.5),...pt(a,.98)),5,.86,10,u=>.45+.55*(1-u)**2+.25*u**4)
      B(c,Q(...pt(a-.02,.86),...pt(a+.02,1.05),...pt(a-.03,1.24)),8.5,.93,6,u=>1-u*.35)
    }
    O(c,X,Y,9,.93)
  })
  for(let j=0;j<8;j++)D(c,u=>pt(a0+j*T/8+.08+u*T/8*.8,.76),4,.6,2,3,.3,1.1)
  E(c,()=>O(c,X,Y,2.6,.9))
  // water lifted by the paddles on the rising side, streaming and dripping back
  for(let j=0;j<16;j++){
    const a=a0+j*T/8,k=(a%T-PI*.52)/(PI*.9)
    if(k<0||k>1)continue
    const m=(1-k)**.8,[x,y]=pt(a,1.22)
    for(let i=0;i<3;i++){
      const o=(i-1)*3.5,l=min(186-y,10+46*m*(.6+.4*R(i+2)))
      if(l<3)continue
      B(c,Q(x+o,y,x+o-.5,y+l*.5,x+o+R(i)*2-1,y+l),1+2*m,.6*m**.6,8,u=>1-u*.85)
      const p=(t*3+i/3+R(i+5))%1,yd=y+l+p*p*(190-y-l)
      yd<190&&O(c,x+o,yd,1.7,.7*m,.7)
    }
  }
  // stream below: loose sweeps with cut-out ripples moving off
  M(c,()=>F(c,2,()=>{
    B(c,Q(18,186,90,178,186,190),15,.36,16)
    B(c,Q(70,204,140,198,230,208),10,.24,16)
    B(c,Q(10,206,34,202,62,208),6,.2,10)
  }))
  D(c,Q(40,194,110,188,206,198),5,.5,2,12,.5)
  E(c,()=>{
    for(let j=0;j<3;j++){
      const p=(t+j/3)%1
      c.strokeStyle=K(.9*sin(PI*p));c.lineWidth=1.7
      c.beginPath();c.ellipse(46,188,5+p*26,1.4+p*5,0,PI*.05,PI*.9);c.stroke()
      c.beginPath();c.ellipse(46,188,5+p*26,1.4+p*5,0,PI*1.15,PI*1.8);c.stroke()
      D(c,Q(80+p*40,183,110+p*40,180,140+p*40,184),1,K(.8*sin(PI*p)),1,j,.3,1.5)
    }
  })
  // splash where the drips land
  for(let j=0;j<5;j++){
    const p=(t*2+j/5)%1,x=44+(j-2)*5*(.4+p),y=184-sin(PI*p)*(7+R(j)*6)
    O(c,x,y,1.5,.6*(1-p))
  }
  fade(c);snap(c)
}
