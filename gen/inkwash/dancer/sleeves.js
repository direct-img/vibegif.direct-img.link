// ink wash dancer swirling very long flowing sleeves in sweeping translucent arcs
export const frames = 30, delay = 75, dither = true
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
const ro = '170,62,52'
export default (c, t) => {
  const w = T * t, ln = .1 * sin(w), sx = 120 + 16 * sin(w), sy = 118
  // hand paths: two big ovals out of step with each other
  const hand = (d, t) => [sx + d * 12 + d * 34 * cos(T * t * d + (d < 0 ? 2.2 : 0)) + 6 * d, sy - 6 - 34 * sin(T * t * d + (d < 0 ? 2.2 : 0))]
  // a sleeve trails along where the hand has been, flung outward and sagging with its own weight
  const sl = d => u => { const [x, y] = hand(d, t - .34 * u), o = [sx + d * 12, sy]; return [o[0] + (x - o[0]) * (1 + 1.5 * u), o[1] + (y - o[1]) * (1 + 1.4 * u) + 26 * u * u] }
  for (const d of [-1, 1]) {
    S(c, sl(d), u => 3 + 13 * sin(PI * u ** .6) ** .8, .32, { b: 1.6, n: 60, d: .68, h: 13, k: 1.1, r: .02, s: d + 2, x: 0 })
    S(c, u => sl(d)(u * .8), u => 2 + 5 * sin(PI * u ** .5), .5, { b: 1.2, n: 50, r: .02 })
  }
  // skirt: a wide wet bell with a swirling hem
  const hx = 120 + 6 * sin(w)
  S(c, C([[hx, 146], [hx - 3 - 6 * sin(w), 180], [hx - 10 * sin(w + .8), 214]]), u => 9 + 24 * u ** 1.3 - 6 * u ** 5, .5, { b: 1.5, d: .86, h: 7, k: 1.8, r: .1, x: .4 })
  S(c, C([[hx + 3, 150], [hx + 5 - 5 * sin(w), 184], [hx + 12 - 12 * sin(w + .8), 212]]), u => 2 + 8 * sin(PI * u ** .7), .78, { b: 1, d: .7, h: 5, k: 1.3, r: .1, s: 4, x: 0 })
  S(c, C([[hx - 5, 150], [hx - 14 - 5 * sin(w), 182], [hx - 22 - 9 * sin(w + .8), 208]]), u => 1 + 4 * sin(PI * u ** .8), .78, { b: .8, d: .75, h: 3, r: .02, s: 8, x: 0 })
  // torso, sash, arms
  S(c, C([[sx, sy - 4], [(sx + hx) / 2 + 2, 134], [hx, 152]]), u => 9 - 3 * sin(PI * u), .93, { r: .15, b: .9 })
  S(c, Q([hx - 10, 147], [hx, 152], [hx + 11, 146]), u => 2.6, .7, { i: ro, r: .05 })
  S(c, Q([hx + 8, 148], [hx + 14, 164], [hx + 10 - 6 * sin(w), 180]), u => 2.2 - 1.2 * u, .6, { i: ro, r: .05 })
  for (const d of [-1, 1]) S(c, Q([sx + d * 8, sy], [sx + d * 14, sy + 4 - 8 * sin(w)], hand(d, t)), u => 4.5 - 2 * u, .93, { r: .1, b: .8 })
  // head, hair knot and pin
  const hd = [sx + 3 * sin(w), sy - 19]
  blot(c, hd[0], hd[1], 8, .93, .8, 2, 0, 9)
  blot(c, hd[0] - 2, hd[1] - 12, 5, .93, .6, 3)
  S(c, Q([hd[0] - 9, hd[1] - 15], [hd[0], hd[1] - 13], [hd[0] + 9, hd[1] - 17]), u => .9, .78, { r: .01, b: .3 })
  // feet
  S(c, Q([hx - 8, 214], [hx - 12, 218], [hx - 18, 219]), u => 2.6 - 1.4 * u, .93)
  fade(c, 12); snap(c)
}
