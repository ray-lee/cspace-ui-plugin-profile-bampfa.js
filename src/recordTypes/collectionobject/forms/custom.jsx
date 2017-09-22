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
                  <Field name="accNumberPrefix" /> 
                  <Field name="accNumberPart1" />
                  <Field name="accNumberPart2" />
                  <Field name="accNumberPart3" />
                  <Field name="accNumberPart4" />
                  <Field name="accNumberPart5" />
                </InputTable>
                <Field name="objectNumber" />
              </Col>
              <Col>
                <Field name="legalStatus" />
                <Field name="legalStatusDateGroup" />
                <Field name="itemClass" />
              </Col>
            </Row>
          </div>
        </Row>


        <Field name="bampfaObjectProductionPersonGroupList">
          <Field name="bampfaObjectProductionPersonGroup">
            <Field name="bampfaObjectProductionPerson" />
            <Field name="bampfaObjectProductionPersonRole" />
            <Field name="bampfaObjectProductionPersonQualifier" />
          </Field>
        
        <Field name="artistDisplayOverride" />
        </Field>

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

        <Field name="seriesTitle" />

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
          <Field name="creditLine" />
        </Row>

        <Row>
          <Field name="otherNumberList">
            <Field name="otherNumberGroup">
              <Field name="numberValue" />
              <Field name="numberType" />
            </Field>
          </Field>
          <Col>
            <Field name="computedCurrentLocation" />
            <Field name="currentBoxContainer" />
          </Col>
        </Row>


      </Panel>

      {/* TO DO: Make this pannel's name show up */}
      <Panel name="detail" collapsible collapsed>
        <Row>
          <Col> 
            <Field name="productionDate"/>

            <InputTable name="centuryEra">
              <Field name="objectProductionDateCentury" />
                <Field name="objectProductionDateEra" />
            </InputTable>

          </Col>
          <Col>
            <Field name="workDescription"/>
          </Col>
        </Row>
        <Row>
          <Field name="objectProductionDynasty"/>
          <Col>
            <Row>
              <Field name="numberOfObjects"/>
              <Field name="numberOfScans"/>
            </Row>
            </Col>
        </Row>

        <Field name="productionPlace"/>

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
            <Field name="stateGeneration"/>
          </div>

          <div>
            <Field name="soundOrSilent"/>
            <Field name="bwOrColor"/>
    
          </div>
        </Row>


       {/* TODO: Break out measuredPartGroupList */}

        <Field name="inscriptionContent" />

        {/* <Panel name="textInscript" collapsible collapsed> */}
          <Field name="textualInscriptionGroupList">
            <Field name="textualInscriptionGroup">
              <Panel>
                <Field name="inscriptionContent" />
              </Panel>
            </Field>
          </Field>
        {/* </Panel> */}

        {/* <Panel name="nonTextInscript" collapsible collapsed> */}
          <Field name="nonTextualInscriptionGroupList">
            <Field name="nonTextualInscriptionGroup">
              <Panel>
                <Field name="inscriptionDescription" />

              </Panel>
            </Field>
          </Field>
        {/* </Panel> */}
      </Panel>

      {/* Item-specific acq info */}
      <Panel name="acq" collapsible collapsed>
        
        <Row> 
          <div>
            <Field name="acquisitionMethod"/>
            <Field name="acquisitionDateGroup"/>
          </div>
          <div>
            <Field name="provenance"/>
          </div>
        </Row>
        <Row> 
          <div>
          <Field name="acquisitionSource"/>
          <Field name="bampfaAcquisitionReason"/>
          </div>
          <div>
          <Field name="acquisitionNote"/>
          </div>
        </Row>

        <Row> 
          <div>
            <Field name="acquisitionProvisos"/>
          </div>
          <div>
            <Field name="appraisalInfo"/>
          </div>
        </Row>

        <Field name="currentValueGroupList">
          <Field name="currentValueGroup">
            <Field name="currentValue"/>
            <Field name="currentValueSource"/>
            <Field name="currentValueDateGroup"/>
          </Field>
        </Field>

        {/* <Field name="initialValueGroupList"> */}
          <Field name="initialValueGroup">
            <Field name="initialValue"/>
            <Field name="initialValueSource"/>
            <Field name="initialValueDateGroup"/>
          </Field> 
        {/* </Field> */}

      </Panel>

      {/* Classification */}
      <Panel name="classification" collapsible collapsed>
        <Row> 
          <Col>
            <Field name="bampfaCollection"/>
            <Field name="subjectTheme"/>
            <Field name="style"/>
          </Col>
          <Col>
            <Field name="partOf"/>
          </Col> 
          </Row>

      </Panel>

      {/* copyright */}
      <Panel name="copyright" collapsible collapsed>
        <Row> 
          <Col>
            <Field name="copyrightCredit"/>
            <Field name="copyrightNote"/>
          </Col>
          <Col>
            <Field name="photoCredit"/>
            <Field name="copyrightHolder"/>
            <Field name="permissionToReproduce"/>
          </Col> 
        </Row>
      </Panel>

      {/* Condition/Conservation info */}
      <Panel name="condition" collapsible collapsed>

        <Field name="conditionCheckGroupList">
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
          <Field name="comments"/>
        </div>
      </Panel>

      {/* collection text information */}
      <Panel name="collectinfo" collapsible collapsed>
        <Field name="collectionTextGroupList">
            <Field name="collectionTextGroup">
              <Panel>
                <Row>
                  <Field name="collectionTextType"/>
                  <Field name="collectionTextDoNotPublish"/>
                </Row>
                <Field name="collectionText"/>
                <Row>
                  <Field name="collectionTextAuthor"/>
                  <Field name="collectionTextDate"/>
                </Row>
                <Field name="collectionTextNote"/>
              </Panel>
            </Field>
          </Field>
      </Panel>

      <Panel name="hierarchy" collapsible collapsed>
        <Field name="relation-list-item" subpath="ns2:relations-common-list" />
      </Panel>

      {/* Cataloger Information */}
      <Panel name="cataloger" collapsible collapsed>
        <Field name="catalogerGroupList">
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
