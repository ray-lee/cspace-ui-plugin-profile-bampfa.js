export default (pluginContext) => {
  const {
    React,
  } = pluginContext.lib;

  const {
    Panel,
    Row,
  } = pluginContext.layoutComponents;

  const {
    Field,
  } = pluginContext.recordComponents;

  return (
    <Field name="measuredPartGroupList">
      <Field name="measuredPartGroup" >
        <Panel>
          <Row>
            <Field name="measuredPart" />
            <Field name="dimensionSummary" />
          </Row>

          <Field name="dimensionSubGroupList" >
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
