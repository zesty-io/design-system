# Design System

## Setup

```
// top level app dep installation
npm i

// core package dep installation
cd core
npm i
```

```
// link our component package build to global node_modules
cd core/dist/
npm link
```

```
cd src/
npm link @zesty-io/core
```

## Running

### Local

```
cd app
npm start
```
