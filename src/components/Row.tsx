import React, { useEffect } from "react";
import axios from "../axios";

interface Rowprops {
  title?: string;
  fetchUrl: string;
  isLargeRow?: boolean;
}

const Row: React.FC<Rowprops> = ({ title, fetchUrl,isLargeRow }) => {
  const [movies, setMovies] = React.useState<
    { poster_path: string; name: string; id: string; backdrop_path: string }[]
  >([]);
  const base_url = "https://image.tmdb.org/t/p/original/";

  // a snippet of code that runs based on a specific condition/variable
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  console.log(movies);

  return (
    <div>
      <p className="flex justify-center m-5">{title}</p>

      <div className="flex gap-5 overflow-x-scroll overflow-y-hidden p-[20px]">
        {movies.map((movie) => (
          <img 
          key = {movie.id}
          className=" w-[100%] object-contain max-h-[100px] transition-transform duration-[450ms] hover:scale-[1.10] cursor-pointer"
          src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} 
          alt={movie.name} />
        ))}
      </div>
    </div>
  );
};

export default Row;
