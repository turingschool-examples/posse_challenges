# JavaScript Obstacle Course

Welcome to the JavaScript Obstacle Course. In this directory, you'll also find a test suite. Your job is to make it pass. Some of the challenges will seem pointless and redundant - but that's the point! These challenges focuses on working with JavaScript core types and how to manipulate those core types.

## Up and running

First we need to setup our project:

```sh
$ mkdir js_obstacle_course && cd js_obstacle_course
$ touch obstacleCourse.spec.js
$ touch obstacleCourse.js
```

Run the tests with the following command:

```sh
$ jasmine-node obstacleCourse.spec.js
```

Naming our test file with the extension `spec.js` allows us to run the tests with `jasmine-node`. If you don't have the `jasmine-node` npm package installed, install it with `npm install -g jasmine-node`. The `-g` will install it globally on your system.

As mentioned above, in this directory you'll find a test suite. Copy the contents over to your spec file. Now, unskip one test at a time and make it pass.
