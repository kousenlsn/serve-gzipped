const {Command, flags} = require('@oclif/command')

const expressServe = require('./express');
const open = require('./open');

class ServeGzippedCommand extends Command {
  async run() {
    const {flags, args} = this.parse(ServeGzippedCommand)
    const port = flags.port || 7890;
    const path = args.path || './';

    try {
      expressServe(path, port)
      open(port)

    } catch (e) {
      this.warn('uh oh! an error ocurred')
      this.warn(e)
    }
  }
}


ServeGzippedCommand.usage = `[PATH]`
ServeGzippedCommand.examples = `serve-gzipped ./ -p 3000`
ServeGzippedCommand.description = `Quick express server with compression for testing purpose.`

ServeGzippedCommand.args = [
  {name: 'path'}
]

ServeGzippedCommand.flags = {
  version: flags.version({char: 'v'}),
  help: flags.help({char: 'h'}),
  port: flags.string({char: 'p', description: 'port to run. Defaults to 7890'}),
}

module.exports = ServeGzippedCommand
