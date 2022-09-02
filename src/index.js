import { setItem, getItem } from "./utils/storage";

import "./main.scss";

document.querySelector("#btn").addEventListener("click", () => {
  const arr = [12, 42, 35, 77, 62, 27, 47];
  console.log(...arr, 123, 456);

  alert("Hello World");

  setItem("token", "sfjnvklpqwo3rjpq3jrp239ur*0qu3r29u3*r93090q380947209");
});
