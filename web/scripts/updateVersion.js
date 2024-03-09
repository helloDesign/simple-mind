const path = require('path')
const fs = require('fs')
const pkg = require('../../simple-mind/package.json')

const file = path.resolve('../simple-mind/full.js')
let content = fs.readFileSync(file, 'utf-8')
content = content.replace(
  /(MindMap.version\s*=\s*)[^\n]+(\n)/,
  `$1'${pkg.version}'$2`
)
fs.writeFileSync(file, content)