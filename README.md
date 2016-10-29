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
