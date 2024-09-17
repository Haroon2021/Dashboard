import React from 'react'
// import { GetData } from '../test/apiCall'
import GSKStockData from "../test/GSKData.json" with { type: "json" };
// import barclaysData from "../test/barclaysData.json" with { type: "json" };
import rightmoveData from "../test/rightmoveData.json" with { type: "json" };
import tescoData from "../test/tescoData.json" with { type: "json" };

export default async function TestDataFetch() {
  // object.keys
  // order by date
  //this gives the key 
  const datesStockPricesAvailable = Object.keys(GSKStockData["Time Series (Daily)"])
  console.log('!!!!!!!!!!!',Object.keys(GSKStockData["Time Series (Daily)"]))
  // Select the most recent one you want from time Series daily
  const latestDate = datesStockPricesAvailable[0]
  console.log('latestDate',latestDate)

  const mostRecentStockPriceData = GSKStockData["Time Series (Daily)"][latestDate]
  console.log('mostRecentStockPriceData',mostRecentStockPriceData)
  // optional chaining below



  return (
    <>
    <div>xswpmx </div>
    <p>{GSKStockData["Meta Data"]["2. Symbol"]}</p>
    <p>{GSKStockData["Time Series (Daily)"]["2024-09-02"]['1. open']}</p>


    
    </>
  )
}
