import React, { useEffect } from "react";
import axios from "../axios";
import Youtube from "react-youtube";
import movieTrailer from "movie-trailer";

interface RowProps {
  title: string;
  fetchUrl: string;
  isLargeRow?: boolean;
  trailerUrl?: string;
  opts?: any;
}

const Row: React.FC<RowProps> = ({ title, fetchUrl, isLargeRow }) => {
  const [movies, setMovies] = React.useState<
    { poster_path: string; name: string; id: string; backdrop_path: string }[]
  >([]);
  const [trailerUrl, setTrailerUrl] = React.useState<string | null>("");
  const base_url = "https://image.tmdb.org/t/p/original/";

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };
  const handleClick = (movie: any) => {
    if (trailerUrl) {
      setTrailerUrl("  ");
    } else {
      movieTrailer(movie?.name || "")
        .then((url: any) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setUrlTrailer(urlParams.get("v"));
        })

        .catch((error: any) => console.log(error));
    }
  };
  return (
    <div className="bg-[#111]">
      <p className=" mx-5 mt-10 font-bold text-[18px]">{title}</p>

      <div className="flex gap-[15px] overflow-x-scroll overflow-y-hidden p-[20px]">
        {movies.map((movie) => (
          <img
            key={movie.id}
            onClick={() => handleClick(movie)}
            className={`w-[100%] object-contain transition-transform duration-[450ms] hover:cursor-pointer 
              ${
                isLargeRow
                  ? "max-h-[250px] hover:scale-[1.09] hover:opacity-100"
                  : "max-h-[100px] hover:scale-[1.10] hover:opacity-100"
              }`}
            src={`${base_url}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
          />
        ))}
      </div>
      {trailerUrl && <Youtube videoId={trailerUrl} opts={opts} />}
    </div>
  );
};

export default Row;
function setUrlTrailer(arg0: string | null) {
  throw new Error("Function not implemented.");
}
