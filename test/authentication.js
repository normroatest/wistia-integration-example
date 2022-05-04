'use strict';
const zapier = require('zapier-platform-core');

const App = require('../index');
const appTester = zapier.createAppTester(App);


describe('basic authentication', () => {
  // Put your test API_KEY in a .env file.
  // The inject method will load your API_KEY and make it available to use in your
  // tests.
  zapier.tools.env.inject();

  it('should authenticate', (done) => {
    const bundle = {
      authData: {
        api_key: process.env.API_KEY
      }
    };

    appTester(App.authentication.test, bundle)
      .then((response) => {
        response.should.be.an.instanceOf(Array);
        done();
      })
      .catch(done);
  });

});
