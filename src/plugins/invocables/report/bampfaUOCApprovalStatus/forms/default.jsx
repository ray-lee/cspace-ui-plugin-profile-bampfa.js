import { defineMessages } from 'react-intl';

const template = (configContext) => {
  const {
    React,
  } = configContext.lib;

  const {
    Field,
  } = configContext.recordComponents;

  const {
    Row,
  } = configContext.layoutComponents;

  return (
    <Field name="document">
      <Field name="Requester" />
      <Row>
        <Field name="AuthStatus" />
        <Field name="AuthBy" />
      </Row>
      <Row>
        <Field name="StartDate" />
        <Field name="EndDate" />
      </Row>
      <Field name="OutputMIME" />
    </Field>
  );
};

export default configContext => ({
  messages: defineMessages({
    name: {
      id: 'form.report.bampfaUOCApprovalStatus.default.name',
      defaultMessage: 'Standard Template',
    },
  }),
  sortOrder: 0,
  template: template(configContext),
});
