'use strict';
const { expect } = require('chai');
const nock = require('nock');
const zapier = require('zapier-platform-core');
const response = require('./fixtures/responses/medias.json')
const App = require('../index');
const appTester = zapier.createAppTester(App);
const config = require('../config/default');

//These are automated tests for the Media Trigger and Media Update.
//They will run every time the `zapier test` command is executed.
describe('media trigger', () => {
  zapier.tools.env.inject();
  let result;
  let bundle = {
    authData: {
      api_key: config.Auth.API_KEY
    },
    // Active it to test with a single project
    // inputData: {
    //   project_id: '7442260' // Change it for your own project id
    // }
  };

  before (async () => {
    nock('https://api.wistia.com')
      .get('/v1/medias.json')
      .reply(200, response);

    result = await appTester(App.triggers.media.operation.perform, bundle);
  });

  // Make sure there's an open issue to fetch here!
  it('should get a media (video)', (done) => {
    expect(result).to.be.an('Array');
    done();
  });
});
