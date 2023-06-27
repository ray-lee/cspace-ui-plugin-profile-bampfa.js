export default (configContext) => {
  const {
    formatRefName,
  } = configContext.formatHelpers;

  return {
    default: {
      condition: {
        formatValue: formatRefName,
      },
    }
  };
};
