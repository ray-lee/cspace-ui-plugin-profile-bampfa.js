const template = (pluginContext) => {
  const {
    React,
  } = pluginContext.lib;

  const {
    Col,
    Cols,
    Panel,
    Row,
  } = pluginContext.layoutComponents;

  const {
    Field,
    InputTable,
  } = pluginContext.recordComponents;

  return (
    <Field name="document">
      <Panel name="movement" collapsible collapsed>
        <InputTable name="currentLocation">
          <Field name="currentLocation" />
          {/* <Field name="crate"/> location-crate */}
          <Field name="currentLocationFitness" />
          <Field name="currentLocationNote" />
        </InputTable>

        <Cols>
          <Col>
            {/* <Field name="locationDate" /> Mandatory */}
            <Field name="reasonForMove" />

            <Field name="movementMethods">
              <Field name="movementMethod" />
            </Field>
          </Col>

          <Col>
            <Field name="movementContact" />
            <Field name="movementNote" />
          </Col> 
        </Cols>
      </Panel>
    </Field>
  );
};

export default pluginContext => ({
  template: template(pluginContext),
});
