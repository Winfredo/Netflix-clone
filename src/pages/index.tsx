import Row from "@/components/row";
import requests from "@/requests";

 function Home() {
  return (
    <main>
      <div>
        <p>Winfred</p> 
        <Row title="Netflix Originals" fetchUrl = {requests.fetchNetflixOriginals}/>
        <Row title="Trending Now" fetchUrl = {requests.fetchTrending}/>
      </div>
    </main>
  );
}

export default Home;