import { defineMessages } from 'react-intl';

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
    InputTable,
  } = pluginContext.recordComponents;

  return (
    <Field name="document">
      <Panel name="id" collapsible>
        
        <Row>
          <div>
            <Row>
              <Col>
                <InputTable name="idNumberInfo">
                  <Field name="accNumberPrefix" subpath="ns2:collectionobjects_bampfa" /> 
                  <Field name="accNumberPart1" subpath="ns2:collectionobjects_bampfa" />
                  <Field name="accNumberPart2" subpath="ns2:collectionobjects_bampfa" />
                  <Field name="accNumberPart3" subpath="ns2:collectionobjects_bampfa" />
                  <Field name="accNumberPart4" subpath="ns2:collectionobjects_bampfa" />
                  <Field name="accNumberPart5" subpath="ns2:collectionobjects_bampfa" />
                </InputTable>
                <Field name="objectNumber" />
              </Col>
              <Col>
                <Field name="legalStatus" subpath="ns2:collectionobjects_bampfa" />
                <Field name="legalStatusDateGroup" subpath="ns2:collectionobjects_bampfa" />
                <Field name="itemClass" subpath="ns2:collectionobjects_bampfa" />
              </Col>
            </Row>
          </div>
        </Row>


        <Field name="bampfaObjectProductionPersonGroupList" subpath="ns2:collectionobjects_bampfa" >
          <Field name="bampfaObjectProductionPersonGroup" >
            <Field name="bampfaObjectProductionPerson" />
            <Field name="bampfaObjectProductionPersonRole" />
            <Field name="bampfaObjectProductionPersonQualifier"/>
          </Field>
        </Field>

        <Field name="artistDisplayOverride" subpath="ns2:collectionobjects_bampfa" />

        <Field name="titleGroupList">
          <Field name="titleGroup">
            <Panel>
              <Row>
                <div>
                  <Field name="bampfaTitle" />
                </div>
              </Row>
            </Panel>
          </Field>
        </Field>

        <Field name="seriesTitle" subpath="ns2:collectionobjects_bampfa" />

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

              <Field name="dimensionNote" />
            </Panel>
          </Field>
        </Field>

        <Row> 
          <Field name="physicalDescription" />
          <Field name="creditLine" subpath="ns2:collectionobjects_bampfa" />
        </Row>

        <Row>
          <Field name="otherNumberList" subpath="ns2:collectionobjects_bampfa">
            <Field name="otherNumberGroup">
              <Field name="numberValue" />
              <Field name="numberType" />
            </Field>
          </Field>
          <Col>
            <Field name="computedCurrentLocation" />
            <Field name="computedCrate" subpath="ns2:collectionobjects_bampfa"/>
          </Col>
        </Row>

      </Panel>

      {/* TO DO: Make this pannel's name show up */}
      <Panel name="detail" collapsible collapsed>
        <Row>
          <Col> 
            <Field name="productionDate" subpath="ns2:collectionobjects_bampfa" />

            <InputTable name="centuryEra">
              <Field name="objectProductionDateCentury" subpath="ns2:collectionobjects_bampfa" />
                <Field name="objectProductionDateEra" subpath="ns2:collectionobjects_bampfa" />
            </InputTable>

          </Col>
          <Col>
            <Field name="workDescription" subpath="ns2:collectionobjects_bampfa"/>
          </Col>
        </Row>
        <Row>
          <Field name="objectProductionDynasty" subpath="ns2:collectionobjects_bampfa" />
          <Col>
            <Row>
              <Field name="numberOfObjects"/>
              <Field name="numberOfScans" subpath="ns2:collectionobjects_bampfa" />
            </Row>
            </Col>
        </Row>

        <Field name="productionPlace" subpath="ns2:collectionobjects_bampfa" />

        <Field name="objectProductionPeopleGroupList">
          <Field name="objectProductionPeopleGroup">
            <Field name="objectProductionPeople" />
            <Field name="objectProductionPeopleRole"/>
          </Field>
        </Field>
      </Panel>

      <Panel name="desc" collapsible collapsed>
        <Row>
          <div>
            <Field name="editionNumber" />
            <Field name="stateGeneration" subpath="ns2:collectionobjects_bampfa" />
          </div>

          <div>
            <Field name="soundOrSilent" subpath="ns2:collectionobjects_bampfa" />
            <Field name="bwOrColor" subpath="ns2:collectionobjects_bampfa" />
    
          </div>
        </Row>


       {/* TODO: Break out measuredPartGroupList */}

        <Field name="inscriptionContent" />

          <Field name="textualInscriptionGroupList">
            <Field name="textualInscriptionGroup">
              <Panel>
                <Field name="inscriptionContent" />
              </Panel>
            </Field>
          </Field>

          <Field name="nonTextualInscriptionGroupList">
            <Field name="nonTextualInscriptionGroup">
              <Panel>
                <Field name="inscriptionDescription" />

              </Panel>
            </Field>
          </Field>
      </Panel>

      {/* Item-specific acq info */}
      <Panel name="acq" collapsible collapsed>
        
        <Row> 
          <div>
            <Field name="acquisitionMethod" subpath="ns2:collectionobjects_bampfa" />
            <Field name="acquisitionDateGroup" subpath="ns2:collectionobjects_bampfa"/>
          </div>
          <div>
            <Field name="provenance" subpath="ns2:collectionobjects_bampfa" />
          </div>
        </Row>
        <Row> 
          <div>
          <Field name="acquisitionSource" subpath="ns2:collectionobjects_bampfa" />
          <Field name="bampfaAcquisitionReason" subpath="ns2:collectionobjects_bampfa" />
          </div>
          <div>
          <Field name="acquisitionNote" subpath="ns2:collectionobjects_bampfa" />
          </div>
        </Row>

        <Row> 
          <div>
            <Field name="acquisitionProvisos" subpath="ns2:collectionobjects_bampfa" />
          </div>
          <div>
            <Field name="appraisalInfo" subpath="ns2:collectionobjects_bampfa" />
          </div>
        </Row>

        <Field name="currentValueGroupList" subpath="ns2:collectionobjects_bampfa">
          <Field name="currentValueGroup">
            <Field name="currentValue" />
            <Field name="currentValueSource" />
            <Field name="currentValueDateGroup"/>
          </Field>
        </Field>

        <Field name="initialValueGroup" subpath="ns2:collectionobjects_bampfa">
          <Field name="initialValue" />
          <Field name="initialValueSource" />
          <Field name="initialValueDateGroup" />
        </Field> 


      </Panel>

      {/* Classification */}
      <Panel name="classification" collapsible collapsed>
        <Row> 
          <Col>
            <Field name="bampfaCollection" subpath="ns2:collectionobjects_bampfa" />
            <Field name="subjectTheme" subpath="ns2:collectionobjects_bampfa" />
            <Field name="style" subpath="ns2:collectionobjects_bampfa" />
          </Col>
          <Col>
            <Field name="partOf" subpath="ns2:collectionobjects_bampfa" />
          </Col> 
          </Row>

      </Panel>

      {/* copyright */}
      <Panel name="copyright" collapsible collapsed>
        <Row> 
          <Col>
            <Field name="copyrightCredit" subpath="ns2:collectionobjects_bampfa" />
            <Field name="copyrightNote" subpath="ns2:collectionobjects_bampfa" />
          </Col>
          <Col>
            <Field name="photoCredit" subpath="ns2:collectionobjects_bampfa" />
            <Field name="copyrightHolder" subpath="ns2:collectionobjects_bampfa" />
            <Field name="permissionToReproduce" subpath="ns2:collectionobjects_bampfa" />
          </Col> 
        </Row>
      </Panel>

      {/* Condition/Conservation info */}
      <Panel name="condition" collapsible collapsed>

        <Field name="conditionCheckGroupList" subpath="ns2:collectionobjects_bampfa" >
          <Field name="conditionCheckGroup">
            <Panel>
              <Row>
                <Field name="conditionNote" />
                <Field name="conservationNote"/>

              </Row>
              <Row>
                <Field name="conditionCheckBy"/>
                <Field name="conditionCheckDate"/>
              </Row>
            </Panel>
          </Field>
        </Field>
      </Panel>

      <Panel name="reference" collapsible collapsed>
        <Field name="referenceGroupList">
          <Field name="referenceGroup">
            <Field name="reference" />
            <Field name="referenceNote" />
          </Field>
        </Field>
      </Panel>

      {/* notes panel */}
      <Panel name="notes" collapsible collapsed>
        <div>
          <Field name="comments" subpath="ns2:collectionobjects_bampfa" />
        </div>
      </Panel>

      {/* collection text information */}
      <Panel name="collectinfo" collapsible collapsed>
        <Field name="collectionTextGroupList" subpath="ns2:collectionobjects_bampfa" >
            <Field name="collectionTextGroup">
              <Panel>
                <Row>
                  <Field name="collectionTextType" />
                  <Field name="collectionTextDoNotPublish" />
                </Row>
                <Field name="collectionText" />
                <Row>
                  <Field name="collectionTextAuthor" />
                  <Field name="collectionTextDate" />
                </Row>
                <Field name="collectionTextNote" />
              </Panel>
            </Field>
          </Field>
      </Panel>

      <Panel name="hierarchy" collapsible collapsed>
        <Field name="relation-list-item" subpath="ns2:relations-common-list" />
      </Panel>

      {/* Cataloger Information */}
      <Panel name="cataloger" collapsible collapsed>
        <Field name="catalogerGroupList" subpath="ns2:collectionobjects_bampfa">
          <Field name="catalogerGroup">
            <Field name="catalogerName" />
            <Field name="catalogNote"/>
            <Field name="catalogDate"/>
          </Field>
        </Field>
      </Panel>
   
    </Field>
); 
};

export default pluginContext => ({
messages: defineMessages({
  name: {
    id: 'form.collectionobject.default.name',
    defaultMessage: 'Default Template',
  },
}),
sortOrder: 0,
template: template(pluginContext),
});
