/**
 * Intrinio API
 * Welcome to the Intrinio API! Through our Financial Data Marketplace, we offer a wide selection of financial data feed APIs sourced by our own proprietary processes as well as from many data vendors. For a complete API request / response reference please view the [Intrinio API documentation](https://intrinio.com/documentation/api_v2). If you need additional help in using the API, please visit the [Intrinio website](https://intrinio.com) and click on the chat icon in the lower right corner.
 *
 * OpenAPI spec version: 2.10.0
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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.intrinioSDK) {
      root.intrinioSDK = {};
    }
    root.intrinioSDK.EconomicIndexSummary = factory(root.intrinioSDK.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The EconomicIndexSummary model module.
   * @module model/EconomicIndexSummary
   * @version 5.3.0
   */

  /**
   * Constructs a new <code>EconomicIndexSummary</code>.
   * An economic index provided by the St. Lous Fed FRED API, such as GDP, Unemployment, Fed Funds Rate, and more.
   * @alias module:model/EconomicIndexSummary
   * @class
   */
  var exports = function() {
    var _this = this;












  };

  /**
   * Constructs a <code>EconomicIndexSummary</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/EconomicIndexSummary} obj Optional instance to populate.
   * @return {module:model/EconomicIndexSummary} The populated <code>EconomicIndexSummary</code> instance.
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
      if (data.hasOwnProperty('update_frequency')) {
        obj['update_frequency'] = ApiClient.convertToType(data['update_frequency'], 'String');
      }
      if (data.hasOwnProperty('last_updated')) {
        obj['last_updated'] = ApiClient.convertToType(data['last_updated'], 'Date');
      }
      if (data.hasOwnProperty('observation_start')) {
        obj['observation_start'] = ApiClient.convertToType(data['observation_start'], 'Date');
      }
      if (data.hasOwnProperty('observation_end')) {
        obj['observation_end'] = ApiClient.convertToType(data['observation_end'], 'Date');
      }
      if (data.hasOwnProperty('seasonal_adjustment')) {
        obj['seasonal_adjustment'] = ApiClient.convertToType(data['seasonal_adjustment'], 'String');
      }
      if (data.hasOwnProperty('units')) {
        obj['units'] = ApiClient.convertToType(data['units'], 'String');
      }
    }
    return obj;
  }

  /**
   * The Intrinio ID for the Index
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
  /**
   * How often the Index is updated
   * @member {String} update_frequency
   */
  exports.prototype['update_frequency'] = undefined;
  /**
   * When the Index was updated last
   * @member {Date} last_updated
   */
  exports.prototype['last_updated'] = undefined;
  /**
   * The earliest date for which data is available
   * @member {Date} observation_start
   */
  exports.prototype['observation_start'] = undefined;
  /**
   * The latest date for which data is available
   * @member {Date} observation_end
   */
  exports.prototype['observation_end'] = undefined;
  /**
   * Whether the data is adjusted to account for seasonality
   * @member {String} seasonal_adjustment
   */
  exports.prototype['seasonal_adjustment'] = undefined;
  /**
   * The units of the data
   * @member {String} units
   */
  exports.prototype['units'] = undefined;



  return exports;
}));


