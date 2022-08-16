import { Chip, createTheme, ThemeProvider } from "@mui/material";
import axios from "axios";
import React, { useEffect } from "react";


const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});
const Genres = ({
  selectedGenres,
  setSelectedGenres,
  genres,
  setGenres,
  type,
  setCount,
}) => {
  const handleSubmit = (genre) => {
    setSelectedGenres([...selectedGenres, genre]);
    setGenres(genres.filter((g) => g.id !== genre.id));
    setCount(1);
  };
  const handleRemove = (genre) => {
    setSelectedGenres(
      selectedGenres.filter((selected) => selected.id !== genre.id)
    );
    setGenres([...genres, genre]);
    setCount(1);
  };

  const fetchGenres = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/genre/${type}/list?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
    );
    
    setGenres(data.genres);
  };

  useEffect(() => {
    fetchGenres();
    return () => {
      setGenres([]);
    };
    // eslint-disable-next-line
  }, []);

  return (
    <div style={{ padding: "6px 0" }}>
      <ThemeProvider theme={darkTheme}>
        {selectedGenres.map((genre) => (
          <Chip
            style={{ margin: 2 }}
            label={genre.name}
            key={genre.id}
            color="primary"
            clickable
            size="small"
            onDelete={() => handleRemove(genre)}
          />
        ))}
        {genres &&
          genres.map((genre) => {
            return (
              <Chip
                style={{ margin: 2 }}
                label={genre.name}
                key={genre.id}
                clickable
                size="small"
                onClick={() => handleSubmit(genre)}
              />
            );
          })}
      </ThemeProvider>
    </div>
  );
};

export default Genres;
