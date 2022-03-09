// 这是一个简易的 css-loader

const transform = (code) => `
  const str = ${JSON.stringify(code)}
  if (document) {
    const style = document.createElement('style')
    style.innerHTML = str
    document.head.appendChild(style)
  }
  export default str
`

module.exports = transform
