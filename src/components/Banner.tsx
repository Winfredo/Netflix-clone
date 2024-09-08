import React, { useEffect, useState } from "react";
import axios from "../axios";
import Requests from "../Requests";

interface Movie {
  backdrop_path: string;
  title: string;
  name: string;
  original_name: string;
  overview: any;
  // Add any other properties you need
}

const Banner = () => {
  const [movie, setMovie] = useState<Movie | null>(null);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(Requests.fetchNetflixOriginals);
      const randomMovie =
        request.data.results[
          Math.floor(Math.random() * request.data.results.length)
        ];
      setMovie(randomMovie);
      return request;
    }
    fetchData();
  }, []);

  console.log(movie);

  function truncate(str: string, n: number) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }
  return (
    <header
      className="text-white object-contain h-[70vh] flex items-center "
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundPosition: "center center",
      }}
    >
      <div className="ml-[30px] w-[70%]">
        <h1 className="text-[3rem] font-[600] pb-[5px]">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div>
          <button className="cursor-pointer text-white bg-[#333333] outline-none border-none font-bold rounded-[0.2vw] px-[2rem] py-[0.5rem] mr-[1rem] hover:text-[#000] hover:bg-[#e6e6e6] hover:transition-all hover:duration-300 ">
            Play
          </button>
          <button className="cursor-pointer text-white bg-[#333333] outline-none border-none font-bold rounded-[0.2vw] px-[2rem] py-[0.5rem] mr-[1rem] hover:text-[#000] hover:bg-[#e6e6e6] hover:transition-all hover:duration-300 ">
            My List
          </button>
        </div>

        <div>
          <h1 className="banner">
            {truncate(movie?.overview, 150)}
          </h1>
        </div>
      </div>
    </header>
  );
};

export default Banner;
