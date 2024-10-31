# cspace-ui-plugin-profile-bampfa

[![build status](https://travis-ci.org/cspace-deployment/cspace-ui-plugin-profile-bampfa.js.svg?branch=master)](https://travis-ci.org/cspace-deployment/cspace-ui-plugin-profile-bampfa.js)

A cspace-ui plugin containing configuration for the UC Berkeley Art Museum and Pacific Film Archive.

## Installation

### For developers

Follow these instructions to download and install the source code of the plugin.

Using git:

```
$ git clone https://github.com/cspace-deployment/cspace-ui-plugin-profile-bampfa.js.git
$ cd cspace-ui-plugin-profile-bampfa.js
$ npm install
```

To run the cspace-ui application configured with this plugin in development, using a remote
back-end CollectionSpace server:

```
$ npm run devserver --back-end=https://bampfa.qa.collectionspace.org
```

Then open a browser to http://localhost:8080.

Alternatively, to run the cspace-ui application configured with this plugin in development, using
the UI configuration in index.html:

```
$ npm run devserver
```

By default, the configuration in index.html uses the CollectionSpace services API located at
http://localhost:8180. To run the application against CollectionSpace services located on a
different host, edit index.html, and change the `serverUrl` configuration property. Note that the
CollectionSpace services on the specified server must have been deployed with the build-time
environment variable `CSPACE_BAMPFA_UI_BASE_URL_OPT` set to `http://localhost:8080/` (note the
trailing slash). This ensures that CORS and OAuth on the server are configured to allow connections
from the locally running UI.