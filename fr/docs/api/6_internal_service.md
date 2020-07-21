---
id: developing-a-service
title: Développer un service Gladys
sidebar_label: Développer un service Gladys
---

In Gladys 4, most integrations which don't need to be started on another physical machine than Gladys are internal services and integrated into Gladys core.

This tutorial will explain you how to add a new integration to the core.

### Setup your development environnement

I recommended you follow the instructions on the [Github repository](https://github.com/GladysAssistant/Gladys) to install Gladys 4 on your machine for development purpose.

### Server-side

#### Create a new folder for your service

All services are located inside the [server/services](https://github.com/GladysAssistant/Gladys/tree/master/server/services) folder.

Create a new folder with the name of your service. The name should be alphanumeric, in lowercase, and with dashes as separator if needed.

Example of good folder names:

- `wemo`
- `philips-hue`
- `zwave`
- `usb`

#### Create a package.json

The package.json will describe how compatible is your service, and which dependencies are needed.

You can look on Github at all package.json, but here is an example of a good package.json:

```json
{
  "name": "gladys-darksky",
  "main": "index.js",
  "os": ["darwin", "linux", "win32"],
  "cpu": ["x64", "arm", "arm64"],
  "scripts": {},
  "dependencies": {
    "axios": "^0.18.0"
  }
}
```

**Note:** `os` and `cpu` fields are mandatory. It's useful to tell Gladys if your service runs only on Linux, or is running on windows (win32) and MacOS (darwin) as well.

#### Create an index.js file

The index.js is the entry point of your service. It's a function which return all exposed function of your service.

Here is an example `index.js` file. I'll describe it right after.

```javascript
const logger = require("../../utils/logger");
const ExampleLightHandler = require("./lib/light");

module.exports = function ExampleService(gladys) {
  // here is an example module
  const axios = require("axios");

  // @ts-ignore: TS doesn't know about the axios.create function
  const client = axios.create({
    timeout: 1000,
  });
  /**
   * @public
   * @description This function starts the ExampleService service
   * @example
   * gladys.services.example.start();
   */
  async function start() {
    logger.log("starting example service");
  }

  /**
   * @public
   * @description This function stops the ExampleService service
   * @example
   * gladys.services.example.stop();
   */
  async function stop() {
    logger.log("stopping example service");
  }

  return Object.freeze({
    start,
    stop,
    light: new ExampleLightHandler(gladys, client),
  });
};
```

- The `index.js` file should expose 2 functions: start, and stop. Those functions are mandatory, and should respectively start the service or stop it.
- All require of dependencies listed in the package.json should be done **inside** the function, not outside. This is because we want each service to be fully isolated and not to crash if the NPM module crash.
- The `gladys` variable is the Gladys instance and gives you access to all the Gladys API. A service shouldn't try to contact the database itself, it should only use the Gladys API. If a query is missing, don't hesitate to code a new function in Gladys API.
- Comments on top of functions are mandatory and serve not only for documentation purpose, but for type checking as well.

#### Linking your service to Gladys

When your service is ready to be tested, you can edit the [server/services/index.js](https://github.com/GladysAssistant/Gladys/blob/master/server/services/index.js) file and add the require to your service.

#### Unit-tests

Gladys 4 main goal is to be a reliable and stable core.

Therefore, all services of Gladys should be fully tested with a test coverage > 90%.

Tests of services are located in the folder [server/test/services](https://github.com/GladysAssistant/Gladys/tree/master/server/test/services).

I suggest you have a look at the [tests of the example service](https://github.com/GladysAssistant/Gladys/tree/master/server/test/services/example) to give you an idea of how tests looks like.

To run tests, in the `server` folder run:

```
npm test
```

If you want to execute only the tests relative to your service, you can add `.only` to your tests, example:

```javascript
describe.only("ExampleService", () => {
  const exampleService = ExampleService();
  it("should have start function", () => {
    expect(exampleService)
      .to.have.property("start")
      .and.be.instanceOf(Function);
  });
});
```

(Be careful to remove the `.only` before commiting)

**Note on Mocking:** Your tests are probably calling a third-party NPM module. We recommend that you mock all calls to the module using proxyquire like [here](https://github.com/GladysAssistant/Gladys/blob/master/server/test/services/example/index.test.js#L5). Your tests shouldn't call real-world API!

#### Adding API routes

Your `index.js` can return a `controllers` attribute.

A good example of how a REST API was implemented in a service is the [Philips Hue service](https://github.com/GladysAssistant/Gladys/tree/master/server/services/philips-hue).

Have a look at the `index.js` file and the `api` folder.

#### Code quality

We use a pretty strict `eslint` configuration.

Use `VSCode` for developement to see linting issues in real time, or execute `npm run eslint` in the `server` folder to see all linting errors.

### Frontend

Gladys 4 frontend is a [preact](https://preactjs.com/) app.

If you want to add features to the frontend, you can edit the code in the `front` folder.

All the code relative to the UI of services is located in the [front/src/routes/integration/all](https://github.com/GladysAssistant/Gladys/tree/master/front/src/routes/integration/all).

#### Submit your service

If you think your service is good enough to be published, congrats!

You can submit a GitHub pull request to the repository.

Read: [How to create a pull request](https://help.github.com/en/articles/creating-a-pull-request).
