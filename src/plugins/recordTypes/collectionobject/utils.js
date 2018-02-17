const numberPattern = /^\d+$/;

const makeObjectNumberPartSortable = value =>
  (numberPattern.test(value) ? value.padStart(5, '0') : value.toLowerCase());

const makeObjectNumberSortable = value =>
  (value ? value.split('.').map(makeObjectNumberPartSortable).join(' ') : null);

const getPrimaryOtherNumber = commonData =>
  commonData.getIn(['otherNumberList', 'otherNumber', 0, 'numberValue']) || null;

export const computeObjectNumbers = ({ data }) => {
  const commonData = data.get('ns2:collectionobjects_common');
  const bampfaData = data.get('ns2:collectionobjects_bampfa');

  const objectNumber = ['Prefix', 'Part1', 'Part2', 'Part3', 'Part4', 'Part5']
    .map(name => bampfaData.get(`accNumber${name}`))
    .filter(part => !!part)
    .join('.');

  const sortableObjectNumber = makeObjectNumberSortable(objectNumber);
  const effectiveObjectNumber = objectNumber || getPrimaryOtherNumber(commonData);

  const sortableEffectiveObjectNumber = objectNumber
    ? sortableObjectNumber
    : makeObjectNumberSortable(effectiveObjectNumber);

  const updatedCommonData = commonData.set('objectNumber', objectNumber);

  const updatedBampfaData = bampfaData
    .set('sortableObjectNumber', sortableObjectNumber)
    .set('effectiveObjectNumber', effectiveObjectNumber)
    .set('sortableEffectiveObjectNumber', sortableEffectiveObjectNumber);

  return data
    .set('ns2:collectionobjects_common', updatedCommonData)
    .set('ns2:collectionobjects_bampfa', updatedBampfaData);
};

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
