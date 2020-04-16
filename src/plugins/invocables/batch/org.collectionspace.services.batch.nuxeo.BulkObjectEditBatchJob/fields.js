import { defineMessages } from 'react-intl';

export default (configContext) => {
  const {
    AutocompleteInput,
  } = configContext.inputComponents;

  const {
    configKey: config,
  } = configContext.configHelpers;


  return {
    params: {
      bampfaObjectProductionPerson: {
        [config]: {
          messages: defineMessages({
            name: {
              id: 'field.collectionobjects_bampfa.bampfaObjectProductionPerson.name',
              defaultMessage: 'Artist or maker name',
            },
          }),
          view: {
            type: AutocompleteInput,
            props: {
              source: 'person/local,person/shared',
            },
          },
        },
      },
    },
  };
};
