import fs from 'fs';
import mkdirp from 'mkdirp';
import path from 'path';

const makePath = (path = '') => {
  if (path === '') return Promise.resolve();

  return new Promise((resolve, reject) => {
    mkdirp(path, (err) => {
      if (err) {
        console.error(err);
        reject(err);
        return;
      }

      resolve();
    });
  });
};

const fileExists = (filename) => {
  return new Promise((resolve, reject) => {
    fs.open(filename, 'r', (err) => {
      if (err) {
        reject(err);
        return;
      }

      resolve();
    });
  });
};

export const run = (module, opts) => {
  const config = module.generate(opts);

  return makePath(module.output.path)
    .then(() => {
      return fileExists(module.output.path + '/' + module.output.filename);
    })
    .then(() => {
      console.log(`${module.output.filename} already exists`);
    })
    .catch(() => {
      fs.writeFileSync(module.output.path + '/' + module.output.filename, config);
    });
};
