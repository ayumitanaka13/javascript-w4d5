//This is a constructor function!
function Color(r, g, b) {
  this.r = r
  this.g = g
  this.b = b
}

//if you call it on its own like a regular function, it  will return undefined
console.log(Color(35, 60, 190))

Color.prototype.rgb = function () {
  const { r, g, b } = this
  return `rgb(${r},${g},${b})`
}

Color.prototype.hex = function () {
  const { r, g, b } = this
  return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)
}

Color.prototype.rgba = function () {
  const { r, g, b } = this
  return `rgb(${r},${g},${b},${a})`
}

const color1 = new Color(40, 255, 60)
console.log(color1.hex())
const color2 = new Color(0, 0, 0)
console.log(color2.hex())
