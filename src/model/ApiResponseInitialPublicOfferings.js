/**
 * Intrinio API
 * Welcome to the Intrinio API! Through our Financial Data Marketplace, we offer a wide selection of financial data feed APIs sourced by our own proprietary processes as well as from many data vendors. For a complete API request / response reference please view the [Intrinio API documentation](https://intrinio.com/documentation/api_v2). If you need additional help in using the API, please visit the [Intrinio website](https://intrinio.com) and click on the chat icon in the lower right corner.
 *
 * OpenAPI spec version: 2.14.0
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
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/CompanyInitialPublicOffering'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./CompanyInitialPublicOffering'));
  } else {
    // Browser globals (root is window)
    if (!root.intrinioSDK) {
      root.intrinioSDK = {};
    }
    root.intrinioSDK.ApiResponseInitialPublicOfferings = factory(root.intrinioSDK.ApiClient, root.intrinioSDK.CompanyInitialPublicOffering);
  }
}(this, function(ApiClient, CompanyInitialPublicOffering) {
  'use strict';




  /**
   * The ApiResponseInitialPublicOfferings model module.
   * @module model/ApiResponseInitialPublicOfferings
   * @version 5.6.1
   */

  /**
   * Constructs a new <code>ApiResponseInitialPublicOfferings</code>.
   * @alias module:model/ApiResponseInitialPublicOfferings
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>ApiResponseInitialPublicOfferings</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ApiResponseInitialPublicOfferings} obj Optional instance to populate.
   * @return {module:model/ApiResponseInitialPublicOfferings} The populated <code>ApiResponseInitialPublicOfferings</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('initial_public_offerings')) {
        obj['initial_public_offerings'] = ApiClient.convertToType(data['initial_public_offerings'], [CompanyInitialPublicOffering]);
      }
      if (data.hasOwnProperty('next_page')) {
        obj['next_page'] = ApiClient.convertToType(data['next_page'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {Array.<module:model/CompanyInitialPublicOffering>} initial_public_offerings
   */
  exports.prototype['initial_public_offerings'] = undefined;
  /**
   * The token required to request the next page of the data. If null, no further results are available.
   * @member {String} next_page
   */
  exports.prototype['next_page'] = undefined;



  return exports;
}));


