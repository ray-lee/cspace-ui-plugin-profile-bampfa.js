# cspace-ui-plugin-profile-bampfa

[![build status](https://travis-ci.org/cspace-deployment/cspace-ui-plugin-profile-bampfa.js.svg?branch=master)](https://travis-ci.org/cspace-deployment/cspace-ui-plugin-profile-bampfa.js)

A cspace-ui plugin containing configuration for the UC Berkeley Art Museum and Pacific Film Archive.

## Installation

Using git:

```
$ git clone https://github.com/cspace-deployment/cspace-ui-plugin-profile-bampfa.js.git
$ cd cspace-ui-plugin-profile-bampfa.js
$ npm install
```

## Development

To run the profile:

```
$ npm run devserver
```

Then open a browser to http://localhost:8080. This runs the cspace-ui application, configured with
this plugin.

By default, the application served from the dev server will use the CollectionSpace services API
located at http://nightly.collectionspace.org:8180. Note that nightly.collectionspace.org does not
host BAMPFA-customized CollectionSpace services, so some features may not work properly. There is
currently no publicly accessible CollectionSpace 5.0 server customized for BAMPFA, but source code
is available:

- BAMPFA 5.0 services layer: https://github.com/cspace-deployment/services/tree/bampfa_5.0
- BAMPFA 5.0 application layer: https://github.com/cspace-deployment/application/tree/bampfa_5.0

A BAMPFA-customized CollectionSpace 5.0 server can be built from these sources, and installed
on a host of your own.

To run the application against CollectionSpace services located on a different host, edit
index.html, and change the `serverUrl` and `serverTimeZone` configuration properties. For
example, to use a server running on localhost, port 8180, in the Pacific time zone, use the
settings:

```
cspaceUI({
  serverUrl: 'http://localhost:8180',
  serverTimeZone: 'America/Los_Angeles',
  ...
});
```

This project installs a compatible published version of cspace-ui as a development dependency, and
runs this plugin with that version of cspace-ui. During development it may be necessary to run this
plugin against an unreleased version of cspace-ui, for example to use features that are being
developed in cspace-ui concurrently with the development of this plugin. To do this, download the
source code of the cspace-ui project, and ensure that `npm install` has been run. Then run
`npm link` in that project (with superuser privileges). In this project, run `npm link cspace-ui`.
This replaces the cspace-ui dependency with a symbolic link to the local cspace-ui project
directory, so that any changes made to the cspace-ui source code will be visible to this project,
once `npm run build` has been run in cspace-ui.
