const fs = require('fs');
const dirTree = require('directory-tree');
const {forIn} = require('tree-helper');
const path = require('path');

const pathMain = path.join(__dirname, '../../borocol/server/static/main')

dirTree(pathMain, {extensions:/\.(txt|js|css|map|html)$/}, tree => {
  forIn(tree, item => {
    if (item.type === 'file') {
      const fp = item.path
      console.log(fp);
      const str = fs.readFileSync(fp).toString().replace(/(["'])\/static/g, '$1/main/static')
      fs.writeFileSync(fp, str)
    }
  })
})
