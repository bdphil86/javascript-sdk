# intrinioSDK.CryptoApi

All URIs are relative to *https://api-v2.intrinio.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getCryptoBookAsks**](CryptoApi.md#getCryptoBookAsks) | **GET** /crypto/book/asks | Crypto Book Asks
[**getCryptoBookBids**](CryptoApi.md#getCryptoBookBids) | **GET** /crypto/book/bids | Crypto Book Bids
[**getCryptoBookSummary**](CryptoApi.md#getCryptoBookSummary) | **GET** /crypto/book | Crypto Book Summary
[**getCryptoCurrencies**](CryptoApi.md#getCryptoCurrencies) | **GET** /crypto/currencies | Crypto Currencies
[**getCryptoExchanges**](CryptoApi.md#getCryptoExchanges) | **GET** /crypto/exchanges | Crypto Exchanges
[**getCryptoPairs**](CryptoApi.md#getCryptoPairs) | **GET** /crypto/pairs | Crypto Pairs
[**getCryptoPriceTechnicalsAdi**](CryptoApi.md#getCryptoPriceTechnicalsAdi) | **GET** /crypto/prices/technicals/adi | Accumulation/Distribution Index
[**getCryptoPriceTechnicalsAdtv**](CryptoApi.md#getCryptoPriceTechnicalsAdtv) | **GET** /crypto/prices/technicals/adtv | Average Daily Trading Volume
[**getCryptoPriceTechnicalsAdx**](CryptoApi.md#getCryptoPriceTechnicalsAdx) | **GET** /crypto/prices/technicals/adx | Average Directional Index
[**getCryptoPriceTechnicalsAo**](CryptoApi.md#getCryptoPriceTechnicalsAo) | **GET** /crypto/prices/technicals/ao | Awesome Oscillator
[**getCryptoPriceTechnicalsAtr**](CryptoApi.md#getCryptoPriceTechnicalsAtr) | **GET** /crypto/prices/technicals/atr | Average True Range
[**getCryptoPriceTechnicalsBb**](CryptoApi.md#getCryptoPriceTechnicalsBb) | **GET** /crypto/prices/technicals/bb | Bollinger Bands
[**getCryptoPriceTechnicalsCci**](CryptoApi.md#getCryptoPriceTechnicalsCci) | **GET** /crypto/prices/technicals/cci | Commodity Channel Index
[**getCryptoPriceTechnicalsCmf**](CryptoApi.md#getCryptoPriceTechnicalsCmf) | **GET** /crypto/prices/technicals/cmf | Chaikin Money Flow
[**getCryptoPriceTechnicalsDc**](CryptoApi.md#getCryptoPriceTechnicalsDc) | **GET** /crypto/prices/technicals/dc | Donchian Channel
[**getCryptoPriceTechnicalsDpo**](CryptoApi.md#getCryptoPriceTechnicalsDpo) | **GET** /crypto/prices/technicals/dpo | Detrended Price Oscillator
[**getCryptoPriceTechnicalsEom**](CryptoApi.md#getCryptoPriceTechnicalsEom) | **GET** /crypto/prices/technicals/eom | Ease of Movement
[**getCryptoPriceTechnicalsFi**](CryptoApi.md#getCryptoPriceTechnicalsFi) | **GET** /crypto/prices/technicals/fi | Force Index
[**getCryptoPriceTechnicalsIchimoku**](CryptoApi.md#getCryptoPriceTechnicalsIchimoku) | **GET** /crypto/prices/technicals/ichimoku | Ichimoku Kinko Hyo
[**getCryptoPriceTechnicalsKc**](CryptoApi.md#getCryptoPriceTechnicalsKc) | **GET** /crypto/prices/technicals/kc | Keltner Channel
[**getCryptoPriceTechnicalsKst**](CryptoApi.md#getCryptoPriceTechnicalsKst) | **GET** /crypto/prices/technicals/kst | Know Sure Thing
[**getCryptoPriceTechnicalsMacd**](CryptoApi.md#getCryptoPriceTechnicalsMacd) | **GET** /crypto/prices/technicals/macd | Moving Average Convergence Divergence
[**getCryptoPriceTechnicalsMfi**](CryptoApi.md#getCryptoPriceTechnicalsMfi) | **GET** /crypto/prices/technicals/mfi | Money Flow Index
[**getCryptoPriceTechnicalsMi**](CryptoApi.md#getCryptoPriceTechnicalsMi) | **GET** /crypto/prices/technicals/mi | Mass Index
[**getCryptoPriceTechnicalsNvi**](CryptoApi.md#getCryptoPriceTechnicalsNvi) | **GET** /crypto/prices/technicals/nvi | Negative Volume Index
[**getCryptoPriceTechnicalsObv**](CryptoApi.md#getCryptoPriceTechnicalsObv) | **GET** /crypto/prices/technicals/obv | On-balance Volume
[**getCryptoPriceTechnicalsObvMean**](CryptoApi.md#getCryptoPriceTechnicalsObvMean) | **GET** /crypto/prices/technicals/obv_mean | On-balance Volume Mean
[**getCryptoPriceTechnicalsRsi**](CryptoApi.md#getCryptoPriceTechnicalsRsi) | **GET** /crypto/prices/technicals/rsi | Relative Strength Index
[**getCryptoPriceTechnicalsSma**](CryptoApi.md#getCryptoPriceTechnicalsSma) | **GET** /crypto/prices/technicals/sma | Simple Moving Average
[**getCryptoPriceTechnicalsSr**](CryptoApi.md#getCryptoPriceTechnicalsSr) | **GET** /crypto/prices/technicals/sr | Stochastic Oscillator
[**getCryptoPriceTechnicalsTrix**](CryptoApi.md#getCryptoPriceTechnicalsTrix) | **GET** /crypto/prices/technicals/trix | Triple Exponential Average
[**getCryptoPriceTechnicalsTsi**](CryptoApi.md#getCryptoPriceTechnicalsTsi) | **GET** /crypto/prices/technicals/tsi | True Strength Index
[**getCryptoPriceTechnicalsUo**](CryptoApi.md#getCryptoPriceTechnicalsUo) | **GET** /crypto/prices/technicals/uo | Ultimate Oscillator
[**getCryptoPriceTechnicalsVi**](CryptoApi.md#getCryptoPriceTechnicalsVi) | **GET** /crypto/prices/technicals/vi | Vortex Indicator
[**getCryptoPriceTechnicalsVpt**](CryptoApi.md#getCryptoPriceTechnicalsVpt) | **GET** /crypto/prices/technicals/vpt | Volume-price Trend
[**getCryptoPriceTechnicalsVwap**](CryptoApi.md#getCryptoPriceTechnicalsVwap) | **GET** /crypto/prices/technicals/vwap | Volume Weighted Average Price
[**getCryptoPriceTechnicalsWr**](CryptoApi.md#getCryptoPriceTechnicalsWr) | **GET** /crypto/prices/technicals/wr | Williams %R
[**getCryptoPrices**](CryptoApi.md#getCryptoPrices) | **GET** /crypto/prices | Crypto Prices
[**getCryptoSnapshot**](CryptoApi.md#getCryptoSnapshot) | **GET** /crypto/snapshot | Crypto Snapshot
[**getCryptoStats**](CryptoApi.md#getCryptoStats) | **GET** /crypto/stats | Crypto Stats



[//]: # (START_OPERTATION)

[//]: # (ENDPOINT:/crypto/book/asks)

[//]: # (DOC_LINK:CryptoApi.md#getCryptoBookAsks)

<a name="getCryptoBookAsks"></a>
# **getCryptoBookAsks**

[**View Intrinio API Documentation**](https://docs.intrinio.com/documentation/api_v2/getCryptoBookAsks_v2)

> ApiResponseCryptoBookAsks getCryptoBookAsks(opts)

Crypto Book Asks

Returns the entire ask order book for a given Crypto Currency Pair and Crypto Exchange.

### Example

[//]: # (START_CODE_EXAMPLE)

```javascript
var intrinioSDK = require('intrinio-sdk');
intrinioSDK.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR API KEY";

var cryptoAPI = new intrinioSDK.CryptoApi();

var opts = { 
  'pair': "btcusd", // String | Return the order book asks for the given Crypto Currency Pair.
  'exchange': "binance", // String | Return the order book asks for a Crypto Currency on the given Crypto Exchange.
  'currency': "BTC" // String | Return the order book asks for the given Crypto Currency.
};

cryptoAPI.getCryptoBookAsks(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});
```

[//]: # (END_CODE_EXAMPLE)

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pair** | **String**| Return the order book asks for the given Crypto Currency Pair. | [optional] 
 **exchange** | **String**| Return the order book asks for a Crypto Currency on the given Crypto Exchange. | [optional] 
 **currency** | **String**| Return the order book asks for the given Crypto Currency. | [optional] 

### Return type

[**ApiResponseCryptoBookAsks**](ApiResponseCryptoBookAsks.md)

[//]: # (END_OPERATION)


[//]: # (START_OPERTATION)

[//]: # (ENDPOINT:/crypto/book/bids)

[//]: # (DOC_LINK:CryptoApi.md#getCryptoBookBids)

<a name="getCryptoBookBids"></a>
# **getCryptoBookBids**

[**View Intrinio API Documentation**](https://docs.intrinio.com/documentation/api_v2/getCryptoBookBids_v2)

> ApiResponseCryptoBookBids getCryptoBookBids(opts)

Crypto Book Bids

Returns the entire bid order book for a given Crypto Currency Pair and Crypto Exchange.

### Example

[//]: # (START_CODE_EXAMPLE)

```javascript
var intrinioSDK = require('intrinio-sdk');
intrinioSDK.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR API KEY";

var cryptoAPI = new intrinioSDK.CryptoApi();

var opts = { 
  'pair': "btcusd", // String | Return the order book bids for the given Crypto Currency Pair.
  'exchange': "binance", // String | Return the order book bids for a Crypto Currency on the given Crypto Exchange.
  'currency': "BTC" // String | Return the order book bids for the given Crypto Currency.
};

cryptoAPI.getCryptoBookBids(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});
```

[//]: # (END_CODE_EXAMPLE)

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pair** | **String**| Return the order book bids for the given Crypto Currency Pair. | [optional] 
 **exchange** | **String**| Return the order book bids for a Crypto Currency on the given Crypto Exchange. | [optional] 
 **currency** | **String**| Return the order book bids for the given Crypto Currency. | [optional] 

### Return type

[**ApiResponseCryptoBookBids**](ApiResponseCryptoBookBids.md)

[//]: # (END_OPERATION)


[//]: # (START_OPERTATION)

[//]: # (ENDPOINT:/crypto/book)

[//]: # (DOC_LINK:CryptoApi.md#getCryptoBookSummary)

<a name="getCryptoBookSummary"></a>
# **getCryptoBookSummary**

[**View Intrinio API Documentation**](https://docs.intrinio.com/documentation/api_v2/getCryptoBookSummary_v2)

> ApiResponseCryptoBook getCryptoBookSummary(opts)

Crypto Book Summary

Returns the order book summary (bid/ask prices and size) for a given Crypto Currency Pair and Crypto Exchange.

### Example

[//]: # (START_CODE_EXAMPLE)

```javascript
var intrinioSDK = require('intrinio-sdk');
intrinioSDK.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR API KEY";

var cryptoAPI = new intrinioSDK.CryptoApi();

var opts = { 
  'levels': null, // Number | The number of prices/levels to return on each side. For example, the max of 50 levels will return up to 50 bid prices and 50 ask prices.
  'pair': "btcusd", // String | Return the order book summary for the given Crypto Currency Pair.
  'exchange': "binance", // String | Return the order book summary for a Crypto Currency on the given Crypto Exchange.
  'currency': "BTC" // String | Return the order book summary for the given Crypto Currency.
};

cryptoAPI.getCryptoBookSummary(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});
```

[//]: # (END_CODE_EXAMPLE)

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **levels** | **Number**| The number of prices/levels to return on each side. For example, the max of 50 levels will return up to 50 bid prices and 50 ask prices. | [optional] 
 **pair** | **String**| Return the order book summary for the given Crypto Currency Pair. | [optional] 
 **exchange** | **String**| Return the order book summary for a Crypto Currency on the given Crypto Exchange. | [optional] 
 **currency** | **String**| Return the order book summary for the given Crypto Currency. | [optional] 

### Return type

[**ApiResponseCryptoBook**](ApiResponseCryptoBook.md)

[//]: # (END_OPERATION)


[//]: # (START_OPERTATION)

[//]: # (ENDPOINT:/crypto/currencies)

[//]: # (DOC_LINK:CryptoApi.md#getCryptoCurrencies)

<a name="getCryptoCurrencies"></a>
# **getCryptoCurrencies**

[**View Intrinio API Documentation**](https://docs.intrinio.com/documentation/api_v2/getCryptoCurrencies_v2)

> ApiResponseCryptoCurrencies getCryptoCurrencies(opts)

Crypto Currencies

Returns a list of Crypto Currencies for which prices are available.

### Example

[//]: # (START_CODE_EXAMPLE)

```javascript
var intrinioSDK = require('intrinio-sdk');
intrinioSDK.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR API KEY";

var cryptoAPI = new intrinioSDK.CryptoApi();

var opts = { 
  'exchange': "binance" // String | Returns Crypto Currencies traded on the given Crypto Exchange.
};

cryptoAPI.getCryptoCurrencies(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});
```

[//]: # (END_CODE_EXAMPLE)

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **exchange** | **String**| Returns Crypto Currencies traded on the given Crypto Exchange. | [optional] 

### Return type

[**ApiResponseCryptoCurrencies**](ApiResponseCryptoCurrencies.md)

[//]: # (END_OPERATION)


[//]: # (START_OPERTATION)

[//]: # (ENDPOINT:/crypto/exchanges)

[//]: # (DOC_LINK:CryptoApi.md#getCryptoExchanges)

<a name="getCryptoExchanges"></a>
# **getCryptoExchanges**

[**View Intrinio API Documentation**](https://docs.intrinio.com/documentation/api_v2/getCryptoExchanges_v2)

> ApiResponseCryptoExchanges getCryptoExchanges(opts)

Crypto Exchanges

Returns a list of Crypto Exchanges for which prices are available.

### Example

[//]: # (START_CODE_EXAMPLE)

```javascript
var intrinioSDK = require('intrinio-sdk');
intrinioSDK.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR API KEY";

var cryptoAPI = new intrinioSDK.CryptoApi();

var opts = { 
  'pair': "btcusd" // String | Filter exchanges based on whether or not prices are available on the exchange for the crypto currency pair.
};

cryptoAPI.getCryptoExchanges(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});
```

[//]: # (END_CODE_EXAMPLE)

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pair** | **String**| Filter exchanges based on whether or not prices are available on the exchange for the crypto currency pair. | [optional] 

### Return type

[**ApiResponseCryptoExchanges**](ApiResponseCryptoExchanges.md)

[//]: # (END_OPERATION)


[//]: # (START_OPERTATION)

[//]: # (ENDPOINT:/crypto/pairs)

[//]: # (DOC_LINK:CryptoApi.md#getCryptoPairs)

<a name="getCryptoPairs"></a>
# **getCryptoPairs**

[**View Intrinio API Documentation**](https://docs.intrinio.com/documentation/api_v2/getCryptoPairs_v2)

> ApiResponseCryptoPairs getCryptoPairs(opts)

Crypto Pairs

Returns a list of Crypto Currency Pairs for which data is available.

### Example

[//]: # (START_CODE_EXAMPLE)

```javascript
var intrinioSDK = require('intrinio-sdk');
intrinioSDK.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR API KEY";

var cryptoAPI = new intrinioSDK.CryptoApi();

var opts = { 
  'exchange': "binance", // String | Return pairs traded on the given Crypto Exchange.
  'currency': "BTC", // String | Return pairs with one side being the given Crypto Currency.
  'pageSize': 100, // Number | An integer greater than or equal to 1 for specifying the number of results on each page.
  'nextPage': null // String | Gets the next page of data from a previous API call
};

cryptoAPI.getCryptoPairs(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});
```

[//]: # (END_CODE_EXAMPLE)

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **exchange** | **String**| Return pairs traded on the given Crypto Exchange. | [optional] 
 **currency** | **String**| Return pairs with one side being the given Crypto Currency. | [optional] 
 **pageSize** | **Number**| An integer greater than or equal to 1 for specifying the number of results on each page. | [optional] [default to 100]
 **nextPage** | **String**| Gets the next page of data from a previous API call | [optional] 

### Return type

[**ApiResponseCryptoPairs**](ApiResponseCryptoPairs.md)

[//]: # (END_OPERATION)


[//]: # (START_OPERTATION)

[//]: # (ENDPOINT:/crypto/prices/technicals/adi)

[//]: # (DOC_LINK:CryptoApi.md#getCryptoPriceTechnicalsAdi)

<a name="getCryptoPriceTechnicalsAdi"></a>
# **getCryptoPriceTechnicalsAdi**

[**View Intrinio API Documentation**](https://docs.intrinio.com/documentation/api_v2/getCryptoPriceTechnicalsAdi_v2)

> ApiResponseCryptoAccumulationDistributionIndex getCryptoPriceTechnicalsAdi(opts)

Accumulation/Distribution Index

Returns the Accumulation/Distribution Index values of Crypto Currency Prices for a Crypto Currency Pair

### Example

[//]: # (START_CODE_EXAMPLE)

```javascript
var intrinioSDK = require('intrinio-sdk');
intrinioSDK.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR API KEY";

var cryptoAPI = new intrinioSDK.CryptoApi();

var opts = { 
  'pair': "btcusd", // String | Return technicals for the given Crypto Currency Pair.
  'exchange': "binance", // String | Return technicals for a Crypto Currency on the given Crypto Exchange.
  'currency': "BTC", // String | Return technicals for the given Crypto Currency.
  'timeframe': "d1", // String | The time interval for the prices when calculating technicals.
  'timezone': "UTC", // String | Return technical date/times in this timezone, also interpret start/end date/time parameters in this timezone.
  'startDate': null, // Date | Return technicals on or after this date.
  'startTime': null, // String | Return technicals at or after this time (24-hour).
  'endDate': null, // Date | Return technicals on or before this date.
  'endTime': null, // String | Return technicals at or before this time (24-hour).
  'pageSize': 100, // Number | An integer greater than or equal to 1 for specifying the number of results on each page.
  'nextPage': null // String | Gets the next page of data from a previous API call
};

cryptoAPI.getCryptoPriceTechnicalsAdi(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});
```

[//]: # (END_CODE_EXAMPLE)

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pair** | **String**| Return technicals for the given Crypto Currency Pair. | [optional] 
 **exchange** | **String**| Return technicals for a Crypto Currency on the given Crypto Exchange. | [optional] 
 **currency** | **String**| Return technicals for the given Crypto Currency. | [optional] 
 **timeframe** | **String**| The time interval for the prices when calculating technicals. | [optional] [default to d1]
 **timezone** | **String**| Return technical date/times in this timezone, also interpret start/end date/time parameters in this timezone. | [optional] [default to UTC]
 **startDate** | **Date**| Return technicals on or after this date. | [optional] 
 **startTime** | **String**| Return technicals at or after this time (24-hour). | [optional] 
 **endDate** | **Date**| Return technicals on or before this date. | [optional] 
 **endTime** | **String**| Return technicals at or before this time (24-hour). | [optional] 
 **pageSize** | **Number**| An integer greater than or equal to 1 for specifying the number of results on each page. | [optional] [default to 100]
 **nextPage** | **String**| Gets the next page of data from a previous API call | [optional] 

### Return type

[**ApiResponseCryptoAccumulationDistributionIndex**](ApiResponseCryptoAccumulationDistributionIndex.md)

[//]: # (END_OPERATION)


[//]: # (START_OPERTATION)

[//]: # (ENDPOINT:/crypto/prices/technicals/adtv)

[//]: # (DOC_LINK:CryptoApi.md#getCryptoPriceTechnicalsAdtv)

<a name="getCryptoPriceTechnicalsAdtv"></a>
# **getCryptoPriceTechnicalsAdtv**

[**View Intrinio API Documentation**](https://docs.intrinio.com/documentation/api_v2/getCryptoPriceTechnicalsAdtv_v2)

> ApiResponseCryptoAverageDailyTradingVolume getCryptoPriceTechnicalsAdtv(opts)

Average Daily Trading Volume

Returns the Average Daily Trading Volume values of Crypto Currency Prices for a Crypto Currency Pair

### Example

[//]: # (START_CODE_EXAMPLE)

```javascript
var intrinioSDK = require('intrinio-sdk');
intrinioSDK.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR API KEY";

var cryptoAPI = new intrinioSDK.CryptoApi();

var opts = { 
  'pair': "btcusd", // String | Return technicals for the given Crypto Currency Pair.
  'exchange': "binance", // String | Return technicals for a Crypto Currency on the given Crypto Exchange.
  'currency': "BTC", // String | Return technicals for the given Crypto Currency.
  'period': 22, // Number | The number of observations, per period, to calculate Average Daily Trading Volume.
  'timeframe': "d1", // String | The time interval for the prices when calculating technicals.
  'timezone': "UTC", // String | Return technical date/times in this timezone, also interpret start/end date/time parameters in this timezone.
  'startDate': null, // Date | Return technicals on or after this date.
  'startTime': null, // String | Return technicals at or after this time (24-hour).
  'endDate': null, // Date | Return technicals on or before this date.
  'endTime': null, // String | Return technicals at or before this time (24-hour).
  'pageSize': 100, // Number | An integer greater than or equal to 1 for specifying the number of results on each page.
  'nextPage': null // String | Gets the next page of data from a previous API call
};

cryptoAPI.getCryptoPriceTechnicalsAdtv(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});
```

[//]: # (END_CODE_EXAMPLE)

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pair** | **String**| Return technicals for the given Crypto Currency Pair. | [optional] 
 **exchange** | **String**| Return technicals for a Crypto Currency on the given Crypto Exchange. | [optional] 
 **currency** | **String**| Return technicals for the given Crypto Currency. | [optional] 
 **period** | **Number**| The number of observations, per period, to calculate Average Daily Trading Volume. | [optional] [default to 22]
 **timeframe** | **String**| The time interval for the prices when calculating technicals. | [optional] [default to d1]
 **timezone** | **String**| Return technical date/times in this timezone, also interpret start/end date/time parameters in this timezone. | [optional] [default to UTC]
 **startDate** | **Date**| Return technicals on or after this date. | [optional] 
 **startTime** | **String**| Return technicals at or after this time (24-hour). | [optional] 
 **endDate** | **Date**| Return technicals on or before this date. | [optional] 
 **endTime** | **String**| Return technicals at or before this time (24-hour). | [optional] 
 **pageSize** | **Number**| An integer greater than or equal to 1 for specifying the number of results on each page. | [optional] [default to 100]
 **nextPage** | **String**| Gets the next page of data from a previous API call | [optional] 

### Return type

[**ApiResponseCryptoAverageDailyTradingVolume**](ApiResponseCryptoAverageDailyTradingVolume.md)

[//]: # (END_OPERATION)


[//]: # (START_OPERTATION)

[//]: # (ENDPOINT:/crypto/prices/technicals/adx)

[//]: # (DOC_LINK:CryptoApi.md#getCryptoPriceTechnicalsAdx)

<a name="getCryptoPriceTechnicalsAdx"></a>
# **getCryptoPriceTechnicalsAdx**

[**View Intrinio API Documentation**](https://docs.intrinio.com/documentation/api_v2/getCryptoPriceTechnicalsAdx_v2)

> ApiResponseCryptoAverageDirectionalIndex getCryptoPriceTechnicalsAdx(opts)

Average Directional Index

Returns the Average Directional Index values of Crypto Currency Prices for a Crypto Currency Pair

### Example

[//]: # (START_CODE_EXAMPLE)

```javascript
var intrinioSDK = require('intrinio-sdk');
intrinioSDK.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR API KEY";

var cryptoAPI = new intrinioSDK.CryptoApi();

var opts = { 
  'pair': "btcusd", // String | Return technicals for the given Crypto Currency Pair.
  'exchange': "binance", // String | Return technicals for a Crypto Currency on the given Crypto Exchange.
  'currency': "BTC", // String | Return technicals for the given Crypto Currency.
  'period': 22, // Number | The number of observations, per period, to calculate Average Directional Index.
  'timeframe': "d1", // String | The time interval for the prices when calculating technicals.
  'timezone': "UTC", // String | Return technical date/times in this timezone, also interpret start/end date/time parameters in this timezone.
  'startDate': null, // Date | Return technicals on or after this date.
  'startTime': null, // String | Return technicals at or after this time (24-hour).
  'endDate': null, // Date | Return technicals on or before this date.
  'endTime': null, // String | Return technicals at or before this time (24-hour).
  'pageSize': 100, // Number | An integer greater than or equal to 1 for specifying the number of results on each page.
  'nextPage': null // String | Gets the next page of data from a previous API call
};

cryptoAPI.getCryptoPriceTechnicalsAdx(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});
```

[//]: # (END_CODE_EXAMPLE)

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pair** | **String**| Return technicals for the given Crypto Currency Pair. | [optional] 
 **exchange** | **String**| Return technicals for a Crypto Currency on the given Crypto Exchange. | [optional] 
 **currency** | **String**| Return technicals for the given Crypto Currency. | [optional] 
 **period** | **Number**| The number of observations, per period, to calculate Average Directional Index. | [optional] [default to 22]
 **timeframe** | **String**| The time interval for the prices when calculating technicals. | [optional] [default to d1]
 **timezone** | **String**| Return technical date/times in this timezone, also interpret start/end date/time parameters in this timezone. | [optional] [default to UTC]
 **startDate** | **Date**| Return technicals on or after this date. | [optional] 
 **startTime** | **String**| Return technicals at or after this time (24-hour). | [optional] 
 **endDate** | **Date**| Return technicals on or before this date. | [optional] 
 **endTime** | **String**| Return technicals at or before this time (24-hour). | [optional] 
 **pageSize** | **Number**| An integer greater than or equal to 1 for specifying the number of results on each page. | [optional] [default to 100]
 **nextPage** | **String**| Gets the next page of data from a previous API call | [optional] 

### Return type

[**ApiResponseCryptoAverageDirectionalIndex**](ApiResponseCryptoAverageDirectionalIndex.md)

[//]: # (END_OPERATION)


[//]: # (START_OPERTATION)

[//]: # (ENDPOINT:/crypto/prices/technicals/ao)

[//]: # (DOC_LINK:CryptoApi.md#getCryptoPriceTechnicalsAo)

<a name="getCryptoPriceTechnicalsAo"></a>
# **getCryptoPriceTechnicalsAo**

[**View Intrinio API Documentation**](https://docs.intrinio.com/documentation/api_v2/getCryptoPriceTechnicalsAo_v2)

> ApiResponseCryptoAwesomeOscillator getCryptoPriceTechnicalsAo(opts)

Awesome Oscillator

Returns the Awesome Oscillator values of Crypto Currency Prices for a Crypto Currency Pair

### Example

[//]: # (START_CODE_EXAMPLE)

```javascript
var intrinioSDK = require('intrinio-sdk');
intrinioSDK.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR API KEY";

var cryptoAPI = new intrinioSDK.CryptoApi();

var opts = { 
  'pair': "btcusd", // String | Return technicals for the given Crypto Currency Pair.
  'exchange': "binance", // String | Return technicals for a Crypto Currency on the given Crypto Exchange.
  'currency': "BTC", // String | Return technicals for the given Crypto Currency.
  'shortPeriod': 5, // Number | The number of observations, per period, to calculate short period Simple Moving Average of the Awesome Oscillator.
  'longPeriod': 34, // Number | The number of observations, per period, to calculate long period Simple Moving Average of the Awesome Oscillator.
  'timeframe': "d1", // String | The time interval for the prices when calculating technicals.
  'timezone': "UTC", // String | Return technical date/times in this timezone, also interpret start/end date/time parameters in this timezone.
  'startDate': null, // Date | Return technicals on or after this date.
  'startTime': null, // String | Return technicals at or after this time (24-hour).
  'endDate': null, // Date | Return technicals on or before this date.
  'endTime': null, // String | Return technicals at or before this time (24-hour).
  'pageSize': 100, // Number | An integer greater than or equal to 1 for specifying the number of results on each page.
  'nextPage': null // String | Gets the next page of data from a previous API call
};

cryptoAPI.getCryptoPriceTechnicalsAo(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});
```

[//]: # (END_CODE_EXAMPLE)

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pair** | **String**| Return technicals for the given Crypto Currency Pair. | [optional] 
 **exchange** | **String**| Return technicals for a Crypto Currency on the given Crypto Exchange. | [optional] 
 **currency** | **String**| Return technicals for the given Crypto Currency. | [optional] 
 **shortPeriod** | **Number**| The number of observations, per period, to calculate short period Simple Moving Average of the Awesome Oscillator. | [optional] [default to 5]
 **longPeriod** | **Number**| The number of observations, per period, to calculate long period Simple Moving Average of the Awesome Oscillator. | [optional] [default to 34]
 **timeframe** | **String**| The time interval for the prices when calculating technicals. | [optional] [default to d1]
 **timezone** | **String**| Return technical date/times in this timezone, also interpret start/end date/time parameters in this timezone. | [optional] [default to UTC]
 **startDate** | **Date**| Return technicals on or after this date. | [optional] 
 **startTime** | **String**| Return technicals at or after this time (24-hour). | [optional] 
 **endDate** | **Date**| Return technicals on or before this date. | [optional] 
 **endTime** | **String**| Return technicals at or before this time (24-hour). | [optional] 
 **pageSize** | **Number**| An integer greater than or equal to 1 for specifying the number of results on each page. | [optional] [default to 100]
 **nextPage** | **String**| Gets the next page of data from a previous API call | [optional] 

### Return type

[**ApiResponseCryptoAwesomeOscillator**](ApiResponseCryptoAwesomeOscillator.md)

[//]: # (END_OPERATION)


[//]: # (START_OPERTATION)

[//]: # (ENDPOINT:/crypto/prices/technicals/atr)

[//]: # (DOC_LINK:CryptoApi.md#getCryptoPriceTechnicalsAtr)

<a name="getCryptoPriceTechnicalsAtr"></a>
# **getCryptoPriceTechnicalsAtr**

[**View Intrinio API Documentation**](https://docs.intrinio.com/documentation/api_v2/getCryptoPriceTechnicalsAtr_v2)

> ApiResponseCryptoAverageTrueRange getCryptoPriceTechnicalsAtr(opts)

Average True Range

Returns the Average True Range values of Crypto Currency Prices for Crypto Currency Pair

### Example

[//]: # (START_CODE_EXAMPLE)

```javascript
var intrinioSDK = require('intrinio-sdk');
intrinioSDK.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR API KEY";

var cryptoAPI = new intrinioSDK.CryptoApi();

var opts = { 
  'pair': "btcusd", // String | Return technicals for the given Crypto Currency Pair.
  'exchange': "binance", // String | Return technicals for a Crypto Currency on the given Crypto Exchange.
  'currency': "BTC", // String | Return technicals for the given Crypto Currency.
  'period': 22, // Number | The number of observations, per period, to calculate Average True Range.
  'timeframe': "d1", // String | The time interval for the prices when calculating technicals.
  'timezone': "UTC", // String | Return technical date/times in this timezone, also interpret start/end date/time parameters in this timezone.
  'startDate': null, // Date | Return technicals on or after this date.
  'startTime': null, // String | Return technicals at or after this time (24-hour).
  'endDate': null, // Date | Return technicals on or before this date.
  'endTime': null, // String | Return technicals at or before this time (24-hour).
  'pageSize': 100, // Number | An integer greater than or equal to 1 for specifying the number of results on each page.
  'nextPage': null // String | Gets the next page of data from a previous API call
};

cryptoAPI.getCryptoPriceTechnicalsAtr(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});
```

[//]: # (END_CODE_EXAMPLE)

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pair** | **String**| Return technicals for the given Crypto Currency Pair. | [optional] 
 **exchange** | **String**| Return technicals for a Crypto Currency on the given Crypto Exchange. | [optional] 
 **currency** | **String**| Return technicals for the given Crypto Currency. | [optional] 
 **period** | **Number**| The number of observations, per period, to calculate Average True Range. | [optional] [default to 22]
 **timeframe** | **String**| The time interval for the prices when calculating technicals. | [optional] [default to d1]
 **timezone** | **String**| Return technical date/times in this timezone, also interpret start/end date/time parameters in this timezone. | [optional] [default to UTC]
 **startDate** | **Date**| Return technicals on or after this date. | [optional] 
 **startTime** | **String**| Return technicals at or after this time (24-hour). | [optional] 
 **endDate** | **Date**| Return technicals on or before this date. | [optional] 
 **endTime** | **String**| Return technicals at or before this time (24-hour). | [optional] 
 **pageSize** | **Number**| An integer greater than or equal to 1 for specifying the number of results on each page. | [optional] [default to 100]
 **nextPage** | **String**| Gets the next page of data from a previous API call | [optional] 

### Return type

[**ApiResponseCryptoAverageTrueRange**](ApiResponseCryptoAverageTrueRange.md)

[//]: # (END_OPERATION)


[//]: # (START_OPERTATION)

[//]: # (ENDPOINT:/crypto/prices/technicals/bb)

[//]: # (DOC_LINK:CryptoApi.md#getCryptoPriceTechnicalsBb)

<a name="getCryptoPriceTechnicalsBb"></a>
# **getCryptoPriceTechnicalsBb**

[**View Intrinio API Documentation**](https://docs.intrinio.com/documentation/api_v2/getCryptoPriceTechnicalsBb_v2)

> ApiResponseCryptoBollingerBands getCryptoPriceTechnicalsBb(opts)

Bollinger Bands

Returns the Bollinger Bands values of Crypto Currency Prices for a Crypto Currency Pair

### Example

[//]: # (START_CODE_EXAMPLE)

```javascript
var intrinioSDK = require('intrinio-sdk');
intrinioSDK.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR API KEY";

var cryptoAPI = new intrinioSDK.CryptoApi();

var opts = { 
  'pair': "btcusd", // String | Return technicals for the given Crypto Currency Pair.
  'exchange': "binance", // String | Return technicals for a Crypto Currency on the given Crypto Exchange.
  'currency': "BTC", // String | Return technicals for the given Crypto Currency.
  'period': 20, // Number | The number of observations, per period, to calculate Bollinger Bands.
  'standardDeviations': 2.0, // Number | The number of standard deviations to calculate the upper and lower bands of the Bollinger Bands.
  'priceKey': "close", // String | The Crypto Currency Price field to use when calculating Bollinger Bands.
  'timeframe': "d1", // String | The time interval for the prices when calculating technicals.
  'timezone': "UTC", // String | Return technical date/times in this timezone, also interpret start/end date/time parameters in this timezone.
  'startDate': null, // Date | Return technicals on or after this date.
  'startTime': null, // String | Return technicals at or after this time (24-hour).
  'endDate': null, // Date | Return technicals on or before this date.
  'endTime': null, // String | Return technicals at or before this time (24-hour).
  'pageSize': 100, // Number | An integer greater than or equal to 1 for specifying the number of results on each page.
  'nextPage': null // String | Gets the next page of data from a previous API call
};

cryptoAPI.getCryptoPriceTechnicalsBb(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});
```

[//]: # (END_CODE_EXAMPLE)

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pair** | **String**| Return technicals for the given Crypto Currency Pair. | [optional] 
 **exchange** | **String**| Return technicals for a Crypto Currency on the given Crypto Exchange. | [optional] 
 **currency** | **String**| Return technicals for the given Crypto Currency. | [optional] 
 **period** | **Number**| The number of observations, per period, to calculate Bollinger Bands. | [optional] [default to 20]
 **standardDeviations** | **Number**| The number of standard deviations to calculate the upper and lower bands of the Bollinger Bands. | [optional] [default to 2.0]
 **priceKey** | **String**| The Crypto Currency Price field to use when calculating Bollinger Bands. | [optional] [default to close]
 **timeframe** | **String**| The time interval for the prices when calculating technicals. | [optional] [default to d1]
 **timezone** | **String**| Return technical date/times in this timezone, also interpret start/end date/time parameters in this timezone. | [optional] [default to UTC]
 **startDate** | **Date**| Return technicals on or after this date. | [optional] 
 **startTime** | **String**| Return technicals at or after this time (24-hour). | [optional] 
 **endDate** | **Date**| Return technicals on or before this date. | [optional] 
 **endTime** | **String**| Return technicals at or before this time (24-hour). | [optional] 
 **pageSize** | **Number**| An integer greater than or equal to 1 for specifying the number of results on each page. | [optional] [default to 100]
 **nextPage** | **String**| Gets the next page of data from a previous API call | [optional] 

### Return type

[**ApiResponseCryptoBollingerBands**](ApiResponseCryptoBollingerBands.md)

[//]: # (END_OPERATION)


[//]: # (START_OPERTATION)

[//]: # (ENDPOINT:/crypto/prices/technicals/cci)

[//]: # (DOC_LINK:CryptoApi.md#getCryptoPriceTechnicalsCci)

<a name="getCryptoPriceTechnicalsCci"></a>
# **getCryptoPriceTechnicalsCci**

[**View Intrinio API Documentation**](https://docs.intrinio.com/documentation/api_v2/getCryptoPriceTechnicalsCci_v2)

> ApiResponseCryptoCommodityChannelIndex getCryptoPriceTechnicalsCci(opts)

Commodity Channel Index

Returns the Commodity Channel Index values of Crypto Currency Prices for Crypto Currency Pair

### Example

[//]: # (START_CODE_EXAMPLE)

```javascript
var intrinioSDK = require('intrinio-sdk');
intrinioSDK.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR API KEY";

var cryptoAPI = new intrinioSDK.CryptoApi();

var opts = { 
  'pair': "btcusd", // String | Return technicals for the given Crypto Currency Pair.
  'exchange': "binance", // String | Return technicals for a Crypto Currency on the given Crypto Exchange.
  'currency': "BTC", // String | Return technicals for the given Crypto Currency.
  'period': 20, // Number | The number of observations, per period, to calculate Commodity Channel Index.
  'constant': 0.015, // Number | The number of observations, per period, to calculate Commodity Channel Index.
  'timeframe': "d1", // String | The time interval for the prices when calculating technicals.
  'timezone': "UTC", // String | Return technical date/times in this timezone, also interpret start/end date/time parameters in this timezone.
  'startDate': null, // Date | Return technicals on or after this date.
  'startTime': null, // String | Return technicals at or after this time (24-hour).
  'endDate': null, // Date | Return technicals on or before this date.
  'endTime': null, // String | Return technicals at or before this time (24-hour).
  'pageSize': 100, // Number | An integer greater than or equal to 1 for specifying the number of results on each page.
  'nextPage': null // String | Gets the next page of data from a previous API call
};

cryptoAPI.getCryptoPriceTechnicalsCci(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});
```

[//]: # (END_CODE_EXAMPLE)

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pair** | **String**| Return technicals for the given Crypto Currency Pair. | [optional] 
 **exchange** | **String**| Return technicals for a Crypto Currency on the given Crypto Exchange. | [optional] 
 **currency** | **String**| Return technicals for the given Crypto Currency. | [optional] 
 **period** | **Number**| The number of observations, per period, to calculate Commodity Channel Index. | [optional] [default to 20]
 **constant** | **Number**| The number of observations, per period, to calculate Commodity Channel Index. | [optional] [default to 0.015]
 **timeframe** | **String**| The time interval for the prices when calculating technicals. | [optional] [default to d1]
 **timezone** | **String**| Return technical date/times in this timezone, also interpret start/end date/time parameters in this timezone. | [optional] [default to UTC]
 **startDate** | **Date**| Return technicals on or after this date. | [optional] 
 **startTime** | **String**| Return technicals at or after this time (24-hour). | [optional] 
 **endDate** | **Date**| Return technicals on or before this date. | [optional] 
 **endTime** | **String**| Return technicals at or before this time (24-hour). | [optional] 
 **pageSize** | **Number**| An integer greater than or equal to 1 for specifying the number of results on each page. | [optional] [default to 100]
 **nextPage** | **String**| Gets the next page of data from a previous API call | [optional] 

### Return type

[**ApiResponseCryptoCommodityChannelIndex**](ApiResponseCryptoCommodityChannelIndex.md)

[//]: # (END_OPERATION)


[//]: # (START_OPERTATION)

[//]: # (ENDPOINT:/crypto/prices/technicals/cmf)

[//]: # (DOC_LINK:CryptoApi.md#getCryptoPriceTechnicalsCmf)

<a name="getCryptoPriceTechnicalsCmf"></a>
# **getCryptoPriceTechnicalsCmf**

[**View Intrinio API Documentation**](https://docs.intrinio.com/documentation/api_v2/getCryptoPriceTechnicalsCmf_v2)

> ApiResponseCryptoChaikinMoneyFlow getCryptoPriceTechnicalsCmf(opts)

Chaikin Money Flow

Returns the Chaikin Money Flow values of Crypto Currency Prices for a Crypto Currency Pair

### Example

[//]: # (START_CODE_EXAMPLE)

```javascript
var intrinioSDK = require('intrinio-sdk');
intrinioSDK.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR API KEY";

var cryptoAPI = new intrinioSDK.CryptoApi();

var opts = { 
  'pair': "btcusd", // String | Return technicals for the given Crypto Currency Pair.
  'exchange': "binance", // String | Return technicals for a Crypto Currency on the given Crypto Exchange.
  'currency': "BTC", // String | Return technicals for the given Crypto Currency.
  'period': 20, // Number | The number of observations, per period, to calculate Chaikin Money Flow.
  'timeframe': "d1", // String | The time interval for the prices when calculating technicals.
  'timezone': "UTC", // String | Return technical date/times in this timezone, also interpret start/end date/time parameters in this timezone.
  'startDate': null, // Date | Return technicals on or after this date.
  'startTime': null, // String | Return technicals at or after this time (24-hour).
  'endDate': null, // Date | Return technicals on or before this date.
  'endTime': null, // String | Return technicals at or before this time (24-hour).
  'pageSize': 100, // Number | An integer greater than or equal to 1 for specifying the number of results on each page.
  'nextPage': null // String | Gets the next page of data from a previous API call
};

cryptoAPI.getCryptoPriceTechnicalsCmf(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});
```

[//]: # (END_CODE_EXAMPLE)

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pair** | **String**| Return technicals for the given Crypto Currency Pair. | [optional] 
 **exchange** | **String**| Return technicals for a Crypto Currency on the given Crypto Exchange. | [optional] 
 **currency** | **String**| Return technicals for the given Crypto Currency. | [optional] 
 **period** | **Number**| The number of observations, per period, to calculate Chaikin Money Flow. | [optional] [default to 20]
 **timeframe** | **String**| The time interval for the prices when calculating technicals. | [optional] [default to d1]
 **timezone** | **String**| Return technical date/times in this timezone, also interpret start/end date/time parameters in this timezone. | [optional] [default to UTC]
 **startDate** | **Date**| Return technicals on or after this date. | [optional] 
 **startTime** | **String**| Return technicals at or after this time (24-hour). | [optional] 
 **endDate** | **Date**| Return technicals on or before this date. | [optional] 
 **endTime** | **String**| Return technicals at or before this time (24-hour). | [optional] 
 **pageSize** | **Number**| An integer greater than or equal to 1 for specifying the number of results on each page. | [optional] [default to 100]
 **nextPage** | **String**| Gets the next page of data from a previous API call | [optional] 

### Return type

[**ApiResponseCryptoChaikinMoneyFlow**](ApiResponseCryptoChaikinMoneyFlow.md)

[//]: # (END_OPERATION)


[//]: # (START_OPERTATION)

[//]: # (ENDPOINT:/crypto/prices/technicals/dc)

[//]: # (DOC_LINK:CryptoApi.md#getCryptoPriceTechnicalsDc)

<a name="getCryptoPriceTechnicalsDc"></a>
# **getCryptoPriceTechnicalsDc**

[**View Intrinio API Documentation**](https://docs.intrinio.com/documentation/api_v2/getCryptoPriceTechnicalsDc_v2)

> ApiResponseCryptoDonchianChannel getCryptoPriceTechnicalsDc(opts)

Donchian Channel

Returns the Donchian Channel values of Crypto Currency Prices for a Crypto Currency Pair

### Example

[//]: # (START_CODE_EXAMPLE)

```javascript
var intrinioSDK = require('intrinio-sdk');
intrinioSDK.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR API KEY";

var cryptoAPI = new intrinioSDK.CryptoApi();

var opts = { 
  'pair': "btcusd", // String | Return technicals for the given Crypto Currency Pair.
  'exchange': "binance", // String | Return technicals for a Crypto Currency on the given Crypto Exchange.
  'currency': "BTC", // String | Return technicals for the given Crypto Currency.
  'period': 20, // Number | The number of observations, per period, to calculate Donchian Channel.
  'priceKey': "close", // String | The Crypto Currency Price field to use when calculating Donchian Channel.
  'timeframe': "d1", // String | The time interval for the prices when calculating technicals.
  'timezone': "UTC", // String | Return technical date/times in this timezone, also interpret start/end date/time parameters in this timezone.
  'startDate': null, // Date | Return technicals on or after this date.
  'startTime': null, // String | Return technicals at or after this time (24-hour).
  'endDate': null, // Date | Return technicals on or before this date.
  'endTime': null, // String | Return technicals at or before this time (24-hour).
  'pageSize': 100, // Number | An integer greater than or equal to 1 for specifying the number of results on each page.
  'nextPage': null // String | Gets the next page of data from a previous API call
};

cryptoAPI.getCryptoPriceTechnicalsDc(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});
```

[//]: # (END_CODE_EXAMPLE)

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pair** | **String**| Return technicals for the given Crypto Currency Pair. | [optional] 
 **exchange** | **String**| Return technicals for a Crypto Currency on the given Crypto Exchange. | [optional] 
 **currency** | **String**| Return technicals for the given Crypto Currency. | [optional] 
 **period** | **Number**| The number of observations, per period, to calculate Donchian Channel. | [optional] [default to 20]
 **priceKey** | **String**| The Crypto Currency Price field to use when calculating Donchian Channel. | [optional] [default to close]
 **timeframe** | **String**| The time interval for the prices when calculating technicals. | [optional] [default to d1]
 **timezone** | **String**| Return technical date/times in this timezone, also interpret start/end date/time parameters in this timezone. | [optional] [default to UTC]
 **startDate** | **Date**| Return technicals on or after this date. | [optional] 
 **startTime** | **String**| Return technicals at or after this time (24-hour). | [optional] 
 **endDate** | **Date**| Return technicals on or before this date. | [optional] 
 **endTime** | **String**| Return technicals at or before this time (24-hour). | [optional] 
 **pageSize** | **Number**| An integer greater than or equal to 1 for specifying the number of results on each page. | [optional] [default to 100]
 **nextPage** | **String**| Gets the next page of data from a previous API call | [optional] 

### Return type

[**ApiResponseCryptoDonchianChannel**](ApiResponseCryptoDonchianChannel.md)

[//]: # (END_OPERATION)


[//]: # (START_OPERTATION)

[//]: # (ENDPOINT:/crypto/prices/technicals/dpo)

[//]: # (DOC_LINK:CryptoApi.md#getCryptoPriceTechnicalsDpo)

<a name="getCryptoPriceTechnicalsDpo"></a>
# **getCryptoPriceTechnicalsDpo**

[**View Intrinio API Documentation**](https://docs.intrinio.com/documentation/api_v2/getCryptoPriceTechnicalsDpo_v2)

> ApiResponseCryptoDetrendedPriceOscillator getCryptoPriceTechnicalsDpo(opts)

Detrended Price Oscillator

Returns the Detrended Price Oscillator values of Crypto Currency Prices for a Crypto Currency Pair

### Example

[//]: # (START_CODE_EXAMPLE)

```javascript
var intrinioSDK = require('intrinio-sdk');
intrinioSDK.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR API KEY";

var cryptoAPI = new intrinioSDK.CryptoApi();

var opts = { 
  'pair': "btcusd", // String | Return technicals for the given Crypto Currency Pair.
  'exchange': "binance", // String | Return technicals for a Crypto Currency on the given Crypto Exchange.
  'currency': "BTC", // String | Return technicals for the given Crypto Currency.
  'period': 20, // Number | The number of observations, per period, to calculate Detrended Price Oscillator.
  'priceKey': "close", // String | The Crypto Currency Price field to use when calculating Detrended Price Oscillator.
  'timeframe': "d1", // String | The time interval for the prices when calculating technicals.
  'timezone': "UTC", // String | Return technical date/times in this timezone, also interpret start/end date/time parameters in this timezone.
  'startDate': null, // Date | Return technicals on or after this date.
  'startTime': null, // String | Return technicals at or after this time (24-hour).
  'endDate': null, // Date | Return technicals on or before this date.
  'endTime': null, // String | Return technicals at or before this time (24-hour).
  'pageSize': 100, // Number | An integer greater than or equal to 1 for specifying the number of results on each page.
  'nextPage': null // String | Gets the next page of data from a previous API call
};

cryptoAPI.getCryptoPriceTechnicalsDpo(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});
```

[//]: # (END_CODE_EXAMPLE)

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pair** | **String**| Return technicals for the given Crypto Currency Pair. | [optional] 
 **exchange** | **String**| Return technicals for a Crypto Currency on the given Crypto Exchange. | [optional] 
 **currency** | **String**| Return technicals for the given Crypto Currency. | [optional] 
 **period** | **Number**| The number of observations, per period, to calculate Detrended Price Oscillator. | [optional] [default to 20]
 **priceKey** | **String**| The Crypto Currency Price field to use when calculating Detrended Price Oscillator. | [optional] [default to close]
 **timeframe** | **String**| The time interval for the prices when calculating technicals. | [optional] [default to d1]
 **timezone** | **String**| Return technical date/times in this timezone, also interpret start/end date/time parameters in this timezone. | [optional] [default to UTC]
 **startDate** | **Date**| Return technicals on or after this date. | [optional] 
 **startTime** | **String**| Return technicals at or after this time (24-hour). | [optional] 
 **endDate** | **Date**| Return technicals on or before this date. | [optional] 
 **endTime** | **String**| Return technicals at or before this time (24-hour). | [optional] 
 **pageSize** | **Number**| An integer greater than or equal to 1 for specifying the number of results on each page. | [optional] [default to 100]
 **nextPage** | **String**| Gets the next page of data from a previous API call | [optional] 

### Return type

[**ApiResponseCryptoDetrendedPriceOscillator**](ApiResponseCryptoDetrendedPriceOscillator.md)

[//]: # (END_OPERATION)


[//]: # (START_OPERTATION)

[//]: # (ENDPOINT:/crypto/prices/technicals/eom)

[//]: # (DOC_LINK:CryptoApi.md#getCryptoPriceTechnicalsEom)

<a name="getCryptoPriceTechnicalsEom"></a>
# **getCryptoPriceTechnicalsEom**

[**View Intrinio API Documentation**](https://docs.intrinio.com/documentation/api_v2/getCryptoPriceTechnicalsEom_v2)

> ApiResponseCryptoEaseOfMovement getCryptoPriceTechnicalsEom(opts)

Ease of Movement

Returns the Ease of Movement values of Crypto Currency Prices for a Crypto Currency Pair

### Example

[//]: # (START_CODE_EXAMPLE)

```javascript
var intrinioSDK = require('intrinio-sdk');
intrinioSDK.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR API KEY";

var cryptoAPI = new intrinioSDK.CryptoApi();

var opts = { 
  'pair': "btcusd", // String | Return technicals for the given Crypto Currency Pair.
  'exchange': "binance", // String | Return technicals for a Crypto Currency on the given Crypto Exchange.
  'currency': "BTC", // String | Return technicals for the given Crypto Currency.
  'period': 20, // Number | The number of observations, per period, to calculate Ease of Movement.
  'timeframe': "d1", // String | The time interval for the prices when calculating technicals.
  'timezone': "UTC", // String | Return technical date/times in this timezone, also interpret start/end date/time parameters in this timezone.
  'startDate': null, // Date | Return technicals on or after this date.
  'startTime': null, // String | Return technicals at or after this time (24-hour).
  'endDate': null, // Date | Return technicals on or before this date.
  'endTime': null, // String | Return technicals at or before this time (24-hour).
  'pageSize': 100, // Number | An integer greater than or equal to 1 for specifying the number of results on each page.
  'nextPage': null // String | Gets the next page of data from a previous API call
};

cryptoAPI.getCryptoPriceTechnicalsEom(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});
```

[//]: # (END_CODE_EXAMPLE)

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pair** | **String**| Return technicals for the given Crypto Currency Pair. | [optional] 
 **exchange** | **String**| Return technicals for a Crypto Currency on the given Crypto Exchange. | [optional] 
 **currency** | **String**| Return technicals for the given Crypto Currency. | [optional] 
 **period** | **Number**| The number of observations, per period, to calculate Ease of Movement. | [optional] [default to 20]
 **timeframe** | **String**| The time interval for the prices when calculating technicals. | [optional] [default to d1]
 **timezone** | **String**| Return technical date/times in this timezone, also interpret start/end date/time parameters in this timezone. | [optional] [default to UTC]
 **startDate** | **Date**| Return technicals on or after this date. | [optional] 
 **startTime** | **String**| Return technicals at or after this time (24-hour). | [optional] 
 **endDate** | **Date**| Return technicals on or before this date. | [optional] 
 **endTime** | **String**| Return technicals at or before this time (24-hour). | [optional] 
 **pageSize** | **Number**| An integer greater than or equal to 1 for specifying the number of results on each page. | [optional] [default to 100]
 **nextPage** | **String**| Gets the next page of data from a previous API call | [optional] 

### Return type

[**ApiResponseCryptoEaseOfMovement**](ApiResponseCryptoEaseOfMovement.md)

[//]: # (END_OPERATION)


[//]: # (START_OPERTATION)

[//]: # (ENDPOINT:/crypto/prices/technicals/fi)

[//]: # (DOC_LINK:CryptoApi.md#getCryptoPriceTechnicalsFi)

<a name="getCryptoPriceTechnicalsFi"></a>
# **getCryptoPriceTechnicalsFi**

[**View Intrinio API Documentation**](https://docs.intrinio.com/documentation/api_v2/getCryptoPriceTechnicalsFi_v2)

> ApiResponseCryptoForceIndex getCryptoPriceTechnicalsFi(opts)

Force Index

Returns the Force Index values of Crypto Currency Prices for a Crypto Currency Pair

### Example

[//]: # (START_CODE_EXAMPLE)

```javascript
var intrinioSDK = require('intrinio-sdk');
intrinioSDK.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR API KEY";

var cryptoAPI = new intrinioSDK.CryptoApi();

var opts = { 
  'pair': "btcusd", // String | Return technicals for the given Crypto Currency Pair.
  'exchange': "binance", // String | Return technicals for a Crypto Currency on the given Crypto Exchange.
  'currency': "BTC", // String | Return technicals for the given Crypto Currency.
  'timeframe': "d1", // String | The time interval for the prices when calculating technicals.
  'timezone': "UTC", // String | Return technical date/times in this timezone, also interpret start/end date/time parameters in this timezone.
  'startDate': null, // Date | Return technicals on or after this date.
  'startTime': null, // String | Return technicals at or after this time (24-hour).
  'endDate': null, // Date | Return technicals on or before this date.
  'endTime': null, // String | Return technicals at or before this time (24-hour).
  'pageSize': 100, // Number | An integer greater than or equal to 1 for specifying the number of results on each page.
  'nextPage': null // String | Gets the next page of data from a previous API call
};

cryptoAPI.getCryptoPriceTechnicalsFi(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});
```

[//]: # (END_CODE_EXAMPLE)

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pair** | **String**| Return technicals for the given Crypto Currency Pair. | [optional] 
 **exchange** | **String**| Return technicals for a Crypto Currency on the given Crypto Exchange. | [optional] 
 **currency** | **String**| Return technicals for the given Crypto Currency. | [optional] 
 **timeframe** | **String**| The time interval for the prices when calculating technicals. | [optional] [default to d1]
 **timezone** | **String**| Return technical date/times in this timezone, also interpret start/end date/time parameters in this timezone. | [optional] [default to UTC]
 **startDate** | **Date**| Return technicals on or after this date. | [optional] 
 **startTime** | **String**| Return technicals at or after this time (24-hour). | [optional] 
 **endDate** | **Date**| Return technicals on or before this date. | [optional] 
 **endTime** | **String**| Return technicals at or before this time (24-hour). | [optional] 
 **pageSize** | **Number**| An integer greater than or equal to 1 for specifying the number of results on each page. | [optional] [default to 100]
 **nextPage** | **String**| Gets the next page of data from a previous API call | [optional] 

### Return type

[**ApiResponseCryptoForceIndex**](ApiResponseCryptoForceIndex.md)

[//]: # (END_OPERATION)


[//]: # (START_OPERTATION)

[//]: # (ENDPOINT:/crypto/prices/technicals/ichimoku)

[//]: # (DOC_LINK:CryptoApi.md#getCryptoPriceTechnicalsIchimoku)

<a name="getCryptoPriceTechnicalsIchimoku"></a>
# **getCryptoPriceTechnicalsIchimoku**

[**View Intrinio API Documentation**](https://docs.intrinio.com/documentation/api_v2/getCryptoPriceTechnicalsIchimoku_v2)

> ApiResponseCryptoIchimokuKinkoHyo getCryptoPriceTechnicalsIchimoku(opts)

Ichimoku Kinko Hyo

Returns the Ichimoku Kinko Hyo values of Crypto Currency Prices for a Crypto Currency Pair

### Example

[//]: # (START_CODE_EXAMPLE)

```javascript
var intrinioSDK = require('intrinio-sdk');
intrinioSDK.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR API KEY";

var cryptoAPI = new intrinioSDK.CryptoApi();

var opts = { 
  'pair': "btcusd", // String | Return technicals for the given Crypto Currency Pair.
  'exchange': "binance", // String | Return technicals for a Crypto Currency on the given Crypto Exchange.
  'currency': "BTC", // String | Return technicals for the given Crypto Currency.
  'lowPeriod': 9, // Number | The number of observations, per period, to calculate Tenkan Sen (Conversion Line) of Ichimoku Kinko Hyo.
  'mediumPeriod': 26, // Number | The number of observations, per period, to calculate Kijun Sen (Base Line), Senkou Span A (Leading Span A), and Chikou Span (Lagging Span) of Ichimoku Kinko Hyo.
  'highPeriod': 52, // Number | The number of observations, per period, to calculate Senkou Span B (Leading Span B) of Ichimoku Kinko Hyo.
  'timeframe': "d1", // String | The time interval for the prices when calculating technicals.
  'timezone': "UTC", // String | Return technical date/times in this timezone, also interpret start/end date/time parameters in this timezone.
  'startDate': null, // Date | Return technicals on or after this date.
  'startTime': null, // String | Return technicals at or after this time (24-hour).
  'endDate': null, // Date | Return technicals on or before this date.
  'endTime': null, // String | Return technicals at or before this time (24-hour).
  'pageSize': 100, // Number | An integer greater than or equal to 1 for specifying the number of results on each page.
  'nextPage': null // String | Gets the next page of data from a previous API call
};

cryptoAPI.getCryptoPriceTechnicalsIchimoku(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});
```

[//]: # (END_CODE_EXAMPLE)

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pair** | **String**| Return technicals for the given Crypto Currency Pair. | [optional] 
 **exchange** | **String**| Return technicals for a Crypto Currency on the given Crypto Exchange. | [optional] 
 **currency** | **String**| Return technicals for the given Crypto Currency. | [optional] 
 **lowPeriod** | **Number**| The number of observations, per period, to calculate Tenkan Sen (Conversion Line) of Ichimoku Kinko Hyo. | [optional] [default to 9]
 **mediumPeriod** | **Number**| The number of observations, per period, to calculate Kijun Sen (Base Line), Senkou Span A (Leading Span A), and Chikou Span (Lagging Span) of Ichimoku Kinko Hyo. | [optional] [default to 26]
 **highPeriod** | **Number**| The number of observations, per period, to calculate Senkou Span B (Leading Span B) of Ichimoku Kinko Hyo. | [optional] [default to 52]
 **timeframe** | **String**| The time interval for the prices when calculating technicals. | [optional] [default to d1]
 **timezone** | **String**| Return technical date/times in this timezone, also interpret start/end date/time parameters in this timezone. | [optional] [default to UTC]
 **startDate** | **Date**| Return technicals on or after this date. | [optional] 
 **startTime** | **String**| Return technicals at or after this time (24-hour). | [optional] 
 **endDate** | **Date**| Return technicals on or before this date. | [optional] 
 **endTime** | **String**| Return technicals at or before this time (24-hour). | [optional] 
 **pageSize** | **Number**| An integer greater than or equal to 1 for specifying the number of results on each page. | [optional] [default to 100]
 **nextPage** | **String**| Gets the next page of data from a previous API call | [optional] 

### Return type

[**ApiResponseCryptoIchimokuKinkoHyo**](ApiResponseCryptoIchimokuKinkoHyo.md)

[//]: # (END_OPERATION)


[//]: # (START_OPERTATION)

[//]: # (ENDPOINT:/crypto/prices/technicals/kc)

[//]: # (DOC_LINK:CryptoApi.md#getCryptoPriceTechnicalsKc)

<a name="getCryptoPriceTechnicalsKc"></a>
# **getCryptoPriceTechnicalsKc**

[**View Intrinio API Documentation**](https://docs.intrinio.com/documentation/api_v2/getCryptoPriceTechnicalsKc_v2)

> ApiResponseCryptoKeltnerChannel getCryptoPriceTechnicalsKc(opts)

Keltner Channel

Returns the Keltner Channel values of Crypto Currency Prices for a Crypto Currency Pair

### Example

[//]: # (START_CODE_EXAMPLE)

```javascript
var intrinioSDK = require('intrinio-sdk');
intrinioSDK.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR API KEY";

var cryptoAPI = new intrinioSDK.CryptoApi();

var opts = { 
  'pair': "btcusd", // String | Return technicals for the given Crypto Currency Pair.
  'exchange': "binance", // String | Return technicals for a Crypto Currency on the given Crypto Exchange.
  'currency': "BTC", // String | Return technicals for the given Crypto Currency.
  'period': 10, // Number | The number of observations, per period, to calculate Kelter Channel.
  'timeframe': "d1", // String | The time interval for the prices when calculating technicals.
  'timezone': "UTC", // String | Return technical date/times in this timezone, also interpret start/end date/time parameters in this timezone.
  'startDate': null, // Date | Return technicals on or after this date.
  'startTime': null, // String | Return technicals at or after this time (24-hour).
  'endDate': null, // Date | Return technicals on or before this date.
  'endTime': null, // String | Return technicals at or before this time (24-hour).
  'pageSize': 100, // Number | An integer greater than or equal to 1 for specifying the number of results on each page.
  'nextPage': null // String | Gets the next page of data from a previous API call
};

cryptoAPI.getCryptoPriceTechnicalsKc(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});
```

[//]: # (END_CODE_EXAMPLE)

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pair** | **String**| Return technicals for the given Crypto Currency Pair. | [optional] 
 **exchange** | **String**| Return technicals for a Crypto Currency on the given Crypto Exchange. | [optional] 
 **currency** | **String**| Return technicals for the given Crypto Currency. | [optional] 
 **period** | **Number**| The number of observations, per period, to calculate Kelter Channel. | [optional] [default to 10]
 **timeframe** | **String**| The time interval for the prices when calculating technicals. | [optional] [default to d1]
 **timezone** | **String**| Return technical date/times in this timezone, also interpret start/end date/time parameters in this timezone. | [optional] [default to UTC]
 **startDate** | **Date**| Return technicals on or after this date. | [optional] 
 **startTime** | **String**| Return technicals at or after this time (24-hour). | [optional] 
 **endDate** | **Date**| Return technicals on or before this date. | [optional] 
 **endTime** | **String**| Return technicals at or before this time (24-hour). | [optional] 
 **pageSize** | **Number**| An integer greater than or equal to 1 for specifying the number of results on each page. | [optional] [default to 100]
 **nextPage** | **String**| Gets the next page of data from a previous API call | [optional] 

### Return type

[**ApiResponseCryptoKeltnerChannel**](ApiResponseCryptoKeltnerChannel.md)

[//]: # (END_OPERATION)


[//]: # (START_OPERTATION)

[//]: # (ENDPOINT:/crypto/prices/technicals/kst)

[//]: # (DOC_LINK:CryptoApi.md#getCryptoPriceTechnicalsKst)

<a name="getCryptoPriceTechnicalsKst"></a>
# **getCryptoPriceTechnicalsKst**

[**View Intrinio API Documentation**](https://docs.intrinio.com/documentation/api_v2/getCryptoPriceTechnicalsKst_v2)

> ApiResponseCryptoKnowSureThing getCryptoPriceTechnicalsKst(opts)

Know Sure Thing

Returns the Know Sure Thing values of Crypto Currency Prices for a Crypto Currency Pair

### Example

[//]: # (START_CODE_EXAMPLE)

```javascript
var intrinioSDK = require('intrinio-sdk');
intrinioSDK.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR API KEY";

var cryptoAPI = new intrinioSDK.CryptoApi();

var opts = { 
  'pair': "btcusd", // String | Return technicals for the given Crypto Currency Pair.
  'exchange': "binance", // String | Return technicals for a Crypto Currency on the given Crypto Exchange.
  'currency': "BTC", // String | Return technicals for the given Crypto Currency.
  'roc1': 10, // Number | The number of observations, per period, to calculate the rate-of-change for RCMA1.
  'roc2': 15, // Number | The number of observations, per period, to calculate the rate-of-change for RCMA2.
  'roc3': 20, // Number | The number of observations, per period, to calculate the rate-of-change for RCMA3.
  'roc4': 30, // Number | The number of observations, per period, to calculate the rate-of-change for RCMA4.
  'sma1': 10, // Number | The number of observations, per period, to calculate the Simple Moving Average of the rate-of-change for RCMA1.
  'sma2': 10, // Number | The number of observations, per period, to calculate the Simple Moving Average of the rate-of-change for RCMA2.
  'sma3': 10, // Number | The number of observations, per period, to calculate the Simple Moving Average of the rate-of-change for RCMA3.
  'sma4': 15, // Number | The number of observations, per period, to calculate the Simple Moving Average of the rate-of-change for RCMA4.
  'priceKey': "close", // String | The Crypto Currency Price field to use when calculating Know Sure Thing.
  'timeframe': "d1", // String | The time interval for the prices when calculating technicals.
  'timezone': "UTC", // String | Return technical date/times in this timezone, also interpret start/end date/time parameters in this timezone.
  'startDate': null, // Date | Return technicals on or after this date.
  'startTime': null, // String | Return technicals at or after this time (24-hour).
  'endDate': null, // Date | Return technicals on or before this date.
  'endTime': null, // String | Return technicals at or before this time (24-hour).
  'pageSize': 100, // Number | An integer greater than or equal to 1 for specifying the number of results on each page.
  'nextPage': null // String | Gets the next page of data from a previous API call
};

cryptoAPI.getCryptoPriceTechnicalsKst(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});
```

[//]: # (END_CODE_EXAMPLE)

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pair** | **String**| Return technicals for the given Crypto Currency Pair. | [optional] 
 **exchange** | **String**| Return technicals for a Crypto Currency on the given Crypto Exchange. | [optional] 
 **currency** | **String**| Return technicals for the given Crypto Currency. | [optional] 
 **roc1** | **Number**| The number of observations, per period, to calculate the rate-of-change for RCMA1. | [optional] [default to 10]
 **roc2** | **Number**| The number of observations, per period, to calculate the rate-of-change for RCMA2. | [optional] [default to 15]
 **roc3** | **Number**| The number of observations, per period, to calculate the rate-of-change for RCMA3. | [optional] [default to 20]
 **roc4** | **Number**| The number of observations, per period, to calculate the rate-of-change for RCMA4. | [optional] [default to 30]
 **sma1** | **Number**| The number of observations, per period, to calculate the Simple Moving Average of the rate-of-change for RCMA1. | [optional] [default to 10]
 **sma2** | **Number**| The number of observations, per period, to calculate the Simple Moving Average of the rate-of-change for RCMA2. | [optional] [default to 10]
 **sma3** | **Number**| The number of observations, per period, to calculate the Simple Moving Average of the rate-of-change for RCMA3. | [optional] [default to 10]
 **sma4** | **Number**| The number of observations, per period, to calculate the Simple Moving Average of the rate-of-change for RCMA4. | [optional] [default to 15]
 **priceKey** | **String**| The Crypto Currency Price field to use when calculating Know Sure Thing. | [optional] [default to close]
 **timeframe** | **String**| The time interval for the prices when calculating technicals. | [optional] [default to d1]
 **timezone** | **String**| Return technical date/times in this timezone, also interpret start/end date/time parameters in this timezone. | [optional] [default to UTC]
 **startDate** | **Date**| Return technicals on or after this date. | [optional] 
 **startTime** | **String**| Return technicals at or after this time (24-hour). | [optional] 
 **endDate** | **Date**| Return technicals on or before this date. | [optional] 
 **endTime** | **String**| Return technicals at or before this time (24-hour). | [optional] 
 **pageSize** | **Number**| An integer greater than or equal to 1 for specifying the number of results on each page. | [optional] [default to 100]
 **nextPage** | **String**| Gets the next page of data from a previous API call | [optional] 

### Return type

[**ApiResponseCryptoKnowSureThing**](ApiResponseCryptoKnowSureThing.md)

[//]: # (END_OPERATION)


[//]: # (START_OPERTATION)

[//]: # (ENDPOINT:/crypto/prices/technicals/macd)

[//]: # (DOC_LINK:CryptoApi.md#getCryptoPriceTechnicalsMacd)

<a name="getCryptoPriceTechnicalsMacd"></a>
# **getCryptoPriceTechnicalsMacd**

[**View Intrinio API Documentation**](https://docs.intrinio.com/documentation/api_v2/getCryptoPriceTechnicalsMacd_v2)

> ApiResponseCryptoMovingAverageConvergenceDivergence getCryptoPriceTechnicalsMacd(opts)

Moving Average Convergence Divergence

Returns the Moving Average Convergence Divergence values of Crypto Currency Prices for a Crypto Currency Pair

### Example

[//]: # (START_CODE_EXAMPLE)

```javascript
var intrinioSDK = require('intrinio-sdk');
intrinioSDK.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR API KEY";

var cryptoAPI = new intrinioSDK.CryptoApi();

var opts = { 
  'pair': "btcusd", // String | Return technicals for the given Crypto Currency Pair.
  'exchange': "binance", // String | Return technicals for a Crypto Currency on the given Crypto Exchange.
  'currency': "BTC", // String | Return technicals for the given Crypto Currency.
  'fastPeriod': 12, // Number | The number of observations, per period, to calculate the fast moving Exponential Moving Average for Moving Average Convergence Divergence.
  'slowPeriod': 26, // Number | The number of observations, per period, to calculate the slow moving Exponential Moving Average for Moving Average Convergence Divergence.
  'signalPeriod': 9, // Number | The number of observations, per period, to calculate the signal line for Moving Average Convergence Divergence.
  'priceKey': "close", // String | The Crypto Currency Price field to use when calculating Moving Average Convergence Divergence.
  'timeframe': "d1", // String | The time interval for the prices when calculating technicals.
  'timezone': "UTC", // String | Return technical date/times in this timezone, also interpret start/end date/time parameters in this timezone.
  'startDate': null, // Date | Return technicals on or after this date.
  'startTime': null, // String | Return technicals at or after this time (24-hour).
  'endDate': null, // Date | Return technicals on or before this date.
  'endTime': null, // String | Return technicals at or before this time (24-hour).
  'pageSize': 100, // Number | An integer greater than or equal to 1 for specifying the number of results on each page.
  'nextPage': null // String | Gets the next page of data from a previous API call
};

cryptoAPI.getCryptoPriceTechnicalsMacd(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});
```

[//]: # (END_CODE_EXAMPLE)

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pair** | **String**| Return technicals for the given Crypto Currency Pair. | [optional] 
 **exchange** | **String**| Return technicals for a Crypto Currency on the given Crypto Exchange. | [optional] 
 **currency** | **String**| Return technicals for the given Crypto Currency. | [optional] 
 **fastPeriod** | **Number**| The number of observations, per period, to calculate the fast moving Exponential Moving Average for Moving Average Convergence Divergence. | [optional] [default to 12]
 **slowPeriod** | **Number**| The number of observations, per period, to calculate the slow moving Exponential Moving Average for Moving Average Convergence Divergence. | [optional] [default to 26]
 **signalPeriod** | **Number**| The number of observations, per period, to calculate the signal line for Moving Average Convergence Divergence. | [optional] [default to 9]
 **priceKey** | **String**| The Crypto Currency Price field to use when calculating Moving Average Convergence Divergence. | [optional] [default to close]
 **timeframe** | **String**| The time interval for the prices when calculating technicals. | [optional] [default to d1]
 **timezone** | **String**| Return technical date/times in this timezone, also interpret start/end date/time parameters in this timezone. | [optional] [default to UTC]
 **startDate** | **Date**| Return technicals on or after this date. | [optional] 
 **startTime** | **String**| Return technicals at or after this time (24-hour). | [optional] 
 **endDate** | **Date**| Return technicals on or before this date. | [optional] 
 **endTime** | **String**| Return technicals at or before this time (24-hour). | [optional] 
 **pageSize** | **Number**| An integer greater than or equal to 1 for specifying the number of results on each page. | [optional] [default to 100]
 **nextPage** | **String**| Gets the next page of data from a previous API call | [optional] 

### Return type

[**ApiResponseCryptoMovingAverageConvergenceDivergence**](ApiResponseCryptoMovingAverageConvergenceDivergence.md)

[//]: # (END_OPERATION)


[//]: # (START_OPERTATION)

[//]: # (ENDPOINT:/crypto/prices/technicals/mfi)

[//]: # (DOC_LINK:CryptoApi.md#getCryptoPriceTechnicalsMfi)

<a name="getCryptoPriceTechnicalsMfi"></a>
# **getCryptoPriceTechnicalsMfi**

[**View Intrinio API Documentation**](https://docs.intrinio.com/documentation/api_v2/getCryptoPriceTechnicalsMfi_v2)

> ApiResponseCryptoMoneyFlowIndex getCryptoPriceTechnicalsMfi(opts)

Money Flow Index

Returns the Money Flow Index values of Crypto Currency Prices for a Crypto Currency Pair

### Example

[//]: # (START_CODE_EXAMPLE)

```javascript
var intrinioSDK = require('intrinio-sdk');
intrinioSDK.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR API KEY";

var cryptoAPI = new intrinioSDK.CryptoApi();

var opts = { 
  'pair': "btcusd", // String | Return technicals for the given Crypto Currency Pair.
  'exchange': "binance", // String | Return technicals for a Crypto Currency on the given Crypto Exchange.
  'currency': "BTC", // String | Return technicals for the given Crypto Currency.
  'period': 14, // Number | The number of observations, per period, to calculate Money Flow Index.
  'timeframe': "d1", // String | The time interval for the prices when calculating technicals.
  'timezone': "UTC", // String | Return technical date/times in this timezone, also interpret start/end date/time parameters in this timezone.
  'startDate': null, // Date | Return technicals on or after this date.
  'startTime': null, // String | Return technicals at or after this time (24-hour).
  'endDate': null, // Date | Return technicals on or before this date.
  'endTime': null, // String | Return technicals at or before this time (24-hour).
  'pageSize': 100, // Number | An integer greater than or equal to 1 for specifying the number of results on each page.
  'nextPage': null // String | Gets the next page of data from a previous API call
};

cryptoAPI.getCryptoPriceTechnicalsMfi(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});
```

[//]: # (END_CODE_EXAMPLE)

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pair** | **String**| Return technicals for the given Crypto Currency Pair. | [optional] 
 **exchange** | **String**| Return technicals for a Crypto Currency on the given Crypto Exchange. | [optional] 
 **currency** | **String**| Return technicals for the given Crypto Currency. | [optional] 
 **period** | **Number**| The number of observations, per period, to calculate Money Flow Index. | [optional] [default to 14]
 **timeframe** | **String**| The time interval for the prices when calculating technicals. | [optional] [default to d1]
 **timezone** | **String**| Return technical date/times in this timezone, also interpret start/end date/time parameters in this timezone. | [optional] [default to UTC]
 **startDate** | **Date**| Return technicals on or after this date. | [optional] 
 **startTime** | **String**| Return technicals at or after this time (24-hour). | [optional] 
 **endDate** | **Date**| Return technicals on or before this date. | [optional] 
 **endTime** | **String**| Return technicals at or before this time (24-hour). | [optional] 
 **pageSize** | **Number**| An integer greater than or equal to 1 for specifying the number of results on each page. | [optional] [default to 100]
 **nextPage** | **String**| Gets the next page of data from a previous API call | [optional] 

### Return type

[**ApiResponseCryptoMoneyFlowIndex**](ApiResponseCryptoMoneyFlowIndex.md)

[//]: # (END_OPERATION)


[//]: # (START_OPERTATION)

[//]: # (ENDPOINT:/crypto/prices/technicals/mi)

[//]: # (DOC_LINK:CryptoApi.md#getCryptoPriceTechnicalsMi)

<a name="getCryptoPriceTechnicalsMi"></a>
# **getCryptoPriceTechnicalsMi**

[**View Intrinio API Documentation**](https://docs.intrinio.com/documentation/api_v2/getCryptoPriceTechnicalsMi_v2)

> ApiResponseCryptoMassIndex getCryptoPriceTechnicalsMi(opts)

Mass Index

Returns the Mass Index values of Crypto Currency Prices for a Crypto Currency Pair

### Example

[//]: # (START_CODE_EXAMPLE)

```javascript
var intrinioSDK = require('intrinio-sdk');
intrinioSDK.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR API KEY";

var cryptoAPI = new intrinioSDK.CryptoApi();

var opts = { 
  'pair': "btcusd", // String | Return technicals for the given Crypto Currency Pair.
  'exchange': "binance", // String | Return technicals for a Crypto Currency on the given Crypto Exchange.
  'currency': "BTC", // String | Return technicals for the given Crypto Currency.
  'emaPeriod': 9, // Number | The number of observations, per period, to calculate the single Exponential Moving Average and the Double Exponential Moving Average for Mass Index.
  'sumPeriod': 25, // Number | The number of observations, per period, to calculate the sum of the Exponetinal Moving Average Ratios for Mass Index.
  'timeframe': "d1", // String | The time interval for the prices when calculating technicals.
  'timezone': "UTC", // String | Return technical date/times in this timezone, also interpret start/end date/time parameters in this timezone.
  'startDate': null, // Date | Return technicals on or after this date.
  'startTime': null, // String | Return technicals at or after this time (24-hour).
  'endDate': null, // Date | Return technicals on or before this date.
  'endTime': null, // String | Return technicals at or before this time (24-hour).
  'pageSize': 100, // Number | An integer greater than or equal to 1 for specifying the number of results on each page.
  'nextPage': null // String | Gets the next page of data from a previous API call
};

cryptoAPI.getCryptoPriceTechnicalsMi(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});
```

[//]: # (END_CODE_EXAMPLE)

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pair** | **String**| Return technicals for the given Crypto Currency Pair. | [optional] 
 **exchange** | **String**| Return technicals for a Crypto Currency on the given Crypto Exchange. | [optional] 
 **currency** | **String**| Return technicals for the given Crypto Currency. | [optional] 
 **emaPeriod** | **Number**| The number of observations, per period, to calculate the single Exponential Moving Average and the Double Exponential Moving Average for Mass Index. | [optional] [default to 9]
 **sumPeriod** | **Number**| The number of observations, per period, to calculate the sum of the Exponetinal Moving Average Ratios for Mass Index. | [optional] [default to 25]
 **timeframe** | **String**| The time interval for the prices when calculating technicals. | [optional] [default to d1]
 **timezone** | **String**| Return technical date/times in this timezone, also interpret start/end date/time parameters in this timezone. | [optional] [default to UTC]
 **startDate** | **Date**| Return technicals on or after this date. | [optional] 
 **startTime** | **String**| Return technicals at or after this time (24-hour). | [optional] 
 **endDate** | **Date**| Return technicals on or before this date. | [optional] 
 **endTime** | **String**| Return technicals at or before this time (24-hour). | [optional] 
 **pageSize** | **Number**| An integer greater than or equal to 1 for specifying the number of results on each page. | [optional] [default to 100]
 **nextPage** | **String**| Gets the next page of data from a previous API call | [optional] 

### Return type

[**ApiResponseCryptoMassIndex**](ApiResponseCryptoMassIndex.md)

[//]: # (END_OPERATION)


[//]: # (START_OPERTATION)

[//]: # (ENDPOINT:/crypto/prices/technicals/nvi)

[//]: # (DOC_LINK:CryptoApi.md#getCryptoPriceTechnicalsNvi)

<a name="getCryptoPriceTechnicalsNvi"></a>
# **getCryptoPriceTechnicalsNvi**

[**View Intrinio API Documentation**](https://docs.intrinio.com/documentation/api_v2/getCryptoPriceTechnicalsNvi_v2)

> ApiResponseCryptoNegativeVolumeIndex getCryptoPriceTechnicalsNvi(opts)

Negative Volume Index

Returns the Negative Volume Index values of Crypto Currency Prices for a Crypto Currency Pair

### Example

[//]: # (START_CODE_EXAMPLE)

```javascript
var intrinioSDK = require('intrinio-sdk');
intrinioSDK.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR API KEY";

var cryptoAPI = new intrinioSDK.CryptoApi();

var opts = { 
  'pair': "btcusd", // String | Return technicals for the given Crypto Currency Pair.
  'exchange': "binance", // String | Return technicals for a Crypto Currency on the given Crypto Exchange.
  'currency': "BTC", // String | Return technicals for the given Crypto Currency.
  'timeframe': "d1", // String | The time interval for the prices when calculating technicals.
  'timezone': "UTC", // String | Return technical date/times in this timezone, also interpret start/end date/time parameters in this timezone.
  'startDate': null, // Date | Return technicals on or after this date.
  'startTime': null, // String | Return technicals at or after this time (24-hour).
  'endDate': null, // Date | Return technicals on or before this date.
  'endTime': null, // String | Return technicals at or before this time (24-hour).
  'pageSize': 100, // Number | An integer greater than or equal to 1 for specifying the number of results on each page.
  'nextPage': null // String | Gets the next page of data from a previous API call
};

cryptoAPI.getCryptoPriceTechnicalsNvi(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});
```

[//]: # (END_CODE_EXAMPLE)

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pair** | **String**| Return technicals for the given Crypto Currency Pair. | [optional] 
 **exchange** | **String**| Return technicals for a Crypto Currency on the given Crypto Exchange. | [optional] 
 **currency** | **String**| Return technicals for the given Crypto Currency. | [optional] 
 **timeframe** | **String**| The time interval for the prices when calculating technicals. | [optional] [default to d1]
 **timezone** | **String**| Return technical date/times in this timezone, also interpret start/end date/time parameters in this timezone. | [optional] [default to UTC]
 **startDate** | **Date**| Return technicals on or after this date. | [optional] 
 **startTime** | **String**| Return technicals at or after this time (24-hour). | [optional] 
 **endDate** | **Date**| Return technicals on or before this date. | [optional] 
 **endTime** | **String**| Return technicals at or before this time (24-hour). | [optional] 
 **pageSize** | **Number**| An integer greater than or equal to 1 for specifying the number of results on each page. | [optional] [default to 100]
 **nextPage** | **String**| Gets the next page of data from a previous API call | [optional] 

### Return type

[**ApiResponseCryptoNegativeVolumeIndex**](ApiResponseCryptoNegativeVolumeIndex.md)

[//]: # (END_OPERATION)


[//]: # (START_OPERTATION)

[//]: # (ENDPOINT:/crypto/prices/technicals/obv)

[//]: # (DOC_LINK:CryptoApi.md#getCryptoPriceTechnicalsObv)

<a name="getCryptoPriceTechnicalsObv"></a>
# **getCryptoPriceTechnicalsObv**

[**View Intrinio API Documentation**](https://docs.intrinio.com/documentation/api_v2/getCryptoPriceTechnicalsObv_v2)

> ApiResponseCryptoOnBalanceVolume getCryptoPriceTechnicalsObv(opts)

On-balance Volume

Returns the On-balance Volume values of Crypto Currency Prices for a Crypto Currency Pair

### Example

[//]: # (START_CODE_EXAMPLE)

```javascript
var intrinioSDK = require('intrinio-sdk');
intrinioSDK.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR API KEY";

var cryptoAPI = new intrinioSDK.CryptoApi();

var opts = { 
  'pair': "btcusd", // String | Return technicals for the given Crypto Currency Pair.
  'exchange': "binance", // String | Return technicals for a Crypto Currency on the given Crypto Exchange.
  'currency': "BTC", // String | Return technicals for the given Crypto Currency.
  'timeframe': "d1", // String | The time interval for the prices when calculating technicals.
  'timezone': "UTC", // String | Return technical date/times in this timezone, also interpret start/end date/time parameters in this timezone.
  'startDate': null, // Date | Return technicals on or after this date.
  'startTime': null, // String | Return technicals at or after this time (24-hour).
  'endDate': null, // Date | Return technicals on or before this date.
  'endTime': null, // String | Return technicals at or before this time (24-hour).
  'pageSize': 100, // Number | An integer greater than or equal to 1 for specifying the number of results on each page.
  'nextPage': null // String | Gets the next page of data from a previous API call
};

cryptoAPI.getCryptoPriceTechnicalsObv(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});
```

[//]: # (END_CODE_EXAMPLE)

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pair** | **String**| Return technicals for the given Crypto Currency Pair. | [optional] 
 **exchange** | **String**| Return technicals for a Crypto Currency on the given Crypto Exchange. | [optional] 
 **currency** | **String**| Return technicals for the given Crypto Currency. | [optional] 
 **timeframe** | **String**| The time interval for the prices when calculating technicals. | [optional] [default to d1]
 **timezone** | **String**| Return technical date/times in this timezone, also interpret start/end date/time parameters in this timezone. | [optional] [default to UTC]
 **startDate** | **Date**| Return technicals on or after this date. | [optional] 
 **startTime** | **String**| Return technicals at or after this time (24-hour). | [optional] 
 **endDate** | **Date**| Return technicals on or before this date. | [optional] 
 **endTime** | **String**| Return technicals at or before this time (24-hour). | [optional] 
 **pageSize** | **Number**| An integer greater than or equal to 1 for specifying the number of results on each page. | [optional] [default to 100]
 **nextPage** | **String**| Gets the next page of data from a previous API call | [optional] 

### Return type

[**ApiResponseCryptoOnBalanceVolume**](ApiResponseCryptoOnBalanceVolume.md)

[//]: # (END_OPERATION)


[//]: # (START_OPERTATION)

[//]: # (ENDPOINT:/crypto/prices/technicals/obv_mean)

[//]: # (DOC_LINK:CryptoApi.md#getCryptoPriceTechnicalsObvMean)

<a name="getCryptoPriceTechnicalsObvMean"></a>
# **getCryptoPriceTechnicalsObvMean**

[**View Intrinio API Documentation**](https://docs.intrinio.com/documentation/api_v2/getCryptoPriceTechnicalsObvMean_v2)

> ApiResponseCryptoOnBalanceVolumeMean getCryptoPriceTechnicalsObvMean(opts)

On-balance Volume Mean

Returns the On-balance Volume Mean values of Crypto Currency Prices for a Crypto Currency Pair

### Example

[//]: # (START_CODE_EXAMPLE)

```javascript
var intrinioSDK = require('intrinio-sdk');
intrinioSDK.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR API KEY";

var cryptoAPI = new intrinioSDK.CryptoApi();

var opts = { 
  'pair': "btcusd", // String | Return technicals for the given Crypto Currency Pair.
  'exchange': "binance", // String | Return technicals for a Crypto Currency on the given Crypto Exchange.
  'currency': "BTC", // String | Return technicals for the given Crypto Currency.
  'period': 10, // Number | The number of observations, per period, to calculate On-balance Volume Mean.
  'timeframe': "d1", // String | The time interval for the prices when calculating technicals.
  'timezone': "UTC", // String | Return technical date/times in this timezone, also interpret start/end date/time parameters in this timezone.
  'startDate': null, // Date | Return technicals on or after this date.
  'startTime': null, // String | Return technicals at or after this time (24-hour).
  'endDate': null, // Date | Return technicals on or before this date.
  'endTime': null, // String | Return technicals at or before this time (24-hour).
  'pageSize': 100, // Number | An integer greater than or equal to 1 for specifying the number of results on each page.
  'nextPage': null // String | Gets the next page of data from a previous API call
};

cryptoAPI.getCryptoPriceTechnicalsObvMean(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});
```

[//]: # (END_CODE_EXAMPLE)

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pair** | **String**| Return technicals for the given Crypto Currency Pair. | [optional] 
 **exchange** | **String**| Return technicals for a Crypto Currency on the given Crypto Exchange. | [optional] 
 **currency** | **String**| Return technicals for the given Crypto Currency. | [optional] 
 **period** | **Number**| The number of observations, per period, to calculate On-balance Volume Mean. | [optional] [default to 10]
 **timeframe** | **String**| The time interval for the prices when calculating technicals. | [optional] [default to d1]
 **timezone** | **String**| Return technical date/times in this timezone, also interpret start/end date/time parameters in this timezone. | [optional] [default to UTC]
 **startDate** | **Date**| Return technicals on or after this date. | [optional] 
 **startTime** | **String**| Return technicals at or after this time (24-hour). | [optional] 
 **endDate** | **Date**| Return technicals on or before this date. | [optional] 
 **endTime** | **String**| Return technicals at or before this time (24-hour). | [optional] 
 **pageSize** | **Number**| An integer greater than or equal to 1 for specifying the number of results on each page. | [optional] [default to 100]
 **nextPage** | **String**| Gets the next page of data from a previous API call | [optional] 

### Return type

[**ApiResponseCryptoOnBalanceVolumeMean**](ApiResponseCryptoOnBalanceVolumeMean.md)

[//]: # (END_OPERATION)


[//]: # (START_OPERTATION)

[//]: # (ENDPOINT:/crypto/prices/technicals/rsi)

[//]: # (DOC_LINK:CryptoApi.md#getCryptoPriceTechnicalsRsi)

<a name="getCryptoPriceTechnicalsRsi"></a>
# **getCryptoPriceTechnicalsRsi**

[**View Intrinio API Documentation**](https://docs.intrinio.com/documentation/api_v2/getCryptoPriceTechnicalsRsi_v2)

> ApiResponseCryptoRelativeStrengthIndex getCryptoPriceTechnicalsRsi(opts)

Relative Strength Index

Returns the Relative Strength Index values of Crypto Currency Prices for a Crypto Currency Pair

### Example

[//]: # (START_CODE_EXAMPLE)

```javascript
var intrinioSDK = require('intrinio-sdk');
intrinioSDK.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR API KEY";

var cryptoAPI = new intrinioSDK.CryptoApi();

var opts = { 
  'pair': "btcusd", // String | Return technicals for the given Crypto Currency Pair.
  'exchange': "binance", // String | Return technicals for a Crypto Currency on the given Crypto Exchange.
  'currency': "BTC", // String | Return technicals for the given Crypto Currency.
  'period': 14, // Number | The number of observations, per period, to calculate Relative Strength Index.
  'priceKey': "close", // String | The Crypto Currency Price field to use when calculating Relative Strength Index.
  'timeframe': "d1", // String | The time interval for the prices when calculating technicals.
  'timezone': "UTC", // String | Return technical date/times in this timezone, also interpret start/end date/time parameters in this timezone.
  'startDate': null, // Date | Return technicals on or after this date.
  'startTime': null, // String | Return technicals at or after this time (24-hour).
  'endDate': null, // Date | Return technicals on or before this date.
  'endTime': null, // String | Return technicals at or before this time (24-hour).
  'pageSize': 100, // Number | An integer greater than or equal to 1 for specifying the number of results on each page.
  'nextPage': null // String | Gets the next page of data from a previous API call
};

cryptoAPI.getCryptoPriceTechnicalsRsi(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});
```

[//]: # (END_CODE_EXAMPLE)

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pair** | **String**| Return technicals for the given Crypto Currency Pair. | [optional] 
 **exchange** | **String**| Return technicals for a Crypto Currency on the given Crypto Exchange. | [optional] 
 **currency** | **String**| Return technicals for the given Crypto Currency. | [optional] 
 **period** | **Number**| The number of observations, per period, to calculate Relative Strength Index. | [optional] [default to 14]
 **priceKey** | **String**| The Crypto Currency Price field to use when calculating Relative Strength Index. | [optional] [default to close]
 **timeframe** | **String**| The time interval for the prices when calculating technicals. | [optional] [default to d1]
 **timezone** | **String**| Return technical date/times in this timezone, also interpret start/end date/time parameters in this timezone. | [optional] [default to UTC]
 **startDate** | **Date**| Return technicals on or after this date. | [optional] 
 **startTime** | **String**| Return technicals at or after this time (24-hour). | [optional] 
 **endDate** | **Date**| Return technicals on or before this date. | [optional] 
 **endTime** | **String**| Return technicals at or before this time (24-hour). | [optional] 
 **pageSize** | **Number**| An integer greater than or equal to 1 for specifying the number of results on each page. | [optional] [default to 100]
 **nextPage** | **String**| Gets the next page of data from a previous API call | [optional] 

### Return type

[**ApiResponseCryptoRelativeStrengthIndex**](ApiResponseCryptoRelativeStrengthIndex.md)

[//]: # (END_OPERATION)


[//]: # (START_OPERTATION)

[//]: # (ENDPOINT:/crypto/prices/technicals/sma)

[//]: # (DOC_LINK:CryptoApi.md#getCryptoPriceTechnicalsSma)

<a name="getCryptoPriceTechnicalsSma"></a>
# **getCryptoPriceTechnicalsSma**

[**View Intrinio API Documentation**](https://docs.intrinio.com/documentation/api_v2/getCryptoPriceTechnicalsSma_v2)

> ApiResponseCryptoSimpleMovingAverage getCryptoPriceTechnicalsSma(opts)

Simple Moving Average

Returns the Simple Moving Average values of Crypto Currency Prices for a Crypto Currency Pair

### Example

[//]: # (START_CODE_EXAMPLE)

```javascript
var intrinioSDK = require('intrinio-sdk');
intrinioSDK.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR API KEY";

var cryptoAPI = new intrinioSDK.CryptoApi();

var opts = { 
  'pair': "btcusd", // String | Return technicals for the given Crypto Currency Pair.
  'exchange': "binance", // String | Return technicals for a Crypto Currency on the given Crypto Exchange.
  'currency': "BTC", // String | Return technicals for the given Crypto Currency.
  'period': 20, // Number | The number of observations, per period, to calculate Simple Moving Average.
  'priceKey': "close", // String | The Crypto Currency Price field to use when calculating Simple Moving Average.
  'timeframe': "d1", // String | The time interval for the prices when calculating technicals.
  'timezone': "UTC", // String | Return technical date/times in this timezone, also interpret start/end date/time parameters in this timezone.
  'startDate': null, // Date | Return technicals on or after this date.
  'startTime': null, // String | Return technicals at or after this time (24-hour).
  'endDate': null, // Date | Return technicals on or before this date.
  'endTime': null, // String | Return technicals at or before this time (24-hour).
  'pageSize': 100, // Number | An integer greater than or equal to 1 for specifying the number of results on each page.
  'nextPage': null // String | Gets the next page of data from a previous API call
};

cryptoAPI.getCryptoPriceTechnicalsSma(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});
```

[//]: # (END_CODE_EXAMPLE)

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pair** | **String**| Return technicals for the given Crypto Currency Pair. | [optional] 
 **exchange** | **String**| Return technicals for a Crypto Currency on the given Crypto Exchange. | [optional] 
 **currency** | **String**| Return technicals for the given Crypto Currency. | [optional] 
 **period** | **Number**| The number of observations, per period, to calculate Simple Moving Average. | [optional] [default to 20]
 **priceKey** | **String**| The Crypto Currency Price field to use when calculating Simple Moving Average. | [optional] [default to close]
 **timeframe** | **String**| The time interval for the prices when calculating technicals. | [optional] [default to d1]
 **timezone** | **String**| Return technical date/times in this timezone, also interpret start/end date/time parameters in this timezone. | [optional] [default to UTC]
 **startDate** | **Date**| Return technicals on or after this date. | [optional] 
 **startTime** | **String**| Return technicals at or after this time (24-hour). | [optional] 
 **endDate** | **Date**| Return technicals on or before this date. | [optional] 
 **endTime** | **String**| Return technicals at or before this time (24-hour). | [optional] 
 **pageSize** | **Number**| An integer greater than or equal to 1 for specifying the number of results on each page. | [optional] [default to 100]
 **nextPage** | **String**| Gets the next page of data from a previous API call | [optional] 

### Return type

[**ApiResponseCryptoSimpleMovingAverage**](ApiResponseCryptoSimpleMovingAverage.md)

[//]: # (END_OPERATION)


[//]: # (START_OPERTATION)

[//]: # (ENDPOINT:/crypto/prices/technicals/sr)

[//]: # (DOC_LINK:CryptoApi.md#getCryptoPriceTechnicalsSr)

<a name="getCryptoPriceTechnicalsSr"></a>
# **getCryptoPriceTechnicalsSr**

[**View Intrinio API Documentation**](https://docs.intrinio.com/documentation/api_v2/getCryptoPriceTechnicalsSr_v2)

> ApiResponseCryptoStochasticOscillator getCryptoPriceTechnicalsSr(opts)

Stochastic Oscillator

Returns the Stochastic Oscillator values of Crypto Currency Prices for a Crypto Currency Pair

### Example

[//]: # (START_CODE_EXAMPLE)

```javascript
var intrinioSDK = require('intrinio-sdk');
intrinioSDK.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR API KEY";

var cryptoAPI = new intrinioSDK.CryptoApi();

var opts = { 
  'pair': "btcusd", // String | Return technicals for the given Crypto Currency Pair.
  'exchange': "binance", // String | Return technicals for a Crypto Currency on the given Crypto Exchange.
  'currency': "BTC", // String | Return technicals for the given Crypto Currency.
  'period': 14, // Number | The number of observations, per period, to calculate %K of Stochastic Oscillator.
  'signalPeriod': 3, // Number | The number of observations, per period, to calculate the %D (the Simple Moving Average of %K) as a signal line for Stochastic Oscillator.
  'timeframe': "d1", // String | The time interval for the prices when calculating technicals.
  'timezone': "UTC", // String | Return technical date/times in this timezone, also interpret start/end date/time parameters in this timezone.
  'startDate': null, // Date | Return technicals on or after this date.
  'startTime': null, // String | Return technicals at or after this time (24-hour).
  'endDate': null, // Date | Return technicals on or before this date.
  'endTime': null, // String | Return technicals at or before this time (24-hour).
  'pageSize': 100, // Number | An integer greater than or equal to 1 for specifying the number of results on each page.
  'nextPage': null // String | Gets the next page of data from a previous API call
};

cryptoAPI.getCryptoPriceTechnicalsSr(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});
```

[//]: # (END_CODE_EXAMPLE)

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pair** | **String**| Return technicals for the given Crypto Currency Pair. | [optional] 
 **exchange** | **String**| Return technicals for a Crypto Currency on the given Crypto Exchange. | [optional] 
 **currency** | **String**| Return technicals for the given Crypto Currency. | [optional] 
 **period** | **Number**| The number of observations, per period, to calculate %K of Stochastic Oscillator. | [optional] [default to 14]
 **signalPeriod** | **Number**| The number of observations, per period, to calculate the %D (the Simple Moving Average of %K) as a signal line for Stochastic Oscillator. | [optional] [default to 3]
 **timeframe** | **String**| The time interval for the prices when calculating technicals. | [optional] [default to d1]
 **timezone** | **String**| Return technical date/times in this timezone, also interpret start/end date/time parameters in this timezone. | [optional] [default to UTC]
 **startDate** | **Date**| Return technicals on or after this date. | [optional] 
 **startTime** | **String**| Return technicals at or after this time (24-hour). | [optional] 
 **endDate** | **Date**| Return technicals on or before this date. | [optional] 
 **endTime** | **String**| Return technicals at or before this time (24-hour). | [optional] 
 **pageSize** | **Number**| An integer greater than or equal to 1 for specifying the number of results on each page. | [optional] [default to 100]
 **nextPage** | **String**| Gets the next page of data from a previous API call | [optional] 

### Return type

[**ApiResponseCryptoStochasticOscillator**](ApiResponseCryptoStochasticOscillator.md)

[//]: # (END_OPERATION)


[//]: # (START_OPERTATION)

[//]: # (ENDPOINT:/crypto/prices/technicals/trix)

[//]: # (DOC_LINK:CryptoApi.md#getCryptoPriceTechnicalsTrix)

<a name="getCryptoPriceTechnicalsTrix"></a>
# **getCryptoPriceTechnicalsTrix**

[**View Intrinio API Documentation**](https://docs.intrinio.com/documentation/api_v2/getCryptoPriceTechnicalsTrix_v2)

> ApiResponseCryptoTripleExponentialAverage getCryptoPriceTechnicalsTrix(opts)

Triple Exponential Average

Returns the Simple Moving Average values of Crypto Currency Prices for a Crypto Currency Pair

### Example

[//]: # (START_CODE_EXAMPLE)

```javascript
var intrinioSDK = require('intrinio-sdk');
intrinioSDK.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR API KEY";

var cryptoAPI = new intrinioSDK.CryptoApi();

var opts = { 
  'pair': "btcusd", // String | Return technicals for the given Crypto Currency Pair.
  'exchange': "binance", // String | Return technicals for a Crypto Currency on the given Crypto Exchange.
  'currency': "BTC", // String | Return technicals for the given Crypto Currency.
  'period': 15, // Number | The number of observations, per period, to calculate Exponential Moving Average for Triple Exponential Average.
  'timeframe': "d1", // String | The time interval for the prices when calculating technicals.
  'timezone': "UTC", // String | Return technical date/times in this timezone, also interpret start/end date/time parameters in this timezone.
  'startDate': null, // Date | Return technicals on or after this date.
  'startTime': null, // String | Return technicals at or after this time (24-hour).
  'endDate': null, // Date | Return technicals on or before this date.
  'endTime': null, // String | Return technicals at or before this time (24-hour).
  'pageSize': 100, // Number | An integer greater than or equal to 1 for specifying the number of results on each page.
  'nextPage': null // String | Gets the next page of data from a previous API call
};

cryptoAPI.getCryptoPriceTechnicalsTrix(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});
```

[//]: # (END_CODE_EXAMPLE)

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pair** | **String**| Return technicals for the given Crypto Currency Pair. | [optional] 
 **exchange** | **String**| Return technicals for a Crypto Currency on the given Crypto Exchange. | [optional] 
 **currency** | **String**| Return technicals for the given Crypto Currency. | [optional] 
 **period** | **Number**| The number of observations, per period, to calculate Exponential Moving Average for Triple Exponential Average. | [optional] [default to 15]
 **timeframe** | **String**| The time interval for the prices when calculating technicals. | [optional] [default to d1]
 **timezone** | **String**| Return technical date/times in this timezone, also interpret start/end date/time parameters in this timezone. | [optional] [default to UTC]
 **startDate** | **Date**| Return technicals on or after this date. | [optional] 
 **startTime** | **String**| Return technicals at or after this time (24-hour). | [optional] 
 **endDate** | **Date**| Return technicals on or before this date. | [optional] 
 **endTime** | **String**| Return technicals at or before this time (24-hour). | [optional] 
 **pageSize** | **Number**| An integer greater than or equal to 1 for specifying the number of results on each page. | [optional] [default to 100]
 **nextPage** | **String**| Gets the next page of data from a previous API call | [optional] 

### Return type

[**ApiResponseCryptoTripleExponentialAverage**](ApiResponseCryptoTripleExponentialAverage.md)

[//]: # (END_OPERATION)


[//]: # (START_OPERTATION)

[//]: # (ENDPOINT:/crypto/prices/technicals/tsi)

[//]: # (DOC_LINK:CryptoApi.md#getCryptoPriceTechnicalsTsi)

<a name="getCryptoPriceTechnicalsTsi"></a>
# **getCryptoPriceTechnicalsTsi**

[**View Intrinio API Documentation**](https://docs.intrinio.com/documentation/api_v2/getCryptoPriceTechnicalsTsi_v2)

> ApiResponseCryptoTrueStrengthIndex getCryptoPriceTechnicalsTsi(opts)

True Strength Index

Returns the True Strength Index values of Crypto Currency Prices for a Crypto Currency Pair

### Example

[//]: # (START_CODE_EXAMPLE)

```javascript
var intrinioSDK = require('intrinio-sdk');
intrinioSDK.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR API KEY";

var cryptoAPI = new intrinioSDK.CryptoApi();

var opts = { 
  'pair': "btcusd", // String | Return technicals for the given Crypto Currency Pair.
  'exchange': "binance", // String | Return technicals for a Crypto Currency on the given Crypto Exchange.
  'currency': "BTC", // String | Return technicals for the given Crypto Currency.
  'lowPeriod': 13, // Number | The number of observations, per period, to calculate low period Exponential Moving Average for smoothing in True Strength Index.
  'highPeriod': 25, // Number | The number of observations, per period, to calculate high period Exponential Moving Average for smoothing in True Strength Index.
  'priceKey': "close", // String | The Crypto Currency Price field to use when calculating True Strength Index.
  'timeframe': "d1", // String | The time interval for the prices when calculating technicals.
  'timezone': "UTC", // String | Return technical date/times in this timezone, also interpret start/end date/time parameters in this timezone.
  'startDate': null, // Date | Return technicals on or after this date.
  'startTime': null, // String | Return technicals at or after this time (24-hour).
  'endDate': null, // Date | Return technicals on or before this date.
  'endTime': null, // String | Return technicals at or before this time (24-hour).
  'pageSize': 100, // Number | An integer greater than or equal to 1 for specifying the number of results on each page.
  'nextPage': null // String | Gets the next page of data from a previous API call
};

cryptoAPI.getCryptoPriceTechnicalsTsi(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});
```

[//]: # (END_CODE_EXAMPLE)

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pair** | **String**| Return technicals for the given Crypto Currency Pair. | [optional] 
 **exchange** | **String**| Return technicals for a Crypto Currency on the given Crypto Exchange. | [optional] 
 **currency** | **String**| Return technicals for the given Crypto Currency. | [optional] 
 **lowPeriod** | **Number**| The number of observations, per period, to calculate low period Exponential Moving Average for smoothing in True Strength Index. | [optional] [default to 13]
 **highPeriod** | **Number**| The number of observations, per period, to calculate high period Exponential Moving Average for smoothing in True Strength Index. | [optional] [default to 25]
 **priceKey** | **String**| The Crypto Currency Price field to use when calculating True Strength Index. | [optional] [default to close]
 **timeframe** | **String**| The time interval for the prices when calculating technicals. | [optional] [default to d1]
 **timezone** | **String**| Return technical date/times in this timezone, also interpret start/end date/time parameters in this timezone. | [optional] [default to UTC]
 **startDate** | **Date**| Return technicals on or after this date. | [optional] 
 **startTime** | **String**| Return technicals at or after this time (24-hour). | [optional] 
 **endDate** | **Date**| Return technicals on or before this date. | [optional] 
 **endTime** | **String**| Return technicals at or before this time (24-hour). | [optional] 
 **pageSize** | **Number**| An integer greater than or equal to 1 for specifying the number of results on each page. | [optional] [default to 100]
 **nextPage** | **String**| Gets the next page of data from a previous API call | [optional] 

### Return type

[**ApiResponseCryptoTrueStrengthIndex**](ApiResponseCryptoTrueStrengthIndex.md)

[//]: # (END_OPERATION)


[//]: # (START_OPERTATION)

[//]: # (ENDPOINT:/crypto/prices/technicals/uo)

[//]: # (DOC_LINK:CryptoApi.md#getCryptoPriceTechnicalsUo)

<a name="getCryptoPriceTechnicalsUo"></a>
# **getCryptoPriceTechnicalsUo**

[**View Intrinio API Documentation**](https://docs.intrinio.com/documentation/api_v2/getCryptoPriceTechnicalsUo_v2)

> ApiResponseCryptoUltimateOscillator getCryptoPriceTechnicalsUo(opts)

Ultimate Oscillator

Returns the Ultimate Oscillator values of Crypto Currency Prices for a Crypto Currency Pair

### Example

[//]: # (START_CODE_EXAMPLE)

```javascript
var intrinioSDK = require('intrinio-sdk');
intrinioSDK.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR API KEY";

var cryptoAPI = new intrinioSDK.CryptoApi();

var opts = { 
  'pair': "btcusd", // String | Return technicals for the given Crypto Currency Pair.
  'exchange': "binance", // String | Return technicals for a Crypto Currency on the given Crypto Exchange.
  'currency': "BTC", // String | Return technicals for the given Crypto Currency.
  'shortPeriod': 7, // Number | The number of observations, per period, to calculate the short period for Ultimate Oscillator.
  'mediumPeriod': 14, // Number | The number of observations, per period, to calculate the medium period for Ultimate Oscillator.
  'longPeriod': 28, // Number | The number of observations, per period, to calculate the long period for Ultimate Oscillator.
  'shortWeight': 4.0, // Number | The weight of short Buying Pressure average for Ultimate Oscillator.
  'mediumWeight': 2.0, // Number | The weight of medium Buying Pressure average for Ultimate Oscillator.
  'longWeight': 1.0, // Number | The weight of long Buying Pressure average for Ultimate Oscillator.
  'timeframe': "d1", // String | The time interval for the prices when calculating technicals.
  'timezone': "UTC", // String | Return technical date/times in this timezone, also interpret start/end date/time parameters in this timezone.
  'startDate': null, // Date | Return technicals on or after this date.
  'startTime': null, // String | Return technicals at or after this time (24-hour).
  'endDate': null, // Date | Return technicals on or before this date.
  'endTime': null, // String | Return technicals at or before this time (24-hour).
  'pageSize': 100, // Number | An integer greater than or equal to 1 for specifying the number of results on each page.
  'nextPage': null // String | Gets the next page of data from a previous API call
};

cryptoAPI.getCryptoPriceTechnicalsUo(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});
```

[//]: # (END_CODE_EXAMPLE)

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pair** | **String**| Return technicals for the given Crypto Currency Pair. | [optional] 
 **exchange** | **String**| Return technicals for a Crypto Currency on the given Crypto Exchange. | [optional] 
 **currency** | **String**| Return technicals for the given Crypto Currency. | [optional] 
 **shortPeriod** | **Number**| The number of observations, per period, to calculate the short period for Ultimate Oscillator. | [optional] [default to 7]
 **mediumPeriod** | **Number**| The number of observations, per period, to calculate the medium period for Ultimate Oscillator. | [optional] [default to 14]
 **longPeriod** | **Number**| The number of observations, per period, to calculate the long period for Ultimate Oscillator. | [optional] [default to 28]
 **shortWeight** | **Number**| The weight of short Buying Pressure average for Ultimate Oscillator. | [optional] [default to 4.0]
 **mediumWeight** | **Number**| The weight of medium Buying Pressure average for Ultimate Oscillator. | [optional] [default to 2.0]
 **longWeight** | **Number**| The weight of long Buying Pressure average for Ultimate Oscillator. | [optional] [default to 1.0]
 **timeframe** | **String**| The time interval for the prices when calculating technicals. | [optional] [default to d1]
 **timezone** | **String**| Return technical date/times in this timezone, also interpret start/end date/time parameters in this timezone. | [optional] [default to UTC]
 **startDate** | **Date**| Return technicals on or after this date. | [optional] 
 **startTime** | **String**| Return technicals at or after this time (24-hour). | [optional] 
 **endDate** | **Date**| Return technicals on or before this date. | [optional] 
 **endTime** | **String**| Return technicals at or before this time (24-hour). | [optional] 
 **pageSize** | **Number**| An integer greater than or equal to 1 for specifying the number of results on each page. | [optional] [default to 100]
 **nextPage** | **String**| Gets the next page of data from a previous API call | [optional] 

### Return type

[**ApiResponseCryptoUltimateOscillator**](ApiResponseCryptoUltimateOscillator.md)

[//]: # (END_OPERATION)


[//]: # (START_OPERTATION)

[//]: # (ENDPOINT:/crypto/prices/technicals/vi)

[//]: # (DOC_LINK:CryptoApi.md#getCryptoPriceTechnicalsVi)

<a name="getCryptoPriceTechnicalsVi"></a>
# **getCryptoPriceTechnicalsVi**

[**View Intrinio API Documentation**](https://docs.intrinio.com/documentation/api_v2/getCryptoPriceTechnicalsVi_v2)

> ApiResponseCryptoVortexIndicator getCryptoPriceTechnicalsVi(opts)

Vortex Indicator

Returns the Vortex Indicator values of Crypto Currency Prices for a Crypto Currency Pair

### Example

[//]: # (START_CODE_EXAMPLE)

```javascript
var intrinioSDK = require('intrinio-sdk');
intrinioSDK.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR API KEY";

var cryptoAPI = new intrinioSDK.CryptoApi();

var opts = { 
  'pair': "btcusd", // String | Return technicals for the given Crypto Currency Pair.
  'exchange': "binance", // String | Return technicals for a Crypto Currency on the given Crypto Exchange.
  'currency': "BTC", // String | Return technicals for the given Crypto Currency.
  'period': 14, // Number | The number of observations, per period, to calculate Vortex Indicator.
  'timeframe': "d1", // String | The time interval for the prices when calculating technicals.
  'timezone': "UTC", // String | Return technical date/times in this timezone, also interpret start/end date/time parameters in this timezone.
  'startDate': null, // Date | Return technicals on or after this date.
  'startTime': null, // String | Return technicals at or after this time (24-hour).
  'endDate': null, // Date | Return technicals on or before this date.
  'endTime': null, // String | Return technicals at or before this time (24-hour).
  'pageSize': 100, // Number | An integer greater than or equal to 1 for specifying the number of results on each page.
  'nextPage': null // String | Gets the next page of data from a previous API call
};

cryptoAPI.getCryptoPriceTechnicalsVi(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});
```

[//]: # (END_CODE_EXAMPLE)

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pair** | **String**| Return technicals for the given Crypto Currency Pair. | [optional] 
 **exchange** | **String**| Return technicals for a Crypto Currency on the given Crypto Exchange. | [optional] 
 **currency** | **String**| Return technicals for the given Crypto Currency. | [optional] 
 **period** | **Number**| The number of observations, per period, to calculate Vortex Indicator. | [optional] [default to 14]
 **timeframe** | **String**| The time interval for the prices when calculating technicals. | [optional] [default to d1]
 **timezone** | **String**| Return technical date/times in this timezone, also interpret start/end date/time parameters in this timezone. | [optional] [default to UTC]
 **startDate** | **Date**| Return technicals on or after this date. | [optional] 
 **startTime** | **String**| Return technicals at or after this time (24-hour). | [optional] 
 **endDate** | **Date**| Return technicals on or before this date. | [optional] 
 **endTime** | **String**| Return technicals at or before this time (24-hour). | [optional] 
 **pageSize** | **Number**| An integer greater than or equal to 1 for specifying the number of results on each page. | [optional] [default to 100]
 **nextPage** | **String**| Gets the next page of data from a previous API call | [optional] 

### Return type

[**ApiResponseCryptoVortexIndicator**](ApiResponseCryptoVortexIndicator.md)

[//]: # (END_OPERATION)


[//]: # (START_OPERTATION)

[//]: # (ENDPOINT:/crypto/prices/technicals/vpt)

[//]: # (DOC_LINK:CryptoApi.md#getCryptoPriceTechnicalsVpt)

<a name="getCryptoPriceTechnicalsVpt"></a>
# **getCryptoPriceTechnicalsVpt**

[**View Intrinio API Documentation**](https://docs.intrinio.com/documentation/api_v2/getCryptoPriceTechnicalsVpt_v2)

> ApiResponseCryptoVolumePriceTrend getCryptoPriceTechnicalsVpt(opts)

Volume-price Trend

Returns the Volume-price Trend values of Crypto Currency Prices for a Crypto Currency Pair

### Example

[//]: # (START_CODE_EXAMPLE)

```javascript
var intrinioSDK = require('intrinio-sdk');
intrinioSDK.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR API KEY";

var cryptoAPI = new intrinioSDK.CryptoApi();

var opts = { 
  'pair': "btcusd", // String | Return technicals for the given Crypto Currency Pair.
  'exchange': "binance", // String | Return technicals for a Crypto Currency on the given Crypto Exchange.
  'currency': "BTC", // String | Return technicals for the given Crypto Currency.
  'timeframe': "d1", // String | The time interval for the prices when calculating technicals.
  'timezone': "UTC", // String | Return technical date/times in this timezone, also interpret start/end date/time parameters in this timezone.
  'startDate': null, // Date | Return technicals on or after this date.
  'startTime': null, // String | Return technicals at or after this time (24-hour).
  'endDate': null, // Date | Return technicals on or before this date.
  'endTime': null, // String | Return technicals at or before this time (24-hour).
  'pageSize': 100, // Number | An integer greater than or equal to 1 for specifying the number of results on each page.
  'nextPage': null // String | Gets the next page of data from a previous API call
};

cryptoAPI.getCryptoPriceTechnicalsVpt(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});
```

[//]: # (END_CODE_EXAMPLE)

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pair** | **String**| Return technicals for the given Crypto Currency Pair. | [optional] 
 **exchange** | **String**| Return technicals for a Crypto Currency on the given Crypto Exchange. | [optional] 
 **currency** | **String**| Return technicals for the given Crypto Currency. | [optional] 
 **timeframe** | **String**| The time interval for the prices when calculating technicals. | [optional] [default to d1]
 **timezone** | **String**| Return technical date/times in this timezone, also interpret start/end date/time parameters in this timezone. | [optional] [default to UTC]
 **startDate** | **Date**| Return technicals on or after this date. | [optional] 
 **startTime** | **String**| Return technicals at or after this time (24-hour). | [optional] 
 **endDate** | **Date**| Return technicals on or before this date. | [optional] 
 **endTime** | **String**| Return technicals at or before this time (24-hour). | [optional] 
 **pageSize** | **Number**| An integer greater than or equal to 1 for specifying the number of results on each page. | [optional] [default to 100]
 **nextPage** | **String**| Gets the next page of data from a previous API call | [optional] 

### Return type

[**ApiResponseCryptoVolumePriceTrend**](ApiResponseCryptoVolumePriceTrend.md)

[//]: # (END_OPERATION)


[//]: # (START_OPERTATION)

[//]: # (ENDPOINT:/crypto/prices/technicals/vwap)

[//]: # (DOC_LINK:CryptoApi.md#getCryptoPriceTechnicalsVwap)

<a name="getCryptoPriceTechnicalsVwap"></a>
# **getCryptoPriceTechnicalsVwap**

[**View Intrinio API Documentation**](https://docs.intrinio.com/documentation/api_v2/getCryptoPriceTechnicalsVwap_v2)

> ApiResponseCryptoVolumeWeightedAveragePrice getCryptoPriceTechnicalsVwap(opts)

Volume Weighted Average Price

Returns the Volume Weighted Average Price values of Crypto Currency Prices for a Crypto Currency Pair

### Example

[//]: # (START_CODE_EXAMPLE)

```javascript
var intrinioSDK = require('intrinio-sdk');
intrinioSDK.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR API KEY";

var cryptoAPI = new intrinioSDK.CryptoApi();

var opts = { 
  'pair': "btcusd", // String | Return technicals for the given Crypto Currency Pair.
  'exchange': "binance", // String | Return technicals for a Crypto Currency on the given Crypto Exchange.
  'currency': "BTC", // String | Return technicals for the given Crypto Currency.
  'timeframe': "d1", // String | The time interval for the prices when calculating technicals.
  'timezone': "UTC", // String | Return technical date/times in this timezone, also interpret start/end date/time parameters in this timezone.
  'startDate': null, // Date | Return technicals on or after this date.
  'startTime': null, // String | Return technicals at or after this time (24-hour).
  'endDate': null, // Date | Return technicals on or before this date.
  'endTime': null, // String | Return technicals at or before this time (24-hour).
  'pageSize': 100, // Number | An integer greater than or equal to 1 for specifying the number of results on each page.
  'nextPage': null // String | Gets the next page of data from a previous API call
};

cryptoAPI.getCryptoPriceTechnicalsVwap(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});
```

[//]: # (END_CODE_EXAMPLE)

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pair** | **String**| Return technicals for the given Crypto Currency Pair. | [optional] 
 **exchange** | **String**| Return technicals for a Crypto Currency on the given Crypto Exchange. | [optional] 
 **currency** | **String**| Return technicals for the given Crypto Currency. | [optional] 
 **timeframe** | **String**| The time interval for the prices when calculating technicals. | [optional] [default to d1]
 **timezone** | **String**| Return technical date/times in this timezone, also interpret start/end date/time parameters in this timezone. | [optional] [default to UTC]
 **startDate** | **Date**| Return technicals on or after this date. | [optional] 
 **startTime** | **String**| Return technicals at or after this time (24-hour). | [optional] 
 **endDate** | **Date**| Return technicals on or before this date. | [optional] 
 **endTime** | **String**| Return technicals at or before this time (24-hour). | [optional] 
 **pageSize** | **Number**| An integer greater than or equal to 1 for specifying the number of results on each page. | [optional] [default to 100]
 **nextPage** | **String**| Gets the next page of data from a previous API call | [optional] 

### Return type

[**ApiResponseCryptoVolumeWeightedAveragePrice**](ApiResponseCryptoVolumeWeightedAveragePrice.md)

[//]: # (END_OPERATION)


[//]: # (START_OPERTATION)

[//]: # (ENDPOINT:/crypto/prices/technicals/wr)

[//]: # (DOC_LINK:CryptoApi.md#getCryptoPriceTechnicalsWr)

<a name="getCryptoPriceTechnicalsWr"></a>
# **getCryptoPriceTechnicalsWr**

[**View Intrinio API Documentation**](https://docs.intrinio.com/documentation/api_v2/getCryptoPriceTechnicalsWr_v2)

> ApiResponseCryptoWilliamsR getCryptoPriceTechnicalsWr(opts)

Williams %R

Returns the Williams %R values of Crypto Currency Prices for a Crypto Currency Pair

### Example

[//]: # (START_CODE_EXAMPLE)

```javascript
var intrinioSDK = require('intrinio-sdk');
intrinioSDK.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR API KEY";

var cryptoAPI = new intrinioSDK.CryptoApi();

var opts = { 
  'pair': "btcusd", // String | Return technicals for the given Crypto Currency Pair.
  'exchange': "binance", // String | Return technicals for a Crypto Currency on the given Crypto Exchange.
  'currency': "BTC", // String | Return technicals for the given Crypto Currency.
  'period': 14, // Number | The number of observations, per period, to look-back when calculating Williams %R.
  'timeframe': "d1", // String | The time interval for the prices when calculating technicals.
  'timezone': "UTC", // String | Return technical date/times in this timezone, also interpret start/end date/time parameters in this timezone.
  'startDate': null, // Date | Return technicals on or after this date.
  'startTime': null, // String | Return technicals at or after this time (24-hour).
  'endDate': null, // Date | Return technicals on or before this date.
  'endTime': null, // String | Return technicals at or before this time (24-hour).
  'pageSize': 100, // Number | An integer greater than or equal to 1 for specifying the number of results on each page.
  'nextPage': null // String | Gets the next page of data from a previous API call
};

cryptoAPI.getCryptoPriceTechnicalsWr(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});
```

[//]: # (END_CODE_EXAMPLE)

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pair** | **String**| Return technicals for the given Crypto Currency Pair. | [optional] 
 **exchange** | **String**| Return technicals for a Crypto Currency on the given Crypto Exchange. | [optional] 
 **currency** | **String**| Return technicals for the given Crypto Currency. | [optional] 
 **period** | **Number**| The number of observations, per period, to look-back when calculating Williams %R. | [optional] [default to 14]
 **timeframe** | **String**| The time interval for the prices when calculating technicals. | [optional] [default to d1]
 **timezone** | **String**| Return technical date/times in this timezone, also interpret start/end date/time parameters in this timezone. | [optional] [default to UTC]
 **startDate** | **Date**| Return technicals on or after this date. | [optional] 
 **startTime** | **String**| Return technicals at or after this time (24-hour). | [optional] 
 **endDate** | **Date**| Return technicals on or before this date. | [optional] 
 **endTime** | **String**| Return technicals at or before this time (24-hour). | [optional] 
 **pageSize** | **Number**| An integer greater than or equal to 1 for specifying the number of results on each page. | [optional] [default to 100]
 **nextPage** | **String**| Gets the next page of data from a previous API call | [optional] 

### Return type

[**ApiResponseCryptoWilliamsR**](ApiResponseCryptoWilliamsR.md)

[//]: # (END_OPERATION)


[//]: # (START_OPERTATION)

[//]: # (ENDPOINT:/crypto/prices)

[//]: # (DOC_LINK:CryptoApi.md#getCryptoPrices)

<a name="getCryptoPrices"></a>
# **getCryptoPrices**

[**View Intrinio API Documentation**](https://docs.intrinio.com/documentation/api_v2/getCryptoPrices_v2)

> ApiResponseCryptoPrices getCryptoPrices(timeframe, opts)

Crypto Prices

Returns a list of available Crypto Currency Prices.

### Example

[//]: # (START_CODE_EXAMPLE)

```javascript
var intrinioSDK = require('intrinio-sdk');
intrinioSDK.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR API KEY";

var cryptoAPI = new intrinioSDK.CryptoApi();

var timeframe = "d1"; // String | The time interval for the prices.

var opts = { 
  'pair': "btcusd", // String | Return prices for the given Crypto Currency Pair.
  'exchange': "binance", // String | Return prices for a Crypto Currency on the given Crypto Exchange.
  'currency': "BTC", // String | Return prices for the given Crypto Currency.
  'timezone': "UTC", // String | Return price date/times in this timezone, also interpret start/end date/time parameters in this timezone.
  'startDate': null, // Date | Return Crypto Prices on or after this date.
  'startTime': null, // String | Return Crypto Prices at or after this time (24-hour).
  'endDate': null, // Date | Return Crypto Prices on or before this date.
  'endTime': null, // String | Return Crypto Prices at or before this time (24-hour).
  'pageSize': 100, // Number | An integer greater than or equal to 1 for specifying the number of results on each page.
  'nextPage': null // String | Gets the next page of data from a previous API call
};

cryptoAPI.getCryptoPrices(timeframe, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});
```

[//]: # (END_CODE_EXAMPLE)

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **timeframe** | **String**| The time interval for the prices. | [default to d1]
 **pair** | **String**| Return prices for the given Crypto Currency Pair. | [optional] 
 **exchange** | **String**| Return prices for a Crypto Currency on the given Crypto Exchange. | [optional] 
 **currency** | **String**| Return prices for the given Crypto Currency. | [optional] 
 **timezone** | **String**| Return price date/times in this timezone, also interpret start/end date/time parameters in this timezone. | [optional] [default to UTC]
 **startDate** | **Date**| Return Crypto Prices on or after this date. | [optional] 
 **startTime** | **String**| Return Crypto Prices at or after this time (24-hour). | [optional] 
 **endDate** | **Date**| Return Crypto Prices on or before this date. | [optional] 
 **endTime** | **String**| Return Crypto Prices at or before this time (24-hour). | [optional] 
 **pageSize** | **Number**| An integer greater than or equal to 1 for specifying the number of results on each page. | [optional] [default to 100]
 **nextPage** | **String**| Gets the next page of data from a previous API call | [optional] 

### Return type

[**ApiResponseCryptoPrices**](ApiResponseCryptoPrices.md)

[//]: # (END_OPERATION)


[//]: # (START_OPERTATION)

[//]: # (ENDPOINT:/crypto/snapshot)

[//]: # (DOC_LINK:CryptoApi.md#getCryptoSnapshot)

<a name="getCryptoSnapshot"></a>
# **getCryptoSnapshot**

[**View Intrinio API Documentation**](https://docs.intrinio.com/documentation/api_v2/getCryptoSnapshot_v2)

> ApiResponseCryptoSnapshot getCryptoSnapshot(opts)

Crypto Snapshot

Returns a market snapshot over that last 24 hours for the given currency pair and exchange.

### Example

[//]: # (START_CODE_EXAMPLE)

```javascript
var intrinioSDK = require('intrinio-sdk');
intrinioSDK.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR API KEY";

var cryptoAPI = new intrinioSDK.CryptoApi();

var opts = { 
  'pair': "btcusd", // String | Return the snapshot for the given Crypto Currency Pair.
  'exchange': "binance", // String | Return the snapshot for a Crypto Currency on the given Crypto Exchange.
  'currency': "BTC" // String | Return the snapshot for the given Crypto Currency.
};

cryptoAPI.getCryptoSnapshot(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});
```

[//]: # (END_CODE_EXAMPLE)

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pair** | **String**| Return the snapshot for the given Crypto Currency Pair. | [optional] 
 **exchange** | **String**| Return the snapshot for a Crypto Currency on the given Crypto Exchange. | [optional] 
 **currency** | **String**| Return the snapshot for the given Crypto Currency. | [optional] 

### Return type

[**ApiResponseCryptoSnapshot**](ApiResponseCryptoSnapshot.md)

[//]: # (END_OPERATION)


[//]: # (START_OPERTATION)

[//]: # (ENDPOINT:/crypto/stats)

[//]: # (DOC_LINK:CryptoApi.md#getCryptoStats)

<a name="getCryptoStats"></a>
# **getCryptoStats**

[**View Intrinio API Documentation**](https://docs.intrinio.com/documentation/api_v2/getCryptoStats_v2)

> ApiResponseCryptoStats getCryptoStats(opts)

Crypto Stats

Returns available stats on Crypto Currencies.

### Example

[//]: # (START_CODE_EXAMPLE)

```javascript
var intrinioSDK = require('intrinio-sdk');
intrinioSDK.ApiClient.instance.authentications['ApiKeyAuth'].apiKey = "YOUR API KEY";

var cryptoAPI = new intrinioSDK.CryptoApi();

var opts = { 
  'exchange': "binance", // String | Returns stats for Crypto Currencies that trade on the specified Crypto Exchange.
  'currency': "BTC" // String | Returns stats for the specified Crypto Currency.
};

cryptoAPI.getCryptoStats(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});
```

[//]: # (END_CODE_EXAMPLE)

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **exchange** | **String**| Returns stats for Crypto Currencies that trade on the specified Crypto Exchange. | [optional] 
 **currency** | **String**| Returns stats for the specified Crypto Currency. | [optional] 

### Return type

[**ApiResponseCryptoStats**](ApiResponseCryptoStats.md)

[//]: # (END_OPERATION)
