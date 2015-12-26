Takes up what we've done with the first blog post on Angular 2 Beta and
adds multiple routes and forms to the "blog system" sample.

The use case is silly, but the coding examples hopefully zero in on what
you need to get a basic Angular 2 application going.

## To set up

```javascript
npm install -g live-server
npm install -g typescript@1.7.3
cd projectdir
npm install
tsc (should find the typescript tsconfig.json file)
live-server
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

