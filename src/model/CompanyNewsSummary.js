/**
 * Intrinio API
 * Welcome to the Intrinio API! Through our Financial Data Marketplace, we offer a wide selection of financial data feed APIs sourced by our own proprietary processes as well as from many data vendors. For a complete API request / response reference please view the [Intrinio API documentation](https://intrinio.com/documentation/api_v2). If you need additional help in using the API, please visit the [Intrinio website](https://intrinio.com) and click on the chat icon in the lower right corner.
 *
 * OpenAPI spec version: 2.1.0
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
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.intrinioSDK) {
      root.intrinioSDK = {};
    }
    root.intrinioSDK.CompanyNewsSummary = factory(root.intrinioSDK.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The CompanyNewsSummary model module.
   * @module model/CompanyNewsSummary
   * @version 1.1.0
   */

  /**
   * Constructs a new <code>CompanyNewsSummary</code>.
   * A news article about a company
   * @alias module:model/CompanyNewsSummary
   * @class
   */
  var exports = function() {
    var _this = this;






  };

  /**
   * Constructs a <code>CompanyNewsSummary</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CompanyNewsSummary} obj Optional instance to populate.
   * @return {module:model/CompanyNewsSummary} The populated <code>CompanyNewsSummary</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('title')) {
        obj['title'] = ApiClient.convertToType(data['title'], 'String');
      }
      if (data.hasOwnProperty('publication_date')) {
        obj['publication_date'] = ApiClient.convertToType(data['publication_date'], 'String');
      }
      if (data.hasOwnProperty('url')) {
        obj['url'] = ApiClient.convertToType(data['url'], 'String');
      }
      if (data.hasOwnProperty('summary')) {
        obj['summary'] = ApiClient.convertToType(data['summary'], 'String');
      }
    }
    return obj;
  }

  /**
   * The Intrinio ID for the news article
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * The title of the news article
   * @member {String} title
   */
  exports.prototype['title'] = undefined;
  /**
   * The publication date of the news article
   * @member {String} publication_date
   */
  exports.prototype['publication_date'] = undefined;
  /**
   * The url of the news article
   * @member {String} url
   */
  exports.prototype['url'] = undefined;
  /**
   * A summary of the news article
   * @member {String} summary
   */
  exports.prototype['summary'] = undefined;



  return exports;
}));


