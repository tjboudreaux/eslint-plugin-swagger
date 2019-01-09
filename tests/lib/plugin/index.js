/**
 * @fileoverview test that the plugin harness works
 * @author Travis Boudreaux
 */

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------
const { expect } = require("chai");
const index = require('../../../lib/index');
const { keys } = require("lodash");

describe("plugin harness should load all rules", () => {
    expect(keys(index.rules).length).to.equal(4);
});

describe("plugin harness should load all processors", () => {
    expect(keys(index.processors).length).to.equal(2);
});

describe("plugin harness should explain recommended rules", () => {
    expect(index.configs).to.equal(index.configs);
});
