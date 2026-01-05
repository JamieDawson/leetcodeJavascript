import { useState, useEffect } from "react";

export default function App() {
  const [message, setMessage] = useState([]);
  const [jobIds, setJobIds] = useState([]);

  useEffect(() => {
    const getIds = async () => {
      try {
        const res = await fetch(
          "https://hacker-news.firebaseio.com/v0/jobstories.json"
        );
        const json = await res.json();
        setJobIds(json);
      } catch {
        console.log("can't get Ids from first call");
      }
    };

    getIds();
  }, []);

  useEffect(() => {
    console.log(jobIds);
  }, [jobIds]);

  useEffect(() => {
    const getFirstSix = async () => {
      try {
        const six = jobIds.slice(0, 6);
        const request = six.map((id) => {
          return fetch(
            `https://hacker-news.firebaseio.com/v0/item/${id}.json`
          ).then((res) => res.json());
        });

        const results = await Promise.all(request);
        setMessage(results);
      } catch (err) {
        console.error(err);
      }
    };

    getFirstSix();
  }, [jobIds]);

  useEffect(() => {
    console.log(message);
  }, [message]);

  /*
const request = jobIds.map((id) => {
  fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`).then(res => res.json());
})

const results = await Promise.add(request);

setMessage(results);

*/

  /*
create an array of promises
store promises in variable with await Promise.all(variable name);
return them
*/

  return <div>"test"</div>;
}
