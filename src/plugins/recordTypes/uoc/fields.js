export default (configContext) => {
  const {
    configKey: config,
  } = configContext.configHelpers;

  return {
    document: {
      'ns2:uoc_common': {
        authorizationGroupList: {
          authorizationGroup: {
            authorizedBy: {
              [config]: {
                view: {
                  props: {
                    source: 'person/local,person/shared,person/ulan,organization/local,organization/shared,organization/collective,organization/ulan',
                  },
                },
              },
            },
          },
        },
        userGroupList: {
          userGroup: {
            user: {
              [config]: {
                view: {
                  props: {
                    source: 'person/local,person/shared,person/ulan,organization/local,organization/shared,organization/collective,organization/ulan',
                  },
                },
              },
            },
            userInstitution: {
              [config]: {
                view: {
                  props: {
                    source: 'organization/local,organization/shared,organization/collective,organization/ulan',
                  },
                },
              },
            },
          },
        },
        locationList: {
          location: {
            [config]: {
              view: {
                props: {
                  source: 'organization/local,organization/shared,organization/collective,organization/ulan,place/local,place/shared,location/local,location/crate,location/offsite',
                },
              },
            },
          },
        },
        staffGroupList: {
          staffGroup: {
            staffName: {
              [config]: {
                view: {
                  props: {
                    source: 'person/local,person/shared,person/ulan,organization/local,organization/shared,organization/collective,organization/ulan',
                  },
                },
              },
            },
          },
        },
      },
    },
  };
};
