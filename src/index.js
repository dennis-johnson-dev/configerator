import * as config from './config';
import yargs from 'yargs';

const moduleName = yargs.argv._[0];
const main = () => {
  let module;
  try {
    module = require(`config-cli-${moduleName}`);
  } catch (e) {
    console.error('Cannot find module: ', `config-cli-${moduleName}`);
    return;
  }

  config.run(module);
};

main();
