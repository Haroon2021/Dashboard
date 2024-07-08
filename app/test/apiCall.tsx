// NB this will be a server component because it is in the app folder
// Async function to call data

async function getTestData() {
  const res = await fetch(
    'https://api.beta.ons.gov.uk/v1/datasets/TS008/editions/2021/versions/1/json'
  );

  return res.json();
}

export default async function TestData() {
  // This calls the fetch function above and saves the data in testONDData object
  const testONSData = await getTestData();
  console.log('testONSData', testONSData);

  return (
    <>
      <p>{testONSData.observations}</p>
      <p>{testONSData.links.dataset_metadata.href}</p>
      <p>{testONSData.dimensions[0].dimension_name}</p>
    </>
  );
}
