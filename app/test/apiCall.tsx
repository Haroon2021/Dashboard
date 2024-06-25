// 'use client'
// Async function to call data
export const getData = async () => {
  const searchResponse = await fetch(
    `https://api.beta.ons.gov.uk/v1/datasets/TS008/editions/2021/versions/1/json`
  );

  const results: any = await searchResponse.json();

  return results ;
  
};
