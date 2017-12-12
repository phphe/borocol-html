const fs = require('fs')
const { execSync } = require('child_process');

// compress
// fs.readdirSync('dist/assets/pic').forEach(v => {
//   if (v.endsWith('.png')) {
//     const p1 = `dist/assets/pic/` + v
//     const p2 = `dist/assets/pic/` + v.replace(/png$/, 'jpg')
//     const cmd = `convert -quality 65  ${p1} ${p2}`
//     execSync(cmd)
//   }
// })

// remove
const toRemove = []
fs.readdirSync('dist/assets/pic').forEach(v => {
  if (v.endsWith('.png')) {
    toRemove.push(v)
  }
})

toRemove.forEach(v => {
  const p1 = `dist/assets/pic/` + v
  execSync(`rm ${p1}`)
})
