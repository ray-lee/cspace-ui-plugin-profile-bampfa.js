import { defineMessages } from 'react-intl';
import { computeEffectiveObjectNumber, computeObjectNumber, computeDimensionSummary } from '../../utils';

export default (pluginContext) => {
  const {
    AutocompleteInput,
    CompoundInput,
    DateInput,
    OptionPickerInput,
    StructuredDateInput,
    TextInput,
    CheckboxInput,
    RichTextInput,
    TermPickerInput,
    ReadOnlyInput,
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
                id: 'field.collectionobjects_common.textualInscriptionGroupList.name',
                defaultMessage: 'Textual inscription',
              },
            }),
          },
        },
        nonTextualInscriptionGroupList: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.collectionobjects_common.nonTextualInscriptionGroupList.name',
                defaultMessage: 'Non-Textual inscription',
              },
            }),
          },
        },
        objectNumber: {
          [config]: {
            required: true,
            cloneable: false,
            searchView: {
              type: TextInput,
            },
            readOnly: true,
            view: {
              type: ReadOnlyInput,
            },
            compute: ({ recordData }) => computeObjectNumber(recordData),
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
            measuredPart: {
              [config]: {
                view: {
                  type: TextInput,
                  props: null,
                },
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
                  },
                },
                compute: ({ path, recordData }) => computeDimensionSummary(path, recordData),
              },
            },
            measuredPartNote: {
              [config]: {
                messages: defineMessages({
                  name: {
                    id: 'field.collectionobjects_bampfa.measuredPartNote.name',
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
        otherNumberList: {
          otherNumber: {
            [config]: {
              messages: defineMessages({
                name: {
                  id: 'field.collectionobjects_common.otherNumber.name',
                  defaultMessage: 'T.R./Other number',
                },
              }),
            },
            numberValue: {
              [config]: {
                messages: defineMessages({
                  name: {
                    id: 'field.collectionobjects_common.numberValue.name',
                    defaultMessage: 'Number',
                  },
                  fullName: {
                    id: 'field.collectionobjects_common.numberValue.fullName',
                    defaultMessage: 'T.R./Other number',
                  },
                }),
              },
            },
            numberType: {
              [config]: {
                messages: defineMessages({
                  name: {
                    id: 'field.collectionobjects_common.numberType.name',
                    defaultMessage: 'Type',
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
          },
        },
        objectProductionPlaceGroupList: {
          objectProductionPlaceGroup: {
            objectProductionPlace: {
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
        styles: {
          style: {
            [config]: {
              view: {
                type: TermPickerInput,
                props: {
                  source: 'periodorstyle',
                },
              },
            },
          },
        },
      },
      'ns2:collectionobjects_bampfa': {
        [config]: {
          service: {
            ns: 'http://collectionspace.org/services/collectionobject/local/bampfa',
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
                defaultMessage: 'Legal status',
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
        accessionDateGroup: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.collectionobjects_bampfa.accessionDateGroup.name',
                defaultMessage: 'Accession date',
              },
            }),
            view: {
              type: StructuredDateInput,
            },
          },
        },
        legalStatusDateGroup: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.collectionobjects_bampfa.legalStatusDateGroup.name',
                defaultMessage: 'Status date',
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
                defaultMessage: 'Artist or maker',
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
                  fullName: {
                    id: 'field.collectionobjects_bampfa.fullName',
                    defaultMessage: 'Artist or maker',
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
                defaultMessage: 'Artist display override',
              },
            }),
            view: {
              type: TextInput,
            },
          },
        },
        bampfaTitleGroupList: {
          [config]: {
            view: {
              type: CompoundInput,
            },
          },
          bampfaTitleGroup: {
            [config]: {
              repeating: true,
              messages: defineMessages({
                name: {
                  id: 'field.collectionobjects_common.bampfaTitleGroup.name',
                  defaultMessage: 'Title',
                },
              }),
              view: {
                type: CompoundInput,
              },
            },
            bampfaFormattedTitle: {
              [config]: {
                view: {
                  type: RichTextInput,
                  props: {
                    multiline: true,
                  },
                },
              },
            },
            bampfaTitle: {
              [config]: {
                messages: defineMessages({
                  name: {
                    id: 'field.collectionobjects_bampfa.bampfaTitle.name',
                    defaultMessage: 'Title',
                  },
                }),
                view: {
                  type: TextInput,
                  props: {
                    multiline: true,
                  },
                },
                compute: ({ recordData }) => {
                  const titles = recordData.getIn(['document', 'ns2:collectionobjects_bampfa', 'bampfaTitleGroupList', 'bampfaTitleGroup']);
                  const titleList = [];
                  for (const title of titles) {
                    if (title !== undefined) {
                      if (title.getIn(['bampfaFormattedTitle']) !== '') {
                        titleList.push(title.getIn(['bampfaFormattedTitle']));
                      }
                    }
                  }
                  return titleList.join('\n');
                },
              },
            },
          },
        },
        seriesTitle: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.collectionobjects_bampfa.seriesTitle.name',
                defaultMessage: 'Series title',
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
                defaultMessage: 'Credit line',
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
        acquisitionDateGroupList: {
          [config]: {
            view: {
              type: CompoundInput,
            },
          },
          acquisitionDateGroup: {
            [config]: {
              messages: defineMessages({
                name: {
                  id: 'field.collectionobjects_bampfa.acquisitionDateGroup.name',
                  defaultMessage: 'Acquisition date',
                },
              }),
              repeating: true,
              searchView: {
                type: DateInput,
              },
              view: {
                type: StructuredDateInput,
              },
            },
          },
        },
        numberOfScans: {
          [config]: {
            dataType: DATA_TYPE_INT,
            messages: defineMessages({
              name: {
                id: 'field.collectionobjects_bampfa.numberOfScans.name',
                defaultMessage: 'Number of scans',
              },
            }),
            view: {
              type: TextInput,
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
                defaultMessage: 'Black & white or color',
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
                defaultMessage: 'Acquisition method',
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
        acquisitionSources: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.collectionobjects_bampfa.acquisitionSources.name',
                defaultMessage: 'Acquisition source',
              },
            }),
            view: {
              type: CompoundInput,
            },
          },
          acquisitionSource: {
            [config]: {
              messages: defineMessages({
                fullName: {
                  id: 'field.collectionobjects_bampfa.acquisitionSource.name',
                  defaultMessage: 'Acquisition source',
                },
              }),
              repeating: true,
              view: {
                type: TextInput,
              },
            },
          },
        },
        bampfaAcquisitionReasonList: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.collectionobjects_bampfa.bampfaAcquisitionReasonList.name',
                defaultMessage: 'For',
              },
            }),
            view: {
              type: CompoundInput,
            },
          },
          bampfaAcquisitionReason: {
            [config]: {
              messages: defineMessages({
                fullName: {
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
        },
        acquisitionProvisos: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.collectionobjects_bampfa.acquisitionProvisos.name',
                defaultMessage: 'Acquisition terms',
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
                defaultMessage: 'Acquisition note',
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
                defaultMessage: 'Current value',
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
                  fullName: {
                    id: 'field.collectionobjects_bampfa.currentValue.fullName',
                    defaultMessage: 'Current Value',
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
                  fullName: {
                    id: 'field.collectionobjects_bampfa.currentValueSource.fullName',
                    defaultMessage: 'Current value source',
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
                  fullName: {
                    id: 'field.collectionobjects_bampfa.currentValueDateGroup.fullName',
                    defaultMessage: 'Current value date',
                  },
                }),
                view: {
                  type: StructuredDateInput,
                },
              },
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
              fullName: {
                id: 'field.collectionobjects_bampfa.initialValue.fullName',
                defaultMessage: 'Initial Value',
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
              fullName: {
                id: 'field.collectionobjects_bampfa.initialValueSource.fullName',
                defaultMessage: 'Initial value source',
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
              fullName: {
                id: 'field.collectionobjects_bampfa.initialValueDateGroup.fullName',
                defaultMessage: 'Initial value date',
              },
            }),
            view: {
              type: StructuredDateInput,
            },
          },
        },
        bampfaCollectionList: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.collectionobjects_bampfa.bampfaCollectionList.name',
                defaultMessage: 'Collection',
              },
            }),
            view: {
              type: CompoundInput,
            },
          },
          bampfaCollection: {
            [config]: {
              messages: defineMessages({
                fullName: {
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
        },
        subjectThemes: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.collectionobjects_bampfa.subjectThemes.name',
                defaultMessage: 'Subject/Theme',
              },
            }),
            view: {
              type: CompoundInput,
            },
          },
          subjectTheme: {
            [config]: {
              messages: defineMessages({
                fullName: {
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
        },
        partOf: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.collectionobjects_bampfa.partOf.name',
                defaultMessage: 'Part of',
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
                defaultMessage: 'Copyright credit',
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
                defaultMessage: 'Copyright note',
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
                defaultMessage: 'Photo credit',
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
                defaultMessage: 'Copyright holder',
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
                id: 'field.collectionobjects_bampfa.permissionToReproduce.name',
                defaultMessage: 'Permission to reproduce granted for noncommercial uses',
              },
            }),
            view: {
              type: OptionPickerInput,
              props: {
                source: 'reproductionPermissionLevels',
              },
            },
          },
        },
        bampfaConditionCheckGroupList: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.collectionobjects_bampfa.conditionCheckGroupList.name',
                defaultMessage: 'Condition check',
              },
            }),
            view: {
              type: CompoundInput,
            },
          },
          bampfaConditionCheckGroup: {
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
                    defaultMessage: 'Condition note',
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
                    defaultMessage: 'Conservation note',
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
                    defaultMessage: 'Checked by',
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
                messages: defineMessages({
                  name: {
                    id: 'field.collectionobjects_bampfa.collectionTextDoNotPublish.name',
                    defaultMessage: 'Do not publish',
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
            collectionTextDateGroup: {
              [config]: {
                messages: defineMessages({
                  name: {
                    id: 'field.collectionobjects_bampfa.collectionTextDateGroup.name',
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
                defaultMessage: 'Cataloger infoirmation',
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
                    defaultMessage: 'Date',
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
        sortableObjectNumber: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.collectionobjects_bampfa.sortableObjectNumber.name',
                defaultMessage: 'Identification number ',
              },
            }),
            view: {
              type: TextInput,
            },
            compute: ({ recordData }) => {
              const parts = computeObjectNumber(recordData).split('.');

              const sortableParts = [];
              const isNumericRegExp = /^\d+$/;

              for (let i = 0; i < parts.length; i += 1) {
                let part = parts[i];

                if (isNumericRegExp.test(part)) {
                  const len = part.length;
                  part = (new Array(len + 1).join('0') + part).slice(-len);
                } else {
                  part = part.toLowerCase();
                }
                sortableParts.push(part);
              }
              return sortableParts.join(' ');
            },
          },
        },
        effectiveObjectNumber: {
          [config]: {
            view: {
              type: TextInput,
              props: {
                readOnly: true,
              },
            },
            compute: ({ recordData }) => computeEffectiveObjectNumber(recordData),
          },
        },
        objectNumberRangeSearch: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.collectionobjects_bampfa.objectNumberRangeSearch.name',
                defaultMessage: 'Identification number',
              },
            }),
            view: {
              type: TextInput,
            },
          },
        },
        objectNumberSearch: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.collectionobjects_bampfa.objectNumberSearch.name',
                defaultMessage: 'Id number',
              },
            }),
            view: {
              type: TextInput,
            },
          },
        },
        sortableEffectiveObjectNumber: {
          [config]: {
            view: {
              type: TextInput,
              props: {
                readOnly: true,
              },
            },
            compute: ({ recordData }) => {
              const effectiveObjectNumberParts = computeEffectiveObjectNumber(recordData).split('.');
              const sortableParts = [];
              const isNumericRegExp = /^\d+$/;

              for (let i = 0; i < effectiveObjectNumberParts.length; i += 1) {
                let part = effectiveObjectNumberParts[i];

                if (isNumericRegExp.test(part)) {
                  const len = part.length;
                  part = (new Array(len + 1).join('0') + part).slice(-len);
                } else {
                  part = part.toLowerCase();
                }
                sortableParts.push(part);
              }
              return sortableParts.join(' ');
            },
          },
        },
        computedCrate: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.collectionobjects_bampfa.computedCrate.name',
                defaultMessage: 'Current box or container',
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
        title: { // TODO: double check this is needed
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
            messages: defineMessages({
              name: {
                id: 'field.collectionobjects_bampfa.computedCurrentLocationSearch.name',
                defaultMessage: 'Current storage location',
              },
            }),
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
            messages: defineMessages({
              name: {
                id: 'field.collectionobjects_bampfa.computedCrateSearch.name',
                defaultMessage: 'Current box or container',
              },
            }),
            view: {
              type: AutocompleteInput,
              props: {
                source: 'location/crate',
              },
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
        itemClass: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.collectionobjects_bampfa.itemClass.name',
                defaultMessage: 'Item class',
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
      },
    },
  };
};
