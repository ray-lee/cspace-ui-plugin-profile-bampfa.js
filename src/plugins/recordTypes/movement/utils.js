// eslint-disable-next-line import/prefer-default-export
export const computeMovementSummary = ({ recordData }, { formatDate, formatRefName }) => {
  const commonData = recordData.getIn(['document', 'ns2:movements_common']);

  const formattedLocationDate = formatDate(commonData.get('locationDate'));
  const reason = commonData.get('reasonForMove');
  const formattedReason = reason ? `(${formatRefName(reason)})` : null;

  return [formattedLocationDate, formattedReason]
    .filter((part) => !!part)
    .join(' ');
};
