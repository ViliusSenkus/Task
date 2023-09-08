import { useState, useEffect } from "react";
import axios from 'axios';



function App() {
  
  const [data, setData] = useState([]);

  useEffect(()=>{
    axios.get('http://localhost:8000/api/products')
    .then(res=>setData(res.data));
  },[])

 return (
    <div>
      {data.map(item =>
      <div key={item.id}>
        <h1>{item.name}</h1>
        <div>{item.description}</div>
        <div>
          <p>
            <b>{item.price} EUR</b>
            <em> Left in stock </em>
            {item.qnt_warehause} units
          </p>
        </div>
      </div>
      )}
    </div>
  );
}

export default App;
