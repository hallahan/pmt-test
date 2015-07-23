# The `src/app/login` Directory

* **app** - the application directory.
  * **login** - the login page.
    * **less** - the less files.
      * **login.less** - the global less file for the login page.
      * **login-bmgf.less** - the bmgf theme specific less file.
      * **login-spatialdev.less** - the spatialdev theme specific less file.
    * **login.js** - the controller.
    * **login.spec.js** - the test.
    * **login.tpl.html** - the template.

## `login.js`

This is the login page controller.

The dependencies block is also where component dependencies should be
specified, as shown below.

```js
angular.module( 'pmtViewer.login', [
  'ui.router',
  'config', // include our application config module created on build based on theme
  'plusOne'
])

```

## `less` Directory

The less directory is where all the less files for the login page are stored. The global
less file that applies to the login page for *ALL* themes is titled after the page `login.less`.
Where as those less files that contain css specific to a theme are titled after the page
and the theme `login-bmgf.less` & `login-spatialdev.less`. 

It is important to remember that all less files need to be `@included` in the proper location.
The global less file should be included in the `src/main.less` file and the theme specific less files
should be included in thier respective theme less file in the `src/less/theme` directory.