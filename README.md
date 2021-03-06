# [pmt-test](http://shawnaparadee.github.com/pmt-test) [![Build Status](https://travis-ci.org/shawnaparadee/pmt-test.svg?branch=master)](https://travis-ci.org/shawnaparadee/pmt-test)

An [AngularJS](http://angularjs.org) productized project prototype

***

## Quick Start

Install Node.js and then:

```sh
$ git clone git://github.com/shawnaparadee/pmt-test
$ cd pmt-test
$ sudo npm -g install grunt-cli karma bower
$ npm install
$ bower install
$ grunt watch
```

Finally, open `file:///path/to/pmt-test/build/index.html` in your browser.

## Overall Directory Structure

At a high level, the structure looks roughly like this:


* **bin** - the compliled application ready for publish.
* **build** - the complied application with tests.
* **karma** - test configuration.
* **node_modules** - node puts required modules here.
* **src** - the application.
  * **app** - the main application source files. [Read more](src/app/README.md)
    * **about** - the about page.
      * **info** - the customizable section.
      * **less** - the less files.
      * **about.js** - the controller.
      * **about.spec.js** - the test.
      * **about.tpl.html** - the template.
    * **login** - the login page. [Read more](src/app/login/README.md)
      * **less** - theless files.
      * **login.js** - the controller.
      * **login.spec.js** - the test.
      * **login.tpl.html** - the template.
    * **app.js** - the application controller.
    * **app.spec.js** - the test.
    * **config.js** - the configuration file generated by the build, based on _theme_.
  * **assets** - static files like fonts and images. [Read more](src/assets/README.md).
  * **common** - third-party libraries or re-usable components. [Read more](src/common/README.md).
  * **less** - application less directory. [Read more](src/less/README.md).
      * **themes** - individual themes.
      * **main.less** - main less.
      * **variables.less** - application variables.
  * **index.html** - application main html, build compiles application in to a SPA (single page app).
* **vendor** - thrid party packages install by Bower. All packages must be put into ```build.config.js```.
* **.bowerrc** - the Bower configuration file.
* **.travis.yml** - the Travis CI configuration file.
* **app.config.js** - the application configuration file. Objects in this file are used to create the ```src/app/config.js``` file based on _theme_.
* **bower.json** - the listing of Bower dependencies.
* **build.config.js** - the grunt build configuration file.
* **Gruntfile.js** - the grunt build file.
* **module.prefix** & **module.suffix** - our compiled application script is wrapped in these, which by default are used to place the application inside a self-executing anonymous function to ensure no clashes with other libraries.
* **package.json**- metadata about the app, used by NPM and our build script. The NPM dependencies are listed here.
