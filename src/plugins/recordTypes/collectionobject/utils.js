/* global document */

const numberPattern = /^\d+$/;

const makeObjectNumberPartSortable = value =>
  (numberPattern.test(value) ? value.padStart(5, '0') : value.toLowerCase());

const makeObjectNumberSortable = value =>
  (value ? value.split('.').map(makeObjectNumberPartSortable).join(' ') : null);

const getPrimaryOtherNumber = commonData =>
  commonData.getIn(['otherNumberList', 'otherNumber', 0, 'numberValue']) || null;

export const computeObjectNumbers = (data, Immutable) => {
  const commonData = data.get('ns2:collectionobjects_common');
  const bampfaData = data.get('ns2:collectionobjects_bampfa');

  const objectNumber = ['Prefix', 'Part1', 'Part2', 'Part3', 'Part4', 'Part5']
    .map(name => (bampfaData.get(`accNumber${name}`) || '').trim())
    .filter(part => !!part)
    .join('.');

  const sortableObjectNumber = makeObjectNumberSortable(objectNumber);
  const effectiveObjectNumber = objectNumber || getPrimaryOtherNumber(commonData);

  const sortableEffectiveObjectNumber = objectNumber
    ? sortableObjectNumber
    : makeObjectNumberSortable(effectiveObjectNumber);

  return Immutable.fromJS({
    'ns2:collectionobjects_common': {
      objectNumber,
    },
    'ns2:collectionobjects_bampfa': {
      sortableObjectNumber,
      effectiveObjectNumber,
      sortableEffectiveObjectNumber,
    },
  });
};

export const transformSortableObjectNumberSearch = ({ data }) =>
  makeObjectNumberSortable(data);

const htmlParagraphSeparator = /<\/p>/;

const htmlToText = (html) => {
  if (!html || html === '<br>') {
    return '';
  }

  const element = document.createElement('div');

  element.insertAdjacentHTML('afterbegin', html);

  return element.textContent;
};

export const computePlainTextTitle = ({ data }) => {
  const html = data.get('bampfaFormattedTitle');

  const text = html
    ? html.split(htmlParagraphSeparator).filter(line => !!line).map(htmlToText).join('\n')
    : null;

  return data.set('bampfaTitle', text);
};

export const computeFields = ({ data }, formatRefName, Immutable) => {
  const artistName = data.getIn(['ns2:collectionobjects_bampfa', 'bampfaObjectProductionPersonGroupList', 'bampfaObjectProductionPersonGroup', 0, 'bampfaObjectProductionPerson']);

  const computedArtistName = formatRefName(artistName);

  let objectNumbers = computeObjectNumbers(data, Immutable);
  const bampfaValues = objectNumbers.get('ns2:collectionobjects_bampfa')
                                     .set('computedArtistName', computedArtistName);
  objectNumbers = objectNumbers.set('ns2:collectionobjects_bampfa', bampfaValues);

  return objectNumbers;
};
