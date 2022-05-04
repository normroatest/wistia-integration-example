const sample = require('../samples/sample_issue');

const triggerMedia = (z, bundle) => {

  const params = {}
  if (bundle.inputData.project_id) {
    params.project_id = bundle.inputData.project_id;
  }

  const responsePromise = z.request({
    method: 'GET',
    url: `https://api.wistia.com/v1/medias.json`,
    params: params
  });
  return responsePromise
    .then(response => response.json);
};

module.exports = {
  key: 'media',
  noun: 'Media',

  display: {
    label: 'Get Medias',
    description: 'Triggers when found a new media.'
  },

  operation: {
    inputFields: [
      {key: 'project_id', label: 'If you wish to do it by Project (optional) ', required: false, dynamic: 'projects.id.name'}
    ],
    perform: triggerMedia,
    sample: sample
  }
};
