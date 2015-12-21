A lightest-weight example of an Angular2 TypeScript application with:

  * TypeScript compilation
  * Beta 0 support
  * Http and the observable API
  * HTML rendering

## To set up

```javascript
npm install -g live-server
npm install -g typescript@1.7.3
cd projectdir
npm install
live-server
tsc (should find the typescript tsconfig.json file)
```

You may also open this in WebStorm or any other tool that provides a
typescript compiler and let 'er rip.

## About runtime dependencies

I know, I know, a lib directory??  I am not ready to wire up a good Webpack setup,
and I've done the hardcoded gulp copy system in a prior sample. I just did a wget
of the dependencies for Angular 2 beta 0, which are:

* SystemJS 0.19.6
* Typescript runtime 1.7.3
* angular2 polyfills, dev, router, and http libraries, 2.0.0-beta.0
* Rx.js, 5.0.0-beta.0

Best,

Ken

