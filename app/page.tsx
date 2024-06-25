import Image from "next/image";
import { getData } from "./test/apiCall";

export default async function Home() {
  const testData = await getData();
  console.log(testData.dimensions[0].dimension_name);
  return (
    <>
    {testData.dimensions[0].dimension_name}
    <h1>Dashboard</h1>
    </>
  );
}
