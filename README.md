# configerator
Node.js utility module for generating configuration files

# Coming Soon!!!

This module is not available yet.

## Installation
```
npm i -g configerator
```

## Usage
```
configerator <config-module-name> args
```

### Configuration Modules

By default, configerator will resolve modules based on Node.js module resolution. For instance, if you try and use a particular configuration module, configerator will try and resolve a module name of type "configerator-<moduleName>" via Node.js. It is recommended that you install configuration modules globally.

```
npm i -g configerator-moduleName
```

Once installed, it is now available to the CLI as follows:

```
configerator moduleName
```

Each configuration module exposes two properties:

type ConfigurationModule
  generate: (options) => string;
  output: {
    filename: string;
  }

  `generate` returns the string to be written to the file

  `output` returns an object that contains the `filename` property

  The string will be written to the current directory with the filename specified in the configuration object.

  #### Example

  ```js
    // configerator-example
    export const generate(options) => {
      return JSON.stringify({
        truthy: options.truthy
      }, null, 2)
    };

    export const output = {
      filename: '.examplerc';
    };

    export const options = ['truthy'];
  ```

  ```js
    configerator example --truthy
  ```

  ```
    // ./.examplerc
    {
      truthy: true
    }
  ```
