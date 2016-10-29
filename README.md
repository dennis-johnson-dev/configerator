# configerator
Node.js utility module for generating configuration files

## Beta

This is currently a beta version. Please use with caution. 

### Reason to build this

I like to try out new things and got tired of constantly looking up the various types of configuration files needed for new projects. For example, I typically various tools such as babel, webpack, eslint, etc. and they each of unique configuration files. I thought it would save some time to be able to quickly generate a config and then modify it as needed. 

I also think it might be nice to be able to publish helpful configuration files to be shared with others. Saving your own configuration is as easy as publishing a new module and installing it globally. That way, when you set up new projects it's easy to get started with configuration of various tools you use.

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
