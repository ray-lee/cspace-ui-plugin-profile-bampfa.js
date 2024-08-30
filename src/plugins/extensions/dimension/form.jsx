export default (configContext) => {
  const {
    lib,
    layoutComponents,
    recordComponents,
  } = configContext;

  const {
    React,
  } = lib;

  const {
    Panel,
    Row,
  } = layoutComponents;

  const {
    Field,
  } = recordComponents;

  return (
    <Field name="measuredPartGroupList">
      <Field name="measuredPartGroup">
        <Panel>
          <Row>
            <Field name="measuredPart" />
            <Field name="dimensionSummary" />
          </Row>

          <Field name="dimensionSubGroupList">
            <Field name="dimensionSubGroup">
              <Field name="dimension" />
              <Field name="value" />
              <Field name="measurementUnit" />
              <Field name="valueQualifier" />
            </Field>
          </Field>

          <Field name="measuredPartNote" />
        </Panel>
      </Field>
    </Field>
  );
};
