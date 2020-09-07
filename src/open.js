const open = require('open');

module.exports = function(port) {
  open(`http://localhost:${port}`);
}