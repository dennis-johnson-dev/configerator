export const options = ['truthy', 'nope'];

export const generate = (opts) => {
  return JSON.stringify({
    "presets": [],
    "plugins": []
  }, null, 2);
};

export const output = {
  filename: '.babelrc'
};
