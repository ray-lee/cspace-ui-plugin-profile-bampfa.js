const template = (pluginContext) => {
  const {
    React,
  } = pluginContext.lib;

  const {
    Col,
    Panel,
    Cols,
  } = pluginContext.layoutComponents;

  const {
    InputTable,
    Field,
    Subrecord,
  } = pluginContext.recordComponents;

  return (
    <Field name="document">
      <Panel name="info" collapsible>
        <Field name="personTermGroupList">
          <Field name="personTermGroup">
            <Panel>
              <InputTable name="nameDetail" >
                <Field name="salutation" />
                <Field name="title" />
                <Field name="foreName" />
                <Field name="middleName" />
                <Field name="surName" />
                <Field name="nameAdditions" />
                <Field name="initials" />
              </InputTable>

              <InputTable>
                <Field name="termDisplayName" />
                <Field name="termName" />
                <Field name="termQualifier" />
                <Field name="termType" />
                <Field name="termStatus" />
              </InputTable>


              {/* TO DO: how to embed termPrefForLang in a field */}
              <InputTable name="termSource">
                <Field name="termLanguage" />
                <Field name="termPrefForLang" />
                <Field name="termSource" />
                <Field name="termSourceDetail" />
                <Field name="termSourceID" />
                <Field name="termSourceNote" />
              </InputTable>

            </Panel>
          </Field>
        </Field>

        <Cols>
          <Col>
            <Field name="gender" />
            <Field name="occupations">
              <Field name="occupation" />
            </Field>
            <Field name="schoolsOrStyles">
              <Field name="schoolOrStyle" />
            </Field>
            <Field name="groups">
              <Field name="group" />
            </Field>
            <Field name="nationalities">
              <Field name="nationality" />
            </Field>
            <Field name="nameNote" subpath="ns2:persons_bampfa" />
          </Col>

          <Col>
            <Cols>
              <Col>
                <Field name="birthDateGroup" />
                <Field name="birthPlace" />
                <Field name="birthCity" subpath="ns2:persons_bampfa" />
              </Col>

              <Col>
                <Field name="deathDateGroup" />
                <Field name="deathPlace" />
                <Field name="otherRegionalInfo" subpath="ns2:persons_bampfa" />
              </Col>

            </Cols>

            <Field name="dynastyPeriod" subpath="ns2:persons_bampfa" />
            <Field name="datesActive" subpath="ns2:persons_bampfa" />
            <Field name="bioNote" />
          </Col>

        </Cols>
      </Panel>

      <Panel name="copyright" collapsible>
        <Cols>
          <Col>
            <Field name="copyrightCredit" subpath="ns2:persons_bampfa" />
            <Field name="copyrightNote" subpath="ns2:persons_bampfa" />
          </Col>

          <Col>
            <Field name="copyrightHolder" subpath="ns2:persons_bampfa" />
            <Field name="permissionToReproduce" subpath="ns2:persons_bampfa" />
          </Col>
        </Cols>
      </Panel>

      <Subrecord name="contact" />

      <Panel name="hierarchy" collapsible collapsed>
        <Field name="relation-list-item" subpath="ns2:relations-common-list" />
      </Panel>
    </Field>
  );
};

export default pluginContext => ({
  template: template(pluginContext),
});
