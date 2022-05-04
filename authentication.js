'use strict';

const authentication = {
  type: 'custom',
  test: {
    url:
      'https://api.wistia.com/v1/medias.json'
  },
  fields: [
    {
      key: 'api_key',
      type: 'string',
      required: true,
      helpText: 'Found on your account > settings > API access > Password',
    }
  ],
};

// Helps us to set up an Authorization header on the API requests
const addApiKeyToHeader = (request, z, bundle) => {
  const apiKey = `${bundle.authData.api_key}`;
  request.headers.Authorization = `Bearer ${apiKey}`;
  return request;
};

module.exports = {
  authentication,
  addApiKeyToHeader
}