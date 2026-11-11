// ink wash folding fan opening to reveal a small painted plum branch, holding, then folding closed
export const frames = 24, dither = true
export const delay = [...Array(24)].map((_, i) => i == 10 ? 1300 : i == 23 ? 500 : i == 0 ? 300 : 70)
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
const H = 1.08, ro = '176,70,72'
export default (c, t, i) => {
  const e = x => x * x * (3 - 2 * x), o = .035 + .965 * e(i < 11 ? i / 10 : cl(1 - (i - 10) / 12))
  // fan space: f 0..1 across the spread, r from the pivot
  const F = (f, r) => { const a = (2 * f - 1) * H * o - .14; return [128 + sin(a) * r, 204 - cos(a) * r] }
  const L = (f0, r0, f1, r1) => u => F(f0 + (f1 - f0) * u, r0 + (r1 - r0) * u)
  // leaf wash
  c.save(); c.filter = 'blur(1px)'; c.fillStyle = I(.15); c.beginPath()
  for (let k = 0; k <= 40; k++)c.lineTo(...F(k / 40, 127 + (k % 4 < 2 ? 1.5 : -1.5)))
  for (let k = 40; k >= 0; k--)c.lineTo(...F(k / 40, 62))
  c.fill(); c.restore()
  blot(c, ...F(.22, 98), 26 * o + 3, .2 * o, 9)
  blot(c, ...F(.85, 112), 16 * o + 3, .14 * o, 8)
  // sticks and pleats
  for (let j = 0; j < 11; j++) {
    const f = j / 10, g = j % 10 == 0
    S(c, L(f, -12, f, g ? 128 : 66), u => g ? 3.4 - 1.4 * u : 2.4 - 1.3 * u, g ? .93 : .55, { b: .5, r: .03, d: g ? .8 : 2, h: 3 })
    g || S(c, L(f, 126, f, 64 + 30 * R(j)), u => .9 - .7 * u, .36, { b: .3, r: .01 })
  }
  S(c, u => F(u, 127), u => .6 + 1.6 * sin(PI * u ** .7), .78, { b: .5, r: .01, n: 50, d: .72, h: 3 })
  S(c, u => F(1 - u, 63), u => .5 + 1 * sin(PI * u ** .7), .55, { b: .5, r: .01, n: 50, d: .7, h: 2 })
  // the painting: a plum branch with a few blossoms
  S(c, C([[.97, 76], [.8, 88], [.62, 90], [.45, 104], [.3, 108]].map(p => F(...p))), u => 3 - 2.2 * u + .8 * sin(u * 9), .78, { d: .8, h: 3, r: .02 })
  S(c, C([[.66, 90], [.6, 102], [.5, 116]].map(p => F(...p))), u => 1.8 - 1.4 * u, .78, { r: .02 })
  S(c, C([[.82, 87], [.84, 100], [.78, 111]].map(p => F(...p))), u => 1.6 - 1.2 * u, .55, { r: .02 })
  for (const [f, r, z] of [[.29, 111, 4.6], [.42, 100, 4], [.5, 118, 4.4], [.58, 105, 3.2], [.78, 113, 4.2], [.86, 95, 3], [.2, 101, 2.4]])
    blot(c, ...F(f, r), z * (.4 + .6 * o), .7, .7, f * 9, ro)
  // rivet and a cord with a tassel
  S(c, Q([128, 204], [137, 218], [131, 232]), u => .9, .55, { r: .01, b: .3 })
  S(c, Q([131, 232], [130, 239], [132, 247]), u => 1 + 2.5 * u, .78, { r: .01, d: .5, h: 4 })
  blot(c, 128, 204, 4.5, .93, .6)
  snap(c)
}
