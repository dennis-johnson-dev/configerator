import * as config from './config';
import path from 'path';
import yargs from 'yargs';

const moduleName = yargs.argv._[0];
const main = () => {
  let module;
  try {
    module = require(`configerator-${moduleName}`);
  } catch (e) {
    console.error('Cannot find module: ', `configerator-${moduleName}`);
    return;
  }


  let options = {};
  module.options.forEach((option) => {
    if (typeof yargs.argv[option] === 'undefined') {
      return;
    }

    options[option] = yargs.argv[option];
  });

  module.output.path = path.resolve('./')
  config.run(module, options).then(() => {
    console.log('generated successfully');
  });
};

main();
