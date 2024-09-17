// NB this will be a server component because it is in the app folder
// Async function to call data

interface TestDataProps {
  dataset: string;
  edition: string;
  version: string;
}

interface AlphaVillageDataProps {
  freq: string;
  stockticker: string;
  exchange?: string;
  outputsize?: string;
  apikey: string;
}

// TODO
// rearrange the function below so it uses the constructed URL instead of the hardcoded URL so we can use it more generally.
// Next create a bunch of calls to get different data inf GDP emp and unemp using this new function.

async function getTestData({ dataset, edition, version }: TestDataProps) {
  // construct url using edition version number etc
  const url = `https://api.beta.ons.gov.uk/v1/datasets/${dataset}/editions/${edition}/versions/${version}/json`;
  const res = await fetch(url);

  return res.json();
}

// Alphavantage data

// https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=TSCO.LON&outputsize=full&apikey=1RR1EC061IE9S8XH

async function getAlphaVantageData({
  freq,
  stockticker,
  exchange,
  outputsize,
  apikey,
}: AlphaVillageDataProps) {
  // construct url using edition version number etc
  const url = `https://www.alphavantage.co/query?function=${freq}&symbol=${stockticker}${
    exchange && `.${exchange}`
  }${outputsize && `&outputsize=${outputsize}`}&apikey=${apikey}`;
  const res = await fetch(url);

  return res.json();
}

const getMostRecentWeekday = (): string => {
  // create a date
  // console.log(new Date());
  return '';
};

// Call tile list
export default async function TestData() {

  // const testAlphaVantageData = await getAlphaVantageData({
  //   freq: 'TIME_SERIES_DAILY',
  //   stockticker: 'TSCO',
  //   exchange: 'LON',
  //   outputsize: 'full',
  //   apikey: '1RR1EC061IE9S8XH',
  // });

  // console.log('testAlphaVantageData',testAlphaVantageData['Time Series (Daily)']['2024-08-19']['4. close'])
  // console.log('testAlphaVantageData',testAlphaVantageData)

  // const tescoStockClosePrice =
  //   testAlphaVantageData?.['Time Series (Daily)']?.['2024-08-19']?.['4. close'];

  // getMostRecentWeekday();

  return (
    <>
      
    </>
  );
}
