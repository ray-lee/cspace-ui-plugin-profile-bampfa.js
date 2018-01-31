export default (pluginContext) => {
  const {
    OP_OR,
    OP_EQ,
    OP_CONTAIN,
    OP_RANGE,
  } = pluginContext.searchOperators;

  return {
    op: OP_OR,
    values: [
      {
        op: OP_CONTAIN,
        path: 'ns2:media_bampfa/imageNumber',
      },
      {
        op: OP_CONTAIN,
        path: 'ns2:media_common/title',
      },
      {
        op: OP_CONTAIN,
        path: 'ns2:media_common/identificationNumber',
      },
      {
        op: OP_EQ,
        path: 'ns2:media_common/creator',
      },
      {
        op: OP_RANGE,
        path: 'ns2:media_common/dateGroupList/dateGroup',
      },
      // TO DO: Modify these when blob access is available
      // {
      //   op: // 6: filename label (display: none)
      //   path: // path is in blobs
      // },
      // {
      //   op: // 7: media-format-label
      //   path: // path is in blobs
      // },
      {
        op: OP_EQ,
        path: 'ns2:media_common/languageList/language',
      },
      {
        op: OP_EQ,
        path: 'ns2:media_common/publisher',
      },
      {
        op: OP_EQ,
        path: 'ns2:media_common/rightsHolder',
      },
      {
        op: OP_CONTAIN,
        path: 'ns2:media_common/source',
      },
      {
        op: OP_CONTAIN,
        path: 'ns2:media_common/subjectList/subject',
      },
      {
        op: OP_EQ,
        path: 'ns2:media_common/typeList/type',
      },
      {
        op: OP_CONTAIN,
        path: 'ns2:collectionspace_core/updatedBy',
      },
      {
        op: OP_RANGE,
        path: 'ns2:collectionspace_core/updatedAt',
      },
    ],
  };
};
