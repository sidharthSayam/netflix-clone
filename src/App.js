import "./App.css";
import Row from "./Row";
import Banner from "./Banner";
import requests from "./requests";
import Navbar from "./Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <Row
        title="Top Rated Movies"
        fetchUrl={requests.fetchTopRated}
        isLargeRow
      />
      <Row title="Popular Movies" fetchUrl={requests.fetchPopular} />
      <Row title="Upcoming Movies" fetchUrl={requests.fetchUpcoming} />
      <Row title="Trending Movies" fetchUrl={requests.fetchTrending} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorror} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedy} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomance} />
      <Row title="Documentries Movies" fetchUrl={requests.fetchDocumentries} />
    </div>
  );
}

export default App;
