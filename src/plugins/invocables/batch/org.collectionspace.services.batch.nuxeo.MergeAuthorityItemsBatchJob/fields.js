export default (configContext) => {
  const {
    configKey: config,
  } = configContext.configHelpers;

  return {
    params: {
      targetCSID: {
        [config]: {
          view: {
            props: {
              source: 'citation/local,citation/worldcat,concept/activity,concept/associated,concept/material,concept/nomenclature,concept/occasion,organization/local,organization/ulan,organization/collective,person/local,person/ulan,place/local,place/tgn,location/local,location/crate,location/offsite,work/local,work/cona',
              showQuickAdd: false,
            },
          },
        },
      },
    },
  };
};
