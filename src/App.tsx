import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import Button from "@mui/material/Button";
import MyButton from "./components/Button/Button";
import MyPagination from "./components/Pagination/Pagination";
import Pagination from "@mui/material/Pagination";

function App() {
  const someFunction = (
    e: React.MouseEvent<HTMLButtonElement>,
    newPage: number
  ) => {
    console.log(e, newPage);
  };
  return (
    <div className="App">
      <MyButton variant="outlined">submit</MyButton>
      <Pagination count={10} color={"primary"} />
      <MyPagination
        count={10}
        color="secondary"
        disabled={false}
        size="medium"
        shape="rounded"
        onChange={someFunction}
      />
    </div>
  );
}

export default App;
