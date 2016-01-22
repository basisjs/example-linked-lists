Example of simple app with two linked lists and model modification accumulation. Build on [`basis.js`](https://github.com/basisjs/basisjs).

## Install and launch

Clone repo and install dependencies by `bower`.

    > bower install

Use any web-server to launch application. But [`basisjs-tools`](https://github.com/basisjs/basisjs-tools) dev-server would be preferred.

    > npm install
    > npm start

Or, if `basisjs-tools` globaly installed:

    > basis server

## Build

Build is not required to try app. But if you need an optimized version of app, you need install [`basisjs-tools`](https://github.com/basisjs/basisjs-tools) using `npm` and run build process.

    > npm install basisjs-tools
    > node ./node_modules/basisjs-tools/bin/basis build

Or, if `basisjs-tools` globaly installed:

    > basis build

The result will be available at `./build` folder.
