var assert = require('assert');
var conf = require('../config');

describe('ADAL', function () { // eslint-disable-line no-undef
  it( // eslint-disable-line no-undef
    'Checking clientID and clientSecret in constants.js',
    function () {
      assert(
        isADALConfigured(conf),
        '\nRegister clientId, clientSecret and tokenEndpoint in file config.js.\n' +
        'You don\'t have them? Register your app in the Microsoft Azure Portal\n' +
        'http://manage.windowsazure.com\n' +
        'App type: Web Application\n' +
        'Sign on URL: http://localhost:3000\n' +
        'App permissions: Microsoft Graph > Read and write calendars in all mailboxes\n' +
        'App permissions: Microsoft Graph > Read directory data\n\n' +
        'Note: These are application permissions, not delegated permissions.'
      );
    }
  );
});

function isADALConfigured(configuration) {
  var clientIDConfigured =
    typeof(configuration.clientId) !== 'undefined' &&
    configuration.clientId !== null &&
    configuration.clientId !== '' &&
    configuration.clientId !== 'ENTER_YOUR_CLIENT_ID';
  var clientSecretConfigured =
    typeof(configuration.clientSecret) !== 'undefined' &&
    configuration.clientSecret !== null &&
    configuration.clientSecret !== '' &&
    configuration.clientSecret !== 'ENTER_YOUR_SECRET';
  var tokenEndpointConfigured =
    typeof(configuration.tokenEndpoint) !== 'undefined' &&
    configuration.tokenEndpoint !== null &&
    configuration.tokenEndpoint !== '' &&
    configuration.tokenEndpoint !== 'ENTER_YOUR_TOKEN_ISSUING_ENDPOINT';

  return clientIDConfigured && clientSecretConfigured && tokenEndpointConfigured;
}
