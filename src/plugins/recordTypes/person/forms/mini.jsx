const template = (configContext) => {
  const {
    React,
  } = configContext.lib;

  const {
    Row,
  } = configContext.layoutComponents;

  const {
    Field,
  } = configContext.recordComponents;

  return (
    <Field name="document">
      <Row>
        <Field name="nationalities">
          <Field name="nationality" />
        </Field>

        <Field name="birthPlace" />
      </Row>

      <Row>
        <Field name="birthDateGroup" />
        <Field name="deathDateGroup" />
      </Row>
    </Field>
  );
};

export default configContext => ({
  template: template(configContext),
});
