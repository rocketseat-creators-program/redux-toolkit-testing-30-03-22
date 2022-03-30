export async function fetchResultsRequest() {
  const result = await fetch("http://localhost:3001/results");
  const data = await result.json();
  return data;
}
