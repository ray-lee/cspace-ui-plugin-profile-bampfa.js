const template = (pluginContext) => {
  const {
    React,
  } = pluginContext.lib;

  const {
    Row,
  } = pluginContext.layoutComponents;

  const {
    Field,
  } = pluginContext.recordComponents;

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

export default pluginContext => ({
  template: template(pluginContext),
});
