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
    define(['ApiClient', 'model/ApiResponseFilingFundamentals', 'model/ApiResponseFilingNotes', 'model/ApiResponseFilingNotesSearch', 'model/ApiResponseFilings', 'model/Filing', 'model/FilingNote'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ApiResponseFilingFundamentals'), require('../model/ApiResponseFilingNotes'), require('../model/ApiResponseFilingNotesSearch'), require('../model/ApiResponseFilings'), require('../model/Filing'), require('../model/FilingNote'));
  } else {
    // Browser globals (root is window)
    if (!root.intrinioSDK) {
      root.intrinioSDK = {};
    }
    root.intrinioSDK.FilingApi = factory(root.intrinioSDK.ApiClient, root.intrinioSDK.ApiResponseFilingFundamentals, root.intrinioSDK.ApiResponseFilingNotes, root.intrinioSDK.ApiResponseFilingNotesSearch, root.intrinioSDK.ApiResponseFilings, root.intrinioSDK.Filing, root.intrinioSDK.FilingNote);
  }
}(this, function(ApiClient, ApiResponseFilingFundamentals, ApiResponseFilingNotes, ApiResponseFilingNotesSearch, ApiResponseFilings, Filing, FilingNote) {
  'use strict';

  /**
   * Filing service.
   * @module api/FilingApi
   * @version 5.6.1
   */

  /**
   * Constructs a new FilingApi. 
   * @alias module:api/FilingApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * All Filings
     * Returns all Filings. Returns Filings matching parameters when supplied.
     * @param {String} company Filings for the given &#x60;company&#x60; identifier (ticker, CIK, LEI, Intrinio ID)
     * @param {Object} opts Optional parameters
     * @param {String} opts.reportType Filter by report type. Separate values with commas to return multiple The filing &lt;a href&#x3D;\&quot;https://docs.intrinio.com/documentation/sec_filing_report_types\&quot; target&#x3D;\&quot;_blank\&quot;&gt;report types&lt;/a&gt;.
     * @param {Date} opts.startDate Filed on or after the given date
     * @param {Date} opts.endDate Filed before or after the given date
     * @param {String} opts.industryCategory Return companies in the given industry category
     * @param {String} opts.industryGroup Return companies in the given industry group
     * @param {Number} opts.pageSize The number of results to return (default to 100)
     * @param {String} opts.nextPage Gets the next page of data from a previous API call
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ApiResponseFilings} and HTTP response
     */
    this.getAllFilingsWithHttpInfo = function(company, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'company' is set
      if (company === undefined || company === null) {
        throw new Error("Missing the required parameter 'company' when calling getAllFilings");
      }


      var pathParams = {
      };
      var queryParams = {
        'company': company,
        'report_type': opts['reportType'],
        'start_date': opts['startDate'],
        'end_date': opts['endDate'],
        'industry_category': opts['industryCategory'],
        'industry_group': opts['industryGroup'],
        'page_size': opts['pageSize'],
        'next_page': opts['nextPage'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['ApiKeyAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = ApiResponseFilings;

      return this.apiClient.callApi(
        '/filings', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * All Filings
     * Returns all Filings. Returns Filings matching parameters when supplied.
     * @param {String} company Filings for the given &#x60;company&#x60; identifier (ticker, CIK, LEI, Intrinio ID)
     * @param {Object} opts Optional parameters
     * @param {String} opts.reportType Filter by report type. Separate values with commas to return multiple The filing &lt;a href&#x3D;\&quot;https://docs.intrinio.com/documentation/sec_filing_report_types\&quot; target&#x3D;\&quot;_blank\&quot;&gt;report types&lt;/a&gt;.
     * @param {Date} opts.startDate Filed on or after the given date
     * @param {Date} opts.endDate Filed before or after the given date
     * @param {String} opts.industryCategory Return companies in the given industry category
     * @param {String} opts.industryGroup Return companies in the given industry group
     * @param {Number} opts.pageSize The number of results to return (default to 100)
     * @param {String} opts.nextPage Gets the next page of data from a previous API call
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ApiResponseFilings}
     */
    this.getAllFilings = function(company, opts) {
      return this.getAllFilingsWithHttpInfo(company, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * All Filing Notes
     * Return all Notes from all Filings, most-recent first. Returns notes matching parameters when supplied.
     * @param {Object} opts Optional parameters
     * @param {String} opts.company A Company identifier (Ticker, CIK, LEI, Intrinio ID)
     * @param {module:model/String} opts.reportType Notes contained in filings that match the given &lt;a href&#x3D;\&quot;https://docs.intrinio.com/documentation/sec_filing_report_types\&quot; target&#x3D;\&quot;_blank\&quot;&gt;report type&lt;/a&gt;
     * @param {Date} opts.filingStartDate Limit search to filings on or after this date
     * @param {Date} opts.filingEndDate Limit search to filings on or before this date
     * @param {Date} opts.periodEndedStartDate Limit search to filings with a period end date on or after this date
     * @param {Date} opts.periodEndedEndDate Limit search to filings with a period end date on or before this date
     * @param {Number} opts.pageSize The number of results to return (default to 100)
     * @param {String} opts.nextPage Gets the next page of data from a previous API call
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ApiResponseFilingNotes} and HTTP response
     */
    this.getAllNotesWithHttpInfo = function(opts) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'company': opts['company'],
        'report_type': opts['reportType'],
        'filing_start_date': opts['filingStartDate'],
        'filing_end_date': opts['filingEndDate'],
        'period_ended_start_date': opts['periodEndedStartDate'],
        'period_ended_end_date': opts['periodEndedEndDate'],
        'page_size': opts['pageSize'],
        'next_page': opts['nextPage'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['ApiKeyAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = ApiResponseFilingNotes;

      return this.apiClient.callApi(
        '/filings/notes', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * All Filing Notes
     * Return all Notes from all Filings, most-recent first. Returns notes matching parameters when supplied.
     * @param {Object} opts Optional parameters
     * @param {String} opts.company A Company identifier (Ticker, CIK, LEI, Intrinio ID)
     * @param {module:model/String} opts.reportType Notes contained in filings that match the given &lt;a href&#x3D;\&quot;https://docs.intrinio.com/documentation/sec_filing_report_types\&quot; target&#x3D;\&quot;_blank\&quot;&gt;report type&lt;/a&gt;
     * @param {Date} opts.filingStartDate Limit search to filings on or after this date
     * @param {Date} opts.filingEndDate Limit search to filings on or before this date
     * @param {Date} opts.periodEndedStartDate Limit search to filings with a period end date on or after this date
     * @param {Date} opts.periodEndedEndDate Limit search to filings with a period end date on or before this date
     * @param {Number} opts.pageSize The number of results to return (default to 100)
     * @param {String} opts.nextPage Gets the next page of data from a previous API call
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ApiResponseFilingNotes}
     */
    this.getAllNotes = function(opts) {
      return this.getAllNotesWithHttpInfo(opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Lookup Filing
     * Returns the Filing with the given &#x60;identifier&#x60;
     * @param {String} id The Intrinio ID of the Filing
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Filing} and HTTP response
     */
    this.getFilingByIdWithHttpInfo = function(id) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getFilingById");
      }


      var pathParams = {
        'id': id
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
      var accepts = ['application/json'];
      var returnType = Filing;

      return this.apiClient.callApi(
        '/filings/{id}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Lookup Filing
     * Returns the Filing with the given &#x60;identifier&#x60;
     * @param {String} id The Intrinio ID of the Filing
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Filing}
     */
    this.getFilingById = function(id) {
      return this.getFilingByIdWithHttpInfo(id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * All Fundamentals by Filing
     * Returns all Fundamentals for the SEC Filing with the given &#x60;identifier&#x60;. Returns Fundamentals matching parameters when supplied.
     * @param {String} identifier A Filing identifier
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.statementCode Filters fundamentals by statement code
     * @param {module:model/String} opts.type Filters fundamentals by type
     * @param {Number} opts.fiscalYear Filters fundamentals by fiscal year
     * @param {module:model/String} opts.fiscalPeriod Filters fundamentals by fiscal period
     * @param {Date} opts.startDate Returns fundamentals on or after the given date
     * @param {Date} opts.endDate Returns fundamentals on or before the given date
     * @param {String} opts.nextPage Gets the next page of data from a previous API call
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ApiResponseFilingFundamentals} and HTTP response
     */
    this.getFilingFundamentalsWithHttpInfo = function(identifier, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'identifier' is set
      if (identifier === undefined || identifier === null) {
        throw new Error("Missing the required parameter 'identifier' when calling getFilingFundamentals");
      }


      var pathParams = {
        'identifier': identifier
      };
      var queryParams = {
        'statement_code': opts['statementCode'],
        'type': opts['type'],
        'fiscal_year': opts['fiscalYear'],
        'fiscal_period': opts['fiscalPeriod'],
        'start_date': opts['startDate'],
        'end_date': opts['endDate'],
        'next_page': opts['nextPage'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['ApiKeyAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = ApiResponseFilingFundamentals;

      return this.apiClient.callApi(
        '/filings/{identifier}/fundamentals', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * All Fundamentals by Filing
     * Returns all Fundamentals for the SEC Filing with the given &#x60;identifier&#x60;. Returns Fundamentals matching parameters when supplied.
     * @param {String} identifier A Filing identifier
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.statementCode Filters fundamentals by statement code
     * @param {module:model/String} opts.type Filters fundamentals by type
     * @param {Number} opts.fiscalYear Filters fundamentals by fiscal year
     * @param {module:model/String} opts.fiscalPeriod Filters fundamentals by fiscal period
     * @param {Date} opts.startDate Returns fundamentals on or after the given date
     * @param {Date} opts.endDate Returns fundamentals on or before the given date
     * @param {String} opts.nextPage Gets the next page of data from a previous API call
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ApiResponseFilingFundamentals}
     */
    this.getFilingFundamentals = function(identifier, opts) {
      return this.getFilingFundamentalsWithHttpInfo(identifier, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Filing Html
     * @param {String} identifier A Filing identifier
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link 'String'} and HTTP response
     */
    this.getFilingHtmlWithHttpInfo = function(identifier) {
      var postBody = null;

      // verify the required parameter 'identifier' is set
      if (identifier === undefined || identifier === null) {
        throw new Error("Missing the required parameter 'identifier' when calling getFilingHtml");
      }


      var pathParams = {
        'identifier': identifier
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
      var accepts = ['text/html'];
      var returnType = 'String';

      return this.apiClient.callApi(
        '/filings/{identifier}/html', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Filing Html
     * @param {String} identifier A Filing identifier
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link 'String'}
     */
    this.getFilingHtml = function(identifier) {
      return this.getFilingHtmlWithHttpInfo(identifier)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Filing Text
     * @param {String} identifier A Filing identifier
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link 'String'} and HTTP response
     */
    this.getFilingTextWithHttpInfo = function(identifier) {
      var postBody = null;

      // verify the required parameter 'identifier' is set
      if (identifier === undefined || identifier === null) {
        throw new Error("Missing the required parameter 'identifier' when calling getFilingText");
      }


      var pathParams = {
        'identifier': identifier
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
        '/filings/{identifier}/text', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Filing Text
     * @param {String} identifier A Filing identifier
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link 'String'}
     */
    this.getFilingText = function(identifier) {
      return this.getFilingTextWithHttpInfo(identifier)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Filing Note by ID
     * @param {String} identifier The Intrinio ID of the filing note
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.contentFormat Returns content in html (as filed) or plain text (default to text)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/FilingNote} and HTTP response
     */
    this.getNoteWithHttpInfo = function(identifier, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'identifier' is set
      if (identifier === undefined || identifier === null) {
        throw new Error("Missing the required parameter 'identifier' when calling getNote");
      }


      var pathParams = {
        'identifier': identifier
      };
      var queryParams = {
        'content_format': opts['contentFormat'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['ApiKeyAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = FilingNote;

      return this.apiClient.callApi(
        '/filings/notes/{identifier}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Filing Note by ID
     * @param {String} identifier The Intrinio ID of the filing note
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.contentFormat Returns content in html (as filed) or plain text (default to text)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/FilingNote}
     */
    this.getNote = function(identifier, opts) {
      return this.getNoteWithHttpInfo(identifier, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Filing Note HTML
     * @param {String} identifier The Intrinio ID of the filing note
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link 'String'} and HTTP response
     */
    this.getNoteHtmlWithHttpInfo = function(identifier) {
      var postBody = null;

      // verify the required parameter 'identifier' is set
      if (identifier === undefined || identifier === null) {
        throw new Error("Missing the required parameter 'identifier' when calling getNoteHtml");
      }


      var pathParams = {
        'identifier': identifier
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
        '/filings/notes/{identifier}/html', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Filing Note HTML
     * @param {String} identifier The Intrinio ID of the filing note
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link 'String'}
     */
    this.getNoteHtml = function(identifier) {
      return this.getNoteHtmlWithHttpInfo(identifier)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Filing Note Text
     * @param {String} identifier The Intrinio ID of the filing note
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link 'String'} and HTTP response
     */
    this.getNoteTextWithHttpInfo = function(identifier) {
      var postBody = null;

      // verify the required parameter 'identifier' is set
      if (identifier === undefined || identifier === null) {
        throw new Error("Missing the required parameter 'identifier' when calling getNoteText");
      }


      var pathParams = {
        'identifier': identifier
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
        '/filings/notes/{identifier}/text', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Filing Note Text
     * @param {String} identifier The Intrinio ID of the filing note
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link 'String'}
     */
    this.getNoteText = function(identifier) {
      return this.getNoteTextWithHttpInfo(identifier)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Search Filing Notes
     * Searches for Filing Notes using the &#x60;query&#x60;
     * @param {String} query Search for notes that contain all or parts of this text
     * @param {Object} opts Optional parameters
     * @param {Date} opts.filingStartDate Limit search to filings on or after this date
     * @param {Date} opts.filingEndDate Limit search to filings on or before this date
     * @param {Number} opts.pageSize The number of results to return (default to 100)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ApiResponseFilingNotesSearch} and HTTP response
     */
    this.searchNotesWithHttpInfo = function(query, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'query' is set
      if (query === undefined || query === null) {
        throw new Error("Missing the required parameter 'query' when calling searchNotes");
      }


      var pathParams = {
      };
      var queryParams = {
        'query': query,
        'filing_start_date': opts['filingStartDate'],
        'filing_end_date': opts['filingEndDate'],
        'page_size': opts['pageSize'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['ApiKeyAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = ApiResponseFilingNotesSearch;

      return this.apiClient.callApi(
        '/filings/notes/search', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Search Filing Notes
     * Searches for Filing Notes using the &#x60;query&#x60;
     * @param {String} query Search for notes that contain all or parts of this text
     * @param {Object} opts Optional parameters
     * @param {Date} opts.filingStartDate Limit search to filings on or after this date
     * @param {Date} opts.filingEndDate Limit search to filings on or before this date
     * @param {Number} opts.pageSize The number of results to return (default to 100)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ApiResponseFilingNotesSearch}
     */
    this.searchNotes = function(query, opts) {
      return this.searchNotesWithHttpInfo(query, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
  };

  return exports;
}));
