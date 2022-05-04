const sample = require('../samples/sample_repo_list');

const triggerProjects = (z, bundle) => {
  const responsePromise = z.request({
    url: 'https://api.wistia.com/v1/projects.json'
  });
  return responsePromise
    .then(response =>response.json);
};

module.exports = {
  key: 'projects',
  noun: 'Project',

  display: {
    label: 'Get Projects',
    hidden: true,
    description: 'The only purpose of this trigger is to populate the dropdown list of projects, thus, it\'s hidden.'
  },

  operation: {
    inputFields: [

    ],
    perform: triggerProjects,
    sample: sample
  }
};
