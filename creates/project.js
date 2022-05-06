const sample = require('../samples/sample_project');

const createProject = async (z, bundle) => {

  const response = await z.request({
    method: 'POST',
    url: `https://api.wistia.com/v1/projects.json`,
    params: {
      name: bundle.inputData.name
    },
  });

  return response.json;
};

module.exports = {
  key: 'createProject',
  noun: 'Project',

  display: {
    label: 'Create Project',
    description: 'Creates a Project'
  },

  operation: {
    inputFields: [
      {key: 'name', label:'Name', required: true},
    ],
    perform: createProject,
    sample: sample
  }
};
