import React, { useEffect, useState } from 'react';
import axios from 'axios';

function FetchDataFromPHP() {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get('http://localhost/test.php')
      .then(response => setData(response.data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      <h1>Data from PHP</h1>
      {data ? <p>{data.message}</p> : <p>Loading...</p>}
    </div>
  );
}

export default FetchDataFromPHP;
