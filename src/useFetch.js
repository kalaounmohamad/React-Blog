import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      fetch(url)
        .then((res) => {
          if (!res.ok) {
            throw Error("Not okayyyyy");
          }
          return res.json();
        })
        .then((data) => {
          setData(data);
          setIsPending(false);
          setError(null);
        })
        .catch((err) => {
          setIsPending(false);
          setError(err.message);
        });
    }, 1000);
  }, [url]);
  // If I want to make a function run
  // only once at the start on the app I do []
  // this can avoid an infinite loop

  // useEffect(() => {
  //   console.log("use effect ran");
  //   console.log(name);
  // }, [name]);
  //the second component is to specify when this
  // function runs

  return {
    data,
    isPending,
    error,
  };
};

export default useFetch;
