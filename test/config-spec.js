import test from 'ava';
import fs from 'fs';
import path from 'path';
import rimraf from 'rimraf';

import * as Config from '../src';

test('generates config file', t => {
  const configModule = {
    generate: (opts) => {
      return JSON.stringify({
        "plugins": [],
        "ignore": []
      }, null, 2);
    },
    output: {
      filename: '.babelrc',
      path: path.resolve('../test-lib')
    }
  };

  return Config.run(configModule, {}).then(() => {
    const result = JSON.parse(
      fs.readFileSync(
        path.resolve('../test-lib/.babelrc'), 'utf8'
      )
    );

    t.is(result.plugins.length, 0);
  });

});

test.after('cleanup', t => {
  return new Promise((resolve, reject) => {
    rimraf(path.resolve('../test-lib'), (err, result) => {
      if (err) {
        reject(err);
        return;
      };
      resolve(result);
    });
  });
});
