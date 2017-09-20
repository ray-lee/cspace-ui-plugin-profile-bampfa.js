import { defineMessages } from 'react-intl';

export default (pluginContext) => {
  const {
    AutocompleteInput,
    CompoundInput,
    DateInput,
    HierarchyInput,
    IDGeneratorInput,
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
    DATA_TYPE_DATETIME,
  } = pluginContext.dataTypes;

  return {
    document: {
      [config]: {
        view: {
          type: CompoundInput,
          props: {
            defaultChildSubpath: 'ns2:bampfa_collectionobjects',
          },
        },
      },
      // TODO: Define core fields in one place.
      'ns2:collectionspace_core': {
        createdAt: {
          [config]: {
            dataType: DATA_TYPE_DATETIME,
            view: {
              type: DateInput,
            },
          },
        },
        createdBy: {
          [config]: {
            view: {
              type: TextInput,
            },
          },
        },
        updatedAt: {
          [config]: {
            dataType: DATA_TYPE_DATETIME,
            messages: defineMessages({
              name: {
                id: 'field.collectionspace_core.updatedAt.name',
                defaultMessage: 'Last updated time',
              },
            }),
            view: {
              type: DateInput,
            },
          },
        },
        updatedBy: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.collectionspace_core.updatedBy.name',
                defaultMessage: 'Last updated by',
              },
            }),
            view: {
              type: TextInput,
            },
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
                parentTypeOptionListName: 'objectParentTypes',
                childTypeOptionListName: 'objectChildTypes',
                messages: defineMessages({
                  parent: {
                    id: 'hierarchyInput.collectionobject.parent',
                    defaultMessage: 'Broader object',
                  },
                  parentType: {
                    id: 'hierarchyInput.collectionobject.parentType',
                    defaultMessage: 'Type',
                  },
                  children: {
                    id: 'hierarchyInput.collectionobject.children',
                    defaultMessage: 'Component objects',
                  },
                  child: {
                    id: 'hierarchyInput.collectionobject.child',
                    defaultMessage: 'Object',
                  },
                  childType: {
                    id: 'hierarchyInput.collectionobject.childType',
                    defaultMessage: 'Type',
                  },
                  siblings: {
                    id: 'hierarchyInput.collectionobject.siblings',
                    defaultMessage: 'Adjacent objects',
                  },
                }),
              },
            },
          },
        },
      },
      // 'ns2:collectionobjects_common' {

      // }
      'ns2:bampfa_collectionobjects': {
        [config]: {
          service: {
            ns: 'http://collectionspace.org/services/collectionobject',
          },
        },
        prefix: {
          [config]: {
            dataType: DATA_TYPE_INT,
            messages: defineMessages({
              name: {
                id: 'field.bampfa_collectionobjects.prefix.name',
                defaultMessage: 'Prefix',
              },
            }),
            view: {
              type: TextInput,
            },
          },
        },
        year: {
          [config]: {
            dataType: DATA_TYPE_INT,
            messages: defineMessages({
              name: {
                id: 'field.bampfa_collectionobjects.year.name',
                defaultMessage: 'Year',
              },
            }),
            view: {
              type: TextInput,
            },
          },
        },
        giftBoxOne: {
          [config]: {
            dataType: DATA_TYPE_INT,
            messages: defineMessages({
              name: {
                id: 'field.bampfa_collectionobjects.giftBoxOne.name',
                defaultMessage: 'Gift',
              },
            }),
            view: {
              type: TextInput,
            },
          },
        },
        giftBoxTwo: {
          [config]: {
            dataType: DATA_TYPE_INT,
            view: {
              type: TextInput,
            },
          },
        },
        giftBoxThree: {
          [config]: {
            dataType: DATA_TYPE_INT,
            view: {
              type: TextInput,
            },
          },
        },
        alpha: {
          [config]: {
            dataType: DATA_TYPE_INT,
            messages: defineMessages({
              name: {
                id: 'field.bampfa_collectionobjects.alpha.name',
                defaultMessage: 'Alpha',
              },
            }),
            view: {
              type: TextInput,
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
              }
            },
          },
        },
        legalStatus: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.bampfa_collectionobjects.legalStatus.name',
                defaultMessage: 'Legal Status',
              },
            }),
            view: {
              type: OptionPickerInput,
              props: {
                source: 'TEMP',
              },
            },
          },
        },
        statusDate: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.bampfa_collectionobjects.statusDate.name',
                defaultMessage: 'Status Date',
              },
            }),
            view: {
              type: StructuredDateInput,
            },
          },
        },
        itemClass: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.bampfa_collectionobjects.itemClass.name',
                defaultMessage: 'Item Class',
              },
            }),
            view: {
              type:OptionPickerInput,
              props: {
                source: 'TEMP'
              },
            },
          },
        },
        collection: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.bampfa_collectionobjects.collection.name',
                defaultMessage: 'Collection',
              },
            }),
            view: {
              type: OptionPickerInput,
              props: {
                source: 'collections',
              },
            },
          },
        },
        recordStatus: {
          [config]: {
            defaultValue: 'new',
            messages: defineMessages({
              name: {
                id: 'field.bampfa_collectionobjects.recordStatus.name',
                defaultMessage: 'Record status',
              },
            }),
            view: {
              type: OptionPickerInput,
              props: {
                source: 'recordStatuses',
              },
            },
          },
        },
        briefDescriptions: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.bampfa_collectionobjects.briefDescriptions.name',
                defaultMessage: 'Brief description',
              },
            }),
            view: {
              type: CompoundInput,
            },
          },
          briefDescription: {
            [config]: {
              repeating: true,
              view: {
                type: TextInput,
                props: {
                  multiline: true,
                },
              },
            },
          },
        },
        distinguishingFeatures: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.bampfa_collectionobjects.distinguishingFeatures.name',
                defaultMessage: 'Distinguishing features',
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
        // comments: {
          //   [config]: {
          //     messages: defineMessages({
          //       name: {
          //         id: 'field.bampfa_collectionobjects.comments.name',
          //         defaultMessage: 'Notes',
          //       },
          //     }),
          //     view: {
          //       type: CompoundInput,
          //     },
          //   },
          //   comment: {
          //     [config]: {
          //       repeating: true,
          //       view: {
          //         type: TextInput,
          //         props: {
          //           multiline: true,
          //         },
          //       },
          //     },
          //   },
          // },
        computedCurrentLocation: {
          [config]: {
            cloneable: false,
            messages: defineMessages({
              name: {
                id: 'field.bampfa_collectionobjects.computedCurrentLocation.name',
                defaultMessage: 'Computed storage location',
              },
            }),
            view: {
              type: AutocompleteInput,
              props: {
                source: 'location/local,location/offsite,organization/local,organization/shared',
                readOnly: true,
              },
            },
          },
        },
        titleGroupList: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.bampfa_collectionobjects.titleGroupList.name',
                defaultMessage: 'Title',
              },
            }),
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
            title: {
              [config]: {
                messages: defineMessages({
                  name: {
                    id: 'field.bampfa_collectionobjects.title.name',
                    defaultMessage: 'Title',
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
            titleLanguage: {
              [config]: {
                messages: defineMessages({
                  name: {
                    id: 'field.bampfa_collectionobjects.titleLanguage.name',
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
            titleTranslationSubGroupList: {
              [config]: {
                messages: defineMessages({
                  name: {
                    id: 'field.bampfa_collectionobjects.titleTranslationSubGroupList.name',
                    defaultMessage: 'Translation',
                  },
                }),
                view: {
                  type: CompoundInput,
                },
              },
              titleTranslationSubGroup: {
                [config]: {
                  repeating: true,
                  view: {
                    type: CompoundInput,
                    props: {
                      tabular: true,
                    },
                  },
                },
                titleTranslation: {
                  [config]: {
                    messages: defineMessages({
                      name: {
                        id: 'field.bampfa_collectionobjects.titleTranslation.name',
                        defaultMessage: 'Translation',
                      },
                    }),
                    view: {
                      type: TextInput,
                    },
                  },
                },
                titleTranslationLanguage: {
                  [config]: {
                    messages: defineMessages({
                      name: {
                        id: 'field.bampfa_collectionobjects.titleTranslationLanguage.name',
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
              },
            },
            titleType: {
              [config]: {
                messages: defineMessages({
                  name: {
                    id: 'field.bampfa_collectionobjects.titleType.name',
                    defaultMessage: 'Type',
                  },
                }),
                view: {
                  type: OptionPickerInput,
                  props: {
                    source: 'titleTypes',
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
                id: 'field.bampfa_collectionobjects.seriesTitle.name',
                defaultMessage: 'Series Title',
              },
            }),
            view: {
              type: TextInput,
            },
          },
        },
        artistMakerList: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.bampfa_collectionobjects.artistMakerList.name',
                defaultMessage: 'Artist or Maker',
              },
            }),
            view: {
              type: CompoundInput,
            },
          },
          artistMakerGroup: {
            [config]: {
              repeating: true,
              view: {
                type: CompoundInput,
                props: {
                  tabular: true,
                },
              },
            },
            artistMaker: {
              [config]: {
                messages: defineMessages({
                  name: {
                    id: 'field.bampfa_collectionobjects.artistMaker.name',
                    defaultMessage: 'Artist or Maker',
                  },
                }),
                view: {
                  type: AutocompleteInput,
                  props: {
                    source: 'TEMP',
                  },
                },
              },
            },
            artistMakerRole: {
              [config]: {
                messages: defineMessages({
                  name: {
                    id: 'field.bampfa_collectionobjects.artistMakerRole.name',
                    defaultMessage: 'Role',
                  },
                }),
                view: {
                  type: OptionPickerInput,
                  props: {
                    source: 'TEMP',
                  },
                },
              },
            },
            artistMakerQualifier: {
              [config]: {
                messages: defineMessages({
                  name: {
                    id: 'field.bampfa_collectionobjects.artistMakerQualifier.name',
                    defaultMessage: 'Qualifier',
                  },
                }),
                view: {
                  type: OptionPickerInput,
                  props: {
                    source: 'TEMP',
                  },
                },
              },
            },
          },
          artistDisplayOverride: {
            [config]: {
              messages: defineMessages({
                name: {
                  id: 'field.bampfa_collectionobjects.artistDisplayOverride.name',
                  defaultMessage: 'Artist Display Override',
                }
              }),
              view: {
                type: TextInput,
              },
            },
          },
        },
        copyNumber: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.bampfa_collectionobjects.copyNumber.name',
                defaultMessage: 'Copy number',
              },
            }),
            view: {
              type: TextInput,
            },
          },
        },
        objectStatusList: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.bampfa_collectionobjects.objectStatusList.name',
                defaultMessage: 'Object status',
              },
            }),
            view: {
              type: CompoundInput,
            },
          },
          objectStatus: {
            [config]: {
              messages: defineMessages({
                fullName: {
                  id: 'field.bampfa_collectionobjects.objectStatus.fullName',
                  defaultMessage: 'Object status',
                },
              }),
              repeating: true,
              view: {
                type: OptionPickerInput,
                props: {
                  source: 'objectStatuses',
                },
              },
            },
          },
        },
        sex: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.bampfa_collectionobjects.sex.name',
                defaultMessage: 'Sex',
              },
            }),
            view: {
              type: OptionPickerInput,
              props: {
                source: 'sexes',
              },
            },
          },
        },
        phase: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.bampfa_collectionobjects.phase.name',
                defaultMessage: 'Phase',
              },
            }),
            view: {
              type: OptionPickerInput,
              props: {
                source: 'phases',
              },
            },
          },
        },
        forms: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.bampfa_collectionobjects.forms.name',
                defaultMessage: 'Form',
              },
            }),
            view: {
              type: CompoundInput,
            },
          },
          form: {
            [config]: {
              messages: defineMessages({
                fullName: {
                  id: 'field.bampfa_collectionobjects.form.fullName',
                  defaultMessage: 'Form',
                },
              }),
              repeating: true,
              view: {
                type: OptionPickerInput,
                props: {
                  source: 'forms',
                },
              },
            },
          },
        },
        editionNumber: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.bampfa_collectionobjects.editionNumber.name',
                defaultMessage: 'Edition number',
              },
            }),
            view: {
              type: TextInput,
            },
          },
        },
        age: {
          [config]: {
            dataType: DATA_TYPE_INT,
            messages: defineMessages({
              name: {
                id: 'field.bampfa_collectionobjects.age.name',
                defaultMessage: 'Age',
              },
            }),
            view: {
              type: TextInput,
            },
          },
        },
        ageQualifier: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.bampfa_collectionobjects.ageQualifier.name',
                defaultMessage: 'Qualifier',
              },
            }),
            view: {
              type: TermPickerInput,
              props: {
                source: 'agequalifier',
              },
            },
          },
        },
        ageUnit: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.bampfa_collectionobjects.ageUnit.name',
                defaultMessage: 'Unit',
              },
            }),
            view: {
              type: OptionPickerInput,
              props: {
                source: 'ageUnits',
              },
            },
          },
        },
        // styles: {
          //   [config]: {
          //     messages: defineMessages({
          //       name: {
          //         id: 'field.bampfa_collectionobjects.styles.name',
          //         defaultMessage: 'Style',
          //       },
          //     }),
          //     view: {
          //       type: CompoundInput,
          //     },
          //   },
          //   style: {
          //     [config]: {
          //       messages: defineMessages({
          //         fullName: {
          //           id: 'field.bampfa_collectionobjects.style.fullName',
          //           defaultMessage: 'Style',
          //         },
          //       }),
          //       repeating: true,
          //       view: {
          //         type: TextInput,
          //       },
          //     },
          //   },
          // },
        colors: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.bampfa_collectionobjects.colors.name',
                defaultMessage: 'Color',
              },
            }),
            view: {
              type: CompoundInput,
            },
          },
          color: {
            [config]: {
              repeating: true,
              view: {
                type: TextInput,
              },
            },
          },
        },
        materialGroupList: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.bampfa_collectionobjects.materialGroupList.name',
                defaultMessage: 'Material',
              },
            }),
            view: {
              type: CompoundInput,
            },
          },
          materialGroup: {
            [config]: {
              repeating: true,
              view: {
                type: CompoundInput,
                props: {
                  tabular: true,
                },
              },
            },
            material: {
              [config]: {
                messages: defineMessages({
                  name: {
                    id: 'field.bampfa_collectionobjects.material.name',
                    defaultMessage: 'Material',
                  },
                }),
                view: {
                  type: TextInput,
                },
              },
            },
            materialComponent: {
              [config]: {
                messages: defineMessages({
                  fullName: {
                    id: 'field.bampfa_collectionobjects.materialComponent.fullName',
                    defaultMessage: 'Material component',
                  },
                  name: {
                    id: 'field.bampfa_collectionobjects.materialComponent.name',
                    defaultMessage: 'Component',
                  },
                }),
                view: {
                  type: TextInput,
                },
              },
            },
            materialComponentNote: {
              [config]: {
                messages: defineMessages({
                  fullName: {
                    id: 'field.bampfa_collectionobjects.materialComponentNote.fullName',
                    defaultMessage: 'Material component note',
                  },
                  name: {
                    id: 'field.bampfa_collectionobjects.materialComponentNote.name',
                    defaultMessage: 'Component note',
                  },
                }),
                view: {
                  type: TextInput,
                },
              },
            },
            materialName: {
              [config]: {
                messages: defineMessages({
                  fullName: {
                    id: 'field.bampfa_collectionobjects.materialName.fullName',
                    defaultMessage: 'Material name',
                  },
                  name: {
                    id: 'field.bampfa_collectionobjects.materialName.name',
                    defaultMessage: 'Name',
                  },
                }),
                view: {
                  type: TextInput,
                },
              },
            },
            materialSource: {
              [config]: {
                messages: defineMessages({
                  fullName: {
                    id: 'field.bampfa_collectionobjects.materialSource.fullName',
                    defaultMessage: 'Material source',
                  },
                  name: {
                    id: 'field.bampfa_collectionobjects.materialSource.name',
                    defaultMessage: 'Source',
                  },
                }),
                view: {
                  type: TextInput,
                },
              },
            },
          },
        },
        physicalDescription: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.bampfa_collectionobjects.physicalDescription.name',
                defaultMessage: 'Physical description',
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
        objectComponentGroupList: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.bampfa_collectionobjects.objectComponentGroupList.name',
                defaultMessage: 'Object component',
              },
            }),
            view: {
              type: CompoundInput,
            },
          },
          objectComponentGroup: {
            [config]: {
              repeating: true,
              view: {
                type: CompoundInput,
                props: {
                  tabular: true,
                },
              },
            },
            objectComponentName: {
              [config]: {
                messages: defineMessages({
                  fullName: {
                    id: 'field.bampfa_collectionobjects.objectComponentName.fullName',
                    defaultMessage: 'Object component name',
                  },
                  name: {
                    id: 'field.bampfa_collectionobjects.objectComponentName.name',
                    defaultMessage: 'Name',
                  },
                }),
                view: {
                  type: OptionPickerInput,
                  props: {
                    source: 'objectComponentNames',
                  },
                },
              },
            },
            objectComponentInformation: {
              [config]: {
                messages: defineMessages({
                  name: {
                    id: 'field.bampfa_collectionobjects.objectComponentInformation.name',
                    defaultMessage: 'Information',
                  },
                }),
                view: {
                  type: TextInput,
                },
              },
            },
          },
        },
        technicalAttributeGroupList: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.bampfa_collectionobjects.technicalAttributeGroupList.name',
                defaultMessage: 'Technical attribute',
              },
            }),
            view: {
              type: CompoundInput,
            },
          },
          technicalAttributeGroup: {
            [config]: {
              repeating: true,
              view: {
                type: CompoundInput,
                props: {
                  tabular: true,
                },
              },
            },
            technicalAttribute: {
              [config]: {
                messages: defineMessages({
                  fullName: {
                    id: 'field.bampfa_collectionobjects.technicalAttribute.fullName',
                    defaultMessage: 'Technical attribute',
                  },
                  name: {
                    id: 'field.bampfa_collectionobjects.technicalAttribute.name',
                    defaultMessage: 'Attribute',
                  },
                }),
                view: {
                  type: OptionPickerInput,
                  props: {
                    source: 'technicalAttributes',
                  },
                },
              },
            },
            technicalAttributeMeasurement: {
              [config]: {
                messages: defineMessages({
                  name: {
                    id: 'field.bampfa_collectionobjects.technicalAttributeMeasurement.name',
                    defaultMessage: 'Measurement',
                  },
                }),
                view: {
                  type: OptionPickerInput,
                  props: {
                    source: 'technicalAttributeMeasurements',
                  },
                },
              },
            },
            technicalAttributeMeasurementUnit: {
              [config]: {
                messages: defineMessages({
                  name: {
                    id: 'field.bampfa_collectionobjects.technicalAttributeMeasurementUnit.name',
                    defaultMessage: 'Unit',
                  },
                }),
                view: {
                  type: OptionPickerInput,
                  props: {
                    source: 'technicalAttributeMeasurementUnits',
                  },
                },
              },
            },
          },
        },
        measuredPartGroupList: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.bampfa_collectionobjects.measuredPartGroupList.name',
                defaultMessage: 'Dimensions',
              },
            }),
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
                messages: defineMessages({
                  name: {
                    id: 'field.bampfa_collectionobjects.measuredPart.name',
                    defaultMessage: 'Part',
                  },
                }),
                view: {
                  type: TextInput,
                  props: {
                    source: 'measuredParts',
                  },
                },
              },
            },
            dimensionSummary: {
              [config]: {
                messages: defineMessages({
                  name: {
                    id: 'field.bampfa_collectionobjects.dimensionSummary.name',
                    defaultMessage: 'Summary',
                  },
                }),
                view: {
                  type: TextInput,
                  props: {
                    readOnly: true,
                    source: 'measuredPart',
                  }
                },
              },
            },
            dimensionSubGroupList: {
              [config]: {
                messages: defineMessages({
                  name: {
                    id: 'field.bampfa_collectionobjects.dimensionSubGroupList.name',
                    defaultMessage: 'Measurements',
                  },
                }),
                view: {
                  type: CompoundInput,
                },
              },
              dimensionSubGroup: {
                [config]: {
                  repeating: true,
                  view: {
                    type: CompoundInput,
                    props: {
                      tabular: true,
                    },
                  },
                },
                dimension: {
                  [config]: {
                    messages: defineMessages({
                      name: {
                        id: 'field.bampfa_collectionobjects.dimension.name',
                        defaultMessage: 'Dimension',
                      },
                    }),
                    view: {
                      type: OptionPickerInput,
                      props: {
                        source: 'dimensions',
                      },
                    },
                  },
                },
                measuredBy: {
                  [config]: {
                    messages: defineMessages({
                      name: {
                        id: 'field.bampfa_collectionobjects.measuredBy.name',
                        defaultMessage: 'Measured by',
                      },
                    }),
                    view: {
                      type: AutocompleteInput,
                      props: {
                        source: 'person/local,person/shared,organization/local,organization/shared',
                      },
                    },
                  },
                },
                measurementMethod: {
                  [config]: {
                    messages: defineMessages({
                      name: {
                        id: 'field.bampfa_collectionobjects.measurementMethod.name',
                        defaultMessage: 'Method',
                      },
                    }),
                    view: {
                      type: OptionPickerInput,
                      props: {
                        source: 'measurementMethods',
                      },
                    },
                  },
                },
                value: {
                  [config]: {
                    dataType: DATA_TYPE_FLOAT,
                    messages: defineMessages({
                      fullName: {
                        id: 'field.bampfa_collectionobjects.value.fullName',
                        defaultMessage: 'Measurement value',
                      },
                      name: {
                        id: 'field.bampfa_collectionobjects.value.name',
                        defaultMessage: 'Value',
                      },
                    }),
                    view: {
                      type: TextInput,
                    },
                  },
                },
                measurementUnit: {
                  [config]: {
                    messages: defineMessages({
                      name: {
                        id: 'field.bampfa_collectionobjects.measurementUnit.name',
                        defaultMessage: 'Unit',
                      },
                    }),
                    view: {
                      type: OptionPickerInput,
                      props: {
                        source: 'measurementUnits',
                      },
                    },
                  },
                },
                valueQualifier: {
                  [config]: {
                    messages: defineMessages({
                      name: {
                        id: 'field.bampfa_collectionobjects.valueQualifier.name',
                        defaultMessage: 'Qualifier',
                      },
                    }),
                    view: {
                      type: TextInput,
                    },
                  },
                },
                valueDate: {
                  [config]: {
                    dataType: DATA_TYPE_DATE,
                    messages: defineMessages({
                      name: {
                        id: 'field.bampfa_collectionobjects.valueDate.name',
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
            dimensionNote: {
              [config]: {
                messages: defineMessages({
                  name: {
                    id: 'field.bampfa_collectionobjects.dimensionNote.name',
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
        medium: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.bampfa_collectionobjects.medium.name',
                defaultMessage: 'Medium',
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
        creditLine: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.bampfa_collectionobjects.creditLine.name', 
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
        trNumberGroupList: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.bampfa_collectionobjects.trNumberGroupList.name',
                defaultMessage: 'T.R. / Other Number',
              },
            }),
            view: {
              type: CompoundInput,
            },
          },
          trNumberGroup: {
            [config]: {
              repeating: true,
              view: {
                type: CompoundInput,
                props: {
                  tabular: true,
                },
              },
            },
            trNumberType: {
              [config]: {
                messages: defineMessages({
                  name: {
                    id: 'field.bampfa_collectionobjects.trNumberType.name',
                    defaultMessage: 'Number Type',
                  },
                }),
                view: {
                  type: OptionPickerInput,
                  props: {
                    source: 'TEMP',
                  },
                },
              },
            },
            trNumber: {
              [config]: {
                messages: defineMessages({
                  name: {
                    id: 'field.bampfa_collectionobjects.trNumber.name',
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
        currentBoxContainer: {
          [config]: {
            cloneable: false,
            messages: defineMessages({
              name: {
                id: 'field.bampfa_collectionobjects.currentBoxContainer.name',
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
        /* START OF NEW FIELDS */      
        centuryGroupList: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.bampfa_collectionobjects.centuryGroupList.name',
                defaultMessage: 'Century List',
              },
            }),
            view: {
              type: CompoundInput,
            },
          },
          centuryGroup: {
            [config]: {
              repeating: false,
              view: {
                type: CompoundInput,
                props: {
                  tabular: true,
                },
              },
            },
            century: {
              [config]: {
                messages: defineMessages({
                  name: {
                    id: 'field.bampfa_collectionobjects.century.name',
                    defaultMessage: 'Century',
                  },
                }),
                view: {
                  type: TextInput,
                },
              },
            },
            era: {
              [config]: {
                messages: defineMessages({
                  name: {
                    id: 'field.bampfa_collectionobjects.era.name',
                    defaultMessage: 'Era',
                  },
                }),
                view: {
                  type: TermPickerInput,
                  props : {
                    source: "TEMP",
                  }
                },
              },
            },
          },
        },
        productionDate: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.bampfa_collectionobjects.productionDate.name',
                defaultMessage: 'Prodiction Date',
              },
            }),
            view: {
              type: StructuredDateInput,
            },
          },
        }, 
        dynasty: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.bampfa_collectionobjects.dynasty.name',
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
                id: 'field.bampfa_collectionobjects.workDescription.name',
                defaultMessage: 'Work Description',
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
        itemCount: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.bampfa_collectionobjects.itemCount.name',
                defaultMessage: 'Item Count',
              },
            }),
            view: {
              type: TextInput,
            },
          },
        },
        numberOfScans: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.bampfa_collectionobjects.numberOfScans.name',
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
                id: 'field.bampfa_collectionobjects.productionPlace.name',
                defaultMessage: 'Production Place',
              },
            }),
            repeating: true,
            view: {
              type: TextInput,
            },
          },
        },
        prodOrgList: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.bampfa_collectionobjects.prodOrgList.name',
                defaultMessage: 'Production Organization',
              },
            }),
            view: {
              type: CompoundInput,
            },
          },
          prodOrgGroup: {
            [config]: {
              repeating: true,
              view: {
                type: CompoundInput,
                props: {
                  tabular: true,
                },
              },
            },
            prodOrg: {
              [config]: {
                messages: defineMessages({
                  name: {
                    id: 'field.bampfa_collectionobjects.prodOrg.name',
                    defaultMessage: 'Production Organization',
                  },
                }),
                view: {
                  type: AutocompleteInput,
                }, 
                props: {
                  source: 'TEMP',
                },
              },
            },
            prodOrgRole: {
              [config]: {
                messages: defineMessages({
                  name: {
                    id: 'field.bampfa_collectionobjects.prodOrgRole.name',
                    defaultMessage: 'Role',
                  },
                }),
                view: {
                  type: TermPickerInput,
                  props : {
                    source: "TEMP",
                  }
                },
              },
            },
          },
        },
        stateGeneration: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.bampfa_collectionobjects.stateGeneration.name',
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
                id: 'field.bampfa_collectionobjects.soundOrSilent.name',
                defaultMessage: 'Sound or silent',
              },
            }),
            view: {
              type: TermPickerInput,
              props:{
                source: 'TEMP',
              },
            },
          },
        },
        blackOrWhite: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.bampfa_collectionobjects.blackOrWhite.name',
                defaultMessage: 'Black & White or Color', 
              },
            }),
            view: {
              type: TermPickerInput,
              props: {
                source: 'TEMP',
              },
            },
          },
        },
        acquisitionMethod: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.bampfa_collectionobjects.acquisitionMethod.name',
                defaultMessage: 'Acquisition Method',
              },
            }),
            view: {
              type: OptionPickerInput,
              props: {
                source: "TEMP",
              },
            },
          },
        },
        acquisitionDate: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.bampfa_collectionobjects.acquisitionDate.name',
                defaultMessage: 'Acquisition Date',
              },
            }),
            repeating: true,
            view: {
              type: StructuredDateInput,
            },
          },
        },
        acquisitionSource: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.bampfa_collectionobjects.acquisitionSource.name',
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
                id: 'field.bampfa_collectionobjects.bampfaAcquisitionReason.name',
                defaultMessage: 'For',
              },
            }),
            repeating: true,
            view: {
              type: OptionPickerInput,
              props: {
                source: "TEMP",
              },
            },
          },
        },
        acquisitionProvisos: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.bampfa_collectionobjects.acquisitionProvisos.name',
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
                id: 'field.bampfa_collectionobjects.provenance.name',
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
                id: 'field.bampfa_collectionobjects.acquisitionNote.name',
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
                id: 'field.bampfa_collectionobjects.appraisalInfo.name',
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
                id: 'field.bampfa_collectionobjects.currentValueGroupList.name',
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
                messages: defineMessages({
                  name: {
                    id: 'field.bampfa_collectionobjects.currentValue.name',
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
                    id: 'field.bampfa_collectionobjects.currentValueSource.name',
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
                messages: defineMessages ({
                  name: {
                    id: 'field.bampfa_collectionobjects.currentValueDateGroup.name',
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
                id: 'field.bampfa_collectionobjects.initialValueGroup.name',
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
              messages: defineMessages({
                name: {
                  id: 'field.bampfa_collectionobjects.initialValue.name',
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
                  id: 'field.bampfa_collectionobjects.initialValueSource.name',
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
              messages: defineMessages ({
                name: {
                  id: 'field.bampfa_collectionobjects.initialValueDateGroup.name',
                  defaultMessage: 'Date',
                },
              }),
              view: {
                type: StructuredDateInput,
              },
            },
          },
        },
        bampfaCollection : {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.bampfa_collectionobjects.bampfaCollection.name',
                defaultMessage: 'Collection',
              },
            }),
            repeating: true,
            view: {
              type: OptionPickerInput ,
              props: {
                source: "TEMP",
              },
            },
          },
        },
        subjectTheme: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.bampfa_collectionobjects.subjectTheme.name',
                defaultMessage: 'Subject/Theme',
              },
            }),
            repeating: true,
            view: {
              type: OptionPickerInput,
              props: {
                source: "TEMP",
              },
            },
          },
        },
        style: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.bampfa_collectionobjects.style.name',
                defaultMessage: 'Period/Style',
              },
            }),
            repeating: true,
            view: {
              type: OptionPickerInput,
              props: {
                source: "TEMP",
              },
            },
          },
        },        
        partOf: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.bampfa_collectionobjects.partOf.name',
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
                id: 'field.copyrightCredit..name',
                defaultMessage: 'Copyright Credit',
              },
            }),
            view: {
              type: TextInput ,
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
                id: 'field.bampfa_collectionobjects.copyrightNote.name',
                defaultMessage: 'Copyright Note',
              },
            }),
            view: {
              type: TextInput ,
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
                id: 'field.bampfa_collectionobjects.photoCredit.name',
                defaultMessage: 'Photo Credit',
              },
            }),
            view: {
              type: TextInput ,
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
                id: 'field.bampfa_collectionobjects.copyrightHolder.name',
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
                id: 'field.bampfa_collectionobjects..name',
                defaultMessage: 'Permission to reproduce granted for noncommercial uses',
              },
            }),
            view: {
              type: OptionPickerInput,
            },
          },
        },
        conditionCheckGroupList: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.bampfa_collectionobjects.conditionCheckGroupList.name',
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
                    id: 'field.bampfa_collectionobjects.conditionNote.name',
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
                    id: 'field.bampfa_collectionobjects.conservationNote.name',
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
                    id: 'field.bampfa_collectionobjects.conditionCheckBy.name',
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
                messages: defineMessages({
                  name: {
                    id: 'field.bampfa_collectionobjects.conditionCheckDate.name',
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
                id: 'field.bampfa_collectionobjects.comments.name',
                defaultMessage: 'Notes'
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
                id: 'field.bampfa_collectionobjects.collectionTextGroupList.name',
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
                    id: 'field.bampfa_collectionobjects.collectionTextType.name',
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
                    id: 'field.bampfa_collectionobjects.collectionTextDoNotPublish.name',
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
                    id: 'field.bampfa_collectionobjects.collectionText.name',
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
                    id: 'field.bampfa_collectionobjects.collectionTextAuthor.name',
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
                    id: 'field.bampfa_collectionobjects.collectionTextDate.name',
                    defaultMessage: 'Date',
                  },
                }),
                view: {
                  type: StructuredDateInput,
                },
              },
            },
            collectionTextNote : {
              [config]: {
                messages: defineMessages({
                  name: {
                    id: 'field.bampfa_collectionobjects.collectionTextNote.name',
                    defaultMessage: 'Notes',
                  },
                }),
                view: {
                  type: TextInput,
                  props: {
                    multiline: true,
                  }
                }
              },
            },
          },
        },
        catalogerGroupList: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.bampfa_collectionobjects.catalogerGroupList.name',
                defaultMessage: 'Initial Value',
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
                    id: 'field.bampfa_collectionobjects.catalogerName.name',
                    defaultMessage: 'Cataloger Info',
                  },
                }),
                view: {
                  type: TextInput,
                }, 
              },
            },
            catalogDate: {
              [config]: {
                messages: defineMessages({
                  name: {
                    id: 'field.bampfa_collectionobjects.catalogDate.name',
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
                messages: defineMessages ({
                  name: {
                    id: 'field.bampfa_collectionobjects.catalogNote.name',
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
        

// : {
//   [config]: {
//     messages: defineMessages({
//       name: {
//         id: 'field.bampfa_collectionobjects.name',
//         defaultMessage: '',
//       },
//     }),
//     view: {
//       type: ,
//     },
//   },
// },






        /* END OF NEW FIELDS */ 
        contentDescription: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.bampfa_collectionobjects.contentDescription.name',
                defaultMessage: 'Description',
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
        contentLanguages: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.bampfa_collectionobjects.contentLanguages.name',
                defaultMessage: 'Language',
              },
            }),
            view: {
              type: CompoundInput,
            },
          },
          contentLanguage: {
            [config]: {
              repeating: true,
              view: {
                type: TermPickerInput,
                props: {
                  source: 'languages',
                },
              },
            },
          },
        },
        contentActivities: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.bampfa_collectionobjects.contentActivities.name',
                defaultMessage: 'Activity',
              },
            }),
            view: {
              type: CompoundInput,
            },
          },
          contentActivity: {
            [config]: {
              repeating: true,
              view: {
                type: TextInput,
              },
            },
          },
        },
        contentConcepts: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.bampfa_collectionobjects.contentConcepts.name',
                defaultMessage: 'Concept',
              },
            }),
            view: {
              type: CompoundInput,
            },
          },
          contentConcept: {
            [config]: {
              messages: defineMessages({
                fullName: {
                  id: 'field.bampfa_collectionobjects.contentConcept.fullName',
                  defaultMessage: 'Content concept',
                },
                name: {
                  id: 'field.bampfa_collectionobjects.contentConcept.name',
                  defaultMessage: 'Concept',
                },
              }),
              repeating: true,
              view: {
                type: AutocompleteInput,
                props: {
                  source: 'concept/associated,concept/material,concept/material_shared',
                },
              },
            },
          },
        },
        contentDateGroup: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.bampfa_collectionobjects.contentDateGroup.name',
                defaultMessage: 'Date',
              },
            }),
            view: {
              type: StructuredDateInput,
            },
          },
        },
        contentPositions: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.bampfa_collectionobjects.contentPositions.name',
                defaultMessage: 'Position',
              },
            }),
            view: {
              type: CompoundInput,
            },
          },
          contentPosition: {
            [config]: {
              repeating: true,
              view: {
                type: OptionPickerInput,
                props: {
                  source: 'positions',
                },
              },
            },
          },
        },
        contentObjectGroupList: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.bampfa_collectionobjects.contentObjectGroupList.name',
                defaultMessage: 'Object',
              },
            }),
            view: {
              type: CompoundInput,
            },
          },
          contentObjectGroup: {
            [config]: {
              repeating: true,
              view: {
                type: CompoundInput,
                props: {
                  tabular: true,
                },
              },
            },
            contentObject: {
              [config]: {
                messages: defineMessages({
                  name: {
                    id: 'field.bampfa_collectionobjects.contentObject.name',
                    defaultMessage: 'Name',
                  },
                }),
                view: {
                  type: TextInput,
                },
              },
            },
            contentObjectType: {
              [config]: {
                messages: defineMessages({
                  name: {
                    id: 'field.bampfa_collectionobjects.contentObjectType.name',
                    defaultMessage: 'Type',
                  },
                }),
                view: {
                  type: OptionPickerInput,
                  props: {
                    source: 'contentObjectTypes',
                  },
                },
              },
            },
          },
        },
        contentPeoples: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.bampfa_collectionobjects.contentPeoples.name',
                defaultMessage: 'People',
              },
            }),
            view: {
              type: CompoundInput,
            },
          },
          contentPeople: {
            [config]: {
              repeating: true,
              view: {
                type: TextInput,
              },
            },
          },
        },
        contentPersons: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.bampfa_collectionobjects.contentPersons.name',
                defaultMessage: 'Person',
              },
            }),
            view: {
              type: CompoundInput,
            },
          },
          contentPerson: {
            [config]: {
              messages: defineMessages({
                fullName: {
                  id: 'field.bampfa_collectionobjects.contentPerson.fullName',
                  defaultMessage: 'Content person',
                },
                name: {
                  id: 'field.bampfa_collectionobjects.contentPerson.name',
                  defaultMessage: 'Person',
                },
              }),
              repeating: true,
              view: {
                type: AutocompleteInput,
                props: {
                  source: 'person/local,person/shared,person/ulan',
                },
              },
            },
          },
        },
        contentPlaces: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.bampfa_collectionobjects.contentPlaces.name',
                defaultMessage: 'Place',
              },
            }),
            view: {
              type: CompoundInput,
            },
          },
          contentPlace: {
            [config]: {
              repeating: true,
              view: {
                type: TextInput,
              },
            },
          },
        },
        contentScripts: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.bampfa_collectionobjects.contentScripts.name',
                defaultMessage: 'Script',
              },
            }),
            view: {
              type: CompoundInput,
            },
          },
          contentScript: {
            [config]: {
              repeating: true,
              view: {
                type: OptionPickerInput,
                props: {
                  source: 'scripts',
                },
              },
            },
          },
        },
        contentOrganizations: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.bampfa_collectionobjects.contentOrganizations.name',
                defaultMessage: 'Organization',
              },
            }),
            view: {
              type: CompoundInput,
            },
          },
          contentOrganization: {
            [config]: {
              messages: defineMessages({
                fullName: {
                  id: 'field.bampfa_collectionobjects.contentOrganization.fullName',
                  defaultMessage: 'Content organization',
                },
                name: {
                  id: 'field.bampfa_collectionobjects.contentOrganization.name',
                  defaultMessage: 'Organization',
                },
              }),
              repeating: true,
              view: {
                type: AutocompleteInput,
                props: {
                  source: 'organization/local,organization/shared,organization/ulan',
                },
              },
            },
          },
        },
        contentEventNameGroupList: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.bampfa_collectionobjects.contentEventNameGroupList.name',
                defaultMessage: 'Event',
              },
            }),
            view: {
              type: CompoundInput,
            },
          },
          contentEventNameGroup: {
            [config]: {
              repeating: true,
              view: {
                type: CompoundInput,
                props: {
                  tabular: true,
                },
              },
            },
            contentEventName: {
              [config]: {
                messages: defineMessages({
                  name: {
                    id: 'field.bampfa_collectionobjects.contentEventName.name',
                    defaultMessage: 'Name',
                  },
                }),
                view: {
                  type: TextInput,
                },
              },
            },
            contentEventNameType: {
              [config]: {
                messages: defineMessages({
                  name: {
                    id: 'field.bampfa_collectionobjects.contentEventNameType.name',
                    defaultMessage: 'Type',
                  },
                }),
                view: {
                  type: TextInput,
                },
              },
            },
          },
        },
        contentOtherGroupList: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.bampfa_collectionobjects.contentOtherGroupList.name',
                defaultMessage: 'Other',
              },
            }),
            view: {
              type: CompoundInput,
            },
          },
          contentOtherGroup: {
            [config]: {
              repeating: true,
              view: {
                type: CompoundInput,
                props: {
                  tabular: true,
                },
              },
            },
            contentOther: {
              [config]: {
                messages: defineMessages({
                  name: {
                    id: 'field.bampfa_collectionobjects.contentOther.name',
                    defaultMessage: 'Name',
                  },
                }),
                view: {
                  type: TextInput,
                },
              },
            },
            contentOtherType: {
              [config]: {
                messages: defineMessages({
                  name: {
                    id: 'field.bampfa_collectionobjects.contentOtherType.name',
                    defaultMessage: 'Type',
                  },
                }),
                view: {
                  type: TextInput,
                },
              },
            },
          },
        },
        contentNote: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.bampfa_collectionobjects.contentNote.name',
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
        textualInscriptionGroupList: {
          [config]: {
            view: {
              type: CompoundInput,
            },
          },
          textualInscriptionGroup: {
            [config]: {
              messages: defineMessages({
                name: {
                  id: 'field.bampfa_collectionobjects.textualInscriptionGroup.name',
                  defaultMessage: 'Textual Inscription',
                },
              }),
              repeating: true,
              view: {
                type: CompoundInput,
              },
            },
            inscriptionContent: {
              [config]: {
                messages: defineMessages({
                  name: {
                    id: 'field.bampfa_collectionobjects.inscriptionContent.name',
                    defaultMessage: 'Inscription content',
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
            inscriptionContentInscriber: {
              [config]: {
                messages: defineMessages({
                  fullName: {
                    id: 'field.bampfa_collectionobjects.inscriptionContentInscriber.fullName',
                    defaultMessage: 'Textual inscription inscriber',
                  },
                  name: {
                    id: 'field.bampfa_collectionobjects.inscriptionContentInscriber.name',
                    defaultMessage: 'Inscriber',
                  },
                }),
                view: {
                  type: AutocompleteInput,
                  props: {
                    source: 'person/local,organization/local,organization/shared',
                  },
                },
              },
            },
            inscriptionContentLanguage: {
              [config]: {
                messages: defineMessages({
                  name: {
                    id: 'field.bampfa_collectionobjects.inscriptionContentLanguage.name',
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
            inscriptionContentDateGroup: {
              [config]: {
                messages: defineMessages({
                  name: {
                    id: 'field.bampfa_collectionobjects.inscriptionContentDateGroup.name',
                    defaultMessage: 'Date',
                  },
                }),
                view: {
                  type: StructuredDateInput,
                },
              },
            },
            inscriptionContentPosition: {
              [config]: {
                messages: defineMessages({
                  name: {
                    id: 'field.bampfa_collectionobjects.inscriptionContentPosition.name',
                    defaultMessage: 'Position',
                  },
                }),
                view: {
                  type: OptionPickerInput,
                  props: {
                    source: 'positions',
                  },
                },
              },
            },
            inscriptionContentScript: {
              [config]: {
                messages: defineMessages({
                  name: {
                    id: 'field.bampfa_collectionobjects.inscriptionContentScript.name',
                    defaultMessage: 'Script',
                  },
                }),
                view: {
                  type: OptionPickerInput,
                  props: {
                    source: 'scripts',
                  },
                },
              },
            },
            inscriptionContentType: {
              [config]: {
                messages: defineMessages({
                  name: {
                    id: 'field.bampfa_collectionobjects.inscriptionContentType.name',
                    defaultMessage: 'Type',
                  },
                }),
                view: {
                  type: OptionPickerInput,
                  props: {
                    source: 'inscriptionTypes',
                  },
                },
              },
            },
            inscriptionContentMethod: {
              [config]: {
                messages: defineMessages({
                  name: {
                    id: 'field.bampfa_collectionobjects.inscriptionContentMethod.name',
                    defaultMessage: 'Method',
                  },
                }),
                view: {
                  type: TextInput,
                },
              },
            },
            inscriptionContentInterpretation: {
              [config]: {
                messages: defineMessages({
                  name: {
                    id: 'field.bampfa_collectionobjects.inscriptionContentInterpretation.name',
                    defaultMessage: 'Interpretation',
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
            inscriptionContentTranslation: {
              [config]: {
                messages: defineMessages({
                  name: {
                    id: 'field.bampfa_collectionobjects.inscriptionContentTranslation.name',
                    defaultMessage: 'Translation',
                  },
                }),
                view: {
                  type: TextInput,
                },
              },
            },
            inscriptionContentTransliteration: {
              [config]: {
                messages: defineMessages({
                  name: {
                    id: 'field.bampfa_collectionobjects.inscriptionContentTransliteration.name',
                    defaultMessage: 'Transliteration',
                  },
                }),
                view: {
                  type: TextInput,
                },
              },
            },
          },
        },
        nonTextualInscriptionGroupList: {
          [config]: {
            view: {
              type: CompoundInput,
            },
          },
          nonTextualInscriptionGroup: {
            [config]: {
              messages: defineMessages({
                name: {
                  id: 'field.bampfa_collectionobjects.nonTextualInscriptionGroup.name',
                  defaultMessage: 'Non-Textual Description',
                },
              }),
              repeating: true,
              view: {
                type: CompoundInput,
              },
            },
            inscriptionDescription: {
              [config]: {
                messages: defineMessages({
                  name: {
                    id: 'field.bampfa_collectionobjects.inscriptionDescription.name',
                    defaultMessage: 'Inscription description',
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
            inscriptionDescriptionInscriber: {
              [config]: {
                messages: defineMessages({
                  fullName: {
                    id: 'field.bampfa_collectionobjects.inscriptionDescriptionInscriber.fullName',
                    defaultMessage: 'Non-textual inscription inscriber',
                  },
                  name: {
                    id: 'field.bampfa_collectionobjects.inscriptionDescriptionInscriber.name',
                    defaultMessage: 'Inscriber',
                  },
                }),
                view: {
                  type: AutocompleteInput,
                  props: {
                    source: 'person/local,person/shared,organization/local,organization/shared',
                  },
                },
              },
            },
            inscriptionDescriptionDateGroup: {
              [config]: {
                messages: defineMessages({
                  name: {
                    id: 'field.bampfa_collectionobjects.inscriptionDescriptionDateGroup.name',
                    defaultMessage: 'Date',
                  },
                }),
                view: {
                  type: StructuredDateInput,
                },
              },
            },
            inscriptionDescriptionPosition: {
              [config]: {
                messages: defineMessages({
                  name: {
                    id: 'field.bampfa_collectionobjects.inscriptionDescriptionPosition.name',
                    defaultMessage: 'Position',
                  },
                }),
                view: {
                  type: OptionPickerInput,
                  props: {
                    source: 'positions',
                  },
                },
              },
            },
            inscriptionDescriptionType: {
              [config]: {
                messages: defineMessages({
                  name: {
                    id: 'field.bampfa_collectionobjects.inscriptionDescriptionType.name',
                    defaultMessage: 'Type',
                  },
                }),
                view: {
                  type: OptionPickerInput,
                  props: {
                    source: 'inscriptionTypes',
                  },
                },
              },
            },
            inscriptionDescriptionMethod: {
              [config]: {
                messages: defineMessages({
                  fullName: {
                    id: 'field.bampfa_collectionobjects.inscriptionDescriptionMethod.fullName',
                    defaultMessage: 'Non-textual inscription method',
                  },
                  name: {
                    id: 'field.bampfa_collectionobjects.inscriptionDescriptionMethod.name',
                    defaultMessage: 'Method',
                  },
                }),
                view: {
                  type: TextInput,
                },
              },
            },
            inscriptionDescriptionInterpretation: {
              [config]: {
                messages: defineMessages({
                  name: {
                    id: 'field.bampfa_collectionobjects.inscriptionDescriptionInterpretation.name',
                    defaultMessage: 'Interpretation',
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
        objectProductionDateGroupList: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.bampfa_collectionobjects.objectProductionDateGroupList.name',
                defaultMessage: 'Production date',
              },
            }),
            view: {
              type: CompoundInput,
            },
          },
          objectProductionDateGroup: {
            [config]: {
              messages: defineMessages({
                fullName: {
                  id: 'field.bampfa_collectionobjects.objectProductionDateGroup.fullName',
                  defaultMessage: 'Production date',
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
        techniqueGroupList: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.bampfa_collectionobjects.techniqueGroupList.name',
                defaultMessage: 'Production technique',
              },
            }),
            view: {
              type: CompoundInput,
            },
          },
          techniqueGroup: {
            [config]: {
              repeating: true,
              view: {
                type: CompoundInput,
                props: {
                  tabular: true,
                },
              },
            },
            technique: {
              [config]: {
                messages: defineMessages({
                  fullName: {
                    id: 'field.bampfa_collectionobjects.technique.fullName',
                    defaultMessage: 'Production technique',
                  },
                  name: {
                    id: 'field.bampfa_collectionobjects.technique.name',
                    defaultMessage: 'Technique',
                  },
                }),
                view: {
                  type: TextInput,
                },
              },
            },
            techniqueType: {
              [config]: {
                messages: defineMessages({
                  name: {
                    id: 'field.bampfa_collectionobjects.techniqueType.name',
                    defaultMessage: 'Type',
                  },
                }),
                view: {
                  type: TextInput,
                },
              },
            },
          },
        },
        objectProductionPlaceGroupList: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.bampfa_collectionobjects.objectProductionPlaceGroupList.name',
                defaultMessage: 'Production place',
              },
            }),
            view: {
              type: CompoundInput,
            },
          },
          objectProductionPlaceGroup: {
            [config]: {
              repeating: true,
              view: {
                type: CompoundInput,
                props: {
                  tabular: true,
                },
              },
            },
            objectProductionPlace: {
              [config]: {
                messages: defineMessages({
                  fullName: {
                    id: 'field.bampfa_collectionobjects.objectProductionPlace.fullName',
                    defaultMessage: 'Production place',
                  },
                  name: {
                    id: 'field.bampfa_collectionobjects.objectProductionPlace.name',
                    defaultMessage: 'Place',
                  },
                }),
                view: {
                  type: TextInput,
                },
              },
            },
            objectProductionPlaceRole: {
              [config]: {
                messages: defineMessages({
                  name: {
                    id: 'field.bampfa_collectionobjects.objectProductionPlaceRole.name',
                    defaultMessage: 'Role',
                  },
                }),
                view: {
                  type: TextInput,
                },
              },
            },
          },
        },
        objectProductionReasons: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.bampfa_collectionobjects.objectProductionReasons.name',
                defaultMessage: 'Production reason',
              },
            }),
            view: {
              type: CompoundInput,
            },
          },
          objectProductionReason: {
            [config]: {
              repeating: true,
              view: {
                type: TextInput,
                props: {
                  multiline: true,
                },
              },
            },
          },
        },
        objectProductionPeopleGroupList: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.bampfa_collectionobjects.objectProductionPeopleGroupList.name',
                defaultMessage: 'Production people',
              },
            }),
            view: {
              type: CompoundInput,
            },
          },
          objectProductionPeopleGroup: {
            [config]: {
              repeating: true,
              view: {
                type: CompoundInput,
                props: {
                  tabular: true,
                },
              },
            },
            objectProductionPeople: {
              [config]: {
                messages: defineMessages({
                  fullName: {
                    id: 'field.bampfa_collectionobjects.objectProductionPeople.fullName',
                    defaultMessage: 'Production people',
                  },
                  name: {
                    id: 'field.bampfa_collectionobjects.objectProductionPeople.name',
                    defaultMessage: 'People',
                  },
                }),
                view: {
                  type: TextInput,
                },
              },
            },
            objectProductionPeopleRole: {
              [config]: {
                messages: defineMessages({
                  name: {
                    id: 'field.bampfa_collectionobjects.objectProductionPeopleRole.name',
                    defaultMessage: 'Role',
                  },
                }),
                view: {
                  type: TextInput,
                },
              },
            },
          },
        },
        objectProductionPersonGroupList: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.bampfa_collectionobjects.objectProductionPersonGroupList.name',
                defaultMessage: 'Production person',
              },
            }),
            view: {
              type: CompoundInput,
            },
          },
          objectProductionPersonGroup: {
            [config]: {
              repeating: true,
              view: {
                type: CompoundInput,
                props: {
                  tabular: true,
                },
              },
            },
            objectProductionPerson: {
              [config]: {
                messages: defineMessages({
                  fullName: {
                    id: 'field.bampfa_collectionobjects.objectProductionPerson.fullName',
                    defaultMessage: 'Production person',
                  },
                  name: {
                    id: 'field.bampfa_collectionobjects.objectProductionPerson.name',
                    defaultMessage: 'Person',
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
            objectProductionPersonRole: {
              [config]: {
                messages: defineMessages({
                  name: {
                    id: 'field.bampfa_collectionobjects.objectProductionPersonRole.name',
                    defaultMessage: 'Role',
                  },
                }),
                view: {
                  type: TextInput,
                },
              },
            },
          },
        },
        objectProductionOrganizationGroupList: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.bampfa_collectionobjects.objectProductionOrganizationGroupList.name',
                defaultMessage: 'Production organization',
              },
            }),
            view: {
              type: CompoundInput,
            },
          },
          objectProductionOrganizationGroup: {
            [config]: {
              repeating: true,
              view: {
                type: CompoundInput,
                props: {
                  tabular: true,
                },
              },
            },
            objectProductionOrganization: {
              [config]: {
                messages: defineMessages({
                  fullName: {
                    id: 'field.bampfa_collectionobjects.objectProductionOrganization.fullName',
                    defaultMessage: 'Production organization',
                  },
                  name: {
                    id: 'field.bampfa_collectionobjects.objectProductionOrganization.name',
                    defaultMessage: 'Organization',
                  },
                }),
                view: {
                  type: AutocompleteInput,
                  props: {
                    source: 'organization/local,organization/shared',
                  },
                },
              },
            },
            objectProductionOrganizationRole: {
              [config]: {
                messages: defineMessages({
                  name: {
                    id: 'field.bampfa_collectionobjects.objectProductionOrganizationRole.name',
                    defaultMessage: 'Role',
                  },
                }),
                view: {
                  type: TextInput,
                },
              },
            },
          },
        },
        objectProductionNote: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.bampfa_collectionobjects.objectProductionNote.name',
                defaultMessage: 'Production note',
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
        assocActivityGroupList: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.bampfa_collectionobjects.assocActivityGroupList.name',
                defaultMessage: 'Associated activity',
              },
            }),
            view: {
              type: CompoundInput,
            },
          },
          assocActivityGroup: {
            [config]: {
              repeating: true,
              view: {
                type: CompoundInput,
                props: {
                  tabular: true,
                },
              },
            },
            assocActivity: {
              [config]: {
                messages: defineMessages({
                  name: {
                    id: 'field.bampfa_collectionobjects.assocActivity.name',
                    defaultMessage: 'Activity',
                  },
                }),
                view: {
                  type: TextInput,
                },
              },
            },
            assocActivityType: {
              [config]: {
                messages: defineMessages({
                  name: {
                    id: 'field.bampfa_collectionobjects.assocActivityType.name',
                    defaultMessage: 'Type',
                  },
                }),
                view: {
                  type: TextInput,
                },
              },
            },
            assocActivityNote: {
              [config]: {
                messages: defineMessages({
                  name: {
                    id: 'field.bampfa_collectionobjects.assocActivityNote.name',
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
        assocObjectGroupList: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.bampfa_collectionobjects.assocObjectGroupList.name',
                defaultMessage: 'Associated object',
              },
            }),
            view: {
              type: CompoundInput,
            },
          },
          assocObjectGroup: {
            [config]: {
              repeating: true,
              view: {
                type: CompoundInput,
                props: {
                  tabular: true,
                },
              },
            },
            assocObject: {
              [config]: {
                messages: defineMessages({
                  name: {
                    id: 'field.bampfa_collectionobjects.assocObject.name',
                    defaultMessage: 'Object',
                  },
                }),
                view: {
                  type: TextInput,
                },
              },
            },
            assocObjectType: {
              [config]: {
                messages: defineMessages({
                  name: {
                    id: 'field.bampfa_collectionobjects.assocObjectType.name',
                    defaultMessage: 'Type',
                  },
                }),
                view: {
                  type: TextInput,
                },
              },
            },
            assocObjectNote: {
              [config]: {
                messages: defineMessages({
                  name: {
                    id: 'field.bampfa_collectionobjects.assocObjectNote.name',
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
        assocConceptGroupList: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.bampfa_collectionobjects.assocConceptGroupList.name',
                defaultMessage: 'Associated concept',
              },
            }),
            view: {
              type: CompoundInput,
            },
          },
          assocConceptGroup: {
            [config]: {
              repeating: true,
              view: {
                type: CompoundInput,
                props: {
                  tabular: true,
                },
              },
            },
            assocConcept: {
              [config]: {
                messages: defineMessages({
                  fullName: {
                    id: 'field.bampfa_collectionobjects.assocConcept.fullName',
                    defaultMessage: 'Associated concept',
                  },
                  name: {
                    id: 'field.bampfa_collectionobjects.assocConcept.name',
                    defaultMessage: 'Concept',
                  },
                }),
                view: {
                  type: AutocompleteInput,
                  props: {
                    source: 'concept/associated',
                  },
                },
              },
            },
            assocConceptType: {
              [config]: {
                messages: defineMessages({
                  name: {
                    id: 'field.bampfa_collectionobjects.assocConceptType.name',
                    defaultMessage: 'Type',
                  },
                }),
                view: {
                  type: TextInput,
                },
              },
            },
            assocConceptNote: {
              [config]: {
                messages: defineMessages({
                  name: {
                    id: 'field.bampfa_collectionobjects.assocConceptNote.name',
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
        assocCulturalContextGroupList: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.bampfa_collectionobjects.assocCulturalContextGroupList.name',
                defaultMessage: 'Associated cultural affinity',
              },
            }),
            view: {
              type: CompoundInput,
            },
          },
          assocCulturalContextGroup: {
            [config]: {
              repeating: true,
              view: {
                type: CompoundInput,
                props: {
                  tabular: true,
                },
              },
            },
            assocCulturalContext: {
              [config]: {
                messages: defineMessages({
                  name: {
                    id: 'field.bampfa_collectionobjects.assocCulturalContext.name',
                    defaultMessage: 'Cultural affinity',
                  },
                }),
                view: {
                  type: TextInput,
                },
              },
            },
            assocCulturalContextType: {
              [config]: {
                messages: defineMessages({
                  name: {
                    id: 'field.bampfa_collectionobjects.assocCulturalContextType.name',
                    defaultMessage: 'Type',
                  },
                }),
                view: {
                  type: TextInput,
                },
              },
            },
            assocCulturalContextNote: {
              [config]: {
                messages: defineMessages({
                  name: {
                    id: 'field.bampfa_collectionobjects.assocCulturalContextNote.name',
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
        assocOrganizationGroupList: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.bampfa_collectionobjects.assocOrganizationGroupList.name',
                defaultMessage: 'Associated organization',
              },
            }),
            view: {
              type: CompoundInput,
            },
          },
          assocOrganizationGroup: {
            [config]: {
              repeating: true,
              view: {
                type: CompoundInput,
                props: {
                  tabular: true,
                },
              },
            },
            assocOrganization: {
              [config]: {
                messages: defineMessages({
                  fullName: {
                    id: 'field.bampfa_collectionobjects.assocOrganization.fullName',
                    defaultMessage: 'Associated organization',
                  },
                  name: {
                    id: 'field.bampfa_collectionobjects.assocOrganization.name',
                    defaultMessage: 'Organization',
                  },
                }),
                view: {
                  type: AutocompleteInput,
                  props: {
                    source: 'organization/local,organization/shared',
                  },
                },
              },
            },
            assocOrganizationType: {
              [config]: {
                messages: defineMessages({
                  name: {
                    id: 'field.bampfa_collectionobjects.assocOrganizationType.name',
                    defaultMessage: 'Type',
                  },
                }),
                view: {
                  type: TextInput,
                },
              },
            },
            assocOrganizationNote: {
              [config]: {
                messages: defineMessages({
                  name: {
                    id: 'field.bampfa_collectionobjects.assocOrganizationNote.name',
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
        assocPeopleGroupList: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.bampfa_collectionobjects.assocPeopleGroupList.name',
                defaultMessage: 'Associated people',
              },
            }),
            view: {
              type: CompoundInput,
            },
          },
          assocPeopleGroup: {
            [config]: {
              repeating: true,
              view: {
                type: CompoundInput,
                props: {
                  tabular: true,
                },
              },
            },
            assocPeople: {
              [config]: {
                messages: defineMessages({
                  name: {
                    id: 'field.bampfa_collectionobjects.assocPeople.name',
                    defaultMessage: 'People',
                  },
                }),
                view: {
                  type: TextInput,
                },
              },
            },
            assocPeopleType: {
              [config]: {
                messages: defineMessages({
                  name: {
                    id: 'field.bampfa_collectionobjects.assocPeopleType.name',
                    defaultMessage: 'Type',
                  },
                }),
                view: {
                  type: TextInput,
                },
              },
            },
            assocPeopleNote: {
              [config]: {
                messages: defineMessages({
                  name: {
                    id: 'field.bampfa_collectionobjects.assocPeopleNote.name',
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
        assocPersonGroupList: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.bampfa_collectionobjects.assocPersonGroupList.name',
                defaultMessage: 'Associated person',
              },
            }),
            view: {
              type: CompoundInput,
            },
          },
          assocPersonGroup: {
            [config]: {
              repeating: true,
              view: {
                type: CompoundInput,
                props: {
                  tabular: true,
                },
              },
            },
            assocPerson: {
              [config]: {
                messages: defineMessages({
                  fullName: {
                    id: 'field.bampfa_collectionobjects.assocPerson.fullName',
                    defaultMessage: 'Associated person',
                  },
                  name: {
                    id: 'field.bampfa_collectionobjects.assocPerson.name',
                    defaultMessage: 'Person',
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
            assocPersonType: {
              [config]: {
                messages: defineMessages({
                  name: {
                    id: 'field.bampfa_collectionobjects.assocPersonType.name',
                    defaultMessage: 'Type',
                  },
                }),
                view: {
                  type: TextInput,
                },
              },
            },
            assocPersonNote: {
              [config]: {
                messages: defineMessages({
                  name: {
                    id: 'field.bampfa_collectionobjects.assocPersonNote.name',
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
        assocPlaceGroupList: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.bampfa_collectionobjects.assocPlaceGroupList.name',
                defaultMessage: 'Associated place',
              },
            }),
            view: {
              type: CompoundInput,
            },
          },
          assocPlaceGroup: {
            [config]: {
              repeating: true,
              view: {
                type: CompoundInput,
                props: {
                  tabular: true,
                },
              },
            },
            assocPlace: {
              [config]: {
                messages: defineMessages({
                  name: {
                    id: 'field.bampfa_collectionobjects.assocPlace.name',
                    defaultMessage: 'Place',
                  },
                }),
                view: {
                  type: TextInput,
                },
              },
            },
            assocPlaceType: {
              [config]: {
                messages: defineMessages({
                  name: {
                    id: 'field.bampfa_collectionobjects.assocPlaceType.name',
                    defaultMessage: 'Type',
                  },
                }),
                view: {
                  type: TextInput,
                },
              },
            },
            assocPlaceNote: {
              [config]: {
                messages: defineMessages({
                  name: {
                    id: 'field.bampfa_collectionobjects.assocPlaceNote.name',
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
        assocEventName: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.bampfa_collectionobjects.assocEventName.name',
                defaultMessage: 'Event',
              },
            }),
            view: {
              type: TextInput,
            },
          },
        },
        assocEventNameType: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.bampfa_collectionobjects.assocEventNameType.name',
                defaultMessage: 'Type',
              },
            }),
            view: {
              type: TextInput,
            },
          },
        },
        assocEventOrganizations: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.bampfa_collectionobjects.assocEventOrganizations.name',
                defaultMessage: 'Associated event organization',
              },
            }),
            view: {
              type: CompoundInput,
            },
          },
          assocEventOrganization: {
            [config]: {
              messages: defineMessages({
                name: {
                  id: 'field.bampfa_collectionobjects.assocEventOrganization.name',
                  defaultMessage: 'Associated event organization',
                },
              }),
              repeating: true,
              view: {
                type: AutocompleteInput,
                props: {
                  source: 'organization/local,organization/shared',
                },
              },
            },
          },
        },
        assocEventPeoples: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.bampfa_collectionobjects.assocEventPeoples.name',
                defaultMessage: 'Associated event people',
              },
            }),
            view: {
              type: CompoundInput,
            },
          },
          assocEventPeople: {
            [config]: {
              repeating: true,
              view: {
                type: TextInput,
              },
            },
          },
        },
        assocEventPersons: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.bampfa_collectionobjects.assocEventPersons.name',
                defaultMessage: 'Associated event person',
              },
            }),
            view: {
              type: CompoundInput,
            },
          },
          assocEventPerson: {
            [config]: {
              messages: defineMessages({
                name: {
                  id: 'field.bampfa_collectionobjects.assocEventPerson.name',
                  defaultMessage: 'Associated event person',
                },
              }),
              repeating: true,
              view: {
                type: AutocompleteInput,
                props: {
                  source: 'person/local,person/shared',
                },
              },
            },
          },
        },
        assocEventPlaces: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.bampfa_collectionobjects.assocEventPlaces.name',
                defaultMessage: 'Associated event place',
              },
            }),
            view: {
              type: CompoundInput,
            },
          },
          assocEventPlace: {
            [config]: {
              repeating: true,
              view: {
                type: TextInput,
              },
            },
          },
        },
        assocEventNote: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.bampfa_collectionobjects.assocEventNote.name',
                defaultMessage: 'Associated event note',
              },
            }),
            view: {
              type: TextInput,
            },
          },
        },
        assocDateGroupList: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.bampfa_collectionobjects.assocDateGroupList.name',
                defaultMessage: 'Associated date',
              },
            }),
            view: {
              type: CompoundInput,
            },
          },
          assocDateGroup: {
            [config]: {
              repeating: true,
              view: {
                type: CompoundInput,
                props: {
                  tabular: true,
                },
              },
            },
            assocStructuredDateGroup: {
              [config]: {
                messages: defineMessages({
                  name: {
                    id: 'field.bampfa_collectionobjects.assocStructuredDateGroup.name',
                    defaultMessage: 'Date',
                  },
                }),
                view: {
                  type: StructuredDateInput,
                },
              },
            },
            assocDateType: {
              [config]: {
                messages: defineMessages({
                  name: {
                    id: 'field.bampfa_collectionobjects.assocDateType.name',
                    defaultMessage: 'Type',
                  },
                }),
                view: {
                  type: TextInput,
                },
              },
            },
            assocDateNote: {
              [config]: {
                messages: defineMessages({
                  name: {
                    id: 'field.bampfa_collectionobjects.assocDateNote.name',
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
        objectHistoryNote: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.bampfa_collectionobjects.objectHistoryNote.name',
                defaultMessage: 'Object history note',
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
        usageGroupList: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.bampfa_collectionobjects.usageGroupList.name',
                defaultMessage: 'Usage',
              },
            }),
            view: {
              type: CompoundInput,
            },
          },
          usageGroup: {
            [config]: {
              repeating: true,
              view: {
                type: CompoundInput,
                props: {
                  tabular: true,
                },
              },
            },
            usage: {
              [config]: {
                messages: defineMessages({
                  name: {
                    id: 'field.bampfa_collectionobjects.usage.name',
                    defaultMessage: 'Usage',
                  },
                }),
                view: {
                  type: TextInput,
                },
              },
            },
            usageNote: {
              [config]: {
                messages: defineMessages({
                  name: {
                    id: 'field.bampfa_collectionobjects.usageNote.name',
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
        owners: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.bampfa_collectionobjects.owners.name',
                defaultMessage: 'Owner',
              },
            }),
            view: {
              type: CompoundInput,
            },
          },
          owner: {
            [config]: {
              messages: defineMessages({
                name: {
                  id: 'field.bampfa_collectionobjects.owner.name',
                  defaultMessage: 'Owner',
                },
              }),
              repeating: true,
              view: {
                type: AutocompleteInput,
                props: {
                  source: 'person/local,person/shared,organization/local,organization/shared',
                },
              },
            },
          },
        },
        ownershipDateGroupList: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.bampfa_collectionobjects.ownershipDateGroupList.name',
                defaultMessage: 'Ownership date',
              },
            }),
            view: {
              type: CompoundInput,
            },
          },
          ownershipDateGroup: {
            [config]: {
              repeating: true,
              view: {
                type: StructuredDateInput,
              },
            },
          },
        },
        ownershipAccess: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.bampfa_collectionobjects.ownershipAccess.name',
                defaultMessage: 'Ownership access',
              },
            }),
            view: {
              type: OptionPickerInput,
              props: {
                source: 'ownershipAccessLevels',
              },
            },
          },
        },
        ownershipCategory: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.bampfa_collectionobjects.ownershipCategory.name',
                defaultMessage: 'Ownership category',
              },
            }),
            view: {
              type: OptionPickerInput,
              props: {
                source: 'ownershipCategories',
              },
            },
          },
        },
        ownershipPlace: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.bampfa_collectionobjects.ownershipPlace.name',
                defaultMessage: 'Ownership place',
              },
            }),
            view: {
              type: TextInput,
            },
          },
        },
        ownershipExchangeMethod: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.bampfa_collectionobjects.ownershipExchangeMethod.name',
                defaultMessage: 'Method',
              },
            }),
            view: {
              type: OptionPickerInput,
              props: {
                source: 'ownershipExchangeMethods',
              },
            },
          },
        },
        ownershipExchangeNote: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.bampfa_collectionobjects.ownershipExchangeNote.name',
                defaultMessage: 'Note',
              },
            }),
            view: {
              type: TextInput,
            },
          },
        },
        ownershipExchangePriceCurrency: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.bampfa_collectionobjects.ownershipExchangePriceCurrency.name',
                defaultMessage: 'Currency',
              },
            }),
            view: {
              type: TermPickerInput,
              props: {
                source: 'currency',
              },
            },
          },
        },
        ownershipExchangePriceValue: {
          [config]: {
            dataType: DATA_TYPE_FLOAT,
            messages: defineMessages({
              fullName: {
                id: 'field.bampfa_collectionobjects.ownershipExchangePriceValue.fullName',
                defaultMessage: 'Ownership exchange price',
              },
              name: {
                id: 'field.bampfa_collectionobjects.ownershipExchangePriceValue.name',
                defaultMessage: 'Price',
              },
            }),
            view: {
              type: TextInput,
            },
          },
        },
        ownersPersonalExperience: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.bampfa_collectionobjects.ownersPersonalExperience.name',
                defaultMessage: 'Owner\'s personal experience',
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
        ownersPersonalResponse: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.bampfa_collectionobjects.ownersPersonalResponse.name',
                defaultMessage: 'Owner\'s personal response',
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
        ownersReferences: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.bampfa_collectionobjects.ownersReferences.name',
                defaultMessage: 'Owner\'s reference',
              },
            }),
            view: {
              type: CompoundInput,
            },
          },
          ownersReference: {
            [config]: {
              repeating: true,
              view: {
                type: TextInput,
              },
            },
          },
        },
        ownersContributionNote: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.bampfa_collectionobjects.ownersContributionNote.name',
                defaultMessage: 'Owner\'s contribution note',
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
        viewersRole: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.bampfa_collectionobjects.viewersRole.name',
                defaultMessage: 'Viewer\'s role',
              },
            }),
            view: {
              type: TextInput,
            },
          },
        },
        viewersPersonalExperience: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.bampfa_collectionobjects.viewersPersonalExperience.name',
                defaultMessage: 'Viewer\'s personal experience',
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
        viewersPersonalResponse: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.bampfa_collectionobjects.viewersPersonalResponse.name',
                defaultMessage: 'Viewer\'s personal response',
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
        viewersReferences: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.bampfa_collectionobjects.viewersReferences.name',
                defaultMessage: 'Viewer\'s reference',
              },
            }),
            view: {
              type: CompoundInput,
            },
          },
          viewersReference: {
            [config]: {
              repeating: true,
              view: {
                type: TextInput,
              },
            },
          },
        },
        viewersContributionNote: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.bampfa_collectionobjects.viewersContributionNote.name',
                defaultMessage: 'Viewer\'s contribution note',
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
        referenceGroupList: {
          [config]: {
            view: {
              type: CompoundInput,
            },
          },
          referenceGroup: {
            [config]: {
              repeating: true,
              view: {
                type: CompoundInput,
                props: {
                  tabular: true,
                },
              },
            },
            reference: {
              [config]: {
                messages: defineMessages({
                  name: {
                    id: 'field.bampfa_collectionobjects.reference.name',
                    defaultMessage: 'Reference',
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
            referenceNote: {
              [config]: {
                messages: defineMessages({
                  name: {
                    id: 'field.bampfa_collectionobjects.referenceNote.name',
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
        fieldCollectionDateGroup: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.bampfa_collectionobjects.fieldCollectionDateGroup.name',
                defaultMessage: 'Field collection date',
              },
            }),
            view: {
              type: StructuredDateInput,
            },
          },
        },
        fieldCollectionMethods: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.bampfa_collectionobjects.fieldCollectionMethods.name',
                defaultMessage: 'Field collection method',
              },
            }),
            view: {
              type: CompoundInput,
            },
          },
          fieldCollectionMethod: {
            [config]: {
              repeating: true,
              view: {
                type: TermPickerInput,
                props: {
                  source: 'collectionmethod',
                },
              },
            },
          },
        },
        fieldCollectionNote: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.bampfa_collectionobjects.fieldCollectionNote.name',
                defaultMessage: 'Field collection note',
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
        fieldCollectionNumber: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.bampfa_collectionobjects.fieldCollectionNumber.name',
                defaultMessage: 'Field collection number',
              },
            }),
            view: {
              type: TextInput,
            },
          },
        },
        fieldCollectionPlace: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.bampfa_collectionobjects.fieldCollectionPlace.name',
                defaultMessage: 'Field collection place',
              },
            }),
            view: {
              type: AutocompleteInput,
              props: {
                source: 'place/local,place/shared,place/tgn',
              },
            },
          },
        },
        fieldCollectionSources: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.bampfa_collectionobjects.fieldCollectionSources.name',
                defaultMessage: 'Field collection source',
              },
            }),
            view: {
              type: CompoundInput,
            },
          },
          fieldCollectionSource: {
            [config]: {
              messages: defineMessages({
                name: {
                  id: 'field.bampfa_collectionobjects.fieldCollectionSource.name',
                  defaultMessage: 'Field collection source',
                },
              }),
              repeating: true,
              view: {
                type: AutocompleteInput,
                props: {
                  source: 'person/local,person/shared',
                },
              },
            },
          },
        },
        fieldCollectors: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.bampfa_collectionobjects.fieldCollectors.name',
                defaultMessage: 'Field collection collector',
              },
            }),
            view: {
              type: CompoundInput,
            },
          },
          fieldCollector: {
            [config]: {
              messages: defineMessages({
                name: {
                  id: 'field.bampfa_collectionobjects.fieldCollector.name',
                  defaultMessage: 'Field collection collector',
                },
              }),
              repeating: true,
              view: {
                type: AutocompleteInput,
                props: {
                  source: 'person/local,person/shared,organization/local,organization/shared',
                },
              },
            },
          },
        },
        fieldColEventNames: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.bampfa_collectionobjects.fieldColEventNames.name',
                defaultMessage: 'Field collection event name',
              },
            }),
            view: {
              type: CompoundInput,
            },
          },
          fieldColEventName: {
            [config]: {
              messages: defineMessages({
                fullName: {
                  id: 'field.bampfa_collectionobjects.fieldColEventName.fullName',
                  defaultMessage: 'Field collection event name',
                },
              }),
              repeating: true,
              view: {
                type: TextInput,
              },
            },
          },
        },
      },
    },
  };
};
