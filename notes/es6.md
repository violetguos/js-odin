# ES 6 module


1. Explain what npm is and where it was commonly used before being adopted on the frontend.

- it's a package manager for node.js

2. Describe what npm init does and what package.json is.

A package.json file:

-  lists the packages your project depends on
-  specifies versions of a package that your project can use using semantic versioning rules
- makes your build reproducible, and therefore easier to share with other developers

npm init

- creates package.json

3. Know how to install packages using npm.
npm install

4. Describe what a JavaScript module bundler like webpack is.
bunldes all the style & asset into a single file


5. Explain what the concepts “entry” and “output” mean as relates to webpack.
entry: The entry object is where webpack looks to start building the bundle. The context is an absolute string to the directory that contains the entry files.

output:  output key contains set of options instructing webpack on how and where it should output your bundles, assets and anything else you bundle or load with webpack.



6. Briefly explain what a development dependency is.
"devDependencies": Packages that are only needed for local development and testing.


7. Explain what “transpiling code” means and how it relates to frontend development.
- Newer languages need to adapt for older browsers
- CSS: sass, less, stylus
- JS: coffeescript, babel, typescript

8. Briefly describe what a task runner is and how it’s used in frontend development.
- task runner: a tool that automates different parts of the build process
- basically bash script for the web
- frontend:  minifying code, optimizing images, running tests, etc

9. Describe how to write an npm automation script.
- add to `"scripts": ` in package.json
- run  `npm run [cmd]`

10. Explain one of the main benefits of writing code in modules.
- code reuse
- all of the benefits to wrapping your code in factory functions or using the module pattern 
    - this module pattern is NOT ES6 module
11. Explain “named exports” and “default exports”.

named exports

- can have multiple named exports per file. 
- name of functions stay the same when importing

default export
- can have only one default export per file
- can rename it in the import


