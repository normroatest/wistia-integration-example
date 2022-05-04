'use strict';
const should = require('should');

const zapier = require('zapier-platform-core');

const App = require('../index');
const appTester = zapier.createAppTester(App);

//This is an automated test for the Repo Trigger which populates the repo dropdown.
//It will run every time the `zapier test` command is executed.
describe('projects trigger', () => {
  zapier.tools.env.inject();

  // Make sure were pulling projects from Westia!
  it('should get a project', (done) => {
    const bundle = {
      authData: {
        api_key: process.env.API_KEY
      },
    };
    appTester(App.triggers.projects.operation.perform, bundle)
      .then((response) => {
        response.should.be.an.instanceOf(Array);
        done();
      })
      .catch(done);
  });
});
