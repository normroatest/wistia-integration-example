const sample = require('../samples/sample_projects_list');

const triggerProjects = async (z, bundle) => {

  //updated with async/await
  const res = await z.request({
    url: 'https://api.wistia.com/v1/projects.json'
  });
  return res.json;
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
