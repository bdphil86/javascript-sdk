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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.intrinio) {
      root.intrinio = {};
    }
    root.intrinio.SICIndex = factory(root.intrinio.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The SICIndex model module.
   * @module model/SICIndex
   * @version 0.9.1
   */

  /**
   * Constructs a new <code>SICIndex</code>.
   * An Index representing a Standard Industrial Classification (SIC) code.
   * @alias module:model/SICIndex
   * @class
   */
  var exports = function() {
    var _this = this;






  };

  /**
   * Constructs a <code>SICIndex</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SICIndex} obj Optional instance to populate.
   * @return {module:model/SICIndex} The populated <code>SICIndex</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('symbol')) {
        obj['symbol'] = ApiClient.convertToType(data['symbol'], 'String');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('continent')) {
        obj['continent'] = ApiClient.convertToType(data['continent'], 'String');
      }
      if (data.hasOwnProperty('country')) {
        obj['country'] = ApiClient.convertToType(data['country'], 'String');
      }
    }
    return obj;
  }

  /**
   * Intrinio ID for the Index
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * The symbol used to identify the Index
   * @member {String} symbol
   */
  exports.prototype['symbol'] = undefined;
  /**
   * The name of the Index
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * The continent of the country of focus for the Index
   * @member {String} continent
   */
  exports.prototype['continent'] = undefined;
  /**
   * The country of focus for the Index
   * @member {String} country
   */
  exports.prototype['country'] = undefined;



  return exports;
}));


