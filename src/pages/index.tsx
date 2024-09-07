import Row from "@/components/Row";
import Requests from "@/Requests";

function Home() {
  return (
    <main>
      <div className="flex flex-col items-center">
        <p className="mb-[20px]">NETFLIX CLONE</p>
        <Row
          title="Netflix Originals"
          fetchUrl={Requests.fetchNetflixOriginals}
          isLargeRow
        />
        <Row title="Trending Movies" fetchUrl={Requests.fetchTrending} />
        <Row title="Top Rated Movies" fetchUrl={Requests.fetchTopRated} />
        <Row title="Action Movies" fetchUrl={Requests.fetchActionMovies} />
        <Row title="Comedy Movies" fetchUrl={Requests.fetchComedyMovies} />
        <Row title="Horror Movies" fetchUrl={Requests.fetchHorrorMovies} />
        <Row title="Romance Movies" fetchUrl={Requests.fetchRomanceMovies} />
        <Row title="Documentaries " fetchUrl={Requests.fetchDocumentaries} />
      </div>
    </main>
  );
}

export default Home;
