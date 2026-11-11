// ink wash figure in a long robe walking under an oil-paper umbrella in the rain, a ripple spreading at each step
export const frames = 24, delay = 80, dither = true
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
const oc = '170,96,54'
export default (c, t) => {
  const w = T * t, bob = 2 * cos(2 * w), sw = sin(w)
  // wet ground
  blot(c, 118, 223, 80, .2, 6, 0, 0, 5)
  // ripples left behind at each footfall, drifting back as the walker moves on
  for (let k = 0; k < 2; k++) {
    const q = (t + k * .5) % 1, x = 140 - 62 * q, a = .8 * (1 - q) ** 1.2, rx = 8 + 34 * q ** .7, ry = 2.5 + 9 * q ** .7
    for (const d of [0, 1]) S(c, u => [x + rx * cos(PI * (d + .08 + u * .84)), 222 + ry * sin(PI * (d + .08 + u * .84))], u => (2.6 - d * 1) * sin(PI * u) ** .6, a * (1 - d * .3), { r: .01, n: 20, b: .5 })
  }
  // rain
  for (let k = 0; k < 20; k++) {
    const m = 1 + (k % 3 == 0), p = (R(k + 1) + t * m) % 1, x = 300 * R(k * 7 + 2) - 20 - 46 * p, y = -30 + 290 * p, l = 24 + 18 * R(k + 30)
    S(c, u => [x - l * .16 * u, y + l * u], u => .4 + 1.2 * sin(PI * u ** .6), .34 + .3 * R(k + 50), { r: .01, n: 8, b: .4 })
  }
  // dry under the umbrella
  c.save(); c.globalCompositeOperation = 'destination-out'; c.filter = 'blur(5px)'; c.fillStyle = '#000'; c.beginPath()
  for (const [x, y] of [[64, 92], [188, 86], [164, 214], [52, 214]]) c.lineTo(x, y)
  c.fill(); c.restore()
  // feet: one planted and sliding back, one lifting forward
  for (const d of [1, -1]) {
    const x = 116 + d * 15 * cos(w), y = 216 - 5 * max(0, d * sin(w))
    S(c, Q([x - 5, y - 9], [x - 2, y - 1], [x + 9, y]), u => 3.4 - 1.6 * u, .93, { r: .1 })
  }
  c.translate(0, bob)
  // robe: a wet wash mass leaning into the walk, darker loaded strokes over it, hem trailing off dry
  S(c, C([[119, 104], [112, 134], [110 - 2 * sw, 172], [112 + 5 * sw, 210]]), u => 7 + 15 * u ** .7 - 4 * u ** 4, .55, { d: .84, h: 7, k: 1.7, b: 1.6, r: .12, x: .4 })
  S(c, C([[112, 108], [103, 140], [100 - 3 * sw, 176], [98 + 4 * sw, 204]]), u => 1 + 5 * sin(PI * u ** .8), .93, { d: .7, h: 4, k: 1.3, b: .8, r: .02, s: 3, x: 0 })
  S(c, C([[126, 112], [127, 146], [124 + 3 * sw, 180], [129 - 4 * sw, 206]]), u => 2 + 6 * sin(PI * u ** .7), .78, { d: .72, h: 5, k: 1.3, b: 1, r: .05, s: 7, x: 0 })
  // head, hair knot
  blot(c, 122, 97, 9, .93, .9, 2, 0, 10)
  blot(c, 114, 90, 4.5, .93, .7, 4)
  // sleeve and arm up to the handle
  S(c, C([[115, 112], [126, 134], [140, 128]]), u => 7.5 - 4 * u, .93, { r: .1, b: 1 })
  // umbrella, tipped a little forward
  c.translate(130, 60); c.rotate(.1 + .02 * sw)
  S(c, Q([4, 4], [6, 40], [8, 72]), u => 1.3, .78, { r: .01, b: .4 })
  c.save(); c.filter = 'blur(1.2px)'; c.fillStyle = I(.5, oc); c.beginPath()
  c.moveTo(0, -4); c.quadraticCurveTo(-46, 4, -70, 30); c.quadraticCurveTo(0, 44, 70, 30); c.quadraticCurveTo(46, 4, 0, -4)
  c.fill(); c.restore()
  blot(c, 26, 22, 30, .2, 6, 0, 0, 12)
  for (let k = 0; k < 7; k++) {
    const f = k / 6 * 2 - 1
    S(c, Q([0, -2], [f * 36, 8 + 8 * (1 - f * f)], [f * 70, 30 + 9 * (1 - f * f)]), u => .5 + 1.1 * u, .55, { r: .01, b: .4, n: 12 })
  }
  S(c, Q([-71, 30], [0, 46], [71, 30]), u => 1.2 + 2.6 * sin(PI * u ** .7), .93, { r: .02, d: .8, h: 4 })
  S(c, Q([-70, 30], [-44, 5], [0, -4]), u => 1.6 - .8 * u, .78, { r: .02 })
  blot(c, 0, -7, 3.2, .93, .5)
  c.resetTransform()
  fade(c, 18); snap(c)
}
