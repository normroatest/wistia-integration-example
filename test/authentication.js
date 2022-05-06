'use strict';
const { expect } = require('chai');
const nock = require('nock');
const zapier = require('zapier-platform-core');
const response = require('./fixtures/responses/medias.json')
const App = require('../index');
const appTester = zapier.createAppTester(App);
const config = require('../config/default');

describe('basic authentication', () => {
  // Put your test API_KEY in a .env file.
  // The inject method will load your API_KEY and make it available to use in your
  // tests.
  zapier.tools.env.inject();
  let result;
  let bundle = {
    authData: {
      api_key: config.Auth.API_KEY
    }
  };

  before (async () => {
    nock('https://api.wistia.com')
      .get('/v1/medias.json')
      .reply(200, response);

    result = await appTester(App.authentication.test, bundle);
  });

  it('should authenticate', (done) => {
    expect(result).to.be.an('Array');
    done();
  });
});
