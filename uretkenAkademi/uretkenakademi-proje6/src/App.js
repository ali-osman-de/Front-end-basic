import {} from "reactstrap";
import Content from "./Content";
import Navi from "./Navi";
import Loading from "./Loading";
import React, { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState([]);
  const [loading, setloading] = useState(undefined);
  const [completed, setcompleted] = useState(undefined);

  useEffect(() => {
    setTimeout(() => {
      fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) => response.json())
        .then((json) => {
          console.log(json);
          setData(json);
          setloading(true);

          setTimeout(() => {
            setcompleted(true);
          }, 1000);
        });
    }, 2000);
  }, []);

  return (
    <>
      {!completed ? (
        <>
          {!loading ? (
            <div>
              <Loading />
            </div>
          ) : (
            <div>
              <Navi />
            </div>
          )}
        </>
      ) : (
        <>
          <Navi />
          <Content />
        </>
      )}
    </>
  );
}

export default App;
