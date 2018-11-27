/**
 * Intrinio API
 * Welcome to the Intrinio API! Through our Marketplace, we offer a wide selection of financial data feeds sourced by our own proprietary processes as well as from many data vendors. The primary application of the Intrinio API is for use in third-party applications and integrations or for end-users utilizing the Excel add-in and Google Sheets add-on. The Intrinio API uses HTTPS verbs and a RESTful endpoint structure, which makes it easy to request data from Intrinio. Responses are delivered in JSON format. If you need additional help in using the API, go to our home page (https://intrinio.com) and click on the chat icon in the lower right corner.
 *
 * OpenAPI spec version: 2.0.2
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
    define(['ApiClient', 'model/ReportedTag'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ReportedTag'));
  } else {
    // Browser globals (root is window)
    if (!root.intrinio) {
      root.intrinio = {};
    }
    root.intrinio.ReportedFinancial = factory(root.intrinio.ApiClient, root.intrinio.ReportedTag);
  }
}(this, function(ApiClient, ReportedTag) {
  'use strict';




  /**
   * The ReportedFinancial model module.
   * @module model/ReportedFinancial
   * @version 0.9.1
   */

  /**
   * Constructs a new <code>ReportedFinancial</code>.
   * A financial statement as-reported, directly from the financial statements of the XBRL filings from the company.
   * @alias module:model/ReportedFinancial
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>ReportedFinancial</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ReportedFinancial} obj Optional instance to populate.
   * @return {module:model/ReportedFinancial} The populated <code>ReportedFinancial</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('xbrl_tag')) {
        obj['xbrl_tag'] = ReportedTag.constructFromObject(data['xbrl_tag']);
      }
      if (data.hasOwnProperty('value')) {
        obj['value'] = ApiClient.convertToType(data['value'], 'Number');
      }
    }
    return obj;
  }

  /**
   * @member {module:model/ReportedTag} xbrl_tag
   */
  exports.prototype['xbrl_tag'] = undefined;
  /**
   * The value reported for the XBRL Tag within the scope of the Fundamental
   * @member {Number} value
   */
  exports.prototype['value'] = undefined;



  return exports;
}));


