/**
 * Intrinio API
 * Welcome to the Intrinio API! Through our Financial Data Marketplace, we offer a wide selection of financial data feed APIs sourced by our own proprietary processes as well as from many data vendors. For a complete API request / response reference please view the [Intrinio API documentation](https://intrinio.com/documentation/api_v2). If you need additional help in using the API, please visit the [Intrinio website](https://intrinio.com) and click on the chat icon in the lower right corner.
 *
 * OpenAPI spec version: 2.5.0
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
    define(['ApiClient', 'model/Option', 'model/OptionPrice'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Option'), require('./OptionPrice'));
  } else {
    // Browser globals (root is window)
    if (!root.intrinioSDK) {
      root.intrinioSDK = {};
    }
    root.intrinioSDK.OptionChain = factory(root.intrinioSDK.ApiClient, root.intrinioSDK.Option, root.intrinioSDK.OptionPrice);
  }
}(this, function(ApiClient, Option, OptionPrice) {
  'use strict';




  /**
   * The OptionChain model module.
   * @module model/OptionChain
   * @version 2.2.0
   */

  /**
   * Constructs a new <code>OptionChain</code>.
   * An option chain contains an options contract and corresponding price data for that contract on a given date.
   * @alias module:model/OptionChain
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>OptionChain</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/OptionChain} obj Optional instance to populate.
   * @return {module:model/OptionChain} The populated <code>OptionChain</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('option')) {
        obj['option'] = Option.constructFromObject(data['option']);
      }
      if (data.hasOwnProperty('price')) {
        obj['price'] = OptionPrice.constructFromObject(data['price']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/Option} option
   */
  exports.prototype['option'] = undefined;
  /**
   * @member {module:model/OptionPrice} price
   */
  exports.prototype['price'] = undefined;



  return exports;
}));


