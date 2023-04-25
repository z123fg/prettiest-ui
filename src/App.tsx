import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import Button from "@mui/material/Button";
import MyButton from "./components/Button/Button";
import MyPagination from "./components/Pagination/Pagination";
import Pagination from "@mui/material/Pagination";

function App() {
  return (
    <div className="App">
      <MyButton variant="outlined">submit</MyButton>
      <Pagination count={10} />
      <MyPagination count={10} disabled={false} />
    </div>
  );
}

export default App;
