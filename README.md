# Design System

## Setup

```
// top level app dep installation
npm i

// core package dep installation
cd core
npm i 
npm run build
```

```
// link our component package build to global node_modules
cd core
npm link
```

```
cd core/src
npm link @zesty-io/core
```

## Running


### Local

```
cd app
npm i 
npm link @zesty-io/core
npm start
```
