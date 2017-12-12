import { defineMessages } from 'react-intl';

export default (pluginContext) => {
  const {
    AutocompleteInput,
    CompoundInput,
    DateInput,
    OptionPickerInput,
    StructuredDateInput,
    TextInput,
    CheckboxInput,
    TermPickerInput,
  } = pluginContext.inputComponents;

  const {
    configKey: config,
  } = pluginContext.configHelpers;

  const {
    DATA_TYPE_INT,
    DATA_TYPE_FLOAT,
    DATA_TYPE_DATE,
    DATA_TYPE_BOOL,
  } = pluginContext.dataTypes;

  return {
    document: {
      'ns2:collectionobjects_common': {
        [config]: {
          service: {
            ns: 'http://collectionspace.org/services/collectionobject',
          },
        },
        textualInscriptionGroupList: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.bampfa_collectionobjects.textualInscriptionGroupList.name',
                defaultMessage: 'Textual Inscription',
              },
            }),
            view: {
              type: CompoundInput,
            },
          },
        },
        nonTextualInscriptionGroupList: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.bampfa_collectionobjects.nonTextualInscriptionGroupList.name',
                defaultMessage: 'Non-Textual Inscription',
              },
            }),
            view: {
              type: CompoundInput,
            },
          },
        },
        objectNumber: {
          [config]: {
            cloneable: false,
            messages: defineMessages({
              name: {
                id: 'field.bampfa_collectionobjects.objectNumber.name',
                defaultMessage: 'ID number',
              },
            }),
            view: {
              type: AutocompleteInput,
              props: {
                source: 'TEMP',
                readOnly: true,
              },
            },
          },
        },
        titleGroupList: {
          [config]: {
            view: {
              type: CompoundInput,
            },
          },
          titleGroup: {
            [config]: {
              repeating: true,
              view: {
                type: CompoundInput,
              },
            },
            bampfaTitle: {
              [config]: {
                view: {
                  type: TextInput,
                  props: {
                    multiline: true,
                  },
                },
              },
            },
          },
        },
        measuredPartGroupList: {
          [config]: {
            view: {
              type: CompoundInput,
            },
          },
          measuredPartGroup: {
            [config]: {
              repeating: true,
              view: {
                type: CompoundInput,
              },
            },
            dimensionSummary: {
              [config]: {
                messages: defineMessages({
                  name: {
                    id: 'field.collectionobjects_common.dimensionSummary.name',
                    defaultMessage: 'Summary',
                  },
                }),
                view: {
                  type: TextInput,
                  props: {
                    readOnly: true,
                    source: 'measuredPart',
                  },
                },
              },
            },
            dimensionNote: {
              [config]: {
                messages: defineMessages({
                  name: {
                    id: 'field.collectionobjects_common.dimensionNote.name',
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
      'ns2:collectionobjects_bampfa': {
        [config]: {
          service: {
            ns: 'http://collectionspace.org/services/collectionobject',
          },
        },
        nametitle: {
          [config]: {
            view: {
              type: TextInput,
            },
          },
        },

        accNumberPrefix: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.collectionobjects_bampfa.accNumberPrefix.name',
                defaultMessage: 'Prefix',
              },
            }),
            view: {
              type: TextInput,
            },
          },
        },
        accNumberPart1: {
          [config]: {
            dataType: DATA_TYPE_INT,
            messages: defineMessages({
              name: {
                id: 'field.collectionobjects_bampfa.accNumberPart1.name',
                defaultMessage: 'Year',
              },
            }),
            view: {
              type: TextInput,
            },
          },
        },
        accNumberPart2: {
          [config]: {
            dataType: DATA_TYPE_INT,
            messages: defineMessages({
              name: {
                id: 'field.collectionobjects_bampfa.accNumberPart2.name',
                defaultMessage: 'Gift',
              },
            }),
            view: {
              type: TextInput,
            },
          },
        },
        accNumberPart3: {
          [config]: {
            dataType: DATA_TYPE_INT,
            view: {
              type: TextInput,
            },
          },
        },
        accNumberPart4: {
          [config]: {
            dataType: DATA_TYPE_INT,
            view: {
              type: TextInput,
            },
          },
        },
        accNumberPart5: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.collectionobjects_bampfa.accNumberPart5.name',
                defaultMessage: 'Alpha',
              },
            }),
            view: {
              type: TextInput,
            },
          },
        },
        legalStatus: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.collectionobjects_bampfa.legalStatus.name',
                defaultMessage: 'Legal Status',
              },
            }),
            view: {
              type: TermPickerInput,
              props: {
                source: 'legalstatus',
              },
            },
          },
        },
        legalStatusDateGroup: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.collectionobjects_bampfa.legalStatusDateGroup.name',
                defaultMessage: 'Status Date',
              },
            }),
            view: {
              type: StructuredDateInput,
            },
          },
        },
        productionDate: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.collectionobjects_bampfa.productionDate.name',
                defaultMessage: 'Prodiction Date',
              },
            }),
            view: {
              type: StructuredDateInput,
            },
          },
        },
        bampfaObjectProductionPersonGroupList: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.collectionobjects_bampfa.bampfaObjectProductionPersonGroupList.name',
                defaultMessage: 'Artist or Maker',
              },
            }),
            view: {
              type: CompoundInput,
            },
          },
          bampfaObjectProductionPersonGroup: {
            [config]: {
              repeating: true,
              view: {
                type: CompoundInput,
                props: {
                  tabular: true,
                },
              },
            },
            bampfaObjectProductionPerson: {
              [config]: {
                messages: defineMessages({
                  name: {
                    id: 'field.collectionobjects_bampfa.bampfaObjectProductionPerson.name',
                    defaultMessage: 'Name',
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
            bampfaObjectProductionPersonRole: {
              [config]: {
                messages: defineMessages({
                  name: {
                    id: 'field.collectionobjects_bampfa.bampfaObjectProductionPersonRole.name',
                    defaultMessage: 'Role',
                  },
                }),
                view: {
                  type: TermPickerInput,
                  props: {
                    source: 'productionpersonrole',
                  },
                },
              },
            },
            bampfaObjectProductionPersonQualifier: {
              [config]: {
                messages: defineMessages({
                  name: {
                    id: 'field.collectionobjects_bampfa.bampfaObjectProductionPersonQualifier.name',
                    defaultMessage: 'Qualifier',
                  },
                }),
                view: {
                  type: TermPickerInput,
                  props: {
                    source: 'productionpersonqualifier',
                  },
                },
              },
            },
          },
        },
        artistDisplayOverride: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.collectionobjects_bampfa.artistDisplayOverride.name',
                defaultMessage: 'Artist Display Override',
              },
            }),
            view: {
              type: TextInput,
            },
          },
        },
        seriesTitle: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.collectionobjects_bampfa.seriesTitle.name',
                defaultMessage: 'Series Title',
              },
            }),
            view: {
              type: TextInput,
            },
          },
        },
        creditLine: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.collectionobjects_bampfa.creditLine.name',
                defaultMessage: 'Credit Line',
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
        otherNumberList: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.collectionobjects_bampfa.otherNumberList.name',
                defaultMessage: 'T.R. / Other Number',
              },
            }),
            view: {
              type: CompoundInput,
            },
          },
          otherNumberGroup: {
            [config]: {
              repeating: true,
              view: {
                type: CompoundInput,
                props: {
                  tabular: true,
                },
              },
            },
            numberType: {
              [config]: {
                messages: defineMessages({
                  name: {
                    id: 'field.collectionobjects_bampfa.numberType.name',
                    defaultMessage: 'Number Type',
                  },
                }),
                view: {
                  type: OptionPickerInput,
                  props: {
                    source: 'numberTypes',
                  },
                },
              },
            },
            numberValue: {
              [config]: {
                messages: defineMessages({
                  name: {
                    id: 'field.collectionobjects_bampfa.numberValue.name',
                    defaultMessage: 'T.R. / Other Number',
                  },
                }),
                view: {
                  type: TextInput,
                },
              },
            },
          },
        },
        objectProductionDateCirca: {
          [config]: {
            dataType: DATA_TYPE_BOOL,
            view: {
              type: CheckboxInput, // TO DO: CHECK IF THIS IS IT OR NOT
            },
          },
        },
        objectProductionDateCentury: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.collectionobjects_bampfa.objectProductionDateCentury.name',
                defaultMessage: 'Century',
              },
            }),
            view: {
              type: TextInput,
            },
          },
        },
        objectProductionDateEra: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.collectionobjects_bampfa.objectProductionDateEra.name',
                defaultMessage: 'Era',
              },
            }),
            view: {
              type: TermPickerInput,
              props: {
                source: 'dateera',
              },
            },
          },
        },
        objectProductionDynasty: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.collectionobjects_bampfa.objectProductionDynasty.name',
                defaultMessage: 'Dynasty',
              },
            }),
            view: {
              type: TextInput,
            },
          },
        },
        workDescription: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.collectionobjects_bampfa.workDescription.name',
                defaultMessage: 'Description of Work',
              },
            }),
            view: {
              type: TextInput,
            // },
              props: {
                multiline: true,
              },
            },
          },
        },
        acquisitionDateGroup: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.collectionobjects_bampfa.acquisitionDateGroup.name',
                defaultMessage: 'Acquisition Date',
              },
            }),
            repeating: true,
            view: {
              type: StructuredDateInput,
            },
          },
        },
        numberOfScans: {
          [config]: {
            dataType: DATA_TYPE_INT,
            messages: defineMessages({
              name: {
                id: 'field.collectionobjects_bampfa.numberOfScans.name',
                defaultMessage: 'Number of Scans',
              },
            }),
            view: {
              type: TextInput,
            },
          },
        },
        productionPlace: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.collectionobjects_bampfa.productionPlace.name',
                defaultMessage: 'Production Place',
              },
            }),
            repeating: true,
            view: {
              type: TextInput,
              props: {
                multiline: true,
              },
            },
          },
        },
        stateGeneration: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.collectionobjects_bampfa.stateGeneration.name',
                defaultMessage: 'State/Generation',
              },
            }),
            view: {
              type: TextInput,
            },
          },
        },
        soundOrSilent: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.collectionobjects_bampfa.soundOrSilent.name',
                defaultMessage: 'Sound or silent',
              },
            }),
            view: {
              type: OptionPickerInput,
              props: {
                source: 'soundOrSilents',
              },
            },
          },
        },
        bwOrColor: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.collectionobjects_bampfa.bwOrColor.name',
                defaultMessage: 'Black & White or Color',
              },
            }),
            view: {
              type: OptionPickerInput,
              props: {
                source: 'bwOrColors',
              },
            },
          },
        },
        acquisitionMethod: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.collectionobjects_bampfa.acquisitionMethod.name',
                defaultMessage: 'Acquisition Method',
              },
            }),
            view: {
              type: TermPickerInput,
              props: {
                source: 'acquisitionmethod',
              },
            },
          },
        },
        acquisitionSource: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.collectionobjects_bampfa.acquisitionSource.name',
                defaultMessage: 'Source',
              },
            }),
            repeating: true,
            view: {
              type: TextInput,
            },
          },
        },
        bampfaAcquisitionReason: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.collectionobjects_bampfa.bampfaAcquisitionReason.name',
                defaultMessage: 'For',
              },
            }),
            repeating: true,
            view: {
              type: TermPickerInput,
              props: {
                source: 'acquisitionreason',
              },
            },
          },
        },
        acquisitionProvisos: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.collectionobjects_bampfa.acquisitionProvisos.name',
                defaultMessage: 'Acquisition Terms',
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
        provenance: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.collectionobjects_bampfa.provenance.name',
                defaultMessage: 'Provenance',
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
        acquisitionNote: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.collectionobjects_bampfa.acquisitionNote.name',
                defaultMessage: 'Acquisition Note',
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
        appraisalInfo: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.collectionobjects_bampfa.appraisalInfo.name',
                defaultMessage: 'Appraisal Info',
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
        currentValueGroupList: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.collectionobjects_bampfa.currentValueGroupList.name',
                defaultMessage: 'Current Value',
              },
            }),
            view: {
              type: CompoundInput,
            },
          },
          currentValueGroup: {
            [config]: {
              repeating: true,
              view: {
                type: CompoundInput,
                props: {
                  tabular: true,
                },
              },
            },
            currentValue: {
              [config]: {
                dataType: DATA_TYPE_FLOAT,
                messages: defineMessages({
                  name: {
                    id: 'field.collectionobjects_bampfa.currentValue.name',
                    defaultMessage: 'Value',
                  },
                }),
                view: {
                  type: TextInput,
                },
              },
            },
            currentValueSource: {
              [config]: {
                messages: defineMessages({
                  name: {
                    id: 'field.collectionobjects_bampfa.currentValueSource.name',
                    defaultMessage: 'Source',
                  },
                }),
                view: {
                  type: TextInput,
                },
              },
            },
            currentValueDateGroup: {
              [config]: {
                messages: defineMessages({
                  name: {
                    id: 'field.collectionobjects_bampfa.currentValueDateGroup.name',
                    defaultMessage: 'Date',
                  },
                }),
                view: {
                  type: StructuredDateInput,
                },
              },
            },
          },
        },
        initialValueGroup: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.collectionobjects_bampfa.initialValueGroup.name',
                defaultMessage: 'Initial Value',
              },
            }),
            view: {
              type: CompoundInput,
              props: {
                tabular: true,
              },
            },
          },
          initialValue: {
            [config]: {
              dataType: DATA_TYPE_FLOAT,
              messages: defineMessages({
                name: {
                  id: 'field.collectionobjects_bampfa.initialValue.name',
                  defaultMessage: 'Value',
                },
              }),
              view: {
                type: TextInput,
              },
            },
          },
          initialValueSource: {
            [config]: {
              messages: defineMessages({
                name: {
                  id: 'field.collectionobjects_bampfa.initialValueSource.name',
                  defaultMessage: 'Source',
                },
              }),
              view: {
                type: TextInput,
              },
            },
          },
          initialValueDateGroup: {
            [config]: {
              messages: defineMessages({
                name: {
                  id: 'field.collectionobjects_bampfa.initialValueDateGroup.name',
                  defaultMessage: 'Date',
                },
              }),
              view: {
                type: StructuredDateInput,
              },
            },
          },
        },
        bampfaCollection: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.collectionobjects_bampfa.bampfaCollection.name',
                defaultMessage: 'Collection',
              },
            }),
            repeating: true,
            view: {
              type: TermPickerInput,
              props: {
                source: 'collection',
              },
            },
          },
        },
        subjectTheme: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.collectionobjects_bampfa.subjectTheme.name',
                defaultMessage: 'Subject/Theme',
              },
            }),
            repeating: true,
            view: {
              type: TermPickerInput,
              props: {
                source: 'subjectsandthemes',
              },
            },
          },
        },
        style: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.collectionobjects_bampfa.style.name',
                defaultMessage: 'Period/Style',
              },
            }),
            repeating: true,
            view: {
              type: TermPickerInput,
              props: {
                source: 'periodorstyle',
              },
            },
          },
        },
        partOf: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.collectionobjects_bampfa.partOf.name',
                defaultMessage: 'Part Of',
              },
            }),
            view: {
              type: TextInput,
            },
          },
        },
        copyrightCredit: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.copyrightCredit.name',
                defaultMessage: 'Copyright Credit',
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
        copyrightNote: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.collectionobjects_bampfa.copyrightNote.name',
                defaultMessage: 'Copyright Note',
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
        photoCredit: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.collectionobjects_bampfa.photoCredit.name',
                defaultMessage: 'Photo Credit',
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
        copyrightHolder: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.collectionobjects_bampfa.copyrightHolder.name',
                defaultMessage: 'Copyright Holder',
              },
            }),
            view: {
              type: TextInput,
            },
          },
        },
        permissionToReproduce: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.collectionobjects_bampfa..name',
                defaultMessage: 'Permission to reproduce granted for noncommercial uses',
              },
            }),
            view: {
              type: OptionPickerInput,
              props: {
                source: 'permissionToReproduce',
              },
            },
          },
        },
        conditionCheckGroupList: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.collectionobjects_bampfa.conditionCheckGroupList.name',
                defaultMessage: 'Condition Check',
              },
            }),
            view: {
              type: CompoundInput,
            },
          },
          conditionCheckGroup: {
            [config]: {
              repeating: true,
              view: {
                type: CompoundInput,
              },
            },
            conditionNote: {
              [config]: {
                messages: defineMessages({
                  name: {
                    id: 'field.collectionobjects_bampfa.conditionNote.name',
                    defaultMessage: 'Condition Note',
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
            conservationNote: {
              [config]: {
                messages: defineMessages({
                  name: {
                    id: 'field.collectionobjects_bampfa.conservationNote.name',
                    defaultMessage: 'Conservation Note',
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
            conditionCheckBy: {
              [config]: {
                messages: defineMessages({
                  name: {
                    id: 'field.collectionobjects_bampfa.conditionCheckBy.name',
                    defaultMessage: 'Checked By',
                  },
                }),
                view: {
                  type: TextInput,
                },
              },
            },
            conditionCheckDate: {
              [config]: {
                dataType: DATA_TYPE_DATE,
                messages: defineMessages({
                  name: {
                    id: 'field.collectionobjects_bampfa.conditionCheckDate.name',
                    defaultMessage: 'Date',
                  },
                }),
                view: {
                  type: DateInput,
                },
              },
            },
          },
        },
        comments: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.collectionobjects_bampfa.comments.name',
                defaultMessage: 'Notes',
              },
            }),
            repeating: true,
            view: {
              type: TextInput,
              props: {
                multiline: true,
              },
            },
          },
        },
        collectionTextGroupList: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.collectionobjects_bampfa.collectionTextGroupList.name',
                defaultMessage: 'Text/Label',
              },
            }),
            view: {
              type: CompoundInput,
            },
          },
          collectionTextGroup: {
            [config]: {
              repeating: true,
              view: {
                type: CompoundInput,
              },
            },
            collectionTextType: {
              [config]: {
                messages: defineMessages({
                  name: {
                    id: 'field.collectionobjects_bampfa.collectionTextType.name',
                    defaultMessage: 'Type',
                  },
                }),
                view: {
                  type: TextInput,
                },
              },
            },
            collectionTextDoNotPublish: {
              [config]: {
                dataType: DATA_TYPE_BOOL,
                messages: defineMessages({
                  name: {
                    id: 'field.collectionobjects_bampfa.collectionTextDoNotPublish.name',
                    defaultMessage: 'Do Not Publish',
                  },
                }),
                view: {
                  type: CheckboxInput,
                },
              },
            },
            collectionText: {
              [config]: {
                messages: defineMessages({
                  name: {
                    id: 'field.collectionobjects_bampfa.collectionText.name',
                    defaultMessage: 'Text',
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
            collectionTextAuthor: {
              [config]: {
                messages: defineMessages({
                  name: {
                    id: 'field.collectionobjects_bampfa.collectionTextAuthor.name',
                    defaultMessage: 'Author',
                  },
                }),
                view: {
                  type: TextInput,
                },
              },
            },
            collectionTextDate: {
              [config]: {
                messages: defineMessages({
                  name: {
                    id: 'field.collectionobjects_bampfa.collectionTextDate.name',
                    defaultMessage: 'Date',
                  },
                }),
                view: {
                  type: StructuredDateInput,
                },
              },
            },
            collectionTextNote: {
              [config]: {
                messages: defineMessages({
                  name: {
                    id: 'field.collectionobjects_bampfa.collectionTextNote.name',
                    defaultMessage: 'Notes',
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
          },
        },
        catalogerGroupList: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.collectionobjects_bampfa.catalogerGroupList.name',
                defaultMessage: 'Cataloger Infoirmation',
              },
            }),
            view: {
              type: CompoundInput,
            },
          },
          catalogerGroup: {
            [config]: {
              repeating: true,
              view: {
                type: CompoundInput,
                props: {
                  tabular: true,
                },
              },
            },
            catalogerName: {
              [config]: {
                messages: defineMessages({
                  name: {
                    id: 'field.collectionobjects_bampfa.catalogerName.name',
                    defaultMessage: 'Name',
                  },
                }),
                view: {
                  type: TextInput,
                },
              },
            },
            catalogDate: {
              [config]: {
                dataType: DATA_TYPE_DATE,
                messages: defineMessages({
                  name: {
                    id: 'field.collectionobjects_bampfa.catalogDate.name',
                    defaultMessage: 'Source',
                  },
                }),
                view: {
                  type: TextInput,
                },
              },
            },
            catalogNote: {
              [config]: {
                messages: defineMessages({
                  name: {
                    id: 'field.collectionobjects_bampfa.catalogNote.name',
                    defaultMessage: 'Date',
                  },
                }),
                view: {
                  type: DateInput,
                },
              },
            },
          },
        },
        sortableObjectNumber: {
          [config]: {
            readOnly: true,
            view: {
              type: TextInput,
            },
          },
        },
        effectiveObjectNumber: {
          [config]: {
            readOnly: true,
            view: {
              type: TextInput,
            },
          },
        },
        objectNumberRangeSearch: {
          [config]: {
            view: {
              type: TextInput,
            },
          },
        },
        objectNumberSearch: {
          [config]: {
            view: {
              type: TextInput, // TO DO: Double check
            },
          },
        },
        sortableEffectiveObjectNumber: {
          [config]: {
            readOnly: true,
            view: {
              type: TextInput,
            },
          },
        },
        computedCrate: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.collectionobjects_bampfa.computedCrate.name',
                defaultMessage: 'Current Box or Container',
              },
            }),
            view: {
              type: TextInput,
              props: {
                readOnly: true,
              },
            },
          },
        },
        title: { // rich text field
          [config]: {
            view: {
              type: TextInput,
              props: {
                multiline: true,
              },
            },
          },
        },
        computedCurrentLocationSearch: {
          [config]: {
            view: {
              type: AutocompleteInput,
              props: {
                source: 'location/location,location/offsite_sla,organization/organization',
              },
            },
          },
        },
        computedCrateSearch: {
          [config]: {
            view: {
              type: AutocompleteInput,
              props: {
                source: 'location/crate',
              },
            },
          },
        },
        bampfaTitleSearch: {
          [config]: {
            readOnly: true,
            view: {
              type: TextInput,
            },
          },
        },
        physicalDescription: {
          [config]: {
            view: {
              type: TextInput,
            },
          },
        },
        bampfaFormattedTitle: { // TO DO: Replace TITLE WITH RICH TEXT with this, ask Ray how
          [config]: {
            view: {
              type: TextInput,
              props: {
                multiline: true,
              },
            },
          },
        },
        bampfaTitle: {
          [config]: {
            readOnly: true,
            view: {
              type: TextInput,
            },
          },
        },
        itemClass: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.collectionobjects_bampfa.itemClass.name',
                defaultMessage: 'Item Class',
              },
            }),
            view: {
              type: TermPickerInput,
              props: {
                source: 'itemclass',
              },
            },
          },
        },
        currentBoxContainer: {
          [config]: {
            cloneable: false,
            messages: defineMessages({
              name: {
                id: 'field.collectionobjects_bampfa.currentBoxContainer.name',
                defaultMessage: 'Current box or container',
              },
            }),
            view: {
              type: AutocompleteInput,
              props: {
                source: 'TEMP',
                readOnly: true,
              },
            },
          },
        },

      },
    },
  };
};
