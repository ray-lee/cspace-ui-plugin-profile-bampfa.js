import { defineMessages } from 'react-intl';
// import getCoreFields from '../../../helpers/coreFields';

export default (pluginContext) => {
  const {
    AutocompleteInput,
    CheckboxInput,
    CompoundInput,
    HierarchyInput,
    OptionPickerInput,
    StructuredDateInput,
    TextInput,
    TermPickerInput,
  } = pluginContext.inputComponents;

  const {
    configKey: config,
  } = pluginContext.configHelpers;

//   const coreFields = getCoreFields(pluginContext);

  return {
    document: {
      [config]: {
        view: {
          type: CompoundInput,
          props: {
            defaultChildSubpath: 'ns2:persons_common',
          },
        },
      },
      'ns2:relations-common-list': {
        [config]: {
          service: {
            ns: 'http://collectionspace.org/services/relation',
          },
        },
        'relation-list-item': {
          [config]: {
            view: {
              type: HierarchyInput,
              props: {
                messages: defineMessages({
                  parent: {
                    id: 'hierarchyInput.person.parent',
                    defaultMessage: 'Broader',
                  },
                  children: {
                    id: 'hierarchyInput.person.children',
                    defaultMessage: 'Narrower',
                  },
                  siblings: {
                    id: 'hierarchyInput.person.siblings',
                    defaultMessage: 'Adjacent',
                  },
                }),
              },
            },
          },
        },
      },
      // Define core fields
    //   ...coreFields,
      'ns2:persons_common': {
        [config]: {
          service: {
            ns: 'http://collectionspace.org/services/person',
          },
        },
        inAuthority: {
          [config]: {
            cloneable: false,
          },
        },
        shortIdentifier: {
          [config]: {
            cloneable: false,
          },
        },
        personTermGroupList: {
          [config]: {
            view: {
              type: CompoundInput,
            },
          },
          
          personTermGroup: {
            [config]: {
              messages: defineMessages({
                name: {
                  id: 'field.persons_common.personTermGroup.name',
                  defaultMessage: 'Term',
                },
              }),
              repeating: true,
              view: {
                type: CompoundInput,
              },
            },
            termDisplayName: {
              [config]: {
                messages: defineMessages({
                  name: {
                    id: 'field.persons_common.termDisplayName.name',
                    defaultMessage: 'Display name',
                  },
                }),
                required: true,
                view: {
                  type: TextInput,
                },
              },
            },
            termFormattedDisplayName: {
              [config]: {
                messages: defineMessages({
                  name: {
                    id: 'field.persons_common.termFormattedDisplayName.name',
                    defaultMessage: 'Formatted display name',
                  },
                }),
                view: {
                  // TODO: Change to RichTextInput when it's implemented
                  type: TextInput,
                },
              },
            },
            termName: {
              [config]: {
                messages: defineMessages({
                  name: {
                    id: 'field.persons_common.termName.name',
                    defaultMessage: 'Name',
                  },
                }),
                view: {
                  type: TextInput,
                },
              },
            },
            termQualifier: {
              [config]: {
                messages: defineMessages({
                  name: {
                    id: 'field.persons_common.termQualifier.name',
                    defaultMessage: 'Qualifier',
                  },
                }),
                view: {
                  type: TextInput,
                },
              },
            },
            termStatus: {
              [config]: {
                messages: defineMessages({
                  name: {
                    id: 'field.persons_common.termStatus.name',
                    defaultMessage: 'Status',
                  },
                }),
                view: {
                  type: OptionPickerInput,
                  props: {
                    source: 'personTermStatuses',
                  },
                },
              },
            },
            termType: {
              [config]: {
                messages: defineMessages({
                  name: {
                    id: 'field.persons_common.termType.name',
                    defaultMessage: 'Type',
                  },
                }),
                view: {
                  type: TermPickerInput,
                  props: {
                    source: 'persontermtype',
                  },
                },
              },
            },
            termFlag: {
              [config]: {
                messages: defineMessages({
                  name: {
                    id: 'field.persons_common.termFlag.name',
                    defaultMessage: 'Flag',
                  },
                }),
                view: {
                  type: TermPickerInput,
                  props: {
                    source: 'persontermflag',
                  },
                },
              },
            },
            termLanguage: {
              [config]: {
                messages: defineMessages({
                  name: {
                    id: 'field.persons_common.termLanguage.name',
                    defaultMessage: 'Language',
                  },
                }),
                view: {
                  type: TermPickerInput,
                  props: {
                    source: 'languages',
                  },
                },
              },
            },
            termPrefForLang: {
              [config]: {
                messages: defineMessages({
                  name: {
                    id: 'field.persons_common.termPrefForLang.name',
                    defaultMessage: 'Preferred for language',
                  },
                }),
                view: {
                  type: CheckboxInput,
                },
              },
            },
            salutation: {
              [config]: {
                messages: defineMessages({
                  name: {
                    id: 'field.persons_common.salutation.name',
                    defaultMessage: 'Salutation',
                  },
                }),
                view: {
                  type: OptionPickerInput,
                  props: {
                    source: 'salutations',
                  },
                },
              },
            },
            title: {
              [config]: {
                messages: defineMessages({
                  name: {
                    id: 'field.persons_common.title.name',
                    defaultMessage: 'Title',
                  },
                }),
                view: {
                  type: OptionPickerInput,
                  props: {
                    source: 'personTitles',
                  },
                },
              },
            },
            foreName: {
              [config]: {
                messages: defineMessages({
                  name: {
                    id: 'field.persons_common.forename.name',
                    defaultMessage: 'Forename',
                  },
                }),
                view: {
                  type: TextInput,
                },
              },
            },
            middleName: {
              [config]: {
                messages: defineMessages({
                  name: {
                    id: 'field.persons_common.middleName.name',
                    defaultMessage: 'Middle name',
                  },
                }),
                view: {
                  type: TextInput,
                },
              },
            },
            surName: {
              [config]: {
                messages: defineMessages({
                  name: {
                    id: 'field.persons_common.surname.name',
                    defaultMessage: 'Surname',
                  },
                }),
                view: {
                  type: TextInput,
                },
              },
            },
            nameAdditions: {
              [config]: {
                messages: defineMessages({
                  name: {
                    id: 'field.persons_common.nameAdditions.name',
                    defaultMessage: 'Addition',
                  },
                }),
                view: {
                  type: TextInput,
                },
              },
            },
            initials: {
              [config]: {
                messages: defineMessages({
                  name: {
                    id: 'field.persons_common.initials.name',
                    defaultMessage: 'Initials',
                  },
                }),
                view: {
                  type: TextInput,
                },
              },
            },
            termSource: {
              [config]: {
                messages: defineMessages({
                  name: {
                    id: 'field.persons_common.termSource.name',
                    defaultMessage: 'Name',
                  },
                  fullName: {
                    id: 'field.persons_common.termSource.fullName',
                    defaultMessage: 'Source name',
                  },
                }),
                view: {
                  type: AutocompleteInput,
                  props: {
                    source: 'citation/local,citation/shared,citation/worldcat',
                  },
                },
              },
            },
            termSourceDetail: {
              [config]: {
                messages: defineMessages({
                  name: {
                    id: 'field.persons_common.termSourceDetail.name',
                    defaultMessage: 'Detail',
                  },
                }),
                view: {
                  type: TextInput,
                },
              },
            },
            termSourceID: {
              [config]: {
                messages: defineMessages({
                  name: {
                    id: 'field.persons_common.termSourceID.name',
                    defaultMessage: 'ID',
                  },
                }),
                view: {
                  type: TextInput,
                },
              },
            },
            termSourceNote: {
              [config]: {
                messages: defineMessages({
                  name: {
                    id: 'field.persons_common.termSourceNote.name',
                    defaultMessage: 'Note',
                  },
                }),
                view: {
                  type: TextInput,
                },
              },
            },
          },
				},
        },
      // },
      'ns2:persons_bampfa': {
        [config]: {
          service: {
            ns: 'http://collectionspace.org/services/person',
          },
        },
        birthCity: {
          [config]: {
            messages: defineMessages ({
              name: {
                  id: 'field.persons_bampfa.birthcity.name',
                  defaultMessage: 'Birth City',
              },
            }),
            view: {
              type: TextInput,
            },
          },
        },
        otherRegionalInfo: {
          [config]: {
              messages: defineMessages ({
                  name: {
                      id: 'field.persons_bampfa.otherRegionalInfo.name',
                      defaultMessage: 'Other Regional Info',
                  },
              }),
              view: {
                  type: TextInput,
              },
          },
        },
        dynastyPeriod: {
            [config]: {
                messages: defineMessages ({
                    name: {
                        id: 'field.bampfa_persons.dynastyPeriod.name',
                        defaultMessage: 'Dynasty/Period',
                    },
                }),
                view: {
                    type: TextInput,
                },
            },
        },
        datesActive: {
            [config]: {
                messages: defineMessages ({
                    name: {
                        id: 'field.persons_bampfa.datesActive.name',
                        defaultMessage: 'Dates Active',
                    },
                }),
                view: {
                    type: TextInput,
                },
            },
        },
        nameNote: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.persons_bampfa.nameNote.name',
                defaultMessage: 'Name note',
              },
            }),
            view: {
              type: TextInput,
              props: {
                multiline: true,
              },
            },
          },
        },
        copyrightCredit : {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.persons_bampfa.copyrightCredit.name',
                defaultMessage: 'Copyright Credit'
              },
            }),
            view: {
              type: TextInput,
              props: {
                multiline: true,
              },
            },
          },
        },
        copyrightNote : {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.persons_bampfa.copyrightNote.name',
                defaultMessage: 'Copyright Note'
              },
            }),
            view: {
              type: TextInput,
              props: {
                multiline: true,
              },
            },
          },
        },
        copyrightHolder : {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.persons_bampfa.copyrightHolder.name',
                defaultMessage: 'Copyright Holder'
              },
            }),
            view: {
              type: TextInput,
            },
          },
        },
        permissionToReproduce : {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.persons_bampfa.permissionToReproduce.name',
                defaultMessage: 'Permission to reproduce granted for noncommercial uses',
              },
            }),
            view: {
              type: OptionPickerInput,
            },
          },
        },
      },
    },
  };
};
