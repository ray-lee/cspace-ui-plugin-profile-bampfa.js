const template = (configContext) => {
  const {
    React,
  } = configContext.lib;

  const {
    Field,
  } = configContext.recordComponents;

  const {
    Col,
    Cols,
  } = configContext.layoutComponents;

  return (
    <Field name="params">
      <Cols>
        <Col>
          <Field name="material" />
          <Field name="responsibleDepartment" />
          <Field name="assocPeople" />
        </Col>

        <Col>
          <Field name="bampfaObjectProductionPerson" />
          <Field name="objectProductionPlace" />
          <Field name="fieldCollector" />
        </Col>

        <Col>
          <Field name="objectStatus" />
          <Field name="contentPlace" />
          <Field name="objectName" />
        </Col>
      </Cols>

      <Field name="briefDescription" />
    </Field>
  );
};

export default configContext => ({
  template: template(configContext),
});
