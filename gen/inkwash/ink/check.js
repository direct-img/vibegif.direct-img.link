// ink wash checkmark painted in one confident brush stroke with a wet start and dry-brush tail, holds then fades, success state
export const frames = 20, dither = true
export const delay = [...Array(20)].map((_, i) => i < 9 ? 45 : i == 9 ? 1200 : 70)
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
const A = Q([58, 120], [84, 142], [104, 186]), E = Q([104, 186], [136, 124], [214, 52])
export default (c, t, i) => {
  const p = cl((i + 1) / 9) ** 1.3, f = i < 10 ? 1 : 1 - (i - 9) / 11
  blot(c, 62, 124, 17 * cl(p * 5), .2, 6)
  S(c, A, u => 14 - 3 * u, .93, { e: p / .28, r: .25, b: 1 })
  p > .2 && blot(c, 104, 186, 12 * cl((p - .2) / .1), .93, 1)
  S(c, E, u => 12 + 3 * sin(PI * u) - 3 * u, .93, { e: (p - .28) / .72, d: .62, r: .01, h: 9, k: 1.5 })
  if (p >= 1) for (let k = 0; k < 3; k++) blot(c, 224 + k * 7 + 4 * R(k), 40 - k * 6 - 5 * R(k + 9), 2.2 - k * .5, .78, .4)
  snap(c, f)
}
