import { createTheme, Pagination, ThemeProvider } from "@mui/material";
// import { palette } from "@mui/system";
import React from "react";

const darkTheme = createTheme({
  palette: {
    type: "light",
  },
});
const CustomPagination = ({ setPage, numberOfPages = 10 }) => {
  const handleChange = (page) => {
    setPage(page);
    window.scroll(0, 0);
  };

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        marginTop: 10,
      }}
    >
      <ThemeProvider theme={darkTheme}>
        <Pagination
          count={numberOfPages}
          color="primary"
          onChange={(e) => handleChange(e.target.textContent)}
        />
      </ThemeProvider>
    </div>
  );
};

export default CustomPagination;
