// NB this will be a server component because it is in the app folder
// Async function to call data

interface TestDataProps {
  dataset: string;
  edition: string;
  version: string;
}

// TODO
// rearrange the function below so it uses the constructed URL instead of the hardcoded URL so we can use it more generally.
// Next create a bunch of calls to get different data inf GDP emp and unemp using this new function.

async function getTestData({ dataset, edition, version }: TestDataProps) {
  // construct url using edition version number etc
  const url = `https://api.beta.ons.gov.uk/v1/datasets/${dataset}/editions/${edition}/versions/${version}/json`;
  const res = await fetch(
    url
  );

  return res.json();
}


// Call tile list
export default async function TestData() {
  // This calls the fetch function above and saves the data in testONDData object
  // Have 4 calls to different data sets by using getTestData function
  // inputs should be dataset id version number edition number.
  const testONSData = await getTestData({
    dataset: 'TS008',
    edition: '2021',
    version: '1',
  });

  const labourMarketONSData = await getTestData({
    dataset: 'labour-market',
    edition: 'PWT23',
    version: '2 ',
  });

  const inflationONSData = await getTestData({
    dataset: 'consumerpriceinflation',
    edition: 'latest',
    version: '1',
  });


  console.log('testONSData', testONSData);

  return (
    <>
      <p>{testONSData.observations}</p>
      <p>{testONSData.links.dataset_metadata.href}</p>
      <p>{testONSData.dimensions[0].dimension_name}</p>
      {/* <p>{labourMarketONSData}</p> */}
    </>
  );
}
