import useSWR from "swr";
import "./App.css";

function App() {
  const url = "https://httpstat.us/200?sleep=2000";
  const headers = { Accept: "application/json" };
  const fetcher = (url) => {
    return fetch(url, { headers })
      .then((res) => res.json())
      .then((json) => json.description);
  };
  const { data: status, error, isLoading } = useSWR(url, fetcher);

  if (error) return <div>Failed to load.</div>;
  if (isLoading) return <div>Loading...</div>;

  return <>{status && <p>Status : {status}</p>}</>;
}

export default App;
