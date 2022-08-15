import { Chip } from "@mui/material";
import axios from "axios";
import React, { useEffect } from "react";

const Genres = ({
  selectedGenres,
  setSelectedGenres,
  genres,
  setGenres,
  type,
  setCount,
}) => {
  const fetchGenres = async () => {
    axios
      .get(
        `https://api.themoviedb.org/3/genre/${type}/list?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
      )
      .then((data) => {
        console.log(data);
        setGenres(data);
      })
      .catch((data) => console.log(data));
  };
  console.log(genres);
  useEffect(() => {
    fetchGenres();
    console.log(genres);
    // return () => {
    //   setGenres({});
    // };
  }, []);

  return (
    <div style={{ padding: "6px 0" }}>
      {genres?.map((genre) => (
        <Chip />
      ))}
    </div>
  );
};

export default Genres;
