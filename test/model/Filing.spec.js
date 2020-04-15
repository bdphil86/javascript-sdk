/**
 * Intrinio API
 * Welcome to the Intrinio API! Through our Financial Data Marketplace, we offer a wide selection of financial data feed APIs sourced by our own proprietary processes as well as from many data vendors. For a complete API request / response reference please view the [Intrinio API documentation](https://intrinio.com/documentation/api_v2). If you need additional help in using the API, please visit the [Intrinio website](https://intrinio.com) and click on the chat icon in the lower right corner.
 *
 * OpenAPI spec version: 2.11.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: unset
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.intrinioSDK);
  }
}(this, function(expect, intrinioSDK) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new intrinioSDK.Filing();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('Filing', function() {
    it('should create an instance of Filing', function() {
      // uncomment below and update the code to test Filing
      //var instane = new intrinioSDK.Filing();
      //expect(instance).to.be.a(intrinioSDK.Filing);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new intrinioSDK.Filing();
      //expect(instance).to.be();
    });

    it('should have the property filingDate (base name: "filing_date")', function() {
      // uncomment below and update the code to test the property filingDate
      //var instane = new intrinioSDK.Filing();
      //expect(instance).to.be();
    });

    it('should have the property acceptedDate (base name: "accepted_date")', function() {
      // uncomment below and update the code to test the property acceptedDate
      //var instane = new intrinioSDK.Filing();
      //expect(instance).to.be();
    });

    it('should have the property periodEndDate (base name: "period_end_date")', function() {
      // uncomment below and update the code to test the property periodEndDate
      //var instane = new intrinioSDK.Filing();
      //expect(instance).to.be();
    });

    it('should have the property reportType (base name: "report_type")', function() {
      // uncomment below and update the code to test the property reportType
      //var instane = new intrinioSDK.Filing();
      //expect(instance).to.be();
    });

    it('should have the property secUniqueId (base name: "sec_unique_id")', function() {
      // uncomment below and update the code to test the property secUniqueId
      //var instane = new intrinioSDK.Filing();
      //expect(instance).to.be();
    });

    it('should have the property filingUrl (base name: "filing_url")', function() {
      // uncomment below and update the code to test the property filingUrl
      //var instane = new intrinioSDK.Filing();
      //expect(instance).to.be();
    });

    it('should have the property reportUrl (base name: "report_url")', function() {
      // uncomment below and update the code to test the property reportUrl
      //var instane = new intrinioSDK.Filing();
      //expect(instance).to.be();
    });

    it('should have the property instanceUrl (base name: "instance_url")', function() {
      // uncomment below and update the code to test the property instanceUrl
      //var instane = new intrinioSDK.Filing();
      //expect(instance).to.be();
    });

    it('should have the property industryCategory (base name: "industry_category")', function() {
      // uncomment below and update the code to test the property industryCategory
      //var instane = new intrinioSDK.Filing();
      //expect(instance).to.be();
    });

    it('should have the property industryGroup (base name: "industry_group")', function() {
      // uncomment below and update the code to test the property industryGroup
      //var instane = new intrinioSDK.Filing();
      //expect(instance).to.be();
    });

    it('should have the property wordCount (base name: "word_count")', function() {
      // uncomment below and update the code to test the property wordCount
      //var instane = new intrinioSDK.Filing();
      //expect(instance).to.be();
    });

    it('should have the property company (base name: "company")', function() {
      // uncomment below and update the code to test the property company
      //var instane = new intrinioSDK.Filing();
      //expect(instance).to.be();
    });

  });

}));
