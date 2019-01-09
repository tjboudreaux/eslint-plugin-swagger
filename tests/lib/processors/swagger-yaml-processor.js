/**
 * @fileoverview test that the json preprocessor works
 * @author Travis Boudreaux
 */

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------
const { expect } = require("chai");
const path = require("path");
const processor = require('../../../lib/processors/swagger-yaml-processor');


describe("YAML processor should process valid YAML", () => {
    const yamlSize = 13706;
    const ymlResult = processor['.yml'].preprocess(null, path.join(__dirname, '../fixtures/pet-store.swagger.yml'));
    const yamlResult = processor['.yaml'].preprocess(null, path.join(__dirname, '../fixtures/pet-store.swagger.yaml'));
    
    expect(ymlResult[0].length).to.equal(yamlSize);
    expect(yamlResult[0].length).to.equal(yamlSize);
});
