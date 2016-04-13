/*
 * Copyright (c) Microsoft All rights reserved. Licensed under the MIT license.
 * See LICENSE in the project root for license information.
 */

var request = require('request');
var Q = require('q');
var config = require('./config');

// The auth module object.
var auth = {};

// @name getAccessToken
// @desc Makes a request for a token using client credentials.
auth.getAccessToken = function () {
  var deferred = Q.defer();

  // These are the parameters necessary for the OAuth 2.0 Client Credentials Grant Flow.
  // For more information, see Service to Service Calls Using Client Credentials (https://msdn.microsoft.com/library/azure/dn645543.aspx).
  var requestParams = {
    grant_type: 'client_credentials',
    client_id: config.clientId,
    client_secret: config.clientSecret,
    resource: 'https://graph.microsoft.com'
  };

  // Make a request to the token issuing endpoint.
  request.post({ url: config.tokenEndpoint, form: requestParams }, function (err, response, body) {
    var parsedBody = JSON.parse(body);

    if (err) {
      deferred.reject(err);
    } else if (parsedBody.error) {
      deferred.reject(parsedBody.error_description);
    } else {
      // If successful, return the access token.
      deferred.resolve(parsedBody.access_token);
    }
  });

  return deferred.promise;
};

module.exports = auth;
