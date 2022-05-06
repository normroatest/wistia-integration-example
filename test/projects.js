'use strict';
const { expect } = require('chai');
const nock = require('nock');
const zapier = require('zapier-platform-core');
const response = require('./fixtures/responses/project_list.json');
const App = require('../index');
const appTester = zapier.createAppTester(App);
const config = require('../config/default');

//This is an automated test for the Repo Trigger which populates the repo dropdown.
//It will run every time the `zapier test` command is executed.
describe('projects trigger', () => {
  zapier.tools.env.inject();
  let result;
  const bundle = {
    authData: {
      api_key: config.Auth.API_KEY
    },
  };

  before (async () => {
    nock('https://api.wistia.com')
      .get('/v1/projects.json')
      .reply(200, response);

    result = await appTester(App.triggers.projects.operation.perform, bundle);
  });

  // Make sure were pulling projects from Westia!
  it('should get a project', (done) => {
    expect(result).to.be.an('Array');
    done();
  });
});
