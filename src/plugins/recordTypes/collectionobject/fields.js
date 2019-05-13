import { defineMessages } from 'react-intl';
import { computeFields, computePlainTextTitle, transformSortableObjectNumberSearch } from './utils';

export default (configContext) => {
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
  } = configContext.inputComponents;

  const {
    extensions,
  } = configContext.config;

  const {
    mergeStrategy,
    configKey: config,
  } = configContext.configHelpers;

  const {
    Immutable,
  } = configContext.lib;

  const {
    formatRefName,
  } = configContext.formatHelpers;

  const {
    DATA_TYPE_BOOL,
    DATA_TYPE_DATE,
    DATA_TYPE_FLOAT,
    DATA_TYPE_INT,
    DATA_TYPE_STRUCTURED_DATE,
  } = configContext.dataTypes;

  return {
    document: {
      [config]: {
        compute: args => computeFields(args, formatRefName, Immutable),
      },
      'ns2:collectionobjects_common': {
        objectNumber: {
          [config]: {
            cloneable: true,
            view: {
              type: TextInput,
              props: mergeStrategy.override({
                readOnly: true,
              }),
            },
          },
        },
        textualInscriptionGroupList: {
          textualInscriptionGroup: {
            [config]: {
              messages: defineMessages({
                name: {
                  id: 'field.collectionobjects_common.textualInscriptionGroup.name',
                  defaultMessage: 'Textual inscription content',
                },
              }),
            },
            inscriptionContent: {
              [config]: {
                view: {
                  props: {
                    embedded: true,
                    label: null,
                  },
                },
              },
            },
          },
        },
        nonTextualInscriptionGroupList: {
          nonTextualInscriptionGroup: {
            [config]: {
              messages: defineMessages({
                name: {
                  id: 'field.collectionobjects_common.nonTextualInscriptionGroup.name',
                  defaultMessage: 'Non-textual inscription description',
                },
              }),
            },
            inscriptionDescription: {
              [config]: {
                view: {
                  props: {
                    embedded: true,
                    label: null,
                  },
                },
              },
            },
          },
        },
        objectProductionPeopleGroupList: {
          objectProductionPeopleGroup: {
            objectProductionPeople: {
              [config]: {
                view: {
                  type: AutocompleteInput,
                  props: {
                    source: 'organization/local,organization/collective',
                  },
                },
              },
            },
            objectProductionPeopleRole: {
              [config]: {
                view: {
                  type: TermPickerInput,
                  props: {
                    source: 'productionpeoplerole',
                  },
                },
              },
            },
          },
        },
        objectProductionPlaceGroupList: {
          objectProductionPlaceGroup: {
            [config]: {
              view: {
                props: {
                  tabular: false,
                },
              },
            },
            objectProductionPlace: {
              [config]: {
                searchView: {
                  type: TextInput,
                },
                view: {
                  props: {
                    multiline: true,
                    embedded: true,
                    label: null,
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
        ...extensions.dimension.fields,
      },
      'ns2:collectionobjects_bampfa': {
        [config]: {
          service: {
            ns: 'http://collectionspace.org/services/collectionobject/local/bampfa',
          },
        },
        sortableObjectNumber: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.collectionobjects_bampfa.sortableObjectNumber.name',
                defaultMessage: 'ID number',
              },
            }),
            searchTransform: transformSortableObjectNumberSearch,
            searchView: {
              type: TextInput,
            },
          },
        },
        effectiveObjectNumber: {},
        sortableEffectiveObjectNumber: {},
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
            messages: defineMessages({
              fullName: {
                id: 'field.collectionobjects_bampfa.accNumberPart3.fullName',
                defaultMessage: 'Gift',
              },
            }),
            view: {
              type: TextInput,
            },
          },
        },
        accNumberPart4: {
          [config]: {
            dataType: DATA_TYPE_INT,
            messages: defineMessages({
              fullName: {
                id: 'field.collectionobjects_bampfa.accNumberPart4.fullName',
                defaultMessage: 'Gift',
              },
            }),
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
            dataType: DATA_TYPE_STRUCTURED_DATE,
            messages: defineMessages({
              fullName: {
                id: 'field.collectionobjects_bampfa.accessionDateGroup.fullName',
                defaultMessage: 'Accession date',
              },
              name: {
                id: 'field.collectionobjects_bampfa.accessionDateGroup.name',
                defaultMessage: 'Accession date',
              },
            }),
          },
          ...extensions.structuredDate.fields,
        },
        legalStatusDateGroup: {
          [config]: {
            dataType: DATA_TYPE_STRUCTURED_DATE,
            messages: defineMessages({
              fullName: {
                id: 'field.collectionobjects_bampfa.legalStatusDateGroup.fullName',
                defaultMessage: 'Status date',
              },
              name: {
                id: 'field.collectionobjects_bampfa.legalStatusDateGroup.name',
                defaultMessage: 'Status date',
              },
            }),
            view: {
              type: StructuredDateInput,
            },
          },
          ...extensions.structuredDate.fields,
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
        bampfaObjectProductionPersonGroupList: {
          [config]: {
            view: {
              type: CompoundInput,
            },
          },
          bampfaObjectProductionPersonGroup: {
            [config]: {
              messages: defineMessages({
                name: {
                  id: 'field.collectionobjects_bampfa.bampfaObjectProductionPersonGroup.name',
                  defaultMessage: 'Artist or maker',
                },
              }),
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
                  fullName: {
                    id: 'field.collectionobjects_bampfa.bampfaObjectProductionPerson.fullName',
                    defaultMessage: 'Artist or maker name',
                  },
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
                  fullName: {
                    id: 'field.collectionobjects_bampfa.bampfaObjectProductionPersonRole.fullName',
                    defaultMessage: 'Artist or maker role',
                  },
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
                  fullName: {
                    id: 'field.collectionobjects_bampfa.bampfaObjectProductionPersonQualifier.fullName',
                    defaultMessage: 'Artist or maker qualifier',
                  },
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
              compute: computePlainTextTitle,
              repeating: true,
              messages: defineMessages({
                name: {
                  id: 'field.collectionobjects_bampfa.bampfaTitleGroup.name',
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
                    embedded: true,
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
                searchView: {
                  type: TextInput,
                },
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
            searchView: {
              type: TextInput,
            },
            view: {
              type: TextInput,
              props: {
                multiline: true,
              },
            },
          },
        },
        computedCrate: {
          [config]: {
            cloneable: false,
            messages: defineMessages({
              name: {
                id: 'field.collectionobjects_bampfa.computedCrate.name',
                defaultMessage: 'Current box or container',
              },
            }),
            searchView: {
              type: AutocompleteInput,
              props: {
                source: 'location/crate',
              },
            },
            view: {
              type: AutocompleteInput,
              props: {
                source: 'location/crate',
                readOnly: true,
              },
            },
          },
        },
        objectProductionDateCirca: {
          [config]: {
            dataType: DATA_TYPE_BOOL,
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
                defaultMessage: 'State/generation',
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
                source: 'soundLevels',
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
                source: 'colorLevels',
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
        acquisitionDateGroupList: {
          [config]: {
            view: {
              type: CompoundInput,
            },
          },
          acquisitionDateGroup: {
            [config]: {
              dataType: DATA_TYPE_STRUCTURED_DATE,
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
            ...extensions.structuredDate.fields,
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
                  id: 'field.collectionobjects_bampfa.acquisitionSource.fullName',
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
                  id: 'field.collectionobjects_bampfa.bampfaAcquisitionReason.fullName',
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
                defaultMessage: 'Appraisal info',
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
            view: {
              type: CompoundInput,
            },
          },
          currentValueGroup: {
            [config]: {
              messages: defineMessages({
                name: {
                  id: 'field.collectionobjects_bampfa.currentValueGroup.name',
                  defaultMessage: 'Current value',
                },
              }),
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
                    defaultMessage: 'Current value',
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
                dataType: DATA_TYPE_STRUCTURED_DATE,
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
              ...extensions.structuredDate.fields,
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
                defaultMessage: 'Initial value',
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
            dataType: DATA_TYPE_STRUCTURED_DATE,
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
          ...extensions.structuredDate.fields,
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
                  id: 'field.collectionobjects_bampfa.bampfaCollection.fullName',
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
                defaultMessage: 'Subject/theme',
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
                  id: 'field.collectionobjects_bampfa.subjectTheme.fullName',
                  defaultMessage: 'Subject/theme',
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
                id: 'field.collectionobjects_bampfa.copyrightCredit.name',
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
            view: {
              type: CompoundInput,
            },
          },
          bampfaConditionCheckGroup: {
            [config]: {
              messages: defineMessages({
                name: {
                  id: 'field.collectionobjects_bampfa.bampfaConditionCheckGroup.name',
                  defaultMessage: 'Condition check',
                },
              }),
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
            view: {
              type: CompoundInput,
            },
          },
          collectionTextGroup: {
            [config]: {
              messages: defineMessages({
                name: {
                  id: 'field.collectionobjects_bampfa.collectionTextGroup.name',
                  defaultMessage: 'Text/label',
                },
              }),
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
                dataType: DATA_TYPE_STRUCTURED_DATE,
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
              ...extensions.structuredDate.fields,
            },
            collectionTextNote: {
              [config]: {
                messages: defineMessages({
                  name: {
                    id: 'field.collectionobjects_bampfa.collectionTextNote.name',
                    defaultMessage: 'Note',
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
            view: {
              type: CompoundInput,
            },
          },
          catalogerGroup: {
            [config]: {
              messages: defineMessages({
                name: {
                  id: 'field.collectionobjects_bampfa.catalogerGroup.name',
                  defaultMessage: 'Cataloger',
                },
              }),
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
                  type: DateInput,
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
        nationalities: {
          // This is a hidden field. Denormalized from the Persons record to contain nationalities.
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.collectionobjects_bampfa.nationalities.name',
                defaultMessage: 'Nationality',
              },
            }),
            view: {
              type: CompoundInput,
            },
          },
          nationality: {
            [config]: {
              messages: defineMessages({
                fullName: {
                  id: 'field.collectionobjects_bampfa.nationality.fullName',
                  defaultMessage: 'Artist nationality',
                },
              }),
              repeating: true,
              view: {
                type: TextInput,
              },
            },
          },
        },
        computedArtistName: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.collectionobjects_bampfa.computedArtistName.name',
                defaultMessage: 'Artist',
              },
            }),
            view: {
              type: TextInput,
            },
          },
        },
      },
    },
  };
};
