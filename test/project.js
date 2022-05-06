'use strict';
const { expect } = require('chai');
const nock = require('nock');
const zapier = require('zapier-platform-core');
const response = require('./fixtures/responses/project.json');
const App = require('../index');
const appTester = zapier.createAppTester(App);
const config = require('../config/default');

//These are automated tests for the Media Trigger and Media Update.
//They will run every time the `zapier test` command is executed.
describe('create project action', () => {
  zapier.tools.env.inject();
  let result;
  const bundle = {
    authData: {
      api_key: config.Auth.API_KEY
    },
    inputData: {
      name: 'Test Project',
    }
  };

  before (async () => {
    nock('https://api.wistia.com')
      .post(`/v1/projects.json`)
      .query({
        name: bundle.inputData.name,
      })
      .reply(200, response);

    result = await appTester(App.creates.createProject.operation.perform, bundle);
  });

  it('should create a project', (done) => {
    expect(result).to.be.an('Object');
    done();
  });
});
