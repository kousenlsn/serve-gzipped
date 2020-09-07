const compression = require('compression')
const express = require('express')
const Path = require('path')
const boxen = require('boxen');

module.exports = function(path, port) {
  const finalPath = Path.join(process.cwd(), path);

  const app = express()
  app.use(compression())

  app.use(express.static(finalPath));

  app.listen(port, () => {
    console.log(
      boxen(
        `Serving "${finalPath}" compressed at http://localhost:${port}! \nPress control + C to quit.`,
        {padding: 1, borderColor: 'yellow'}
      )
    );
  })
}