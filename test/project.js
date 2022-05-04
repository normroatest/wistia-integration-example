'use strict';
const should = require('should');

const zapier = require('zapier-platform-core');

const App = require('../index');
const appTester = zapier.createAppTester(App);

//These are automated tests for the Media Trigger and Media Update.
//They will run every time the `zapier test` command is executed.
describe('create project action', () => {
  zapier.tools.env.inject();

  it('should create a project', (done) => {
    const bundle = {
      authData: {
        api_key: process.env.API_KEY
      },
      inputData: {
        name: 'Test Project',
      }
    };
    appTester(App.creates.createProject.operation.perform, bundle)
      .then((response) => {
        response.should.be.an.instanceOf(Object);
        done();
      })
      .catch(done);
  });
});
