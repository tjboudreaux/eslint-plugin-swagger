/**
 * @fileoverview test that the json preprocessor works
 * @author Travis Boudreaux
 */

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------
const { expect } = require("chai");
const processor = require('../../../lib/processors/swagger-json-processor');


describe("JSON processor should process valid JSON", () => {
    const json = {};
    const result = processor['.json'].preprocess(json);
    expect(result[0]).to.equal('{}');
});
