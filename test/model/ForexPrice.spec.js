/**
 * Intrinio API
 * Welcome to the Intrinio API! Through our Financial Data Marketplace, we offer a wide selection of financial data feed APIs sourced by our own proprietary processes as well as from many data vendors. For a complete API request / response reference please view the [Intrinio API documentation](https://intrinio.com/documentation/api_v2). If you need additional help in using the API, please visit the [Intrinio website](https://intrinio.com) and click on the chat icon in the lower right corner.
 *
 * OpenAPI spec version: 2.8.8
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
    instance = new intrinioSDK.ForexPrice();
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

  describe('ForexPrice', function() {
    it('should create an instance of ForexPrice', function() {
      // uncomment below and update the code to test ForexPrice
      //var instane = new intrinioSDK.ForexPrice();
      //expect(instance).to.be.a(intrinioSDK.ForexPrice);
    });

    it('should have the property occurredAt (base name: "occurred_at")', function() {
      // uncomment below and update the code to test the property occurredAt
      //var instane = new intrinioSDK.ForexPrice();
      //expect(instance).to.be();
    });

    it('should have the property openBid (base name: "open_bid")', function() {
      // uncomment below and update the code to test the property openBid
      //var instane = new intrinioSDK.ForexPrice();
      //expect(instance).to.be();
    });

    it('should have the property highBid (base name: "high_bid")', function() {
      // uncomment below and update the code to test the property highBid
      //var instane = new intrinioSDK.ForexPrice();
      //expect(instance).to.be();
    });

    it('should have the property lowBid (base name: "low_bid")', function() {
      // uncomment below and update the code to test the property lowBid
      //var instane = new intrinioSDK.ForexPrice();
      //expect(instance).to.be();
    });

    it('should have the property closeBid (base name: "close_bid")', function() {
      // uncomment below and update the code to test the property closeBid
      //var instane = new intrinioSDK.ForexPrice();
      //expect(instance).to.be();
    });

    it('should have the property openAsk (base name: "open_ask")', function() {
      // uncomment below and update the code to test the property openAsk
      //var instane = new intrinioSDK.ForexPrice();
      //expect(instance).to.be();
    });

    it('should have the property highAsk (base name: "high_ask")', function() {
      // uncomment below and update the code to test the property highAsk
      //var instane = new intrinioSDK.ForexPrice();
      //expect(instance).to.be();
    });

    it('should have the property lowAsk (base name: "low_ask")', function() {
      // uncomment below and update the code to test the property lowAsk
      //var instane = new intrinioSDK.ForexPrice();
      //expect(instance).to.be();
    });

    it('should have the property closeAsk (base name: "close_ask")', function() {
      // uncomment below and update the code to test the property closeAsk
      //var instane = new intrinioSDK.ForexPrice();
      //expect(instance).to.be();
    });

    it('should have the property totalTicks (base name: "total_ticks")', function() {
      // uncomment below and update the code to test the property totalTicks
      //var instane = new intrinioSDK.ForexPrice();
      //expect(instance).to.be();
    });

  });

}));
