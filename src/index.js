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

(function(factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/ApiResponseCompanies', 'model/ApiResponseCompanyFilings', 'model/ApiResponseCompanyFundamentals', 'model/ApiResponseCompanyHistoricalData', 'model/ApiResponseCompanyNews', 'model/ApiResponseCompanySecurities', 'model/ApiResponseDataTags', 'model/ApiResponseEconomicIndexHistoricalData', 'model/ApiResponseEconomicIndices', 'model/ApiResponseFilingNotes', 'model/ApiResponseFilingNotesSearch', 'model/ApiResponseFilings', 'model/ApiResponseHistoricalData', 'model/ApiResponseNews', 'model/ApiResponseReportedFinancials', 'model/ApiResponseSICIndexHistoricalData', 'model/ApiResponseSICIndices', 'model/ApiResponseSecurities', 'model/ApiResponseSecurityHistoricalData', 'model/ApiResponseSecurityStockPriceAdjustments', 'model/ApiResponseSecurityStockPrices', 'model/ApiResponseStandardizedFinancials', 'model/ApiResponseStockExchangeRealtimeStockPrices', 'model/ApiResponseStockExchangeSecurities', 'model/ApiResponseStockExchangeStockPriceAdjustments', 'model/ApiResponseStockExchangeStockPrices', 'model/ApiResponseStockExchanges', 'model/ApiResponseStockMarketIndexHistoricalData', 'model/ApiResponseStockMarketIndices', 'model/Company', 'model/CompanyFiling', 'model/CompanyNews', 'model/CompanyNewsSummary', 'model/CompanySummary', 'model/DataTag', 'model/DataTagSummary', 'model/DividendRecord', 'model/EarningsRecord', 'model/EconomicIndex', 'model/EconomicIndexSummary', 'model/Filing', 'model/FilingNote', 'model/FilingNoteFiling', 'model/FilingNoteSummary', 'model/FilingSummary', 'model/Fundamental', 'model/FundamentalSummary', 'model/HistoricalData', 'model/RealtimeStockPrice', 'model/RealtimeStockPriceSecurity', 'model/ReportedFinancial', 'model/ReportedTag', 'model/SICIndex', 'model/Security', 'model/SecurityScreenClause', 'model/SecurityScreenGroup', 'model/SecurityScreenResult', 'model/SecurityScreenResultData', 'model/SecuritySummary', 'model/StandardizedFinancial', 'model/StockExchange', 'model/StockMarketIndex', 'model/StockMarketIndexSummary', 'model/StockPrice', 'model/StockPriceAdjustment', 'model/StockPriceAdjustmentSummary', 'model/StockPriceSummary', 'api/CompanyApi', 'api/DataPointApi', 'api/DataTagApi', 'api/FilingApi', 'api/FundamentalsApi', 'api/HistoricalDataApi', 'api/IndexApi', 'api/SecurityApi', 'api/StockExchangeApi'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('./ApiClient'), require('./model/ApiResponseCompanies'), require('./model/ApiResponseCompanyFilings'), require('./model/ApiResponseCompanyFundamentals'), require('./model/ApiResponseCompanyHistoricalData'), require('./model/ApiResponseCompanyNews'), require('./model/ApiResponseCompanySecurities'), require('./model/ApiResponseDataTags'), require('./model/ApiResponseEconomicIndexHistoricalData'), require('./model/ApiResponseEconomicIndices'), require('./model/ApiResponseFilingNotes'), require('./model/ApiResponseFilingNotesSearch'), require('./model/ApiResponseFilings'), require('./model/ApiResponseHistoricalData'), require('./model/ApiResponseNews'), require('./model/ApiResponseReportedFinancials'), require('./model/ApiResponseSICIndexHistoricalData'), require('./model/ApiResponseSICIndices'), require('./model/ApiResponseSecurities'), require('./model/ApiResponseSecurityHistoricalData'), require('./model/ApiResponseSecurityStockPriceAdjustments'), require('./model/ApiResponseSecurityStockPrices'), require('./model/ApiResponseStandardizedFinancials'), require('./model/ApiResponseStockExchangeRealtimeStockPrices'), require('./model/ApiResponseStockExchangeSecurities'), require('./model/ApiResponseStockExchangeStockPriceAdjustments'), require('./model/ApiResponseStockExchangeStockPrices'), require('./model/ApiResponseStockExchanges'), require('./model/ApiResponseStockMarketIndexHistoricalData'), require('./model/ApiResponseStockMarketIndices'), require('./model/Company'), require('./model/CompanyFiling'), require('./model/CompanyNews'), require('./model/CompanyNewsSummary'), require('./model/CompanySummary'), require('./model/DataTag'), require('./model/DataTagSummary'), require('./model/DividendRecord'), require('./model/EarningsRecord'), require('./model/EconomicIndex'), require('./model/EconomicIndexSummary'), require('./model/Filing'), require('./model/FilingNote'), require('./model/FilingNoteFiling'), require('./model/FilingNoteSummary'), require('./model/FilingSummary'), require('./model/Fundamental'), require('./model/FundamentalSummary'), require('./model/HistoricalData'), require('./model/RealtimeStockPrice'), require('./model/RealtimeStockPriceSecurity'), require('./model/ReportedFinancial'), require('./model/ReportedTag'), require('./model/SICIndex'), require('./model/Security'), require('./model/SecurityScreenClause'), require('./model/SecurityScreenGroup'), require('./model/SecurityScreenResult'), require('./model/SecurityScreenResultData'), require('./model/SecuritySummary'), require('./model/StandardizedFinancial'), require('./model/StockExchange'), require('./model/StockMarketIndex'), require('./model/StockMarketIndexSummary'), require('./model/StockPrice'), require('./model/StockPriceAdjustment'), require('./model/StockPriceAdjustmentSummary'), require('./model/StockPriceSummary'), require('./api/CompanyApi'), require('./api/DataPointApi'), require('./api/DataTagApi'), require('./api/FilingApi'), require('./api/FundamentalsApi'), require('./api/HistoricalDataApi'), require('./api/IndexApi'), require('./api/SecurityApi'), require('./api/StockExchangeApi'));
  }
}(function(ApiClient, ApiResponseCompanies, ApiResponseCompanyFilings, ApiResponseCompanyFundamentals, ApiResponseCompanyHistoricalData, ApiResponseCompanyNews, ApiResponseCompanySecurities, ApiResponseDataTags, ApiResponseEconomicIndexHistoricalData, ApiResponseEconomicIndices, ApiResponseFilingNotes, ApiResponseFilingNotesSearch, ApiResponseFilings, ApiResponseHistoricalData, ApiResponseNews, ApiResponseReportedFinancials, ApiResponseSICIndexHistoricalData, ApiResponseSICIndices, ApiResponseSecurities, ApiResponseSecurityHistoricalData, ApiResponseSecurityStockPriceAdjustments, ApiResponseSecurityStockPrices, ApiResponseStandardizedFinancials, ApiResponseStockExchangeRealtimeStockPrices, ApiResponseStockExchangeSecurities, ApiResponseStockExchangeStockPriceAdjustments, ApiResponseStockExchangeStockPrices, ApiResponseStockExchanges, ApiResponseStockMarketIndexHistoricalData, ApiResponseStockMarketIndices, Company, CompanyFiling, CompanyNews, CompanyNewsSummary, CompanySummary, DataTag, DataTagSummary, DividendRecord, EarningsRecord, EconomicIndex, EconomicIndexSummary, Filing, FilingNote, FilingNoteFiling, FilingNoteSummary, FilingSummary, Fundamental, FundamentalSummary, HistoricalData, RealtimeStockPrice, RealtimeStockPriceSecurity, ReportedFinancial, ReportedTag, SICIndex, Security, SecurityScreenClause, SecurityScreenGroup, SecurityScreenResult, SecurityScreenResultData, SecuritySummary, StandardizedFinancial, StockExchange, StockMarketIndex, StockMarketIndexSummary, StockPrice, StockPriceAdjustment, StockPriceAdjustmentSummary, StockPriceSummary, CompanyApi, DataPointApi, DataTagApi, FilingApi, FundamentalsApi, HistoricalDataApi, IndexApi, SecurityApi, StockExchangeApi) {
  'use strict';

  /**
   * Access the Intrinio API.<br>
   * The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
   * <p>
   * An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
   * <pre>
   * var intrinioSDK = require('index'); // See note below*.
   * var xxxSvc = new intrinioSDK.XxxApi(); // Allocate the API class we're going to use.
   * var yyyModel = new intrinioSDK.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
   * and put the application logic within the callback function.</em>
   * </p>
   * <p>
   * A non-AMD browser application (discouraged) might do something like this:
   * <pre>
   * var xxxSvc = new intrinioSDK.XxxApi(); // Allocate the API class we're going to use.
   * var yyy = new intrinioSDK.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * </p>
   * @module index
   * @version 1.1.2
   */
  var exports = {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient: ApiClient,
    /**
     * The ApiResponseCompanies model constructor.
     * @property {module:model/ApiResponseCompanies}
     */
    ApiResponseCompanies: ApiResponseCompanies,
    /**
     * The ApiResponseCompanyFilings model constructor.
     * @property {module:model/ApiResponseCompanyFilings}
     */
    ApiResponseCompanyFilings: ApiResponseCompanyFilings,
    /**
     * The ApiResponseCompanyFundamentals model constructor.
     * @property {module:model/ApiResponseCompanyFundamentals}
     */
    ApiResponseCompanyFundamentals: ApiResponseCompanyFundamentals,
    /**
     * The ApiResponseCompanyHistoricalData model constructor.
     * @property {module:model/ApiResponseCompanyHistoricalData}
     */
    ApiResponseCompanyHistoricalData: ApiResponseCompanyHistoricalData,
    /**
     * The ApiResponseCompanyNews model constructor.
     * @property {module:model/ApiResponseCompanyNews}
     */
    ApiResponseCompanyNews: ApiResponseCompanyNews,
    /**
     * The ApiResponseCompanySecurities model constructor.
     * @property {module:model/ApiResponseCompanySecurities}
     */
    ApiResponseCompanySecurities: ApiResponseCompanySecurities,
    /**
     * The ApiResponseDataTags model constructor.
     * @property {module:model/ApiResponseDataTags}
     */
    ApiResponseDataTags: ApiResponseDataTags,
    /**
     * The ApiResponseEconomicIndexHistoricalData model constructor.
     * @property {module:model/ApiResponseEconomicIndexHistoricalData}
     */
    ApiResponseEconomicIndexHistoricalData: ApiResponseEconomicIndexHistoricalData,
    /**
     * The ApiResponseEconomicIndices model constructor.
     * @property {module:model/ApiResponseEconomicIndices}
     */
    ApiResponseEconomicIndices: ApiResponseEconomicIndices,
    /**
     * The ApiResponseFilingNotes model constructor.
     * @property {module:model/ApiResponseFilingNotes}
     */
    ApiResponseFilingNotes: ApiResponseFilingNotes,
    /**
     * The ApiResponseFilingNotesSearch model constructor.
     * @property {module:model/ApiResponseFilingNotesSearch}
     */
    ApiResponseFilingNotesSearch: ApiResponseFilingNotesSearch,
    /**
     * The ApiResponseFilings model constructor.
     * @property {module:model/ApiResponseFilings}
     */
    ApiResponseFilings: ApiResponseFilings,
    /**
     * The ApiResponseHistoricalData model constructor.
     * @property {module:model/ApiResponseHistoricalData}
     */
    ApiResponseHistoricalData: ApiResponseHistoricalData,
    /**
     * The ApiResponseNews model constructor.
     * @property {module:model/ApiResponseNews}
     */
    ApiResponseNews: ApiResponseNews,
    /**
     * The ApiResponseReportedFinancials model constructor.
     * @property {module:model/ApiResponseReportedFinancials}
     */
    ApiResponseReportedFinancials: ApiResponseReportedFinancials,
    /**
     * The ApiResponseSICIndexHistoricalData model constructor.
     * @property {module:model/ApiResponseSICIndexHistoricalData}
     */
    ApiResponseSICIndexHistoricalData: ApiResponseSICIndexHistoricalData,
    /**
     * The ApiResponseSICIndices model constructor.
     * @property {module:model/ApiResponseSICIndices}
     */
    ApiResponseSICIndices: ApiResponseSICIndices,
    /**
     * The ApiResponseSecurities model constructor.
     * @property {module:model/ApiResponseSecurities}
     */
    ApiResponseSecurities: ApiResponseSecurities,
    /**
     * The ApiResponseSecurityHistoricalData model constructor.
     * @property {module:model/ApiResponseSecurityHistoricalData}
     */
    ApiResponseSecurityHistoricalData: ApiResponseSecurityHistoricalData,
    /**
     * The ApiResponseSecurityStockPriceAdjustments model constructor.
     * @property {module:model/ApiResponseSecurityStockPriceAdjustments}
     */
    ApiResponseSecurityStockPriceAdjustments: ApiResponseSecurityStockPriceAdjustments,
    /**
     * The ApiResponseSecurityStockPrices model constructor.
     * @property {module:model/ApiResponseSecurityStockPrices}
     */
    ApiResponseSecurityStockPrices: ApiResponseSecurityStockPrices,
    /**
     * The ApiResponseStandardizedFinancials model constructor.
     * @property {module:model/ApiResponseStandardizedFinancials}
     */
    ApiResponseStandardizedFinancials: ApiResponseStandardizedFinancials,
    /**
     * The ApiResponseStockExchangeRealtimeStockPrices model constructor.
     * @property {module:model/ApiResponseStockExchangeRealtimeStockPrices}
     */
    ApiResponseStockExchangeRealtimeStockPrices: ApiResponseStockExchangeRealtimeStockPrices,
    /**
     * The ApiResponseStockExchangeSecurities model constructor.
     * @property {module:model/ApiResponseStockExchangeSecurities}
     */
    ApiResponseStockExchangeSecurities: ApiResponseStockExchangeSecurities,
    /**
     * The ApiResponseStockExchangeStockPriceAdjustments model constructor.
     * @property {module:model/ApiResponseStockExchangeStockPriceAdjustments}
     */
    ApiResponseStockExchangeStockPriceAdjustments: ApiResponseStockExchangeStockPriceAdjustments,
    /**
     * The ApiResponseStockExchangeStockPrices model constructor.
     * @property {module:model/ApiResponseStockExchangeStockPrices}
     */
    ApiResponseStockExchangeStockPrices: ApiResponseStockExchangeStockPrices,
    /**
     * The ApiResponseStockExchanges model constructor.
     * @property {module:model/ApiResponseStockExchanges}
     */
    ApiResponseStockExchanges: ApiResponseStockExchanges,
    /**
     * The ApiResponseStockMarketIndexHistoricalData model constructor.
     * @property {module:model/ApiResponseStockMarketIndexHistoricalData}
     */
    ApiResponseStockMarketIndexHistoricalData: ApiResponseStockMarketIndexHistoricalData,
    /**
     * The ApiResponseStockMarketIndices model constructor.
     * @property {module:model/ApiResponseStockMarketIndices}
     */
    ApiResponseStockMarketIndices: ApiResponseStockMarketIndices,
    /**
     * The Company model constructor.
     * @property {module:model/Company}
     */
    Company: Company,
    /**
     * The CompanyFiling model constructor.
     * @property {module:model/CompanyFiling}
     */
    CompanyFiling: CompanyFiling,
    /**
     * The CompanyNews model constructor.
     * @property {module:model/CompanyNews}
     */
    CompanyNews: CompanyNews,
    /**
     * The CompanyNewsSummary model constructor.
     * @property {module:model/CompanyNewsSummary}
     */
    CompanyNewsSummary: CompanyNewsSummary,
    /**
     * The CompanySummary model constructor.
     * @property {module:model/CompanySummary}
     */
    CompanySummary: CompanySummary,
    /**
     * The DataTag model constructor.
     * @property {module:model/DataTag}
     */
    DataTag: DataTag,
    /**
     * The DataTagSummary model constructor.
     * @property {module:model/DataTagSummary}
     */
    DataTagSummary: DataTagSummary,
    /**
     * The DividendRecord model constructor.
     * @property {module:model/DividendRecord}
     */
    DividendRecord: DividendRecord,
    /**
     * The EarningsRecord model constructor.
     * @property {module:model/EarningsRecord}
     */
    EarningsRecord: EarningsRecord,
    /**
     * The EconomicIndex model constructor.
     * @property {module:model/EconomicIndex}
     */
    EconomicIndex: EconomicIndex,
    /**
     * The EconomicIndexSummary model constructor.
     * @property {module:model/EconomicIndexSummary}
     */
    EconomicIndexSummary: EconomicIndexSummary,
    /**
     * The Filing model constructor.
     * @property {module:model/Filing}
     */
    Filing: Filing,
    /**
     * The FilingNote model constructor.
     * @property {module:model/FilingNote}
     */
    FilingNote: FilingNote,
    /**
     * The FilingNoteFiling model constructor.
     * @property {module:model/FilingNoteFiling}
     */
    FilingNoteFiling: FilingNoteFiling,
    /**
     * The FilingNoteSummary model constructor.
     * @property {module:model/FilingNoteSummary}
     */
    FilingNoteSummary: FilingNoteSummary,
    /**
     * The FilingSummary model constructor.
     * @property {module:model/FilingSummary}
     */
    FilingSummary: FilingSummary,
    /**
     * The Fundamental model constructor.
     * @property {module:model/Fundamental}
     */
    Fundamental: Fundamental,
    /**
     * The FundamentalSummary model constructor.
     * @property {module:model/FundamentalSummary}
     */
    FundamentalSummary: FundamentalSummary,
    /**
     * The HistoricalData model constructor.
     * @property {module:model/HistoricalData}
     */
    HistoricalData: HistoricalData,
    /**
     * The RealtimeStockPrice model constructor.
     * @property {module:model/RealtimeStockPrice}
     */
    RealtimeStockPrice: RealtimeStockPrice,
    /**
     * The RealtimeStockPriceSecurity model constructor.
     * @property {module:model/RealtimeStockPriceSecurity}
     */
    RealtimeStockPriceSecurity: RealtimeStockPriceSecurity,
    /**
     * The ReportedFinancial model constructor.
     * @property {module:model/ReportedFinancial}
     */
    ReportedFinancial: ReportedFinancial,
    /**
     * The ReportedTag model constructor.
     * @property {module:model/ReportedTag}
     */
    ReportedTag: ReportedTag,
    /**
     * The SICIndex model constructor.
     * @property {module:model/SICIndex}
     */
    SICIndex: SICIndex,
    /**
     * The Security model constructor.
     * @property {module:model/Security}
     */
    Security: Security,
    /**
     * The SecurityScreenClause model constructor.
     * @property {module:model/SecurityScreenClause}
     */
    SecurityScreenClause: SecurityScreenClause,
    /**
     * The SecurityScreenGroup model constructor.
     * @property {module:model/SecurityScreenGroup}
     */
    SecurityScreenGroup: SecurityScreenGroup,
    /**
     * The SecurityScreenResult model constructor.
     * @property {module:model/SecurityScreenResult}
     */
    SecurityScreenResult: SecurityScreenResult,
    /**
     * The SecurityScreenResultData model constructor.
     * @property {module:model/SecurityScreenResultData}
     */
    SecurityScreenResultData: SecurityScreenResultData,
    /**
     * The SecuritySummary model constructor.
     * @property {module:model/SecuritySummary}
     */
    SecuritySummary: SecuritySummary,
    /**
     * The StandardizedFinancial model constructor.
     * @property {module:model/StandardizedFinancial}
     */
    StandardizedFinancial: StandardizedFinancial,
    /**
     * The StockExchange model constructor.
     * @property {module:model/StockExchange}
     */
    StockExchange: StockExchange,
    /**
     * The StockMarketIndex model constructor.
     * @property {module:model/StockMarketIndex}
     */
    StockMarketIndex: StockMarketIndex,
    /**
     * The StockMarketIndexSummary model constructor.
     * @property {module:model/StockMarketIndexSummary}
     */
    StockMarketIndexSummary: StockMarketIndexSummary,
    /**
     * The StockPrice model constructor.
     * @property {module:model/StockPrice}
     */
    StockPrice: StockPrice,
    /**
     * The StockPriceAdjustment model constructor.
     * @property {module:model/StockPriceAdjustment}
     */
    StockPriceAdjustment: StockPriceAdjustment,
    /**
     * The StockPriceAdjustmentSummary model constructor.
     * @property {module:model/StockPriceAdjustmentSummary}
     */
    StockPriceAdjustmentSummary: StockPriceAdjustmentSummary,
    /**
     * The StockPriceSummary model constructor.
     * @property {module:model/StockPriceSummary}
     */
    StockPriceSummary: StockPriceSummary,
    /**
     * The CompanyApi service constructor.
     * @property {module:api/CompanyApi}
     */
    CompanyApi: CompanyApi,
    /**
     * The DataPointApi service constructor.
     * @property {module:api/DataPointApi}
     */
    DataPointApi: DataPointApi,
    /**
     * The DataTagApi service constructor.
     * @property {module:api/DataTagApi}
     */
    DataTagApi: DataTagApi,
    /**
     * The FilingApi service constructor.
     * @property {module:api/FilingApi}
     */
    FilingApi: FilingApi,
    /**
     * The FundamentalsApi service constructor.
     * @property {module:api/FundamentalsApi}
     */
    FundamentalsApi: FundamentalsApi,
    /**
     * The HistoricalDataApi service constructor.
     * @property {module:api/HistoricalDataApi}
     */
    HistoricalDataApi: HistoricalDataApi,
    /**
     * The IndexApi service constructor.
     * @property {module:api/IndexApi}
     */
    IndexApi: IndexApi,
    /**
     * The SecurityApi service constructor.
     * @property {module:api/SecurityApi}
     */
    SecurityApi: SecurityApi,
    /**
     * The StockExchangeApi service constructor.
     * @property {module:api/StockExchangeApi}
     */
    StockExchangeApi: StockExchangeApi
  };

  return exports;
}));
