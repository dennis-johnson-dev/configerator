# config-cli
Node.js utility module for generating configuration files

## Installation
```
npm i -g config-cli
```

## Usage
```
config <config-module-name> args 
```

### Configuration Modules

By default, config-cli will resolve modules based on Node.js module resolution. For instance, if you try and use a particular configuration module, config-cli will try and resolve a module name of type "config-cli-<moduleName>" via Node.js. It is recommended that you install configuration modules globally.

```
npm i -g config-cli-moduleName
```

Once installed, it is now available to the CLI as follows:

```
config moduleName
```
