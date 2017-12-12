const template = (pluginContext) => {
  const {
    React,
  } = pluginContext.lib;

  const {
    Panel,
  } = pluginContext.layoutComponents;

  const {
    Field,
    InputTable,
  } = pluginContext.recordComponents;

  return (
    <Field name="document">
      <Panel name="info" collapsible>
        <Field name="conceptTermGroupList">
          <Field name="conceptTermGroup">
            <Panel>
              <InputTable>
                <Field name="termDisplayName" />
                <Field name="termQualifier" />
                <Field name="termStatus" />
              </InputTable>

              <InputTable>
                <Field name="termName" />
                <Field name="termLanguage" />
                <Field name="termPrefForLang" />
                <Field name="historicalStatus" />
                <Field name="termType" />
                <Field name="termSource" />
                <Field name="termSourceDetail" />
                <Field name="termSourceID" />
                <Field name="termSourceNote" />
              </InputTable>
            </Panel>
          </Field>
        </Field>

        <InputTable name="scopeNote">
          <Field name="scopeNote" />
          <Field name="scopeNoteSource" />
          <Field name="scopeNoteSourceDetail" />
        </InputTable>

        <Field name="citationGroupList">
          <Field name="citationGroup">
            <Field name="citationSource" />
            <Field name="citationSourceDetail" />
          </Field>
        </Field>

        <Field name="additionalSourceGroupList">
          <Field name="additionalSourceGroup">
            <Field name="additionalSource" />
            <Field name="additionalSourceDetail" />
            <Field name="additionalSourceUniqueID" />
            <Field name="additionalSourceNote" />
          </Field>
        </Field>
      </Panel>

      <Panel name="hierarchy" collapsible collapsed>
        <Field name="relation-list-item" subpath="ns2:relations-common-list" />
      </Panel>
    </Field>
  );
};

export default pluginContext => ({
  template: template(pluginContext),
});
