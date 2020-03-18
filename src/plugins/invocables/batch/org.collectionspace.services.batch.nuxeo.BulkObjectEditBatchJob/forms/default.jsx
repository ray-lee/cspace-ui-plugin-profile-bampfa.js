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
          <Field name="numberOfObjects" />
          <Field name="objectProductionDate" />

          <Field name="otherNumberList">
            <Field name="otherNumber">
              <Field name="numberValue" />
              <Field name="numberType" />
            </Field>
          </Field>
        </Col>

        <Col>
          <Field name="objectProductionPersonGroup">
            <Field name="objectProductionPerson" />
          </Field>

          <Field name="objectProductionPlaceGroup">
            <Field name="objectProductionPlace" />
          </Field>

        </Col>
      </Cols>

      <Field name="briefDescriptions">
        <Field name="briefDescription" />
      </Field>
    </Field>
  );
};

export default configContext => ({
  template: template(configContext),
});
