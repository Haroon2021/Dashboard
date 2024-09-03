import React from 'react'
// import { GetData } from '../test/apiCall'
import GSKStockData from "../test/GSKData.json" with { type: "json" };
// import barclaysData from "../test/barclaysData.json" with { type: "json" };
import rightmoveData from "../test/rightmoveData.json" with { type: "json" };
import tescoData from "../test/tescoData.json" with { type: "json" };

export default async function TestDataFetch() {
  // const test = GetData();
  console.log('!!!!!!!!!!!',GSKStockData["Meta Data"]["2. Symbol"])
  // optional chaining below
  console.log('!!!!!!!!!!!',GSKStockData?.["Meta Data"]?.["2. Symbol"])



  return (
    <>
    <div>TestDataFetch</div>
    
    </>
  )
}
