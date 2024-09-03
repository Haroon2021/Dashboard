import TestDataFetch from './component/TestDataFetch';
import TestData from './test/apiCall';

export default function Home() {
  return (
    <>
      <h1>Dashboard</h1>
      <TestData />
      <TestDataFetch />
    </>
  );
}
