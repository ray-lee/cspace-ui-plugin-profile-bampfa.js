const template = (pluginContext) => {
  const {
    React,
  } = pluginContext.lib;

  const {
    Panel,
    Cols,
    Col,
  } = pluginContext.layoutComponents;

  const {
    Field,
    InputTable,
  } = pluginContext.recordComponents;

  return (
    <Field name="document">
      <Panel name="info" collapsible>
        <Field name="placeTermGroupList">
          <Field name="placeTermGroup">
            <Panel>
              <InputTable>
                <Field name="termDisplayName" />
                <Field name="termName" />
                <Field name="termQualifier" />
                <Field name="termType" />
                <Field name="termStatus" />
              </InputTable>

              <InputTable>
                <Field name="termLanguage" />
                <Field name="termPrefForLang" />
                <Field name="termSource" />
                <Field name="termSourceDetail" />
                <Field name="termSourceID" />
                <Field name="termSourceNote" />
              </InputTable>

              <InputTable name="nameDetail">
                <Field name="nameAbbrev" />
                <Field name="historicalStatus" />
                <Field name="nameNote" />
                <Field name="nameDateGroup" />
              </InputTable>
            </Panel>
          </Field>
        </Field>

        <Cols>
          <Col>
            <Field name="placeType" />
            <Field name="placeOwnerGroupList">
              <Field name="placeOwnerGroup">
                <Field name="owner" />
                <Field name="ownershipDateGroup" />
                <Field name="ownershipNote" />
              </Field>
            </Field>
            <Field name="placeSource" />
          </Col>
          <Col>
            <Field name="placeNote" />
          </Col>
        </Cols>
      </Panel>

      <Panel name="localityInfo" collapsible collapsed>
        <Cols>
          <Col>
            <Field name="vCoordinates" />
            <Field name="vElevation" />
            <Field name="minElevationInMeters" />
            <Field name="maxElevationInMeters" />
          </Col>

          <Col>
            <Field name="vLatitude" />
            <Field name="vDepth" />
            <Field name="minDepthInMeters" />
            <Field name="maxDepthInMeters" />
          </Col>

          <Col>
            <Field name="vLongitude" />
            <Field name="vDistanceAboveSurface" />
            <Field name="minDistanceAboveSurfaceMeters" />
            <Field name="maxDistanceAboveSurfaceMeters" />
          </Col>

          <Col>
            <Field name="vCoordSys" />
            <Field name="vUnitofMeasure" />
            <Field name="vCoordSource" />
          </Col>

          <Col>
            <Field name="vSpatialReferenceSystem" />
            <Field name="vCoordSourceRefId" />
          </Col>
        </Cols>
      </Panel>

      <Panel name="geoRefInfo" collapsible collapsed>
        <Field name="placeGeoRefGroupList">
          <Field name="placeGeoRefGroup">
            <Panel>
              <Cols>
                <Col>
                  <Field name="decimalLatitude" />
                  <Field name="pointRadiusSpatialFit" />
                  <Field name="geoReferencedBy" />
                  <Field name="geoRefRemarks" />
                </Col>

                <Col>
                  <Field name="decimalLongitude" />
                  <Field name="footprintWKT" />
                  <Field name="geoRefDateGroup" />
                </Col>

                <Col>
                  <Field name="geodeticDatum" />
                  <Field name="footprintSRS" />
                  <Field name="geoRefProtocol" />
                  <Field name="geoRefPlaceName" />
                </Col>

                <Col>
                  <Field name="coordUncertaintyInMeters" />
                  <Field name="footprintSpatialFit" />
                  <Field name="geoRefSource" />
                </Col>

                <Col>
                  <Field name="coordPrecision" />
                  <Field name="geoRefVerificationStatus" />
                </Col>
              </Cols>
            </Panel>
          </Field>
        </Field>
      </Panel>

      <Panel name="hierarchy" collapsible>
        <Field name="relation-list-item" subpath="ns2:relations-common-list" />
      </Panel>
    </Field>
  );
};

export default pluginContext => ({
  template: template(pluginContext),
});
