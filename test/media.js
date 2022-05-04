'use strict';
const should = require('should');

const zapier = require('zapier-platform-core');

const App = require('../index');
const appTester = zapier.createAppTester(App);

//These are automated tests for the Media Trigger and Media Update.
//They will run every time the `zapier test` command is executed.
describe('media trigger', () => {
  zapier.tools.env.inject();

  // Make sure there's an open issue to fetch here!
  it('should get a media (video)', (done) => {
    const bundle = {
      authData: {
        api_key: process.env.API_KEY
      },

      // Active it to test with a single project
      // inputData: {
      //   project_id: '7442260' // Change it for your own project id
      // }
    };
    appTester(App.triggers.media.operation.perform, bundle)
      .then((response) => {
        response.should.be.an.instanceOf(Array);
        done();
      })
      .catch(done);
  });
});
