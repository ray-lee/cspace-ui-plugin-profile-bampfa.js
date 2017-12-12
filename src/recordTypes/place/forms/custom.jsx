import { defineMessages } from 'react-intl';

const template = (pluginContext) => {
  const {
    React,
  } = pluginContext.lib;

  const {
    Panel,
    Row,
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
              <Row>
                <Field name="termDisplayName" />
                <Field name="termName" />
                <Field name="termQualifier" />
                <Field name="termStatus" />
              </Row>

              <Row>
                <Field name="termType" />
                <Field name="historicalStatus" />
                <Field name="termLanguage" />
                <Field name="termPrefForLang" />
              </Row>

              <InputTable name="nameDetail">
                <Field name="nameAbbrev" />
                <Field name="nameNote" />
                <Field name="nameDateGroup" />
              </InputTable>

              <InputTable name="termSource">
                <Field name="termSource" />
                <Field name="termSourceDetail" />
                <Field name="termSourceID" />
                <Field name="termSourceNote" />
              </InputTable>
            </Panel>
          </Field>
        </Field>

        <Row>
          <Field name="placeType" />
          <Field name="placeSource" />
        </Row>

        <Field name="placeOwnerGroupList">
          <Field name="placeOwnerGroup">
            <Field name="owner" />
            <Field name="ownershipDateGroup" />
            <Field name="ownershipNote" />
          </Field>
        </Field>

        <Field name="placeNote" />

        {/* TODO: Break out address group */}

        <Field name="addrGroupList">
          <Field name="addrGroup">
            <Panel>
              <Cols>
                <Col>
                  <Field name="addressPlace1" />
                  <Field name="addressPlace2" />
                  <Field name="addressMunicipality" />

                </Col>

                <Col>
                  <Row>
                    <Field name="addressStateOrProvince" />
                    <Field name="addressPostCode" />
                  </Row>

                  <Field name="addressCountry" />

                  <Row>
                    <Col>
                      <Field name="addressType" />
                    </Col>

                    <Col />
                  </Row>
                </Col>
              </Cols>
            </Panel>
          </Field>
        </Field>
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

      <Panel name="hierarchy" collapsible collapsed>
        <Field name="relation-list-item" subpath="rel:relations-common-list" />
      </Panel>
    </Field>
  );
};

export default pluginContext => ({
  messages: defineMessages({
    name: {
      id: 'form.place.default.name',
      defaultMessage: 'Standard Template',
    },
  }),
  template: template(pluginContext),
});
