const template = (pluginContext) => {
  const {
    React,
  } = pluginContext.lib;

  const {
    Panel,
    Row,
    Col,
  } = pluginContext.layoutComponents;

  const {
    Field,
  } = pluginContext.recordComponents;

  return (
    <Field name="document">
      <Panel name="info" collapsible>

        <Row>
          <Field name="valuationcontrolRefNumber" />
        </Row>
        
        <Row>
          <Col> 
            <Field name="valueAmountsList">
              <Field name="valueAmounts">
                <Field name="valueCurrency" />
                <Field name="valueAmount" />
              </Field>
            </Field>
            <Field name="valueDate" />
           <Field name="valueRenewalDate" />

          </Col>
         
          <Col>
            <Field name="valueSource" />
            <Field name="valueType" />
            <Field name="valueNote" />
          </Col>
        </Row>

      </Panel>
    </Field>
  );
};

export default pluginContext => ({
  template: template(pluginContext),
});
