/**
 * Intrinio API
 * Welcome to the Intrinio API! Through our Financial Data Marketplace, we offer a wide selection of financial data feed APIs sourced by our own proprietary processes as well as from many data vendors. For a complete API request / response reference please view the [Intrinio API documentation](https://intrinio.com/documentation/api_v2). If you need additional help in using the API, please visit the [Intrinio website](https://intrinio.com) and click on the chat icon in the lower right corner.
 *
 * OpenAPI spec version: 2.2.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.3.0-SNAPSHOT
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
    instance = new intrinioSDK.SecurityApi();
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

  describe('SecurityApi', function() {
    describe('getAllSecurities', function() {
      it('should call getAllSecurities successfully', function(done) {
        //uncomment below and update the code to test getAllSecurities
        //instance.getAllSecurities(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getSecurityById', function() {
      it('should call getSecurityById successfully', function(done) {
        //uncomment below and update the code to test getSecurityById
        //instance.getSecurityById(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getSecurityDataPointNumber', function() {
      it('should call getSecurityDataPointNumber successfully', function(done) {
        //uncomment below and update the code to test getSecurityDataPointNumber
        //instance.getSecurityDataPointNumber(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getSecurityDataPointText', function() {
      it('should call getSecurityDataPointText successfully', function(done) {
        //uncomment below and update the code to test getSecurityDataPointText
        //instance.getSecurityDataPointText(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getSecurityHistoricalData', function() {
      it('should call getSecurityHistoricalData successfully', function(done) {
        //uncomment below and update the code to test getSecurityHistoricalData
        //instance.getSecurityHistoricalData(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getSecurityIntradayPrices', function() {
      it('should call getSecurityIntradayPrices successfully', function(done) {
        //uncomment below and update the code to test getSecurityIntradayPrices
        //instance.getSecurityIntradayPrices(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getSecurityLatestDividendRecord', function() {
      it('should call getSecurityLatestDividendRecord successfully', function(done) {
        //uncomment below and update the code to test getSecurityLatestDividendRecord
        //instance.getSecurityLatestDividendRecord(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getSecurityLatestEarningsRecord', function() {
      it('should call getSecurityLatestEarningsRecord successfully', function(done) {
        //uncomment below and update the code to test getSecurityLatestEarningsRecord
        //instance.getSecurityLatestEarningsRecord(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getSecurityRealtimePrice', function() {
      it('should call getSecurityRealtimePrice successfully', function(done) {
        //uncomment below and update the code to test getSecurityRealtimePrice
        //instance.getSecurityRealtimePrice(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getSecurityStockPriceAdjustments', function() {
      it('should call getSecurityStockPriceAdjustments successfully', function(done) {
        //uncomment below and update the code to test getSecurityStockPriceAdjustments
        //instance.getSecurityStockPriceAdjustments(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getSecurityStockPrices', function() {
      it('should call getSecurityStockPrices successfully', function(done) {
        //uncomment below and update the code to test getSecurityStockPrices
        //instance.getSecurityStockPrices(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('screenSecurities', function() {
      it('should call screenSecurities successfully', function(done) {
        //uncomment below and update the code to test screenSecurities
        //instance.screenSecurities(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('searchSecurities', function() {
      it('should call searchSecurities successfully', function(done) {
        //uncomment below and update the code to test searchSecurities
        //instance.searchSecurities(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
