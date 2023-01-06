const fs = require('fs')
const path = require('path')

fs.writeFile(path.join(__dirname, '/test', 'current date-time.txt'),'current timestamp', (err) => {
    if (err) {
      return console.log(err)
    }
    console.log('File Created Successfully')
  }
)
