# Zesty.io Design System

> A system for building consistent products

**Requires Node.js and NPM. We recommend [installing Node 8 LTS](https://nodejs.org/en/) which will include NPM.**

## Core Package Setup

Link the core to the global node_modules and build the package

```
cd core
npm install
sudo npm start
```

## Running Docs Locally for Testing

Run core package setup before docs

```
cd docs
npm run prestart
npm start
```

```
Open Browser to http://localhost:8080/
HARD REFRESH
```
## Connecting Design-Systems to Manager-ui

 In Manager-ui
 ```
 npm i
 npm link @zesty-io/core

 ```
In Design-Systems

```
git pull design-system
cd /core
npm run build ( After every time you make an edit)

```