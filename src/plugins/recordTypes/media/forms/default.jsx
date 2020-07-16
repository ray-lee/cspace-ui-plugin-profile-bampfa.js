const template = (configContext) => {
  const {
    React,
  } = configContext.lib;

  const {
    Col,
    Cols,
    Panel,
    Row,
  } = configContext.layoutComponents;

  const {
    Field,
    Subrecord,
  } = configContext.recordComponents;

  const {
    extensions,
  } = configContext.config;

  return (
    <Field name="document">
      <Panel name="media" collapsible>
        <Cols>
          <Col>
            <Field name="imageNumber" subpath="ns2:media_bampfa" />

            <Field name="publishToList">
              <Field name="publishTo" />
            </Field>
          </Col>

          <Col>
            <Field name="primaryDisplay" subpath="ns2:media_bampfa" />
          </Col>
        </Cols>

        <Panel name="file" collapsible>
          <Subrecord name="blob" showDetachButton />
        </Panel>

        <Row>
          <Field name="externalUrl" />
          <Field name="websiteDisplayLevel" subpath="ns2:media_bampfa" />
        </Row>

        {extensions.dimension.form}

        <Cols>
          <Col>
            <Field name="contributor" />
            <Field name="creator" />

            <Field name="languageList">
              <Field name="language" />
            </Field>

            <Field name="publisher" />

            <Field name="relationList">
              <Field name="relation" />
            </Field>

            <Field name="copyrightStatement" />
          </Col>

          <Col>
            <Field name="typeList">
              <Field name="type" />
            </Field>

            <Field name="coverage" />

            <Field name="dateGroupList">
              <Field name="dateGroup" />
            </Field>

            <Field name="source" />

            <Field name="subjectList">
              <Field name="subject" />
            </Field>

            <Field name="rightsHolder" />
          </Col>
        </Cols>

        <Field name="description" />
      </Panel>
    </Field>
  );
};

export default configContext => ({
  template: template(configContext),
});
