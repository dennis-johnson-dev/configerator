import * as config from 'configerator';
import path from 'path';
import yargs from 'yargs';

const main = (moduleName) => {
  if (!moduleName) {
    console.error('no config type given, please enter a valid config type');
    return;
  }

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

main(yargs.argv._[0]);
