import { useState, useEffect } from "react";

export default function App() {
  const [jobIds, setjobIds] = useState([]);
  const [message, setMessage] = useState([]);
  let [num, setNum] = useState(0);

  //Get ids when loadinging
  useEffect(() => {
    const getIds = async () => {
      try {
        let res = await fetch(
          "https://hacker-news.firebaseio.com/v0/jobstories.json"
        );
        let json = await res.json();
        setjobIds(json);
      } catch (err) {
        console.error(err);
      }
    };

    getIds();
  }, []);

  //get first 6 jobs from jobs url
  useEffect(() => {
    const getSix = async () => {
      try {
        const six = jobIds.slice(num, num + 6);
        const final = six.map((id) => {
          return fetch(
            `https://hacker-news.firebaseio.com/v0/item/${id}.json`
          ).then((res) => res.json());
        });

        const getFinal = await Promise.all(final);
        setMessage(getFinal);
      } catch (err) {
        console.error(err);
      }
    };

    getSix();
  }, [jobIds, num]);

  useEffect(() => {
    console.log(jobIds);
  }, [jobIds]);

  useEffect(() => {
    console.log(message);
  }, [message]);

  //When teh load button is clicked, it pulsl more jobs.
  const loadMore = () => {
    setNum((num) => num + 6);
  };

  return (
    <div>
      <div>
        {message.map((item) => (
          <div key={item.by}>
            <div>{item.title}</div>
            <div>{item.by}</div>
            <div>{item.time}</div>
            <br />
          </div>
        ))}
      </div>
      {message.length > 0 && (
        <button onClick={() => loadMore()}>Load more</button>
      )}
    </div>
  );
}
