// ink wash figure flowing through a slow tai chi cloud hands movement in a few bold strokes, with a faint trailing echo
export const frames = 30, delay = 90, dither = true
const { sin, cos, PI, min, max, abs, hypot, floor } = Math, T = PI * 2
const I = (a, k) => `rgba(${k || '20,18,16'},${a})`
const R = s => (s = sin(s * 127.1 + 3.7) * 43758.5453) - floor(s)
const cl = (x, a = 0, b = 1) => min(b, max(a, x))
// quadratic curve through control points
const Q = (a, b, d) => u => [0, 1].map(k => (1 - u) ** 2 * a[k] + 2 * u * (1 - u) * b[k] + u * u * d[k])
// smooth curve through a list of points
const C = p => u => {
  const n = p.length - 1, k = min(n - 1, floor(u = cl(u, 0, 1.01) * n)), f = u - k, g = j => p[cl(k + j, 0, n)]
  return [0, 1].map(j => .5 * (2 * g(0)[j] + (g(1)[j] - g(-1)[j]) * f + (2 * g(-1)[j] - 5 * g(0)[j] + 4 * g(1)[j] - g(2)[j]) * f * f + (3 * g(0)[j] - g(-1)[j] - 3 * g(1)[j] + g(2)[j]) * f ** 3))
}
// brush stroke: P(u) centerline, W(u) half width, a alpha, e painted end, d where dry brush starts, b blur, r rounded start
const S = (c, P, W, a, { e = 1, d = 2, b = .7, n = 40, h = 7, s = 1, r = .06, k: hw = 1, i: K, x = 1 } = {}) => {
  if (e <= 0) return
  e = min(e, 1)
  const N = u => { const [x, y] = P(u), [X, Y] = P(u + .004), l = hypot(X - x, Y - y) || 1; return [x, y, (y - Y) / l, (X - x) / l] }
  const m = min(e, d + .12), L = [], G = []
  for (let k = 0; k <= n; k++) {
    const u = m * k / n, [x, y, nx, ny] = N(u), w = W(u) * cl((m - u) / .07) ** .5 * cl((u + .004) / r) ** .5
    L.push([x + nx * w, y + ny * w]); G.unshift([x - nx * w, y - ny * w])
  }
  c.save(); c.filter = `blur(${b}px)`; c.fillStyle = I(a, K); c.beginPath()
  for (const [x, y] of [...L, ...G]) c.lineTo(x, y)
  c.fill(); c.filter = 'blur(.4px)'
  c.lineCap = 'butt'
  for (let j = 0; j < h && e > d - .3; j++) {
    const o = ((j + .5) / h * 2 - 1) * .9, q = R(j * 3 + s), u0 = d - .3 * q, u1 = min(e, d + (1 - d) * (1 - .55 * o * o - .25 * q))
    for (const v of [1, 0]) {
      // v: pale streaks cut into the body before d, then hairlines running on past it
      c.globalCompositeOperation = v ? 'destination-out' : 'source-over'
      c.strokeStyle = I(v ? .5 * q * x : a * (.6 + .4 * R(j * 5 + s)), v ? '0,0,0' : K); c.lineWidth = hw * (.8 + 1.4 * R(j * 7 + s)) * (v ? .6 : 1); c.beginPath()
      for (let u = v ? u0 : d - .04, g = 1; u < (v ? min(e, d + .1) : u1); u += .01) {
        const [x, y, nx, ny] = N(u), w = W(u) * o
        R(floor(u * 14 + 14 * R(j + s)) + j * 9 + s) < .13 ? g = 1 : (g ? c.moveTo(x + nx * w, y + ny * w) : c.lineTo(x + nx * w, y + ny * w), g = 0)
      }
      c.stroke()
    }
  }
  c.restore()
}
// soft ink blot with a slightly irregular edge
const blot = (c, x, y, r, a, b = 4, s = 0, K, ry = r) => {
  c.save(); c.filter = `blur(${b}px)`; c.fillStyle = I(a, K); c.beginPath()
  for (let k = 0; k < 28; k++) { const q = k / 28 * T, m = 1 + (s && .06 * sin(3 * q + s) + .04 * sin(5 * q + s * 2)); c.lineTo(x + cos(q) * r * m, y + sin(q) * ry * m) }
  c.fill(); c.restore()
}
const snap = (c, f = 1, s = 8, a = 4) => {
  const m = c.getImageData(0, 0, 256, 256), d = m.data
  for (let k = 0; k < d.length; k += 4) if (d[k + 3]) { for (let j = 0; j < 3; j++)d[k + j] = Math.round(d[k + j] / s) * s; d[k + 3] = min(255, Math.round(d[k + 3] * f / a) * a) }
  c.putImageData(m, 0, 0)
}
// soft fade at the canvas edges so nothing is hard-cropped
const fade = (c, w = 16) => {
  c.save(); c.globalCompositeOperation = 'destination-out'
  for (const [x0, y0, x1, y1] of [[0, 0, w, 0], [256, 0, 256 - w, 0], [0, 0, 0, w], [0, 256, 0, 256 - w]]) {
    const g = c.createLinearGradient(x0, y0, x1, y1)
    g.addColorStop(0, '#000'); g.addColorStop(1, 'rgba(0,0,0,0)')
    c.fillStyle = g; c.fillRect(0, 0, 256, 256)
  }
  c.restore()
}
// joints for a moment in the cycle: weight shifts side to side while the hands circle in turn
const pose = t => {
  const w = T * t, hx = 128 + 17 * sin(w), hy = 156 + 4 * cos(2 * w), sx = hx + 6 * sin(w), sy = hy - 54
  const bend = (a, b, L, d, v) => { const l = hypot(b[0] - a[0], b[1] - a[1]), o = max(0, L * L - l * l / 4) ** .5; return [(a[0] + b[0]) / 2 + d * o * v, (a[1] + b[1]) / 2 + o * (1 - v) * (v > .6 ? -1 : 1)] }
  const arm = (d, ph) => { const s = [sx + d * 14, sy + 4], h = [128 + d * 44 + d * 32 * cos(w + ph), 110 - 34 * sin(w + ph)]; return [s, bend(s, h, 33, d, .3), h] }
  return { hx, hy, sx, sy, kl: bend([hx, hy], [80, 214], 42, -1, .8), kr: bend([hx, hy], [176, 214], 42, 1, .8), al: arm(-1, PI), ar: arm(1, 0) }
}
// both arms as one sweeping stroke from hand to hand, heavy across the shoulders
const arms = (c, p, a, b) => S(c, C([p.al[2], p.al[1], p.al[0], [p.sx, p.sy + 1], p.ar[0], p.ar[1], p.ar[2]]), u => 2.2 + 8 * sin(PI * u) ** 1.2, a, { b, r: .02, n: 60, d: .86, h: 4, x: 0 })
const fig = (c, p) => {
  const { hx, hy, sx, sy } = p
  // spine running on into one leg, the other leg a second stroke: loose trousers, dry at the ankle
  S(c, C([[sx - 1, sy + 2], [hx - 2, hy - 6], p.kl, [82, 211]]), u => 12 - 6 * u + 3 * sin(PI * u ** 2), .93, { b: 1, r: .08, d: .82, h: 6, k: 1.4, n: 50 })
  S(c, C([[hx + 5, hy - 10], p.kr, [174, 211]]), u => 11 - 6 * u + 2 * sin(PI * u), .78, { b: 1, r: .1, d: .76, h: 6, k: 1.4, s: 5 })
  arms(c, p, .93, .9)
  // feet, head and topknot
  S(c, Q([88, 212], [78, 216], [64, 217]), u => 4 - 2 * u, .93, { r: .1, d: .6, h: 3 })
  S(c, Q([168, 212], [178, 216], [192, 217]), u => 4 - 2 * u, .93, { r: .1, d: .6, h: 3 })
  blot(c, sx, sy - 15, 9.5, .93, .8, 2, 0, 10.5)
  blot(c, sx, sy - 27, 4, .93, .6, 3)
}
export default (c, t) => {
  // ground wash
  blot(c, 128, 221, 84, .2, 5, 0, 0, 5)
  S(c, Q([52, 222], [128, 226], [206, 221]), u => .6 + 1.6 * sin(PI * u), .36, { r: .01, d: .7, h: 3 })
  // echoes of where the body just was
  arms(c, pose((t + .8) % 1), .16, 2.2)
  arms(c, pose((t + .9) % 1), .28, 1.6)
  fig(c, pose(t))
  snap(c)
}
