# react boilerplate
Yet another starter boilerplate with lot's of goodies: ReactJS, Redux, ES2015, JSPM, hot-reloading, Karma + Mocha + Enzyme + Chai, Istanbul + isparta, ESLint + XO

## Features
- [**Redux**](https://github.com/rackt/redux) 
- [**Babel**](http://babeljs.io/) - to use ES2015 features of JS.
- [**JSPM**](http://jspm.io/) - frictionless browser package management - loading time is painful but together with hot-reloading development is really pleasant.
- [**systemjs-hot-reloader**](https://github.com/capaj/systemjs-hot-reloader) - change a file and see the change immidiatelly in the browser - really nice.
- [**Karma**](https://karma-runner.github.io/) + [**Mocha**](https://mochajs.org/) + [**Enzyme**](http://airbnb.io/enzyme/) + [**Chai**](http://chaijs.com/) - testing should be your starting point to create new applications and this set of libraries does the job well
- [**Istanbul**](https://github.com/gotwarlost/istanbul) + [**isparta**](https://github.com/douglasduteil/isparta) - code coverage is helpful to track the quality of your tests, with Istanbul and isparta reports look awesome.
- [**react-router**](https://github.com/rackt/react-router) 

## Development mode (with hot-reloading)
    npm install
    npm install -g jspm
    jspm install
    npm start

## Production mode (using jspm bundle)

   npm build
   NODE_ENV=prod npm start

## Redux DevTools (for hot-reloading)
https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd/related

## License

This project is licensed under the MIT license, Copyright (c) 2016 Maciej Rosiek. For more information see `LICENSE`.
