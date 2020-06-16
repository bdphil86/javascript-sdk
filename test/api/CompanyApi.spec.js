/**
 * Intrinio API
 * Welcome to the Intrinio API! Through our Financial Data Marketplace, we offer a wide selection of financial data feed APIs sourced by our own proprietary processes as well as from many data vendors. For a complete API request / response reference please view the [Intrinio API documentation](https://intrinio.com/documentation/api_v2). If you need additional help in using the API, please visit the [Intrinio website](https://intrinio.com) and click on the chat icon in the lower right corner.
 *
 * OpenAPI spec version: 2.12.1
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
    instance = new intrinioSDK.CompanyApi();
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

  describe('CompanyApi', function() {
    describe('getAllCompanies', function() {
      it('should call getAllCompanies successfully', function(done) {
        //uncomment below and update the code to test getAllCompanies
        //instance.getAllCompanies(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getAllCompanyNews', function() {
      it('should call getAllCompanyNews successfully', function(done) {
        //uncomment below and update the code to test getAllCompanyNews
        //instance.getAllCompanyNews(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getCompany', function() {
      it('should call getCompany successfully', function(done) {
        //uncomment below and update the code to test getCompany
        //instance.getCompany(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getCompanyDataPointNumber', function() {
      it('should call getCompanyDataPointNumber successfully', function(done) {
        //uncomment below and update the code to test getCompanyDataPointNumber
        //instance.getCompanyDataPointNumber(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getCompanyDataPointText', function() {
      it('should call getCompanyDataPointText successfully', function(done) {
        //uncomment below and update the code to test getCompanyDataPointText
        //instance.getCompanyDataPointText(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getCompanyFilings', function() {
      it('should call getCompanyFilings successfully', function(done) {
        //uncomment below and update the code to test getCompanyFilings
        //instance.getCompanyFilings(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getCompanyFundamentals', function() {
      it('should call getCompanyFundamentals successfully', function(done) {
        //uncomment below and update the code to test getCompanyFundamentals
        //instance.getCompanyFundamentals(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getCompanyHistoricalData', function() {
      it('should call getCompanyHistoricalData successfully', function(done) {
        //uncomment below and update the code to test getCompanyHistoricalData
        //instance.getCompanyHistoricalData(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getCompanyIpos', function() {
      it('should call getCompanyIpos successfully', function(done) {
        //uncomment below and update the code to test getCompanyIpos
        //instance.getCompanyIpos(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getCompanyNews', function() {
      it('should call getCompanyNews successfully', function(done) {
        //uncomment below and update the code to test getCompanyNews
        //instance.getCompanyNews(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getCompanySecurities', function() {
      it('should call getCompanySecurities successfully', function(done) {
        //uncomment below and update the code to test getCompanySecurities
        //instance.getCompanySecurities(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('lookupCompanyFundamental', function() {
      it('should call lookupCompanyFundamental successfully', function(done) {
        //uncomment below and update the code to test lookupCompanyFundamental
        //instance.lookupCompanyFundamental(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('searchCompanies', function() {
      it('should call searchCompanies successfully', function(done) {
        //uncomment below and update the code to test searchCompanies
        //instance.searchCompanies(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
