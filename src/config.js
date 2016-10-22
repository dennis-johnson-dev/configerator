import fs from 'fs';
import mkdirp from 'mkdirp';
import path from 'path';

export const run = (module, opts) => {
  const config = JSON.stringify(module.generate(opts), null, 2);

  fs.open(module.output.filename, 'r', (err, fd) => {
    if (err) {
      try {
        fs.writeFileSync(module.output.filename, config);
        return 1;
      } catch (e) {
        return 0;
      }
    }

    else {
      console.log(`${module.output.filename} already exists`);
    }
  });
};
