import React from 'react'
// import { GetData } from '../test/apiCall'
import GSKStockData from "../test/GSKData.json" with { type: "json" };
// import barclaysData from "../test/barclaysData.json" with { type: "json" };
import rightmoveData from "../test/rightmoveData.json" with { type: "json" };
import tescoData from "../test/tescoData.json" with { type: "json" };
import { Lateef } from 'next/font/google';

export default async function TestDataFetch() {
  // object.keys
  // order by date
  //this gives the key 
  const datesStockPricesAvailable = Object.keys(GSKStockData["Time Series (Daily)"])
  // console.log('!!!!!!!!!!!',Object.keys(GSKStockData["Time Series (Daily)"]))
  // Select the most recent one you want from time Series daily
  const latestDate = datesStockPricesAvailable[0]
  console.log('latestDate',latestDate)


  // Convert all the date strings to timestamps
  const datesArray = datesStockPricesAvailable.map(date => new Date(date))

  //Picks the most recent date and converts it to date format

const mostRecentDate = new Date(Math.max(...datesArray));

console.log('mostRecentDate.toISOString()',mostRecentDate.toISOString()); // Output the most recent date as an ISO string

const formattedDate = mostRecentDate.split('T')[0]
// const latestDate2 = 

  // console.log('latestDate',latestDate)

  const mostRecentStockPriceData = GSKStockData["Time Series (Daily)"][latestDate]
  console.log('mostRecentStockPriceData',mostRecentStockPriceData)
  const mostRecentOpen = mostRecentStockPriceData[ "1. open"]
  const mostRecentHigh = mostRecentStockPriceData[ "2. high"]
  const mostRecentLow = mostRecentStockPriceData[ "3. low"]
  const mostRecentClose = mostRecentStockPriceData[ "4. close"]
  const mostRecentVolume = mostRecentStockPriceData[ "5. volume"]

  return (
    <>
    <p>{GSKStockData["Meta Data"]["2. Symbol"]}</p>
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
