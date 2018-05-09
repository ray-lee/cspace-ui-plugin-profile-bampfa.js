export default (configContext) => {
  const {
    OP_EQ,
    OP_RANGE,
    OP_CONTAIN,
  } = configContext.searchOperators;

  const {
    defaultAdvancedSearchBooleanOp,
    extensions,
  } = configContext.config;

  return {
    op: defaultAdvancedSearchBooleanOp,
    value: [
      {
        op: OP_EQ,
        path: 'ns2:movements_common/currentLocation',
      },
      {
        op: OP_EQ,
        path: 'ns2:movements_bampfa/crate',
      },
      {
        op: OP_RANGE,
        path: 'ns2:movements_common/locationDate',
      },
      {
        op: OP_CONTAIN,
        path: 'ns2:movements_common/movementContact',
      },
      {
        op: OP_EQ,
        path: 'ns2:movements_common/reasonForMove',
      },
      {
        op: OP_EQ,
        path: 'ns2:movements_common/movementMethods/movementMethod',
      },
      ...extensions.core.advancedSearch,
    ],
  };
};
