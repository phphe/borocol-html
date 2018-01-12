require('./check-versions')()

process.env.NODE_ENV = 'production'

var ora = require('ora')
var rm = require('rimraf')
var path = require('path')
var chalk = require('chalk')
var webpack = require('webpack')
var config = require('../config')
var webpackConfig = require('./webpack.prod.conf')
const {execSync} = require('child_process');
const fs = require('fs');
const dirTree = require('directory-tree');
const {forIn} = require('tree-helper');

var spinner = ora('building for production...')
spinner.start()

rm(path.join(config.build.assetsRoot, config.build.assetsSubDirectory), err => {
  if (err) throw err
  webpack(webpackConfig, function (err, stats) {
    spinner.stop()
    if (err) throw err
    process.stdout.write(stats.toString({
      colors: true,
      modules: false,
      children: false,
      chunks: false,
      chunkModules: false
    }) + '\n\n')

    console.log(chalk.cyan('  Build complete.\n'))
    console.log(chalk.yellow(
      '  Tip: built files are meant to be served over an HTTP server.\n' +
      '  Opening index.html over file:// won\'t work.\n'
    ))
    dirTree('./dist', {extensions:/\.(txt|js|css|map|html)$/}, tree => {
      forIn(tree, item => {
        if (item.type === 'file') {
          const fp = item.path
          console.log(`build.js replace static path in: ${fp}`);
          const str = fs.readFileSync(fp).toString().replace(/\/static\/(?!main)/g, '/static/main/')
          fs.writeFileSync(fp, str)
        }
      })
    })
    const to = path.join(__dirname, '../../borocol/server')
    execSync(`mv ./dist/index.html ${to}/templates/index.html`)
    const pathMain = `${to}/static/main`
    fs.readdirSync('./dist').forEach(fn => {
      const tar = `${pathMain}/${fn}`
      try {
        execSync(`rm ${tar} -r`)
      } catch (e) {
        console.log('remove failed');
        console.log(e);
      }
      execSync(`mv ./dist/${fn} ${tar}`)
    })
  })
})
