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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.intrinioSDK) {
      root.intrinioSDK = {};
    }
    root.intrinioSDK.DataPointApi = factory(root.intrinioSDK.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * DataPoint service.
   * @module api/DataPointApi
   * @version 5.6.1
   */

  /**
   * Constructs a new DataPointApi. 
   * @alias module:api/DataPointApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Data Point (Number)
     * Returns a numeric value for the given &#x60;tag&#x60; and the entity with the given &#x60;identifier&#x60;
     * @param {String} identifier An identifier for an entity such as a Company, Security, Index, etc (Ticker, FIGI, ISIN, CUSIP, CIK, LEI, Intrinio ID)
     * @param {String} tag An Intrinio data tag ID or code (&lt;a href&#x3D;&#39;https://data.intrinio.com/data-tags&#39;&gt;reference&lt;/a&gt;)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link 'Number'} and HTTP response
     */
    this.getDataPointNumberWithHttpInfo = function(identifier, tag) {
      var postBody = null;

      // verify the required parameter 'identifier' is set
      if (identifier === undefined || identifier === null) {
        throw new Error("Missing the required parameter 'identifier' when calling getDataPointNumber");
      }

      // verify the required parameter 'tag' is set
      if (tag === undefined || tag === null) {
        throw new Error("Missing the required parameter 'tag' when calling getDataPointNumber");
      }


      var pathParams = {
        'identifier': identifier,
        'tag': tag
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['ApiKeyAuth'];
      var contentTypes = [];
      var accepts = ['text/plain; charset=utf-8'];
      var returnType = 'Number';

      return this.apiClient.callApi(
        '/data_point/{identifier}/{tag}/number', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Data Point (Number)
     * Returns a numeric value for the given &#x60;tag&#x60; and the entity with the given &#x60;identifier&#x60;
     * @param {String} identifier An identifier for an entity such as a Company, Security, Index, etc (Ticker, FIGI, ISIN, CUSIP, CIK, LEI, Intrinio ID)
     * @param {String} tag An Intrinio data tag ID or code (&lt;a href&#x3D;&#39;https://data.intrinio.com/data-tags&#39;&gt;reference&lt;/a&gt;)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link 'Number'}
     */
    this.getDataPointNumber = function(identifier, tag) {
      return this.getDataPointNumberWithHttpInfo(identifier, tag)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Data Point (Text)
     * Returns a text value for the given &#x60;tag&#x60; for the Security with the given &#x60;identifier&#x60;
     * @param {String} identifier An identifier for an entity such as a Company, Security, Index, etc (Ticker, FIGI, ISIN, CUSIP, CIK, LEI, Intrinio ID)
     * @param {String} tag An Intrinio data tag ID or code (&lt;a href&#x3D;&#39;https://data.intrinio.com/data-tags&#39;&gt;reference&lt;/a&gt;)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link 'String'} and HTTP response
     */
    this.getDataPointTextWithHttpInfo = function(identifier, tag) {
      var postBody = null;

      // verify the required parameter 'identifier' is set
      if (identifier === undefined || identifier === null) {
        throw new Error("Missing the required parameter 'identifier' when calling getDataPointText");
      }

      // verify the required parameter 'tag' is set
      if (tag === undefined || tag === null) {
        throw new Error("Missing the required parameter 'tag' when calling getDataPointText");
      }


      var pathParams = {
        'identifier': identifier,
        'tag': tag
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['ApiKeyAuth'];
      var contentTypes = [];
      var accepts = ['text/plain; charset=utf-8'];
      var returnType = 'String';

      return this.apiClient.callApi(
        '/data_point/{identifier}/{tag}/text', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Data Point (Text)
     * Returns a text value for the given &#x60;tag&#x60; for the Security with the given &#x60;identifier&#x60;
     * @param {String} identifier An identifier for an entity such as a Company, Security, Index, etc (Ticker, FIGI, ISIN, CUSIP, CIK, LEI, Intrinio ID)
     * @param {String} tag An Intrinio data tag ID or code (&lt;a href&#x3D;&#39;https://data.intrinio.com/data-tags&#39;&gt;reference&lt;/a&gt;)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link 'String'}
     */
    this.getDataPointText = function(identifier, tag) {
      return this.getDataPointTextWithHttpInfo(identifier, tag)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
  };

  return exports;
}));
