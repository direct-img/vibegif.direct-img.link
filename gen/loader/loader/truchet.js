// indigo panel of 4x4 truchet tiles with thick yellow quarter-arcs, a nonstop wave flips the tiles one after another like cards inside their own squares, each tile's arcs squash to a sliver with rounded ends and open out mirrored so they reconnect into new winding paths
const{cos,PI,abs,max,min}=Math
export const frames=80,delay=40
const S=50,O=28,M=0b1011010011100101,D=.15
const BG='#3d3fa8',AR=['#ffc93c','#e2a52c']
const E=p=>(1-cos(PI*p))/2
// one tile starts flipping every 1/32 of the loop: first a sweep from the top left corner
// (flipping across the vertical axis), then one from the top right (across the horizontal axis)
const L=[];for(let y=0;y<4;y++)for(let x=0;x<4;x++)L.push([x,y])
const A=[...L].sort((p,q)=>p[0]+p[1]-q[0]-q[1]||p[0]-q[0]),B=[...L].sort((p,q)=>3-p[0]+p[1]-(3-q[0]+q[1])||q[0]-p[0])
const G=L.map(q=>[...q,A.indexOf(q)/32,.5+B.indexOf(q)/32])
const Q=c=>{
  const d=c.getImageData(0,0,256,256),D=d.data
  for(let k=0;k<D.length;k+=4)if(D[k+3]){
    D[k+3]=D[k+3]<64?0:D[k+3]<192?128:255
    for(let j=k;j<k+3;j++)D[j]=min(255,D[j]+8&~15)
  }
  c.putImageData(d,0,0)
}
export default(c,t)=>{
  c.beginPath();c.roundRect(O-7,O-7,4*S+14,4*S+14,16);c.fillStyle=BG;c.fill();c.lineWidth=6;c.stroke()
  const h=S/2,Z=G.map(([x,y,a,b])=>{
    // which flip is running (if any) and which way the arcs face right now
    const pa=(t-a+1)%1,pb=(t-b+1)%1,o=(M>>(y*4+x)&1)^(pa<(b-a+1)%1),
      f=pa<D?0:pb<D?1:-1,c0=cos(PI*E(f<0?0:(f?pb:pa)/D))
    return[x,y,f,o,abs(c0)>.97?Math.sign(c0):c0]
  }),
    // is the tile at (x,y) mid-turn; every tile has one arc end at each edge midpoint
    T=(x,y)=>Z.some(z=>z[0]==x&&z[1]==y&&abs(z[4])<1),
    N=[[0,-1],[0,1],[-1,0],[1,0]],
    cap=(x,y,r,q)=>{c.beginPath();c.ellipse(x,y,r,q,0,0,2*PI);c.fill()}
  // resting tiles first, round off their arc ends wherever they meet a turning tile
  Z.sort((p,q)=>(abs(p[4])<1)-(abs(q[4])<1)).forEach(([x,y,f,o,s])=>{
    const m=abs(s)<1,cx=O+x*S+h,cy=O+y*S+h,col=m&&abs(s)<.5?AR[1]:AR[0]
    c.save();c.translate(cx,cy);f?c.scale(1,s):c.scale(s,1)
    // while flipping, draw the face the tile had before the flip; the mirror finishes the job
    if(f<0?o:o^1)c.scale(-1,1)
    c.lineCap='butt';c.lineWidth=13;c.strokeStyle=col
    // arcs run a hair past the cell edge so neighbours join without a seam
    c.beginPath();c.arc(-h,-h,h,-.03,PI/2+.03);c.stroke()
    c.beginPath();c.arc(h,h,h,PI-.03,PI*1.5+.03);c.stroke()
    c.restore()
    // caps squash along with the tile; the four arc ends sit on the four edge midpoints either way round
    const ax=f?1:abs(s),ay=f>0?abs(s):1;c.fillStyle=col
    N.forEach(([dx,dy])=>{
      const X=x+dx,Y=y+dy
      if(X>=0&&X<4&&Y>=0&&Y<4&&(m||T(X,Y)))cap(cx+dx*h*ax,cy+dy*h*ay,6.5*ax,6.5*ay)
    })
  })
  Q(c)
}
