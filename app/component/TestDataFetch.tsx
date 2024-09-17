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
  const mostRecentOpen = mostRecentStockPriceData[ "1. open"]
  const mostRecentHigh = mostRecentStockPriceData[ "2. high"]
  const mostRecentLow = mostRecentStockPriceData[ "3. low"]
  const mostRecentClose = mostRecentStockPriceData[ "4. close"]
  const mostRecentVolume = mostRecentStockPriceData[ "5. volume"]

  
  // optional chaining below



  return (
    <>
    <p>{GSKStockData["Meta Data"]["2. Symbol"]}</p>
    <p>{GSKStockData["Time Series (Daily)"]["2024-09-02"]['1. open']}</p>
    <p>Open</p>
    <p>{mostRecentOpen}</p>
    <p>High</p>
    <p>{mostRecentHigh}</p>
    <p>Low</p>
    <p>{mostRecentLow}</p>
    <p>Close</p>
    <p>{mostRecentClose}</p>
    <p>Volume</p>
    <p>{mostRecentVolume}</p>


    
    </>
  )
}
